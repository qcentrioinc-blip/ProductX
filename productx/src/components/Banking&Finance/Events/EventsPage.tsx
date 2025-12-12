// import BlogGridSection from "../Blogs/BlogsGridSection";
import BNFNav from "../BNFnav";
import ContactSection from "../ProductBankfair/ContactSection";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import TextSec from "./TextSec";
import TitleSec from "./TitleSec";
import AllPosts from "../Blogs/AllPosts";

export default function EventssPage() {
  return (
    <div>
      <BNFNav/>
    <TitleSec/>
    <TextSec/>
    <AllPosts/>
    {/* <BlogGridSection/> */}
    <ContactSection/>
    <NewOneFooter/>
  
    </div>
  );
}
