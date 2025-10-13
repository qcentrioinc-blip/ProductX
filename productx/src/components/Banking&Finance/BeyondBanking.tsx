import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import shape1 from '/BeyondBanking/shape1.png';
import shape2 from '/BeyondBanking/shape2.png';
import building1 from '/BeyondBanking/building1.jpg';
import building2 from '/BeyondBanking/building2.jpg';
import { H3 } from "../../styles/Typography";
import { useNavigate } from "react-router-dom";
 
const BeyondBanking = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: false }); // set to false if you want replay
 
  return (
    <section
      ref={ref}
      className="relative w-full h-screen bg-black flex items-center justify-center text-center overflow-hidden" id="products"
    >
      <motion.img
        src={building1}
        alt="Building 1"
        initial={{ y: -250 }}
        animate={isInView ? { y: 65 } : { y: -300 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute top-10 left-35 md:left-40 lg:left-35 sm:w-[350px] sm:h-[250px] md:w-[350px] md:h-[250px] lg:w-[382px] lg:h-[260px] rotate-[-8.44deg] ml-[-141px] mt-[100px] sm:mt-[80px] md:mt-[-70px] lg:mt-[-40px] shadow-lg"
      />
      <motion.img
        src={building2}
        alt="Building 2"
        initial={{ y: 250 }}
        animate={isInView ? { y: -130 } : { y: 100 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 md:right-[50px] sm:w-[350px] sm:h-[250px] md:w-[350px] md:h-[250px] lg:w-[382px] lg:h-[260px]  rotate-[6deg] ml-[-1009.99px] mb-[60px] sm:mb-[70px] md:mb-[-10px] lg:mb-[20px] shadow-lg"
      />
 
      <img
        src={shape1}
        alt="Shape 1"
        className="absolute  top-5 right-5 w-70 sm:w-85 h-70 sm:h-85 md:h-75 mr-[-100px] mt-[-80px] rotate-[15.88deg]"
      />
      <img
        src={shape2}
        alt="Shape 2"
        className="absolute bottom-5 left-5 w-70 sm:w-85 h-70 sm:h-85 ml-[-110px] mb-[-110px]"
      />
 
      <div className="relative text-center px-6">
        <H3 className="text-white mix-blend-difference -mt-10 px-6 lg:text-4xl">
          Beyond banking—solutions that make lending seamless, <br />secure, and scalable.
        </H3>
        <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition" onClick={() => navigate("/industries/banking-and-finance/products")}>
          EXPLORE ALL PRODUCTS →
        </button>
      </div>
    </section>
  );
};
 
export default BeyondBanking;