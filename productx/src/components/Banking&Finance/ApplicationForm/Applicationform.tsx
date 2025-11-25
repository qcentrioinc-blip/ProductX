import HeroSection from "../BNFContact/HeroSection"
import BNFNav from "../BNFnav"
import ContactSection from "../ProductBankfair/ContactSection"
import NewFooter from "../ProductRemitree/NewFooter"

 
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
