
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";
import { useEffect, useState } from "react";
import cr1 from "../assets/cr1.jpg";
import cr2 from "../assets/cr2.jpg";
import cr3 from "../assets/cr3.jpg";
import cr4 from "../assets/cr4.jpg";

export default function About(){

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const storyImages = [{
        url: cr1,
        title: "Wild deer",
        subtitle: "Where wildlife roams free"
    }, {
        url: cr2,
        title: "Mountain waterfall",
        subtitle: "Crystal clear water falls from the mountain"
    }, {
        url: cr3,
        title: "Ancient forest",
        subtitle: "Towering trees reaching for the sky"
    }, {
        url: cr4,
        title: "Golden Meadows",
        subtitle: "Sunset over the rolling hills"
    }]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === storyImages.length - 1 ? 0: prevIndex + 1)
        }, 5000)
    }, [storyImages.length])

    return <div className="min-h-screen">

        {/* Hero Section */}
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

        {/* Our Story Section */}
        <section className="relative h-screen flex  items-center justify-center font-serif overflow-hidden">
            {storyImages.map((img, index) => (
                <motion.div
                key = {index}
                className="absolute inset-0"
                initial = {{opacity:0}}
                animate = {{opacity: currentImageIndex === index ? 1 : 0, scale: currentImageIndex === index ? 1 : 1.1}}
                transition = {{duration: 2, ease: 'easeInOut'}}
                style = {{
                    backgroundImage: `url${Image.url}`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}

                >
                </motion.div>
            ))}
        </section>
    </div>
}
