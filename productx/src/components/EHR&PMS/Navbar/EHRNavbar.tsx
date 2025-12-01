// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight, ChevronDown } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const EHRNavbar = () => {
//     const [isScrolled, setIsScrolled] = useState(true);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
//     const menuRef = useRef<HTMLDivElement | null>(null);

//     const navigate = useNavigate();
//     const location = useLocation();

//     const industry = "ehr-and-pms";
//     const currentIndustry = "EHR and PMS";
//     const industries = [
//         { name: "Banking & Finance", path: "/industries/banking-and-finance" },
//         { name: "EHR and PMS", path: "/industries/ehr-and-pms" },
//         { name: "HighTech", path: "/industries/high-tech" },
//         { name: "AI Automation", path: "/industries/ai-automation" },
//     ];
//     const industryOptions = industries.filter((ind) => ind.name !== currentIndustry);
//     const base = `/industries/${industry}`;

//     const navItems = [
//         { name: "Products", path: `${base}/clinic-app`, scroll: false },
//         { name: "About Us", path: `${base}/about-us` },
//         { name: "Resources", path: `${base}/case-studies`, scroll: false },
//         { name: "Careers", path: `${base}/careers` },
//     ];

//     const handleScrollClick = (e: React.MouseEvent, targetId: string) => {
//         e.preventDefault();

//         // Check if we're already on the homepage
//         if (location.pathname === base) {
//             // Already on homepage, just scroll
//             document.getElementById(targetId)?.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//             });
//         } else {
//             // Navigate to homepage first, then scroll
//             navigate(base);
//             setTimeout(() => {
//                 document.getElementById(targetId)?.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });
//             }, 100);
//         }
//     };

