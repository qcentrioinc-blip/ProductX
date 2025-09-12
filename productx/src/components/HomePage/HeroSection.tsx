import Footer from "../Footer/Footer"
import LandingPage from "./LandingPage"
import VisionImpact from "./VisionImpact"

const HeroSection = () => {
    return (
        <div>
            <div id="landingpage">
                <LandingPage />
            </div>
            <div id="visionimpact">
                <VisionImpact />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HeroSection