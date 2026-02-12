import BNFNav from "../Navbar/BNFnav"
// import ContactSection from "../ProductBankfair/ContactSection"
import ContactUS from "../ProductRemitree/ContactUS"
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
      <BNFNav />
      <HeroSection />
      <FeaturedCards />
      <AllPosts />
      <div className="relative">

        <div className=" lg:h-[200vh]"></div>



        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter />
        </div>


        <div
          className="absolute inset-0 z-40 pointer-events-none"

        >
          <ContactUS />
        </div>

      </div>
    </div>
  )
}

export default Blogs
