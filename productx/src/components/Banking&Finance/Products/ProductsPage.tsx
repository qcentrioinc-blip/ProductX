import Footer from "../../Footer/Footer"
import CallToAction from "../../HomePage/CallToAction"
import Counter from "../../HomePage/Counter"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
import Building from "./Building"
import Capabilities from "./Capabilities"
import Enterprises from "./Enterprises"
import FirstProduct from "./FirstProduct"
import Pricing from "./Pricing"

const ProductsPage = () => {
    return (
        <div>
            <FirstProduct />
            <Capabilities />
            <Enterprises />
            <Building />
            <Pricing />
            <HWD />
            <InsightThought />
            <Counter />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default ProductsPage
