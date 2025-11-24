import Audit from "../../components/Banking&Finance/Audit"
import Counter from "../../components/Banking&Finance/Counter"
import HeroSection from "../../components/Banking&Finance/HeroSection"
import InsightThought from "../../components/Banking&Finance/InsightThought"
import Intro from "../../components/Banking&Finance/Intro"
import Process from "../../components/Banking&Finance/Process"

import Products from "../../components/Banking&Finance/Products"
 
import WhatWeDoIn from "../../components/Banking&Finance/WhatWeDoIn"
import Testimonial from "../../components/HomePage/GlobalLandingPage/Testimonial"
import ContactUS from "../../components/Banking&Finance/ProductRemitree/ContactUS"
import BNFNav from "../../components/Banking&Finance/BNFnav"
import NewOneFooter from "../../components/Banking&Finance/ProductRemitree/NewOneFooter"
  
const BankingAndFinance = () => {
  return (
    <>
      
     <BNFNav/>
      <HeroSection/>
      
      <Intro/>
      <Products />
      <WhatWeDoIn/>
      <Counter/>
      <Audit/>
      <Process/>
       <Testimonial/>
      <InsightThought/>
      <ContactUS/>
     <NewOneFooter/>
      
    </>
  )
}

export default BankingAndFinance
