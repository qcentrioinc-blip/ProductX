import './App.css'
import HeroSection from './components/HomePage/HeroSection'
import Contact from './components/Contact/Contact' // Make sure this path is correct
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Route, Routes, useParams } from 'react-router-dom'
import HighTech from './routes/industries/HighTech'
import BankingAndFinance from './routes/industries/BankingAndFinance'
import LifeSciences from './routes/industries/LifeSciences'


// Create a Home component for your main page
const App = () => {
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

  const IndustryPage = () => {
    const { industry } = useParams();
    if (industry === "high-tech") return <HighTech />;
    if (industry === "banking-and-finance") return <BankingAndFinance />;
    if (industry === "life-sciences") return <LifeSciences />;
    return <div>Industry not found</div>;
  }
  return (
    <>
      <Navbar activeSection={activeSection} />
      <div>
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path="/industries/:industry" element={<IndustryPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App