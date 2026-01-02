import { motion } from "framer-motion";
import { ContactUsAI } from "../../../styles/Button";
import { H1 } from "../../../styles/Typography";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen lg:h-full  overflow-hidden bg-gradient-to-br from-[#0a0f3c] via-[#0b1a6b] to-[#0a2fa4]">
      <div className="relative">
        <div className="mx-6 xl:mx-10 relative pt-28 lg:pt-48 xl:pt-52 grid max-w-8xl grid-cols-1 items-center gap-12 lg:px-10 pb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 z-20"
          >
            <H1>
              <span className="block text-[#0AC276]">
                Lorem ipsum dolor
              </span>

              <span className="block">
                <span className="text-[#0AC276]">sit</span>{" "}
                <span className="text-white">amet, consectu</span>
              </span>
            </H1>

            <p className="max-w-2xl text-[22px] font-quiksand tracking-wider text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing Lorem 
              dolor sit amet, consectetur adipiscing Lorem ipsum dolor 
            </p>

            <div className="flex flex-col items-start gap-4 pt-4">
              <ContactUsAI>Get Started</ContactUsAI>
            </div>

          </motion.div>

          {/* Image Content */}
        {/* DESKTOP IMAGE + RECTANGLES */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="relative hidden lg:flex flex-col items-start"
>
  {/* IMAGE */}
  <div className="absolute lg:-top-[150px]   xl:-top-80 -right-10  z-10">
    <img
      src="/AIProduct/ProductImage1.png"
      alt="Team collaboration"
      className="w-[800px] pb-4   -scale-x-130 scale-y-130"
    />
  </div>

  {/* RECTANGLES BELOW IMAGE */}
  <div className=" lg:mt-[500px] xl:mt-44 flex gap-6">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="h-20 w-48 rounded-sm bg-neutral-700"
      />
    ))}
  </div>
</motion.div>

          
          <img src="/AIProduct/Azure.png" alt="Azure Logo" className="absolute top-40 right-0 md:top-48 xl:right-[33%] h-18 w-32 object-contain" />
          <img src="/AIProduct/Azure2.png" alt="Azure Logo" className="absolute top-72 md:top-80 lg:left-[75%] lg:top-64 md:left-[55%] left-[80%] h-24 w-32 object-contain" />
          <img src="/AIProduct/Money Profit.png" alt="Azure Logo" className="absolute top-90 lg:top-90 xl:top-66 right-20 h-20 w-32 object-contain" />
        </div>
      </div>
      


      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="relative lg:hidden  sm:flex flex-col items-start"
>
  {/* IMAGE */}
  <div className="absolute  -bottom-48 md:-bottom-96      z-10">
    <img
      src="/AIProduct/ProductImage1.png"
      alt="Team collaboration"
      className="  pb-4   -scale-x-110 scale-y-110  "
    />
  </div>
      {/* Rectangles at bottom with more gap */}
      <div className="absolute -bottom-88 md:-bottom-[550px]  md:mb-10 lg:mb-0 lg:hidden left-6 mb-10 flex gap-6 pb-0">
  <div className="h-20 w-48 rounded-sm bg-neutral-700" />
  <div className="h-20 w-48 rounded-sm bg-neutral-700" />
  <div className="h-20 w-48 rounded-sm bg-neutral-700" />
  <div className="h-20 w-48 rounded-sm bg-neutral-700" />
  <div className="h-20 w-48 rounded-sm bg-neutral-700" />
</div>
</motion.div>

    </section>
  );
}