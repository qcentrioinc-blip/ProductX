import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import Brief from "../AboutUs/Brief"
import GridSecClinic from "../ClinicApp/GridSecClinic"
import Accordion from "./Accordion"
import Comparison from "./Comparison"
import CTA from "./CTA"
import Features from "./Features"
import ImageGrid from "./ImageGrid"

const Physician = () => {
  return (
   <>
<ImageGrid/>
<Features/>
<Brief/>
<Accordion/>
<Comparison/>
<GridSecClinic/>
<CTA/>
<EHRFooter/>

   </>
  )
}

export default Physician
