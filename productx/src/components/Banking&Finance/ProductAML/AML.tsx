import Description from "./Description"
import HeroSection from "./HeroSection"
import Testimonial from "./Testimonial"
import Banks from "./Banks"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
 
import FaqSection from "../ProductSherlock/FAQ"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
 
import BNFNav from "../BNFnav"

import ContactUS from "../ProductRemitree/ContactUS"
// import ContactSection from "../Products1/ContactSection"
 
 

const AML = () => {
  return (
    <div>
      
      <BNFNav/>
      <HeroSection />
      <Testimonial />
      <Description />
      <Banks />
      <HWD />
      
      <FaqSection/>
      <InsightThought/>
     <ContactUS/>
      <NewOneFooter/>
    
    </div>
  )
}

export default AML
