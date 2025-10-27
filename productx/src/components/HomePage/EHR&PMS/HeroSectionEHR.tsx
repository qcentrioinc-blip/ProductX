import CircleAnimation from "./CircleAnimation"
import EHRFooter from "./EHRFooter"
import HealthFeatures from "./HealthFeatures"
import LandingPageEHS from "./LandingPageEHS"
import ParaDescription from "./ParaDescription"
import ShortDesc from "./ShortDesc"
import Testimonials from "./Testimonials"
import WhyQnest from "./WhyQnest"

const HeroSectionEHR = () => {
  return (
    <div>
      <LandingPageEHS />
      <CircleAnimation />
      <WhyQnest />
      <ShortDesc />
      <Testimonials />
      <HealthFeatures />
      <ParaDescription />
      <EHRFooter />
    </div>
  )
}

export default HeroSectionEHR
