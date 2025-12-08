
import HWD from "../../Banking&Finance/HWD"
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ"
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import EHRNavbar from "../Navbar/EHRNavbar"
import Advantage from "./Advantage"
import Benefits from "./Benefits"
import HeroSection from "./HeroSection"

import Testimonial from "./Testimonial"



const Clinic = () => {
  return (
    <div>
      <EHRNavbar />
      <HeroSection />
      <Testimonial />
      <Benefits />
      <div className="relative overflow-x-hidden">
        <Advantage />
        <HWD />
        <FaqSection />
        <EHRFooter />
      </div>


    </div>
  )
}

export default Clinic
