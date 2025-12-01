import BlogGridSection from "../Blogs/BlogsGridSection";
import BNFNav from "../BNFnav";
import Banner from "../Career/Banner";
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
    <ContactUS/>
    <NewOneFooter/>
    </div>
  );
}
