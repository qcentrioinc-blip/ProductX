import BankFinanceNavbar from "../../components/Banking&Finance/BankFinanceNavbar"
import BeyondBanking from "../../components/Banking&Finance/BeyondBanking"
import HowWeDoIn from "../../components/Banking&Finance/HowWeDoIn"
import HWD from "../../components/Banking&Finance/HWD"
import InsightThought from "../../components/Banking&Finance/InsightThought"
import Process from "../../components/Banking&Finance/Process"
import WhatWeDoIn from "../../components/Banking&Finance/WhatWeDoIn"
import Footer from "../../components/Footer/Footer"
import LandingPage from "../../components/HomePage/Banking&Finance/LandingPage"
import Partnership from "../../components/HomePage/Banking&Finance/Partnership"

const BankingAndFinance = () => (
  <div>
    <LandingPage />
    <BankFinanceNavbar />
    <Partnership />
    <HowWeDoIn/>
    <WhatWeDoIn/>
    <BeyondBanking />
    <HWD />
    <InsightThought />
    <Process />
    <Footer />
  </div>
)
export default BankingAndFinance