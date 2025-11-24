// import TitlePage from "./TitlePage";
// import ProductCards from "./ProductCards";
import FeatureGrid from "../ProductDetails(COS)/FeatureGrid";
import NewFooter from "../Products2/NewFooter";
import Counter from "../../HomePage/LandingPages/Counter";
import ContactSection from "../Products1/ContactSection";

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