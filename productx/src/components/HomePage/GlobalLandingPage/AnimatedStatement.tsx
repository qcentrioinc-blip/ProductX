import { motion } from "framer-motion";

const AnimatedStatement = () => {
  const text =
    "Driven by purpose and powered by vision, Qnest transforms ambition into direction and direction into achievement.";

  const words = text.split(" ");

  return (
    <div className="w-full flex justify-center py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false }}
        className="text-center max-w-8xl mx-10"
      >
        <motion.h2
          className="text-[24px] md:text-[32px] lg:text-[64px] font-semibold text-[#2A2A2A] leading-relaxed font-bricolage"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: i * 0.04, // stagger per word
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default AnimatedStatement;
