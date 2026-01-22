 
import FeatureCards from "../HomePageAI/Features"
// import HeroSection from "./HeroSection"
 
// import Testimonial from "./Testimonial"
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs"
// import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ"
import HWD from "../../Banking&Finance/HWD"
import Onboarding from "./Onboarding"
// import AutoDataChange from "./AutoDataChange"
// import HeroBottomNavbar from "../../Banking&Finance/ProductPago/HeroBottomNav"
// import ImageContainer from "./ImageContainer"
// import Partner from "./Partner"
import Firm from "./Firm"
import ImageGrid from "../HomePageAI/ImageGrid"
import Timeline from "../HomePageAI/Timeline"
import FinalHero from "./FinalHero"
// import CTA from "./CTA"
import CostOptimization from "./CostOptimization"
import ImageContainer from "./ImageContainer"
import TextSec from "./CTA"
import FloatingLines from "../../HomePage/AIOptimization/AIFooterBackground"
 
 

const AIProduct = () => {
  const ENABLED_WAVES: Array<'top' | 'middle' | 'bottom'> = ['top', 'bottom', 'middle'];
const LINE_COUNT = [4, 4, 4];
const LINE_DISTANCE = [8, 6, 4];
  return (
    <div className="relative">
      <section   className="bg-no-repeat  bg-cover z-10 "
        // style={{
        //   backgroundImage: "url(/AIProduct/AiHome.png)",
         
        // }}
        > <div className="absolute inset-0 z-0 pointer-events-none">
                             <FloatingLines 
                              linesGradient={[
                 '#00FFCC',
                 '#0099FF',
                 '#6600FF'
               ]}
                                 enabledWaves={ENABLED_WAVES}
                                 lineCount={LINE_COUNT}
                                 lineDistance={LINE_DISTANCE}
                                 bendRadius={5.0}
                                 bendStrength={-0.5}
                                 interactive={false} 
                                 parallax={true}
                                  
                             />
                         </div>

    <FinalHero/>  
        <ImageContainer />
      </section>
     {/* <CTA/> */}
       <TextSec/>
      <section
       className="relative     bg-no-repeat bg-cover z-10"
        style={{ backgroundImage: "url('/AIProduct/CloudBg.png')" }}
      >
        <Onboarding />
         <Firm/>
     {/* <Partner /> */}
      <ImageGrid/>
       </section>
      <FeatureCards />
      <CostOptimization/>
      <Timeline/>
      {/* <Testimonial /> */}
      <div id="usecases">
      <HWD />
      </div>
      <div id="faq">
      <FaqSection />
      </div>
      <div id="blogs">
      <AIBlogs />
      </div> 
      {/* <AIFooter /> */}
    </div>
  );
};

export default AIProduct;

 