import { motion } from "framer-motion"
import { memo } from "react"
import contactus from "../assets/contactus.jpg"

const ContactUs = memo(() => {
    return <div className="min-h-screen">
        {/* Preload critical images */}
        <div style={{ display: 'none' }}>
            <img src={contactus} alt="preload" />
        </div>

        <section className="py-20 relative overflow-hidden"
        >
            {/* Animated Background Image */}
            <motion.div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${contactus})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -20, 0],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col justify-center items-start min-h-[60vh] font-serif">
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start justify-center pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20"
                    >
                        <span className = "text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-serif font-bold drop-shadow-lg tracking-wider mb-2 sm:mb-4">
                            Contact Us
                        </span>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-serif font-light drop-shadow-lg tracking-wider max-w-2xl">
                            Get In Touch With Us
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Contact Information - Left Side */}
                        <div className="space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold text-slate-900 mb-6 font-serif">General Inquiries</h3>
                                
                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 mb-1">Email</h4>
                                            <a href="mailto:rasneet65@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                                                rasneet65@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 mb-1">Address</h4>
                                            <p className="text-slate-600">
                                                Lal Bahadur Shastri Marg<br/>
                                                Mumbai, Maharashtra, India
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 mb-1">Phone</h4>
                                            <a href="tel:+917718849577" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                                                +91 77188 49577
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form - Right Side */}
                        <motion.div 
                            className="bg-white rounded-2xl shadow-xl p-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Send us a Message</h3>
                            
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your first name"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your inquiry..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white py-4 px-6 rounded-lg hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>

                            {/* Additional Information */}
                            <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                                <p className="text-slate-700 leading-relaxed">
                                    Questions about booking a stay at Farmyadri Resort? Our team is always available 
                                    to answer any questions or concerns you may have—big or small. 
                                    Let us help plan your return to the wild.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
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
})

export default ContactUs
