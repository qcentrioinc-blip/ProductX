import { motion } from "framer-motion";
import { ContactUsAI } from "../../../styles/Button";
import { H2  } from "../../../styles/Typography";
 
export default function Partner() {
  return (
    <section className="w-full bg-[#FAFAFA]  ">
      <div className=" grid max-w-8xl grid-cols-1 pb-16 mt-16 xl:mt-0 items-center xl:gap-52   md:grid-cols-2">
        {/* Floating partner logos image */}
<div className="
  absolute
   top-10
  xl:top-20
  left-60
  lg:left-72
  xl:left-96
 
 
">
  
    <img
      src="/AIProduct/Partner1.png"
      alt="Cloud partners"
      className=" w-36 md:w-44 xl:w-72  h-auto"
    />
  
</div>

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex  justify-start"
        >
          <img
            src="/AIProduct/Partner2.png"
            alt="Partner "
            className=" scale-120 md:scale-150   -z-10 object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" space-y-4 lg:space-y-6 mt-16 sm:mt-0  mx-6  md:pl-10 xl:pl-0"
        >
          <h5 className="font-semibold font-quicksand   lg:mt-20  lg:text-2xl text-[#0AC276]">
            Lorem ipsum dolor sit amet Lorem
          </h5>

          <H2 className="    text-[#020059] ">
            Lorem ipsum dolor 
             <br className="xl:block hidden" />
             sit amet, consecte
          </H2>

          <ContactUsAI>GET STARTED FOR FREE</ContactUsAI>

          
        </motion.div>
      </div>
    </section>
  );
}
