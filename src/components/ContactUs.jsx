import contactus from '../assets/contactus.jpg'
import { motion } from 'framer-motion'

export default function ContactUs(){
    return <div className="min-h-screen">
        <section className="py-15 relative"
        style={{
            backgroundImage: `url(${contactus})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        >
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
    </div>
}
