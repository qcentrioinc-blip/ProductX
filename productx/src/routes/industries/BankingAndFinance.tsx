import Audit from "../../components/Banking&Finance/Audit"
import Counter from "../../components/Banking&Finance/Counter"
import HeroSection from "../../components/Banking&Finance/HeroSection"
import InsightThought from "../../components/Banking&Finance/InsightThought"
import Intro from "../../components/Banking&Finance/Intro"
import Process from "../../components/Banking&Finance/Process"

import Products from "../../components/Banking&Finance/Products"
import  NewFooter from "../../components/Banking&Finance/Products2/NewFooter"
import WhatWeDoIn from "../../components/Banking&Finance/WhatWeDoIn"
import Testimonial from "../../components/HomePage/LandingPages/Testimonial"
import ContactUS from "../../components/Banking&Finance/Products2/ContactUS"
  
const BankingAndFinance = () => {
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
      <ContactUS/>
      <NewFooter/>
      
    </div>
  )
}

export default BankingAndFinance
