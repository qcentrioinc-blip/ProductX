import Description from "./Description"
import HeroSection from "./HeroSection"
import Testimonial from "./Testimonial"
import Banks from "./Banks"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
 
import FaqSection from "../ProductDetails4/FAQ"
import NewOneFooter from "../Products2/NewOneFooter"
import ContactUS from "../Products2/ContactUS"
import BNFNav from "../BNFnav"
 
 

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
