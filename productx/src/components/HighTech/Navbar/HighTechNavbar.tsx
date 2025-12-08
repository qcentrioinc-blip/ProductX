import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { H3, P } from "../../../styles/Typography";

const HighTechNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setMegaMenuBuiltFor] = useState(false);

  // ---------- FIXED HIGH-TECH ROUTES ----------
  const navItems = [
    { name: "Products", path: "/industries/high-tech/product-details" },
    { name: "Built for", path: "/industries/high-tech" },
    { name: "About Us", path: "/industries/high-tech/aboutus" },
    { name: "Resources", path: "/industries/high-tech/resources" },
  ];

  const megaMenuItems = [
    {
      title: "Cloud Infrastructure",
      desc: "Scalable and secure cloud solutions for modern enterprises.",
      img: "/HighTech/Careers/bg_img2.png",
      path: "/industries/high-tech/product-details",
    },
  ];

  const resourceItems = [
    {
      title: "Technical Docs",
      desc: "API references, SDKs, and integration guides.",
      path: "/industries/high-tech/resources",
    },
    {
      title: "Developer Blog",
      desc: "Technical insights, tutorials, and best practices.",
      path: "/industries/high-tech/resources-detail",
    },
  ];

  const builtForItems = [
    {
      title: "SaaS Companies",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: "/industries/high-tech/saas-companies",
    },
    {
      title: "Enterprises",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: "/industries/high-tech/enterprises",
    },
    {
      title: "Startups",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: "/industries/high-tech/startups",
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
        className="absolute top-0 z-50 left-0 w-full
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

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/platform" className="text-white font-medium">
            Platform
          </Link>
          <Link to="/marketplace" className="text-white font-medium">
            Marketplace
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white rounded transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
          ></span>
        </button>
      </div>

      {/* MAIN NAV (DESKTOP ONLY) */}
      <nav
        className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-8xl 
        z-[60] bg-white backdrop-blur-md rounded-full shadow-lg px-6 py-3 
        items-center justify-between transition-all duration-300
        ${isScrolled ? "top-16" : "top-16"}`}
      >
        {/* LEFT: Logo + nav items */}
        <div className="flex items-center gap-10">
          <Link to="/industries/high-tech" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">
              LOGO
            </div>
          </Link>

          <ul className="flex items-center gap-10 font-bold font-quicksand">
            {navItems.map((item) => (
              <li key={item.name}>
                {/* PRODUCTS: clickable + controls products mega menu */}
                {item.name === "Products" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setMegaMenuOpen(true);
                      setResourcesMenuOpen(false);
                      setMegaMenuBuiltFor(false);
                    }}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-800 text-[20px]"
                      onClick={() => setMegaMenuOpen(false)}
                    >
                      Products
                    </Link>
                  </div>
                )}

                {/* BUILT FOR: controls Built-for mega menu */}
                {item.name === "Built for" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setMegaMenuBuiltFor(true);
                      setMegaMenuOpen(false);
                      setResourcesMenuOpen(false);
                    }}
                  >
                    <button className="text-gray-800 text-[20px]">
                      Built for
                    </button>
                  </div>
                )}

                {/* RESOURCES: clickable + controls resources mega menu */}
                {item.name === "Resources" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setResourcesMenuOpen(true);
                      setMegaMenuOpen(false);
                      setMegaMenuBuiltFor(false);
                    }}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-800 text-[20px]"
                      onClick={() => setResourcesMenuOpen(false)}
                    >
                      Resources
                    </Link>
                  </div>
                )}

                {/* NORMAL LINKS (About Us) */}
                {item.name !== "Products" &&
                  item.name !== "Resources" &&
                  item.name !== "Built for" && (
                    <Link
                      to={item.path}
                      onMouseEnter={() => {
                        setMegaMenuOpen(false);
                        setResourcesMenuOpen(false);
                        setMegaMenuBuiltFor(false);
                      }}
                      className="text-gray-800 text-[20px]"
                    >
                      {item.name}
                    </Link>
                  )}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Careers + Contact (same pattern as EHRNavbar) */}
        <div className="flex items-center gap-8">
          <Link
            to="/industries/high-tech/careers"
            className="text-gray-800 text-[20px] font-bold font-quicksand"
          >
            Careers
          </Link>

          <Link to="/industries/high-tech/contactform">
            <ContactUsDark>Contact Us</ContactUsDark>
          </Link>
        </div>
      </nav>

      {/* FULL-WIDTH PRODUCTS MEGA MENU */}
      {megaMenuOpen && (
        <div
          onMouseLeave={() => setMegaMenuOpen(false)}
          className="
            absolute 
            left-1/2 
            top-36
            -translate-x-1/2 
            w-[90%]
            max-w-8xl 
            bg-gray-50 
            px-24 
            py-10 
            shadow-xl 
            rounded-lg 
            z-[200]
          "
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
          onMouseLeave={() => setResourcesMenuOpen(false)}
          className="
            absolute 
            left-1/2 
            top-36
            -translate-x-1/2 
            w-[90%] 
            max-w-8xl 
            bg-gray-50
            px-24 
            py-10 
            shadow-xl 
            rounded-lg 
            z-[200]
          "
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>

          <P className="text-gray-700 text-lg mt-2 mb-4">
            Comprehensive tools and insights for success.
          </P>

          <hr className="border-gray-300 h-1 mb-10" />

          <div className="grid grid-cols-2 gap-y-10 gap-x-20">
            {resourceItems.map((res, index) => (
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

      {/* FULL-WIDTH BUILT FOR MEGA MENU */}
      {megaMenuBuiltFor && (
        <div
          onMouseLeave={() => setMegaMenuBuiltFor(false)}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-36
            w-[90%]  
            max-w-8xl
            bg-gray-50
            px-24
            py-10
            shadow-xl
            rounded-lg
            z-[200]
          "
        >
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>

          <P className="text-gray-700 text-lg mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </P>

          <hr className="border-gray-300 h-1 mb-8" />

          <div className="grid grid-cols-3 gap-y-10 gap-x-20">
            {builtForItems.map((item, index) => (
              <Link key={index} to={item.path} className="block">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-md">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ---------- MOBILE MENU ---------- */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] 
        bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20
        transition-all duration-500 ease-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* LOGO */}
        <div className="mb-6">
          <Link
            to="/industries/high-tech"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">
              LOGO
            </div>
            <span className="text-xl font-bricolage font-semibold text-gray-900">
              HighTech
            </span>
          </Link>
        </div>

        {/* NAV ITEMS (mobile) */}
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

        {/* PLATFORM & MARKETPLACE */}
        <div className="flex justify-between mt-10 gap-6 pt-4">
          <Link
            to="/platform"
            onClick={() => setMenuOpen(false)}
            className="text-blue-500 text-lg font-semibold"
          >
            Platform
          </Link>
          <Link
            to="/marketplace"
            onClick={() => setMenuOpen(false)}
            className="text-blue-500 text-lg font-semibold"
          >
            Marketplace
          </Link>
        </div>

        {/* CONTACT BUTTON */}
        <div className="mt-6 flex justify-center items-center">
          <Link
            to="/industries/high-tech/contactform"
            onClick={() => setMenuOpen(false)}
          >
            <ContactUsDark>Contact Us</ContactUsDark>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HighTechNavbar;
