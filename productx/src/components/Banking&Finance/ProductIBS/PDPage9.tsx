import StatsSection from "../ProductDetails(COS)/StatsSection";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import FeatureGridSection from "./FeatureGridSection";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import ImgTextSec from "./ImgTextSec";
import HWD from "../HWD";
import FaqSection from "../ProductSherlock/FAQ";
import InsightThought from "../InsightThought";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import BNFNav from "../Navbar/BNFnav";
// import KeytomStickyScroll from "./KeytomStickyScroll";

import ContactUS from "../ProductRemitree/ContactUS";

const PDPage9 = () => {
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
    <>
      <BNFNav />
      <HeroSection />
      <FeatureGridSection />
      <StatsSection />


      <Cards />
      {/* <KeytomStickyScroll/> */}
      <ImgTextSec />
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

    </>
  );
};

export default PDPage9;
