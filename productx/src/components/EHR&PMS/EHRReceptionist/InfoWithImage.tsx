import { motion } from "framer-motion";
import { H2EHR, H4EHR, P } from "../../../styles/Typography";

const InfoWithImage = () => {
  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="relative overflow-hidden dark:bg-teal-900 bg-[#f4fbfa]">
      
      {/* Decorative circles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-50 -right-10 w-[550px] h-[550px] rounded-full border border-[#008280] opacity-40 hidden sm:block" />
        <div className="absolute -top-50 right-0 w-[450px] h-[450px] rounded-full border border-[#008280] opacity-40 hidden sm:block" />
        <div className="absolute -top-50 right-10 w-[350px] h-[350px] rounded-full border border-[#008280] opacity-40 hidden sm:block" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 ">
        
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-x-12 gap-y-10">

          {/* TOP LEFT — Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="lg:col-span-1 lg:row-start-1"
          >
            <H2EHR className="text-[#008280]  dark:text-amber-400 mb-4 lg:whitespace-nowrap">
              Essential Front-Desk Tools 
            </H2EHR>

            <P className="text-[#141414] max-w-lg">
              Access the integrated tools you need daily to manage patient interactions and support clinical staff efficiently. 
            </P>
          </motion.div>

          {/* EMPTY TOP RIGHT */}
          <div className="hidden lg:block lg:row-start-1" />

          {/* BOTTOM LEFT — CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="lg:row-start-2 flex flex-col justify-between gap-6 h-full"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: easeOut },
                },
              }}
              className="flex-1 flex justify-between items-start dark:bg-teal-700 bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="p-6">
                <H4EHR className="text-gray-900 mb-4">
                 Self Check-In Kiosk 
                </H4EHR>
                <P className="text-sm text-[#141414] max-w-sm">
                  Enable patients to check themselves in via a tablet or kiosk, reducing front desk queues and manual work. 
                </P>
              </div>
<span className="w-10 h-10 rounded-full bg-teal-900 shrink-0 mt-1 flex items-center justify-center text-white font-semibold">
  01
</span>            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: easeOut },
                },
              }}
              className="flex-1 flex justify-between items-start dark:bg-teal-700 bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="p-6">
                <H4EHR className="text-gray-900 mb-4">
                  Digital Consent Capture 
                </H4EHR>
                <P className="text-sm text-[#141414] max-w-sm">
                  Collect patient signatures and forms electronically with timestamps, ensuring compliance and eliminating lost paperwork. 
                </P>
              </div>
<span className="w-10 h-10 rounded-full bg-teal-600 dark:bg-teal-900 shrink-0 mt-1 flex items-center justify-center text-white font-semibold">
  02
</span>            </motion.div>
          </motion.div>

          {/* BOTTOM RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="lg:row-start-2 h-full flex"
          >
            <div className="rounded-3xl overflow-hidden w-full h-full">
              <img
                src="/EHR-PMS/Receptionist/img1.webp"
                alt="Office workspace"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InfoWithImage;
