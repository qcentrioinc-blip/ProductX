import StickyBackgroundLayout from "./StickyBackgroundLayout";
import LandingPageEHS from "./LandingPageEHS";
import { Logos } from "./Logos";
import StatsSectionEHR from "./StatsSectionEHR";
import CTASection from "./CTASection";
import WhyQnest from "./WhyQnest";
// import GridSection from "./GridSection";
// import ShortDesc from "./ShortDesc";
// import SplitSection from "./SplitSection";
import BlogCarousel from "./BlogCarousel";
import UserProfile from "./UserProfile";
import EHRFooter from "./EHRFooter";
import UnifiedFeatureSection from "./UnifiedFeatureSection";

const HeroSectionEHR = () => {
  return (
    <div>

      {/* NO BACKGROUND */}
      <LandingPageEHS />

      {/* STICKY BACKGROUND STARTS */}
      <StickyBackgroundLayout image="/EHRandPMS/StickyImg.jpg">

        <Logos />
        <StatsSectionEHR />
        <CTASection />
        <WhyQnest />

        {/* <div className="relative w-full">

           <div className="absolute top-70 xl:top-95 left-0 w-full z-30">
            <GridSection />
          </div>

          <div className="relative z-10 pt-[90vh] md:pt-[75vh] lg:pt-[55vh] pb-[55vh] md:pb-[75vh]">
            <ShortDesc /> 
          </div> 

          <div className="absolute bottom-0 top-100 xl:top-20 left-0 w-full z-20 translate-y-[35vh]">
            <SplitSection />
          </div>

        </div> */}
          <UnifiedFeatureSection/>

      </StickyBackgroundLayout>

      {/* NO BACKGROUND */}
      <BlogCarousel />
      <UserProfile />
      <EHRFooter />

    </div>
  );
};

export default HeroSectionEHR;
