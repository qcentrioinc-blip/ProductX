
import ContactUS from "../Banking&Finance/Products2/ContactUS"
import NewFooter from "../Banking&Finance/Products2/NewFooter"
import Counter from "../HomePage/LandingPages/Counter"
 

import Banner from "./Banner"
import HeroSection from "./HeroSection"
import Openings from "./Openings"
import Testimonial from "./Testimonial"

const Career = () => {
  return (
    <div className="overflow-x-hidden">
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
