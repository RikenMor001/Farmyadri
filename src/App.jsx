import NavBar from "./components/NavBar"
import { motion } from "framer-motion"

function App() {

  return (
    <div>
      <NavBar/>
      <div className="flex justify-center items-center h-screen">
        <motion.div className="text-8xl font-semibold text-center tracking-wider text-slate-900"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        > 
          Experience Serenity <br/> at Our <br/> Wellness Resort
        </motion.div>
      </div>
    </div>
  )
}

export default App
