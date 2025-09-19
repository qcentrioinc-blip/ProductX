import InsightThought from "../../components/HighTech/InsightThought"
// import LandingPage from "../../components/HighTech/LandingPage"
import HowWeDoIn from "../../components/HighTech/HowWeDoIn"
import Footer from "../../components/Footer/Footer"
import Process from "../../components/HighTech/Process"
import WhatWeDoIn from "../../components/HighTech/WhatWeDoIn"
import Partnership from "../../components/HomePage/Partnership"
import LandingPag from "../../components/HighTech/LandingPage"
const HighTech = () => (
  <div>
    <LandingPag/>
    <Partnership/>
    <HowWeDoIn/>
    <WhatWeDoIn/>
    <InsightThought />
    <Process />
    {/* <LandingPage /> */}
    <Footer />
  </div>
)
export default HighTech