import FeaturePoint from "../Careers/FeaturePoint"
import ArticleGrid from "./ArticleGrid"
import ImageCard from "./ImageCard"
import TitleSec from "./TitleSec"


const CaseStudiesPage = () => (
  <div>
    <div className="relative overflow-x-hidden">
    <TitleSec/>
    <ImageCard/>
    </div>
    <ArticleGrid/>
    <FeaturePoint/>    
  </div>
)
export default CaseStudiesPage