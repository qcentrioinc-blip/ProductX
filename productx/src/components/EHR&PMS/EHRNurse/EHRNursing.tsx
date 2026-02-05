import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import EHRNavbar from "../Navbar/EHRNavbar"
import Counter from "./Counter"
import FeatureHighlights from "./FeatureHighlights"
import HeroSec from "./HeroSec"
import ImageShowcaseSection from "./ImageShowcaseSection"
import InformationGrid from "./InformationGrid"
import MedicalFeature from "./MedicalFeature"

export const EHRNursing = () => {
  return (
    <div>
        <EHRNavbar />
        <HeroSec/>
        <FeatureHighlights/>
        <MedicalFeature />
        <InformationGrid/>
        <ImageShowcaseSection/>
        <Counter/>
        <EHRFooter/>
    </div>
  )
}
