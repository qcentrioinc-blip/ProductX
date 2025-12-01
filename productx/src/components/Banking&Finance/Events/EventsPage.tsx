import BlogGridSection from "../Blogs/BlogsGridSection";
import BNFNav from "../BNFnav";
import ContactSection from "../ProductBankfair/ContactSection";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
 
import TextSec from "./TextSec";
import TitleSec from "./TitleSec";

export default function EventssPage() {
  return (
    <div>
      <BNFNav/>
    <TitleSec/>
    <TextSec/>
    <BlogGridSection/>
    <ContactSection/>
    <NewOneFooter/>
  
    </div>
  );
}
