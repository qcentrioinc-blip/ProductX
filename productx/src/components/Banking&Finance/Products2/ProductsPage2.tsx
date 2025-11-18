import ArrowBuilding from "./ArrowBuilding";
import ContactUS from "./ContactUS";
import FiveCards from "./FiveCards";
// import NewFooter from "./NewFooter";
import NewsLetter from "./NewsLetter";
import Overview from "./Overview";
import SecondHeading from "./SecondHeading";
import ThirdCards from "./ThirdCards";
import ThreeTab from "./ThreeTab";
import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
import NewOneFooter from "./NewOneFooter";
import BNFNav from "../BNFnav";

const ProductsPage2 = () => {
  return (
    
    <ScrollProvider> {/* Wrap the entire content with ScrollProvider */}
    <BNFNav/>
      <Overview />
      <SecondHeading />
      <ThirdCards />
      <ThreeTab />
      <FiveCards />
      <ArrowBuilding />
      <NewsLetter />
      <ContactUS />
      
      <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter />
        </div>
      </div>
    </ScrollProvider>
  )
}

export default ProductsPage2;
