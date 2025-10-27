import { useState, useEffect, useRef } from "react";

const productsData: Record<string, string[]> = {
  A: ["Agile Development", "AI Solutions", "API Management"],
  B: ["Big Data", "Blockchain Services", "Business Analytics"],
  C: ["Cloud Computing", "CRM Tools", "Cybersecurity"],
  D: ["Data Science", "DevOps", "Digital Marketing"],
  E: ["E-commerce", "ERP Systems", "Edge Computing"],
  F: ["Finance Tools", "Fraud Detection", "File Storage"],
};

const productDescriptions: Record<string, string> = {
  "Agile Development": "Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "AI Solutions": "Lorem ipsum dolor sit amet, AI description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.   Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "API Management": "Lorem ipsum dolor sit amet, API description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Big Data": "Lorem ipsum dolor sit amet, Big Data description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Blockchain Services": "Lorem ipsum dolor sit amet, Blockchain description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Business Analytics": "Lorem ipsum dolor sit amet, Business Analytics description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Cloud Computing": "Lorem ipsum dolor sit amet, Cloud Computing description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "CRM Tools": "Lorem ipsum dolor sit amet, CRM Tools description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Cybersecurity": "Lorem ipsum dolor sit amet, Cybersecurity description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Data Science": "Lorem ipsum dolor sit amet, Data Science description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "DevOps": "Lorem ipsum dolor sit amet, DevOps description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "Digital Marketing": "Lorem ipsum dolor sit amet, Digital Marketing description here. Lorem ipsum dolor sit amet, Agile description here. Lorem ipsum dolor sit amet, Agile description here.",
  "E-commerce": "Lorem ipsum dolor sit amet, E-commerce description here. Lorem ipsum dolor sit amet, E-commerce description here. Lorem ipsum dolor sit amet, E-commerce description here.",
  "ERP Systems": "Lorem ipsum dolor sit amet, ERP description here. Lorem ipsum dolor sit amet, ERP description here. Lorem ipsum dolor sit amet, ERP description here.",
  "Edge Computing": "Lorem ipsum dolor sit amet, Edge Computing description here. Lorem ipsum dolor sit amet, Edge Computing description here. Lorem ipsum dolor sit amet, Edge Computing description here.",
  "Finance Tools": "Lorem ipsum dolor sit amet, Finance description here. Lorem ipsum dolor sit amet, Finance description here. Lorem ipsum dolor sit amet, Finance description here.",
  "Fraud Detection": "Lorem ipsum dolor sit amet, Fraud Detection description here. Lorem ipsum dolor sit amet, Fraud Detection description here. Lorem ipsum dolor sit amet, Fraud Detection description here.",
  "File Storage": "Lorem ipsum dolor sit amet, File Storage description here. Lorem ipsum dolor sit amet, File Storage description here. Lorem ipsum dolor sit amet, File Storage description here.",
};

const AlphabetSec = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const alphabetBarRef = useRef<HTMLDivElement>(null);

  const handleProductClick = (product: string) => {
    setExpandedProduct((prev) => (prev === product ? null : product));
  };

  const handleScrollTo = (letter: string) => {
    const section = document.getElementById(`section-${letter}`);
    if (section && alphabetBarRef.current) {
      const navbarHeight = 73; // global navbar height
      const barHeight = alphabetBarRef.current.offsetHeight;
      const top =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight - barHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      const navbarHeight = 73;

      setIsSticky(sectionTop <= navbarHeight && sectionBottom > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col" ref={sectionRef}>
      {/* Sticky Alphabet Navigation */}
      <div
        ref={alphabetBarRef}
        className={`${
          isSticky ? "fixed top-[73px] z-20 shadow-sm" : "relative"
        } w-full bg-black text-white py-3 px-2 overflow-x-auto transition-all`}
      >
        <div className="flex justify-between min-w-[100%]">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleScrollTo(letter)}
              className="px-2 sm:px-3 md:px-4 hover:text-yellow-400 transition whitespace-nowrap flex-1 text-center"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Section Content */}
      <div className="p-4 sm:p-6 md:p-10 space-y-8">
        {alphabet.map((letter) => (
          <div key={letter} id={`section-${letter}`}>
            <h2 className="font-bold text-lg sm:text-xl mb-3">{letter}</h2>

            {productsData[letter] && (
              <ul>
                {productsData[letter].map((product, idx) => (
                  <li key={idx} className="border-b-[0.1px] border-gray-400 py-2">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <span className="text-sm sm:text-base">{product}</span>
                      <span className="text-lg font-bold">
                        {expandedProduct === product ? "−" : "+"}
                      </span>
                    </div>

                    {expandedProduct === product && (
                      <p className="mt-2 text-gray-600 text-sm sm:text-base">
                        {productDescriptions[product] ||
                          "Lorem ipsum dolor sit amet, description not available."}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetSec;
