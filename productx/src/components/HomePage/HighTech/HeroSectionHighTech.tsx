import LandingPageHighTech from "./LandingPageHighTech"
import ThreeStep from "./ThreeStep"
import CircleSteps from "./CircleSteps"
import ThreeCards from "./ThreeCards"
import RockTech from "./RockTech"
import OnePoint from "./OnePoint"
import TextAnimation from "./TextAnimation"
import SmallArticle from "./SmallArticle"
// import FeatureCards from "./FeatureCards"
// import ProductSec from "./ProductSec"
// import WorkProfile from "./WorkProfile"

const HeroSectionHighTech = () => {
  return (
    <div>
      <LandingPageHighTech/>
      <TextAnimation />
      <ThreeCards />
      <CircleSteps />
      <OnePoint />
      <SmallArticle />
      <ThreeStep/>
      {/* <ProductSec /> */}
      {/* <FeatureCards />
      <WorkProfile />*/}
      // <RockTech /> 
    </div>
  )
}

export default HeroSectionHighTech
