import { motion } from "framer-motion"
import farmImage from "../assets/farm.jpg"
import bg from "../assets/bg.jpg"
import philo2 from "../assets/philo2.jpg"

export default function LandingPage(){
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section 
                className="relative flex flex-col justify-center items-center h-screen font-serif"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                <motion.div 
                    className="text-6xl md:text-8xl font-bold text-center tracking-wider text-white z-10"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                > 
                    Experience Serenity <br/> at Our <br/> Wellness Resort
                </motion.div>
                
                <motion.div 
                    className="text-xl md:text-2xl text-center tracking-wider text-white mt-8 max-w-4xl px-4 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    Discover transformation through mindful living, healing therapies and connection with nature.
                </motion.div>
                
                <motion.div 
                    className="flex flex-col md:flex-row justify-center items-center mt-10 gap-4 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    <button className="bg-slate-950 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer text-lg font-medium hover:scale-105 shadow-lg border border-white">
                        Book Your Stay
                    </button>
                    <button className="bg-slate-950 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer text-lg font-medium hover:scale-105 shadow-lg border border-white">
                        Explore Services
                    </button>
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

            {/* Story Section */}
            <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16">
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
                                className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 cursor-pointer"
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

            {/* Our Philosophy */}
            <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16"
                style={{
                    backgroundImage: `url(${philo2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Our Philosophy</h2>
                        <p className="text-xl text-white max-w-3xl mx-auto italic font-serif font-semibold text-center mb-4">
                            "Wellness is not a destination, but a way of traveling through life with awareness, gratitude, and deep connection to ourselves and the world around us."
                        </p>
                        <p className="text-xl text-white max-w-3xl mx-auto mt-4 font-serif font-light text-center mb-12"> 
                            At Farm Yadri, we believe that every individual carries within them the capacity for profound healing and transformation. Our role is not to fix or change you, but to create the perfect conditions for your own inner wisdom to emerge and guide you toward wholeness.
                        </p>
                    </motion.div>
                </div>
            </section>

                         {/* Your transformative journey */}
             <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16">
                 <div className="container mx-auto px-4">
                     <motion.div 
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: true }}
                     >
                         <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Your Transformative Journey</h2>
                         <p className="text-xl text-slate-600 max-w-3xl mx-auto font-serif font-light mb-12">
                             Every guest follows a carefully curated path toward wellness and self-discovery.
                         </p>
                     </motion.div>

                     {/* Flow Chart */}
                     <div className="max-w-6xl mx-auto">
                         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                             {[
                                 {
                                     step: "1",
                                     title: "Arrival & Welcome",
                                     description: "Begin your journey with a warm welcome and serene check-in experience.",
                                     icon: "🏡"
                                 },
                                 {
                                     step: "2", 
                                     title: "Assessment & Planning",
                                     description: "Work with our wellness experts to create your personalized transformation plan.",
                                     icon: "📋"
                                 },
                                 {
                                     step: "3",
                                     title: "Healing & Restoration", 
                                     description: "Immerse yourself in our spa treatments, yoga sessions, and healing therapies.",
                                     icon: "🧘‍♀️"
                                 },
                                 {
                                     step: "4",
                                     title: "Nourishment",
                                     description: "Enjoy our farm-to-table cuisine designed to nourish your body and soul.",
                                     icon: "🍽️"
                                 },
                                 {
                                     step: "5",
                                     title: "Integration",
                                     description: "Learn practices and techniques you can take home for lasting transformation.",
                                     icon: "✨"
                                 }
                             ].map((item, index) => (
                                 <motion.div 
                                     key={index}
                                     className="flex flex-col items-center text-center flex-1"
                                     initial={{ opacity: 0, y: 50 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.6, delay: index * 0.1 }}
                                     viewport={{ once: true }}
                                 >
                                     {/* Step Circle */}
                                     <div className="relative mb-6">
                                         <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                             {item.step}
                                         </div>
                                         {/* Arrow (except for last item) */}
                                         {index < 4 && (
                                             <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-slate-400 text-2xl">
                                                 →
                                             </div>
                                         )}
                                     </div>
                                     
                                     {/* Icon */}
                                     <div className="text-4xl mb-4">{item.icon}</div>
                                     
                                     {/* Content */}
                                     <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{item.title}</h3>
                                     <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{item.description}</p>
                                 </motion.div>
                             ))}
                         </div>
                     </div>
                 </div>
             </section>
        </div>
    )
}
