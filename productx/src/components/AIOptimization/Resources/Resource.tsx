import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import AINavbar from "../Navbar/AINavbar"
import FirstPageResource from "./FirstPageResource"
import ResourceCard from "./ResourceCard"

const Resource = () => {
    return (
        <div>
            <AINavbar />
            <FirstPageResource />
            <ResourceCard />
            <AIFooter />
        </div>
    )
}

export default Resource
