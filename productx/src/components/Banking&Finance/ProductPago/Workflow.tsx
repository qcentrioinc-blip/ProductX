import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your real images
const images = [
  "https://picsum.photos/id/1011/600/600",
  "https://picsum.photos/id/1015/600/600",
  "https://picsum.photos/id/1016/600/600",
  "https://picsum.photos/id/1021/600/600",
  "https://picsum.photos/id/1025/600/600",
];

const steps = [
  "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
  "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
  "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
  "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
  "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const height = rect.height;

      // Calculate scroll percentage
      const scrollY = Math.min(Math.max(-rect.top, 0), height);
      const progress = scrollY / height;

      // Determine step based on scroll
      const newStep = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );
      setActiveStep(newStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#a50044] py-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Lorem ipsum dolor gamis consecte ipsum
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mt-2">
          Duis aute irure dolor in voluptate velit esse voluptate velit esse
          reprehenderit in voluptate velit esse.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeStep}
              src={images[activeStep]}
              alt="step-img"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Right - Steps */}
        <div className="relative flex flex-col gap-6">
          {steps.map((text, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <motion.div
                className="flex items-center justify-center rounded-full border-2 border-white text-white font-bold"
                animate={{
                  scale: activeStep === idx ? 1.5 : 1,
                  backgroundColor:
                    activeStep === idx ? "#fff" : "transparent",
                  color: activeStep === idx ? "#a50044" : "#fff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ width: 40, height: 40 }}
              >
                {idx + 1}
              </motion.div>
              <p className="text-gray-100 max-w-md">{text}</p>
            </div>
          ))}

          {/* Button */}
          <div className="mt-6">
            <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
              CONTACT US ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
