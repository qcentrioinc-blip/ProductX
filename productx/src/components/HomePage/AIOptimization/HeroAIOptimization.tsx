import AINavbar from "../../AIOptimization/Navbar/AINavbar"
import AIBlogs from "./AIBlogs"
import AIFooter from "./AIFooter"
import CloudDiet from "./CloudDiet"
// import Consentur from "./Consentur"
import Frontier from "./Frontier"
import LandingPageAI from "./LandingPageAI"
// import Meta from "./Meta"
import Statistics from "./Statistics"
import StickyScrollSections from "../../AIOptimization/ResourceDoc/content/features/StickyScrollSections"
import ThreeCardAI from "./ThreeCardAI"

const HeroAIOptimization = () => {
  return (
    <div>
      <AINavbar/>
      <LandingPageAI />
      {/* <Consentur /> */}
      <StickyScrollSections/>
      <Frontier />
      <ThreeCardAI />
      {/* <Meta /> */}
      <Statistics />
      <CloudDiet />
      <AIBlogs />
      <AIFooter />
    </div>
  )
}

export default HeroAIOptimization
