import ImageCard from "../BNFBlogs/ImageCard"
import HWD from "../HWD"
import BNFNav from "../Navbar/BNFnav"
import HeroBottomNavbar from "../ProductPago/HeroBottomNav"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import ContentInfo from "./ContentInfo"
import Feature from "./Features"
import Grid from "./Grid"
import HeroSec from "./HeroSec"
import ImgSec from "./ImgSec"
import ThreeCards from "./ThreeCards"

const Sherlock = () => {
  return (
    <div>
      <BNFNav/>
      <HeroSec/>
      <HeroBottomNavbar/>
      <div id="overview"><ThreeCards/></div>
      <div id="benefits">
      <Feature/>
      <ContentInfo/>
      </div>
      <div id="process">
      <Grid/>
      <ImgSec/>
      </div>
      <div id="usecases">
        <HWD />
      </div>
      <ImageCard/>
      <div id="contact-us">
        {/* DESKTOP */}
        <div className="hidden lg:block relative">
          <ContactUS />
          <NewOneFooter />
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <ContactUS />
          <NewOneFooter />
        </div>
      </div>
    </div>
  )
}

export default Sherlock
