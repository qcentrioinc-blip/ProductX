"use client";

import HWD from "../HWD"
import CTA from "./CTA"
import HeroSection from "./HeroSection"
import ImageGrid from "./ImageGrid"
import Workflow from "./Workflow"
import Cards from "./Cards"
// import PagoNavbar from "./PagoNavbar"
 
import InsightThought from "../InsightThought"
import ContactUS from "../ProductRemitree/ContactUS"
 
import BNFNav from "../BNFnav"
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import HeroBottomNavbar from "./HeroBottomNav";
import FaqSection from "../ProductSherlock/FAQ";

const ProductDetailthree = () => {
  return (
    <div>

      <BNFNav />
 
      <HeroSection />

    <HeroBottomNavbar/>

       
      <div id="overview">
        <CTA />
      </div>
 <div id="benefits" >
        <Cards />
      </div>
 
      <div id="process">
        <Workflow />
      </div>
 
      
      <div >
        <ImageGrid />
      </div>
 
      <div id="usecases">
        <HWD />
      </div>
   <div id="faq">
     <FaqSection />
     </div>
      <div id="blogs">
        <InsightThought />
      </div>
    
  
     
      <ContactUS />
     <NewOneFooter/>

    </div>
  );
};

export default ProductDetailthree;
