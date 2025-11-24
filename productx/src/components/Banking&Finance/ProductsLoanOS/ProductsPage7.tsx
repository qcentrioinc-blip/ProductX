import { useContext, useEffect } from "react"
import BNFNav from "../BNFnav"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
import AboutFeaturesSection from "../ProductDetails(SAMS)/Feature"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import FaqSection from "../ProductSherlock/FAQ"
import FirstPage from "./FirstPage"
import Harper from "./Harper"
import SecondSection from "./SecondSection"
import ThreeCards from "./ThreeCards"
import { ScrollContext } from "../../../context/ScrollContext"

const ProductsPage7 = () => {
  const scrollableContainerRef = useContext(ScrollContext);

    useEffect(() => {
        // Scroll the ScrollContext container to top
        if (scrollableContainerRef?.current) {
            scrollableContainerRef.current.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Fallback to window scroll if ScrollContext not available
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [scrollableContainerRef]);
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
