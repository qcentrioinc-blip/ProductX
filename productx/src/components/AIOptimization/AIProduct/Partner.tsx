import { motion } from "framer-motion";
import { ContactUsAI } from "../../../styles/Button";
import { H2  } from "../../../styles/Typography";
 
export default function Partner() {
  return (
    <section className="w-full bg-[#FAFAFA]  ">
      <div className=" grid max-w-8xl grid-cols-1   items-center lg:gap-52   md:grid-cols-2">
        {/* Floating partner logos image */}
<div className="
  absolute
  top-24
  lg:top-20
  left-52
  lg:left-96
  z-10
  hidden
  lg:block
">
  
    <img
      src="/AIProduct/Partner1.png"
      alt="Cloud partners"
      className="w-72 h-auto"
    />
  
</div>

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-start"
        >
          <img
            src="/AIProduct/Partner2.png"
            alt="Partner "
            className=" scale-150   object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 "
        >
          <h5 className="font-semibold font-quicksand mt-20 lg:text-2xl text-[#0AC276]">
            Lorem ipsum dolor sit amet Lorem
          </h5>

          <H2 className="    text-[#020059] ">
            Lorem ipsum dolor
            <br />
            sit amet, consecte
          </H2>

          <ContactUsAI>GET STARTED FOR FREE</ContactUsAI>

          
        </motion.div>
      </div>
    </section>
  );
}
