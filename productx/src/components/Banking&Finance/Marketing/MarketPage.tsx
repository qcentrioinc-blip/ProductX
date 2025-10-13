import TitlePage from "./TitlePage";
import ProductCards from "./ProductCards";
import FeatureGrid from "../ProductDetails(COS)/FeatureGrid";
import Counter from "../../HomePage/Counter";
import ContactUS from "../Products2/ContactUS";
import NewFooter from "../Products2/NewFooter";

const MarketPage = () => {
    return(
        <div>
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