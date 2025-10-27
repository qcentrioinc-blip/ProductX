import HWD from "../HWD";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductDetails4/FAQ";
import Cards from "./Cards";
import ContactUS from "../Products2/ContactUS";
import ThreeTab from "../Products2/ThreeTab";
import Feature from "./Feature";
import Title_Sec from "./HeroSection";
import NewFooter from "../Products2/NewFooter";

const Sams_Page = () => {
  return (
    <div>
        <Title_Sec />
        <Feature />
        <Cards />
        <ThreeTab />
        <HWD />
        <FaqSection />
        <InsightThought />
        <ContactUS />
        <NewFooter />
        
    </div>
  );
}

export default Sams_Page;
