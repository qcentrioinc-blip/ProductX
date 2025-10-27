import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { H2,  P } from "../../styles/Typography";

const Counter = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Trigger counters on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Mouse glow movement
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background: "linear-gradient(90deg, #2B68C34D, #FED6004D)",
      }}
    >
      {/* Glow effect following mouse */}
      <motion.div
        className="absolute w-[100px] h-[100px] rounded-full blur-3xl bg-amber-500 pointer-events-none"
        animate={{
          x: mousePos.x - 60,
          y: mousePos.y - 60,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />

      {/* Heading */}
      <H2 className="mx-8 sm:mx-16 font-bold mb-6 md:mb-20  ">
        <span className="text-[#2B68C3]">Lorem ipsum dolor sit amet,</span>
        <br />
        <span className="text-[#333333]">consectetur adipiscing elit</span>
      </H2>

      {/* Counter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-[#5A5A5A]">
        {[
          { value: 80, suffix: "%", text: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique" },
          { value: 10, suffix: "X", text: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique" },
          { value: 3.5, suffix: "%", text: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique" },
          { value: 125, suffix: "", text: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-8 px-6 text-center">
            {/* Text above */}
            <P className="text-gray-700  mb-4 max-w-[240px]">
              {item.text}
            </P>
                <div className="flex items-center pt-4 justify-center gap-4">
                    <img
                    src="/TrendUp.png"
                    alt="Trend icon"
                    className="h-6 md:h-16"
                    />
                    <h3 className="text-3xl md:text-6xl   text-gray-900">
                    {inView && (
                        <CountUp
                        start={0}
                        end={item.value}
                        duration={2}
                        decimals={item.value % 1 !== 0 ? 1 : 0}
                        suffix={item.suffix}
                        />
                    )}
                    </h3>
                </div>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
