import { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../styles/Button";
import { ChevronDown } from "lucide-react";
// import {   useNavigate, useLocation } from "react-router-dom";
import {   H3, P } from "../../styles/Typography";
const BNFNav = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);  
const menuRef = useRef<HTMLDivElement | null>(null);
 const [megaMenuOpen, setMegaMenuOpen] = useState(false);
 const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
 
 
const megaMenuItems = [
  {
    title: "Almanac",
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "/BNFHOME/P1.png",
    path: "/industries/banking-and-finance/products/almanac",
  },
  {
    title: "Bankfair",
    desc: "Lorem ipsum dolor sit amet consectetur",
     img: "/BNFHOME/P2.jpg",
    path: "/industries/banking-and-finance/products/bankfair",
  },
  {
    title: "Customer Onboarding Solutions",
    desc: "Lorem ipsum dolor sit amet consectetur",
     img: "/BNFHOME/P3.jpg",
    path: "/industries/banking-and-finance/products/customer-onboarding-solutions"
  },
  {
    title: "Internet Banking System",
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "/BNFHOME/P4.png",
    path: "/industries/banking-and-finance/products/internet-banking-system",
  },
  {
    title: "Loan Origination Sytem",
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "/BNFHOME/P5.jpg",
    path: "/industries/banking-and-finance/products/loan-origination-system",
  },
  {
    title: "Pago",
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "/BNFHOME/P6.jpg",
    path: "/industries/banking-and-finance/products/pago",
  },
  {
    title: "Remitree",
    desc: "Lorem ipsum dolor sit amet consectetur",
     img: "/BNFHOME/P7.jpg",
    path: "/industries/banking-and-finance/products/remitree",
  },
  {
    title: "Sams",
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "/BNFHOME/P8.jpg",
    path: "/industries/banking-and-finance/products/sams",
  },
  {
    title: "Sherlock",
    desc: "Lorem ipsum dolor sit amet consectetur",
     img: "/BNFHOME/P9.jpg",
    path: "/industries/banking-and-finance/products/sherlock",
  },
];
 
const resourceItems = [
  {
    title: "Newsletter",
    desc: "Stay updated with curated insights and announcements.",
    path: "/industries/banking-and-finance/news"
  },
  {
    title: "Events",
    desc: "Upcoming webinars, conferences, and live sessions.",
    path: "/industries/banking-and-finance/events"
  },
  {
    title: "Whitepapers",
    desc: "Deep technical insights and strategic research.",
    path: "/industries/banking-and-finance/whitepapers"
  },
  {
    title: "Blogs",
    desc: "Expert commentary, tips, and industry knowledge.",
    path: "/industries/banking-and-finance/blogs"
  },
   {
    title: "Glossary",
    desc: "Expert commentary, tips, and industry knowledge.",
    path: "/glossary"
  },
];
 
 
const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);  
 
  const industry = "banking-and-finance";
  const currentIndustry = "Banking & Finance";
