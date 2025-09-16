import { ArrowUpRight } from 'lucide-react'
import cta_img from '/CTA/cta-img-1.png'

const CallToAction = () => {
  return (
    <div className="w-full h-[482px] bg-gradient-to-tr from-black via-[#01010c] to-[#000000] text-white relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between h-full">
        
        {/* Left side - Text content */}
        <div className="w-[685px] h-auto pl-15">
          <h1 className="text-4xl font-extrabold leading-tight text-white">
            Sed ut perspiciatis unde omnis iste
          </h1>
          <p className="text-gray-300 leading-relaxed pt-3 pb-4 text-justify">
            Nemo enim ipsam voluptatem olad voluptas sit aspernatur aut odit aut fugit, sed olad
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum olad dolor sit amet.
          </p>
            <button className="p-3 bg-white text-black font-semibold rounded-lg flex items-center gap-2">
            EXPLORE ALL PRODUCTS 
            <ArrowUpRight className="h-6 w-6 font-bold" />
            </button>

        </div>

        {/* Right side - Image */}
        <div className="relative w-[615px] h-[600px] -mb-[40px] -mr-[60px]">
          {/* Ellipse background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[850px] h-[1000px] rounded-full bg-gradient-to-br from-[#0E25CB] to-[#3648d4] blur-[200px] opacity-70"></div>
          </div>

          {/* Foreground Image */}
          <img
            src={cta_img}
            alt="CTA"
            className="relative w-full h-full object-contain transform rotate-[-7.88deg] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
