import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import FeatureHighlights from "../EHRNurse/FeatureHighlights"
import InformationGrid from "../EHRNurse/InformationGrid"
import EHRNavbar from "../Navbar/EHRNavbar"
import FeatureCards from "./FeatureCards"
import HeroSec from "./HeroSec"
import { Image } from "./Image"
import ImageWithCards from "./ImageWithCards"
import InfoWithImage from "./InfoWithImage"

export const EHRReceptionist = () => {
  return (
    <div>
        <EHRNavbar/>
        <HeroSec/>
        <FeatureCards/>
        <InfoWithImage/>
        <InformationGrid/>
        <Image/>
        <ImageWithCards/>
        <FeatureHighlights/>
        <EHRFooter/>

        
    </div>
  )
}
