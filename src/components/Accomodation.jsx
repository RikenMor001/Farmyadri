import { motion } from "framer-motion"
import { memo, useState, useEffect } from "react"
import { accommodationAPI, formatPrice } from "../services/api"
import { useAuth } from "../context/AuthContext"
import BookingFlow from "./BookingFlow"
import PaymentModal from "./PaymentModal"

const Accomodation = memo(() => {
    const [selectedDates, setSelectedDates] = useState({ checkIn: '', checkOut: '' })
    const [selectedGuests, setSelectedGuests] = useState(2)
    const [selectedAccommodation, setSelectedAccommodation] = useState(null)
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const [accommodations, setAccommodations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const { isAuthenticated } = useAuth()

    console.log('Accommodation component mounted')
    console.log('Current state:', { isLoading, error, accommodationsCount: accommodations.length })

    // Drone shot of multiple Airbnbs/accommodations
    const accomodationBg = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

    // Fetch accommodations from API
    useEffect(() => {
        const fetchAccommodations = async () => {
            try {
                setIsLoading(true)
                console.log('Fetching accommodations...')
                
                // Add timeout to ensure fallback triggers quickly
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Request timeout')), 3000)
                );
                
                const response = await Promise.race([
                    accommodationAPI.getAll(),
                    timeoutPromise
                ]);
                
                console.log('API Response:', response)
                setAccommodations(response.accommodations || [])
            } catch (error) {
                console.error('Error fetching accommodations:', error)
                // Always show sample data when API fails (ensures users always see content)
                console.log('Using sample data as fallback...')
                setAccommodations([
                    {
                        _id: '1',
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
                        isAvailable: true
                    },
                    {
                        _id: '2',
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
                        isAvailable: true
                    },
                    {
                        _id: '3',
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
                        isAvailable: true
                    }
                ])
                setError('') // Clear any previous errors
            } finally {
                setIsLoading(false)
            }
        }

        fetchAccommodations()
    }, [])

    const handleBooking = (accommodation) => {
        setSelectedAccommodation(accommodation)
        setIsBookingModalOpen(true)
    }

    const handleDirectPayment = (accommodation) => {
        setSelectedAccommodation(accommodation)
        setIsPaymentModalOpen(true)
    }

    const closeBookingModal = () => {
        setIsBookingModalOpen(false)
        setSelectedAccommodation(null)
    }

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false)
        setSelectedAccommodation(null)
    }

    const handleDateChange = (type, value) => {
        const newDates = { ...selectedDates, [type]: value }
        setSelectedDates(newDates)
    }

    const handleBookingSuccess = () => {
        // Handle successful booking (e.g., show success message, redirect, etc.)
        alert('Booking successful! Check your email for confirmation.')
        closeBookingModal()
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-slate-900 mx-auto mb-4"></div>
                    <p className="text-slate-700 font-serif text-lg">Loading accommodations...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100">
                <div className="text-center">
                    <div className="text-red-600 text-xl mb-4">⚠️</div>
                    <p className="text-slate-700 font-serif text-lg">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-4 bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    // Check if accommodations array is empty
    if (!isLoading && accommodations.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100">
                <div className="text-center">
                    <div className="text-amber-600 text-xl mb-4">🏠</div>
                    <p className="text-slate-700 font-serif text-lg">No accommodations found</p>
                    <p className="text-slate-600 text-sm mt-2">Please check back later or contact support</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-4 bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                        Refresh
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            {/* Preload critical images */}
            <div style={{ display: 'none' }}>
                <img src={accomodationBg} alt="preload" />
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center font-serif overflow-hidden">
                {/* Animated Background Image */}
                <motion.div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${accomodationBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                        x: [0, -10, 0],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                <motion.div 
                    className="text-center z-10 px-4 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-8 tracking-wider">
                        Our Accommodations
                    </h1>
                                            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4">
                            Choose your perfect retreat from our carefully curated selection of unique accommodations
                        </p>
                        {accommodations.length > 0 && accommodations[0]._id === '1' && (
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg max-w-md mx-auto">
                                <p className="text-xs text-amber-700">
                                    💡 <strong>Demo Mode:</strong> Showing sample data. Install MongoDB to see real data from the database.
                                </p>
                            </div>
                        )}
                </motion.div>
            </section>

            {/* Booking Search Section */}
            <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center font-serif">
                            Find Your Perfect Stay
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Check-in Date */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Check-in</label>
                                <input
                                    type="date"
                                    value={selectedDates.checkIn}
                                    onChange={(e) => handleDateChange('checkIn', e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                            
                            {/* Check-out Date */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Check-out</label>
                                <input
                                    type="date"
                                    value={selectedDates.checkOut}
                                    onChange={(e) => handleDateChange('checkOut', e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                            
                            {/* Guests */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Guests</label>
                                <select
                                    value={selectedGuests}
                                    onChange={(e) => setSelectedGuests(parseInt(e.target.value))}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                                >
                                    {[1,2,3,4,5,6,7,8].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                    ))}
                                </select>
                            </div>
                            
                            {/* Search Button */}
                            <div className="flex items-end sm:col-span-2 lg:col-span-1">
                                <button className="w-full bg-slate-900 text-white py-3 px-4 sm:px-6 rounded-lg hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:cursor-pointer text-sm sm:text-base">
                                    Search
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Accommodations Grid */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50 to-stone-100">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-8 sm:mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 font-serif px-4">
                            Choose Your Perfect Retreat
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                            From luxury villas to cozy treehouses, find the accommodation that speaks to your soul
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                        {accommodations.map((accommodation, index) => (
                            <motion.div 
                                key={accommodation._id}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={accommodation.image} 
                                        alt={accommodation.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-slate-900">
                                        {formatPrice(accommodation.price)}/night
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-4 sm:p-6">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex-1 pr-2">
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{accommodation.name}</h3>
                                            <p className="text-slate-600 text-xs sm:text-sm">{accommodation.type}</p>
                                        </div>
                                        <div className="flex items-center flex-shrink-0">
                                            <span className="text-yellow-500 mr-1">★</span>
                                            <span className="text-xs sm:text-sm font-semibold">{accommodation.rating}</span>
                                            <span className="text-slate-500 text-xs sm:text-sm ml-1">({accommodation.reviews})</span>
                                        </div>
                                    </div>
                                    
                                    {/* Details */}
                                    <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-600 mb-4 gap-2 sm:gap-4">
                                        <span>{accommodation.guests} guests</span>
                                        <span>{accommodation.bedrooms} bedroom{accommodation.bedrooms > 1 ? 's' : ''}</span>
                                        <span>{accommodation.bathrooms} bathroom{accommodation.bathrooms > 1 ? 's' : ''}</span>
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="text-slate-700 mb-4 leading-relaxed">
                                        {accommodation.description}
                                    </p>
                                    
                                    {/* Amenities */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Amenities</h4>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {accommodation.amenities.slice(0, 4).map((amenity, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="bg-slate-100 text-slate-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                                                >
                                                    {amenity}
                                                </span>
                                            ))}
                                            {accommodation.amenities.length > 4 && (
                                                <span className="bg-slate-100 text-slate-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                                                    +{accommodation.amenities.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Price and Book Button */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                                        <div>
                                            <span className="text-xl sm:text-2xl font-bold text-slate-900">{formatPrice(accommodation.price)}</span>
                                            <span className="text-slate-600 text-xs sm:text-sm"> / night</span>
                                        </div>
                                        <motion.button
                                            onClick={() => handleDirectPayment(accommodation)}
                                            className="w-full sm:w-auto bg-slate-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:cursor-pointer text-sm sm:text-base"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book Now
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 sm:py-16 md:py-20">
                 <div className="container mx-auto px-4 sm:px-6">
                     <motion.div 
                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: true }}
                     >
                         {/* Company Info */}
                         <motion.div 
                             initial={{ opacity: 0, x: -50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.8, delay: 0.2 }}
                             viewport={{ once: true }}
                         >
                             <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3 sm:mb-4 text-white">Farm Yadri</h3>
                             <p className="text-gray-300 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
                                 Experience serenity and transformation at our wellness resort nestled in the heart of nature.
                             </p>
                             <div className="flex space-x-2 sm:space-x-3">
                                 <a 
                                     href="mailto:rasneet65@gmail.com"
                                     className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                                     title="Email us"
                                 >
                                     <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                     </svg>
                                 </a>
                                 <a 
                                     href="https://www.instagram.com/farmyadri?igsh=eXg1Ymk0aHd5emht"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 cursor-pointer"
                                     title="Follow us on Instagram"
                                 >
                                     <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                     </svg>
                                 </a>
                                 <a 
                                     href="https://www.facebook.com/share/166Lvzi7VC/"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                                     title="Follow us on Facebook"
                                 >
                                     <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                     </svg>
                                 </a>
                             </div>
                         </motion.div>

                         {/* Navigation Links */}
                         <motion.div 
                             initial={{ opacity: 0, y: 30 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.8, delay: 0.4 }}
                             viewport={{ once: true }}
                         >
                             <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Quick Links</h4>
                             <div className="space-y-3">
                                 <a href="/" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Home</a>
                                 <a href="/about" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">About Us</a>
                                 <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Gallery</a>
                                 <a href="/accomodation" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Accomodation</a>
                                 <a href="/contact-us" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Contact</a>
                             </div>
                         </motion.div>

                         {/* Contact Information */}
                         <motion.div 
                             initial={{ opacity: 0, x: 50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.8, delay: 0.6 }}
                             viewport={{ once: true }}
                         >
                             <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Contact Us</h4>
                             <div className="space-y-3">
                                 <div className="bg-gray-900 p-3 rounded-lg">
                                     <p className="text-white font-semibold text-sm">Rushneet Singh</p>
                                     <p className="text-gray-400 text-xs">For more details</p>
                                 </div>
                                 <div className="bg-gray-900 p-3 rounded-lg">
                                     <a 
                                         href="mailto:rasneet65@gmail.com" 
                                         className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
                                     >
                                         rasneet65@gmail.com
                                     </a>
                                 </div>
                                 <div className="bg-gray-900 p-3 rounded-lg">
                                     <div className="text-gray-300 text-xs space-y-1">
                                         <p className="flex items-center">
                                             <span className="mr-1">📍</span>
                                             Lal Bahadur Shastri Marg
                                         </p>
                                         <p className="ml-4">Mumbai, 400083</p>
                                         <p className="ml-4">Maharashtra, India</p>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>

                         {/* Map Section */}
                         <motion.div 
                             initial={{ opacity: 0, x: 50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.8, delay: 0.8 }}
                             viewport={{ once: true }}
                         >
                             <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Our Location</h4>
                             <div className="bg-gray-900 p-3 rounded-lg">
                                 <iframe 
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sLal%20Bahadur%20Shastri%20Marg%2C%20Mumbai%2C%20Maharashtra%20400083!5e0!3m2!1sen!2sin!4v1234567890&markers=color:red%7Clabel:F%7C19.0760,72.8777"
                                     width="100%" 
                                     height="120" 
                                     style={{ border: 0 }} 
                                     allowFullScreen="" 
                                     loading="lazy" 
                                     referrerPolicy="no-referrer-when-downgrade"
                                     className="rounded-lg"
                                     title="Farm Yadri Location - Lal Bahadur Shastri Marg, Mumbai"
                                 ></iframe>
                                 <div className="mt-2 text-gray-300 text-xs">
                                     <p className="font-medium text-white mb-1">📍 Farm Yadri</p>
                                     <p>Mumbai, Maharashtra</p>
                                     <a 
                                         href="https://www.google.com/maps?q=Lal+Bahadur+Shastri+Marg,+Mumbai,+400083,+Maharashtra,+India"
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors duration-300"
                                     >
                                         View Larger Map
                                     </a>
                                 </div>
                             </div>
                         </motion.div>
                     </motion.div>

                     {/* Bottom Border */}
                     <motion.div 
                         className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: 0.8, delay: 0.8 }}
                         viewport={{ once: true }}
                     >
                         <p className="text-gray-400 text-xs sm:text-sm">
                             © 2025 Farm Yadri. All rights reserved. | Designed with ❤️ for wellness
                         </p>
                     </motion.div> 
                 </div>
             </footer>

            {/* Booking Flow Modal */}
            {isBookingModalOpen && selectedAccommodation && (
                <BookingFlow
                    accommodation={selectedAccommodation}
                    onClose={closeBookingModal}
                    onBookingSuccess={handleBookingSuccess}
                />
            )}

            {/* Payment Modal */}
            {isPaymentModalOpen && selectedAccommodation && (
                <PaymentModal
                    accommodation={selectedAccommodation}
                    onClose={closePaymentModal}
                />
            )}
        </div>
    )
})

export default Accomodation
