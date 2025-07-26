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
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center tracking-wider text-white z-10 px-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                > 
                    Experience Serenity <br className="hidden sm:block"/> at Our <br className="hidden sm:block"/> Wellness Resort
                </motion.div>
                
                <motion.div 
                    className="text-lg sm:text-xl md:text-2xl text-center tracking-wider text-white mt-6 sm:mt-8 max-w-4xl px-4 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    Discover transformation through mindful living, healing therapies and connection with nature.
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
                                
                                <button className="mt-6 sm:mt-8 bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-sm sm:text-base">
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-4">Our Wellness Services</h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">Experience holistic wellness through our carefully curated programs designed to nourish your mind, body, and soul.</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 max-w-7xl mx-auto px-4">
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
                                className="bg-slate-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 cursor-pointer"
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif px-4">Our Philosophy</h2>
                        <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto italic font-serif font-semibold text-center mb-4 px-4">
                            "Wellness is not a destination, but a way of traveling through life with awareness, gratitude, and deep connection to ourselves and the world around us."
                        </p>
                        <p className="text-base sm:text-xl text-white max-w-3xl mx-auto mt-4 font-serif font-light text-center mb-8 sm:mb-12 px-4"> 
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
                         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-4">Your Transformative Journey</h2>
                         <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-serif font-light mb-8 sm:mb-12 px-4">
                             Every guest follows a carefully curated path toward wellness and self-discovery.
                         </p>
                     </motion.div>

                     {/* Flow Chart */}
                     <div className="max-w-6xl mx-auto px-4">
                         <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
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

             {/* Testimonials */}
             <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                                                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif px-4">Transformative Stories</h2>
                         <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-serif font-light mb-8 sm:mb-12 px-4">
                            Hear from guests who have experienced profound transformation during their stay with us.
                        </p>
                                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
                             {/* Testimonial 1 */}
                             <div className="flex flex-col">
                                 <section className="bg-slate-50 p-4 sm:p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                                     <motion.div className="flex items-center mb-4"
                                     initial={{ opacity: 0, y: 50 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.6, delay: 0.1 }}
                                     viewport={{ once: true }}
                                     >
                                         <div className="flex text-yellow-400 text-xl mb-2">
                                             ⭐⭐⭐⭐⭐
                                         </div>
                                     </motion.div>
                                     <p className="text-slate-700 mb-6 italic leading-relaxed">
                                         "Farmyadri was exactly what my soul needed. The peaceful surroundings, organic food, and healing therapies helped me reconnect with myself. I left feeling completely renewed and transformed. This place is truly magical."
                                     </p>
                                     <div className="flex items-center">
                                         <div className="w-12 h-12 bg-slate-300 rounded-full mr-4 flex items-center justify-center">
                                             <span className="text-slate-600 font-bold">S</span>
                                         </div>
                                         <div>
                                             <p className="font-semibold text-slate-900">Sarah Johnson</p>
                                             <p className="text-sm text-slate-600">Wellness Enthusiast</p>
                                         </div>
                                     </div>
                                 </section>
                                 
                                 {/* Read More Button */}
                                 <motion.button 
                                     className="mt-4 bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-slate-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg self-start text-sm sm:text-base"
                                     initial={{ opacity: 0, y: 20 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.6, delay: 0.3 }}
                                     viewport={{ once: true }}
                                     whileHover={{ scale: 1.05 }}
                                 >
                                     Read More
                                 </motion.button>
                             </div>

                             {/* Testimonial 2 */}
                             <section className="bg-slate-50 p-4 sm:p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-83">
                                 <motion.div className="flex items-center mb-4"
                                 initial={{ opacity: 0, y: 50 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.6, delay: 0.1 }}
                                 viewport={{ once: true }}
                                 >
                                     <div className="flex text-yellow-400 text-xl mb-2">
                                         ⭐⭐⭐⭐⭐
                                     </div>
                                 </motion.div>
                                 <p className="text-slate-700 mb-6 italic leading-relaxed">
                                     "The farm-to-table experience was incredible. Every meal was not just delicious but nourishing. The yoga sessions at sunrise and the peaceful atmosphere helped me find inner peace I never knew existed."
                                 </p>
                                 <div className="flex items-center">
                                     <div className="w-12 h-12 bg-slate-300 rounded-full mr-4 flex items-center justify-center">
                                         <span className="text-slate-600 font-bold">M</span>
                                     </div>
                                     <div>
                                         <p className="font-semibold text-slate-900">Michael Chen</p>
                                         <p className="text-sm text-slate-600">Business Executive</p>
                                     </div>
                                 </div>
                             </section>

                             {/* Testimonial 3 */}
                             <section className="bg-slate-50 p-4 sm:p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-83">
                                 <motion.div className="flex items-center mb-4"
                                 initial={{ opacity: 0, y: 50 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.6, delay: 0.1 }}
                                 viewport={{ once: true }}
                                 >
                                     <div className="flex text-yellow-400 text-xl mb-2">
                                         ⭐⭐⭐⭐⭐
                                     </div>
                                 </motion.div>
                                 <p className="text-slate-700 mb-6 italic leading-relaxed">
                                     "This was a life-changing experience. The Ayurvedic treatments, meditation sessions, and connection with nature helped me overcome stress and anxiety. I learned practices I can use daily. Farmyadri is truly transformative."
                                 </p>
                                 <div className="flex items-center">
                                     <div className="w-12 h-12 bg-slate-300 rounded-full mr-4 flex items-center justify-center">
                                         <span className="text-slate-600 font-bold">E</span>
                                     </div>
                                     <div>
                                         <p className="font-semibold text-slate-900">Emma Rodriguez</p>
                                         <p className="text-sm text-slate-600">Yoga Teacher</p>
                                     </div>
                                 </div>
                             </section>
                         </div>
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
 }
