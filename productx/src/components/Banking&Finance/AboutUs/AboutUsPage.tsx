import HeroSection from "./HeroSection";
import Overview from "./Overview";
import HighLights from "./HighLights";
import Process from "../Process";
import ContactUS from "../ProductRemitree/ContactUS";
 
// import Counter from "../../HomePage/LandingPages/Counter";
import Counter from "../../HomePage/GlobalLandingPage/Counter";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import Capabilities from "../ProductBankfair/Capabilities";

const AboutUsPage = () => {
  return (
    <>
    <HeroSection />
    <Overview />
    <HighLights />
    <Capabilities />
    <Process />
    <Counter />
    <ContactUS />
    <NewOneFooter/>
    {/* <ContactSection />
    <NewFooter /> */}
    </>
  )
}
export default AboutUsPage;