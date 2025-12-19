"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H2 } from "../../../styles/Typography";

gsap.registerPlugin(ScrollTrigger);

export default function GradientText() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const text =
    "Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor , consectetur adipis";

  /* -------------------------
     SPLIT TEXT INTO WORDS
  -------------------------- */
  const words = useMemo(() => {
    return text.split(/(\s+)/).map((word, i) => {
      if (word.trim() === "") return word;
      return (
        <span key={i} className="inline-block word">
          {word}
        </span>
      );
    });
  }, [text]);

  /* -------------------------
     SCROLL ANIMATION
  -------------------------- */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const wordEls = el.querySelectorAll<HTMLElement>(".word");

    // Rotate whole block
    gsap.fromTo(
      el,
      { rotate: 5, transformOrigin: "0% 50%" },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // Fade words in
    gsap.fromTo(
      wordEls,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=20%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // Blur → sharp
    gsap.fromTo(
      wordEls,
      { filter: "blur(10px)" },
      {
        filter: "blur(0px)",
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=20%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="bg-[#ACCAEF] relative">
      {/* Scroll space before */}
      <div className="xl:h-[40vh]" />

      <div className="max-w-8xl mx-10 py-20">
        {/* GSAP TARGET */}
        <div ref={wrapperRef}>
          <H2 className="text-left leading-relaxed">
            {words}
          </H2>
        </div>
      </div>

      {/* Scroll space after */}
      <div className="xl:h-[40vh]" />
    </section>
  );
}
