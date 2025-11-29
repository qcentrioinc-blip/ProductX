import LandingPageHighTech from "./LandingPageHighTech"
import ThreeStep from "./ThreeStep"
import CircleSteps from "./CircleSteps"
import ThreeCards from "./ThreeCards"
import RockTech from "./RockTech"
import OnePoint from "./OnePoint"
import TextAnimation from "./TextAnimation"
import SmallArticle from "./SmallArticle"
import SubFooter from "../../HighTech/AboutHightTech/SubFooter"
// import WorkProfile from "../../HighTech/AboutHightTech/WorkProfile"
// import FeatureCards from "./FeatureCards"
// import ProductSec from "./ProductSec"
// import WorkProfile from "./WorkProfile"

const HeroSectionHighTech = () => {
  return (
    <div>
      <LandingPageHighTech/>
      <TextAnimation />
      <ThreeCards />
      <RockTech />
      <CircleSteps />
      <OnePoint />
      <SmallArticle />
      <ThreeStep/>
      <SubFooter />
      {/* <WorkProfile /> */}
      {/* <ProductSec /> */}
      {/* <FeatureCards /> */}
    </div>
  )
}

export default HeroSectionHighTech
