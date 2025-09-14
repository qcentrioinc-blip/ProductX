import HowWeDo from "./HowWeDo"
import LandingPage from "./LandingPage"
import Partnership from "./Partnership"
import Testimonial from "./Testimonial"
import TargetAudience from "./TargetAudience"
import Counter from "./Counter"
const HeroSection = () => {
    return (
        <div>
            <LandingPage />
            <Partnership/>
            <HowWeDo/>
            <TargetAudience/>
            <Testimonial/>
            <Counter/>
        </div>
    )
}

export default HeroSection