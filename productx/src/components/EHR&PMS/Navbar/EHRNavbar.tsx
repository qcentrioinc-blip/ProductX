// import { ArrowUpRight } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EHRNavbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const handleContactClick = () => {
//         navigate('/industries/ehr-and-pms/contactus');
//         // OR navigate('/contact'); // For React Router
//     };

//     return (
//         <>
//             {/* Top Simple Bar - Platform & Marketplace */}
//             <div
//                 className="w-full relative z-20 bg-gradient-to-r from-green-100 to-yellow-100"
//                 style={{
//                     borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
//                 }}
//             >
//                 <div className="max-w-[1600px] mx-auto h-[40px] flex items-center justify-between px-4 sm:px-8">
//                     <div className="flex items-center">
//                         <div className="bg-white px-4 py-1 rounded-md">
//                             <span className="text-black text-[12px] font-bold">LOGO</span>
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-5 sm:gap-10">
//                         <a href="/platform" className="text-black text-xs sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
//                             Platform
//                         </a>
//                         <a href="/marketplace" className="text-black text-xs sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
//                             Marketplace
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Main White Navbar */}
//             <header className="w-full pt-4 pb-4 relative z-50">
//                 <div className="max-w-[1540px] mx-auto px-4 sm:px-8">
//                     <nav className="relative w-full max-w-[1480px] h-[64px] sm:h-[80px] mx-auto bg-white rounded-[32px] sm:rounded-[60px] px-2 sm:px-4 flex items-center justify-between shadow-lg">
//                         <div className="flex items-center">
//                             <div className="bg-[#2A2A2A] w-[44px] sm:w-[60px] h-[44px] sm:h-[60px] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
//                                 <a href="/industries/ehr-and-pms">LOGO</a>
//                             </div>
//                         </div>

//                         <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
//                             <ul className="flex gap-[18px] sm:gap-[36px] list-none items-center">
//                                 <li>
//                                     <a href="#products" className="text-[#2A2A2A] text-[13px] sm:text-[20px] font-semibold hover:text-black transition-colors duration-300">
//                                         Products
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="/industries/ehr-and-pms/about-us" className="text-[#2A2A2A] text-[13px] sm:text-[20px] font-semibold hover:text-black transition-colors duration-300">
//                                         About Us
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#resources" className="text-[#2A2A2A] text-[13px] sm:text-[20px] font-semibold hover:text-black transition-colors duration-300">
//                                         Resources
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="/industries/ehr-and-pms/careers" className="text-[#2A2A2A] text-[13px] sm:text-[20px] font-semibold hover:text-black transition-colors duration-300">
//                                         Careers
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="hidden lg:flex items-center ml-auto">
//                             <button
//                                 onClick={handleContactClick}
//                                 className="bg-black text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-[8px] text-xs sm:text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300"
//                             >
//                                 CONTACT US
//                                 <ArrowUpRight size={16} />
//                             </button>
//                         </div>

//                         <button onClick={toggleMobileMenu} className="lg:hidden flex flex-col gap-1.5 focus:outline-none">
//                             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//                             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//                             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//                         </button>
//                     </nav>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 <div className={`lg:hidden bg-white mx-4 rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
//                     <ul className="flex flex-col px-5 py-4 space-y-4">
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="#products" className="text-gray-800 text-base font-medium hover:text-black">
//                                 Products
//                             </a>
//                         </li>
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="/industries/ehr-and-pms/about-us" className="text-gray-800 text-base font-medium hover:text-black">
//                                 About Us
//                             </a>
//                         </li>
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="#resources" className="text-gray-800 text-base font-medium hover:text-black">
//                                 Resources
//                             </a>
//                         </li>
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="/industries/ehr-and-pms/career" className="text-gray-800 text-base font-medium hover:text-black">
//                                 Careers
//                             </a>
//                         </li>
//                         <li className="pt-2">
//                             <button
//                                 onClick={handleContactClick}
//                                 className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800"
//                             >
//                                 CONTACT US
//                                 <span className="text-lg">↗</span>
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </header>
//         </>
//     );
// };

