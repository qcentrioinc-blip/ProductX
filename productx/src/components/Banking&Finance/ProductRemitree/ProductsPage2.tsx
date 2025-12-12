// import ArrowBuilding from "./ArrowBuilding";
import ContactUS from "./ContactUS";
import FiveCards from "./FiveCards";
// import NewFooter from "./NewFooter";
import NewsLetter from "./NewsLetter";
import Overview from "./Overview";
// import SecondHeading from "./SecondHeading";
import ThirdCards from "./ThirdCards";
import ThreeTab from "./ThreeTab";
// import { ScrollProvider } from "../../../context/ScrollContext"; 
import NewOneFooter from "./NewOneFooter";
import BNFNav from "../BNFnav";
import TwoPart from "./TwoPart";
import HWD from "../HWD";
import FaqSection from "../ProductSherlock/FAQ";
import InsightThought from "../InsightThought";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../../context/ScrollContext";

const ProductsPage2 = () => {

  const scrollableContainerRef = useContext(ScrollContext);

    useEffect(() => {
        // Scroll the ScrollContext container to top
        if (scrollableContainerRef) {
            (scrollableContainerRef as any).scrollTo({
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
    <>
    
    {/* <ScrollProvider>  */}
    <BNFNav/>
    
   
      <Overview />
   
    <HeroBottomNavbar/>
   
     
      <div id="overview">
        <ThirdCards />
        
      </div>
      

     <div id="benefits">
      <ThreeTab /> 
       </div> 
       <FiveCards />
      <TwoPart />
     
      {/* <ArrowBuilding /> */}
      <div id="process"> <NewsLetter /></div>
     
        <div id="usecases">
        <HWD />
      </div>
   <div id="faq">
     <FaqSection />
     </div>
      <div id="blogs">
        <InsightThought />
      </div>
      <ContactUS />
          <NewOneFooter />
       </>
    // </ScrollProvider>
  )
}

export default ProductsPage2;
