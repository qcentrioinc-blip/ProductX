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
            <ContactUS />
            <NewOneFooter />
        </div>
    );
}

export default MarketPage;