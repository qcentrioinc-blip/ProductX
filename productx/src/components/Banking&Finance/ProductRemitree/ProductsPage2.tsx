// import ArrowBuilding from "./ArrowBuilding";
import ContactUS from "./ContactUS";
import FiveCards from "./FiveCards";
// import NewFooter from "./NewFooter";
// import NewsLetter from "./NewsLetter";
import Overview from "./Overview";
// import SecondHeading from "./SecondHeading";
import ThirdCards from "./ThirdCards";
import ThreeTab from "./ThreeTab";
// import { ScrollProvider } from "../../../context/ScrollContext"; 
import NewOneFooter from "./NewOneFooter";
import BNFNav from "../Navbar/BNFnav";
// import TwoPart from "./TwoPart";
import HWD from "../HWD";
import FaqSection from "../ProductKYC/FAQ";
import InsightThought from "../InsightThought";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import TwoImage from "./TwoImage";
import ThreeCircle from "./ThreeCircle";

const ProductsPage2 = () => {

  const scrollableContainerRef = useContext(ScrollContext);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-us') {
      setTimeout(() => {
        if (scrollableContainerRef) {
          scrollableContainerRef.scrollTo('#contact-us', { offset: 0, duration: 1.5 });
        } else {
          const element = document.getElementById('contact-us');
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, scrollableContainerRef]);

  useEffect(() => {
    if (scrollableContainerRef) {
      scrollableContainerRef.scrollTo(0, {
        offset: 0,
        immediate: false,
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [scrollableContainerRef]);

  return (
    <>

      {/* <ScrollProvider>  */}
      <BNFNav />


      <Overview />

      <HeroBottomNavbar />


      <div id="overview">
        <ThirdCards />

      </div>


      <div id="benefits">
        <ThreeTab />
      </div>
      <FiveCards />
      {/* <TwoPart /> */}
      <TwoImage />
      <ThreeCircle />
      {/* <ArrowBuilding /> */}
      {/* <div id="process"> <NewsLetter /></div> */}

      <div id="usecases">
        <HWD />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <div id="blogs">
        <InsightThought />
      </div>
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
    // </ScrollProvider>
  )
}

export default ProductsPage2;
