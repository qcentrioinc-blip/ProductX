import { useContext, useEffect } from "react"
// import Footer from "../../Global/Footer/Footer"
// import CallToAction from "../../HomePage/GlobalLandingPage/CallToAction"
import Counter from "../../HomePage/GlobalLandingPage/Counter"
import BNFNav from "../BNFnav"
import HWD from "../HWD"
import InsightThought from "../InsightThought"
import Building from "./Building"
import Capabilities from "./Capabilities"
import Enterprises from "./Enterprises"
import FirstProduct from "./FirstProduct"
import { ScrollContext } from "../../../context/ScrollContext"
import NewOneFooter from "../Products2/NewOneFooter"

const ProductsPage1 = () => {
    const scrollableContainerRef = useContext(ScrollContext);

    useEffect(() => {
        // Scroll the ScrollContext container to top
        if (scrollableContainerRef?.current) {
            scrollableContainerRef.current.scrollTo({
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
            <BNFNav/>
            <FirstProduct />
            <Capabilities />
            <Enterprises />
            <Building />
            <HWD />
            <InsightThought />
            <Counter />
            {/* <CallToAction /> */}
            <NewOneFooter />
        </div>
    )
}

export default ProductsPage1