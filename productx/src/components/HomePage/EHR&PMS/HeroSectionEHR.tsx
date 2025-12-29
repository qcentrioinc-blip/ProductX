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
