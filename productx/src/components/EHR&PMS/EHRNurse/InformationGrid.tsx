import { H2, H3, P } from "../../../styles/Typography";
import { motion } from "framer-motion";

/* ---------- Animation Tokens ---------- */
const easeOut = [0.4, 0, 0.2, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const lineVariants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

/* ---------- Component ---------- */
const InformationGrid = () => {
  const features = [
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 bg-white overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="mb-16 border-b border-gray-200 pb-10"
      >
        <H2 className="text-[#008280] mb-6">Sed ut perspiciatis</H2>
        <P className="max-w-xl text-[#141414] leading-relaxed">
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, su
        </P>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="
              relative transition-transform
              after:content-['']
              after:absolute
              after:top-0
              after:right-[-2rem]
              after:w-[0.5px]
              after:h-full
              after:bg-gray-300
              md:[&:nth-child(2n)]:after:hidden
              lg:[&:nth-child(2n)]:after:block
              lg:[&:nth-child(3n)]:after:hidden
            "
          >
            {/* Animated Divider */}
            <motion.span
              variants={lineVariants}
              className="
                absolute right-[-2rem] top-0
                h-full w-[0.5px] bg-gray-300
                origin-top
              "
            />

            <H3 className="text-[#141414] mb-4">{feature.title}</H3>
            <P className="text-[#141414] leading-relaxed">{feature.text}</P>
          </motion.div>
        ))}

        {/* Image / Placeholder */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="bg-[#dcdcdc] rounded-2xl w-full h-48 md:h-full min-h-[200px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InformationGrid;
