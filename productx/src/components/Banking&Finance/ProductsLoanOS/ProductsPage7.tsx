import { useContext, useEffect } from "react"
import BNFNav from "../Navbar/BNFnav"
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
    if (scrollableContainerRef) {
      scrollableContainerRef.scrollTo(0, {
        offset: 0,
        immediate: false,
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [scrollableContainerRef]);

  return (
    <div>
      <BNFNav />
      <FirstPage />
      <SecondSection />
      <ThreeCards />
      <AboutFeaturesSection />
      <Harper />
      <HWD />
      <FaqSection />
      <InsightThought />
      <div className="relative">

        <div className=" lg:h-[200vh]"></div>



        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter />
        </div>


        <div
          className="absolute inset-0 z-40 pointer-events-none"

        >
          <ContactUS />
        </div>

      </div>
    </div>
  )
}

export default ProductsPage7
