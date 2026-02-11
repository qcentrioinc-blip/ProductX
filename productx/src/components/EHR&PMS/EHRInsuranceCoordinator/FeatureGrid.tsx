import { useState } from "react";
import { H2, H4, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";
import { motion } from "framer-motion";

const FeatureGrid = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, setMenuOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[1300px] px-4 py-10 font-bricolage text-[#1a1a1a]">
      
      {/* Main Container */}
      <div className="flex flex-col gap-6 lg:flex-row">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 flex-1">

          {/* Top Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              flex flex-col justify-center
              rounded-[20px] bg-[#f2f4f4]
              px-6 py-6 md:px-8 md:py-8
              min-h-[260px] md:min-h-[346px]
            "
          >
            <H2 className="mb-6 leading-tight text-[#008280]">
              Solve Core Revenue Cycle Challenges
            </H2>
            <P className="text-[#141414] leading-relaxed max-w-xl">
              Our platform directly targets the major inefficiencies that delay payments and increase administrative costs for insurance teams. 
            </P>
          </motion.div>

          {/* Bottom Cards */}
          <div className="flex flex-col gap-6 md:flex-row">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                flex flex-col gap-3
                rounded-[20px] bg-[#EEDA68]
                px-6 py-6
                flex-1
                hover:-translate-y-1 transition-transform
              "
            >
              <span className="text-2xl font-bold">1</span>
              <H4>Reduced Denials</H4>
              <P>Automated claim scrubbing and accurate coding cut denial rates dramatically.</P>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                flex flex-col gap-3
                rounded-[20px] bg-[#d7e4e4]
                px-6 py-6
                flex-1
                hover:-translate-y-1 transition-transform
              "
            >
              <span className="text-2xl font-bold">2</span>
              <H4>Faster Payments</H4>
              <P>Streamlined submission and real-time tracking accelerate reimbursement cycles. </P>
            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative flex items-end
            rounded-[20px]
            bg-cover bg-center
            p-4
            min-h-[360px] md:min-h-[450px] lg:min-h-[570px]
            flex-1
          "
          style={{
            backgroundImage: `url('/EHR-PMS/InsuranceCoordinator/Img4.jpg')`,
          }}
        >
          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="
              flex w-full flex-col justify-between gap-6
              rounded-[20px]
              border border-white/30
              bg-white/60
              p-6 md:p-8
              backdrop-blur-md
              min-h-[200px] md:min-h-[246px]
            "
          >
            <P className="text-lg font-bold leading-snug text-gray-900 md:text-xl">
              See how our integrated system transforms <br/> your claims workflow. 
            </P>

            <button
              onClick={() => {
                setMenuOpen(false);
                setDrawerOpen(true);
              }}
              className="
                group inline-flex items-center justify-center gap-3 font-bricolage
                px-8 h-14 rounded-lg
                bg-white border-2 border-[#007976]
                text-[#007976] font-bold text-sm tracking-widest
                transition-all duration-300
                hover:bg-[#007976] hover:text-white hover:scale-105
              "
            >
              Get Demo 
              {/* <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span> */}
            </button>
          </motion.div>
        </motion.div>

      </div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default FeatureGrid;
