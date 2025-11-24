import Description from "./Description"
import HeroSection from "./HeroSection"
import Testimonial from "./Testimonial"
import Banks from "./Banks"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
 
import FaqSection from "../ProductDetails(Sherlock)/FAQ"
import NewOneFooter from "../Products2/NewOneFooter"
import BNFNav from "../BNFnav"
import ContactSection from "../Products1/ContactSection"
 
 

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
     <ContactSection/>
      <NewOneFooter/>
    
    </div>
  )
}

export default AML
