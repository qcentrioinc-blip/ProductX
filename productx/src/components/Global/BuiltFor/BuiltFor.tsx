import InsightThought from "../../Banking&Finance/InsightThought"
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter"
import BuiltForIntro from "./BuiltForIntro"
import Cardcase from "./CardCase"
import GradientCardsSection from "./GradientCards"
import ImgSec from "./ImgSec"
import SplitFeature from "./SplitFeature"
import TextSec from "./TextSec"
import TitleSectionSwitcher from "./TitleSectionSwitcher"


export const BuiltFor = () => {
  return (
    <div>
        <TitleSectionSwitcher/>
        <TextSec/>
        <Cardcase/>
        <BuiltForIntro/>
        <GradientCardsSection/>
        <SplitFeature/>
        <ImgSec/>
        <InsightThought/>
        <NewOneFooter/>
    </div>
  )
}
