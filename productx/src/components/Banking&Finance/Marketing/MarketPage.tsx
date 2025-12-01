// import TitlePage from "./TitlePage";
// import ProductCards from "./ProductCards";
import FeatureGrid from "../ProductDetails(COS)/FeatureGrid";
import ContactSection from "../ProductBankfair/ContactSection";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import Counter from "../../HomePage/GlobalLandingPage/Counter";

const MarketPage = () => {
    return(
        <div>
            {/* <TitlePage /> */}
            {/* <ProductCards /> */}
            <FeatureGrid />
            <Counter />
            <ContactSection/>
            <NewOneFooter />
        </div>
    );
}

export default MarketPage;