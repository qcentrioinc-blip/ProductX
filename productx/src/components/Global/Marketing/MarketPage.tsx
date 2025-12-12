import TitlePage from "./TitlePage";
import ProductCards from "./ProductCards";
import FeatureGrid from "../../Banking&Finance/ProductDetails(COS)/FeatureGrid";
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
import Counter from "../../HomePage/GlobalLandingPage/Counter";
import BNFNav from "../../Banking&Finance/BNFnav";
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
import FeatureSection from "./FeatureSection";
import InfoCards from "./InfoCards";

const MarketPage = () => {
    return(
        <div>
            <BNFNav/>
            <TitlePage />
            <ProductCards />
            <FeatureSection/>
            <FeatureGrid />
            <InfoCards/>
            <Counter />
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
    );
}

export default MarketPage;