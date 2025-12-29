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

const HeroSectionEHR = () => {

  return (
    <div>
      <LandingPageEHS />
      <Logos />
      <StatsSectionEHR />
      <CTASection />
      <WhyQnest />


      {/* Interlocking Sections Container */}
      <div className="relative w-full bg-[#EEFDD9] mt-32 md:mt-48 pb-32 md:pb-48 flex flex-col items-center">

        <div className="w-full relative z-20 -mt-24 md:-mt-32 px-4 md:px-0">
          <GridSection />
        </div>

        <div className="w-full relative z-10 py-12 md:py-20">
          <ShortDesc />
        </div>

        <div className="w-full relative z-20 -mb-24 md:-mb-32 px-4 md:px-0">
          <SplitSection />
        </div>

      </div>


      {/* <CircleAnimation /> */}

      {/* <Testimonials /> */}
      {/* <ParaDescription /> */}
      {/* <HealthFeatures /> */}
      <BlogCarousel />
      <UserProfile />
      <EHRFooter />
    </div>
  )
}

export default HeroSectionEHR