import HWD from "../HWD";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductSherlock/FAQ";
import Cards from "./Cards";
import ContactUS from "../ProductRemitree/ContactUS";
import ThreeTab from "../ProductRemitree/ThreeTab";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";
import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
import NewOneFooter from "../ProductRemitree/NewOneFooter";

// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../BNFnav";

const Sams_Page = () => {
  return (
    <div>
      <ScrollProvider>
      <BNFNav/>
        <HeroSection/>
        <Feature />
        <Cards />
        <ThreeTab />
        <HWD />
        <FaqSection />
        <InsightThought />
        <ContactUS />
        {/* <NewFooter /> */}
         <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter/>
        </div>
      </div>
      </ScrollProvider>
    </div>
  );
}

export default Sams_Page;
