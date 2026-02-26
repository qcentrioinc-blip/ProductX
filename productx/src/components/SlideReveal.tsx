import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { H2, H4, P } from "../styles/Typography";

export default function SlideReveal() {
  const sectionRef = useRef(null);

  // Detect desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Scroll only active on desktop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-white ${
        isDesktop ? "h-[250vh]" : "h-auto"
      }`}
    >
      <div
        className={`${
          isDesktop
            ? "sticky top-10 h-screen overflow-hidden"
            : ""
        }`}
      >
        {/* MOBILE STATIC IMAGE */}
        {!isDesktop && (
          <div className="w-full">
            <img
              src="/Img1.png"
              alt="Wind Energy"
              className="w-full h-[300px] object-cover"
            />
          </div>
        )}

        {/* BACK CONTENT */}
        <div className="relative z-0 px-6 md:px-12 lg:px-16 py-4 xl:pt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-12 xl:gap-16">

            {/* LEFT CONTENT */}
            <div>
              <H2 className="mb-6">
                Built Around <br /> Your Business
              </H2>

              <P className="max-w-md mb-10">
                All the products we deliver are the brilliant result of a unique
                mix: Their founders’ ideas and inspiration with our team’s
                expertise and creativity.
              </P>

              <button className="bg-[#2B68C3] text-white font-bricolage px-6 py-3 rounded-md text-sm tracking-wide flex items-center gap-2 hover:bg-[#1f4ea3] transition-all duration-300">
                CONTACT US
                {/* <span>↗</span> */}
              </button>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: "/icon11.svg",
                  title: "Discovery & Consultation",
                  text: "We speak with your teams to learn goals, issues, and industry needs in detail",
                },
                {
                  icon: "/icon12.svg",
                  title: "Planning & Alignment",
                  text: "We turn your requirements into a practical, clear plan with agreed priorities and scope.",
                },
                {
                  icon: "/icon13.svg",
                  title: "Workflow & Optimization",
                  text: "We design simple workflows that match daily work and are easy to follow.",
                },
                {
                  icon: "/icon14.svg",
                  title: "Integration & Compliance",
                  text: "We develop, integrate, and test every component against performance, security, and compliance standards.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#9C9C9C] rounded-lg p-6 xl:p-10 transition-all duration-300"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 mb-4"
                  />

                  <H4 className="mb-3">{item.title}</H4>
                  <P>{item.text}</P>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP SLIDING IMAGE */}
        {isDesktop && (
          <motion.div
            style={{ x }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <img
              src="/Img1.png"
              alt="Wind Energy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}