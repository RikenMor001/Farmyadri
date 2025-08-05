import contactus from '../assets/contactus.jpg'
import { motion } from 'framer-motion'

export default function ContactUs(){
    return <div className="min-h-screen">
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
                    className="flex flex-col items-start justify-center pl-8 sm:pl-12 md:pl-16 lg:pl-20"
                    >
                        <span className = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif font-bold drop-shadow-lg tracking-wider mb-4">
                            Contact Us
                        </span>
                        <p className="text-lg sm:text-xl md:text-2xl text-white font-serif font-light drop-shadow-lg tracking-wider max-w-2xl">
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
    </div>
}
