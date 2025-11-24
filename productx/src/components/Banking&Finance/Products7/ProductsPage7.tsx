import BNFNav from "../BNFnav"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
import AboutFeaturesSection from "../ProductDetails(SAMS)/Feature"
import FaqSection from "../ProductDetails4/FAQ"
import ContactUS from "../Products2/ContactUS"
import NewOneFooter from "../Products2/NewOneFooter"
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
        <AboutFeaturesSection />
        <HWD />
        <FaqSection />
        <InsightThought />
        <ContactUS />
        <NewOneFooter />
    </div>
  )
}

export default ProductsPage7
