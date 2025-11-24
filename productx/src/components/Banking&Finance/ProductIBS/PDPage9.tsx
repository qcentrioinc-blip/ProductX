import StatsSection from "../ProductDetails(COS)/StatsSection";
import FeatureGridSection from "./FeatureGridSection";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import ImgTextSec from "./ImgTextSec";
import HWD from "../HWD";
import FaqSection from "../ProductSherlock/FAQ";
import InsightThought from "../InsightThought";
import ContactUS from "../ProductRemitree/ContactUS";
// import NewFooter from "../Products2/NewFooter";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
// import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider

// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../BNFnav";

const PDPage9 = () => {
  return (
    <>
    {/* <ScrollProvider> */}
    <BNFNav/>
      <HeroSection />
      <FeatureGridSection />
      <StatsSection />
      <Cards />
      <ImgTextSec />
      <HWD />
      <FaqSection />
      <InsightThought />
      <ContactUS />
      {/* <NewFooter /> */}
       {/* <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter/>
        {/* </div> */}
      {/* </div> */}
    {/* </ScrollProvider> */}
    </>
  );
};

export default PDPage9;
