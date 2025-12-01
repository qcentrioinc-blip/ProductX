import Tabs from "./Tabs";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import Cards from "./Cards";
import GridLayout from "./GridLayout";
import FeatureGrid from "./FeatureGrid";
import HWD from "../HWD";
import FAQ from "../ProductSherlock/FAQ";
import InsightThought from "../InsightThought";
// import NewFooter from "../Products2/NewFooter";
 
// import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
// import FeatureGrid2 from "./FeatureGrid2";

import BNFNav from "../BNFnav";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import ContactSection from "../ProductBankfair/ContactSection";

const Cos_Page = () => {
  return (
    <div>
      <BNFNav/>
        <HeroSection />
        <StatsSection />
        <Cards />
        <Tabs />
        <GridLayout />
        <FeatureGrid />
        {/* <FeatureGrid2/> */}
        <HWD />
        <FAQ />
        <InsightThought />
        <ContactSection />
        <NewOneFooter/>
        
    </div>   
  );
}

export default Cos_Page;