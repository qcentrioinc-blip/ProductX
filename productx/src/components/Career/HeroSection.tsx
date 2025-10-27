import { H1 } from "../../styles/Typography"
import Image1 from "/Career/image57.png"
import Image2 from "/Career/image58.png"
import Image3 from "/Career/image59.png"

const HeroSection = () => {
  return (
    <div className="mt-2 py-24 w-screen bg-black">
    
      <div className="text-white  xs:mb-16 lg:mx-20 lg:mb-20">
        <H1>
          Sed ut perspiciatis <br /> unde omnis iste natus
        </H1>
      </div>

      
      <div className="flex flex-col sm:h-[200px] md:h-[300px]  lg:h-[410px] md:flex-row justify-center items-center gap-6 px-6 md:px-20">
        <img
          src={Image1}
          alt="Team discussion"
          className="rounded-lg w-full h-full md:w-1/3 object-cover"
        />
        <img
          src={Image2}
          alt="Office workspace"
          className="rounded-lg w-full  h-full md:w-1/3 object-cover"
        />
        <img
          src={Image3}
          alt="Group meeting"
          className="rounded-lg w-full h-full md:w-1/3 object-cover"
        />
      </div>
    </div>
  )
}

export default HeroSection
