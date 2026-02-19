import HWD from "../HWD";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import TitleSec from "./TitleSec";
import CardsSection from "./CardsSection";
import Features from "./Features";
import ContentInfo from "./ContentInfo";
import Grid from "./Grid";
import InsightThought from "../InsightThought";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
import BNFNav from "../Navbar/BNFnav";
import ContactUS from "../ProductRemitree/ContactUS";
import FaqSection from "./FAQ";


const ProductDetails_4_page = () => {
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
      <TitleSec />
      <HeroBottomNavbar />
      <div id="overview">
        <CardsSection/>
      </div>
      <div id="benefits"> <Features /></div>
      <div id="process"><ContentInfo /></div>
      
      <Grid />
      <div id="usecases">
        <HWD />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
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

export default ProductDetails_4_page