import { motion } from "framer-motion"
import { H3 } from "../../../styles/Typography"

const TextSec = () => {
  return (
    <section className="w-full overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-8xl mx-auto xl:px-10 flex flex-col text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="xl:mx-auto max-w-6xl relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Line 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <H3>
              On average, CloudDIET customers sav{" "}
              <motion.span
                className="inline-block font-bold text-indigo-900 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                30%
                {/* Underline sweep */}
                <motion.span
                  className="absolute left-0 -bottom-2 h-[3px] bg-indigo-900 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
              </motion.span>{" "}
              of their Azure spend
            </H3>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            className="mt-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <H3>
              beyond existing{" "}
              <span className="font-semibold text-indigo-900">
                Reserved Instances
              </span>.
            </H3>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TextSec
