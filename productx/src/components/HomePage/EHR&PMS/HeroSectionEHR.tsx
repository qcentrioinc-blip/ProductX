// import StickyBackgroundLayout from "./StickyBackgroundLayout";
import LandingPageEHS from "./LandingPageEHS";
// import { Logos } from "./Logos";
// import StatsSectionEHR from "./StatsSectionEHR";
// import CTASection from "./CTASection";
import WhyQnest from "./WhyQnest";
// import GridSection from "./GridSection";
// import ShortDesc from "./ShortDesc";
// import SplitSection from "./SplitSection";
import BlogCarousel from "./BlogCarousel";
import UserProfile from "./UserProfile";
import EHRFooter from "./EHRFooter";
import UnifiedFeatureSection from "./UnifiedFeatureSection";
// import Stroke from "../../EHR&PMS/AboutUs/Stroke";

import Testimonial from "../../EHR&PMS/ClinicApp/Testimonial";
import HWD from "../../Banking&Finance/HWD";
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ";
import Managment from "./Managment";
 

const HeroSectionEHR = () => {
  return (
    <div>

      {/* NO BACKGROUND */}
      <LandingPageEHS />
 <WhyQnest />

 <Testimonial/>

      {/* STICKY BACKGROUND STARTS */}
      {/* <StickyBackgroundLayout image="/EHRandPMS/StickyImg.jpg"> */}

        {/* <Logos /> */}
        
        {/* <StatsSectionEHR /> */}
        {/* <div className="relative">
        <Stroke/>
        <CTASection />
        
       

        </div> */}
        <Managment/>
          <UnifiedFeatureSection/>

      {/* </StickyBackgroundLayout> */}

      {/* NO BACKGROUND */}
      <BlogCarousel />
      <UserProfile />
      <HWD/>
      <FaqSection/>
      <EHRFooter />

    </div>
  );
};

export default HeroSectionEHR;
