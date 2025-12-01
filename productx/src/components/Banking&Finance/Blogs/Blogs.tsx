import BNFNav from "../BNFnav"
import ContactSection from "../ProductBankfair/ContactSection"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
// import BlogGridSection from "./BlogsGridSection"
// import ContactSection from "../Products1/ContactSection"
// import NewOneFooter from "../Products2/NewOneFooter"

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
      {/* <BlogGridSection/> */}
      {/* <ContactSection/> */}
      <ContactSection/>
      <NewOneFooter/>
    </div>
  )
}

export default Blogs
