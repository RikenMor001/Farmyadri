
    import { motion } from "framer-motion";
    import bg from "../assets/bg.jpg";

    export default function About(){
        return <div className="min-h-screen">

            {/* Our Story Section */}
            <section className="relative h-screen flex items-center justify-center font-serif"
            style = {{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            >
                <div className="absolute inset-0 bg-black/50"/>
                <motion.div 
                    initial = {{opacity: 0, y: 50}}
                    animate = {{opacity: 1, y: 0}}
                    transition = {{duration: 1.2}}
                    viewport = {{once: true}}
                    className="text-center z-10 px-4 max-w-5xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-wider">
                            About Farmyadri
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-light">
                            Where ancient wisdom meets modern wellness in the heart of the Himalayas
                        </p>
                    </motion.div>
            </section>
        </div>
    }
