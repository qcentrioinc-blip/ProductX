import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";

import { createPortal } from "react-dom";
const ContactModal = lazy(() => import("./ContactModal"));
const MegaMenu = lazy(() => import("./MegaMenu"));
const ResourcesMenu = lazy(() => import("./ResourcesMenu"));
const BuiltForMenu = lazy(() => import("./BuiltForMenu"));
const MobileFeaturesDropdown = lazy(() => import("./MobileFeaturesDropdown"));
const MobileResourcesDropdown = lazy(() => import("./MobileResourcesDropdown"));
const MobileBuiltForDropdown = lazy(() => import("./MobileBuiltForDropdown"));

const AINavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setMegaMenuBuiltFor] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<null | "features" | "resources" | "builtfor">(null);
  // const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // ---------- PREFETCH LOGIC ----------
  const prefetched = useRef<Set<string>>(new Set());
  const handlePrefetch = (key: string, fn: () => void) => {
    if (!prefetched.current.has(key)) {
      fn();
      prefetched.current.add(key);
    }
  };

  const prefetch = {
    features: () => {
      import("../../HomePage/AIOptimization/HeroAIOptimization");
      import("./MegaMenu");
      // Preload critical sub-components of the Features page
      import("../../HomePage/AIOptimization/Statistics");
      import("../../HomePage/AIOptimization/CloudDiet");
      import("../../HomePage/AIOptimization/AIBlogs");
      import("../../HomePage/AIOptimization/AIFooter");
      // Preload hero background image
      const img = new Image();
      img.src = "/AIOptimization/LandingBackground.png";
    },
    builtfor: () => {
      import("../../Global/BuiltFor/BuiltFor");
      import("./BuiltForMenu");
    },
    pricing: () => import("../Pricing/Pricing"),
    resources: () => {
      import("../Resources/Resource");
      import("../ResourceDoc/ResourceDoc");
      import("./ResourcesMenu");
    },
    support: () => import("./ContactModal"),
  };

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
        <Link to="/" className="flex items-center cursor-pointer" aria-label="Go to Homepage">
          <div className="text-[#010101] font-bricolage font-light text-xl  px-2  pn rounded cursor-pointer">
            <img className="h-10 w-full" src="/logo.svg" alt="Company Logo" />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link to={`${base}/platform`} className="text-white font-medium">Platform</Link>
          <Link to={`${base}/marketplace`} className="text-white font-medium">Marketplace</Link>
        </div>

        <button className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
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
            <div className="relative flex items-center gap-1 cursor-pointer" onMouseEnter={() => { setMegaMenuOpen(false); setResourcesMenuOpen(false); setMegaMenuBuiltFor(false); }}>
              <Link to="/industries/cloud-finops-ai">
                <div className="w-full h-12 flex justify-center items-center rounded-md   transition-all duration-300">
                  <img src="/AILogoo.png" className="w-auto h-10" alt="" /></div></Link>
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
                    <Link
                      to={item.path}
                      onMouseEnter={() => {
                        closeAllMenus();
                        handlePrefetch("features", prefetch.features);
                      }}
                      className="text-gray-800 text-[18px]"
                    >
                      Features
                    </Link>
                  )}

                  {item.name === "Resources" && (
                    <Link
                      target="_blank"
                      to="/industries/cloud-finops-ai/resources/whyclouddiet/clouddiet"
                      onMouseEnter={() => handlePrefetch("resources", prefetch.resources)}
                      className="text-gray-800 text-[18px]"
                      onClick={closeAllMenus}
                    >
                      Resources
                    </Link>
                  )}

                  {item.name === "Built for" && (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        handleKeepOpen();
                        setMegaMenuBuiltFor(true);
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        handlePrefetch("builtfor", prefetch.builtfor);
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer">
                        <button className="text-gray-800 text-[18px] cursor-pointer">Built For</button>
                        <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuBuiltFor ? "rotate-180" : "rotate-0"}`} />
                      </div>
                    </div>
                  )}

                  {item.name !== "Features" && item.name !== "Resources" && item.name !== "Built for" && (
                    <Link
                      to={item.path}
                      onMouseEnter={() => {
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        setMegaMenuBuiltFor(false);
                        if (item.name === "Pricing") handlePrefetch("pricing", prefetch.pricing);
                      }}
                      className="text-gray-800 text-[18px]"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {/* <Link to={`${base}/careers`} onMouseEnter={closeAllMenus} className="text-gray-800 text-[18px] font-bold font-quicksand">Careers</Link> */}
            <button
              className="text-gray-800 text-[18px] font-bold font-quicksand cursor-pointer"
              onClick={() => setModalOpen(true)}
              onMouseEnter={() => handlePrefetch("support", prefetch.support)}
            >
              Support
            </button>
            <button
              onClick={() => window.open("https://clouddiet.ai/signup", "_blank")}
              onMouseEnter={() => handlePrefetch("support", prefetch.support)}
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger (Dark Mode for White Nav) */}
          <button className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-[2px] bg-black rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* MEGA MENUS - keeping your existing code */}
      <Suspense fallback={<div>Loading Mega Menu...</div>}>
        {megaMenuOpen && (
          <MegaMenu
            isScrolled={isScrolled}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
          />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading Resources Menu...</div>}>
        {resourcesMenuOpen && (
          <ResourcesMenu
            isScrolled={isScrolled}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
          />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading Built For Menu...</div>}>
        {megaMenuBuiltFor && (
          <BuiltForMenu
            isScrolled={isScrolled}
            handleKeepOpen={handleKeepOpen}
            handleCloseMenus={handleCloseMenus}
          />
        )}
      </Suspense>
      {/* MOBILE MENU - keeping your existing mobile menu code */}
      <div ref={menuRef} className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 transition-all duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Link to={base} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-semibold">LOGO</div>
              <span className="text-xl font-semibold text-gray-900">{currentIndustry}</span>
            </Link>
          </div>
        </div>

        <div className="flex scrollbar-hide flex-col gap-6 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          <Suspense fallback={<div>Loading Mobile Features...</div>}>
            <MobileFeaturesDropdown
              mobileDropdown={mobileDropdown}
              setMobileDropdown={setMobileDropdown}
              setMenuOpen={setMenuOpen}
            />
          </Suspense>

          <Suspense fallback={<div>Loading Mobile Resources...</div>}>
            <MobileResourcesDropdown
              mobileDropdown={mobileDropdown}
              setMobileDropdown={setMobileDropdown}
              setMenuOpen={setMenuOpen}
            />
          </Suspense>

          <Suspense fallback={<div>Loading Mobile Built For...</div>}>
            <MobileBuiltForDropdown
              mobileDropdown={mobileDropdown}
              setMobileDropdown={setMobileDropdown}
              setMenuOpen={setMenuOpen}
            />
          </Suspense>

          {navItems.map((item) =>
            item.name !== "Features" && item.name !== "Resources" && item.name !== "Built for" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <Link to={item.path} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
                  {item.name}
                </Link>
              </div>
            ) : null
          )}

          <div className="border-b border-gray-200 pb-3">
            <Link to={`${base}/careers`} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
              Careers
            </Link>
          </div>
        </div>

        <div className="flex justify-between mt-10 gap-6 pt-4">
          <Link to={`${base}/platform`} onClick={() => setMenuOpen(false)} className="text-purple-600 text-lg font-semibold">Platform</Link>
          <Link to={`${base}/marketplace`} onClick={() => setMenuOpen(false)} className="text-purple-600 text-lg font-semibold">Marketplace</Link>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </span>

          </a>
        </div>
      </div>

      {/* CONTACT MODAL - SLIDES FROM TOP */}
      <Suspense fallback={<div>Loading Contact Form...</div>}>
        {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
      </Suspense>

    </>,
    document.body
  );
};

export default AINavbar;