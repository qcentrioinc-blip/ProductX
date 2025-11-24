 
import BNFNav from "../BNFnav"

import HWD from "../HWD"
import InsightThought from "../InsightThought"
import FaqSection from "../ProductSherlock/FAQ"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import Building from "./Building"
// import Capabilities from "./Capabilities"
import Enterprises from "./Enterprises"
import FirstProduct from "./FirstProduct"
// import PagoNavbar from "../ProductPago/PagoNavbar"
import HeroBottomNavbar from "../ProductPago/HeroBottomNav"
// import Pricing from "./Pricing"

const ProductsPage1 = () => {
    return (
        <div>
            <BNFNav/>
            <FirstProduct />
            <HeroBottomNavbar/>
            {/* <Capabilities /> */}
            <div id="overview">
                <Enterprises /></div>
             
             <div id="benefits"> <Building /></div>
           
            {/* <Pricing /> */}
            <div id="usecases"> <HWD /></div>
           
           <div id="faq"><FaqSection/></div>
            
            <div id="blogs"><InsightThought /></div>
            
           <ContactUS/>
           <NewOneFooter/>
        </div>
    )
}

export default ProductsPage1
