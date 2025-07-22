import NavBar from "./components/NavBar"
import { motion } from "framer-motion"

function App() {

  return (
    <div>
      <NavBar/>
      <div className="flex flex-col justify-center items-center h-screen">
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
      </div>
    </div>
  )
}

export default App
