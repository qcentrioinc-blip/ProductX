import HeroSection from "./HeroSection";
import Overview from "./Overview";
import HighLights from "./HighLights";
import Capabilities from "../ProductBankfair/Capabilities";
import Process from "../Process";
import NewFooter from "../ProductRemitree/NewFooter";
// import Counter from "../../HomePage/LandingPages/Counter";
import Counter from "../../HomePage/GlobalLandingPage/Counter";
import ContactSection from "../ProductBankfair/ContactSection";

const AboutUsPage = () => {
  return (
    <>
    <HeroSection />
    <Overview />
    <HighLights />
    <Capabilities />
    <Process />
    <Counter />
    <ContactSection />
    <NewFooter />
    </>
  )
}
export default AboutUsPage;