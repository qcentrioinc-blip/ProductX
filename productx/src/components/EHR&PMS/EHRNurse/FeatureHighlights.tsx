import { H2, H3, P } from "../../../styles/Typography";
import { motion } from "framer-motion";
import { useRef } from "react";

const FeatureHighlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su",
    },
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su",
    },
    {
      title: "Duis aute irure",
      text:
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-10 xl:mx-auto px-6 pb-20 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-2">
        <H2 className="text-[#008280]">Sed ut perspiciatis</H2>
      </div>

      {/* Fade Gradients (Tablet only) */}
      <div className="pointer-events-none hidden md:block lg:hidden">
        <div className="absolute left-0 top-32 h-[70%] w-10 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-32 h-[70%] w-10 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Features */}
      <div
        ref={scrollRef}
        className="
          grid grid-cols-1 gap-y-14
          md:flex md:gap-10 md:overflow-x-auto md:overflow-y-hidden
          md:snap-x md:snap-mandatory
          md:pb-4 md:scrollbar-hide
          lg:grid lg:grid-cols-3 lg:gap-x-16
          lg:overflow-visible
        "
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              text-start
              md:min-w-[320px] md:snap-start
              lg:min-w-0
              will-change-transform
            "
          >
            {/* Plus Icon */}
            <div className="mb-6 flex justify-start">
              <span className="text-[#ff7a00] text-6xl font-light leading-none">
                +
              </span>
            </div>

            {/* Content */}
            <H3 className="text-[#141414] mb-4">
              {item.title}
            </H3>
            <P className="text-[#141414] max-w-xs leading-relaxed">
              {item.text}
            </P>
          </motion.div>
        ))}
      </div>

      {/* Hide scrollbar utility */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeatureHighlights;
