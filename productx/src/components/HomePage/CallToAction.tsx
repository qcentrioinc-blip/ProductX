import { ArrowUpRight } from 'lucide-react'
import cta_img from '/CTA/cta-img-1.png'

const CallToAction = () => {
  return (
    <div className="w-full min-h-[482px] lg:h-[482px] bg-gradient-to-tr from-black via-[#01010c] to-[#000000] text-white relative overflow-hidden py-12 lg:py-0">
      <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center lg:justify-between h-full gap-8 lg:gap-0">
        
        {/* Left side - Text content */}
        <div className="w-full lg:w-[685px] order-2 lg:order-1 text-center lg:text-left lg:pl-15">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white mb-4 lg:mb-0">
            Sed ut perspiciatis unde omnis iste
          </h1>
          <p className="text-gray-300 leading-relaxed pt-0 lg:pt-3 pb-6 lg:pb-4 text-justify">
            Nemo enim ipsam voluptatem olad voluptas sit aspernatur aut odit aut fugit, sed olad
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum olad dolor sit amet deregthyjuyk.
          </p>
          <button className="p-3 bg-white text-black font-semibold rounded-lg flex items-center gap-2 mx-auto lg:mx-0 w-fit">
            EXPLORE ALL PRODUCTS 
            <ArrowUpRight className="h-6 w-6 font-bold" />
          </button>
        </div>

        {/* Right side - Image */}
        <div className="relative w-full max-w-[400px] lg:max-w-[615px] h-[300px] sm:h-[400px] lg:h-[600px] order-1 lg:order-2 lg:-mb-[40px] lg:-mr-[60px]">
          {/* Ellipse background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[600px] sm:w-[650px] sm:h-[800px] lg:w-[850px] lg:h-[1000px] rounded-full bg-gradient-to-br from-[#0E25CB] to-[#3648d4] blur-[100px] sm:blur-[150px] lg:blur-[200px] opacity-70"></div>
          </div>

          {/* Foreground Image */}
          <img
            src={cta_img}
            alt="CTA"
            className="relative w-full h-full object-contain transform rotate-[-3deg] sm:rotate-[-5deg] lg:rotate-[-7.88deg] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
