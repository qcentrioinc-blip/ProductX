import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { ChevronDown } from "lucide-react";
import { H3, P } from "../../../styles/Typography";
import ContactDrawer from "./ContactDrawer";

const EHRNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setmegaMenuBuiltFor] = useState(false);
  // const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState<null | "products" | "resources" | "builtfor">(null);
  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setResourcesMenuOpen(false);
    setmegaMenuBuiltFor(false);
    setLogoDropdownOpen(false);
  };


  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);

  const preloadImages = () => {
    megaMenuItems.forEach(item => {
      const img = new Image();
      img.src = item.img;
    });
  };
  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);


  // ---------- EHR-SPECIFIC DATA ----------

  const industry = "ehr-and-pms";
  const currentIndustry = "EHR and PMS";
  const base = `/industries/${industry}`;

  const industries = [
    {
      name: "Banking & Finance",
      path: "/industries/banking-and-finance",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      name: "EHR and PMS", path:
        "/industries/ehr-and-pms",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      name: "HighTech",
      path: "/industries/high-tech",
      img: "/BNFHOME/P1.png"
      ,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      name: "AI Automation",
      path: "/industries/ai-optimization",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ];
  const industryOptions = industries.filter(
    (ind) => ind.name !== currentIndustry
  );

  const navItems = [
    { name: "Products", path: `${base}?scroll=products`, scroll: true },
    { name: "Built for", path: `${base}` },
    { name: "About Us", path: `${base}/about-us` },
    { name: "Resources", path: `${base}` },
  ];

  const megaMenuItems = [
    {
      title: "Clinic App",
      desc: "Intuitive clinic management and scheduling workflows.",
      img: "/EHRandPMS/1.png",
      path: `${base}/clinic-app`,
    },
    // Add more products here when needed
  ];

  const resourceItems = [
    {
      title: "Case Studies",
      desc: "Real implementations and outcomes from our EHR deployments.",
      path: `${base}/case-studies`,
    },
    {
      title: "Blogs",
      desc: "Best practices and updates from our product teams.",
      path: `${base}/blogs`,
    },
    // Add more resources here when needed
  ];

  const BuiltForItems = [
    {
      title: "Hospitals",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/built-for`,
    },
    {
      title: "Clinics",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/built-for`,
    },
    {
      title: "Diagnostic Centers",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/built-for`,
    },
  ];

  // ---------- EFFECTS ----------

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

  return (
    <>
      {/* TOP TRANSPARENT BAR */}
      <div
        className="fixed top-0 z-50 left-0 w-full
        bg-white/10 backdrop-blur-lg font-bricolage
        border-b border-white/20
        px-4 sm:px-6 md:px-8 pt-3 pb-1
        flex justify-between transition-all duration-300"
      >
        <Link to="/" className="flex items-center">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-lg">
            <span className="text-gray-800 font-bricolage text-sm sm:text-base">
              LOGO
            </span>
          </div>
        </Link>

        {/* DESKTOP RIGHT LINKS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/platform" className="text-white font-medium">
            Platform
          </Link>
          <Link to="/marketplace" className="text-white font-medium">
            Marketplace
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}
            `}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
            `}
          ></span>
        </button>
      </div>

      {/* MAIN NAV (DESKTOP ONLY) */}
      <nav
        onMouseLeave={closeAllMenus}
        className={`hidden lg:flex absolute left-1/2 top-16 -translate-x-1/2 w-[90%] max-w-8xl
        z-[60] bg-white backdrop-blur-md rounded-full shadow-lg px-6 py-2
        items-center justify-between transition-all duration-300
        ${isScrolled ? "top-10" : "top-10"}`}
      >
        {/* LEFT: Logo + main nav */}
        <div className="flex items-center gap-10">
          {/* LOGO WITH DROPDOWN */}
          <div
  className="relative flex items-center gap-1 cursor-pointer"
  onMouseEnter={() => setLogoDropdownOpen(true)}
  onMouseLeave={() => setLogoDropdownOpen(true)}
>
  <Link
    to={base}
    className="flex items-center gap-1"
    onClick={() => {
      closeAllMenus();
    }}
  >

            <div className="w-10 h-10 bg-black text-white flex justify-center items-center rounded-full text-[10px] font-semibold transition-all duration-300">
              LOGO
            </div>
            {/* ROTATING DOWN ICON */}
            <div
              className={`transition-transform relative top-[1.5px] duration-300 ${logoDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
            >
              <img src="/down.png" className="w-4 h-4" alt="dropdown" />
            </div>
            </Link>

            {logoDropdownOpen && (
              <div className="absolute top-14 w-80 bg-white shadow-xl rounded-md z-[999] p-3">
                {industryOptions.map((ind, index) => (
                  <Link
                    key={index}
                    to={ind.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 transition-all"
                  >
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="w-16 h-14 object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold font-quicksand text-gray-900">
                        {ind.name}
                      </h3>
                      <p className="text-gray-600 font-quicksand text-sm">
                        {ind.desc || "Click to explore"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ul className="flex items-center gap-8 font-bold font-quicksand">
            {navItems.map((item) => (
              <li key={item.name}>
                {/* PRODUCTS MEGA MENU */}
                {item.name === "Products" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      preloadImages();
                      setMegaMenuOpen(true);
                      setResourcesMenuOpen(false);
                      setmegaMenuBuiltFor(false);
                    }}
                    onMouseLeave={() => {
                      setMegaMenuOpen(false);
                      setResourcesMenuOpen(false);
                      setmegaMenuBuiltFor(false);
                    }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">
                        Products
                      </button>
                      <img
                        src="/down.png"
                        className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300
                          ${megaMenuOpen ? "rotate-180" : "rotate-0"}`}
                        alt="dropdown"
                      />
                    </div>

                    {megaMenuOpen && (
                      <div className="absolute left-0 top-full w-[900px] shadow-xl px-10 py-8 rounded-xl z-[999]">
                        <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
                        <P className="text-gray-700 text-lg mt-2 mb-4">
                          Seamless, scalable, and intelligent platforms…
                        </P>
                        <hr className="border-gray-300 my-6" />
                        <div className="grid grid-cols-2 gap-y-6 gap-x-10">
                          {megaMenuItems.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              className="flex items-start gap-4"
                            >
                              <img
                                src={item.img}
                                className="w-12 h-12 rounded-xl"
                                loading="eager"
                                alt={item.title}
                              />
                              <div>
                                <h3 className="text-lg font-quicksand font-semibold text-gray-900">
                                  {item.title}
                                </h3>
                                <P className="text-gray-600 text-sm">
                                  {item.desc}
                                </P>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* RESOURCES MEGA MENU */}
                {item.name === "Resources" && (
                  <div
                    className="relative"
                    onMouseEnter={() => setResourcesMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">
                        Resources
                      </button>
                      <img
                        src="/down.png"
                        className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300
                          ${resourcesMenuOpen ? "rotate-180" : "rotate-0"}`}
                        alt="dropdown"
                      />
                    </div>
                  </div>
                )}

                {/* BUILT FOR MEGA MENU */}
                {item.name === "Built for" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setmegaMenuBuiltFor(true);
                      setMegaMenuOpen(false);
                      setResourcesMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">
                        Built For
                      </button>
                      <img
                        src="/down.png"
                        className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300
                          ${megaMenuBuiltFor ? "rotate-180" : "rotate-0"}`}
                        alt="dropdown"
                      />
                    </div>
                  </div>
                )}

                {/* NORMAL LINKS */}
                {item.name !== "Products" &&
                  item.name !== "Resources" &&
                  item.name !== "Built for" && (
                    <Link
                      to={item.path}
                      onMouseEnter={() => {
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        setmegaMenuBuiltFor(false);
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

        {/* RIGHT SIDE: Careers + Contact Button */}
        <div className="flex items-center gap-8">
          <Link
            to={`${base}/careers`}
            className="text-gray-800 text-[18px] font-bold font-quicksand"
          >
            Careers
          </Link>

          <button onClick={() => setDrawerOpen(true)}>
            <ContactUsDark>Contact Us</ContactUsDark>
          </button>
        </div>
      </nav>

      {/* FULL-WIDTH PRODUCTS MEGA MENU */}
      {megaMenuOpen && (
        <div
          onMouseEnter={() => {
            setMegaMenuOpen(true);
            setmegaMenuBuiltFor(false);
            setResourcesMenuOpen(false);
          }}
          onMouseLeave={() => {
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
            setmegaMenuBuiltFor(false);
            setLogoDropdownOpen(false);
          }}
          className="absolute left-1/2 top-32 translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl
            bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[200]"
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {megaMenuItems.map((item, index) =>
              item ? (
                <div key={index} className="flex items-start gap-4">
                  <Link to={item.path} className="flex items-start gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-quicksand font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <P className="text-gray-600 text-sm leading-snug">
                        {item.desc}
                      </P>
                    </div>
                  </Link>
                </div>
              ) : (
                <div key={index}></div>
              )
            )}
          </div>
        </div>
      )}

      {/* FULL-WIDTH RESOURCES MEGA MENU */}
      {resourcesMenuOpen && (
        <div
          onMouseEnter={() => {
            setResourcesMenuOpen(true);
            setMegaMenuOpen(false);
            setmegaMenuBuiltFor(false);
          }}
          onMouseLeave={() => {
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
            setmegaMenuBuiltFor(false);
            setLogoDropdownOpen(false);
          }}
          className="absolute left-1/2 top-32 translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl
            bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[200]"
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Comprehensive tools and insights for success.
          </P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {resourceItems.map((res, index) => (
              <Link key={index} to={res.path} className="block">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">
                  {res.title}
                </h3>
                <p className="text-gray-600 text-sm leading-snug">{res.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* FULL-WIDTH BUILT FOR MEGA MENU */}
      {megaMenuBuiltFor && (
        <div
          onMouseEnter={() => {
            setmegaMenuBuiltFor(true);
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
          }}
          onMouseLeave={() => {
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
            setmegaMenuBuiltFor(false);
            setLogoDropdownOpen(false);
          }}
          className="absolute left-1/2 top-32 translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl
            bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[200]"
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-3 gap-y-4 gap-x-1">
            {BuiltForItems.map((item, index) => (
              <Link key={index} to={item.path} className="block">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px]
          bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20
          transition-all duration-500 ease-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Link
              to={base}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 flex-1"
            >
              <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">
                LOGO
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {currentIndustry}
              </span>
            </Link>
          </div>
        </div>

        <div className="flex scrollbar-hide flex-col gap-6 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          {/* PRODUCTS */}
          <div className="border-b border-gray-200 pb-3">
            <button
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === "products" ? null : "products"
                )
              }
              className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold"
            >
              Products
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {mobileDropdown === "products" && (
              <div className="mt-3 pl-3 space-y-4">
                {megaMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="flex gap-3 items-start py-2"
                  >
                    <img
                      src={item.img}
                      className="w-12 h-12 rounded-lg object-cover"
                      loading="eager"
                      alt={item.title}
                    />
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RESOURCES */}
          <div className="border-b border-gray-200 pb-3">
            <button
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === "resources" ? null : "resources"
                )
              }
              className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold"
            >
              Resources
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "resources" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {mobileDropdown === "resources" && (
              <div className="mt-3 pl-3 space-y-4">
                {resourceItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1"
                  >
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* BUILT FOR */}
          <div className="border-b border-gray-200 pb-3">
            <button
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === "builtfor" ? null : "builtfor"
                )
              }
              className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold"
            >
              Built For
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "builtfor" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {mobileDropdown === "builtfor" && (
              <div className="mt-3 pl-3 space-y-4">
                {BuiltForItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1"
                  >
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other navItems */}
          {navItems.map((item) =>
            item.name !== "Products" &&
              item.name !== "Resources" &&
              item.name !== "Built for" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 text-lg font-semibold block"
                >
                  {item.name}
                </Link>
              </div>
            ) : null
          )}
        </div>

        <div className="flex justify-between mt-10 gap-6 pt-4">
          <Link to="/platform" className="text-blue-500 text-lg font-semibold">
            Platform
          </Link>
          <Link
            to="/marketplace"
            className="text-blue-500 text-lg font-semibold"
          >
            Marketplace
          </Link>
        </div>

        <div className="mt-6 flex justify-start items-center">
          <button
            onClick={() => {
              setMenuOpen(false);
              setDrawerOpen(true);
            }}
          >
            <ContactUsDark>Contact Us</ContactUsDark>
          </button>
        </div>
      </div>

      {/* MATERIAL UI DRAWER - CONTACT FORM */}
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default EHRNavbar;
