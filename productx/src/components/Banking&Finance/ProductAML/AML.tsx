import Description from "./Description"
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import HeroSection from "./HeroSection"
import Testimonial from "./Testimonial"
import Banks from "./Banks"
import HWD from "../HWD"
import InsightThought from "../InsightThought"

import FaqSection from "../ProductKYC/FAQ"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import BNFNav from "../Navbar/BNFnav"
// import ContactSection from "../ProductBankfair/ContactSection"
import ContactUS from "../ProductRemitree/ContactUS"
import DetailCards from "./DeatilCards";



const AML = () => {
  const location = useLocation();
  const lenis = useContext(ScrollContext);

  useEffect(() => {
    if (location.hash === '#contact-us') {
      setTimeout(() => {
        if (lenis) {
          lenis.scrollTo('#contact-us', { offset: 0, duration: 1.5 });
        } else {
          const element = document.getElementById('contact-us');
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, lenis]);

  return (
    <div>

      <BNFNav />
      <HeroSection />
      <Testimonial />
      <Description />
      <Banks />
      <DetailCards/>
      <HWD />

      <FaqSection />  
      <InsightThought />
      <div className="relative">

        <div className="hidden lg:block lg:h-[200vh]"></div>

        <div
          id="contact-us"
          className="lg:absolute lg:inset-0 z-40 lg:pointer-events-none"
        >
          <ContactUS />
        </div>

        <div className="lg:sticky lg:bottom-0 lg:inset-0 z-30">
          <NewOneFooter />
        </div>

      </div>

    </div>
  )
}

export default AML
