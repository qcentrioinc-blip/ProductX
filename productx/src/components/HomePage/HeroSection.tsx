import Footer from "../Footer/Footer"
import LandingPage from "./LandingPage"
import VisionImpact from "./VisionImpact"
import Partnership from "./Partnership"
import HowWeDo from "./HowWeDo"
import TargetAudience from "./TargetAudience"
import Testimonial from "./Testimonial"
import Counter from "./Counter"

const HeroSection = () => {
    return (
        <div>
            <div id="landingpage">
                <LandingPage />
            </div>
            <div id="visionimpact">
                <VisionImpact />
            </div>

             <Partnership/>
            <HowWeDo/>
            <TargetAudience/>
            <Testimonial/>
            <Counter/>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HeroSection