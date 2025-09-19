import InsightThought from "../../components/HighTech/InsightThought"
import HowWeDoIn from "../../components/HighTech/HowWeDoIn"
import Footer from "../../components/Footer/Footer"
import Process from "../../components/HighTech/Process"
import WhatWeDoIn from "../../components/HighTech/WhatWeDoIn"
import Partnership from "../../components/HomePage/Partnership"
import BeyondBanking from "../../components/HighTech/BeyondBanking"
import HWD from "../../components/HighTech/HWD"
import LandingPage from "../../components/HomePage/LandingPage"
const HighTech = () => (
  <div>
    <LandingPage />
    <Partnership/>
    <HowWeDoIn/>
    <WhatWeDoIn/>
    <BeyondBanking />
    <HWD />
    <InsightThought />
    <Process />
    <Footer />
  </div>
)
export default HighTech