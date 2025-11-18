import Tabs from "./Tabs";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import Cards from "./Cards";
import GridLayout from "./GridLayout";
import FeatureGrid from "./FeatureGrid";
import HWD from "../HWD";
import FAQ from "../ProductDetails4/FAQ";
import InsightThought from "../InsightThought";
// import NewFooter from "../Products2/NewFooter";
import ContactUS from "../Products2/ContactUS";
import NewOneFooter from "../Products2/NewOneFooter";
import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
import FeatureGrid2 from "./FeatureGrid2";


const Cos_Page = () => {
  return (
   <ScrollProvider>
    <div>
        <HeroSection />
        <StatsSection />
        <Cards />
        <Tabs />
        <GridLayout />
        <FeatureGrid />
        <FeatureGrid2/>
        <HWD />
        <FAQ />
        <InsightThought />
        <ContactUS />
        <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter/>
        </div>
      </div>
    </div>   
  </ScrollProvider>  
  );
}

export default Cos_Page;