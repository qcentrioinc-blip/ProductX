import TitlePage from "./TitlePage";
import ProductCards from "./ProductCards";
import FeatureGrid from "../../Banking&Finance/ProductDetails(COS)/FeatureGrid";
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
import NewFooter from "../NewFooter/NewFooter";
import Counter from "../../HomePage/GlobalLandingPage/Counter";
import BNFNav from "../../Banking&Finance/BNFnav";

const MarketPage = () => {
    return(
        <div>
            <BNFNav/>
            <TitlePage />
            <ProductCards />
            <FeatureGrid />
            <Counter />
            <ContactUS />
            <NewFooter />
        </div>
    );
}

export default MarketPage;