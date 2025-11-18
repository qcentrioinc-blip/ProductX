import SubFooter from "../AboutHightTech/SubFooter"
// import HighTechNav from "../HighTechNav/HighTechNav"
import BlogContent from "./BlogContent"
import BlogHead from "./BlogHead"
import HeroSection from "./HeroSection"

 
const Resources = () => {
  return (
    <div>
      {/* <HighTechNav/> */}
      <div className="relative overflow-x-hidden">
        <HeroSection/>
      <BlogHead/>
      </div>
      <BlogContent/>
      <SubFooter/>
      
      
    </div>
  )
}

export default Resources
