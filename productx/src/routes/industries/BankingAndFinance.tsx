// import Audit from "../../components/Banking&Finance/Audit"
import Counter from "../../components/Banking&Finance/Counter"
import HeroSection from "../../components/Banking&Finance/HeroSection"
import InsightThought from "../../components/Banking&Finance/InsightThought"
import Intro from "../../components/Banking&Finance/Intro"
import Process from "../../components/Banking&Finance/Process"

import Products from "../../components/Banking&Finance/Products"

import WhatWeDoIn from "../../components/Banking&Finance/WhatWeDoIn"
import Testimonial from "../../components/HomePage/GlobalLandingPage/Testimonial"
import ContactUS from "../../components/Banking&Finance/ProductRemitree/ContactUS"
import BNFNav from "../../components/Banking&Finance/Navbar/BNFnav"
import NewOneFooter from "../../components/Banking&Finance/ProductRemitree/NewOneFooter"
import AuditAnimation from "../../components/Banking&Finance/AuditAnimation"
// import ContactFooterReveal from "../../components/Banking&Finance/BNFFooter/ContactForm"

import { useEffect } from "react";

const BankingAndFinance = () => {
  useEffect(() => {
    const originalStyle = document.body.style.overflowX;
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = originalStyle;
    };
  }, []);

  return (
    <>

      <BNFNav />
      <HeroSection />
      <Intro />
      <Products />
      <WhatWeDoIn />
      <Counter />
      <AuditAnimation />
      {/* <Audit /> */}
      <Process />
      <Testimonial />
      <InsightThought />
      <div className="relative">

        <div className=" lg:h-[200vh]"></div>



        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter />
        </div>


        <div
          className="absolute inset-0 z-40 pointer-events-none"

        >
          <ContactUS />

        </div>

      </div>

      {/* <ContactFooterReveal/> */}

    </>
  )
}

export default BankingAndFinance
