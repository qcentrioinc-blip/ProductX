import BNFNav from "../../Banking&Finance/BNFnav"
// import NewFooter from "../../Banking&Finance/ProductRemitree/NewFooter"
import Testimonial from "../../Banking&Finance/Career/Testimonial"
import Benefits from "./Benefits"
import Cards from "./Cards"
import HeroSection from "./HeroSection"
// import PlatformNavbar from "./PlatformNavbar"
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter"
import HeroBottomNavbar from "../../Banking&Finance/ProductPago/HeroBottomNav"
import InsightThought from "../../Banking&Finance/InsightThought"
import HWD from "../../Banking&Finance/HWD"
import ImageGrid from "./ImageGrid"
import GradientText from "./GradientText"
import { useLocation } from "react-router-dom";
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import FooterHT from "../../HighTech/FooterHT"
import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import Footer from "../Footer/Footer"
import BlogCarousel from "../../HomePage/EHR&PMS/BlogCarousel"
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs"
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ"





export const Platform = () => {
     const { pathname } = useLocation();
 /* -------------------------------
     FOOTER SWITCHER
  -------------------------------- */
  const getFooter = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <NewOneFooter />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRFooter />;
    if (pathname.startsWith("/industries/high-tech")) return <FooterHT />;
    if (pathname.startsWith("/industries/ai-optimization")) return <AIFooter />;
    return <Footer />;
  };

  const getInsightandThoughts = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <InsightThought />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <BlogCarousel />;
    if (pathname.startsWith("/industries/high-tech")) return <InsightThought />;
    if (pathname.startsWith("/industries/ai-optimization")) return <AIBlogs  />;
    return null;
  };
  
  return (
    <div>
      <BNFNav/>
      <HeroSection/>
      {/* <PlatformNavbar/> */}
     <HeroBottomNavbar/>


     <div id="overview">
      <Testimonial/>
      </div>


<section className="bg-[#F6DFA4]">

  <div id="benefits">
         <Benefits/>
         </div>
     <div id="process"> 
      <Cards/>
      </div>
</section>

<ImageGrid/>

<GradientText/>
      
      <div id="usecases">
        <HWD/>
      </div>
      <div id="faq">
        <FaqSection/>
      </div>
      <div id="insights">
      {getInsightandThoughts()}
      </div>
     {/* Footer */}
     {getFooter()}
  
    </div>
  )
}


