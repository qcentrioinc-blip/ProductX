import TitleSec from "./TitleSec"
import BlogArticleGrid from "./BlogArticleGrid"
import ImageCard from "./ImageCard"
import FeaturePoint from "./FeaturePoint"


const BlogsPage = () => (
  <div>
    <TitleSec/>
    <BlogArticleGrid />
    <div className="relative overflow-x-hidden">
  <ImageCard />
  <FeaturePoint />
</div>

    </div>
)
export default BlogsPage