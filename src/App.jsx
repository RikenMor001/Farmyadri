import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
import About from "./components/About"
import Gallery from "./components/Gallery"
import ContactUs from "./components/ContactUs"

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
        </Routes>
      </div>
    </Router>
  )
}

export default App
