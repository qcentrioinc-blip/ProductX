import './App.css'
import HeroSection from './components/HomePage/HeroSection'
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import './index.css'

function App() {
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
    <>
      <div>
        <Navbar activeSection={activeSection} />
        <HeroSection />
      </div>

    </>
  )
}

export default App
