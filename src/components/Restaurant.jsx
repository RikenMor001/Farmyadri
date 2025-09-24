import { motion } from "framer-motion"
import { memo, useState } from "react"

const Restaurant = memo(() => {
    const [activeTab, setActiveTab] = useState('about')

    const menuItems = [
        {
            category: "Appetizers",
            items: [
                { name: "Farm Fresh Salad", description: "Organic greens from our garden with house dressing", price: "₹450", source: "Our Organic Garden" },
                { name: "Herb-Infused Bruschetta", description: "Artisanal bread with fresh herbs and tomatoes", price: "₹380", source: "Local Artisan Bakery" },
                { name: "Mountain Spring Soup", description: "Seasonal vegetables in clear mountain spring water", price: "₹320", source: "Himalayan Springs"}
            ]
        },
        {
            category: "Main Courses",
            items: [
                { name: "Organic Farm Curry", description: "Traditional Indian curry with farm-fresh vegetables", price: "₹650", source: "Our Organic Garden" },
                { name: "Grilled Himalayan Trout", description: "Fresh trout from mountain streams with herbs", price: "₹850", source: "Mountain Streams" },
                { name: "Farmhouse Biryani", description: "Aromatic rice with organic vegetables and spices", price: "₹720", source: "Local Organic Farms" }
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Honey & Herb Ice Cream", description: "Homemade ice cream with local honey and herbs", price: "₹280", source: "Local Bee Farms" },
                { name: "Organic Fruit Tart", description: "Seasonal fruits in whole wheat crust", price: "₹350", source: "Our Fruit Orchards" }
            ]
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Preload critical images */}
            <div style={{ display: 'none' }}>
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="preload" />
                <img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="preload" />
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center font-serif overflow-hidden">
                {/* Animated Background Image */}
                <motion.div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                        x: [0, -10, 0],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                <motion.div 
                    className="text-center z-10 px-4 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 tracking-wider">
                        Farm Yadri Restaurant
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Where Farm-to-Table Meets Fine Dining Excellence
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-lime-500 max-w-3xl mx-auto mt-4 leading-relaxed px-4">
                        The Heart of Farmyadri's Culinary Experience
                    </p>
                </motion.div>
            </section>

            {/* Why We Promote Our Restaurant */}
            <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-800">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-500 mb-6 font-serif">
                            Why Our Restaurant is the Crown Jewel of Farmyadri
                        </h2>
                        <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
                            Our restaurant isn't just a place to eat—it's the soul of our wellness philosophy
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-lime-500 mb-4 font-serif">🌱 The Foundation of Wellness</h3>
                                <p className="text-white leading-relaxed mb-4">
                                    Our restaurant is where our organic farming mission comes to life. Every meal is a celebration of the earth's bounty, 
                                    carefully crafted to nourish not just your body, but your soul.
                                </p>
                                <p className="text-white leading-relaxed">
                                    We believe that true wellness begins with what you eat, and our restaurant serves as the living proof of our commitment 
                                    to sustainable, healthy living.
                                </p>
                            </div>

                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-lime-500 mb-4 font-serif">🍽️ Culinary Excellence</h3>
                                <p className="text-white leading-relaxed mb-4">
                                    Our chefs blend traditional Ayurvedic principles with modern culinary techniques, creating dishes that are both 
                                    delicious and healing.
                                </p>
                                <p className="text-white leading-relaxed">
                                    From farm-fresh vegetables harvested at dawn to aromatic spices sourced from local organic farms, 
                                    every ingredient tells a story of quality and care.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-lime-500 mb-4 font-serif">🌿 Educational Experience</h3>
                                <p className="text-white leading-relaxed mb-4">
                                    Our restaurant serves as a classroom where guests learn about sustainable farming, organic ingredients, 
                                    and the importance of conscious eating.
                                </p>
                                <p className="text-white leading-relaxed">
                                    Through our farm-to-table concept, we educate visitors about the journey of food from seed to plate, 
                                    fostering a deeper connection with nature.
                                </p>
                            </div>

                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-lime-500 mb-4 font-serif">💚 Community Hub</h3>
                                <p className="text-white leading-relaxed mb-4">
                                    More than just a dining space, our restaurant brings together guests, local farmers, and our team 
                                    in a celebration of community and shared values.
                                </p>
                                <p className="text-white leading-relaxed">
                                    It's where stories are shared, friendships are formed, and the Farmyadri family grows stronger 
                                    with every meal.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Restaurant Experience */}
            <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-800">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-500 mb-6 font-serif">
                            A Fine Dining Experience Like No Other
                        </h2>
                        <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
                            Step into our restaurant and discover why it's the most important place in all of Farmyadri
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
                                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-slate-900 text-2xl">🌱</span>
                                </div>
                                <h3 className="text-2xl font-bold text-lime-500 mb-4 font-serif">Farm Fresh</h3>
                                <p className="text-white leading-relaxed">
                                    Every ingredient is harvested from our organic farms within hours of reaching your plate, 
                                    ensuring maximum nutrition and flavor.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
                                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-slate-900 text-2xl">👨‍🍳</span>
                                </div>
                                <h3 className="text-2xl font-bold text-lime-500 mb-4 font-serif">Master Chefs</h3>
                                <p className="text-white leading-relaxed">
                                    Our culinary team combines traditional Ayurvedic knowledge with modern techniques, 
                                    creating dishes that heal as they delight.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
                                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-slate-900 text-2xl">🏔️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-lime-500 mb-4 font-serif">Mountain Views</h3>
                                <p className="text-white leading-relaxed">
                                    Dine surrounded by the majestic Himalayas, where every meal becomes a moment of 
                                    connection with nature's grandeur.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Menu and Sourcing Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-800">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-500 mb-6 font-serif">
                            Our Menu & Ingredient Sources
                        </h2>
                        <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8">
                            Discover our carefully curated menu and learn about the natural, organic sources of our ingredients
                        </p>
                        
                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-12">
                            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-full p-2">
                                <button
                                    onClick={() => setActiveTab('about')}
                                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                                        activeTab === 'about' 
                                            ? 'bg-lime-500 text-slate-900' 
                                            : 'text-white hover:text-lime-500'
                                    }`}
                                >
                                    About Our Sources
                                </button>
                                <button
                                    onClick={() => setActiveTab('menu')}
                                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                                        activeTab === 'menu' 
                                            ? 'bg-lime-500 text-slate-900' 
                                            : 'text-white hover:text-lime-500'
                                    }`}
                                >
                                    Our Menu
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tab Content */}
                    {activeTab === 'about' && (
                        <motion.div 
                            className="max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-3xl font-bold text-lime-500 mb-8 font-serif">Our Natural Ingredient Sources</h3>
                                    <div className="space-y-6">
                                        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                            <h4 className="text-xl font-bold text-lime-500 mb-3">🌱 Our Organic Garden</h4>
                                            <p className="text-white leading-relaxed">
                                                Over 80% of our vegetables and herbs come directly from our certified organic farm. 
                                                We use traditional farming methods, avoiding all chemical pesticides and fertilizers.
                                            </p>
                                        </div>
                                        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                            <h4 className="text-xl font-bold text-lime-500 mb-3">🏔️ Mountain Springs</h4>
                                            <p className="text-white leading-relaxed">
                                                Our water comes from pristine Himalayan springs, naturally filtered through layers 
                                                of mountain rock, providing the purest foundation for all our cooking.
                                            </p>
                                        </div>
                                        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                            <h4 className="text-xl font-bold text-lime-500 mb-3">🌿 Local Organic Farms</h4>
                                            <p className="text-white leading-relaxed">
                                                We partner with local organic farmers within a 50km radius, supporting sustainable 
                                                agriculture and ensuring the freshest seasonal ingredients.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                                        <h4 className="text-2xl font-bold text-lime-500 mb-6 font-serif">Why Natural Matters</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-2"></div>
                                                <p className="text-white">Zero chemical pesticides or fertilizers in our ingredients</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-2"></div>
                                                <p className="text-white">Maximum nutritional value preserved through careful harvesting</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-2"></div>
                                                <p className="text-white">Support for local farmers and sustainable agriculture</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-2"></div>
                                                <p className="text-white">Reduced environmental impact through local sourcing</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-2"></div>
                                                <p className="text-white">Authentic flavors that reflect our region's natural bounty</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'menu' && (
                        <motion.div 
                            className="max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-12">
                                {menuItems.map((category, categoryIndex) => (
                                    <motion.div 
                                        key={category.category}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-2xl font-bold text-lime-500 mb-6 font-serif">{category.category}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {category.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <h4 className="text-lg font-bold text-lime-500">{item.name}</h4>
                                                        <span className="text-lime-500 font-bold">{item.price}</span>
                                                    </div>
                                                    <p className="text-white mb-3 leading-relaxed">{item.description}</p>
                                                    <div className="flex items-center text-sm">
                                                        <span className="text-white/70">Source: </span>
                                                        <span className="text-lime-500 ml-1 font-medium">{item.source}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* E-commerce Link Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-800">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-500 mb-6 font-serif">
                            Take Farmyadri Home With You
                        </h2>
                        <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
                            Experience the taste of Farmyadri wherever you are. Our online store offers organic ingredients, 
                            herbal products, and wellness items sourced directly from our farm.
                        </p>
                        <motion.a
                            href="https://farmyadri.typof.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-lime-500 text-slate-900 px-8 py-4 rounded-full hover:bg-lime-400 transition-all duration-300 font-medium hover:scale-105 shadow-lg text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Visit Our Online Store
                        </motion.a>
                        <p className="text-white/70 mt-4 text-sm">
                            🌱 Organic Ingredients • 🧘 Wellness Products • 🏔️ Himalayan Herbs
                        </p>
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
                                    href="mailto:farmyadri@gmail.com"
                                    className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                                    title="Email us"
                                >
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.instagram.com/farmyadristays?igsh=MW1nY25oNzRubTFwYQ%3D%3D&utm_source=qr"
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
                                <a href="/" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Home</a>
                                <a href="/about" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">About Us</a>
                                <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Gallery</a>
                                <a href="/accomodation" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Accomodation</a>
                                <a href="/restaurant" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Restaurant</a>
                                <a href="/contact-us" className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm">Contact</a>
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
                                        href="mailto:farmyadri@gmail.com" 
                                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
                                    >
                                        farmyadri@gmail.com
                                    </a>
                                </div>
                                <div className="bg-gray-900 p-3 rounded-lg">
                                    <div className="text-gray-300 text-xs space-y-1">
                                        <p className="flex items-center">
                                            <span className="mr-1">📍</span>
                                            Dhamangoan Plot
                                        </p>
                                        <p className="ml-4">Gat No. 829</p>
                                        <p className="ml-4">Ghoti Sinner State Highway</p>
                                        <p className="ml-4">Post. Dhamangoan</p>
                                        <p className="ml-4">Taluka. Igatpuri</p>
                                        <p className="ml-4">Zilla. Nashik</p>
                                        <p className="ml-4">State. Maharashtra</p>
                                        <p className="ml-4">Nandi Hills</p>
                                        <p className="ml-4">Pin Code. 422403</p>
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d73.5626!3d19.6952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0b5c5c5c5c5c%3A0x5da4ed8f8d648c69!2sDhamangoan%2C%20Maharashtra%20422403!5e0!3m2!1sen!2sin!4v1234567890&markers=color:red%7Clabel:F%7C19.6952,73.5626"
                                    width="100%" 
                                    height="120" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                    title="Farm Yadri Location - Dhamangoan, Nashik, Maharashtra"
                                ></iframe>
                                <div className="mt-2 text-gray-300 text-xs">
                                    <p className="font-medium text-white mb-1">📍 Farm Yadri</p>
                                    <p>Dhamangoan, Nashik, Maharashtra</p>
                                    <a 
                                        href="https://www.google.com/maps?q=Dhamangoan+Plot,+Gat+No.+829,+Ghoti+Sinner+State+Highway,+Post.+Dhamangoan,+Taluka.+Igatpuri,+Zilla.+Nashik,+State.+Maharashtra,+Nandi+Hills,+Pin+Code.+422403"
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

export default Restaurant
