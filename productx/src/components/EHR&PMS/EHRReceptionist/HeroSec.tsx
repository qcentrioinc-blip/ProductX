import { useState } from "react";
import { motion } from "framer-motion";
import { H2, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

const HeroSec = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, setMenuOpen] = useState(false);

  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="bg-white overflow-hidden">
      <div className="relative max-w-8xl mx-auto lg:mx-16 px-6 py-16 lg:pt-40">

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative rounded-[28px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
            alt="Professional workspace"
            className="
              w-full
              h-[420px]
              sm:h-[500px]
              md:h-[620px]
              lg:h-[700px]
              xl:h-[700px]
              object-cover
            "
            loading="lazy"
            decoding="async"
          />

          {/* Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="
              absolute
              top-0
              left-0
              w-full
              sm:w-[520px]
              md:w-[600px]
              lg:w-[700px]
              h-auto
              lg:min-h-[400px]
              bg-white
              rounded-br-[28px]
              p-6
              sm:p-8
              lg:p-10
              shadow-[0_4px_18px_rgba(0,0,0,0.05)]
              flex
              items-center
            "
          >
            {/* Centered content */}
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
              className="text-left max-w-xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
              >
                <H2 className="text-[#008280] leading-[1.15] mb-6">
                  Sed ut perspiciatis <br />
                  Sed ut perspiciatis
                </H2>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
              >
                <P className="text-[#141414] mb-8">
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
                </P>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
              >
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setDrawerOpen(true);
                  }}
                  className="
                    group
                    inline-flex items-center justify-center gap-3
                    px-8 h-14 
                    rounded-lg 
                    bg-white 
                    border-2 border-[#007976] 
                    text-[#007976] font-bold text-sm tracking-widest
                    transition-all duration-300 
                    hover:bg-[#007976] hover:text-white hover:scale-105
                    cursor-pointer
                  "
                >
                  CONTACT US
                  <span className="text-2xl font-light transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};

export default HeroSec;
