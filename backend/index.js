
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Accommodation, Booking, Payment } = require("./model");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/farmyadri")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// JWT Secret (in production, use environment variable)
const JWT_SECRET = "farmyadri_secret_key_2025";

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access token required" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

// ==================== USER AUTHENTICATION ROUTES ====================

// User Registration
app.post("/api/auth/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user (phone is optional now)
        const userData = {
            firstName,
            lastName,
            email,
            password: hashedPassword
        };

        // Only add phone if it's provided and not empty
        if (phone && phone.trim() !== '') {
            userData.phone = phone.trim();
        }

        const user = new User(userData);
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone || null,
                role: user.role
            },
            token
        });
    } catch (error) {
        console.error("Signup error:", error);
        
        // Handle validation errors more gracefully
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ 
                message: "Validation failed", 
                errors: validationErrors 
            });
        }
        
        res.status(500).json({ message: "Internal server error" });
    }
});

// User Login
app.post("/api/auth/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

        res.json({
            message: "Login successful",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                role: user.role
            },
            token
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get user profile
app.get("/api/auth/profile", authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json({ user });
    } catch (error) {
        console.error("Profile fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ==================== ACCOMMODATION ROUTES ====================

// Get all accommodations
app.get("/api/accommodations", async (req, res) => {
    try {
        const { type, minPrice, maxPrice, guests, available } = req.query;
        let filter = {};

        if (type) filter.type = type;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }
        if (guests) filter.guests = { $gte: Number(guests) };
        if (available !== undefined) filter.isAvailable = available === 'true';

        const accommodations = await Accommodation.find(filter);
        res.json({ accommodations });
    } catch (error) {
        console.error("Accommodations fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get accommodation by ID
app.get("/api/accommodations/:id", async (req, res) => {
    try {
        const accommodation = await Accommodation.findById(req.params.id);
        if (!accommodation) {
            return res.status(404).json({ message: "Accommodation not found" });
        }
        res.json({ accommodation });
    } catch (error) {
        console.error("Accommodation fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Check accommodation availability
app.post("/api/accommodations/:id/availability", async (req, res) => {
    try {
        const { checkIn, checkOut } = req.body;
        const accommodationId = req.params.id;

        // Check if dates are valid
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        if (checkInDate >= checkOutDate) {
            return res.status(400).json({ message: "Check-out date must be after check-in date" });
        }

        // Check for conflicting bookings
        const conflictingBookings = await Booking.find({
            accommodation: accommodationId,
            status: { $in: ['pending', 'confirmed'] },
            $or: [
                {
                    checkIn: { $lt: checkOutDate },
                    checkOut: { $gt: checkInDate }
                }
            ]
        });

        const isAvailable = conflictingBookings.length === 0;
        res.json({ isAvailable, conflictingBookings: conflictingBookings.length });
    } catch (error) {
        console.error("Availability check error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ==================== BOOKING ROUTES ====================

// Create a new booking
app.post("/api/bookings", authenticateToken, async (req, res) => {
    try {
        const {
            accommodationId,
            checkIn,
            checkOut,
            guests,
            specialRequests,
            paymentMethod
        } = req.body;

        // Validate dates
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

        if (nights < 1) {
            return res.status(400).json({ message: "Invalid date range" });
        }

        // Get accommodation details
        const accommodation = await Accommodation.findById(accommodationId);
        if (!accommodation) {
            return res.status(404).json({ message: "Accommodation not found" });
        }

        // Check availability
        const conflictingBookings = await Booking.find({
            accommodation: accommodationId,
            status: { $in: ['pending', 'confirmed'] },
            $or: [
                {
                    checkIn: { $lt: checkOutDate },
                    checkOut: { $gt: checkInDate }
                }
            ]
        });

        if (conflictingBookings.length > 0) {
            return res.status(400).json({ message: "Accommodation not available for selected dates" });
        }

        // Calculate total amount
        const baseAmount = accommodation.price * nights;
        const serviceFee = Math.round(baseAmount * 0.1); // 10% service fee
        const taxes = Math.round(baseAmount * 0.18); // 18% taxes
        const totalAmount = baseAmount + serviceFee + taxes;

        // Create booking
        const booking = new Booking({
            user: req.user._id,
            accommodation: accommodationId,
            checkIn: checkInDate,
            checkOut: checkOutDate,
            guests,
            totalAmount,
            nights,
            specialRequests,
            paymentMethod,
            cancellationPolicy: {
                canCancel: true,
                cancellationDeadline: new Date(checkInDate.getTime() - 24 * 60 * 60 * 1000), // 24 hours before
                refundPercentage: 100
            }
        });

        await booking.save();

        res.status(201).json({
            message: "Booking created successfully",
            booking: {
                id: booking._id,
                checkIn: booking.checkIn,
                checkOut: booking.checkOut,
                guests: booking.guests,
                totalAmount: booking.totalAmount,
                nights: booking.nights,
                status: booking.status
            }
        });
    } catch (error) {
        console.error("Booking creation error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get user's bookings
app.get("/api/bookings", authenticateToken, async (req, res) => {
    try {
        const { status } = req.query;
        let filter = { user: req.user._id };

        if (status) filter.status = status;

        const bookings = await Booking.find(filter)
            .populate('accommodation', 'name type image price')
            .sort({ createdAt: -1 });

        res.json({ bookings });
    } catch (error) {
        console.error("Bookings fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get booking by ID
app.get("/api/bookings/:id", authenticateToken, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate('accommodation', 'name type image price amenities description')
            .populate('user', 'firstName lastName email phone');

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Check if user owns this booking or is admin
        if (booking.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: "Access denied" });
        }

        res.json({ booking });
    } catch (error) {
        console.error("Booking fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Cancel booking
app.patch("/api/bookings/:id/cancel", authenticateToken, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Check if user owns this booking
        if (booking.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Access denied" });
        }

        // Check if booking can be cancelled
        if (booking.status !== 'pending' && booking.status !== 'confirmed') {
            return res.status(400).json({ message: "Booking cannot be cancelled" });
        }

        if (new Date() > booking.cancellationPolicy.cancellationDeadline) {
            return res.status(400).json({ message: "Cancellation deadline has passed" });
        }

        booking.status = 'cancelled';
        await booking.save();

        res.json({ message: "Booking cancelled successfully", booking });
    } catch (error) {
        console.error("Booking cancellation error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ==================== PAYMENT ROUTES ====================

// Process payment
app.post("/api/payments", authenticateToken, async (req, res) => {
    try {
        const {
            bookingId,
            paymentMethod,
            cardDetails,
            upiDetails,
            netbankingDetails
        } = req.body;

        // Get booking
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Check if user owns this booking
        if (booking.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Access denied" });
        }

        // Check if payment is already processed
        if (booking.paymentStatus === 'paid') {
            return res.status(400).json({ message: "Payment already processed" });
        }

        // Generate transaction ID
        const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Create payment record
        const payment = new Payment({
            booking: bookingId,
            user: req.user._id,
            amount: booking.totalAmount,
            paymentMethod,
            cardDetails,
            upiDetails,
            netbankingDetails,
            transactionId
        });

        // Simulate payment processing (in real app, integrate with payment gateway)
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay

        // Update payment status
        payment.status = 'completed';
        payment.gatewayResponse = {
            success: true,
            message: "Payment processed successfully",
            code: "SUCCESS",
            timestamp: new Date()
        };

        await payment.save();

        // Update booking payment status
        booking.paymentStatus = 'paid';
        await booking.save();

        res.json({
            message: "Payment processed successfully",
            payment: {
                id: payment._id,
                transactionId: payment.transactionId,
                amount: payment.amount,
                status: payment.status
            }
        });
    } catch (error) {
        console.error("Payment processing error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get payment details
app.get("/api/payments/:id", authenticateToken, async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id)
            .populate('booking', 'checkIn checkOut guests totalAmount')
            .populate('user', 'firstName lastName email');

        if (!payment) {
            return res.status(404).json({ message: "Payment not found" });
        }

        // Check if user owns this payment
        if (payment.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: "Access denied" });
        }

        res.json({ payment });
    } catch (error) {
        console.error("Payment fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ==================== ADMIN ROUTES ====================

// Get all bookings (admin only)
app.get("/api/admin/bookings", authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Admin access required" });
        }

        const { status, page = 1, limit = 10 } = req.query;
        let filter = {};

        if (status) filter.status = status;

        const skip = (page - 1) * limit;
        const bookings = await Booking.find(filter)
            .populate('user', 'firstName lastName email')
            .populate('accommodation', 'name type')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(Number(limit));

        const total = await Booking.countDocuments(filter);

        res.json({
            bookings,
            pagination: {
                currentPage: Number(page),
                totalPages: Math.ceil(total / limit),
                totalBookings: total,
                hasNext: page * limit < total,
                hasPrev: page > 1
            }
        });
    } catch (error) {
        console.error("Admin bookings fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Update booking status (admin only)
app.patch("/api/admin/bookings/:id/status", authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Admin access required" });
        }

        const { status } = req.body;
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        booking.status = status;
        await booking.save();

        res.json({ message: "Booking status updated successfully", booking });
    } catch (error) {
        console.error("Booking status update error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ==================== HEALTH CHECK ====================

app.get("/api/health", (req, res) => {
    res.json({ 
        status: "OK", 
        message: "Farm Yadri API is running",
        timestamp: new Date().toISOString()
    });
});

// ==================== ERROR HANDLING ====================

// 404 handler
app.use("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error("Global error:", error);
    res.status(500).json({ message: "Internal server error" });
});

app.listen(port, () => {
    console.log(`Farm Yadri server is running on port ${port}`);
});
