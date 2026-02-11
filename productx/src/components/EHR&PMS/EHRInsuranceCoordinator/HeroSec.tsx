import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { H1, H3, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

const HeroSec = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, setMenuOpen] = useState(false);

  /* ---------- Ultra-Smooth Animations ---------- */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly faster stagger for better flow
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 5, // Reduced from 24 to prevent the "jumpy" feeling
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Increased duration for a calmer entrance
        ease: [0.22, 1, 0.36, 1], // Custom "Quint" ease-out curve
      },
    },
  };

  const cardBaseMobile =
    "w-full h-[160px] md:h-[180px] rounded-[33.83px] p-8 flex flex-col justify-center transition-all relative overflow-hidden";

  return (
    <div className="bg-white px-6 py-16 lg:pt-40 font-bricolage text-[#008280] overflow-x-hidden">
      
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <H1 className="mb-8 text-4xl md:text-6xl xl:text-8xl font-bold">
          Streamline Claims, <br />  Maximize Revenue
        </H1>

        <button
          onClick={() => {
            setMenuOpen(false);
            setDrawerOpen(true);
          }}
          className="
            group inline-flex items-center justify-center gap-3 font-bricolage
            px-6 h-12 rounded-lg
            bg-white border-2 border-[#008280]
            text-[#008280] font-bold text-sm tracking-widest
            transition-all duration-500
            hover:bg-[#008280] hover:text-white hover:shadow-lg
            cursor-pointer mb-4
          "
        >
          Contact Us
          {/* <span className="text-2xl font-light transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span> */}
        </button>
      </motion.header>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Triggers slightly before it hits the view
        className="mx-auto max-w-[1400px] grid grid-cols-1 gap-6 xl:flex xl:flex-row xl:items-end xl:justify-center xl:gap-5"
      >
       {/* Card 1 */}
<motion.div
  variants={itemVariants}
  className={`${cardBaseMobile} 
    bg-[#e0fcf4] 
    xl:w-[277.4px] 
    xl:h-[420.6px] 
    xl:justify-end
    relative 
    overflow-hidden
  `}
  style={{
    backgroundImage: "url('/EHR-PMS/InsuranceCoordinator/img1.webp')", // add your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="mb-4 xl:mb-12 text-5xl text-[#008280]">⟶</div>
  <P className="text-base leading-relaxed font-medium">
    Submit clean claims, track every status, and resolve denials faster. Start Today.
  </P>
</motion.div>


        {/* Card 2 */}
        <motion.div
          variants={itemVariants}
          className={`${cardBaseMobile} bg-[#f0f0f0] xl:w-[171.4px] xl:h-[284.1px] xl:justify-end`}
        >
          <H3 className="mb-2 text-black text-3xl font-bold">99%</H3>
          <P className="text-black text-sm">
            Claim Submission Accuracy Rate
          </P>
        </motion.div>

        {/* Image 1 - Hidden on iPad Pro/Mobile */}
        <motion.img
          variants={itemVariants}
          src="/EHR-PMS/InsuranceCoordinator/img2.webp"
          alt="Team"
          className="hidden xl:block rounded-[33.83px] object-cover xl:w-[266.1px] xl:h-[284.1px]"
        />

        {/* Card 3 */}
        <motion.div
          variants={itemVariants}
          className={`${cardBaseMobile} bg-[#00796b] text-white xl:w-[171.4px] xl:h-[284.1px] xl:justify-end`}
        >
          <H3 className="mb-2 text-white text-3xl font-bold">60%</H3>
          <P className="text-white text-sm">
            Faster Denial Resolution
          </P>
        </motion.div>

        {/* Image 2 - Hidden on iPad Pro/Mobile */}
        <motion.img
          variants={itemVariants}
          src="/EHR-PMS/InsuranceCoordinator/img3.webp"
          alt="Office"
          className="hidden xl:block rounded-[33.83px] object-cover xl:w-[266.1px] xl:h-[389.6px]"
        />
      </motion.div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default HeroSec;