import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
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
    <EHRFooter/>
  </div>
)
export default CaseStudiesPage