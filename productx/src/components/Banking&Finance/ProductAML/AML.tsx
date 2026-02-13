import Description from "./Description"
import HeroSection from "./HeroSection"
import Testimonial from "./Testimonial"
import Banks from "./Banks"
import HWD from "../HWD"
import InsightThought from "../InsightThought"

import FaqSection from "../ProductSherlock/FAQ"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import BNFNav from "../Navbar/BNFnav"
// import ContactSection from "../ProductBankfair/ContactSection"
import ContactUS from "../ProductRemitree/ContactUS"



const AML = () => {
  return (
    <div>

      <BNFNav />
      <HeroSection />
      <Testimonial />
      <Description />
      <Banks />
      <HWD />

      <FaqSection />
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

    </div>
  )
}

export default AML
