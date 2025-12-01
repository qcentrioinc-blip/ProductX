import BlogGridSection from "../Blogs/BlogsGridSection";
import Banner from "../Career/Banner";
import ContactSection from "../ProductBankfair/ContactSection";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import TitleSec from "./TitleSec";

export default function NewsPage() {
  return (
    <div>
    <TitleSec/>
    <Banner/>
    <BlogGridSection/>
    <ContactSection/>
    <NewOneFooter/>
    </div>
  );
}
