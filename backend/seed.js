const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { User, Accommodation } = require('./model');

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/farmyadri")
.then(() => console.log("Connected to MongoDB for seeding"))
.catch(err => console.error("MongoDB connection error:", err));

const sampleAccommodations = [
    {
        name: "Mountain View Villa",
        type: "Luxury Villa",
        price: 4500,
        rating: 4.9,
        reviews: 127,
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        amenities: ["Mountain View", "Private Balcony", "Fireplace", "Kitchen", "Free WiFi", "Parking"],
        description: "Experience luxury in our spacious mountain villa with breathtaking views of the Himalayas. Perfect for families or groups seeking comfort and tranquility.",
        isAvailable: true,
        location: {
            address: "Himalayan Heights",
            city: "Manali",
            state: "Himachal Pradesh",
            country: "India",
            coordinates: { latitude: 32.2432, longitude: 77.1892 }
        }
    },
    {
        name: "Forest Retreat Cabin",
        type: "Wooden Cabin",
        price: 3200,
        rating: 4.8,
        reviews: 89,
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
        amenities: ["Forest View", "Wooden Interior", "Cozy Fireplace", "Outdoor Deck", "Hiking Trails", "Wildlife Watching"],
        description: "Immerse yourself in nature with our rustic yet comfortable wooden cabin surrounded by ancient forests and wildlife.",
        isAvailable: true,
        location: {
            address: "Pine Forest Valley",
            city: "Shimla",
            state: "Himachal Pradesh",
            country: "India",
            coordinates: { latitude: 31.1048, longitude: 77.1734 }
        }
    },
    {
        name: "Riverside Cottage",
        type: "Charming Cottage",
        price: 2800,
        rating: 4.7,
        reviews: 156,
        guests: 3,
        bedrooms: 1,
        bathrooms: 1,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
        amenities: ["River View", "Private Garden", "Fishing Spot", "BBQ Area", "Peaceful Setting", "Bird Watching"],
        description: "A charming cottage by the river, perfect for couples seeking romance and tranquility in a peaceful natural setting.",
        isAvailable: true,
        location: {
            address: "River Bank Retreat",
            city: "Rishikesh",
            state: "Uttarakhand",
            country: "India",
            coordinates: { latitude: 30.0869, longitude: 78.2676 }
        }
    },
    {
        name: "Hilltop Bungalow",
        type: "Modern Bungalow",
        price: 3800,
        rating: 4.9,
        reviews: 203,
        guests: 5,
        bedrooms: 2,
        bathrooms: 2,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        amenities: ["Panoramic Views", "Modern Design", "Large Windows", "Outdoor Terrace", "Mountain Biking", "Stargazing"],
        description: "Modern comfort meets natural beauty in our hilltop bungalow with panoramic views of the entire valley.",
        isAvailable: true,
        location: {
            address: "Eagle's Peak",
            city: "Mussoorie",
            state: "Uttarakhand",
            country: "India",
            coordinates: { latitude: 30.4598, longitude: 78.0620 }
        }
    },
    {
        name: "Treehouse Lodge",
        type: "Unique Treehouse",
        price: 2600,
        rating: 4.6,
        reviews: 78,
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        amenities: ["Treehouse Experience", "Canopy Views", "Rope Bridge", "Nature Sounds", "Unique Stay", "Adventure"],
        description: "Experience the magic of sleeping among the trees in our unique treehouse, perfect for adventurous souls.",
        isAvailable: true,
        location: {
            address: "Canopy Heights",
            city: "Coorg",
            state: "Karnataka",
            country: "India",
            coordinates: { latitude: 12.3375, longitude: 75.8069 }
        }
    },
    {
        name: "Luxury Tent Suite",
        type: "Glamping Tent",
        price: 2200,
        rating: 4.5,
        reviews: 94,
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        amenities: ["Luxury Camping", "Starry Nights", "Campfire", "Outdoor Shower", "Nature Immersion", "Romantic"],
        description: "Glamping at its finest with luxury amenities while staying connected to nature under the starlit sky.",
        isAvailable: true,
        location: {
            address: "Desert Oasis",
            city: "Jaisalmer",
            state: "Rajasthan",
            country: "India",
            coordinates: { latitude: 26.9117, longitude: 70.9228 }
        }
    }
];

// Admin user data
const adminUser = {
    firstName: "Admin",
    lastName: "User",
    email: "admin@farmyadri.com",
    phone: "9876543210",
    password: "admin123",
    role: "admin",
    isVerified: true
};

// Seeding function
async function seedDatabase() {
    try {
        console.log("Starting database seeding...");

        // Clear existing data
        await User.deleteMany({});
        await Accommodation.deleteMany({});
        console.log("Cleared existing data");

        // Create admin user
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(adminUser.password, saltRounds);
        const admin = new User({
            ...adminUser,
            password: hashedPassword
        });
        await admin.save();
        console.log("Admin user created:", admin.email);

        // Create accommodations
        const accommodations = await Accommodation.insertMany(sampleAccommodations);
        console.log(`${accommodations.length} accommodations created`);

        // Create a sample regular user
        const sampleUser = new User({
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            phone: "9876543211",
            password: await bcrypt.hash("password123", saltRounds),
            role: "user",
            isVerified: true
        });
        await sampleUser.save();
        console.log("Sample user created:", sampleUser.email);

        console.log("\n✅ Database seeding completed successfully!");
        console.log("\n📋 Sample Data Created:");
        console.log(`👤 Admin User: ${adminUser.email} / ${adminUser.password}`);
        console.log(`👤 Sample User: ${sampleUser.email} / password123`);
        console.log(`🏠 Accommodations: ${accommodations.length} properties`);
        console.log("\n🚀 You can now start the server with: npm run dev");

    } catch (error) {
        console.error("❌ Seeding failed:", error);
    } finally {
        mongoose.connection.close();
        console.log("Database connection closed");
    }
}

// Run seeding
seedDatabase();
