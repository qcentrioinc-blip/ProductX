import TitlePage from "./TitlePage";
import ProductCards from "./ProductCards";
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";

const MarketPage = () => {
  return (
    <div>
      <TitlePage />
      <ProductCards />
      

       <div id="contact-us">
        {/* DESKTOP */}
        <div className="hidden lg:block relative">gi
          <ContactUS />
          <NewOneFooter />
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <ContactUS />
          <NewOneFooter />
        </div>
      </div>
    </div>
  );
}

export default MarketPage;