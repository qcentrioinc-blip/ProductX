import HeroSection from "./HeroSection"
import Intro from "./Intro"
import Products from "./Products"
import Audit from "./Audit"
import Process from "./Process"
import Testimonial from "../HomePage/GlobalLandingPage/Testimonial"
import Counter from "./Counter"
import WhatWeDoIn from "./WhatWeDoIn"
import NewFooter from "./ProductRemitree/NewFooter"
import InsightThought from "./InsightThought"
import BNFnav from "./BNFnav"
 
 
const Landingpage = () => {
  return (
    <div>
      <BNFnav/>
      <HeroSection/>
      <Intro/>
      <Products/>
      <WhatWeDoIn/>
      <Counter/>
      <Audit/> 
      <Process/>
      <Testimonial/>
      <InsightThought/>
      
      <NewFooter/>

    </div>
  )
}

export default Landingpage
