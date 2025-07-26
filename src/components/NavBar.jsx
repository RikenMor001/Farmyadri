import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function NavBar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Gallery", href: "#gallery" },
        { name: "Wellness Program", href: "#wellness" },
        { name: "Accommodation", href: "#accommodation" },
        { name: "Contact Us", href: "#contact" }
    ]

    return (
        <>
            {/* Main Navbar */}
            <div className="flex justify-between items-center px-4 py-3 border-b-2 border-gray-200 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-bold tracking-wider hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer hover:scale-105">
                    Farm Yadri
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <div 
                            key={item.name}
                            className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer"
                        >
                            {item.name}
                        </div>
                    ))}
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all duration-300 hover:cursor-pointer">
                        Book Now
                    </button>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-slate-700 hover:text-slate-950 transition-colors duration-300 p-1"
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
                                        <div 
                                            className="text-lg font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 cursor-pointer py-3 border-b border-gray-100"
                                            onClick={closeSidebar}
                                        >
                                            {item.name}
                                        </div>
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
