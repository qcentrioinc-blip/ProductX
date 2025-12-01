import CircleAnimation from "./CircleAnimation"
import EHRFooter from "./EHRFooter"
import HealthFeatures from "./HealthFeatures"
import LandingPageEHS from "./LandingPageEHS"
import ParaDescription from "./ParaDescription"
import ShortDesc from "./ShortDesc"
import UserProfile from "./UserProfile"
// import Testimonials from "./Testimonials"
import WhyQnest from "./WhyQnest"

const HeroSectionEHR = () => {
  
  return (
    <div>
      <LandingPageEHS />
      <WhyQnest />
      <CircleAnimation />
      <ShortDesc />
      {/* <Testimonials /> */}
      <ParaDescription />
      <HealthFeatures />
      <UserProfile />
      <EHRFooter />
    </div>
  )
}

export default HeroSectionEHR
