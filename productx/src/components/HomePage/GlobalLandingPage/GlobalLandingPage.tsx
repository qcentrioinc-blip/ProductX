import WhatWeDo from "./WhatWeDo"
import Footer from "../../Global/Footer/Footer"
import CallToAction from "./CallToAction"
import Counter from "./Counter"
import HowWeDo from "./HowWeDo"
import LandingPage from "./LandingPage"
import Partnership from "./Partnership"
import TargetAudience from "./TargetAudience"
import Testimonial from "./Testimonial"
import VisionImpact from "./VisionImpact"
// import IndustrySlider from "./IndustrySlider"
 
 


const GlobalLandingPage = () => {
    return (
        <div >
            
            <div id="landingpage">
                <LandingPage />
            </div>
            {/* <div>
                <IndustrySlider/>
            </div> */}
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

export default GlobalLandingPage;
