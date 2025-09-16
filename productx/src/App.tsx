import './App.css'
import HeroSection from './components/HomePage/HeroSection'
import Contact from './components/Contact/Contact' // Make sure this path is correct
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './index.css'





// Create a Home component for your main page
const Home = () => {
  const [activeSection, setActiveSection] = useState("landingpage");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["landingpage", "visionimpact", "footer"];
      let current = "landingpage";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          current = id;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <HeroSection />


    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
  
      </Routes>
    </Router>
  )
}

export default App