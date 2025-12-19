import HWD from "../HWD";
import TitleSec from "./TitleSec";
import CardsSection from "./CardsSection";
import Features from "./Features";
import ContentInfo from "./ContentInfo";
import Grid from "./Grid";
import FAQ from "./FAQ";
import InsightThought from "../InsightThought";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
import BNFNav from "../BNFnav";
import ContactUS from "../ProductRemitree/ContactUS";


const ProductDetails_4_page = () => {
  return (

    <div>
      <BNFNav/>
        <TitleSec /> 
        <HeroBottomNavbar/>
        <CardsSection />
        <Features />
        <ContentInfo />
        <Grid />
        <HWD />
        <FAQ />
        <InsightThought />
        <div className="relative">
      
      <div className=" lg:h-[200vh]"></div>
     
     
       
        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter/>
        </div>
 
         
        <div
          className="absolute inset-0 z-40 pointer-events-none"
         
        >
          <ContactUS/>
        </div>
 
      </div>
        
    </div>

    )
}

export default ProductDetails_4_page