// export default EHRNavbar;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const EHRNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    const industry = "ehr-and-pms";
    const currentIndustry = "EHR and PMS";
    const industries = [
        { name: "Banking & Finance", path: "/industries/banking-and-finance" },
        { name: "EHR and PMS", path: "/industries/ehr-and-pms" },
        { name: "HighTech", path: "/industries/high-tech" },
        { name: "AI Automation", path: "/industries/ai-automation" },
    ];
    const industryOptions = industries.filter((ind) => ind.name !== currentIndustry);
    const base = `/industries/${industry}`;

    const navItems = [
        { name: "Products", path: `#products`, scroll: true },
        { name: "About Us", path: `${base}/about-us` },
        { name: "Resources", path: `#resources`, scroll: true },
        { name: "Careers", path: `${base}/careers` },
    ];

    const handleScrollClick = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();

        // Check if we're already on the homepage
        if (location.pathname === base) {
            // Already on homepage, just scroll
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            // Navigate to homepage first, then scroll
            navigate(base);
            setTimeout(() => {
                document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        }
    };

    // Scroll effect for desktop main nav
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking outside
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
            {/* TOP TRANSPARENT BAR */}
            <div
                className="absolute top-0 z-50 left-0 w-full 
        bg-gradient-to-r from-green-100/80 to-yellow-100/80 backdrop-blur-lg 
        border-b border-white/20
        px-4 sm:px-6 md:px-8 pt-3 pb-1 
        flex justify-between transition-all duration-300"
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
                    <Link to="/platform" className="text-gray-800 font-medium text-sm hover:text-black transition-colors">
                        Platform
                    </Link>
                    <Link to="/marketplace" className="text-gray-800 font-medium text-sm hover:text-black transition-colors">
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
                    ></span>
                    <span
                        className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
                    ></span>
                    <span
                        className={`block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
            `}
                    ></span>
                </button>
            </div>

            {/* MAIN NAV (DESKTOP ONLY) */}
            <nav
                className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-8xl 
        z-[60] bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 
        items-center justify-between transition-all duration-300
        ${isScrolled ? "top-16" : "top-16"}
      `}
            >
                <Link to={base} className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-bold">
                        LOGO
                    </div>
                </Link>

                <ul className="flex items-center font-medium gap-10">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            {item.scroll ? (
                                <a
                                    href={item.path}
                                    onClick={(e) => {
                                        const targetId = item.path.replace('#', '');
                                        handleScrollClick(e, targetId);
                                    }}
                                    className="text-gray-800 text-[20px] hover:text-black transition-colors"
                                >
                                    {item.name}
                                </a>
                            ) : (
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

                <Link to={`${base}/contactus`}>
                    <button className="bg-black text-white px-7 py-3 rounded-lg text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
                        CONTACT US
                        <ArrowUpRight size={16} />
                    </button>
                </Link>
            </nav>

            {/* MOBILE MENU (RIGHT SLIDE-IN) */}
            <div
                ref={menuRef}
                className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] 
          bg-white shadow-2xl z-[200] p-6 flex flex-col pb-20 
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
                            <div className="w-12 h-12 bg-[#2A2A2A] text-white flex justify-center items-center rounded-full text-xs font-bold">
                                LOGO
                            </div>
                            <span className="text-xl font-semibold text-gray-900">
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
                    hover:bg-green-200 hover:text-gray-900 transition-all duration-200"
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
                        <div key={item.name} className="border-b border-gray-200 pb-3">
                            {item.scroll ? (
                                <button
                                    onClick={(e) => {
                                        const targetId = item.path.replace('#', '');
                                        setMenuOpen(false);
                                        handleScrollClick(e, targetId);
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

                {/* Platform & Marketplace Links */}
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

                {/* CONTACT BUTTON (BOTTOM) */}
                <div className="mt-6 flex justify-center items-center">
                    <Link to={`${base}/contactus`} onClick={() => setMenuOpen(false)}>
                        <button className="bg-black text-white px-7 py-3 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            CONTACT US
                            <ArrowUpRight size={16} />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default EHRNavbar;

