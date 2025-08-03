import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

export default function NavBar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        closeSidebar()
    }

    const navItems = [
        { name: "Home", href: "/", action: scrollToTop, isLink: true },
        { name: "About Us", href: "/about", action: () => closeSidebar(), isLink: true },
        { name: "Gallery", href: "/gallery", action: () => closeSidebar(), isLink: true },
        { name: "Wellness Program", href: "#wellness", action: () => closeSidebar(), isLink: false },
        { name: "Accommodation", href: "#accommodation", action: () => closeSidebar(), isLink: false },
        { name: "Contact Us", href: "#contact", action: () => closeSidebar(), isLink: false }
    ]

    return (
        <>
            {/* Mini Navbar - Company Info & Contact */}
            <div className="bg-slate-800 text-white py-2 px-4 text-sm border-b border-slate-600">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    {/* Company Name & Contact */}
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
                        <div className="font-semibold text-white">Farm Yadri</div>
                        <div className="flex items-center space-x-4">
                            <a 
                                href="mailto:rasneet65@gmail.com" 
                                className="hover:text-blue-300 transition-colors duration-300 flex items-center"
                            >
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                </svg>
                                rasneet65@gmail.com
                            </a>
                            <div className="flex items-center">
                                <span className="mr-1">📍</span>
                                <span>Lal Bahadur Shastri Marg, Mumbai</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="flex items-center space-x-3">
                        <a 
                            href="https://www.instagram.com/farmyadri?igsh=eXg1Ymk0aHd5emht"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-300 transition-colors duration-300"
                            title="Follow us on Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.facebook.com/share/166Lvzi7VC/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-colors duration-300"
                            title="Follow us on Facebook"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="navbar-container flex justify-between items-center px-4 py-3 border-b-2 border-gray-200 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm w-full max-w-full overflow-hidden" style={{ top: '36px' }}>
                <div className="text-xl sm:text-2xl font-bold tracking-wider hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer hover:scale-105 flex-shrink-0">
                    Farm Yadri
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        item.isLink ? (
                            <Link 
                                key={item.name}
                                to={item.href}
                                className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer"
                                onClick={item.action}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <div 
                                key={item.name}
                                className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer"
                                onClick={item.action}
                            >
                                {item.name}
                            </div>
                        )
                    ))}
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all duration-300 hover:cursor-pointer">
                        Book Now
                    </button>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden flex-shrink-0">
                    <button
                        onClick={toggleSidebar}
                        className="text-slate-700 hover:text-slate-950 transition-colors duration-300 p-1 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isSidebarOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={closeSidebar}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
                    >
                        {/* Sidebar Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-slate-900">Menu</h2>
                            <button
                                onClick={closeSidebar}
                                className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
                            >
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Sidebar Navigation Items */}
                        <nav className="p-6">
                            <div className="space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.isLink ? (
                                            <Link 
                                                to={item.href}
                                                className="text-lg font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 cursor-pointer py-3 border-b border-gray-100 block"
                                                onClick={item.action}
                                            >
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <div 
                                                className="text-lg font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 cursor-pointer py-3 border-b border-gray-100"
                                                onClick={item.action}
                                            >
                                                {item.name}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Book Now Button in Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8"
                            >
                                <button 
                                    className="w-full bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 font-medium"
                                    onClick={closeSidebar}
                                >
                                    Book Now
                                </button>
                            </motion.div>

                            {/* Contact Info in Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-8 pt-6 border-t border-gray-200"
                            >
                                <h3 className="text-sm font-semibold text-slate-900 mb-3">Contact Info</h3>
                                <div className="space-y-2 text-sm text-slate-600">
                                    <p>📍 Lal Bahadur Shastri Marg</p>
                                    <p>Mumbai, 400083</p>
                                    <p>Maharashtra, India</p>
                                    <a 
                                        href="mailto:rasneet65@gmail.com" 
                                        className="block text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                    >
                                        rasneet65@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
