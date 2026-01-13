 
import FeatureCards from "./Features"
// import HeroSection from "./HeroSection"
 
import Testimonial from "./Testimonial"
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs"
import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ"
import HWD from "../../Banking&Finance/HWD"
import Onboarding from "./Onboarding"
// import AutoDataChange from "./AutoDataChange"
// import HeroBottomNavbar from "../../Banking&Finance/ProductPago/HeroBottomNav"
import ImageContainer from "./ImageContainer"
// import Partner from "./Partner"
import Firm from "./Firm"
import ImageGrid from "./ImageGrid"
import Timeline from "./Timeline"
import FinalHero from "./FinalHero"
import CTA from "./CTA"
import CostOptimization from "./CostOptimization"
 
 

const AIProduct = () => {
  return (
    <div className="relative">
      <section   className="bg-no-repeat bg-cover z-10 "
        style={{
          backgroundImage: "url(/AIProduct/AiHome.png)",
         
        }}>
    <FinalHero/>
      {/* <HeroSection /> */} 
      {/* <HeroBottomNavbar /> */}
      
     
        <ImageContainer />
    
      </section>
     <CTA/>
       
      <section
       
        className="relative     bg-no-repeat bg-cover z-10"
        style={{ backgroundImage: "url('/AIProduct/CloudBg.png')" }}
      >
        <Onboarding />
         <Firm/>
       {/* <section id="process" className="relative -mt-40 z-30">
  <AutoDataChange />
 
</section> */}

     


      {/* <Partner /> */}
      <ImageGrid/>
       </section>
      <FeatureCards />
      <CostOptimization/>
      <Timeline/>
      <Testimonial />
      <div id="usecases">
      <HWD />
      </div>
      <div id="faq">
      <FaqSection />
      </div>
      <div id="blogs">
      <AIBlogs />
      </div> 
      <AIFooter />
    </div>
  );
};

export default AIProduct;

 