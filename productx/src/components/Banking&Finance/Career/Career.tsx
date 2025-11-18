
import BNFNav from "../BNFnav"
import ContactUS from "../Products2/ContactUS"
import NewFooter from "../Products2/NewFooter"
import Counter from "../../HomePage/GlobalLandingPage/Counter"
 

import Banner from "./Banner"
import HeroSection from "./HeroSection"
import Openings from "./Openings"
import Testimonial from "./Testimonial"

const Career = () => {
  return (
    <div className="overflow-x-hidden">
      <BNFNav/>
      <HeroSection/>
      <Testimonial/>
      <Banner/>
      <Openings/>
        <Counter/>
       <ContactUS/>
       <NewFooter/>
       
    </div>
  )
}

export default Career
