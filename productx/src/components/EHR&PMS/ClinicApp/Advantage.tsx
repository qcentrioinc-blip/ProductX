import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ add Variants here
import GreenCircle from "/ClinicApp/GreenCircle.png";
import { H2, H4 } from "../../../styles/Typography";

const Advantage = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: ["easeOut"], // ✅ no need for `as any`
      },
    },
  };

  return (
    <section className="relative w-full overflow-visible bg-white py-16 sm:py-24 lg:py-32">
      <H2 className="font-bold text-[#166D48] mx-10 text-center mb-16 sm:mb-20 relative z-10">
        Sed ut perspiciatis Unde Seduo ut perspiciatis
      </H2>

      <img
        src={GreenCircle}
        alt="Green Circle"
        className="absolute -bottom-54 right-0 w-[200px] sm:w-[200px] lg:w-[300px] z-1"
      />

      <div className="relative bg-[#FFEFDD] rounded-xl max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
          {[1, 2].map((col) => (
            <motion.div
              key={col}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-md"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <H4 className="font-bold text-gray-800 mb-4">
                Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit
              </H4>

              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <ul className="space-y-6">
                {[1, 2, 3].map((num) => (
                  <motion.li
                    key={num}
                    className="flex items-start"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: num * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-8 h-8 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-sm font-semibold text-[#166D48] shadow-sm mr-4"
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "#166D48",
                        color: "#fff",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {num}
                    </motion.div>
                    <p className="text-base text-gray-700">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto relative z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl font-bold text-gray-800 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantage;
