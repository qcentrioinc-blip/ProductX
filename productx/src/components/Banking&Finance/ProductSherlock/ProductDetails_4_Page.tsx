import HWD from "../HWD";
import TitleSec from "./TitleSec";
import CardsSection from "./CardsSection";
import Features from "./Features";
import ContentInfo from "./ContentInfo";
import Grid from "./Grid";
import FAQ from "./FAQ";
import InsightThought from "../InsightThought";
import NewOneFooter from "../ProductRemitree/NewOneFooter";

import BNFNav from "../BNFnav";
import ContactSection from "../ProductBankfair/ContactSection";


const ProductDetails_4_page = () => {
  return (

    <div>
      <BNFNav/>
        <TitleSec /> 
        <CardsSection />
        <Features />
        <ContentInfo />
        <Grid />
        <HWD />
        <FAQ />
        <InsightThought />
        <ContactSection/>
        <NewOneFooter/>
        
    </div>

    )
}

export default ProductDetails_4_page