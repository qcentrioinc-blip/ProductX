import TitlePage from "./TitlePage";
import ProductCards from "./ProductCards";
import ImgSec from "../../HomePage/GlobalLandingPage/ImgSec";
import AnimatedFooter from "../../AnimatedFooter";

const MarketPage = () => {
  return (
    <div>
      <TitlePage />
      <ProductCards />
      <div id="footer" className="gpu-optimized">
                          {/* <NewFooter /> */}
                          <ImgSec/>
                          <AnimatedFooter />
                      </div>
      

</div>
  );
}

export default MarketPage;