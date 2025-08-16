const mongoose = require('mongoose');

// User Schema for authentication
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        maxlength: [50, 'First name cannot exceed 50 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        maxlength: [50, 'Last name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
        type: String,
        required: false, // Made optional
        trim: true,
        validate: {
            validator: function(v) {
                // If phone is not provided (undefined/null/empty), it's valid
                if (!v || v === '') return true;
                // If phone is provided, validate the format
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Please enter a valid 10-digit phone number or leave empty'
        },
        default: undefined // Explicitly set default to undefined
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Accommodation Schema
const accommodationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Accommodation name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    type: {
        type: String,
        required: [true, 'Accommodation type is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating cannot be negative'],
        max: [5, 'Rating cannot exceed 5']
    },
    reviews: {
        type: Number,
        default: 0,
        min: [0, 'Reviews cannot be negative']
    },
    guests: {
        type: Number,
        required: [true, 'Maximum guests is required'],
        min: [1, 'Must accommodate at least 1 guest']
    },
    bedrooms: {
        type: Number,
        required: [true, 'Number of bedrooms is required'],
        min: [1, 'Must have at least 1 bedroom']
    },
    bathrooms: {
        type: Number,
        required: [true, 'Number of bathrooms is required'],
        min: [1, 'Must have at least 1 bathroom']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required']
    },
    amenities: [{
        type: String,
        trim: true
    }],
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [500, 'Description cannot exceed 500 characters']
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    location: {
        address: String,
        city: String,
        state: String,
        country: String,
        coordinates: {
            latitude: Number,
            longitude: Number
        }
    }
}, {
    timestamps: true
});

// Booking Schema
const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User reference is required']
    },
    accommodation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accommodation',
        required: [true, 'Accommodation reference is required']
    },
    checkIn: {
        type: Date,
        required: [true, 'Check-in date is required']
    },
    checkOut: {
        type: Date,
        required: [true, 'Check-out date is required']
    },
    guests: {
        type: Number,
        required: [true, 'Number of guests is required'],
        min: [1, 'Must have at least 1 guest']
    },
    totalAmount: {
        type: Number,
        required: [true, 'Total amount is required'],
        min: [0, 'Total amount cannot be negative']
    },
    nights: {
        type: Number,
        required: [true, 'Number of nights is required'],
        min: [1, 'Must book at least 1 night']
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'
    },
    specialRequests: {
        type: String,
        maxlength: [500, 'Special requests cannot exceed 500 characters']
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed', 'refunded'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['card', 'upi', 'netbanking'],
        required: [true, 'Payment method is required']
    },
    cancellationPolicy: {
        canCancel: {
            type: Boolean,
            default: true
        },
        cancellationDeadline: {
            type: Date
        },
        refundPercentage: {
            type: Number,
            default: 100
        }
    }
}, {
    timestamps: true
});

// Payment Schema
const paymentSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: [true, 'Booking reference is required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User reference is required']
    },
    amount: {
        type: Number,
        required: [true, 'Payment amount is required'],
        min: [0, 'Amount cannot be negative']
    },
    currency: {
        type: String,
        default: 'INR'
    },
    paymentMethod: {
        type: String,
        enum: ['card', 'upi', 'netbanking'],
        required: [true, 'Payment method is required']
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'],
        default: 'pending'
    },
    transactionId: {
        type: String,
        unique: true,
        sparse: true
    },
    gatewayResponse: {
        success: Boolean,
        message: String,
        code: String,
        timestamp: Date
    },
    cardDetails: {
        last4Digits: String,
        cardType: String,
        expiryMonth: String,
        expiryYear: String
    },
    upiDetails: {
        upiId: String,
        vpa: String
    },
    netbankingDetails: {
        bankName: String,
        accountType: String
    },
    refundDetails: {
        refundAmount: Number,
        refundReason: String,
        refundDate: Date
    }
}, {
    timestamps: true
});

// Create indexes for better performance
userSchema.index({ email: 1 });
accommodationSchema.index({ isAvailable: 1, type: 1 });
bookingSchema.index({ user: 1, status: 1 });
bookingSchema.index({ accommodation: 1, checkIn: 1, checkOut: 1 });
paymentSchema.index({ booking: 1 });
paymentSchema.index({ transactionId: 1 });

// Create models
const User = mongoose.model('User', userSchema);
const Accommodation = mongoose.model('Accommodation', accommodationSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    User,
    Accommodation,
    Booking,
    Payment
};
