import { lazy, Suspense } from "react"
import LandingPage1 from "./LandingPage1"
import Map from "./Map"

// Below-the-fold: lazy load to speed up initial page render
const AnimatedStatement = lazy(() => import("./AnimatedStatement"))
const FutureSection = lazy(() => import("./FutureSection"))
const InnovationCards = lazy(() => import("./InnovationCards"))
const BusinessValuesSection = lazy(() => import("./BusinessValuesSection"))
const Milestone = lazy(() => import("./Milestone"))
const CEO = lazy(() => import("./CEO"))
const LifeCycleTech = lazy(() => import("./LifeCycleTech"))
const Counter = lazy(() => import("./Counter"))
const CallToAction = lazy(() => import("./CallToAction"))
const FlowingMenu = lazy(() => import("./FlowingMenu"))
const NewFooter = lazy(() => import("../../Global/NewFooter/NewFooter"))

const GlobalLandingPage = () => {
    return (
        <div className="relative">

            <div id="landingpage">
                <LandingPage1 />
            </div>

            <Suspense fallback={null}>
                <div className="gpu-optimized">
                    <AnimatedStatement />
                </div>
                <div id="futuresection" className="gpu-optimized">
                    <FutureSection />
                </div>
                <div id="innovationcards" className="gpu-optimized">
                    <InnovationCards />
                </div>
                <div id="map" className="gpu-optimized">
                    <Map />
                </div>
                <div id="businessvaluessection" className="gpu-optimized">
                    <BusinessValuesSection />
                </div>

                <div className="gpu-optimized">
                    <Milestone />
                </div>

                <div className="sticky top-0  h-[60vh] xl:h-screen z-0">
                    <CEO />
                </div>

                <div className="relative z-10 gpu-optimized">
                    <LifeCycleTech />
                </div>

                <div className="gpu-optimized">
                    <Counter />
                </div>
                <div id="calltoaction" className="gpu-optimized">
                    <CallToAction />
                </div>

                <div id="FlowingMenu" className="hidden xl:block gpu-optimized">
                    <FlowingMenu />
                </div>

                <div id="footer" className="gpu-optimized">
                    <NewFooter />
                </div>
            </Suspense>

        </div>
    )
}

export default GlobalLandingPage;
