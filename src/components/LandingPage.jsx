import { motion } from "framer-motion"
import farmImage from "../assets/farm.jpg"

export default function LandingPage(){
    return <div>
        
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center h-screen font-serif">
            <motion.div className="text-8xl font-semibold text-center tracking-wider text-slate-900"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            > 
            Experience Serenity <br/> at Our <br/> Wellness Resort
            </motion.div>
            <div className="text-2xl text-center tracking-wider text-slate-900 mt-7">
            Discover transformation through mindful living, healing therapies <br/> and connection with nature.
            </div>
            <div className="flex justify-center items-center mt-7">
            <button className="bg-slate-900 text-white px-5 py-4 rounded-4xl mr-4 hover:bg-slate-700 transition-colors duration-300 cursor-pointer text-lg">
                Book Your Stay
            </button>
            <button className="bg-white text-black px-5 py-4 rounded-4xl hover:bg-black transition-colors duration-300 cursor-pointer text-lg border border-slate-900 hover:text-white">
                Explore Services
            </button>
            </div>
        </section>

        {/* Story Section */}
        <section className="bg-slate-100 py-16">
                <div className="container mx-auto px-4 py-12">
                    <motion.div 
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-8 font-serif">Nature On Your View</h2>
                        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl">
                            <div className="text-lg md:text-xl text-left tracking-wider text-slate-900 font-serif flex-1 pl-4 lg:pl-12 leading-relaxed space-y-6">
                                <p>At Farmyadri, we believe in the power of nature to heal and transform. Our journey began with a vision to create a space where people can reconnect with themselves, nature, and the ancient wisdom of Ayurveda.</p>
                                
                                <p>Farmyadri is a 100% organic farm located in the heart of the Himalayas. It is a place where you can escape the hustle and bustle of city life and reconnect with nature.</p>
                                
                                <p>Farmyadri is a resort and a spa place to relax and rejuvenate with family and friends.</p>
                                
                                <p>From farm-to-table meals made with freshly harvested, organic produce to guided nature walks and yoga sessions at sunrise, every moment at Farmyadri is a step toward holistic wellness. We also offer immersive workshops and retreats that help you reconnect with your inner self, learn sustainable living practices, and embrace the healing rhythms of the natural world.</p>
                                
                                <button className="mt-8 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg">
                                    Learn More About Us
                                </button>
                            </div>
                            <motion.div 
                                className="flex-1 flex justify-center items-center"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img 
                                    src={farmImage} 
                                    alt="FarmYadri organic farm" 
                                    className="rounded-2xl shadow-2xl max-w-full h-auto object-cover"
                                    style={{ maxHeight: '600px' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        
    </div>   
}
