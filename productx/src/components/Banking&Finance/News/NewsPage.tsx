// import BlogGridSection from "../Blogs/BlogsGridSection";
import BNFNav from "../BNFnav";
import Banner from "../Career/Banner";
import ContactSection from "../ProductBankfair/ContactSection";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import TitleSec from "./TitleSec";
import AllPosts from "../Blogs/AllPosts";

export default function NewsPage() {
  return (
    <div>
      <BNFNav/>
    <TitleSec/>
    <Banner/>
    <AllPosts/>
    {/* <BlogGridSection/> */}
    <ContactSection/>
    <NewOneFooter/>
    </div>
  );
}
