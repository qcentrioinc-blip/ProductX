import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { H3, P } from "../../../styles/Typography";
import { createPortal } from "react-dom";
import ContactModal from "./ContactModal";
 
const AINavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  // const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  // const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setMegaMenuBuiltFor] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<null | "features" | "resources" | "builtfor">(null);
  // const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
 
  // ---------- HOVER TIMEOUT LOGIC ----------
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
 
  const handleCloseMenus = () => {
    timeoutRef.current = setTimeout(() => {
      // setMegaMenuOpen(false);
      // setResourcesMenuOpen(false);
      setMegaMenuBuiltFor(false);
    }, 200); // 200ms delay to allow bridge crossing
  };
 
  const handleKeepOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
 
  // Immediate close (for cleanups or distinct actions)
  const closeAllMenus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // setMegaMenuOpen(false);
    // setResourcesMenuOpen(false);
    setMegaMenuBuiltFor(false);
  };
 
  // ---------- AI-SPECIFIC DATA ----------
 
  const industry = "cloud-finops-ai";
  const currentIndustry = "Cloud FinOps AI";
  const base = `/industries/${industry}`;
 
  const navItems = [
    { name: "Features", path: `${base}/features`, scroll: false },
    { name: "Built for", path: base },
    { name: "Pricing", path: `${base}/pricing` },
    { name: "Resources", path: `${base}/resources` },
  ];
 
  // const megaMenuItems = [
  //   {
  //     title: "AI Features",
  //     desc: "Intelligent agents that automate complex workflows.",
  //     img: "/AIOptimization/Resource1.png",
  //     path: `${base}/features`,
  //   },
  //   // {
  //   //   title: "Process Automation",
  //   //   desc: "End-to-end automation for repetitive business tasks.",
  //   //   img: "/AIOptimization/Resource2.png",
  //   //   path: `${base}/process-automation`,
  //   // },
  // ];
 
  // const resourceItemsAI = [
  //   {
  //     title: "Case Studies",
  //     desc: "Real-world AI Optimization success stories and ROI metrics.",
  //     path: `${base}/resources`,
  //   },
  //   {
  //     title: "Newsletters",
  //     desc: "Latest trends in AI, automation, and machine learning.",
  //     path: `${base}/newsletter`,
  //   },
  //   {
  //     title: "Whitepapers",
  //     desc: "Real-world AI Optimization success stories and ROI metrics.",
  //     path: `${base}/whitepaper`,
  //   },
  //   {
  //     title: "Glossary",
  //     desc: "Real-world AI Optimization success stories and ROI metrics.",
  //     path: `${base}/glossary`,
  //   },
  // ];
 
  const builtForItemsAI = [
    {
      title: "Enterprises",
      desc: "IT and Cloud Infrastructure Teams",
      path: `${base}/built-for/enterprises`,
    },
    {
      title: "Digital Natives",
      desc: "SaaS and Application Providers",
      path: `${base}/built-for/digital-native`,
    },
    {
      title: "Large, Multi-Region Enterprises",
      desc: " Multi-Region Enterprises with Regulated or Mission-Critical Systems",
      path: `${base}/built-for/smb`,
    },
  ];
 
  // const industries = [
  //   {
  //     name: "Banking & Finance",
  //     path: "/industries/banking-and-finance",
  //     img: "/BNFHOME/P1.png",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  //   },
  //   {
  //     name: "EHR and PMS",
  //     path: "/industries/ehr-and-pms",
  //     img: "/BNFHOME/P1.png",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  //   },
  //   {
  //     name: "HighTech",
  //     path: "/industries/high-tech",
  //     img: "/BNFHOME/P1.png",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  //   },
  // ];
 
  // const industryOptions = industries.filter(
  //   (ind) => ind.name !== currentIndustry
  // );
 
  // ---------- EFFECTS ----------
 
 
 
  const [isScrolled, setIsScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
 
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
 
 
 
  // ---------- RENDER ----------
 
  return createPortal(
    <>
      {/* TOP TRANSPARENT BAR - Scrolls away */}
      <div className="absolute top-0 z-50 left-0 w-full bg-bg-white/80 bg-white/10 backdrop-blur-lg font-bricolage px-4 sm:px-6 md:px-8 pt-2 pb-1 flex justify-between transition-all duration-300">
        <a href="/" className="flex items-center cursor-pointer">
 
          <div className="text-[#010101] font-bricolage font-light text-xl  px-2  pn rounded cursor-pointer">
 
            <img className="h-10 w-full" src="/QnestLogo.svg" />
          </div>
 
        </a>
 
        <div className="hidden lg:flex items-center gap-6">
          <a href={`${base}/platform`} className="text-white font-medium">Platform</a>
          <a href={`${base}/marketplace`} className="text-white font-medium">Marketplace</a>
        </div>
 
        <button className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-7 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
        </button>
      </div>
 
      {/* MAIN NAV (ALL SCREENS - PERMANENTLY FIXED) */}
      <nav
        onMouseLeave={handleCloseMenus}
        onMouseEnter={handleKeepOpen}
        className={`hidden lg:flex fixed top-0 left-0 w-full z-[9999] justify-center transition-none pointer-events-none`}
      >
        <div
          className={`bg-white backdrop-blur-md shadow-lg px-10 py-3 flex items-center justify-between pointer-events-auto
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${isScrolled
              ? "w-full rounded-none scale-100"
              : "w-[90%] max-w-8xl rounded-full scale-[0.98] translate-y-15"
            }`}
        >
 
 
          <div className="flex items-center gap-10">
            <div className="relative flex items-center gap-1 cursor-pointer" onMouseEnter={() => {  setMegaMenuBuiltFor(false); }}>
              <a href="/industries/cloud-finops-ai">
                <div className="w-full h-12 flex justify-center items-center rounded-md   transition-all duration-300">
                  <img src="/AILogoo.png" className="w-auto h-10" alt="" /></div></a>
              {/* <div className={`transition-transform relative top-[1.5px] duration-300 ${logoDropdownOpen ? "rotate-180" : "rotate-0"}`}>
              <img src="/down.png" className="w-4 h-4" />
            </div> */}
 
              {/* {logoDropdownOpen && (
              <div className="absolute top-14 w-80 bg-white shadow-xl rounded-md z-[999] p-3">
                {industryOptions.map((ind, index) => (
                  <Link key={index} to={ind.path} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 transition-all">
                    <img src={ind.img} alt={ind.name} className="w-16 h-14 object-cover" />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold font-quicksand text-gray-900">{ind.name}</h3>
                      <p className="text-gray-600 font-quicksand text-sm">{ind.desc || "Click to explore"}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )} */}
            </div>
 
            <ul className="hidden lg:flex items-center gap-8 font-bold font-quicksand">
              {navItems.map((item) => (
                <li key={item.name}>
                  {/* {item.name === "Features" && (
                  <div className="relative" onMouseEnter={() => { preloadImages(); setMegaMenuOpen(true); setResourcesMenuOpen(false); setMegaMenuBuiltFor(false) }}>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">Features</button>
                      <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </div>
                )} */}
                  {item.name === "Features" && (
                    <a
                      href={item.path}
                      onMouseEnter={closeAllMenus}
                      className="text-gray-800 text-[18px]"
                    >
                      Features
                    </a>
                  )}
 
                  {
 
                  }
 
                  {item.name === "Resources" && (
                    <a
                      target="_blank"
                      href="/industries/ai-optimization/resources/whyclouddiet/clouddiet"
                      className="text-gray-800 text-[18px]"
                      onClick={closeAllMenus}
                    >
                      Resources
                    </a>
                  )}
 
                  {item.name === "Built for" && (
                    <div className="relative" onMouseEnter={() => { handleKeepOpen(); setMegaMenuBuiltFor(true);}}>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className="text-gray-800 text-[18px] cursor-pointer">Built For</button>
                        <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuBuiltFor ? "rotate-180" : "rotate-0"}`} />
                      </div>
                    </div>
                  )}
 
                  {item.name !== "Features" && item.name !== "Resources" && item.name !== "Built for" && (
                    <a href={item.path} onMouseEnter={() => { setMegaMenuBuiltFor(false) }} className="text-gray-800 text-[18px]">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
 
          <div className="hidden lg:flex items-center gap-8">
            {/* <Link to={`${base}/careers`} onMouseEnter={closeAllMenus} className="text-gray-800 text-[18px] font-bold font-quicksand">Careers</Link> */}
            <button className="text-gray-800 text-[18px] font-bold font-quicksand cursor-pointer" onClick={() => setModalOpen(true)}>
              Support
            </button>
            <button
              onClick={() => window.open("https://clouddiet.ai/signup", "_blank")}
              className="
          group
          flex items-center justify-center
          w-auto h-[48px]
          px-[28px] py-[10px]
          rounded-[8px]
          font-quicksand font-bold text-[16px]
          bg-black text-white
          border-2 border-[#141414]
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-white hover:text-black cursor-pointer
         
        "
            > SIGN UP
              <span className="flex items-center gap-2">
 
                <span className="relative flex items-center w-[20px] h-[20px]">
                  <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                  <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </span>
            </button>
          </div>
 
          {/* Mobile Hamburger (Dark Mode for White Nav) */}
          <button className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
          </button>
        </div>
      </nav>
 
      {/* MEGA MENUS - keeping your existing code */}
      {/* {megaMenuOpen && (
        <div
          onMouseEnter={() => { handleKeepOpen(); setMegaMenuOpen(true); }}
          onMouseLeave={handleCloseMenus}
          className={`fixed left-1/2 ${isScrolled ? "top-[85px]" : "top-32"} translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[9998]`}
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">Intelligent automation solutions to transform your business operations.</P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {megaMenuItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <a href={item.path} className="flex items-start gap-4">
                  <img src={item.img} alt={item.title} className="w-12 h-12 rounded-xl object-cover" loading="eager" />
                  <div>
                    <h3 className="text-lg font-quicksand font-semibold text-gray-900">{item.title}</h3>
                    <P className="text-gray-600 text-sm leading-snug">{item.desc}</P>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )} */}
 
      {/* {resourcesMenuOpen && (
        <div
          onMouseEnter={() => { handleKeepOpen(); setResourcesMenuOpen(true); }}
          onMouseLeave={handleCloseMenus}
          className={`fixed left-1/2 ${isScrolled ? "top-[85px]" : "top-32"} translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[9998]`}
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">Knowledge hub for AI optimization implementation and best practices.</P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {resourceItemsAI.map((res, index) => (
              <a key={index} href={res.path} className="block">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{res.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{res.desc}</p>
              </a>
            ))}
          </div>
        </div>
      )}
  */}
      {megaMenuBuiltFor && (
        <div
          onMouseEnter={() => { handleKeepOpen(); setMegaMenuBuiltFor(true); }}
          onMouseLeave={handleCloseMenus}
         className={`fixed left-1/2 ${isScrolled ? "top-[76px]" : "top-34"}
translate-y-1 -translate-x-1/2
bg-gray-50 px-24 py-10 shadow-xl z-[9998]
transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
${
  isScrolled
    ? "w-[96%] max-w-none rounded-xl"
    : "w-[90%] max-w-7xl rounded-xl"
}`}
        >
          <H3>Engineered for Every Azure Environment</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">CloudDIET is the AI optimization platform built for any organization's scale, complexity, and compliance needs.</P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-3 gap-y-4 gap-x-1">
            {builtForItemsAI.map((item, index) => (
              <a key={index} href={item.path} className="block cursor-pointer pointer-events-auto hover:bg-gray-100 p-2 rounded-lg transition-colors">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      )}
 
      {/* MOBILE MENU - keeping your existing mobile menu code */}
      <div ref={menuRef} className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 transition-all duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <a href={base} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-semibold">LOGO</div>
              <span className="text-xl font-semibold text-gray-900">{currentIndustry}</span>
            </a>
          </div>
        </div>
 
        <div className="flex scrollbar-hide flex-col gap-6 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          <div className="border-b border-gray-200 pb-3">
            <button onClick={() => setMobileDropdown(mobileDropdown === "features" ? null : "features")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold">
              Features
              {/* <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "features" ? "rotate-180" : ""}`} /> */}
            </button>
            {/* {mobileDropdown === "features" && (
              <div className="mt-3 pl-3 space-y-4">
                {megaMenuItems.map((item, index) => (
                  <a key={index} href={item.path} onClick={() => setMenuOpen(false)} className="flex gap-3 items-start py-2">
                    <img src={item.img} className="w-12 h-12 rounded-lg object-cover" loading="eager" />
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )} */}
          </div>
 
          <div className="border-b border-gray-200 pb-3">
            <button onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold">
              Resources
              {/* <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "resources" ? "rotate-180" : ""}`} /> */}
            </button>
            {/* {mobileDropdown === "resources" && (
              <div className="mt-3 pl-3 space-y-4">
                {resourceItemsAI.map((item, index) => (
                  <a key={index} href={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </a>
                ))}
              </div>
            )} */}
          </div>
 
          <div className="border-b border-gray-200 pb-3">
            <button onClick={() => setMobileDropdown(mobileDropdown === "builtfor" ? null : "builtfor")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold cursor-pointer">
              Built For
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "builtfor" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "builtfor" && (
              <div className="mt-3 pl-3 space-y-4">
                {builtForItemsAI.map((item, index) => (
                  <a key={index} href={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
 
          {navItems.map((item) =>
            item.name !== "Features" && item.name !== "Resources" && item.name !== "Built for" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <a href={item.path} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
                  {item.name}
                </a>
              </div>
            ) : null
          )}
 
          <div className="border-b border-gray-200 pb-3">
            <a href={`${base}/careers`} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
              Careers
            </a>
          </div>
        </div>
 
        <div className="flex justify-between mt-10 gap-6 pt-4">
          <a href={`${base}/platform`} className="text-purple-600 text-lg font-semibold">Platform</a>
          <a href={`${base}/marketplace`} className="text-purple-600 text-lg font-semibold">Marketplace</a>
        </div>
 
        <div className="mt-6 flex justify-start items-center">
 
          <button onClick={() => { setMenuOpen(false); setModalOpen(true); }}>
            <ContactUsDark>Support</ContactUsDark>
          </button>
          <a href="https://clouddiet.ai/signup" target="_blank" rel="noopener noreferrer"
 
            className="
          group
          flex items-center justify-center
          w-auto h-[48px]
          px-[24px] py-[12px]
          rounded-[8px]
          font-quicksand font-bold text-[16px]
          bg-black text-white
          border-2 border-[#141414]
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-white hover:text-black
         
        "
          > SIGN UP
            <span className="flex items-center gap-2">
 
              <span className="relative flex items-center w-[20px] h-[20px]">
                <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
            </span>
 
          </a>
        </div>
      </div>
 
      {/* CONTACT MODAL - SLIDES FROM TOP */}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
 
    </>,
    document.body
  );
};
 
export default AINavbar;