import WorkProfile from "../../HomePage/HighTech/WorkProfile"
import HighTechNavbar from "../Navbar/HighTechNavbar"
import Banner from "./Banner"
import BorderCTA from "./BorderCTA"
import CTA from "./CTA"
import Feature from "./Feature"

import Gallery from "./Gallery"
import HeroSection from "./HeroSection"
import SubFooter from "./SubFooter"
// import WorkProfile from "./WorkProfile"


const AboutUs = () => {
  return (
    <div>
      <HighTechNavbar />
      <div className="relative  ">
        <HeroSection />
        <CTA />
      </div>

      <Banner />
      {/* <WorkProfile/>
       */}

      <WorkProfile />
      <BorderCTA />

      <Gallery />

      <Feature />
      <SubFooter />




    </div>
  )
}

export default AboutUs
