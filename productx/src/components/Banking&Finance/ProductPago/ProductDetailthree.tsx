"use client"

import HWD from "../HWD"
import CTA from "./CTA"
import HeroSection from "./HeroSection"
import ImageGrid from "./ImageGrid"
import Workflow from "./Workflow"
import Cards from "./Cards"
import PagoNavbar from "./PagoNavbar"
 
import FAQ from "../ProductSherlock/FAQ"
import InsightThought from "../InsightThought"
import NewFooter from "../ProductRemitree/NewFooter"
import BNFNav from "../BNFnav"
import ContactSection from "../ProductBankfair/ContactSection"
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
