import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import shape1 from '/BeyondBanking/shape1.png';
import shape2 from '/BeyondBanking/shape2.png';
import building1 from '/BeyondBanking/building1.jpg';
import building2 from '/BeyondBanking/building2.jpg';
import { H3 } from "../../styles/Typography";

const BeyondBanking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // set to false if you want replay

  return (
    <section
      ref={ref}
      className="relative w-full h-screen bg-black flex items-center justify-center text-center overflow-hidden"
    >
      <motion.img
        src={building1}
        alt="Building 1"
        initial={{ y: -250 }}
        animate={isInView ? { y: 20 } : { y: -250 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-[471px] h-[319px] rotate-[-8.44deg] ml-[-141px] mt-[-12.01px] shadow-lg"
      />
      <motion.img
        src={building2}
        alt="Building 2"
        initial={{ y: 250 }}
        animate={isInView ? { y: -130 } : { y: 250 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[382px] h-[260px] rotate-[6deg] ml-[-1009.99px] mt-[-390.82px] shadow-lg"
      />

      <img
        src={shape1}
        alt="Shape 1"
        className="absolute top-5 right-5 w-90 mr-[-100px] mt-[-80px] rotate-[15.88deg]"
      />
      <img
        src={shape2}
        alt="Shape 2"
        className="absolute bottom-5 left-5 w-90 ml-[-110px] mb-[-110px]"
      />

      <div className="relative text-center px-6">
        <H3 className="text-white mix-blend-difference">
          Beyond banking—solutions that make lending seamless, <br />secure, and scalable.
        </H3>
        <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
          EXPLORE ALL PRODUCTS →
        </button> 
      </div>
    </section>
  );
};

export default BeyondBanking;
