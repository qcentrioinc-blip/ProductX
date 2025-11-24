import Footer from "../../Global/Footer/Footer"
import CallToAction from "../../HomePage/GlobalLandingPage/CallToAction"
import Counter from "../../HomePage/GlobalLandingPage/Counter"
import BNFNav from "../BNFnav"

import HWD from "../HWD"
import InsightThought from "../InsightThought"
import Building from "./Building"
import Capabilities from "./Capabilities"
import ContactSection from "./ContactSection"
import Enterprises from "./Enterprises"
import FirstProduct from "./FirstProduct"
// import Pricing from "./Pricing"

const ProductsPage1 = () => {
    return (
        <div>
            <BNFNav/>
            <FirstProduct />
            <Capabilities />
            <Enterprises />
            <Building />
            {/* <Pricing /> */}
            <HWD />
            <InsightThought />
            <Counter />
            <CallToAction />
            <ContactSection/>
            <Footer />
        </div>
    )
}

export default ProductsPage1
