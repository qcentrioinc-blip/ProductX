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
import Capabilities from "./Capabilities"
import { useContext, useEffect } from "react"
import { ScrollContext } from "../../../context/ScrollContext"
// import Pricing from "./Pricing"

const ProductsPage1 = () => {
    const scrollableContainerRef = useContext(ScrollContext);

    useEffect(() => {
        // Scroll the ScrollContext container to top
        if (scrollableContainerRef) {
            (scrollableContainerRef as any).scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Fallback to window scroll if ScrollContext not available
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [scrollableContainerRef]);
    return (
        <div>
            <BNFNav />
            <FirstProduct />
            <HeroBottomNavbar />
            <Capabilities />
            <div id="overview">
                <Enterprises /></div>

            <div id="benefits"> <Building /></div>

            {/* <Pricing /> */}
            <div id="usecases"> <HWD /></div>

            <div id="faq"><FaqSection /></div>

            <div id="blogs"><InsightThought /></div>

            <ContactUS />
            <NewOneFooter />
        </div>
    )
}

export default ProductsPage1
