import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import NavBar from "./components/NavBar"

// Lazy load components for better performance
const LandingPage = lazy(() => import("./components/LandingPage"))
const About = lazy(() => import("./components/About"))
const Gallery = lazy(() => import("./components/Gallery"))
const ContactUs = lazy(() => import("./components/ContactUs"))
const Accomodation = lazy(() => import("./components/Accomodation"))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-slate-900 mx-auto mb-4"></div>
      <p className="text-slate-700 font-serif text-lg">Loading...</p>
    </div>
  </div>
)

function App() { 
  return (
    <Router>
      <div>
        <NavBar/>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/accomodation" element={<Accomodation/>}/>
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
