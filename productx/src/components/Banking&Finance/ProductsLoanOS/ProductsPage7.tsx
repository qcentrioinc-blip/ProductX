import BNFNav from "../BNFnav"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import FaqSection from "../ProductSherlock/FAQ"
import FirstPage from "./FirstPage"
import Harper from "./Harper"
import SecondSection from "./SecondSection"
import ThreeCards from "./ThreeCards"

const ProductsPage7 = () => {
  return (
    <div>
      <BNFNav/>
        <FirstPage />
        <SecondSection />
        <ThreeCards />
        <Harper />
        <HWD/>
        <FaqSection/>
        <InsightThought/>
        <ContactUS/>
        
        <NewOneFooter/>
    </div>
  )
}

export default ProductsPage7
