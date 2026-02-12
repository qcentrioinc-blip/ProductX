import HWD from "../HWD";
import InsightThought from "../InsightThought";
import FaqSection from "../ProductSherlock/FAQ";
import Cards from "./Cards";
import ThreeTab from "../ProductRemitree/ThreeTab";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";
// Import ScrollProvider


// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../Navbar/BNFnav";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
// import ContactSection from "../ProductBankfair/ContactSection";
import ContactUS from "../ProductRemitree/ContactUS";

const Sams_Page = () => {
  return (
    <div>
      <BNFNav />
      <HeroSection />
      <Feature />
      <Cards />
      <ThreeTab />
      <HWD />
      <FaqSection />
      <InsightThought />
      <div className="relative">

        <div className=" lg:h-[200vh]"></div>



        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter />
        </div>


        <div
          className="absolute inset-0 z-40 pointer-events-none"

        >
          <ContactUS />
        </div>

      </div>

    </div>
  );
}

export default Sams_Page;
