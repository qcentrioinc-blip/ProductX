import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { H3, P } from "../../../styles/Typography";
import { Drawer } from "@mui/material";

const EHRNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setmegaMenuBuiltFor] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
    message: "",
  });

  // ---------- EHR-SPECIFIC DATA ----------

  const industry = "ehr-and-pms";
  const currentIndustry = "EHR and PMS";
  const base = `/industries/${industry}`;

  const industries = [
    { name: "Banking & Finance", path: "/industries/banking-and-finance" },
    { name: "EHR and PMS", path: "/industries/ehr-and-pms" },
    { name: "HighTech", path: "/industries/high-tech" },
    { name: "AI Optimization", path: "/industries/ai-optimization" },
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
      path: `${base}/hospitals`,
    },
    {
      title: "Clinics",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/clinics`,
    },
    {
      title: "Diagnostic Centers",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/diagnostic-centers`,
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


  // ---------- FORM HANDLERS ----------

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setDrawerOpen(false);
  };

  // ---------- RENDER ----------

  return (
    <>
      {/* TOP TRANSPARENT BAR (BNF-style) */}
      <div
        className=" absolute top-0 z-50 left-0 w-full
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

      {/* MAIN NAV (DESKTOP ONLY ) */}
      <nav
        className={`hidden lg:flex  absolute left-1/2 transform  top-16 -translate-x-1/2 w-[90%] max-w-8xl
        z-[60] bg-white backdrop-blur-md rounded-full shadow-lg px-6 py-3
        items-center justify-between transition-all duration-300
        ${isScrolled ? "top-10" : "top-10"}
      `}
      >
        {/* LEFT: Logo + main nav */}
        <div className="flex items-center gap-10">
          <Link
            to={base}
            className="flex items-center gap-2"
          >
            <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">
              LOGO
            </div>
          </Link>

          <ul className="flex items-center   gap-10 font-bold font-quicksand">
            {navItems.map((item) => (
              <li key={item.name}>
                {/* PRODUCTS MEGA MENU (inline trigger + mini panel) */}
                {item.name === "Products" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
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
                    <button className="text-gray-800 text-[20px]">
                      Products
                    </button>

                    {megaMenuOpen && (
                      <div
                        className="absolute left-0 top-full w-[900px]  shadow-xl
                       px-10 py-8 rounded-xl z-[999]"
                      >
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
                              />
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* RESOURCES MEGA MENU (trigger only; full-width panel below) */}
                {item.name === "Resources" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setResourcesMenuOpen(true);
                      setMegaMenuOpen(false);
                      setmegaMenuBuiltFor(false);
                    }}
                  >
                    <button className="text-gray-800 text-[20px]">
                      Resources
                    </button>
                  </div>
                )}

                {/* BUILT FOR MEGA MENU (trigger only; full-width panel below) */}
                {item.name === "Built for" && (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setmegaMenuBuiltFor(true);
                      setMegaMenuOpen(false);
                      setResourcesMenuOpen(false);
                    }}
                  >
                    <button className="text-gray-800 text-[20px]">
                      Built for
                    </button>
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
                        setmegaMenuBuiltFor(false);
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

        {/* RIGHT SIDE: Careers + Contact Button */}
        <div className="flex items-center gap-8">
          <Link
            to={`${base}/careers`}
            className="text-gray-800 text-[20px] font-bold font-quicksand"
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
          onMouseEnter={() => {
            setResourcesMenuOpen(true);
            setMegaMenuOpen(false);
            setmegaMenuBuiltFor(false);
          }}
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
          onMouseEnter={() => {
            setmegaMenuBuiltFor(true);
            setMegaMenuOpen(false);
            setResourcesMenuOpen(false);
          }}
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
            {BuiltForItems.map((item, index) => (
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

      {/* ---------- MOBILE MENU (RIGHT SLIDE-IN) ---------- */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 font-bricolage right-0 h-full w-[80%] max-w-[320px]
      bg-white shadow-2xl z-[200] p-6 flex flex-col  pb-20
      transition-all duration-500 ease-out
      ${menuOpen ? "translate-x-0" : "translate-x-full"}
    `}
      >
        {/* LOGO with Dropdown (Top) */}
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
              <span className="text-xl  font-bricolage font-semibold text-gray-900">
                {currentIndustry}
              </span>
            </Link>

            {/* Dropdown Button */}
            <button
              onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${industryDropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>

          {/* Dropdown Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${industryDropdownOpen ? "max-h-60 mt-3" : "max-h-0"
              }`}
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
                  className="block px-4 py-3 rounded-md text-gray-800 font-medium
              hover:bg-blue-200 hover:text-white transition-all duration-200"
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* NAV ITEMS (Middle) */}
        <div className="flex flex-col gap-10 mt-4">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="border-b border-gray-200 pb-3"
            >
              {item.scroll ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    document
                      .getElementById("productsSection")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="text-gray-800 text-lg font-semibold"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 text-lg font-semibold block"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
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

        {/* CONTACT BUTTON (BOTTOM) */}
        <div className="mt-6 flex justify-center items-center">
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

      {/* ---------- MATERIAL UI DRAWER - CONTACT FORM ---------- */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "90%", sm: "480px", md: "550px" },
            backgroundColor: "#F0F9F4",
            padding: { xs: "24px", sm: "32px", md: "40px" },
          },
        }}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-white/50 rounded-full transition-all"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Form Header */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 mt-4"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              color: "#166D48",
              lineHeight: "1.2",
            }}
          >
            Qertyu oiuyt rfvu poiy bal
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 
                bg-white outline-none focus:border-[#166D48] transition-colors
                text-gray-800 placeholder:text-gray-500"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "16px",
              }}
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 
                bg-white outline-none focus:border-[#166D48] transition-colors
                text-gray-800 placeholder:text-gray-500"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "16px",
              }}
            />

            {/* Resume Upload */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Resume"
                readOnly
                value={formData.resume ? formData.resume.name : ""}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-300 
                  bg-white outline-none text-gray-800 placeholder:text-gray-500"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "16px",
                }}
              />
              <label
                htmlFor="resume-upload"
                className="absolute right-3 top-1/2 -translate-y-1/2 
                  px-6 py-2 bg-[#166D48] text-white rounded-lg cursor-pointer
                  hover:bg-[#145a3a] transition-all font-semibold"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "14px",
                }}
              >
                Upload
              </label>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Tell us about yourself"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              required
              className="w-full px-6 py-4 rounded-3xl border-2 border-gray-300 
                bg-white outline-none focus:border-[#166D48] transition-colors
                text-gray-800 placeholder:text-gray-500 resize-none"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "16px",
              }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit px-8 py-4 bg-black text-white rounded-xl 
                font-bold text-sm flex items-center gap-3 hover:bg-gray-900 
                transition-all group"
              style={{
                fontFamily: "'Arial', sans-serif",
                letterSpacing: "0.5px",
              }}
            >
              CONTACT US
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </Drawer>
    </>
  );
};

export default EHRNavbar;
