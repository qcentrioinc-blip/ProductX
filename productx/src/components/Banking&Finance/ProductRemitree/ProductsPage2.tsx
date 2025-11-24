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

const ProductsPage2 = () => {
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
