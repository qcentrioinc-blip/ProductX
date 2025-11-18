


// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";

// const LandingPageEHS = () => {
//     // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <div className="relative w-full overflow-hidden">
//             {/* Top Simple Bar - Platform & Marketplace */}
//             <div
//                 className="w-full relative z-20 bg-gradient-to-r from-green-100 to-yellow-100"
//                 style={{
//                     borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
//                 }}
//             >
//                 <div className="max-w-[1600px] mx-auto h-[40px] flex items-center justify-between px-8">
//                     {/* Logo on Left */}
//                     <div className="flex items-center">
//                         <div className="bg-white px-4 py-1 rounded-md">
//                             <span className="text-black text-[12px] font-bold">LOGO</span>
//                         </div>
//                     </div>

//                     {/* Platform & Marketplace on Right */}
//                     <div className="flex items-center gap-10">
//                         <a href="#platform" className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
//                             Platform
//                         </a>
//                         <a href="#marketplace" className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
//                             Marketplace
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Main White Navbar with Rounded Container */}
//             <header className="w-full bg-gradient-to-r from-green-100 to-yellow-100 pt-4 pb-4 relative z-50">
//                 <div className="max-w-[1540px] mx-auto px-8">
//                     <nav className="relative w-full max-w-[1480px] h-[80px] mx-auto bg-white rounded-[60px] px-4 flex items-center justify-between shadow-lg">
//                         {/* Logo Section */}
//                         <div className="flex items-center">
//                             <div className="bg-[#2A2A2A] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
//                                 LOGO
//                             </div>
//                         </div>

//                         {/* Desktop Navigation Links - CENTERED */}
//                         <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
//                             <ul className="flex gap-[36px] list-none items-center">
//                                 <li>
//                                     <a href="#products" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                                         Products
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#about" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                                         About Us
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#resources" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                                         Resources
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#careers" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                                         Careers
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Right Side - Contact Button */}
//                         <div className="hidden lg:flex items-center ml-auto">
//                             <button className="bg-black text-white px-7 py-3 rounded-[8px] text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
//                                 CONTACT US
//                                 <ArrowUpRight size={16} />
//                             </button>
//                         </div>

//                         {/* Mobile Menu Toggle Button */}
//                         <button
//                             onClick={toggleMobileMenu}
//                             className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
//                         >
//                             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//                             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//                             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//                         </button>
//                     </nav>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 <div
//                     className={`lg:hidden bg-white mx-4 rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//                         }`}
//                 >
//                     <ul className="flex flex-col px-5 py-4 space-y-4">
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="#products" className="text-gray-800 text-base font-medium hover:text-black">
//                                 Products
//                             </a>
//                         </li>
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="#about" className="text-gray-800 text-base font-medium hover:text-black">
//                                 About Us
//                             </a>
//                         </li>
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="#resources" className="text-gray-800 text-base font-medium hover:text-black">
//                                 Resources
//                             </a>
//                         </li>
//                         <li className="border-b border-gray-300 pb-3">
//                             <a href="#careers" className="text-gray-800 text-base font-medium hover:text-black">
//                                 Careers
//                             </a>
//                         </li>
//                         <li className="pt-2">
//                             <button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800">
//                                 CONTACT US
//                                 <span className="text-lg">↗</span>
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </header>

//             {/* Wrapper for entire section with single circles image */}
//             <div className="relative">
//                 {/* Single Circles Image - Positioned Higher Near Navbar - Hidden on mobile */}
//                 <div className="absolute right-0 top-[-150px] bottom-0 w-1/2 lg:w-1/2 z-50 pointer-events-none hidden md:block">
//                     <img
//                         src="/EHRandPMS/circles.png"
//                         alt="Green Spiral"
//                         className="absolute right-0 top-0 h-full w-auto object-cover object-left"
//                     />
//                 </div>

