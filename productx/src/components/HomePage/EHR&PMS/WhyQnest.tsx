import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { H1, H2, H3, H4, P } from "../../../styles/Typography";

export default function WhyQnest() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });

  const spring = { stiffness: 120, damping: 30 };

  const cardsY = useSpring(useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"]), spring);
  const sideOffset = useSpring(useTransform(scrollYProgress, [0, 0.8], [120, 0]), spring);
  const titleOpacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), spring);

  const cards = [
    { num: "126+", title: "Countries Supported", desc: "We onboard users from 126+ countries globally." },
    { num: "98%", title: "Success Rate", desc: "Industry-leading onboarding success performance." },
    { num: "56", title: "Global Partners", desc: "Trusted partners across multiple regions." },
  ];
  return (
    <>
      {/* DESKTOP */}
      <div ref={ref} className="hidden xl:block relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-transparent">
          {/* TITLE */}
          <motion.div style={{ opacity: titleOpacity }} className="absolute top-24 w-full z-10 text-center px-6">
            <H2 className=" text-[#166D48] mb-4">
              Why Qnest
            </H2>
            <P className="max-w-[650px] mx-auto text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </P>
          </motion.div>
          {/* CARDS */}
          <motion.div style={{ y: cardsY }} className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-12 gap-8 max-w-[1400px] w-full px-6">
              {cards.map((c, i) => (
                <motion.div key={i} style={{ marginTop: i !== 1 ? sideOffset : 0 }} className="xl:col-span-4">
                  <div className="bg-[#EDE4CA] h-[550px] rounded-sm p-10 shadow-xl flex flex-col justify-between">
                    <div>
                      <H1 className="text-[#166D48]">{c.num}</H1>
                      <H3 className=" text-[#166D48]">{c.title}</H3>
                    </div>
                    <H4 className="text-[#2A2A2A]">{c.desc}</H4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="xl:hidden py-16 px-10 space-y-8">
        <H2 className="text-center  text-[#166D48]">
          Why Qnest
        </H2>
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="bg-[#EDE4CA] p-6 rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <H1 className=" text-[#166D48]">{c.num}</H1>
            <H3 className="text-[#166D48]">{c.title}</H3>
            <H4 className="mt-4 text-[#2A2A2A]">{c.desc}</H4>
          </motion.div>
        ))}
      </div>
    </>
  );
}
