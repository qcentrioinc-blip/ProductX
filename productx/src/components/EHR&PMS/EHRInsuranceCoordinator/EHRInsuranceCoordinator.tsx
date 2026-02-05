import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import FeatureHighlights from "../EHRNurse/FeatureHighlights"
import InformationGrid from "../EHRNurse/InformationGrid"
import EHRNavbar from "../Navbar/EHRNavbar"
import Benefits from "./Benefits"
import FeatureShowcase from "./FeatureGrid"
import HeroSec from "./HeroSec"
import PointsSec from "./PointsSec"

export const EHRInsuranceCoordinator = () => {
  return (
    <div>
        <EHRNavbar />
        <HeroSec />
        <FeatureHighlights />
        <Benefits />
        <FeatureShowcase />
        <PointsSec/>
        <InformationGrid/>
        <EHRFooter />
    </div>
  )
}
