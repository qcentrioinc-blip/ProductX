import HWD from "../HWD";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductSherlock/FAQ";
import Cards from "./Cards";
import ThreeTab from "../ProductRemitree/ThreeTab";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";
// Import ScrollProvider


// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../Navbar/BNFnav";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
// import ContactSection from "../ProductBankfair/ContactSection";
import ContactUS from "../ProductRemitree/ContactUS";

const Sams_Page = () => {
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
      <Feature />
      <Cards />
      <ThreeTab />
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
  );
}

export default Sams_Page;
