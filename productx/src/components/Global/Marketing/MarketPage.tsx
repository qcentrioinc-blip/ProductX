import TitlePage from "./TitlePage";
import ProductCards from "./ProductCards";
import FeatureGrid from "../../Banking&Finance/ProductDetails(COS)/FeatureGrid";
import Counter from "../../HomePage/GlobalLandingPage/Counter";
 
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
import FeatureSection from "./FeatureSection";
import InfoCards from "./InfoCards";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter";
import FooterHT from "../../HighTech/FooterHT";
import AIFooter from "../../HomePage/AIOptimization/AIFooter";
import Footer from "../Footer/Footer";

 



const MarketPage = () => {
   const { pathname } = useLocation();
 /* -------------------------------
     FOOTER SWITCHER
  -------------------------------- */
  const getFooter = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <NewOneFooter />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRFooter />;
    if (pathname.startsWith("/industries/high-tech")) return <FooterHT />;
    if (pathname.startsWith("/industries/ai-optimization")) return <AIFooter />;
    return <Footer />;
  };
    return(
        <div>
           <Navbar/>
            <TitlePage />
            <ProductCards />
            <FeatureSection/>
            <FeatureGrid />
            <InfoCards/>
            <Counter />
            {/* Footer */}
            {getFooter()}
      
      
 
      </div>
       
    );
}

export default MarketPage;