// import TitlePage from "./TitlePage";
// import ProductCards from "./ProductCards";
import FeatureGrid from "../ProductDetails(COS)/FeatureGrid";
// import ContactUS from "../ProductRemitree/ContactUS";
import NewFooter from "../../Global/NewFooter/NewFooter";
import Counter from "../../HomePage/LandingPages/Counter";
import ContactUS from "../ProductRemitree/ContactUS";
 
// import ContactSection from "../Products1/ContactSection";

const MarketPage = () => {
    return(
        <div>
            {/* <TitlePage /> */}
            {/* <ProductCards /> */}
            <FeatureGrid />
            <Counter />
            <ContactUS/>
            <NewFooter />
        </div>
    );
}

export default MarketPage;