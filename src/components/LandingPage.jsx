import { motion } from "framer-motion"

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
        <section className="bg-amber-50 py-8">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-5xl font-bold text-center text-slate-900 mb-6 font-serif">Nature On Your View</h2>
                    <div className="flex items-start gap-8">
                        <div className="text-xl text-left tracking-wider text-slate-900 font-serif flex-1 pl-12 leading-relaxed space-y-4">
                            <p>At Farmyadri, we believe in the power of nature to heal and transform. Our journey began with a vision to create a space where people can reconnect with themselves, nature, and the ancient wisdom of Ayurveda.</p>
                            
                            <p>Farmyadri is a 100% organic farm located in the heart of the Himalayas. It is a place where you can escape the hustle and bustle of city life and reconnect with nature.</p>
                            
                            <p>Farmyadri is a place where you can escape the hustle and bustle of city life and reconnect with nature.</p>
                        </div>
                        <div className="flex-1">
                            {/* Image placeholder - you can add your image here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>   
}
