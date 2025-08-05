import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
import About from "./components/About"
import Gallery from "./components/Gallery"
import ContactUs from "./components/ContactUs"
import WellnessProgram from "./components/WellnessProgram"
import Accomodation from "./components/Accomodation"

function App() { 
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element = {<ContactUs/>}/>
          <Route path="/wellness-program" element = {<WellnessProgram/>}/>
          <Route path="/accomodation" element = {<Accomodation/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
