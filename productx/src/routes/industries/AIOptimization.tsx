// import AIProduct from "../../components/AIOptimization/AIProduct/AIProduct"
import AINavbar from "../../components/AIOptimization/Navbar/AINavbar"
import { Product } from "../../components/AIOptimization/HomePageAI/Product"
import AIFooter from "../../components/HomePage/AIOptimization/AIFooter"
// import HeroAIOptimization from "../../components/HomePage/AIOptimization/HeroAIOptimization"

const AIOptimization = () => {
  return (
    <div>
      <AINavbar />

      {/* <HeroAIOptimization /> */}
      {/* <AIProduct/> */}
      <Product/>
      <AIFooter/>

    </div>
  )
}

export default AIOptimization
