 
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import Brief from "./Brief"
import Counter from "./Counter"
import Headquarters from "./Headquaters"
import HeroSection from "./HeroSection"
import OurWork from "./OurWork"
// import Work from "./Work"

const About = () => {
  return (
    <div>
      <HeroSection/>
      <Brief/>
      <Counter/>
      <OurWork/>
      {/* <Work/> */}
      <Headquarters/>
         <EHRFooter />
    
    </div>
  )
}

export default About
