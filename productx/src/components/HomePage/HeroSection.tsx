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
        <div>
            <div id="landingpage">
                <LandingPage />
            </div>
            <WhatWeDo/>
             <Partnership />
            <div id="visionimpact" className="min-h-screen">
                <VisionImpact />
            </div>
           
            <HowWeDo />
            <TargetAudience />
            <Testimonial />
            <Counter />
            <CallToAction />
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}
 
export default HeroSection
 