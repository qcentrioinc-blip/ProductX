import BNFNav from "../BNFnav"
import ContactUS from "../Products2/ContactUS"
import NewOneFooter from "../Products2/NewOneFooter"
import AllPosts from "./AllPosts"
import FeaturedCards from "./FeaturedCards"
import HeroSection from "./HeroSection"

 

const Blogs = () => {
  return (
    <div>
        <BNFNav/>
      <HeroSection/>
<FeaturedCards/>
<AllPosts/>
      <ContactUS/>
      <NewOneFooter/>
      
    </div>
  )
}

export default Blogs
