import StatsSection from "../ProductDetails(COS)/StatsSection";
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

    </>
  );
};

export default PDPage9;
