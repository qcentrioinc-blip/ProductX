import SubFooter from "../AboutHightTech/SubFooter"
import BlogContent from "./BlogContent"
import BlogHead from "./BlogHead"
import HeroSection from "./HeroSection"

 
const Resources = () => {
  return (
    <div>
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
