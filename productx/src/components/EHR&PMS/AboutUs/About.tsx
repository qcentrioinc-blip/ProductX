 
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import EHRNavbar from "../Navbar/EHRNavbar"
import Brief from "./Brief"
import Counter from "./Counter"
import Headquarters from "./Headquaters"
import HeroSection from "./HeroSection"
import OurWork from "./OurWork"
 

const About = () => {
  return (
    <div>
      <EHRNavbar />
      <HeroSection/>
      <Brief/>
      <Counter/>
      <OurWork/>
      
      <Headquarters/>
         <EHRFooter />
    
    </div>
  )
}

export default About