//                 {/* Vertical White Lines Background - Left Side - Hidden on mobile */}
//                 <div className="absolute left-0 top-0 bottom-0 w-full z-20 pointer-events-none overflow-hidden hidden lg:block">
//                     <div className="relative w-full h-full">
//                         {Array.from({ length: 12 }, (_, i) => (
//                             <div
//                                 key={i}
//                                 className="absolute h-full border-l-[0.5px] border-white opacity-100"
//                                 style={{
//                                     left: `${97.27 + (i * 111.98)}px`,
//                                     top: '3.3px'
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Hero Section with Gradient Background */}
//                 <div className="relative bg-gradient-to-b from-yellow-100 to-green-100">
//                     {/* Left Content */}
//                     <div className="relative z-20 px-4 sm:px-16 md:px-28 py-8 sm:py-12 md:py-16 max-w-5xl">
//                         {/* Main Heading */}
//                         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2D7A5C] leading-tight mb-4 sm:mb-6 break-words">
//                             Shaping the Future<br className="hidden sm:block" />
//                             <span className="sm:hidden"> </span>Across Every Sector.
//                         </h1>

//                         {/* Description */}
//                         <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
//                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
//                             fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//                             culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
//                         </p>

//                         {/* Contact Button */}
//                         <button className="bg-[#F4A261] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center gap-2 sm:gap-3 hover:bg-[#E89551] transition-all text-sm sm:text-base">
//                             CONTACT US
//                             <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Bottom Section - Logo Cards */}
//                <div className="bg-white py-8 sm:py-10 md:py-12 mr-48 border-t border-gray-200 relative">
//     <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto relative z-20">
//         {/* Left Heading - Moved to Far Left */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D7A5C] leading-tight text-center md:text-left md:flex-shrink-0">
//             Duis aute
//         </h2>

//         {/* Logo Cards - Responsive Grid */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 flex-1 justify-center md:justify-start w-full md:w-auto">
//             <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-40 md:w-52 h-20 sm:h-24 md:h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
//                 <span className="text-gray-300 font-semibold text-xl sm:text-2xl">Logo</span>
//             </div>
//             <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-40 md:w-52 h-20 sm:h-24 md:h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
//                 <span className="text-gray-300 font-semibold text-xl sm:text-2xl">Logo</span>
//             </div>
//             <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-40 md:w-52 h-20 sm:h-24 md:h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
//                 <span className="text-gray-300 font-semibold text-xl sm:text-2xl">Logo</span>
//             </div>
//         </div>
//     </div>
// </div>

//             </div>
//         </div>
//     );
// };

// export default LandingPageEHS;


