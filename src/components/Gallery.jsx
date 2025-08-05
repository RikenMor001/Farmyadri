import { motion } from "framer-motion"
import { memo, useMemo } from "react"
import { Link } from "react-router-dom"
import galleryBg from "../assets/philo2.jpg"
import ga1 from "../assets/gallery/ga1.jpg"
import ga2 from "../assets/gallery/ga2.jpg"
import ga3 from "../assets/gallery/ga3.jpg"
import ga4 from "../assets/gallery/ga4.jpg"
import ga5 from "../assets/gallery/ga5.jpg"
import ga6 from "../assets/gallery/ga6.jpg"
import ga7 from "../assets/gallery/ga7.jpg"
import ga8 from "../assets/gallery/ga8.jpg"
import ga9 from "../assets/gallery/ga9.jpg"
import ga10 from "../assets/gallery/ga10.jpg"
import ga11 from "../assets/gallery/ga11.jpg"
import ga12 from "../assets/gallery/ga12.jpg"
import ga13 from "../assets/gallery/ga13.jpg"

const Gallery = memo(() => {
    const galleryImages = useMemo(() => [
        {
            src: ga1,
            alt: "Mountain Vista"
        },
        {
            src: ga2,
            alt: "Organic Gardens"
        },
        {
            src: ga3,
            alt: "Wellness Spa"
        },
        {
            src: ga4,
            alt: "Yoga Pavilion"
        },
        {
            src: ga5,
            alt: "Farm-to-Table Dining"
        },
        {
            src: ga6,
            alt: "Nature Trails"
        },
        {
            src: ga7,
            alt: "Luxury Accommodations"
        },
        {
            src: ga8,
            alt: "Meditation Garden"
        },
        {
            src: ga9,
            alt: "Cultural Experience"
        },
        {
            src: ga10,
            alt: "Ayurvedic Therapies"
        },
        {
            src: ga11,
            alt: "Sunset Views"
        },
        {
            src: ga12,
            alt: "Wildlife Sanctuary"
        },
        {
            src: ga13,
            alt: "Mountain Retreat"
        }
    ], [])

    return (
        <div className="min-h-screen">
            {/* Preload critical images */}
            <div style={{ display: 'none' }}>
                <img src={galleryBg} alt="preload" />
                <img src={ga1} alt="preload" />
                <img src={ga2} alt="preload" />
                <img src={ga3} alt="preload" />
                <img src={ga4} alt="preload" />
                <img src={ga5} alt="preload" />
                <img src={ga6} alt="preload" />
                <img src={ga7} alt="preload" />
                <img src={ga8} alt="preload" />
                <img src={ga9} alt="preload" />
                <img src={ga10} alt="preload" />
                <img src={ga11} alt="preload" />
                <img src={ga12} alt="preload" />
                <img src={ga13} alt="preload" />
            </div>

            {/* Hero Section */}
            <section 
                className="relative flex flex-col justify-center items-center h-screen font-serif overflow-hidden"
            >
                {/* Animated Background Image */}
                <motion.div 
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: `url(${galleryBg})`,
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center tracking-wider text-white z-10 px-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                > 
                    Gallery
                </motion.div>
                
                <motion.div 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-center tracking-wider text-white mt-4 sm:mt-6 md:mt-8 max-w-4xl px-4 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    "Capturing moments of serenity and beauty in nature's embrace"
                </motion.div>
                
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-4 z-10 px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link to="/accommodation">
                        <button className="bg-slate-950 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer text-sm sm:text-base md:text-lg font-medium hover:scale-105 shadow-lg border border-white w-full sm:w-auto">
                            View All Photos
                        </button>
                    </Link>
                    <Link to="/accomodation">
                        <button className="bg-slate-950 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer text-sm sm:text-base md:text-lg font-medium hover:scale-105 shadow-lg border border-white w-full sm:w-auto">
                            Book Your Stay
                        </button>
                    </Link>
                </motion.div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Gallery Introduction */}
            <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16">
                <div className="container mx-auto px-4 py-12">
                    <motion.div 
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6 sm:mb-8 font-serif px-4">Visual Journey Through Farmyadri</h2>
                        <div className="text-base sm:text-lg md:text-xl text-center tracking-wider text-slate-900 font-serif max-w-4xl px-4 leading-relaxed space-y-4 sm:space-y-6">
                            <p>Immerse yourself in the visual splendor of our Himalayan retreat through our carefully curated gallery. Each image tells a story of tranquility, natural beauty, and the transformative power of connecting with nature.</p>
                            
                            <p>From the majestic mountain vistas to the intimate moments of wellness and relaxation, our gallery captures the essence of what makes Farmyadri a truly special place for healing and rejuvenation.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Gallery Grid */}
            <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-4">Our Photo Collection</h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">Discover the beauty and serenity of our wellness retreat through these stunning photographs.</p>
                    </motion.div>
                    
                    {/* First Row - 4 images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-6 sm:mb-8">
                        {galleryImages.slice(0, 4).map((image, index) => (
                            <motion.div 
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 sm:h-72 md:h-80">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Second Row - 4 images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-6 sm:mb-8">
                        {galleryImages.slice(4, 8).map((image, index) => (
                            <motion.div 
                                key={index + 4}
                                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (index + 4) * 0.05 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 sm:h-72 md:h-80">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Third Row - 4 images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-6 sm:mb-8">
                        {galleryImages.slice(8, 12).map((image, index) => (
                            <motion.div 
                                key={index + 8}
                                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (index + 8) * 0.05 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 sm:h-72 md:h-80">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Fourth Row - 1 image centered */}
                    <div className="flex justify-center max-w-7xl mx-auto">
                        <motion.div 
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer w-full md:w-1/2 lg:w-1/3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64 sm:h-72 md:h-80">
                                <img 
                                    src={galleryImages[12].src} 
                                    alt={galleryImages[12].alt} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div 
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-slate-700 mb-6 font-serif">
                            Ready to experience the beauty of Farmyadri in person?
                        </p>
                        <motion.button 
                            className="bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/accomodation" className="text-white">
                                Book Your Stay
                            </Link>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-20">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto"
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
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Home</a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">About Us</a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Gallery</a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Services</a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Bookings</a>
                                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Contact</a>
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
                        className="border-t border-gray-800 mt-12 pt-8 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 text-sm">
                            © 2025 Farm Yadri. All rights reserved. | Designed with ❤️ for wellness
                        </p>
                    </motion.div> 
                </div>
            </footer>
        </div>
    )
})

export default Gallery 
