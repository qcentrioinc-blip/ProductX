// import CircleAnimation from "./CircleAnimation"
import EHRFooter from "./EHRFooter"
// import HealthFeatures from "./HealthFeatures"
import LandingPageEHS from "./LandingPageEHS"
// import ParaDescription from "./ParaDescription"
import ShortDesc from "./ShortDesc"
import StatsSectionEHR from "./StatsSectionEHR"
import { Logos} from "./Logos"
import UserProfile from "./UserProfile"
// import Testimonials from "./Testimonials"
import WhyQnest from "./WhyQnest"
import GridSection from "./GridSection"
import SplitSection from "./SplitSection"
import BlogCarousel from "./BlogCarousel"
import CTASection from "./CTASection"
 
const HeroSectionEHR = () => {
 
  return (
    <div>
      <LandingPageEHS />
      <Logos/>
      <StatsSectionEHR/>
      <CTASection/>
      <WhyQnest />
     
     
      <div className="relative w-full">
 
  <div className="absolute top-95 left-0 w-full z-30">
    <GridSection />
  </div>
 
  <div className="relative z-10 pt-[55vh] pb-[55vh]">
    <ShortDesc />
  </div>
 
  <div className="absolute bottom-0 top-20 left-0 w-full z-20 translate-y-[35vh]">
    <SplitSection />
  </div>
 
</div>
 
     
      {/* <CircleAnimation /> */}
     
      {/* <Testimonials /> */}
      {/* <ParaDescription /> */}
      {/* <HealthFeatures /> */}
      <BlogCarousel/>
      <UserProfile />
      <EHRFooter />
    </div>
  )
}
 
export default HeroSectionEHR