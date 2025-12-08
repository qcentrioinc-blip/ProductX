import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { ChevronDown } from "lucide-react";
import { H2, P } from "../../../styles/Typography";

const AINavbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

  // ---------- AI-SPECIFIC DATA ----------

  const industry = "ai-optimization";
  const currentIndustry = "AI Automation";
  const base = `/industries/${industry}`;

  const industries = [
    { name: "Banking & Finance", path: "/industries/banking-and-finance" },
    { name: "EHR and PMS", path: "/industries/ehr-and-pms" },
    { name: "HighTech", path: "/industries/high-tech" },
    { name: "AI Automation", path: "/industries/ai-optimization" },
  ];
  const industryOptions = industries.filter((ind) => ind.name !== currentIndustry);

  const navItems = [
    // Desktop: "Products" uses mega menu, mobile: this path is used as simple link
    { name: "Products", path: `${base}/ai-agents`, scroll: false },
    { name: "About Us", path: `${base}/about-us` },
    // Desktop: "Resources" uses mega menu, mobile: this path is used as simple link
    { name: "Resources", path: `${base}/case-studies` },
    { name: "Careers", path: `${base}/careers` },
  ];

  const megaMenuItemsAI = [
    {
      title: "AI Agents",
      desc: "Intelligent agents that automate complex workflows.",
      img: "/AIAutomation/1.png",
      path: `${base}/ai-agents`,
    },
    {
      title: "Process Automation",
      desc: "End-to-end automation for repetitive business tasks.",
      img: "/AIAutomation/2.png",
      path: `${base}/process-automation`,
    },
    {
      title: "ML Operations",
      desc: "Deploy, monitor, and scale machine learning models.",
      img: "/AIAutomation/3.png",
      path: `${base}/ml-operations`,
    },
    {
      title: "Data Pipeline",
      desc: "Automated data ingestion, transformation, and analysis.",
      img: "/AIAutomation/4.png",
      path: `${base}/data-pipeline`,
    },
    {
      title: "Chatbot Builder",
      desc: "No-code conversational AI for customer engagement.",
      img: "/AIAutomation/5.png",
      path: `${base}/chatbot-builder`,
    },
    {
      title: "Analytics Suite",
      desc: "Real-time insights and predictive analytics powered by AI.",
      img: "/AIAutomation/6.png",
      path: `${base}/analytics`,
    },
  ];

  const resourceItemsAI = [
    {
      title: "Case Studies",
      desc: "Real-world AI automation success stories and ROI metrics.",
      path: `${base}/case-studies`,
    },
    {
      title: "Newsletters",
      desc: "Latest trends in AI, automation, and machine learning.",
      path: `${base}/newsletters`,
    },
    {
      title: "Blogs",
      desc: "Expert insights and best practices from our AI team.",
      path: `${base}/blogs`,
    },
    {
      title: "Events & Webinars",
      desc: "Live demos, workshops, and AI automation masterclasses.",
      path: `${base}/events`,
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
        className="
          absolute top-0 left-0 w-full z-50
          bg-gradient-to-r from-purple-100/80 to-blue-100/80 backdrop-blur-lg
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
                        Intelligent automation solutions to transform your business operations.
                      </P>

                      <hr className="border-gray-300 h-1 mb-10" />

                      <div className="grid grid-cols-2 gap-y-6 gap-x-1">
                        {megaMenuItemsAI.map((prod, index) => (
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
                        Knowledge hub for AI automation implementation and best practices.
                      </P>

                      <hr className="border-gray-300 h-1 mb-10" />

                      <div className="grid grid-cols-2 gap-y-10 gap-x-20">
                        {resourceItemsAI.map((res, index) => (
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

        {/* Contact button */}
        <Link to={`${base}/contactus`}>
          <ContactUsDark>Contact Us</ContactUsDark>
        </Link>
      </nav>

      {/* FULL-WIDTH PRODUCTS MEGA MENU (fixed) */}
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
            Comprehensive AI automation tools to streamline workflows and boost productivity.
          </P>

          <hr className="border-gray-300 h-1 mb-10" />

          <div className="grid grid-cols-2 gap-y-6 gap-x-1">
            {megaMenuItemsAI.map((prod, index) => (
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

      {/* FULL-WIDTH RESOURCES MEGA MENU (fixed) */}
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
            Expert guides, case studies, and insights on AI automation success.
          </P>

          <hr className="border-gray-300 h-1 mb-10" />

          <div className="grid grid-cols-2 gap-y-10 gap-x-20">
            {resourceItemsAI.map((res, index) => (
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

      {/* MOBILE MENU (RIGHT SLIDE-IN) */}
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
                    hover:bg-purple-200 hover:text-gray-900
                    transition-all duration-200
                  "
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile nav items */}
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
            className="text-purple-600 text-lg font-semibold"
          >
            Platform
          </Link>
          <Link
            to="/marketplace"
            onClick={() => setMenuOpen(false)}
            className="text-purple-600 text-lg font-semibold"
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

export default AINavbar;

