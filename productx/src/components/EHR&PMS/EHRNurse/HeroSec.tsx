import { motion } from "framer-motion";
import { H2, P } from "../../../styles/Typography";

const HeroSec = () => {
  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="w-full min-h-screen max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pt-20 lg:pt-40 font-bricolage flex flex-col overflow-hidden">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8"
      >
        <H2 className="text-[#2A2A2A] leading-tight max-w-xl">
          Sed ut perspiciatis<br />
          Sed ut perspiciatis
        </H2>
        <P className="max-w-md text-[#141414] leading-relaxed md:pt-2">
          reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, su
        </P>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 gap-4 pb-8"
      >
        
        {/* 1. Large Portrait Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-3 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" 
            alt="Medical professional"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2. Stat Card (5x) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="bg-[#f2f2f2] rounded-3xl p-6 flex flex-col justify-center lg:row-span-1"
        >
          <span className="text-4xl lg:text-5xl font-medium font-bricolage text-black mb-1">
            5x
          </span>
          <P className="text-[#141414]">Duis aute irure</P>
        </motion.div>

        {/* 3. Tall Abstract Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-3 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" 
            alt="Abstract waves"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 4. Hands Holding Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-2 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800" 
            alt="Supportive hands"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 5. Typing/Stethoscope Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-2 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
            alt="Medical workspace"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 6. Stat Card (30+) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="bg-[#f2f2f2] rounded-3xl p-6 flex flex-col justify-center lg:row-span-1"
        >
          <span className="text-4xl lg:text-5xl font-bricolage font-medium text-black mb-1">
            30+
          </span>
          <P className="text-[#141414] text-xs lg:text-sm">
            Duis aute irure
          </P>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSec;
