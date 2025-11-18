import { useEffect, useRef, useState } from "react";

const NAVBAR_HEIGHT = 65;

const productsData: Record<string, string[]> = {
  A: ["Agile Development", "AI Solutions", "API Management"],
  B: ["Big Data", "Blockchain Services", "Business Analytics"],
  C: ["Cloud Computing", "CRM Tools", "Cybersecurity"],
  D: ["Data Science", "DevOps", "Digital Marketing"],
  E: ["E-commerce", "ERP Systems", "Edge Computing"],
  F: ["Finance Tools", "Fraud Detection", "File Storage"],
};

const productDescriptions: Record<string, string> = {
  "Agile Development":
    "Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "AI Solutions":
    "Lorem ipsum dolor sit amet, AI description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "API Management":
    "Lorem ipsum dolor sit amet, API description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Big Data":
    "Lorem ipsum dolor sit amet, Big Data description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Blockchain Services":
    "Lorem ipsum dolor sit amet, Blockchain description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Business Analytics":
    "Lorem ipsum dolor sit amet, Business Analytics description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Cloud Computing":
    "Lorem ipsum dolor sit amet, Cloud Computing description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "CRM Tools":
    "Lorem ipsum dolor sit amet, CRM Tools description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Cybersecurity":
    "Lorem ipsum dolor sit amet, Cybersecurity description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Data Science":
    "Lorem ipsum dolor sit amet, Data Science description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "DevOps":
    "Lorem ipsum dolor sit amet, DevOps description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Digital Marketing":
    "Lorem ipsum dolor sit amet, Digital Marketing description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "E-commerce":
    "Lorem ipsum dolor sit amet, E-commerce description here. Lorem ipsum dolor sit amet, E-commerce description here. Lorem ipsum dolor sit amet, E-commerce description here.",
  "ERP Systems":
    "Lorem ipsum dolor sit amet, ERP description here. Lorem ipsum dolor sit amet, ERP description here. Lorem ipsum dolor sit amet, ERP description here.",
  "Edge Computing":
    "Lorem ipsum dolor sit amet, Edge Computing description here. Lorem ipsum dolor sit amet, Edge Computing description here. Lorem ipsum dolor sit amet, Edge Computing description here.",
  "Finance Tools":
    "Lorem ipsum dolor sit amet, Finance description here. Lorem ipsum dolor sit amet, Finance description here. Lorem ipsum dolor sit amet, Finance description here.",
  "Fraud Detection":
    "Lorem ipsum dolor sit amet, Fraud Detection description here. Lorem ipsum dolor sit amet, Fraud Detection description here. Lorem ipsum dolor sit amet, Fraud Detection description here.",
  "File Storage":
    "Lorem ipsum dolor sit amet, File Storage description here. Lorem ipsum dolor sit amet, File Storage description here. Lorem ipsum dolor sit amet, File Storage description here.",
};

const AlphabetSec = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const alphabetBarRef = useRef<HTMLDivElement>(null);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [activeLetter, setActiveLetter] = useState<string>("A");

  const handleProductClick = (product: string) => {
    setExpandedProduct((prev: string | null) =>
      prev === product ? null : product
    );
  };

  // Scroll to section smoothly with proper offset
  const handleScrollTo = (letter: string) => {
    setTimeout(() => {
      const targetHeading = document.getElementById(`section-${letter}`);
      if (targetHeading && alphabetBarRef.current) {
        const barHeight = alphabetBarRef.current.offsetHeight;
        const totalStickyHeight = NAVBAR_HEIGHT + barHeight;
        const targetTop = targetHeading.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetTop - totalStickyHeight,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  // Track which letter section is currently visible
  useEffect(() => {
    const sections = alphabet.map((letter) =>
      document.getElementById(`section-${letter}`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id.replace("section-", "");
          setActiveLetter(id);
        }
      },
      {
        rootMargin: `-${NAVBAR_HEIGHT + 80}px 0px -70% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => observer.disconnect();
  },);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col relative">
      {/* Sticky Alphabet Navigation */}
      <div
        ref={alphabetBarRef}
        className="sticky top-[65px] z-20 shadow-sm w-full bg-black text-white py-3 px-2 overflow-x-auto"
      >
        <div className="flex justify-between min-w-[100%]">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleScrollTo(letter)}
              className={`px-2 sm:px-3 md:px-4 transition whitespace-nowrap flex-1 text-center ${
                activeLetter === letter ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Section Content */}
      <div className="p-4 sm:p-6 md:p-10 pt-[32px] space-y-8">
        {alphabet.map((letter) => (
          <div key={letter} id={`section-${letter}`}>
            <h2 className="font-bold text-lg sm:text-xl mb-3">{letter}</h2>

            {productsData[letter] ? (
              <ul>
                {productsData[letter].map((product, idx) => (
                  <li key={idx} className="border-b border-gray-300 py-2">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleProductClick(product)}
                      aria-expanded={expandedProduct === product}
                      aria-controls={`desc-${product.replace(/\s/g, "")}`}
                    >
                      <span className="text-sm sm:text-base">{product}</span>
                      <span className="text-lg font-bold">
                        {expandedProduct === product ? "−" : "+"}
                      </span>
                    </div>

                    {expandedProduct === product && (
                      <p
                        id={`desc-${product.replace(/\s/g, "")}`}
                        className="mt-2 text-gray-600 text-sm sm:text-base"
                      >
                        {productDescriptions[product] ||
                          "Lorem ipsum dolor sit amet, description not available."}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">
                No products available for {letter}.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetSec;
