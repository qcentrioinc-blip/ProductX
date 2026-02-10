import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import FeatureHighlights from "../EHRNurse/FeatureHighlights"
import InformationGrid from "../EHRNurse/InformationGrid"
import EHRNavbar from "../Navbar/EHRNavbar"
import Benefits from "./Benefits"
import FeatureGrid from "./FeatureGrid"
import FeaturePointInsuranceCoordinator from "./FeaturePointInsuranceCoordinator"
import HeroSec from "./HeroSec"
// import PointsSec from "./PointsSec"

export const EHRInsuranceCoordinator = () => {
  return (
    <div>
        <EHRNavbar />
        <HeroSec />
        <FeatureHighlights />
        <Benefits />
        <FeatureGrid />
        {/* <PointsSec/> */}
        <InformationGrid/>
        <FeaturePointInsuranceCoordinator />
        <EHRFooter />
    </div>
  )
}
