// import TitlePage from "./TitlePage";
// import ProductCards from "./ProductCards";
import FeatureGrid from "../ProductDetails(COS)/FeatureGrid";
// import ContactUS from "../ProductRemitree/ContactUS";
 
import ContactUS from "../ProductRemitree/ContactUS";
import Counter from "../Counter";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
 
// import ContactSection from "../Products1/ContactSection";

const MarketPage = () => {
    return(
        <div>
            {/* <TitlePage /> */}
            {/* <ProductCards /> */}
            <FeatureGrid />
            <Counter />
            <ContactUS/>
            <NewOneFooter />
        </div>
    );
}

export default MarketPage;