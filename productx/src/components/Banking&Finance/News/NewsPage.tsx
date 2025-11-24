import BlogGridSection from "../Blogs/BlogsGridSection";
import Banner from "../Career/Banner";
import ContactSection from "../Products1/ContactSection";
import NewOneFooter from "../Products2/NewOneFooter";
import TitleSec from "./TitleSec";

export default function NewsPage() {
  return (
    <div>
    <TitleSec/>
    <Banner/>
    <BlogGridSection/>
    <ContactSection />
    <NewOneFooter/>
    </div>
  );
}
