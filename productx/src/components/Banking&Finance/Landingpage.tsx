import HeroSection from "./HeroSection"
import Intro from "./Intro"
import Products from "./Products"
import Audit from "./Audit"
import Process from "./Process"
import Testimonial from "../HomePage/LandingPages/Testimonial"
import Counter from "./Counter"
import WhatWeDoIn from "./WhatWeDoIn"
import NewFooter from "./Products2/NewFooter"
import InsightThought from "./InsightThought"
 
 
const Landingpage = () => {
  return (
    <div>
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
