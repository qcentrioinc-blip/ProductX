import BNFNav from "../../Banking&Finance/BNFnav"
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS"
// import NewFooter from "../../Banking&Finance/ProductRemitree/NewFooter"
import Testimonial from "../../Banking&Finance/Career/Testimonial"
import Benefits from "./Benefits"
import Cards from "./Cards"
import HeroSection from "./HeroSection"
// import PlatformNavbar from "./PlatformNavbar"
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter"
import HeroBottomNavbar from "../../Banking&Finance/ProductPago/HeroBottomNav"
import InsightThought from "../../Banking&Finance/InsightThought"
import HWD from "../../Banking&Finance/HWD"
import ImageGrid from "./ImageGrid"
import GradientText from "./GradientText"
 
const Platform = () => {
  return (
    <div>
      <BNFNav/>
      <HeroSection/>
      {/* <PlatformNavbar/> */}
     <HeroBottomNavbar/>


     <div id="overview">
      <Testimonial/>
      </div>


<section className="bg-[#F6DFA4]">

  <div id="benefits">
         <Benefits/>
         </div>
     <div id="process"> 
      <Cards/>
      </div>
</section>

<ImageGrid/>

<GradientText/>
      
      <div id="usecases">
        <HWD/>
      </div>
      <div id="blog">
         <InsightThought/>

      </div>
     
  <div className="relative">
      
      <div className=" lg:h-[200vh]"></div>
     
     
       
        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter/>
        </div>
 
         
        <div
          className="absolute inset-0 z-40 pointer-events-none"
         
        >
          <ContactUS/>
        </div>
 
      </div>
    </div>
  )
}

export default Platform
