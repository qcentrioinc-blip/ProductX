// import TitlePage from "./TitlePage";
// import ProductCards from "./ProductCards";
import FeatureGrid from "../ProductDetails(COS)/FeatureGrid";
import NewFooter from "../ProductRemitree/NewFooter";
import Counter from "../../HomePage/LandingPages/Counter";
import ContactSection from "../ProductBankfair/ContactSection";

const MarketPage = () => {
    return(
        <div>
            {/* <TitlePage /> */}
            {/* <ProductCards /> */}
            <FeatureGrid />
            <Counter />
            <ContactSection />
            <NewFooter />
        </div>
    );
}

export default MarketPage;