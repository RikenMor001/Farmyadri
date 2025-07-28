import { motion } from "framer-motion";
import about from '../assets/about.jpg'

export default function About(){
    return (
        <div className="min-h-screen">
            {/* About Us */}
            <section className="container mx-auto px-4 md:py-24 bg-gradient-to-br from-amber-50 to-stone-100 py-16 font-serif"
            style={{
                backgroundImage: `url(${about})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                        Discover the story behind Prajuri River Acres and our mission to create transformative wellness experiences.
                    </p>
                </motion.div>
            </section>

            {/* Our Mission */}
            <section>
                
            </section>
        </div>
    )
}
