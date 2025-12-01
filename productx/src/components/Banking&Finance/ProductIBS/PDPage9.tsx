import StatsSection from "../ProductDetails(COS)/StatsSection";
import FeatureGridSection from "./FeatureGridSection";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import ImgTextSec from "./ImgTextSec";
import HWD from "../HWD";
import FaqSection from "../ProductSherlock/FAQ";
import InsightThought from "../InsightThought";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import BNFNav from "../BNFnav";
// import KeytomStickyScroll from "./KeytomStickyScroll";
import ContactSection from "../ProductBankfair/ContactSection";
// import StickyCardStack from "./StickyCardStack";

const PDPage9 = () => {
  return (
    <>
    <BNFNav/>
      <HeroSection />
      <FeatureGridSection />
      {/* <StickyCardStack/> */}
      <StatsSection />
            

      <Cards />
      {/* <KeytomStickyScroll/> */}
      <ImgTextSec />
      <HWD />
      <FaqSection />
      <InsightThought />
      <ContactSection/>        
          <NewOneFooter/>
        
    </>
  );
};

export default PDPage9;
