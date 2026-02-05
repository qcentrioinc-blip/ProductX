import { motion } from "framer-motion";
import { H2, H4, P } from "../../../styles/Typography";

const ImageWithCards = () => {
  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-8xl xl:mx-14 px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="rounded-sm overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1400"
              alt="Professional interaction"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between">

            {/* TOP TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <H2 className="text-teal-700 mb-4">
                Sed ut perspiciatis
              </H2>

              <P className="text-gray-600 max-w-lg mb-6">
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
              </P>

              <hr className="border-[#010101]" />
            </motion.div>

            {/* CARDS GRID */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >

              {/* Card 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
                className="bg-gray-100 rounded-2xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-gray-300 mb-4" />
                <H4 className="font-semibold mb-2">Duis aute irure</H4>
                <P className="text-sm text-gray-600">
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat
                </P>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
                className="bg-gray-100 rounded-2xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-gray-300 mb-4" />
                <H4 className="font-semibold mb-2">Duis aute irure</H4>
                <P className="text-sm text-gray-600">
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat
                </P>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
                className="bg-gray-100 rounded-2xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-gray-300 mb-4" />
                <H4 className="font-semibold mb-2">Duis aute irure</H4>
                <P className="text-sm text-gray-600">
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat
                </P>
              </motion.div>

              {/* Circular Stat Card */}
              <motion.div
  variants={{
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  }}
  className="bg-gray-100 rounded-2xl p-6 flex items-center gap-6"
>
  {/* CIRCLE */}
  <div className="relative w-36 h-36 shrink-0">
    {/* Base Ring */}
    <div className="absolute inset-0 rounded-full border-[10px] border-[#A7E8CA]" />

    {/* Ring 1 */}
    <div
      className="absolute inset-0 rounded-full border-[10px] border-[#48CA8E] border-t-transparent border-r-transparent will-change-transform"
      style={{ transform: "rotate(45deg)" }}
    />

    {/* Ring 2 */}
    <div
      className="absolute inset-0 rounded-full border-[10px] border-[#0F344B] border-t-transparent border-r-transparent will-change-transform"
      style={{ transform: "rotate(290deg)" }}
    />

    {/* Center Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center font-bricolage">
      <span className="text-5xl font-semibold leading-none">22</span>
      <span className="text-xl text-gray-500">Duis</span>
    </div>
  </div>

  {/* LIST */}
  <ul className="text-sm text-gray-600 space-y-2 font-bricolage">
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" /> velit
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" /> velit
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-slate-700 shrink-0" /> velit
    </li>
  </ul>
</motion.div>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImageWithCards;
