"use client";
import { useState, useRef, useEffect } from "react";
import { H2 } from "../../../styles/Typography";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const data: Record<string, string[]> = {
  A: ["Agile Development", "AI Solutions", "API Management"],
  B: ["Big Data", "Blockchain Services", "Business Analytics"],
  C: ["Cloud Computing", "CRM Tools", "Cybersecurity"],
  D: ["Data Science", "DevOps", "Digital Marketing"],
  E: ["E-commerce", "ERP Systems", "Edge Computing"],
  F: ["Finance Tools", "Fraud Detection", "File Storage"],
};

const productDescriptions: Record<string, string> = {
  "Agile Development":
    "Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "AI Solutions":
    "Lorem ipsum dolor sit amet, AI description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "API Management":
    "Lorem ipsum dolor sit amet, API description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Big Data":
    "Lorem ipsum dolor sit amet, Big Data description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Blockchain Services":
    "Lorem ipsum dolor sit amet, Blockchain description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Business Analytics":
    "Lorem ipsum dolor sit amet, Business Analytics description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Cloud Computing":
    "Lorem ipsum dolor sit amet, Cloud Computing description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "CRM Tools":
    "Lorem ipsum dolor sit amet, CRM Tools description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Cybersecurity":
    "Lorem ipsum dolor sit amet, Cybersecurity description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Data Science":
    "Lorem ipsum dolor sit amet, Data Science description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "DevOps":
    "Lorem ipsum dolor sit amet, DevOps description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Digital Marketing":
    "Lorem ipsum dolor sit amet, Digital Marketing description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "E-commerce":
    "Lorem ipsum dolor sit amet, E-commerce description here. Lorem ipsum dolor sit amet, E-commerce description here. Lorem ipsum dolor sit amet, E-commerce description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "ERP Systems":
    "Lorem ipsum dolor sit amet, ERP description here. Lorem ipsum dolor sit amet, ERP description here. Lorem ipsum dolor sit amet, ERP description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Edge Computing":
    "Lorem ipsum dolor sit amet, Edge Computing description here. Lorem ipsum dolor sit amet, Edge Computing description here. Lorem ipsum dolor sit amet, Edge Computing description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Finance Tools":
    "Lorem ipsum dolor sit amet, Finance description here. Lorem ipsum dolor sit amet, Finance description here. Lorem ipsum dolor sit amet, Finance description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Fraud Detection":
    "Lorem ipsum dolor sit amet, Fraud Detection description here. Lorem ipsum dolor sit amet, Fraud Detection description here. Lorem ipsum dolor sit amet, Fraud Detection description here.Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "File Storage":
    "Lorem ipsum dolor sit amet, File Storage description here. Lorem ipsum dolor sit amet, File Storage description here. Lorem ipsum dolor sit amet, File Storage description here . Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
};

export default function GlossaryPage() {
  const [activeLetter, setActiveLetter] = useState("A");
  const [openItem, setOpenItem] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to section smoothly
  const handleScrollTo = (letter: string) => {
    setActiveLetter(letter);
    sectionRefs.current[letter]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      let current = "A";

      Object.keys(sectionRefs.current).forEach((letter) => {
        const ref = sectionRefs.current[letter];
        if (ref && ref.offsetTop - 120 <= scrollPos) current = letter;
      });
      setActiveLetter(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleItem = (item: string) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  return (
    <div className="w-full">
      {/* Sticky A–Z Bar */}
      <div className="sticky top-0 z-50 bg-black text-white text-xl lg:text-2xl font-bricolage overflow-x-auto whitespace-nowrap border-b border-gray-700 scrollbar-hide">
        <div className="flex space-x-6 px-4 py-2 lg:py-4 justify-between">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleScrollTo(letter)}
              className={`font-semibold transition-colors ${
                activeLetter === letter
                  ? "text-[#FFB800]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Content */}
      <div className="py-10 bg-gray-50 mx-4 max-w-8xl lg:mx-10">
        {alphabet.map((letter) => (
          <div
            key={letter}
            ref={(el) => {
              sectionRefs.current[letter] = el;
            }}
            className="mb-10"
          >
            <H2 className="mb-4">{letter}</H2>

            {data[letter]?.length ? (
              data[letter].map((item) => (
                <div
                  key={item}
                  className="border-b border-gray-300 py-3 cursor-pointer transition-all"
                  onClick={() => toggleItem(item)}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-medium">{item}</p>
                    <span className="text-gray-500 text-xl">
                      {openItem === item ? "−" : "+"}
                    </span>
                  </div>

                  {/* Expandable Description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItem === item ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {productDescriptions[item] ||
                            `No description available for ${item}.`}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic">No entries under {letter}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
