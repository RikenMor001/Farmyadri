import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "../context/AuthContext"
import AuthModal from "./Auth/AuthModal"

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [showSignupFirst, setShowSignupFirst] = useState(false)
    const location = useLocation()
    const { user, logout, isAuthenticated } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/gallery", label: "Gallery" },
        { path: "/accomodation", label: "Accommodation" },
        { path: "/contact-us", label: "Contact" }
    ]

    const handleLogout = () => {
        logout()
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                isScrolled 
                    ? "bg-white/95 backdrop-blur-md shadow-lg" 
                    : "bg-transparent"
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-xl sm:text-2xl font-bold font-serif"
                            >
                                <span className={isScrolled ? "text-slate-900" : "text-white"}>
                                    Farm Yadri
                                </span>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative font-medium transition-colors duration-300 ${
                                        isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white hover:text-amber-200"
                                    }`}
                                >
                                    {link.label}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Authentication & Mobile Menu Button */}
                        <div className="flex items-center space-x-4">
                            {/* Auth Buttons - Desktop */}
                            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                                {isAuthenticated ? (
                                    <div className="flex items-center space-x-3">
                                        <span className={`text-sm font-medium ${
                                            isScrolled ? "text-slate-700" : "text-white"
                                        }`}>
                                            Welcome, {user?.firstName}
                                        </span>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 text-sm"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => {
                                                setShowSignupFirst(false)
                                                setIsAuthModalOpen(true)
                                            }}
                                            className={`px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium ${
                                                isScrolled 
                                                    ? "text-slate-700 hover:text-slate-900" 
                                                    : "text-white hover:text-amber-200"
                                            }`}
                                        >
                                            Sign In
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowSignupFirst(true)
                                                setIsAuthModalOpen(true)
                                            }}
                                            className="bg-slate-900 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 text-xs sm:text-sm font-medium"
                                        >
                                            Sign Up
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                                    isScrolled ? "text-slate-700" : "text-white"
                                }`}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
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
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg"
                        >
                            <div className="container mx-auto px-4 py-6">
                                <div className="flex flex-col space-y-5">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`font-medium transition-colors duration-300 text-base py-2 px-3 rounded-lg ${
                                                location.pathname === link.path
                                                    ? "text-amber-600 bg-amber-50"
                                                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    
                                    {/* Mobile Auth Section */}
                                    <div className="pt-4 border-t border-slate-200">
                                        {isAuthenticated ? (
                                            <div className="space-y-4">
                                                <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                                                    Welcome, <span className="font-semibold">{user?.firstName}</span>
                                                </div>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300 text-sm font-medium"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                <div className="space-y-3">
                                                    <button
                                                        onClick={() => {
                                                            setShowSignupFirst(false)
                                                            setIsAuthModalOpen(true)
                                                            setIsMobileMenuOpen(false)
                                                        }}
                                                        className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300 text-sm font-medium"
                                                    >
                                                        Sign In
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setShowSignupFirst(true)
                                                            setIsAuthModalOpen(true)
                                                            setIsMobileMenuOpen(false)
                                                        }}
                                                        className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300 text-sm font-medium"
                                                    >
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Auth Modal */}
            <AuthModal 
                isOpen={isAuthModalOpen} 
                onClose={() => setIsAuthModalOpen(false)} 
                showSignupFirst={showSignupFirst}
            />
        </>
    )
}

export default NavBar
