import HWD from "../HWD";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductSherlock/FAQ";
import Cards from "./Cards";
 
import ThreeTab from "../ProductRemitree/ThreeTab";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";
  // Import ScrollProvider
 

// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../BNFnav";
import ContactUS from "../ProductRemitree/ContactUS";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
 
 
const Sams_Page = () => {
  return (
    <div>
      <BNFNav/>
        <HeroSection/>
        <Feature />
        <Cards />
        <ThreeTab />
        <HWD />
        <FaqSection />
        <InsightThought />
        <ContactUS/>
        <NewOneFooter/>
        
    </div>
  );
}

export default Sams_Page;
