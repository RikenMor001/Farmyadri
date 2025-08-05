    import { motion } from "framer-motion";
    import { useState, useEffect } from "react";
    import aboutBg from "../assets/NIK01593.jpg"
    import cr1 from "../assets/cr1.jpg"
    import cr2 from "../assets/cr2.jpg"
    import cr3 from "../assets/cr3.jpg"
    import cr4 from "../assets/cr4.jpg"

    export default function About(){
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const storyImages = [
            {
                url: cr1,
                title: "Wild Deer in Nature",
                subtitle: "Where wildlife roams free in the wilderness"
            },
            {
                url: cr2,
                title: "Mountain Waterfall",
                subtitle: "Crystal clear waters flowing from mountain peaks"
            },
            {
                url: cr3,
                title: "Ancient Forest",
                subtitle: "Towering trees reaching for the sky"
            },
            {
                url: cr4,
                title: "Golden Meadows",
                subtitle: "Sunset over rolling hills and grasslands"
            }
        ];

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    prevIndex === storyImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000); // Change image every 5 seconds

            return () => clearInterval(interval);
        }, [storyImages.length]);

        return (
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center font-serif overflow-hidden"
                >
                    {/* Animated Background Image */}
                    <motion.div 
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${aboutBg})`,
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
                        className="text-center z-10 px-4 max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-wider">
                            About Farmyadri
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-light">
                            Where ancient wisdom meets modern wellness in the heart of the Himalayas
                        </p>
                    </motion.div>
                </section>

                {/* Our Story Section - Enhanced with Dynamic Background */}
                <section className="relative h-screen flex items-center justify-center font-serif overflow-hidden">
                    {/* Dynamic Background Images */}
                    {storyImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: currentImageIndex === index ? 1 : 0,
                                scale: currentImageIndex === index ? 1 : 1.1
                            }}
                            transition={{ 
                                duration: 2,
                                ease: "easeInOut"
                            }}
                            style={{
                                backgroundImage: `url(${image.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                        </motion.div>
                    ))}

                    {/* Content Overlay */}
                    <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mb-8"
                        >
                            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider">
                                {storyImages[currentImageIndex].title}
                            </h2>
                            <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
                                {storyImages[currentImageIndex].subtitle}
                            </p>
                        </motion.div>

                        {/* Story Content */}
                        <motion.div 
                            className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    Farmyadri began as a vision in the heart of the Himalayas, where the ancient wisdom of Ayurveda meets the pristine beauty of nature. Our founders, inspired by the transformative power of these sacred mountains, envisioned a sanctuary where modern seekers could reconnect with their authentic selves.
                                </p>
                                <p>
                                    What started as a simple organic farm has evolved into a holistic wellness retreat, where every element—from the food we grow to the therapies we offer—is designed to nurture the mind, body, and spirit. We believe that true healing happens when we align ourselves with the natural rhythms of the earth.
                                </p>
                                <p>
                                    Today, Farmyadri stands as a testament to sustainable living and conscious hospitality, offering guests not just a place to stay, but a transformative experience that lingers long after they return home.
                                </p>
                            </div>
                        </motion.div>

                        {/* Image Indicators */}
                        <motion.div 
                            className="flex justify-center space-x-3 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            {storyImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentImageIndex === index 
                                            ? 'bg-white scale-125' 
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-amber-400 transition-colors duration-300"
                        onClick={() => setCurrentImageIndex(prev => prev === 0 ? storyImages.length - 1 : prev - 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <motion.button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-amber-400 transition-colors duration-300"
                        onClick={() => setCurrentImageIndex(prev => prev === storyImages.length - 1 ? 0 : prev + 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </section>

                {/* Mission & Values Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                                Our Mission & Values
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                To create transformative experiences that reconnect people with nature, themselves, and the ancient wisdom of holistic wellness.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <motion.div 
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-100 shadow-lg hover:shadow-xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white text-2xl">🌿</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Holistic Wellness</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We integrate ancient Ayurvedic wisdom with modern wellness practices to provide comprehensive healing experiences that address the whole person.
                                </p>
                            </motion.div>

                            <motion.div 
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-100 shadow-lg hover:shadow-xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white text-2xl">🌱</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Sustainable Living</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We demonstrate and teach sustainable practices, from organic farming to eco-friendly hospitality, showing how to live in harmony with nature.
                                </p>
                            </motion.div>

                            <motion.div 
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-100 shadow-lg hover:shadow-xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white text-2xl">🧘</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Inner Transformation</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We create sacred spaces and experiences that facilitate deep personal growth, self-discovery, and lasting positive change.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                                Meet Our Team
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                The passionate individuals who make Farmyadri a place of healing and transformation.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Juhi Bhatt */}
                            <motion.div 
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="Juhi Bhatt"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Juhi Bhatt</h3>
                                    <p className="text-amber-600 font-medium mb-3">Founder, Health Coach, Wellness Chef</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Juhi Bhatt is the passionate founder of Prajuri River Acres, an organic wellness retreat in Dehradun. With a background in engineering, she shifted from Mumbai's fast-paced lifestyle to a grounded, nature-centered path. A certified health coach from Hippocrates Wellness, Juhi is also a skilled healthy baker and chef, offering deeply nourishing farm-to-table experiences for body, mind, and spirit.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Rushneet Singh Gandhok */}
                            <motion.div 
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="Rushneet Singh Gandhok"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Rushneet Singh Gandhok</h3>
                                    <p className="text-amber-600 font-medium mb-3">Co-Founder</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Rushneet Singh Gandhok, Co-Founder of Prajuri River Acres, brings global hospitality finesse from Glion Institute, Switzerland. With a keen eye for design and guest experience, he oversees curation, strategy, and operations at the resort. Rushneet ensures that every detail reflects the values of mindful living, sustainability, and the essence of authentic hospitality.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Prashant Bhatt */}
                            <motion.div 
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="Prashant Bhatt"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Prashant Bhatt</h3>
                                    <p className="text-amber-600 font-medium mb-3">Founder</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Prashant Bhatt, a marine engineer with 11 years at AP Moller Maersk, founded Prajuri River Acres in 2021. He transformed barren land into an organic sanctuary using permaculture, cow-based, and nakshatra farming. As a certified yoga teacher and sound healer, Prashant brings mindful wellness to the retreat, combining hands-on farming with healing practices.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Maninder Kaur Bedi */}
                            <motion.div 
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="Maninder Kaur Bedi"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Maninder Kaur Bedi</h3>
                                    <p className="text-amber-600 font-medium mb-3">Founder, Visionary, Land Developer</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Maninder Kaur Bedi, Founder and Director of Prajuri River Acres, is the heart behind its vision. With decades of work in social impact and community development, she leads the estate's philosophy and land planning. Her wisdom and compassion shape the retreat into a soulful space rooted in simplicity, sustainability, and nature's healing energy.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Vikrant Bhatt */}
                            <motion.div 
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="Vikrant Bhatt"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Vikrant Bhatt</h3>
                                    <p className="text-amber-600 font-medium mb-3">General Manager</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Vikrant Bhatt, a B.Tech graduate from Graphic Era University (2009–2013), has served as General Manager of Prajuri River Acres since 2024. Despite being wheelchair-bound since a 2015 accident, his resilience fuels his leadership. Vikrant oversees daily operations, staff training, wellness programs, and sustainability efforts, ensuring seamless service and memorable guest experiences.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Wellness Team */}
                            <motion.div 
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="Wellness Team"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Our Wellness Team</h3>
                                    <p className="text-amber-600 font-medium mb-3">Healing Practitioners</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Our certified Ayurvedic practitioners, yoga instructors, and wellness experts bring decades of combined experience in holistic healing and transformative practices, ensuring every guest receives personalized care and guidance.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Sustainability Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif">
                                        Our Commitment to Sustainability
                                    </h2>
                                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                        <p>
                                            At Farmyadri, sustainability isn't just a practice—it's a way of life. We believe that true wellness extends beyond individual health to encompass the health of our planet and communities.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                                                <span className="text-slate-700">100% organic farming practices</span>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                                                <span className="text-slate-700">Solar energy and renewable resources</span>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                                                <span className="text-slate-700">Zero-waste initiatives</span>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                                                <span className="text-slate-700">Local community partnerships</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    className="relative"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                        <img 
                                            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                            alt="Sustainable farming practices" 
                                            className="w-full h-96 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <p className="text-lg italic font-light">
                                                "We don't inherit the earth from our ancestors; we borrow it from our children."
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div 
                            className="max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                                Begin Your Journey
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Ready to experience the transformative power of nature and ancient wisdom? Join us at Farmyadri for an unforgettable journey of healing and discovery.
                            </p>
                            <motion.button 
                                className="bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-lg cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Your Transformative Experience
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
                                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc  1%3A0x5da4ed8f8d648c69!2sLal%20Bahadur%20Shastri%20Marg%2C%20Mumbai%2C%20Maharashtra%20400083!5e0!3m2!1sen!2sin!4v1234567890&markers=color:red%7Clabel:F%7C19.0760,72.8777"
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
