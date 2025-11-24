
// import ContactUS from "../Banking&Finance/Products2/ContactUS"
// import NewFooter from "../Banking&Finance/Products2/NewFooter"
// import Counter from "../HomePage/LandingPages/Counter"
import BNFNav from "../BNFnav"
import NewFooter from "../Products2/NewFooter"
import Counter from "../../HomePage/GlobalLandingPage/Counter"
 

import Banner from "./Banner"
import HeroSection from "./HeroSection"
import Openings from "./Openings"
import Testimonial from "./Testimonial"
import ContactSection from "../Products1/ContactSection"

const Career = () => {
  return (
    <div className="overflow-x-hidden">
      <BNFNav/>
      <HeroSection/>
      <Testimonial/>
      <Banner/>
      <Openings/>
        <Counter/>
       <ContactSection/>
       <NewFooter/>
       
    </div>
  )
}

export default Career
