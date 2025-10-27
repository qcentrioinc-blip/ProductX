import { motion } from "framer-motion";

import img1 from "/WhatWeDo/img1.jpg";
import img2 from "/WhatWeDo/img2.jpg";
import img3 from "/WhatWeDo/img3.jpg";
import img4 from "/WhatWeDo/img4.png";
import { P } from "../../../styles/Typography";

const WhatWeDo = () => {
  return (
    <div className="w-full bg-black text-white py-12">
      {/* Container */}
      <div className=" mx-8 sm:mx-8 lg:px-8">
        {/* Headings, Icons */}
        <div className="flex flex-col">
          {/* Headings */}
          <div className="max-w-xl mt-12">
            
      <motion.h2
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-lg sm:text-xl font-bricolage font-semibold flex items-center gap-2"
      >
        <span className="inline-block w-8 h-[4px] bg-white rounded-full"></span>
        Quis autem
      </motion.h2>

      <motion.h1
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="font-bricolage text-2xl sm:text-3xl lg:text-5xl font-bold mt-4"
      >
        Shaping the Future Across Every Sector.
      </motion.h1>
    
          </div>

          {/* Icons and paragraph */}
          <div className="flex flex-col lg:flex-row lg:items-start mt-12 gap-8">
            {/* Images */}
            <div className="flex gap-2  sm:grid sm:grid-cols-3  sm:gap-4 flex-shrink-0">
              <img
                src={img1}
                alt="Image 1"
                className="w-20 flex-1 h-24 sm:h-48  sm:w-full  object-cover rounded-lg"
              />
              <img
                src={img2}
                alt="Image 2"
                className="w-20 flex-1 sm:w-full h-24 sm:h-48 object-cover rounded-lg"
              />
              <img
                src={img3}
                alt="Image 3"
                className="w-20 flex-1 h-24 sm:h-48  sm:w-full   object-cover rounded-lg"
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-sm sm:text-base font-Quicksand text-justify">
              <P>
                We design and deliver products that simplify complexity and
                create real impact across industries. From Environment, Health &
                Safety (EHS) and Project Management Systems (PMS) to
                cutting-edge High-Tech solutions,
              </P>
              <P>
                We help organizations operate smarter, safer, and faster. Our
                strength lies in building adaptable platforms that don’t just
                solve today’s challenges but prepare businesses for tomorrow’s
                opportunities.
              </P>
            </div>
          </div>
        </div>

        {/* Large Image */}
        <div className="mt-12">
          <img
            src={img4}
            alt="Table Conference"
            className="w-full h-64 sm:h-80 lg:h-[560px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;