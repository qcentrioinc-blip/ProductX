import HWD from "../HWD";
import TitleSec from "./TitleSec";
import CardsSection from "./CardsSection";
import Features from "./Features";
import ContentInfo from "./ContentInfo";
import Grid from "./Grid";
import FAQ from "./FAQ";
import InsightThought from "../InsightThought";
import ContactUS from "../Products2/ContactUS";
import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
import NewOneFooter from "../Products2/NewOneFooter";



const ProductDetails_4_page = () => {
  return (
    <ScrollProvider> {/* Wrap the entire content with ScrollProvider */}

    <div>
        <TitleSec /> 
        <CardsSection />
        <Features />
        <ContentInfo />
        <Grid />
        <HWD />
        <FAQ />
        <InsightThought />
        <ContactUS />
        <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter/>
        </div>
      </div>
    </div>
    </ScrollProvider>

    )
}

export default ProductDetails_4_page