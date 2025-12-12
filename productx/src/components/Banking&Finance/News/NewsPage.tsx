import BlogGridSection from "../Blogs/BlogsGridSection";
import BNFNav from "../BNFnav";
import Banner from "../Career/Banner";
// import ContactSection from "../ProductBankfair/ContactSection";
import ContactUS from "../ProductRemitree/ContactUS";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import TitleSec from "./TitleSec";

export default function NewsPage() {
  return (
    <div>
      <BNFNav/>
    <TitleSec/>
    <Banner/>
    <BlogGridSection/>
   <div className="relative">
      
      <div className=" lg:h-[200vh]"></div>
     
     
       
        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter/>
        </div>
 
         
        <div
          className="absolute inset-0 z-40 pointer-events-none"
         
        >
          <ContactUS/>
        </div>
 
      </div>
    </div>
  );
}
