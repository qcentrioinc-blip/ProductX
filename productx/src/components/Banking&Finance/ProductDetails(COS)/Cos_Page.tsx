import Tabs from "./Tabs";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import Cards from "./Cards";
import GridLayout from "./GridLayout";
import FeatureGrid from "./FeatureGrid";
import HWD from "../HWD";
import FAQ from "../ProductSherlock/FAQ";
import InsightThought from "../InsightThought";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
// import NewFooter from "../Products2/NewFooter";

// import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
// import FeatureGrid2 from "./FeatureGrid2";

import BNFNav from "../Navbar/BNFnav";
import NewOneFooter from "../ProductRemitree/NewOneFooter";

import ContactUS from "../ProductRemitree/ContactUS";

const Cos_Page = () => {
  return (
    <div>
      <BNFNav />
      <HeroSection />
      <HeroBottomNavbar />
      <StatsSection />
      <Cards />
      <Tabs />
      <GridLayout />
      <FeatureGrid />
      {/* <FeatureGrid2/> */}
      <HWD />
      <FAQ />
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

    </div>
  );
}

export default Cos_Page;