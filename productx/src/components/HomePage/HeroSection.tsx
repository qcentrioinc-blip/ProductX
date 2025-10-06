import Footer from "../Footer/Footer"
import LandingPage from "./LandingPage"
import VisionImpact from "./VisionImpact"
import Partnership from "./Partnership"
import HowWeDo from "./HowWeDo"
import TargetAudience from "./TargetAudience"
import Testimonial from "./Testimonial"
import Counter from "./Counter"
import WhatWeDo from "./WhatWeDo"
import CallToAction from "./CallToAction"

const HeroSection = () => {
    return (
        <div >
            <div id="landingpage">
                <LandingPage />
            </div>
            <div id="whatwedo">
                <WhatWeDo />
            </div>
            <div id="partnership">
                <Partnership />
            </div>
            <div id="howwedo">
                <HowWeDo />
            </div>
            <div id="targetaudience">
                <TargetAudience />
            </div>
            <div id="testimonial">
                <Testimonial />
            </div>
            <div id="visionimpact">
                <VisionImpact />
            </div>
            <div id="counter"><Counter /></div>
            <div id="calltoaction"><CallToAction /></div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HeroSection
