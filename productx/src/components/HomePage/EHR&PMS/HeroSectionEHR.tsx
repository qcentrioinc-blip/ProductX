// import CircleAnimation from "./CircleAnimation"
import EHRFooter from "./EHRFooter"
// import HealthFeatures from "./HealthFeatures"
import LandingPageEHS from "./LandingPageEHS"
// import ParaDescription from "./ParaDescription"
import ShortDesc from "./ShortDesc"
import StatsSectionEHR from "./StatsSectionEHR"
import { Logos } from "./Logos"
import UserProfile from "./UserProfile"
// import Testimonials from "./Testimonials"
import WhyQnest from "./WhyQnest"
import GridSection from "./GridSection"
import SplitSection from "./SplitSection"
import BlogCarousel from "./BlogCarousel"
import CTASection from "./CTASection"
 
 
import StickyBackgroundSection from "./StickyBackgroundSection"
import Stroke from "../../EHR&PMS/AboutUs/Stroke"
 
 
const HeroSectionEHR = () => {
  return (
    <div>
      <LandingPageEHS />
 {/* STICKY BACKGROUND SECTION */}
      <StickyBackgroundSection>
      {/* Stroke overlay */}
     <div className="relative min-h-[300vh]">
      <Stroke/>
        <Logos />
        <StatsSectionEHR />
         </div>
        <CTASection />
        <WhyQnest />
    

      {/* Rest stays same */}
      <div className="relative w-full">
        <div className="absolute top-70 xl:top-95 left-0 w-full z-30">
          <GridSection />
        </div>

        <div className="relative z-10 pt-[90vh] lg:pt-[55vh] pb-[55vh]">
          <ShortDesc />
        </div>

        <div className="absolute bottom-0 top-100 xl:top-20 left-0 w-full z-20 translate-y-[35vh]">
          <SplitSection />
        </div>
      </div>
       
  </StickyBackgroundSection>
    <BlogCarousel />
      <UserProfile />
      <EHRFooter />
    </div>

  );
};

export default HeroSectionEHR
 
 