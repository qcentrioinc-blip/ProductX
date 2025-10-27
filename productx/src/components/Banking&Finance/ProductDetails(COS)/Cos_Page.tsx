import Tabs from "./Tabs";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import Cards from "./Cards";
import GridLayout from "./GridLayout";
import FeatureGrid from "./FeatureGrid";
import HWD from "../HWD";
import FAQ from "../ProductDetails4/FAQ";
import InsightThought from "../InsightThought";
import NewFooter from "../Products2/NewFooter";
import ContactUS from "../Products2/ContactUS";

const Cos_Page = () => {
  return (
    <div>
        <HeroSection />
        <StatsSection />
        <Cards />
        <Tabs />
        <GridLayout />
        <FeatureGrid />
        <HWD />
        <FAQ />
        <InsightThought />
        <ContactUS />
        <NewFooter />
    </div>    
  );
}

export default Cos_Page;