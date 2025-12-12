import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { H2, H3, P } from "../../styles/Typography";

const Audit = () => {
  const auditItems = [
    {
      id: 1,
      title: "Audit",
      description:
        "Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap.",
    },
    {
      id: 2,
      title: "Audit",
      description:
        "Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap.",
    },
    {
      id: 3,
      title: "Audit",
      description:
        "Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap.",
    },
  ];

  // 🔹 Image shrink animation
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setShrink(entries[0].isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔹 Bottom text animation
  const textRef = useRef<HTMLDivElement | null>(null);
  const textInView = useInView(textRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="lg:mx-10 px-4 sm:px-10 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <H2 className="font-bold leading-tight">
            <span className="text-[#2B68C3]">Lorem ipsum dolor sit amet,</span>
            <br />
            <span className="text-[#666666]">consectetur adipiscing elit</span>
          </H2>
        </div>

        {/* 🔹 Shrinking Image */}
        <div
          className="mb-8 md:mb-12 sm:-mx-3 transition-all duration-700 ease-out"
          style={{
            transform: shrink ? "scale(0.9)" : "scale(1)",
            paddingLeft: shrink ? "0.75rem" : "0",
            paddingRight: shrink ? "0.75rem" : "0",
          }}
        >
          <img
            src="/Audit.png"
            alt="Team collaboration"
            className="w-full md:h-[500px] h-[300px] rounded-lg object-cover transition-all duration-700 ease-out"
            style={{
              borderRadius: shrink ? "1rem" : "0.5rem",
            }}
          />
        </div>

        {/* Audit Cards Grid */}
        <div
          ref={textRef}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-42"
        >
          {auditItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                textInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col"
            >
              {/* Title */}
              <H3 className="font-bold text-[#2B68C3] mb-3 md:mb-4">
                {item.title}
              </H3>

              {/* Description */}
              <P className="text-[#141414] max-w-sm">{item.description}</P>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audit;