const industries = [
  { name: "Banking & Finance", path: "/industries/banking-and-finance" },
  { name: "EHR and PMS", path: "/industries/ehr-and-pms" },
  { name: "HighTech", path: "/industries/high-tech" },
  { name: "AI Automation", path: "/industries/ai-automation" },
];
const industryOptions = industries.filter((ind) => ind.name !== currentIndustry);
  const base = `/industries/${industry}`;
 
  const navItems = [
    { name: "Products", path: `${base}?scroll=products`, scroll: true },
    { name: "About Us", path: `${base}/about-us` },
    { name: "Resources", path: `${base}/resources` },
    { name: "Careers", path: `${base}/careers` },
 
  ];
 
  //  const handleProductsClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
   
  //   // Check if we're already on the homepage
  //   if (location.pathname === base) {
  //     // Already on homepage, just scroll
  //     document.getElementById("productsSection")?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   } else {
  //     // Navigate to homepage first, then scroll
  //     navigate(base);
  //     // Use setTimeout to ensure navigation completes before scrolling
  //     setTimeout(() => {
  //       document.getElementById("productsSection")?.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }, 100);
  //   }
  // };
 
  // Scroll effect for desktop main nav
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
 
 
 
 
 
  return (
    <>
      {/* TOP TRANSPARENT BAR (KEPT SAME) */}
      <div
        className=" fixed top-0 z-50 left-0 w-full
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
 
        {/* MOBILE HAMBURGER (NO LOGO, NO CONTACT BUTTON) */}
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
        z-[60] bg-gray-200 backdrop-blur-md rounded-full shadow-lg px-6 py-3
        items-center justify-between transition-all duration-300
        ${isScrolled ? "top-10" : "top-10"}
      `}
      >
        <Link
          to="/industries/banking-and-finance"
          className="flex items-center gap-2"
        >
          <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">
            LOGO
          </div>
        </Link>
 
       <ul className="flex items-center   gap-10 font-bold font-quicksand">
  {navItems.map((item) => (
    <li key={item.name}>
     
      {/* PRODUCTS MEGA MENU */}
     
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
            <Link key={index} to={item.path} className="flex items-start gap-4">
              <img src={item.img} className="w-12 h-12 rounded-xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
    <button className="text-gray-800 text-[20px]">
      Resources
    </button>
  </div>
)}
 
      {/* NORMAL LINKS */}
     
      {item.name !== "Products" && item.name !== "Resources" && (
       
        <Link to={item.path}  
         onMouseEnter={() => {
      setMegaMenuOpen(false);      
      setResourcesMenuOpen(false);  
    }}
   
    className="text-gray-800 text-[20px]">
          {item.name}
        </Link>
       
      )}
 
    </li>
  ))}
</ul>
 
 
        <Link to={`${base}/contactform`}>
          <ContactUsDark>Contact Us</ContactUsDark>
        </Link>
      </nav>
 
     
      {/* FULL-WIDTH MEGA MENU */}  
 
{megaMenuOpen && (
  <div
    onMouseEnter={() => setMegaMenuOpen(true)}
    onMouseLeave={() => setMegaMenuOpen(false)}
    className="
  absolute
  left-1/2
top-36
  -translate-x-1/2
  w-[90%]  
  max-w-8xl
  bg-gray-200
  px-24
  py-10
  shadow-xl
  rounded-lg
  z-[200]
"
 
  >
    {/* Header */}
    <H3  className=" ">
    Quisque a sagittis ligula. Nulla facilisi
    </H3>
 
    <P className="text-gray-700 text-lg mt-2 mb-4">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </P>
 
    <hr className="border-gray-300 h-1 mb-8" />
 
 
    <div className="grid grid-cols-2 gap-y-4 gap-x-1">
      {megaMenuItems.map((item, index) => (
        item ? (
          <div key={index} className="flex items-start gap-4">
           <Link to={item.path} className="flex items-start gap-4">
  <img src={item.img} alt={item.title} className="w-12 h-12 rounded-xl object-cover" />
  <div>
    <h3 className="text-lg font-quicksand font-semibold text-gray-900">{item.title}</h3>
    <P className="text-gray-600 text-sm leading-snug">{item.desc}</P>
  </div>
</Link>
 
          </div>
        ) : (
          <div key={index}></div>  
        )
      ))}
    </div>
  </div>
)}
 
 
 
{/* Resources */}
{resourcesMenuOpen && (
  <div
     onMouseEnter={() => setResourcesMenuOpen(true)}
    onMouseLeave={() => setResourcesMenuOpen(false)}
    className=" absolute
  left-1/2
top-36
  -translate-x-1/2
  w-[90%]
  max-w-8xl
  bg-gray-200
  px-24
  py-10
  shadow-xl
  rounded-lg
  z-[200]"
  >
    <H3>Quisque a sagittis ligula. Nulla facilisi</H3 >
 
    <P className="text-gray-700 text-lg mt-2 mb-4">
      Comprehensive tools and insights for success.
    </P>
 
    <hr className="border-gray-300 h-1 mb-10" />
 
    <div className="grid grid-cols-2 gap-y-10 gap-x-20">
      {resourceItems.map((res, index) => (
        <Link key={index} to={res.path} className="block">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{res.title}</h3>
          <p className="text-gray-600 text-md">{res.desc}</p>
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
        to="/industries/banking-and-finance"
        onClick={() => setMenuOpen(false)}
        className="flex items-center gap-3 flex-1"
      >
        <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">
          LOGO
        </div>
        <span className="text-xl  font-bricolage font-semibold text-gray-900">{currentIndustry}</span>
      </Link>
 
      {/* Dropdown Button */}
      <button
        onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ChevronDown
          className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
            industryDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
 
    {/* Dropdown Menu */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        industryDropdownOpen ? "max-h-60 mt-3" : "max-h-0"
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
              document.getElementById("productsSection")?.scrollIntoView({
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
  <Link to="/marketplace" className="text-blue-500 text-lg font-semibold">
    Marketplace
  </Link>
</div>
 
 
  {/* CONTACT BUTTON (BOTTOM) */}
  <div className="mt-6 flex justify-center items-center">
    <Link to={`${base}/contactform`} onClick={() => setMenuOpen(false)}>
      <ContactUsDark>Contact Us</ContactUsDark>
    </Link>
  </div>
</div>
 
    </>
  );
};
 
export default BNFNav;