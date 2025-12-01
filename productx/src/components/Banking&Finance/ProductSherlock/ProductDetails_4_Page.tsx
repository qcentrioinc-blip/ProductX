import HWD from "../HWD";
import TitleSec from "./TitleSec";
// import CardsSection from "./CardsSection";
import Features from "./Features";
import ContentInfo from "./ContentInfo";
import Grid from "./Grid";
// import FAQ from "./FAQ";
import InsightThought from "../InsightThought";
import ContactUS from "../ProductRemitree/ContactUS";
import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
import NewOneFooter from "../ProductRemitree/NewOneFooter";

import BNFNav from "../BNFnav";
// import PagoNavbar from "../ProductPago/PagoNavbar";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
import FaqSection from "./FAQ";


const ProductDetails_4_page = () => {
  return (
    <ScrollProvider> {/* Wrap the entire content with ScrollProvider */}
 
      <BNFNav/>
        <TitleSec /> 
        <HeroBottomNavbar/>
        {/* <CardsSection /> */}
       
        <div id="overview">
        <Features />
        </div>
        <div id="benefits"> <ContentInfo /></div>
       
        <div id="process">
          <Grid />
          </div>
        
        <div id="usecases">
        <HWD />
      </div>
   <div id="faq">
     <FaqSection />
     </div>
      <div id="blogs">
        <InsightThought />
        
        <ContactUS />
        <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        
          
          <NewOneFooter/>
        </div>
      </div>
    
    </ScrollProvider>

    )
}

export default ProductDetails_4_page