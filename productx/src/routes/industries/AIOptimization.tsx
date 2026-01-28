import AIProduct from "../../components/AIOptimization/AIProduct/AIProduct"
import AINavbar from "../../components/AIOptimization/Navbar/AINavbar"
import DeferredLoader from "../../components/Global/DeferredLoader"
// import { Product } from "../../components/AIOptimization/HomePageAI/Product"
// import HeroAIOptimization from "../../components/HomePage/AIOptimization/HeroAIOptimization"

const AIOptimization = () => {
  return (
    <div>
      <AINavbar />

      {/* <HeroAIOptimization /> */}
      <main>
        <AIProduct />
      </main>
      {/* <Product/> */}
      <DeferredLoader
        loader={() => import("../../components/HomePage/AIOptimization/AIFooter")}
        delay={1500}
      />

    </div>
  )
}

export default AIOptimization
