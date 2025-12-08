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
      
      
      <div className="relative  my-96"> 
      <ShortDesc />
      <GridSection/>
      <SplitSection />
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
