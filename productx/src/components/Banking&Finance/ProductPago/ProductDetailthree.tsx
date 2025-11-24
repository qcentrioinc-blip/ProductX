"use client"

import HWD from "../HWD"
import CTA from "./CTA"
import HeroSection from "./HeroSection"
import ImageGrid from "./ImageGrid"
import Workflow from "./Workflow"
import Cards from "./Cards"
import PagoNavbar from "./PagoNavbar"
 
import FAQ from "../ProductDetails(Sherlock)/FAQ"
import InsightThought from "../InsightThought"
import NewFooter from "../Products2/NewFooter"
import BNFNav from "../BNFnav"
import ContactSection from "../Products1/ContactSection"
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
    <ContactSection/>
    <NewFooter />

    </div>
  )
}

export default ProductDetailthree
