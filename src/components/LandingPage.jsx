import { motion } from "framer-motion"
import { memo } from "react"
import bg from "../assets/bg.jpg"
import farmImage from "../assets/farm.jpg"
import ga5 from "../assets/gallery/ga5.jpg"

const LandingPage = memo(() => {
    return (
        <div className="min-h-screen">
            {/* Preload critical images */}
            <div style={{ display: 'none' }}>
                <img src={bg} alt="preload" />
                <img src={farmImage} alt="preload" />
            </div>

            {/* Hero Section */}
            <section 
                className="relative flex flex-col justify-center items-center h-screen font-serif overflow-hidden"
            >
                {/* Animated Background Image */}
                <motion.div 
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
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
                
                <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center tracking-wider text-white z-10 px-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                > 
                    Where Nature <br className="hidden sm:block"/> Meets <br className="hidden sm:block"/> Serenity
                </motion.div>
                
                <motion.div 
                    className="text-lg sm:text-xl md:text-2xl text-center tracking-wider text-white mt-6 sm:mt-8 max-w-4xl px-4 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    "In every walk with nature, one receives far more than he seeks."
                </motion.div>
                
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 gap-4 z-10 px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    <button className="bg-slate-950 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer text-base sm:text-lg font-medium hover:scale-105 shadow-lg border border-white w-full sm:w-auto">
                        Book Your Stay
                    </button>
                    <button className="bg-slate-950 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer text-base sm:text-lg font-medium hover:scale-105 shadow-lg border border-white w-full sm:w-auto">
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6 sm:mb-8 font-serif px-4">Nature On Your View</h2>
                        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 max-w-7xl px-4">
                            <div className="text-base sm:text-lg md:text-xl text-left tracking-wider text-slate-900 font-serif flex-1 pl-0 lg:pl-12 leading-relaxed space-y-4 sm:space-y-6">
                                <p>At Farmyadri, we believe in the power of nature to heal and transform. Our journey began with a vision to create a space where people can reconnect with themselves, nature, and the ancient wisdom of Ayurveda.</p>
                                
                                <p>Farmyadri is a 100% organic farm located in the heart of the Himalayas. It is a place where you can escape the hustle and bustle of city life and reconnect with nature.</p>
                                
                                <p>Farmyadri is a resort and a spa place to relax and rejuvenate with family and friends.</p>
                                
                                <p>From farm-to-table meals made with freshly harvested, organic produce to guided nature walks and yoga sessions at sunrise, every moment at Farmyadri is a step toward holistic wellness. We also offer immersive workshops and retreats that help you reconnect with your inner self, learn sustainable living practices, and embrace the healing rhythms of the natural world.</p>
                                
                                <button className="mt-6 sm:mt-8 bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg self-start text-sm sm:text-base cursor-pointer">
                                    Learn More About Us
                                </button>
                            </div>
                            <motion.div 
                                className="flex-1 flex justify-center items-center mt-8 lg:mt-0"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img 
                                    src={farmImage} 
                                    alt="FarmYadri organic farm" 
                                    className="rounded-2xl shadow-2xl max-w-full h-auto object-cover px-4 lg:px-0"
                                    style={{ maxHeight: '400px', minHeight: '300px' }}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-20">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-4">Our Wellness Services</h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">Experience holistic wellness through our carefully curated programs designed to nourish your mind, body, and soul.</p>
                    </motion.div>
                    
                    <div className="max-w-6xl mx-auto">
                        {/* Service 1 - Ayurvedic Therapies */}
                        <motion.div 
                            className="mb-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Ayurvedic Therapies</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                        Experience the ancient wisdom of Ayurveda with our traditional healing treatments. 
                                        Using natural herbs, oils, and time-tested techniques, our therapies provide complete 
                                        rejuvenation for your mind, body, and spirit.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Abhyanga - Traditional oil massage</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Shirodhara - Oil therapy for mind</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Panchakarma - Detoxification</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                                        <img 
                                            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                            alt="Ayurvedic herbs and oils" 
                                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="italic text-lg leading-relaxed">
                                                "The gentle touch of nature's healing hands, guided by centuries of wisdom, 
                                                brings restoration to weary souls and peace to troubled minds."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 2 - Yoga & Meditation */}
                        <motion.div 
                            className="mb-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Yoga & Meditation</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                        Begin each day with the rising sun and the gentle guidance of our experienced teachers. 
                                        Our yoga and meditation sessions are held in serene natural settings, allowing you to 
                                        connect deeply with your inner self and the world around you.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Sunrise Hatha Yoga</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Mindfulness Meditation</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Pranayama Breathing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                                        <img 
                                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                            alt="Yoga in nature" 
                                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="italic text-lg leading-relaxed">
                                                "In the stillness of morning, when the world awakens with the sun, 
                                                we find our center and remember our connection to all that is."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 3 - Organic Farm Experience */}
                        <motion.div 
                            className="mb-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Organic Farm Experience</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                        Walk through our lush organic gardens and learn the art of sustainable farming. 
                                        Experience the joy of harvesting fresh herbs and vegetables, and understand the 
                                        deep connection between the food we eat and our overall well-being.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Guided farm tours</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Herb garden workshops</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Sustainable practices</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                                        <img 
                                            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                            alt="Organic farm garden" 
                                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="italic text-lg leading-relaxed">
                                                "From seed to table, every step is a lesson in patience, care, 
                                                and the beautiful cycle of life that sustains us all."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 4 - Nature Walks */}
                        <motion.div 
                            className="mb-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Nature Walks</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                        Explore the pristine Himalayan landscape with our experienced guides. 
                                        Each walk is a journey of discovery, where you'll learn about local flora, 
                                        fauna, and the ancient wisdom embedded in these sacred mountains.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Guided mountain trails</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Bird watching sessions</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                                            <span className="text-slate-700">Sunset viewpoints</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                                        <img 
                                            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                            alt="Himalayan mountain trails" 
                                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="italic text-lg leading-relaxed">
                                                "In the embrace of these ancient mountains, we find perspective, 
                                                peace, and a reminder of our place in the grand tapestry of life."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div 
                            className="text-center mt-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-slate-700 mb-6 font-serif">
                                Ready to experience these wellness services?
                            </p>
                            <motion.button 
                                className="bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-lg cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Your Wellness Journey
                            </motion.button>
                        </motion.div>
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif px-4">Our Philosophy</h2>
                        <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto italic font-serif font-semibold text-center mb-4 px-4">
                            "Nature is not a place to visit. It is home. And in its embrace, we find our true selves."
                        </p>
                        <p className="text-base sm:text-xl text-white max-w-3xl mx-auto mt-4 font-serif font-light text-center mb-8 sm:mb-12 px-4"> 
                            At Farm Yadri, we believe that the greatest healing comes from reconnecting with the natural world. Our philosophy centers on creating a sanctuary where guests can rediscover their innate connection to the earth, find peace in the rhythm of nature, and experience the profound wisdom that comes from living in harmony with the environment around us.
                        </p>
                    </motion.div>
                </div>
            </section>

             {/* Experience Our Resort */}
             <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-20">
                 <div className="container mx-auto px-4">
                     <motion.div 
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: true }}
                     >
                         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-4">Experience Our Resort</h2>
                         <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-serif font-light mb-8 sm:mb-12 px-4">
                             Immerse yourself in the natural beauty and tranquility of our Himalayan retreat.
                         </p>
                     </motion.div>

                     {/* Resort Features Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                         {/* Luxury Villas */}
                         <motion.div 
                             className="group"
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.1 }}
                             viewport={{ once: true }}
                         >
                             <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                 <div className="relative h-80">
                                     <img 
                                         src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                         alt="Luxury villa with mountain view" 
                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                         <h4 className="text-xl font-bold mb-2 font-serif">Luxury Villas</h4>
                                         <p className="text-sm opacity-90 mb-3">
                                             Elegant accommodations with panoramic mountain views, private balconies, 
                                             and modern amenities that blend seamlessly with nature.
                                         </p>
                                         <div className="flex items-center">
                                             <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                                                 <span className="text-white text-sm font-bold">V</span>
                                             </div>
                                             <span className="text-sm font-medium">Mountain View Suites</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>

                         {/* Farm-to-Table Dining */}
                         <motion.div 
                             className="group"
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.2 }}
                             viewport={{ once: true }}
                         >
                             <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                 <div className="relative h-80">
                                     <img 
                                         src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                         alt="Elegant restaurant dining" 
                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                         <h4 className="text-xl font-bold mb-2 font-serif">Farm-to-Table Dining</h4>
                                         <p className="text-sm opacity-90 mb-3">
                                             Savor fresh, organic meals prepared with ingredients harvested from our own 
                                             gardens, creating a truly farm-to-table experience.
                                         </p>
                                         <div className="flex items-center">
                                             <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                                                 <span className="text-white text-sm font-bold">F</span>
                                             </div>
                                             <span className="text-sm font-medium">Organic Cuisine</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>

                         {/* Spa & Wellness */}
                         <motion.div 
                             className="group"
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.3 }}
                             viewport={{ once: true }}
                         >
                             <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                 <div className="relative h-80">
                                     <img 
                                         src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                         alt="Spa and wellness treatments" 
                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                         <h4 className="text-xl font-bold mb-2 font-serif">Spa & Wellness</h4>
                                         <p className="text-sm opacity-90 mb-3">
                                             Rejuvenate your mind and body with our comprehensive spa treatments 
                                             and wellness programs in serene natural surroundings.
                                         </p>
                                         <div className="flex items-center">
                                             <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                                                 <span className="text-white text-sm font-bold">S</span>
                                             </div>
                                             <span className="text-sm font-medium">Healing Therapies</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>

                         {/* Nature Trails */}
                         <motion.div 
                             className="group"
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.4 }}
                             viewport={{ once: true }}
                         >
                             <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                 <div className="relative h-80">
                                     <img 
                                         src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                         alt="Scenic nature trails" 
                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                         <h4 className="text-xl font-bold mb-2 font-serif">Nature Trails</h4>
                                         <p className="text-sm opacity-90 mb-3">
                                             Explore pristine Himalayan landscapes with guided nature walks, 
                                             bird watching, and breathtaking sunset viewpoints.
                                         </p>
                                         <div className="flex items-center">
                                             <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                                                 <span className="text-white text-sm font-bold">N</span>
                                             </div>
                                             <span className="text-sm font-medium">Mountain Adventures</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>

                         {/* Cultural Experience */}
                         <motion.div 
                             className="group"
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.5 }}
                             viewport={{ once: true }}
                         >
                             <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                 <div className="relative h-80">
                                     <img 
                                         src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                         alt="Traditional cultural experience" 
                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                         <h4 className="text-xl font-bold mb-2 font-serif">Cultural Experience</h4>
                                         <p className="text-sm opacity-90 mb-3">
                                             Immerse yourself in local traditions with music, dance performances, 
                                             and authentic Himalayan cultural experiences.
                                         </p>
                                         <div className="flex items-center">
                                             <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                                                 <span className="text-white text-sm font-bold">C</span>
                                             </div>
                                             <span className="text-sm font-medium">Local Traditions</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>

                         {/* Organic Gardens */}
                         <motion.div 
                             className="group"
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.6 }}
                             viewport={{ once: true }}
                         >
                             <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                 <div className="relative h-80">
                                     <img 
                                         src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                         alt="Lush organic gardens" 
                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                         <h4 className="text-xl font-bold mb-2 font-serif">Organic Gardens</h4>
                                         <p className="text-sm opacity-90 mb-3">
                                             Wander through our lush organic gardens, learn sustainable farming, 
                                             and experience the joy of harvesting fresh produce.
                                         </p>
                                         <div className="flex items-center">
                                             <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                                                 <span className="text-white text-sm font-bold">G</span>
                                             </div>
                                             <span className="text-sm font-medium">Sustainable Living</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>
                     </div>

                     {/* Call to Action */}
                     <motion.div 
                         className="text-center mt-16"
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.7 }}
                         viewport={{ once: true }}
                     >
                         <p className="text-lg text-slate-700 mb-6 font-serif">
                             Ready to experience the magic of Farmyadri?
                         </p>
                         <motion.button 
                             className="bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-lg cursor-pointer"
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                         >
                             Book Your Stay
                         </motion.button>
                     </motion.div>
                 </div>
             </section>

             {/* Transformative Stories - New Enhanced Version */}
             <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-stone-100">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                            Transformative Stories
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Real experiences from our guests who found peace, healing, and transformation in nature's embrace.
                        </p>
                    </motion.div>

                    {/* Hero Story */}
                    <motion.div 
                        className="mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <div className="relative h-96 md:h-[500px]">
                                <img 
                                    src={NIK01823} 
                                    alt="Peaceful mountain retreat" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                                            Finding Peace in the Mountains
                                        </h3>
                                        <p className="text-lg sm:text-xl leading-relaxed mb-6 max-w-3xl">
                                            "After months of stress and burnout, I found myself at Farm Yadri. The moment I stepped onto the property, surrounded by the majestic Himalayas, I felt an immediate sense of calm. The daily yoga sessions at sunrise, the organic farm-to-table meals, and the guided meditation walks transformed not just my vacation, but my entire perspective on life."
                                        </p>
                                        <p className="text-lg opacity-90">
                                            - Sarah M., Corporate Executive
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Photo Grid Stories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Story 1 */}
                        <motion.div 
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64">
                                <img 
                                    src={ga5} 
                                    alt="Traditional Indian curry" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">Traditional Curry</h4>
                                    <p className="text-sm mb-4 opacity-90">
                                        "The authentic Indian curry prepared with fresh spices and organic vegetables was a revelation. Each bite transported me to the heart of traditional Indian cuisine."
                                    </p>
                                    <motion.button 
                                        className="bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Read More
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story 2 */}
                        <motion.div 
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64">
                                <img 
                                    src={NIK01582} 
                                    alt="Fresh Indian spices" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">Spice Garden</h4>
                                    <p className="text-sm mb-4 opacity-90">
                                        "Learning about traditional Indian spices and their healing properties was fascinating. The aromas from our spice garden filled every meal with authenticity."
                                    </p>
                                    <motion.button 
                                        className="bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Read More
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story 3 */}
                        <motion.div 
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64">
                                <img 
                                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Elegant restaurant dining" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">Dining Excellence</h4>
                                    <p className="text-sm mb-4 opacity-90">
                                        "Every meal was a masterpiece of Indian cuisine. The attention to detail, the presentation, and the authentic flavors made each dining experience unforgettable."
                                    </p>
                                    <motion.button 
                                        className="bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Read More
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story 4 */}
                        <motion.div 
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64">
                                <img 
                                    src={NIK01616} 
                                    alt="Fresh organic vegetables" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">Farm Fresh</h4>
                                    <p className="text-sm mb-4 opacity-90">
                                        "Harvesting fresh vegetables from our organic garden and using them in our meals created a connection to food I never experienced before."
                                    </p>
                                    <motion.button 
                                        className="bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Read More
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story 5 */}
                        <motion.div 
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64">
                                <img 
                                    src={NIK01630} 
                                    alt="Paneer curry dish" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">Paneer Delight</h4>
                                    <p className="text-sm mb-4 opacity-90">
                                        "The homemade paneer curry was absolutely divine. The creamy texture and aromatic spices created a dish that was both comforting and exotic."
                                    </p>
                                    <motion.button 
                                        className="bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Read More
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Story 6 */}
                        <motion.div 
                            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64">
                                <img 
                                    src={NIK01715} 
                                    alt="Indian spices and herbs" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">Aromatic Spices</h4>
                                    <p className="text-sm mb-4 opacity-90">
                                        "The blend of traditional Indian spices created such rich, complex flavors. Each meal was a journey through the diverse culinary landscape of India."
                                    </p>
                                    <motion.button 
                                        className="bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Read More
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div 
                        className="text-center mt-12 sm:mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <motion.button 
                            className="bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Begin Your Journey
                        </motion.button>
                    </motion.div>
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
                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Services</a>
                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Bookings</a>
                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Contact</a>
                                 <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">FAQ</a>
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
     )
 })

export default LandingPage
