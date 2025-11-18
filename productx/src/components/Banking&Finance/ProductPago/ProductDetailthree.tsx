"use client"

import HWD from "../HWD"
import CTA from "./CTA"
import HeroSection from "./HeroSection"
import ImageGrid from "./ImageGrid"
import Workflow from "./Workflow"
import Cards from "./Cards"
import PagoNavbar from "./PagoNavbar"
 
import FAQ from "../ProductDetails4/FAQ"
import InsightThought from "../InsightThought"
import ContactUS from "../Products2/ContactUS"
import NewFooter from "../Products2/NewFooter"
import BNFNav from "../BNFnav"
const ProductDetailthree = () => {
  return (
    <div >
      <BNFNav/>
    <HeroSection/>
    <PagoNavbar/>
    <CTA/>
    <Workflow/>
  
    <Cards/>
    <ImageGrid/>
    <HWD/>
    <FAQ />
    <InsightThought />
    <ContactUS />
    <NewFooter />

    </div>
  )
}

export default ProductDetailthree
