import HeroSection from "./HeroSection";
import Overview from "./Overview";
import HighLights from "./HighLights";
import Capabilities from "../Products1/Capabilities";
import Process from "../Process";
import ContactUS from "../Products2/ContactUS";
import NewFooter from "../Products2/NewFooter";
// import Counter from "../../HomePage/LandingPages/Counter";
import Counter from "../../HomePage/GlobalLandingPage/Counter";

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
    <NewFooter />
    </>
  )
}
export default AboutUsPage;