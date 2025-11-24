import TitleSec from "./TitleSec"
import BlogArticleGrid from "./BlogArticleGrid"
import ImageCard from "./ImageCard"
import FeaturePoint from "./FeaturePoint"
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"


const BlogsPage = () => (
  <div>
    <TitleSec/>
    <BlogArticleGrid />
    <div className="relative overflow-x-hidden">
  <ImageCard />
  <FeaturePoint />
  <EHRFooter/>
</div>

    </div>
)
export default BlogsPage