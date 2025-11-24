import BNFNav from "../../Banking&Finance/BNFnav"
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS"
// import NewFooter from "../../Banking&Finance/ProductRemitree/NewFooter"
import Testimonial from "../../Banking&Finance/Career/Testimonial"
import Benefits from "./Benefits"
import Cards from "./Cards"
import HeroSection from "./HeroSection"
// import PlatformNavbar from "./PlatformNavbar"
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter"
 
const Platform = () => {
  return (
    <div>
      <BNFNav/>
      <HeroSection/>
      {/* <PlatformNavbar/> */}
     
      <Testimonial/>
      <Benefits/>
      <Cards/>
      <ContactUS/>
    <NewOneFooter/>
    </div>
  )
}

export default Platform
