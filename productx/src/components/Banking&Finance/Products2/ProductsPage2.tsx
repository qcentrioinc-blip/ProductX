import ArrowBuilding from "./ArrowBuilding";
import ContactUS from "./ContactUS";
import FiveCards from "./FiveCards";
import NewFooter from "./NewFooter";
import NewsLetter from "./NewsLetter";
import Overview from "./Overview";
import SecondHeading from "./SecondHeading";
import ThirdCards from "./ThirdCards";
import ThreeTab from "./ThreeTab";
import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider

const ProductsPage2 = () => {
  return (
    <ScrollProvider> {/* Wrap the entire content with ScrollProvider */}
      <Overview />
      <SecondHeading />
      <ThirdCards />
      <ThreeTab />
      <FiveCards />
      <ArrowBuilding />
      <NewsLetter />
      <ContactUS />
      
      <div 
        className='lg:relative lg:h-[500px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[600px] lg:w-full lg:pointer-events-none'>
          <NewFooter />
        </div>
      </div>
    </ScrollProvider>
  )
}

export default ProductsPage2;
