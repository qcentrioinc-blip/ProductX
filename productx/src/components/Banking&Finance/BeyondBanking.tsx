import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import shape1 from '/BeyondBanking/shape1.png';
import shape2 from '/BeyondBanking/shape2.png';
import building1 from '/BeyondBanking/building1.jpg';
import building2 from '/BeyondBanking/building2.jpg';
import { H2 } from "../../styles/Typography";

const BeyondBanking = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // This `useTransform` now animates building1 from -250px to a final position of 0px on the y-axis,
  // and will clamp at that position once the scroll progress reaches 50%.
  const building1Y = useTransform(scrollYProgress, [0, 0.5], [-250, 0]); 

  // This `useTransform` now animates building2 from 250px to a final position of 0px on the y-axis,
  // and will clamp at that position once the scroll progress reaches 50%.
  const building2Y = useTransform(scrollYProgress, [0, 0.5], [250, -90]); 

  return (
    <section
      ref={ref}
      className="relative w-full h-screen bg-black flex items-center justify-center text-center overflow-hidden" id="products"
    >
      <motion.img
        src={building1}
        alt="Placeholder Building 1"
        style={{ y: building1Y }}
        className="absolute top-10 left-10 w-[471px] h-[319px] rotate-[-8.44deg] ml-[-141px] mt-[-12.01px] shadow-lg"
      />
      <motion.img
        src={building2}
        alt="Placeholder Building 2"
        style={{ y: building2Y }}
        className="absolute bottom-10 right-10 w-[382px] h-[260px] rotate-[6deg] ml-[-1009.99px] mt-[-390.82px] shadow-lg"
      />

      <img
        src={shape1}
        alt="Placeholder Shape 1"
        className="absolute top-5 right-5 w-90 mr-[-100px] mt-[-80px] rotate-[15.88deg]"
      />
      <img
        src={shape2}
        alt="Placeholder Shape 2"
        className="absolute bottom-5 left-5 w-90 ml-[-110px] mb-[-110px]"
      />

      <div className="relative max-w-2xl text-center px-6">
        {/* <h2 className="text-white text-xl md:text-2xl text-center font-semibold mix-blend-difference leading-snug w-[650px] mx-auto">
          Beyond banking—solutions that make lending seamless, secure, and scalable.
        </h2> */}
        <H2>
            Beyond banking—solutions that make lending seamless, secure, and scalable.
        </H2>
        <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
          EXPLORE ALL PRODUCTS →
        </button>
      </div>
    </section>
  );
};

export default BeyondBanking;