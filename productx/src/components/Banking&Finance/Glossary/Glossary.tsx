import { useState, useEffect, useRef } from "react";

 

const productsData: Record<string, string[]> = {

  A: ["Agile Development", "AI Solutions", "API Management"],

  B: ["Big Data", "Blockchain Services", "Business Analytics"],

  C: ["Cloud Computing", "CRM Tools", "Cybersecurity"],

  D: ["Data Science", "DevOps", "Digital Marketing"],

  E: ["E-commerce", "ERP Systems", "Edge Computing"],

  F: ["Finance Tools", "Fraud Detection", "File Storage"],

  G: ["Graphics Design", "Game Development", "Git Services"],

  H: ["Hosting Services", "HR Systems", "Healthcare IT"],

  I: ["IoT Solutions", "Infrastructure", "Integration Tools"],

  J: ["Java Development", "JavaScript Frameworks", "Job Portals"],

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

  "Graphics Design": "Lorem ipsum dolor sit amet, Graphics description here.",

  "Game Development": "Lorem ipsum dolor sit amet, Game description here.",

  "Git Services": "Lorem ipsum dolor sit amet, Git description here.",

  "Hosting Services": "Lorem ipsum dolor sit amet, Hosting description here.",

  "HR Systems": "Lorem ipsum dolor sit amet, HR description here.",

  "Healthcare IT": "Lorem ipsum dolor sit amet, Healthcare description here.",

  "IoT Solutions": "Lorem ipsum dolor sit amet, IoT description here.",

  "Infrastructure": "Lorem ipsum dolor sit amet, Infrastructure description here.",

  "Integration Tools": "Lorem ipsum dolor sit amet, Integration description here.",

  "Java Development": "Lorem ipsum dolor sit amet, Java description here.",

  "JavaScript Frameworks": "Lorem ipsum dolor sit amet, JavaScript description here.",

  "Job Portals": "Lorem ipsum dolor sit amet, Job Portals description here.",

};

 

const Glossary = () => {

  return (

    <section className="relative w-full h-screen">

      {/* Background image with dark overlay */}

      <img

        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"

        alt="Section Background"

        className="absolute top-0 left-0 w-full h-full object-cover"

      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

 

      {/* Text content */}

      <div className="relative z-10 flex items-center h-full px-8 sm:px-16 md:px-24">

        <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl">

          Sed ut perspiciatis unde omnis iste natus

        </h1>

      </div>

    </section>

  );

};

 

const AlphabetSec = () => {

  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

 

  const sectionRef = useRef<HTMLDivElement>(null);

  const alphabetBarRef = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState(false);

 

  const handleProductClick = (product: string) => {

    setExpandedProduct((prev) => (prev === product ? null : product));

  };

 

  const handleScrollTo = (letter: string) => {

    const section = document.getElementById(`section-${letter}`);

    if (section && alphabetBarRef.current) {

      const navbarHeight = 65;

      const barHeight = alphabetBarRef.current.offsetHeight;

     

      const totalStickyHeight = navbarHeight + barHeight;

      const targetTop = section.getBoundingClientRect().top + window.scrollY;

      const top = targetTop - totalStickyHeight;

 

      window.scrollTo({ top, behavior: "smooth" });

    }

  };

 

  useEffect(() => {

    const handleScroll = () => {

      if (!sectionRef.current || !alphabetBarRef.current) return;

 

      const navbarHeight = 65;

      const sectionRect = sectionRef.current.getBoundingClientRect();

      const barHeight = alphabetBarRef.current.offsetHeight;

 

      // Get the bar's natural position (where it sits in the document)

      const barNaturalTop = sectionRect.top;

 

      // Section's bottom relative to viewport

      const sectionBottom = sectionRect.bottom;

 

      // Bar should be sticky when:

      // 1. Bar's natural position has reached or passed the navbar bottom (barNaturalTop <= navbarHeight)

      // 2. Section bottom is still visible below where the sticky bar would be (sectionBottom > navbarHeight + barHeight)

      const shouldBeSticky = barNaturalTop <= navbarHeight && sectionBottom > navbarHeight + barHeight;

     

      setIsSticky(shouldBeSticky);

    };

 

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleScroll);

    handleScroll(); // Check initial state

    return () => {

      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleScroll);

    };

  }, []);

 

  return (

    <div className="w-full min-h-screen bg-gray-50 relative" ref={sectionRef}>

     

      {/* Alphabet Navigation Bar */}

      <div

        ref={alphabetBarRef}

        className={`w-full bg-black text-white py-3 px-2 overflow-x-auto transition-all duration-200`}

        style={{

          position: isSticky ? 'fixed' : 'relative',

          top: isSticky ? '65px' : 'auto',

          left: isSticky ? '0' : 'auto',

          right: isSticky ? '0' : 'auto',

          zIndex: isSticky ? 50 : 'auto',

        }}

      >

        <div className="flex justify-between min-w-[100%]">

          {alphabet.map((letter) => (

            <button

              key={letter}

              onClick={() => handleScrollTo(letter)}

              className="px-2 sm:px-3 md:px-4 hover:text-yellow-400 transition whitespace-nowrap flex-1 text-center text-sm sm:text-base"

            >

              {letter}

            </button>

          ))}

        </div>

      </div>

 

      {/* Spacer when bar is fixed to prevent content jump */}

      {isSticky && alphabetBarRef.current && (

        <div style={{ height: `${alphabetBarRef.current.offsetHeight}px` }} />

      )}

 

      {/* Section Content */}

      <div className="p-4 sm:p-6 md:p-10 space-y-8">

        {alphabet.map((letter) => (

          <div key={letter} id={`section-${letter}`}>

            <h2 className="font-bold text-2xl sm:text-3xl mb-4 text-gray-800">{letter}</h2>

 

            {productsData[letter] ? (

              <ul className="space-y-1">

                {productsData[letter].map((product, idx) => (

                  <li key={idx} className="border-b border-gray-300 py-3 hover:bg-gray-100 transition-colors">

                    <div

                      className="flex justify-between items-center cursor-pointer px-2"

                      onClick={() => handleProductClick(product)}

                    >

                      <span className="text-sm sm:text-base font-medium text-gray-700">{product}</span>

                      <span className="text-xl font-bold text-gray-600 ml-4">

                        {expandedProduct === product ? "−" : "+"}

                      </span>

                    </div>

 

                    {expandedProduct === product && (

                      <div className="mt-3 px-2 animate-fadeIn">

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">

                          {productDescriptions[product] ||

                            "Lorem ipsum dolor sit amet, description not available."}

                        </p>

                      </div>

                    )}

                  </li>

                ))}

              </ul>

            ) : (

              <p className="text-gray-500 italic">No products available for this letter.</p>

            )}

          </div>

        ))}

      </div>

    </div>

  );

};

 

// Main component combining both sections

const GlossaryPage = () => {

  return (

    <>

      {/* Fixed Navbar (simulated) */}

      <div className="fixed top-0 left-0 right-0 h-[65px] bg-blue-600 text-white flex items-center px-8 z-50 shadow-md">

        <h1 className="text-xl font-bold">Fixed Navbar (65px)</h1>

      </div>

     

      {/* Add padding to account for fixed navbar */}

      <div className="pt-[65px]">

        <Glossary />

        <AlphabetSec />

       

        {/* Extra content to test scrolling */}

        <div className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white p-20 text-center">

          <h1 className="text-4xl font-bold mb-4">Content After Alphabet Section</h1>

          <p className="text-xl">The sticky bar should have stopped at the section boundary</p>

        </div>

      </div>

    </>

  );

};

 

export default GlossaryPage;