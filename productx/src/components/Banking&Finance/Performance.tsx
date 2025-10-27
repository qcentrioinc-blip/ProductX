import type {Variants} from "framer-motion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique",
    value: "80%",
    color: "#C00060",
  },
  {
    id: 2,
    label: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique",
    value: "10X",
    color: "#C00060",
  },
  {
    id: 3,
    label: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique",
    value: "3.5%",
    color: "#C00060",
  },
  {
    id: 4,
    label: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique",
    value: "125",
    color: "#C00060",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Performance = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#fbd2e3] to-[#ffeef5] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="text-[#C00060]">Lorem ipsum dolor sit amet,</span>
          <br />
          <span className="text-gray-700 font-medium">
            consectetur adipiscing elit
          </span>
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center border-r last:border-none border-gray-300 md:border-r"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-600 mb-6 max-w-[180px]">
                {item.label}
              </p>

              <div className="flex items-center gap-2">
                <ArrowUpRight size={24} color={item.color} />
                <motion.span
                  className="text-3xl md:text-4xl font-bold text-black"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                >
                  {item.value}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
