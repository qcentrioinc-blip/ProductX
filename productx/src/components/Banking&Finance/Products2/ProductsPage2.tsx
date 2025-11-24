// import ArrowBuilding from "./ArrowBuilding";
import ContactUS from "./ContactUS";
import FiveCards from "./FiveCards";
// import NewFooter from "./NewFooter";
import NewsLetter from "./NewsLetter";
import Overview from "./Overview";
import SecondHeading from "./SecondHeading";
import ThirdCards from "./ThirdCards";
import ThreeTab from "./ThreeTab";
import { ScrollContext, ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
import NewOneFooter from "./NewOneFooter";
import BNFNav from "../BNFnav";
import TwoPart from "./TwoPart";
import { useContext, useEffect } from "react";
import HWD from "../HWD";
import FaqSection from "../ProductDetails4/FAQ";
import InsightThought from "../InsightThought";

const ProductsPage2 = () => {

  const scrollableContainerRef = useContext(ScrollContext);

  useEffect(() => {
    // Scroll the ScrollContext container to top
    if (scrollableContainerRef?.current) {
      scrollableContainerRef.current.scrollTo({
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

    <ScrollProvider> {/* Wrap the entire content with ScrollProvider */}
      <BNFNav />
      <Overview />
      <SecondHeading />
      <ThirdCards />
      <ThreeTab />
      <FiveCards />
      <TwoPart />
      {/* <ArrowBuilding /> */}
      <NewsLetter />
      <HWD />
      <FaqSection />
      <InsightThought />
      <ContactUS />

      <div
        className='lg:relative lg:h-[700px]'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter />
        </div>
      </div>
    </ScrollProvider>
  )
}

export default ProductsPage2;
