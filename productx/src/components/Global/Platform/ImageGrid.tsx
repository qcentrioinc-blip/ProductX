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
    <div className="w-full bg-white py-20  ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-8xl  ">
        {/* LEFT IMAGE BLOCK */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full"
        >
          <img
            src="/Platform/Bg.png"
            alt="base"
            className="w-full lg:h-[650px]   h-[400px]  object-cover"
          />
           <img
            src="/Platform/TL.png"
            alt="base"
            className="absolute top-1/4 z-20 right-1/4 w-[35%] rounded-xl shadow-lg"
          />

          <img
           src="/Platform/TopLeft.png"
            alt="card"
            className="absolute top-20 left-10 w-[50%] rounded-xl shadow-lg"
          />
        </motion.div>

        {/* RIGHT TEXT BLOCK */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col ml-44 gap-6"
        >
         <H2  className="max-w-md">Lorem ipsum dolor , consectetur adipis </H2>
          <P className=" max-w-lg ">  
            Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
            irure dolor in reprehenderit in voluptate velit Duis aute irure dolor
            in reprehenderit in voluptate velit Duis aute irure.
          </P>

          <ul className=" mt-44 grid grid-cols-2 gap-3 text-gray-800 font-bold">
            <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>

  <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>

  <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>

  <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>
          </ul>
        </motion.div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 max-w-8xl">
        {/* LEFT TEXT BLOCK */}
         <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col pl-10 max-w-lg gap-6"
        >
        <H2  className="max-w-md">Lorem ipsum dolor , consectetur adipis </H2>
          <P className=" max-w-lg ">  
            Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
            irure dolor in reprehenderit in voluptate velit Duis aute irure dolor
            in reprehenderit in voluptate velit Duis aute irure.
          </P>

          <ul className=" mt-44 grid grid-cols-2 gap-3 text-gray-800 font-bold">
            <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>

  <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>

  <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>

  <Li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5" />
    Duis aute irure
  </Li>
          </ul>
        </motion.div>

        {/* RIGHT IMAGE BLOCK */}
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
            className="w-[100%] lg:h-[650px]   h-[400px]  object-cover"
          />

          <img
            src="/Platform/Grouped.png"
            alt="card"
            className="absolute top-8 left-1/2 -translate-x-1/2 w-[70%] rounded-xl "
          />
        </motion.div>
      </div>
    </div>
  );
}
