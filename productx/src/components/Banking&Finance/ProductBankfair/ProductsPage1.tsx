import BNFNav from "../Navbar/BNFnav"

import HWD from "../HWD"
import InsightThought from "../InsightThought"
import FaqSection from "../ProductSherlock/FAQ"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import Building from "./Building"
// import Capabilities from "./Capabilities"
import Enterprises from "./Enterprises"
import FirstProduct from "./FirstProduct"
// import PagoNavbar from "../ProductPago/PagoNavbar"
import HeroBottomNavbar from "../ProductPago/HeroBottomNav"
import Capabilities from "./Capabilities"
import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { ScrollContext } from "../../../context/ScrollContext"
// import Pricing from "./Pricing"

const ProductsPage1 = () => {
  const scrollableContainerRef = useContext(ScrollContext);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-us') {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (scrollableContainerRef) {
          (scrollableContainerRef as any).scrollTo('#contact-us', { offset: 0, duration: 1.5 });
        } else {
          const element = document.getElementById('contact-us');
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, scrollableContainerRef]);

  useEffect(() => {
    // Scroll the ScrollContext container to top
    if (scrollableContainerRef) {
      (scrollableContainerRef as any).scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Fallback to window scroll if ScrollContext not available
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [scrollableContainerRef]);
  return (
    <div>
      <BNFNav />
      <FirstProduct />
      <HeroBottomNavbar />
      <Capabilities />
      <div id="overview">
        <Enterprises /></div>

      <div id="benefits"> <Building /></div>

      {/* <Pricing /> */}
      <div id="usecases"> <HWD /></div>

      <div id="faq"><FaqSection /></div>

      <div id="blogs"><InsightThought /></div>

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

export default ProductsPage1