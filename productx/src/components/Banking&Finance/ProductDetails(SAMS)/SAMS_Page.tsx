import HWD from "../HWD";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductDetails(Sherlock)/FAQ";
import Cards from "./Cards";
import ThreeTab from "../Products2/ThreeTab";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";

// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../BNFnav";
import NewOneFooter from "../Products2/NewOneFooter";
import ContactSection from "../Products1/ContactSection";

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
