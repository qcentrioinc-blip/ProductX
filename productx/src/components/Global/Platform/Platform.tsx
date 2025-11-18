import BNFNav from "../../Banking&Finance/BNFnav"
import ContactUS from "../../Banking&Finance/Products2/ContactUS"
import NewFooter from "../../Banking&Finance/Products2/NewFooter"
import Testimonial from "../../Banking&Finance/Career/Testimonial"
import Benefits from "./Benefits"
import Cards from "./Cards"
import HeroSection from "./HeroSection"
import PlatformNavbar from "./PlatformNavbar"

const Platform = () => {
  return (
    <div>
      <BNFNav/>
      <HeroSection/>
      <PlatformNavbar/>
      <Testimonial/>
      <Benefits/>
      <Cards/>
      <ContactUS/>
      <NewFooter/>
    </div>
  )
}

export default Platform
