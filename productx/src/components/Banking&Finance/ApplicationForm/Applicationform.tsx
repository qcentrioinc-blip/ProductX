import HeroSection from "../BNFContact/HeroSection"
import BNFNav from "../BNFnav"
import ContactSection from "../Products1/ContactSection"
import NewFooter from "../Products2/NewFooter"

 
const Applicationform = () => {
  return (
    <div>
      <BNFNav/>
      <HeroSection
      bgColor="#E5F0FF"
      />
      <ContactSection/>
      <NewFooter/>
    </div>
  )
}

export default Applicationform
