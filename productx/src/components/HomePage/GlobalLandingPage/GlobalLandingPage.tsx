import WhatWeDo from "./WhatWeDo"
// import Footer from "../../Global/Footer/Footer"
import CallToAction from "./CallToAction"
import Counter from "./Counter"
import HowWeDo from "./HowWeDo"
import LandingPage from "./LandingPage"
import Partnership from "./Partnership"
import TargetAudience from "./TargetAudience"
import Testimonial from "./Testimonial"
import VisionImpact from "./VisionImpact"
import Milestone from "./Milestone"
import LifeCycleTech from "./LifeCycleTech"
import CEO from "./CEO"
import NewFooter from "../../Global/NewFooter/NewFooter"

const GlobalLandingPage = () => {
    return (
        <div className="relative">

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

            <div>
                <Milestone />
            </div>

            {/* CEO Section - Sticky Background */}
            <div className="sticky top-0 h-screen z-0">
                <CEO />
            </div>

            {/* All sections that scroll over CEO - Wrapped together with z-10 */}
            <div className="relative z-10">
                {/* LifeCycleTech Section */}
                <LifeCycleTech />
                
                {/* Counter Section */}
                <div id="counter">
                    <Counter />
                </div>
                
                {/* CallToAction Section */}
                <div id="calltoaction">
                    <CallToAction />
                </div>
                
                {/* Footer Section */}
                <div id="footer">
                    <NewFooter />
                </div>
            </div>
        </div>
    )
}

export default GlobalLandingPage;
