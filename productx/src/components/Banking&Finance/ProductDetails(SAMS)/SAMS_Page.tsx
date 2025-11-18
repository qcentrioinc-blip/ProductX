import HWD from "../HWD";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductDetails4/FAQ";
import Cards from "./Cards";
import ContactUS from "../Products2/ContactUS";
import ThreeTab from "../Products2/ThreeTab";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";
import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
import NewOneFooter from "../Products2/NewOneFooter";


const Sams_Page = () => {
  return (
    <div>
      <ScrollProvider>
        <HeroSection/>
        <Feature />
        <Cards />
        <ThreeTab />
        <HWD />
        <FaqSection />
        <InsightThought />
        <ContactUS />
        {/* <NewFooter /> */}
         <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter/>
        </div>
      </div>
      </ScrollProvider>
    </div>
  );
}

export default Sams_Page;
