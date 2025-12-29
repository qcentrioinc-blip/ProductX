import AINavbar from "../Navbar/AINavbar"
import FeatureCards from "./Features"
import HeroSection from "./HeroSection"
import Partner from "./Partner"
import Testimonial from "./Testimonial"
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs"
import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ"
import HWD from "../../Banking&Finance/HWD"
import Onboarding from "./Onboarding"
import AutoDataChange from "./AutoDataChange"
import HeroBottomNavbar from "../../Banking&Finance/ProductPago/HeroBottomNav"
import ImageContainer from "./ImageContainer"
 

const AIProduct = () => {
  return (
    <div className="relative">
      <AINavbar />
      <HeroSection />
     
      <HeroBottomNavbar />
      

      {/* Image section - positioned to overflow */}
     <section className="relative z-30" id="overview">
        <ImageContainer />
      </section>

      {/* Cloud onboarding - negative margin pulls it up */}
      <section
       
        className="relative -mt-52 pt-24 md:pt-32 lg:pt-44 bg-no-repeat bg-contain z-10"
        style={{ backgroundImage: "url('/AIProduct/CloudBg.png')" }}
      >
        <Onboarding />
       <section id="process" className="relative -mt-40 z-30">
  <AutoDataChange />
</section>

      </section>

      <Partner />
      <FeatureCards />
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

 