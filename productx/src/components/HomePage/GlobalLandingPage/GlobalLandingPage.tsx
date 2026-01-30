import CallToAction from "./CallToAction"
import FutureSection from "./FutureSection"
import InnovationCards from "./InnovationCards"
import BusinessValuesSection from "./BusinessValuesSection"
import AnimatedStatement from "./AnimatedStatement"
import Milestone from "./Milestone"
import LifeCycleTech from "./LifeCycleTech"
import CEO from "./CEO"
import NewFooter from "../../Global/NewFooter/NewFooter"
import FlowingMenu from "./FlowingMenu"
import Counter from "./Counter"
import LandingPage1 from "./LandingPage1"

const GlobalLandingPage = () => {
    return (
        <div className="relative">

            <div id="landingpage">
                <LandingPage1 />
            </div>
            {/* <div>
                <IndustrySlider/>
            </div> */}
            <div className="gpu-optimized">
                <AnimatedStatement />
            </div>
            <div id="futuresection" className="gpu-optimized">
                <FutureSection />
            </div>
            <div id="innovationcards" className="gpu-optimized">
                <InnovationCards />
            </div>
            <div id="businessvaluessection" className="gpu-optimized">
                <BusinessValuesSection />
            </div>

            {/* CEO Section - Sticky Background */}

            <div className="gpu-optimized">
                <Milestone />
            </div>

            <div className="sticky top-0  h-[60vh] xl:h-screen z-0">
                <CEO />
            </div>

            {/* All sections that scroll over CEO - Wrapped together with z-10 */}
            <div className="relative z-10 gpu-optimized">
                {/* LifeCycleTech Section */}
                <LifeCycleTech />
            </div>

            <div className="gpu-optimized">
                <Counter />
            </div>
            {/* CallToAction Section */}
            <div id="calltoaction" className="gpu-optimized">
                <CallToAction />
            </div>

            <div id="FlowingMenu" className="hidden xl:block gpu-optimized">
                <FlowingMenu />
            </div>

            {/* Footer Section */}
            <div id="footer" className="gpu-optimized">
                <NewFooter />
            </div>

        </div>
    )
}

export default GlobalLandingPage;