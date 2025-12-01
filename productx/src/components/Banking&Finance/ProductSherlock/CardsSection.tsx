"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { H2, H4, P } from "../../../styles/Typography";

export default function CardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // numeric trigger increments each time we want to replay the animation
  const [trigger, setTrigger] = useState(0);

  // store last scroll Y in a ref to detect direction without re-renders
  const lastScrollYRef = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);

  useEffect(() => {
    // update lastScrollYRef on scroll
    const onScroll = () => {
      lastScrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when it becomes visible
          if (entry.isIntersecting) {
            // check scroll direction: if user is scrolling DOWN (current scroll > last known)
            // NOTE: lastScrollYRef gets updated by scroll listener above, so it tracks latest Y
            const currentY = window.scrollY;
            const lastY = lastScrollYRef.current;

            if (currentY >= lastY) {
              // user is scrolling down (or stationary) — trigger animation replay
              setTrigger((t) => t + 1);
            }
            // if scrolling up, do nothing (cards remain where they are)
          }
        });
      },
      {
        threshold: 0.3,
        root: null,
        rootMargin: "0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef as any}
      className="w-full h-full flex flex-col items-center justify-center bg-white px-6 sm:px-8 lg:px-28 overflow-hidden"
    >
      {/* Inline style for hiding scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      {/* Top Navigation */}
      <nav className="w-full overflow-x-auto scrollbar-hide mb-16">
        <div className="flex items-center xl:justify-start justify-center gap-6 sm:gap-8 lg:gap-12 min-w-max px-2">
          {["Overview", "Benefits", "Use Cases", "Our Process", "Blogs"].map(
            (label) => {
              return (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-800 hover:text-black relative transition-colors duration-300 whitespace-nowrap
                     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full"
                >
                  {label}
                </a>
              );
            }
          )}
        </div>
      </nav>

      {/* Title */}
      <H2 className="text-center mb-16">
        Lorem ipsum dolor, consectetur adipis
      </H2>

      {/* Cards */}
      <div className="flex flex-wrap justify-start md:justify-center gap-6 w-full max-w-8xl">
        {/* Card 1 — slides LEFT when triggered */}
        <motion.div
          key={`card1-${trigger}`}
          initial={{ x: 200 }}
          animate={{ x: trigger ? -30 : 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-[#E6E6E6] rounded-lg flex flex-col p-6 px-10"
        >
          <div className="w-12 h-12 bg-white rounded-full mb-4"></div>
          <H4 className="mt-4">Duis aute irure dolor in</H4>
          <P className="font-bold text-gray-800 mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </motion.div>

        {/* Card 2 — center (no movement) */}
        <motion.div
          key={`card2-${trigger}`}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-[#E6E6E6] rounded-lg flex flex-col p-6 px-10"
        >
          <div className="w-12 h-12 bg-white rounded-full mb-4"></div>
          <H4 className="mt-4">Duis aute irure dolor in</H4>
          <P className="font-bold text-gray-800 mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </motion.div>

        {/* Card 3 — slides RIGHT when triggered */}
        <motion.div
          key={`card3-${trigger}`}
          initial={{ x: -200 }}
          animate={{ x: trigger ? 30 : 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-[#E6E6E6] rounded-lg flex flex-col p-6 px-10"
        >
          <div className="w-12 h-12 bg-white rounded-full mb-4"></div>
          <H4 className="font-bold text-lg mt-4">Duis aute irure dolor in</H4>
          <P className="font-bold text-gray-800 mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </motion.div>
      </div>
    </section>
  );
}
