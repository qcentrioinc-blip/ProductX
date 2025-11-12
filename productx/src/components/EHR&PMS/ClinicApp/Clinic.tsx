
import Advantage from "./Advantage"
import Benefits from "./Benefits"
import HeroSection from "./HeroSection"
import HWD from "./HWD"
import Testimonial from "./Testimonial"
 


const Clinic = () => {
  return (
    <div>
      <HeroSection/>
      <Testimonial/>
      <Benefits/>
      <div className="relative overflow-x-hidden">
      <Advantage/>
        <HWD/>
      </div>
           
       
    </div>
  )
}

export default Clinic
