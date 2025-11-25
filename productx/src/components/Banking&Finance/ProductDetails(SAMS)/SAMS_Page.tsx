import HWD from "../HWD";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductSherlock/FAQ";
import Cards from "./Cards";
import ThreeTab from "../ProductRemitree/ThreeTab";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";

// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../BNFnav";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import ContactSection from "../ProductBankfair/ContactSection";

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
        <ContactSection/>
        <NewOneFooter/>
        
    </div>
  );
}

export default Sams_Page;
