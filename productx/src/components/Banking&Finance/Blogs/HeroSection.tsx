 import Image2 from "/Image2.jpg"
 import { H1 } from "../../../styles/Typography"
const HeroSection = () => {
  return (
    <section className="bg-black">
        <div className="relative max-w-8xl h-[85vh] flex items-center justify-start overflow-hidden">
                <img
                  src={Image2}
                  alt="Hero"
                  className="absolute inset-0 w-full h-full object-cover"
                />
      
                <div className="absolute inset-0 bg-black/40"></div>
      
                {/* Text */}
                <div className="relative z-10 max-w-3xl  pl-10">
                  <H1 className="text-white">
                    Sed ut perspiciatis <br />
                    <span>unde omnis iste natus</span>
                  </H1>
                </div>
      
              </div>
    </section>
  )
}

export default HeroSection
