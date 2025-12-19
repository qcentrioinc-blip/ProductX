import HeroSection from "./HeroSection"
import Intro from "./Intro"
import Products from "./Products"
 
import Process from "./Process"
import Testimonial from "../HomePage/GlobalLandingPage/Testimonial"
import Counter from "./Counter"
import WhatWeDoIn from "./WhatWeDoIn"
import NewFooter from "../Global/NewFooter/NewFooter"
import InsightThought from "./InsightThought"
import BNFnav from "./BNFnav"
import AuditAnimation from "./AuditAnimation"
 
 
const Landingpage = () => {
  return (
    <div>
      <BNFnav/>
      <HeroSection/>
      <Intro/>
      <Products/>
      <WhatWeDoIn/>
      <Counter/>
      <AuditAnimation/> 
      <Process/>
      <Testimonial/>
      <InsightThought/>
      
      <NewFooter/>

    </div>
  )
}

export default Landingpage
