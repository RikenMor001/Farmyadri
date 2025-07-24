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
        
        {/* Services Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Our Wellness Services</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Experience holistic wellness through our carefully curated programs designed to nourish your mind, body, and soul.</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Ayurvedic Therapies",
                                description: "Traditional healing treatments using natural herbs and oils for complete rejuvenation.",
                                icon: "🌿"
                            },
                            {
                                title: "Yoga & Meditation",
                                description: "Daily sessions in serene surroundings to enhance your spiritual well-being.",
                                icon: "🧘‍♀️"
                            },
                            {
                                title: "Organic Farm Tours",
                                description: "Explore our sustainable farming practices and connect with nature.",
                                icon: "🌱"
                            },
                            {
                                title: "Wellness Workshops",
                                description: "Learn sustainable living practices and holistic wellness techniques.",
                                icon: "📚"
                            },
                            {
                                title: "Nature Walks",
                                description: "Guided treks through the Himalayan landscape for physical and mental clarity.",
                                icon: "🏔️"
                            },
                            {
                                title: "Farm-to-Table Dining",
                                description: "Fresh, organic meals prepared with ingredients from our own farm.",
                                icon: "🍽️"
                            }
                        ].map((service, index) => (
                            <motion.div 
                                key={index}
                                className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
    </div>   
}