//     // Scroll effect for desktop main nav
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 30);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Close menu when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (e: MouseEvent) => {
//             if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//                 setMenuOpen(false);
//             }
//         };

//         if (menuOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//         }

//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [menuOpen]);

//     return (
//         <>
//             {/* TOP TRANSPARENT BAR */}
//             <div
//                 className="absolute top-0 z-50 left-0 w-full 
//         bg-gradient-to-r from-green-100/80 to-yellow-100/80 backdrop-blur-lg 
//         border-b border-white/20
//         px-4 sm:px-6 md:px-8 pt-3 pb-1 
//         flex justify-between transition-all duration-300"
//             >
//                 <Link to={base} className="flex items-center">
//                     <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-lg">
//                         <span className="text-gray-800 font-bold text-sm sm:text-base">
//                             LOGO
//                         </span>
//                     </div>
//                 </Link>

//                 {/* DESKTOP RIGHT LINKS */}
//                 <div className="hidden lg:flex items-center gap-6">
//                     <Link to="/platform" className="text-gray-800 font-medium text-sm hover:text-black transition-colors">
//                         Platform
//                     </Link>
//                     <Link to="/marketplace" className="text-gray-800 font-medium text-sm hover:text-black transition-colors">
//                         Marketplace
//                     </Link>
//                 </div>

//                 {/* MOBILE HAMBURGER */}
//                 <button
//                     className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     <span
//                         className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
//               ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}
//             `}
//                     ></span>
//                     <span
//                         className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
//               ${menuOpen ? "opacity-0" : ""}
//             `}
//                     ></span>
//                     <span
//                         className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
//               ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
//             `}
//                     ></span>
//                 </button>
//             </div>

//             {/* MAIN NAV (DESKTOP ONLY) */}
//             <nav
//                 className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-8xl 
//         z-[60] bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 
//         items-center justify-between transition-all duration-300
//         ${isScrolled ? "top-16" : "top-16"}
//       `}
//             >
//                 <Link to={base} className="flex items-center gap-2">
//                     <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-bold">
//                         LOGO
//                     </div>
//                 </Link>

//                 <ul className="flex items-center font-medium gap-10">
//                     {navItems.map((item) => (
//                         <li key={item.name}>
//                             {item.scroll ? (
//                                 <a
//                                     href={item.path}
//                                     onClick={(e) => {
//                                         const targetId = item.path.replace('#', '');
//                                         handleScrollClick(e, targetId);
//                                     }}
//                                     className="text-gray-800 text-[20px] hover:text-black transition-colors"
//                                 >
//                                     {item.name}
//                                 </a>
//                             ) : (
//                                 <Link
//                                     to={item.path}
//                                     className="text-gray-800 text-[20px] hover:text-black transition-colors"
//                                 >
//                                     {item.name}
//                                 </Link>
//                             )}
//                         </li>
//                     ))}
//                 </ul>

//                 <Link to={`${base}/contactus`}>
//                     <button className="bg-black text-white px-7 py-3 rounded-lg text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
//                         CONTACT US
//                         <ArrowUpRight size={16} />
//                     </button>
//                 </Link>
//             </nav>

//             {/* MOBILE MENU (RIGHT SLIDE-IN) */}
//             <div
//                 ref={menuRef}
//                 className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] 
//           bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 
//           transition-all duration-500 ease-out
//           ${menuOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//             >
//                 {/* LOGO with Dropdown (Top) */}
//                 <div className="mb-6">
//                     <div className="flex items-center gap-3">
//                         <Link
//                             to={base}
//                             onClick={() => setMenuOpen(false)}
//                             className="flex items-center gap-3 flex-1"
//                         >
//                             <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-bold">
//                                 LOGO
//                             </div>
//                             <span className="text-xl font-semibold text-gray-900">
//                                 {currentIndustry}
//                             </span>
//                         </Link>

//                         {/* Dropdown Button */}
//                         <button
//                             onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
//                             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                         >
//                             <ChevronDown
//                                 className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${industryDropdownOpen ? "rotate-180" : ""
//                                     }`}
//                             />
//                         </button>
//                     </div>

//                     {/* Dropdown Menu */}
//                     <div
//                         className={`overflow-hidden transition-all duration-300 ease-in-out ${industryDropdownOpen ? "max-h-60 mt-3" : "max-h-0"
//                             }`}
//                     >
//                         <div className="bg-gray-50 rounded-lg p-2 space-y-1">
//                             {industryOptions.map((ind) => (
//                                 <Link
//                                     key={ind.name}
//                                     to={ind.path}
//                                     onClick={() => {
//                                         setMenuOpen(false);
//                                         setIndustryDropdownOpen(false);
//                                     }}
//                                     className="block px-4 py-3 rounded-md text-gray-800 font-medium
//                     hover:bg-green-200 hover:text-gray-900 transition-all duration-200"
//                                 >
//                                     {ind.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* NAV ITEMS (Middle) */}
//                 <div className="flex flex-col gap-10 mt-4">
//                     {navItems.map((item) => (
//                         <div key={item.name} className="border-b border-gray-200 pb-3">
//                             {item.scroll ? (
//                                 <button
//                                     onClick={(e) => {
//                                         const targetId = item.path.replace('#', '');
//                                         setMenuOpen(false);
//                                         handleScrollClick(e, targetId);
//                                     }}
//                                     className="text-gray-800 text-lg font-semibold"
//                                 >
//                                     {item.name}
//                                 </button>
//                             ) : (
//                                 <Link
//                                     to={item.path}
//                                     onClick={() => setMenuOpen(false)}
//                                     className="text-gray-800 text-lg font-semibold block"
//                                 >
//                                     {item.name}
//                                 </Link>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Platform & Marketplace Links */}
//                 <div className="flex justify-between mt-10 gap-6 pt-4">
//                     <Link
//                         to="/platform"
//                         onClick={() => setMenuOpen(false)}
//                         className="text-green-600 text-lg font-semibold"
//                     >
//                         Platform
//                     </Link>
//                     <Link
//                         to="/marketplace"
//                         onClick={() => setMenuOpen(false)}
//                         className="text-green-600 text-lg font-semibold"
//                     >
//                         Marketplace
//                     </Link>
//                 </div>

//                 {/* CONTACT BUTTON (BOTTOM) */}
//                 <div className="mt-6 flex justify-center items-center">
//                     <Link to={`${base}/contactus`} onClick={() => setMenuOpen(false)}>
//                         <button className="bg-black text-white px-7 py-3 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
//                             CONTACT US
//                             <ArrowUpRight size={16} />
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default EHRNavbar;


import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { ChevronDown } from "lucide-react";
import { H2, P } from "../../../styles/Typography";

const EHRNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

  // ---------- EHR-SPECIFIC DATA ----------

  const industry = "ehr-and-pms";
  const currentIndustry = "EHR and PMS";
  const base = `/industries/${industry}`;

  const industries = [
    { name: "Banking & Finance", path: "/industries/banking-and-finance" },
    { name: "EHR and PMS", path: "/industries/ehr-and-pms" },
    { name: "HighTech", path: "/industries/high-tech" },
    { name: "AI Automation", path: "/industries/ai-automation" },
  ];
  const industryOptions = industries.filter((ind) => ind.name !== currentIndustry);

  const navItems = [
    // Desktop: "Products" uses mega menu, mobile: this path is used as simple link
    { name: "Products", path: `${base}/clinic-app`, scroll: false },
    { name: "About Us", path: `${base}/about-us` },
    // Desktop: "Resources" uses mega menu, mobile: this path is used as simple link
    { name: "Resources", path: `${base}/case-studies` },
    { name: "Careers", path: `${base}/careers` },
  ];

  const megaMenuItemsEHR = [
    {
      title: "Clinic App",
      desc: "Intuitive clinic management and scheduling workflows.",
      img: "/EHRandPMS/1.png",
      path: `${base}/clinic-app`,
    },
    // {
    //   title: "Patient Portal",
    //   desc: "Engage patients with self‑service access and records.",
    //   img: "/EHRandPMS/PBG2.png",
    //   path: `${base}/patient-portal`,
    // },
    // {
    //   title: "Doctor App",
    //   desc: "Streamlined clinical decision support for providers.",
    //   img: "/EHRandPMS/PBG3.png",
    //   path: `${base}/doctor-app`,
    // },
    // {
    //   title: "Practice Management",
    //   desc: "Billing, claims, and operations in one place.",
    //   img: "/EHRandPMS/PBG4.png",
    //   path: `${base}/practice-management`,
    // },
    // {
    //   title: "Telemedicine",
    //   desc: "Secure virtual consultation and remote care.",
    //   img: "/EHRandPMS/PBG5.png",
    //   path: `${base}/telemedicine`,
    // },
    // {
    //   title: "Analytics Suite",
    //   desc: "Actionable insights from clinical and admin data.",
    //   img: "/EHRandPMS/PBG6.png",
    //   path: `${base}/analytics`,
    // },
  ];

  const resourceItemsEHR = [
    {
      title: "Case Studies",
      desc: "Real implementations and outcomes from our EHR deployments.",
      path: `${base}/case-studies`,
    },
    // {
    //   title: "Newsletters",
    //   desc: "Latest updates and trends in healthcare technology.",
    //   path: `${base}/whitepapers`,
    // },
    {
      title: "Blogs",
      desc: "Best practices and updates from our product teams.",
      path: `${base}/blogs`,
    },
    // {
    //   title: "Events & Webinars",
    //   desc: "Upcoming demos, workshops, and partner sessions.",
    //   path: `${base}/events`,
    // },
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
      {/* TOP TRANSPARENT BAR (same structure as BNFNav, EHR colors kept) */}
      <div
        className="
          absolute top-0 left-0 w-full z-50
          bg-gradient-to-r from-green-100/80 to-yellow-100/80 backdrop-blur-lg
          border-b border-white/20
          px-4 sm:px-6 md:px-8 pt-3 pb-1
          flex justify-between transition-all duration-300
        "
      >
        <Link to={base} className="flex items-center">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-lg">
            <span className="text-gray-800 font-bold text-sm sm:text-base">
              LOGO
            </span>
          </div>
        </Link>

        {/* DESKTOP RIGHT LINKS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/platform"
            className="text-gray-800 font-medium text-sm hover:text-black transition-colors"
          >
            Platform
          </Link>
          <Link
            to="/marketplace"
            className="text-gray-800 font-medium text-sm hover:text-black transition-colors"
          >
            Marketplace
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}
            `}
          />
          <span
            className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
          />
          <span
            className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
            `}
          />
        </button>
      </div>

      {/* MAIN NAV (DESKTOP) */}
      <nav
        className={`
          hidden lg:flex
          absolute left-1/2 -translate-x-1/2
          w-[90%] max-w-8xl
          z-[60] bg-white/90 backdrop-blur-md rounded-full shadow-lg
          px-6 py-3 items-center justify-between
          transition-all duration-300
          ${isScrolled ? "top-16" : "top-16"}
        `}
      >
        {/* Logo in pill */}
        <Link to={base} className="flex items-center">
          <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-bold">
            LOGO
          </div>
        </Link>

        {/* Center nav items with mega menus */}
        <ul className="flex items-center font-medium gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              {/* PRODUCTS MEGA MENU (desktop hover) */}
              {item.name === "Products" && (
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setMegaMenuOpen(true);
                    setResourcesMenuOpen(false);
                  }}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button className="text-gray-800 text-[20px]">
                    Products
                  </button>

                  {megaMenuOpen && (
                    <div className="absolute left-0 top-full w-screen z-[200] px-24 py-10">
                      <H2>OUR PRODUCTS</H2>
                      <P className="text-gray-700 text-lg mt-2 mb-4">
                        Seamless, scalable EHR & PMS solutions for modern care delivery.
                      </P>

                      <hr className="border-gray-300 h-1 mb-10" />

                      <div className="grid grid-cols-2 gap-y-6 gap-x-1">
                        {megaMenuItemsEHR.map((prod, index) => (
                          <Link
                            key={index}
                            to={prod.path}
                            className="flex items-start gap-4"
                          >
                            <img
                              src={prod.img}
                              alt={prod.title}
                              className="w-12 h-12 rounded-xl object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {prod.title}
                              </h3>
                              <P className="text-gray-600 text-sm">
                                {prod.desc}
                              </P>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* RESOURCES MEGA MENU (desktop hover) */}
              {item.name === "Resources" && (
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setResourcesMenuOpen(true);
                    setMegaMenuOpen(false);
                  }}
                  onMouseLeave={() => setResourcesMenuOpen(false)}
                >
                  <button className="text-gray-800 text-[20px]">
                    Resources
                  </button>

                  {resourcesMenuOpen && (
                    <div className="absolute left-0 top-full w-screen z-[200] px-24 py-10">
                      <H2>RESOURCES</H2>
                      <P className="text-gray-700 text-lg mt-2 mb-4">
                        Guides, stories, and tools to get more from your EHR & PMS stack.
                      </P>

                      <hr className="border-gray-300 h-1 mb-10" />

                      <div className="grid grid-cols-2 gap-y-10 gap-x-20">
                        {resourceItemsEHR.map((res, index) => (
                          <Link key={index} to={res.path}>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {res.title}
                            </h3>
                            <p className="text-gray-600">{res.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* NORMAL LINKS (About Us, Careers) */}
              {item.name !== "Products" && item.name !== "Resources" && (
                <Link
                  to={item.path}
                  className="text-gray-800 text-[20px] hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Contact button (EHR route preserved) */}
        <Link to={`${base}/contactus`}>
          <ContactUsDark>Contact Us</ContactUsDark>
        </Link>
      </nav>

      {/* FULL-WIDTH PRODUCTS MEGA MENU (fixed, like in BNFNav) */}
      {megaMenuOpen && (
        <div
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
          className="
            fixed left-0 top-[140px] h-screen w-full
            bg-gray-200 shadow-2xl z-[200]
            px-24 py-10 border-t border-gray-300
          "
        >
          <H2>OUR PRODUCTS</H2>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Seamless, scalable EHR & PMS platforms to power clinical and admin workflows.
          </P>

          <hr className="border-gray-300 h-1 mb-10" />

          <div className="grid grid-cols-2 gap-y-6 gap-x-1">
            {megaMenuItemsEHR.map((prod, index) => (
              <div key={index} className="flex items-start gap-4">
                <Link to={prod.path} className="flex items-start gap-4">
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {prod.title}
                    </h3>
                    <P className="text-gray-600 text-sm leading-snug">
                      {prod.desc}
                    </P>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FULL-WIDTH RESOURCES MEGA MENU (fixed, like in BNFNav) */}
      {resourcesMenuOpen && (
        <div
          onMouseEnter={() => setResourcesMenuOpen(true)}
          onMouseLeave={() => setResourcesMenuOpen(false)}
          className="
            fixed left-0 top-[140px] h-screen w-full
            bg-gray-200 shadow-2xl z-[200]
            px-24 py-10 border-t border-gray-300
          "
        >
          <H2>RESOURCES</H2>
          <P className="text-gray-700 text-lg mt-2 mb-4">
            Comprehensive tools, stories, and learnings from EHR and PMS rollouts.
          </P>

          <hr className="border-gray-300 h-1 mb-10" />

          <div className="grid grid-cols-2 gap-y-10 gap-x-20">
            {resourceItemsEHR.map((res, index) => (
              <Link key={index} to={res.path} className="block">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {res.title}
                </h3>
                <p className="text-gray-600 text-md">{res.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE MENU (RIGHT SLIDE-IN, same structure as BNFNav but with EHR routes) */}
      <div
        ref={menuRef}
        className={`
          lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px]
          bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20
          transition-all duration-500 ease-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Logo + industry dropdown */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Link
              to={base}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 flex-1"
            >
              <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-bold">
                LOGO
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {currentIndustry}
              </span>
            </Link>

            <button
              onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronDown
                className={`
                  w-5 h-5 text-gray-700 transition-transform duration-300
                  ${industryDropdownOpen ? "rotate-180" : ""}
                `}
              />
            </button>
          </div>

          {/* Industry dropdown */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${industryDropdownOpen ? "max-h-60 mt-3" : "max-h-0"}
            `}
          >
            <div className="bg-gray-50 rounded-lg p-2 space-y-1">
              {industryOptions.map((ind) => (
                <Link
                  key={ind.name}
                  to={ind.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setIndustryDropdownOpen(false);
                  }}
                  className="
                    block px-4 py-3 rounded-md text-gray-800 font-medium
                    hover:bg-green-200 hover:text-gray-900
                    transition-all duration-200
                  "
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile nav items (simple links, no scroll special handling) */}
        <div className="flex flex-col gap-10 mt-4">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200 pb-3">
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-semibold block"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Platform & Marketplace */}
        <div className="flex justify-between mt-10 gap-6 pt-4">
          <Link
            to="/platform"
            onClick={() => setMenuOpen(false)}
            className="text-green-600 text-lg font-semibold"
          >
            Platform
          </Link>
          <Link
            to="/marketplace"
            onClick={() => setMenuOpen(false)}
            className="text-green-600 text-lg font-semibold"
          >
            Marketplace
          </Link>
        </div>

        {/* Contact button */}
        <div className="mt-6 flex justify-center items-center">
          <Link to={`${base}/contactus`} onClick={() => setMenuOpen(false)}>
            <ContactUsDark>Contact Us</ContactUsDark>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EHRNavbar;


