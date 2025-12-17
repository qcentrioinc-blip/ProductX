 
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import EHRNavbar from "../Navbar/EHRNavbar"
import Brief from "./Brief"
import Counter from "./Counter"
import Headquarters from "./Headquaters"
import HeroSection from "./HeroSection"
import OurWork from "./OurWork"
import Stroke from "./Stroke"
 

const About = () => {
  return (
    <div className="relative">
      <EHRNavbar />
      
      {/* This creates the scroll height AND contains the fixed stroke */}
      <Stroke />

      <HeroSection />
      <Brief />
      <Counter />
      <OurWork />
      <Headquarters />
      <EHRFooter />
    </div>
  );
};


export default About
