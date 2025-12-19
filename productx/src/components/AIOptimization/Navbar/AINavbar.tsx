import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../../styles/Button";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { H3, P } from "../../../styles/Typography";
import { Modal, Slide, Backdrop } from "@mui/material";

const AINavbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [megaMenuBuiltFor, setMegaMenuBuiltFor] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<null | "products" | "resources" | "builtfor">(null);
  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setResourcesMenuOpen(false);
    setMegaMenuBuiltFor(false);
    setLogoDropdownOpen(false);
  };

  const preloadImages = () => {
    megaMenuItems.forEach(item => {
      const img = new Image();
      img.src = item.img;
    });
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // ---------- AI-SPECIFIC DATA ----------

  const industry = "ai-optimization";
  const currentIndustry = "AI Optimization";
  const base = `/industries/${industry}`;

  const navItems = [
    { name: "Products", path: `${base}/clouddiet`, scroll: false },
    { name: "Built for", path: base },
    { name: "About Us", path: `${base}/aboutus` },
    { name: "Resources", path: `${base}/resources` },
  ];

  const megaMenuItems = [
    {
      title: " CloudDiet",
      desc: "Intelligent agents that automate complex workflows.",
      img: "/AIOptimization/Resource1.png",
      path: `${base}/clouddiet`,
    },
    {
      title: "Process Automation",
      desc: "End-to-end automation for repetitive business tasks.",
      img: "/AIOptimization/Resource2.png",
      path: `${base}/process-automation`,
    },
  ];

  const resourceItemsAI = [
    {
      title: "Case Studies",
      desc: "Real-world AI Optimization success stories and ROI metrics.",
      path: `${base}/resources`,
    },
    {
      title: "Newsletters",
      desc: "Latest trends in AI, automation, and machine learning.",
      path: `${base}/resource-detail`,
    },
  ];

  const builtForItemsAI = [
    {
      title: "Enterprises",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/built-for`,
    },
    {
      title: "Digital Natives",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/built-for`,
    },
    {
      title: "SMBs",
      desc: "Praesent eget laoreet arcu, nec iaculis.",
      path: `${base}/built-for`,
    },
  ];

  const industries = [
    {
      name: "Banking & Finance",
      path: "/industries/banking-and-finance",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "EHR and PMS",
      path: "/industries/ehr-and-pms",
      img: "/BNFHOME/P1.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "HighTech",
      path: "/industries/high-tech",
      img: "/BNFHOME/P1.png",
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
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setModalOpen(false);
    // Reset form
    setFormData({ name: "", phone: "", email: "" });
  };

  // ---------- RENDER ----------

  return (
    <>
      {/* TOP TRANSPARENT BAR */}
      <div className="fixed top-0 z-50 left-0 w-full bg-bg-white/80     bg-white/10 backdrop-blur-lg font-bricolage px-4 sm:px-6 md:px-8 pt-3 pb-1 flex justify-between transition-all duration-300">
        <Link to="/" className="flex items-center">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-lg">
            <span className="text-black font-bricolage text-sm sm:text-base">LOGO</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/platform" className="text-white font-medium">Platform</Link>
          <Link to="/marketplace" className="text-white font-medium">Marketplace</Link>
        </div>

        <button className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
        </button>
      </div>

      {/* MAIN NAV (DESKTOP ONLY) */}
      <nav onMouseLeave={closeAllMenus} className={`hidden lg:flex absolute left-1/2 top-16 -translate-x-1/2 w-[90%] max-w-8xl z-[60] bg-white backdrop-blur-md rounded-full shadow-lg px-6 py-2 items-center justify-between transition-all duration-300 ${isScrolled ? "top-10" : "top-10"}`}>
        <div className="flex items-center gap-10">
          <div className="relative flex items-center gap-1 cursor-pointer" onMouseEnter={() => setLogoDropdownOpen(true)}>
            <div className="w-10 h-10 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-[10px] font-semibold transition-all duration-300">LOGO</div>
            <div className={`transition-transform relative top-[1.5px] duration-300 ${logoDropdownOpen ? "rotate-180" : "rotate-0"}`}>
              <img src="/down.png" className="w-4 h-4" />
            </div>

            {logoDropdownOpen && (
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
            )}
          </div>

          <ul className="flex items-center gap-8 font-bold font-quicksand">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.name === "Products" && (
                  <div className="relative" onMouseEnter={() => { preloadImages(); setMegaMenuOpen(true); setResourcesMenuOpen(false); setMegaMenuBuiltFor(false); }}>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">Products</button>
                      <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </div>
                )}

                {item.name === "Resources" && (
                  <div className="relative" onMouseEnter={() => { setResourcesMenuOpen(true); setMegaMenuOpen(false); setMegaMenuBuiltFor(false); }}>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">Resources</button>
                      <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${resourcesMenuOpen ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </div>
                )}

                {item.name === "Built for" && (
                  <div className="relative" onMouseEnter={() => { setMegaMenuBuiltFor(true); setMegaMenuOpen(false); setResourcesMenuOpen(false); }}>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <button className="text-gray-800 text-[18px]">Built For</button>
                      <img src="/down.png" className={`w-4 h-4 relative top-[1.5px] transition-transform duration-300 ${megaMenuBuiltFor ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </div>
                )}

                {item.name !== "Products" && item.name !== "Resources" && item.name !== "Built for" && (
                  <Link to={item.path} onMouseEnter={() => { setMegaMenuOpen(false); setResourcesMenuOpen(false); setMegaMenuBuiltFor(false); }} className="text-gray-800 text-[18px]">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <Link to={`${base}/careers`} className="text-gray-800 text-[18px] font-bold font-quicksand">Careers</Link>
          <button onClick={() => setModalOpen(true)}>
            <ContactUsDark>Contact Us</ContactUsDark>
          </button>
        </div>
      </nav>

      {/* MEGA MENUS - keeping your existing code */}
      {megaMenuOpen && (
        <div onMouseEnter={() => { setMegaMenuOpen(true); setMegaMenuBuiltFor(false); setResourcesMenuOpen(false); }} onMouseLeave={closeAllMenus} className="absolute left-1/2 top-32 translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[200]">
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">Intelligent automation solutions to transform your business operations.</P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {megaMenuItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Link to={item.path} className="flex items-start gap-4">
                  <img src={item.img} alt={item.title} className="w-12 h-12 rounded-xl object-cover" loading="eager" />
                  <div>
                    <h3 className="text-lg font-quicksand font-semibold text-gray-900">{item.title}</h3>
                    <P className="text-gray-600 text-sm leading-snug">{item.desc}</P>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {resourcesMenuOpen && (
        <div onMouseEnter={() => { setResourcesMenuOpen(true); setMegaMenuOpen(false); setMegaMenuBuiltFor(false); }} onMouseLeave={closeAllMenus} className="absolute left-1/2 top-32 translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[200]">
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">Knowledge hub for AI optimization implementation and best practices.</P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            {resourceItemsAI.map((res, index) => (
              <Link key={index} to={res.path} className="block">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{res.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{res.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {megaMenuBuiltFor && (
        <div onMouseEnter={() => { setMegaMenuBuiltFor(true); setMegaMenuOpen(false); setResourcesMenuOpen(false); }} onMouseLeave={closeAllMenus} className="absolute left-1/2 top-32 translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[200]">
          <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
          <P className="text-gray-700 text-lg mt-2 mb-4">Tailored AI optimization solutions for different types of organizations.</P>
          <hr className="border-gray-300 h-1 mb-8" />
          <div className="grid grid-cols-3 gap-y-4 gap-x-1">
            {builtForItemsAI.map((item, index) => (
              <Link key={index} to={item.path} className="block">
                <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

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
          <div className="border-b border-gray-200 pb-3">
            <button onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold">
              Products
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "products" && (
              <div className="mt-3 pl-3 space-y-4">
                {megaMenuItems.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="flex gap-3 items-start py-2">
                    <img src={item.img} className="w-12 h-12 rounded-lg object-cover" loading="eager" />
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-3">
            <button onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold">
              Resources
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "resources" && (
              <div className="mt-3 pl-3 space-y-4">
                {resourceItemsAI.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-3">
            <button onClick={() => setMobileDropdown(mobileDropdown === "builtfor" ? null : "builtfor")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold">
              Built For
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "builtfor" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "builtfor" && (
              <div className="mt-3 pl-3 space-y-4">
                {builtForItemsAI.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) =>
            item.name !== "Products" && item.name !== "Resources" && item.name !== "Built for" ? (
              <div key={item.name} className="border-b border-gray-200 pb-3">
                <Link to={item.path} onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg font-semibold block">
                  {item.name}
                </Link>
              </div>
            ) : null
          )}
        </div>

        <div className="flex justify-between mt-10 gap-6 pt-4">
          <Link to="/platform" className="text-purple-600 text-lg font-semibold">Platform</Link>
          <Link to="/marketplace" className="text-purple-600 text-lg font-semibold">Marketplace</Link>
        </div>

        <div className="mt-6 flex justify-start items-center">
          <button onClick={() => { setMenuOpen(false); setModalOpen(true); }}>
            <ContactUsDark>Contact Us</ContactUsDark>
          </button>
        </div>
      </div>

      {/* CONTACT MODAL - SLIDES FROM TOP */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
          }
        }}
      >
        <Slide direction="down" in={modalOpen} timeout={500}>
          <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[90vh] bg-white outline-none rounded-3xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Form Container with Scroll */}
            <div className="h-full overflow-y-auto px-8 py-12 md:px-16 md:py-16 lg:px-24 lg:py-20">
              {/* Header */}
              <div className="mb-12">
                <p
                  className="font-quicksand text-xl mb-12"
                  style={{ color: '#2ECC71' }}
                >
                  TO: QNEST GLOBAL
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* First Line: HEY QNEST!* MY NAME IS [NAME] * */}
                  <div
                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="whitespace-nowrap">HEY <span>QNEST</span>!*</span>
                    <span className="whitespace-nowrap">MY NAME IS</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="[NAME]"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[180px] flex-1 max-w-[400px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    />
                    <span className="text-[#E74C3C]">*</span>
                  </div>

                  {/* Second Line: MY PHONE NUMBER IS [PHONE] * AND MY */}
                  <div
                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="whitespace-nowrap">MY PHONE NUMBER IS</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="[PHONE]"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[200px] flex-1 max-w-[350px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    />
                    <span className="text-[#E74C3C]">*</span>
                    <span className="whitespace-nowrap">AND MY</span>
                  </div>

                  {/* Third Line: EMAIL IS [EMAIL] * SEE YOU SOON */}
                  <div
                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="whitespace-nowrap">EMAIL IS</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="[EMAIL]"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[250px] flex-1 max-w-[450px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    />
                    <span className="text-[#E74C3C]">*</span>
                    <span className="whitespace-nowrap">SEE YOU SOON</span>
                  </div>

                  {/* Send Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center gap-3 hover:bg-gray-900 transition-all group"
                      style={{ fontFamily: "'Arial', sans-serif", letterSpacing: "1px" }}
                    >
                      SEND
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Slide>
      </Modal>

    </>
  );
};

export default AINavbar;