import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const LandingPageEHS = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Top Simple Bar - Platform & Marketplace */}
            <div
                className="w-full relative z-20 bg-gradient-to-r from-green-100 to-yellow-100"
                style={{
                    borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
                }}
            >
                <div className="max-w-[1600px] mx-auto h-[40px] flex items-center justify-between px-8">
                    <div className="flex items-center">
                        <div className="bg-white px-4 py-1 rounded-md">
                            <span className="text-black text-[12px] font-bold">LOGO</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-10">
                        <a href="#platform" className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
                            Platform
                        </a>
                        <a href="#marketplace" className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
                            Marketplace
                        </a>
                    </div>
                </div>
            </div>

            {/* MERGED BACKGROUND - Wrapper starts here with gradient */}
            <div className="relative bg-gradient-to-b from-yellow-100 to-green-100">
                {/* Main White Navbar - Inside merged background */}
                <header className="w-full pt-4 pb-4 relative z-50">
                    <div className="max-w-[1540px] mx-auto px-8">
                        <nav className="relative w-full max-w-[1480px] h-[80px] mx-auto bg-white rounded-[60px] px-4 flex items-center justify-between shadow-lg">
                            <div className="flex items-center">
                                <div className="bg-[#2A2A2A] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                                    LOGO
                                </div>
                            </div>

                            <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                                <ul className="flex gap-[36px] list-none items-center">
                                    <li><a href="#products" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">Products</a></li>
                                    <li><a href="#about" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">About Us</a></li>
                                    <li><a href="#resources" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">Resources</a></li>
                                    <li><a href="#careers" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">Careers</a></li>
                                </ul>
                            </div>

                            <div className="hidden lg:flex items-center ml-auto">
                                <button className="bg-black text-white px-7 py-3 rounded-[8px] text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
                                    CONTACT US
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>

                            <button onClick={toggleMobileMenu} className="lg:hidden flex flex-col gap-1.5 focus:outline-none">
                                <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                                <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                                <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                            </button>
                        </nav>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`lg:hidden bg-white mx-4 rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="flex flex-col px-5 py-4 space-y-4">
                            <li className="border-b border-gray-300 pb-3"><a href="#products" className="text-gray-800 text-base font-medium hover:text-black">Products</a></li>
                            <li className="border-b border-gray-300 pb-3"><a href="#about" className="text-gray-800 text-base font-medium hover:text-black">About Us</a></li>
                            <li className="border-b border-gray-300 pb-3"><a href="#resources" className="text-gray-800 text-base font-medium hover:text-black">Resources</a></li>
                            <li className="border-b border-gray-300 pb-3"><a href="#careers" className="text-gray-800 text-base font-medium hover:text-black">Careers</a></li>
                            <li className="pt-2">
                                <button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800">
                                    CONTACT US
                                    <span className="text-lg">↗</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </header>

                {/* Wrapper for hero section - Same gradient background continues */}
                <div className="relative">
                    {/* Circle Image - POSITION UNCHANGED: top-[-150px] */}
                    <div className="absolute right-0 top-[-150px] bottom-0 w-1/2 lg:w-1/2 z-10 pointer-events-none hidden md:block" style={{ height: 'calc(100% + 350px)' }}>
                        <img
                            src="/EHRandPMS/circles.png"
                            alt="Green Spiral"
                            className="absolute right-0 top-0 h-full w-auto object-cover object-left"
                        />
                    </div>

                    {/* Vertical White Lines Background - Left Side - Hidden on mobile */}
                    <div className="absolute left-0 top-0 bottom-0 w-full z-20 pointer-events-none overflow-hidden hidden lg:block">
                        <div className="relative w-full h-full">
                            {Array.from({ length: 12 }, (_, i) => (
                                <div
                                    key={i}
                                    className="absolute h-full border-l-[0.5px] border-white opacity-100"
                                    style={{
                                        left: `${97.27 + (i * 111.98)}px`,
                                        top: '3.3px'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Hero Section - No background needed (inherits from parent) */}
                    <div className="relative">
                        {/* Desktop Content with Exact CSS */}
                        <div className="hidden md:block relative z-20 px-4 sm:px-16 md:px-28 py-8 sm:py-12 md:py-16">
                            {/* Title: Width 649px, Height 154px */}
                            <h1
                                style={{
                                    width: '649px',
                                    height: '134px',
                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '64px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    opacity: 1,
                                    marginBottom: '24px'
                                }}
                                className="text-[#2D7A5C]"
                            >
                                Shaping the Future Across Every Sector.
                            </h1>

                            {/* Description: Width 649px, Height 69px */}
                            <p
                                style={{
                                    width: '649px',
                                    height: '59px',
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    opacity: 1,
                                    marginBottom: '32px'
                                }}
                                className="text-gray-800"
                            >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>

                            {/* Contact Button */}
                            <button className="bg-[#F4A261] text-gray-900 px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-[#E89551] transition-all">
                                CONTACT US
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Responsive Content */}
                        <div className="md:hidden relative z-20 px-4 sm:px-8 py-8 sm:py-12">
                            <h1 className="text-2xl sm:text-3xl font-bold text-[#2D7A5C] leading-tight mb-4 sm:mb-6 break-words">
                                Shaping the Future<br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>Across Every Sector.
                            </h1>

                            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>

                            <button className="bg-[#F4A261] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center gap-2 sm:gap-3 hover:bg-[#E89551] transition-all text-sm sm:text-base">
                                CONTACT US
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Logo Cards with Light Green Background */}
            <div className="bg-gradient-to-b from-green-50 to-white py-12 px-8 sm:px-12 md:px-28 border-t border-gray-200 relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left Heading - "Duis aute" */}
                    <h2
                        className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: '48px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#166D48'
                        }}
                    >
                        Duis aute
                    </h2>

                    {/* Logo Cards - Horizontal Row */}
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 flex-1 justify-center md:justify-start w-full md:w-auto">
                        <div
                            className="bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                            style={{
                                padding: '32px 82px',
                                borderRadius: '8px'
                            }}
                        >
                            <span className="text-gray-300 font-semibold text-xl">Logo</span>
                        </div>
                        <div
                            className="bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                            style={{
                                padding: '32px 82px',
                                borderRadius: '8px'
                            }}
                        >
                            <span className="text-gray-300 font-semibold text-xl">Logo</span>
                        </div>
                        <div
                            className="bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                            style={{
                                padding: '32px 82px',
                                borderRadius: '8px'
                            }}
                        >
                            <span className="text-gray-300 font-semibold text-xl">Logo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageEHS;



