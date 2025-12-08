import { motion, easeOut } from "framer-motion";
import { H2, Li, P } from "../../../styles/Typography";
import { CheckCircle } from "lucide-react";

export default function ImageGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <div className="w-full bg-white py-20">

      {/* ROW 1 — MOBILE/TABLET STACK • DESKTOP TWO-COLUMN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-8xl">

        {/* IMAGE BLOCK — SAME FOR DESKTOP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full"
        >
          {/* MOBILE + TAB: height adjusts smaller; DESKTOP unchanged */}
          <img
            src="/Platform/Bg.png"
            alt="base"
            className="w-full h-[300px] md:h-[380px] lg:h-[650px] object-cover"
          />

          <img
            src="/Platform/TL.png"
            alt="base"
            className="absolute top-1/4 right-1/4 w-[45%] md:w-[35%] z-20 rounded-xl shadow-lg"
          />

          <img
            src="/Platform/TopLeft.png"
            alt="card"
            className="absolute top-10 left-5 md:top-20 md:left-10 w-[55%] md:w-[50%] rounded-xl shadow-lg"
          />
        </motion.div>

        {/* TEXT BLOCK — MOBILE CENTERED • TABLET SEMI-CENTERED • DESKTOP ORIGINAL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex flex-col gap-6 
            mt-10 md:mt-14 lg:mt-0 
            px-6 md:px-10 
            lg:ml-44
          "
        >
          <H2 className="max-w-md text-center md:text-left">
            Lorem ipsum dolor , consectetur adipis
          </H2>

          <P className="max-w-lg text-center md:text-left">
            Duis aute irure dolor in reprehenderit in voluptate velit…
          </P>

          <ul
            className="
              grid grid-cols-1 md:grid-cols-2 gap-3 font-bold text-gray-800
              mt-10 md:mt-20 lg:mt-44
              mx-auto md:mx-0
            "
          >
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Duis aute irure
                </Li>
              ))}
          </ul>
        </motion.div>
      </div>

      {/* ROW 2 — MOBILE/TABLET STACK • DESKTOP TWO-COLUMN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 max-w-8xl">

        {/* MOBILE/TAB TEXT BLOCK • DESKTOP LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex flex-col gap-6 
            px-6 md:px-10 
            max-w-lg
            mt-10 md:mt-14 lg:mt-0
          "
        >
          <H2 className="max-w-md text-center md:text-left">
            Lorem ipsum dolor , consectetur adipis
          </H2>

          <P className="max-w-lg text-center md:text-left">
            Duis aute irure dolor…
          </P>

          <ul
            className="
              grid grid-cols-1 md:grid-cols-2 gap-3 font-bold text-gray-800
              mt-10 md:mt-20 lg:mt-44
              mx-auto md:mx-0
            "
          >
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Duis aute irure
                </Li>
              ))}
          </ul>
        </motion.div>

        {/* IMAGE BLOCK — SAME FOR DESKTOP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full"
        >
          <img
            src="/Platform/Bg2.png"
            alt="base"
            className="w-full h-[300px] md:h-[380px] lg:h-[650px] object-cover"
          />

          <img
            src="/Platform/Grouped.png"
            alt="card"
            className="
              absolute top-6 md:top-8 left-1/2 
              -translate-x-1/2 
              w-[85%] md:w-[70%]
              rounded-xl
            "
          />
        </motion.div>
      </div>
    </div>
  );
}
