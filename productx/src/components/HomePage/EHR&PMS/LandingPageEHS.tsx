
import { useState } from "react";
import { H1, H2, P } from "../../../styles/Typography";
 import { Link } from "react-router-dom";

const LandingPageEHS = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Top Bar - Full Width */}
            <div className="bg-gradient-to-r from-green-100 to-yellow-100     py-2 px-4 sm:px-8 md:px-16 flex justify-between items-center w-full">
               <Link to="/"> <span className="text-gray-700 font-medium text-sm sm:text-base">LOGO</span></Link>
                <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm md:text-base">
                    <Link to="/platform" className="text-gray-700 hover:text-gray-900">Platform</Link>
                    <Link  to="/marketplace" className="text-gray-700 hover:text-gray-900">Marketplace</Link>
                </div>
            </div>

            {/* Wrapper for entire section with single circles image */}
            <div className="relative">
                {/* Single Circles Image - Spans from Navbar to Bottom Cards - Hidden on mobile */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[55%] z-50 pointer-events-none hidden md:block">
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

                {/* Main Navigation Bar */}
                <div className="w-full bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 px-4 sm:px-6 md:px-16 pt-4 sm:pt-6 md:pt-8 relative">
                    {/* Navbar Container */}
                    <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 md:px-8 rounded-full flex justify-between items-center shadow-lg relative z-20">
                        {/* Logo - Left Side */}
                        <div className="flex items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center">
                               <Link to="/industries/ehr-and-pms" ><span className="text-white text-[10px] sm:text-xs font-semibold">LOGO</span></Link>
                            </div>
                        </div>

                        {/* Hamburger Menu - Mobile Only */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden flex flex-col gap-1.5 z-30"
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>

                        {/* Navigation Links - Desktop (Center) */}
                     
<nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10 absolute left-1/2 transform -translate-x-1/2">
    <Link to="/products" className="text-gray-900 font-bold hover:text-gray-600 text-sm lg:text-base">Products</Link>
    <Link to="/industries/ehr/aboutus" className="text-gray-900 font-bold hover:text-gray-600 text-sm lg:text-base">About Us</Link>
    <Link to="/resources" className="text-gray-900 font-bold hover:text-gray-600 text-sm lg:text-base">Resources</Link>
    <Link to="/industries/ehr-and-pms/job-description" className="text-gray-900 font-bold hover:text-gray-600 text-sm lg:text-base">Careers</Link>
</nav>

                        {/* Contact Button - Desktop Only */}
                        <button className="hidden md:flex bg-black text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full font-bold items-center gap-2 hover:bg-gray-800 transition-all text-xs lg:text-sm">
                            CONTACT US
                            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-gray-600">Products</a>
                            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-gray-600">About Us</a>
                            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-gray-600">Resources</a>
                            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-gray-600">Careers</a>
                            <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-all mt-4">
                                CONTACT US
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Section with Gradient Background */}
                <div className="relative bg-gradient-to-b from-yellow-100 to-green-100">
                    {/* Left Content */}
                    <div className="relative z-20 px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 max-w-3xl">
                        {/* Main Heading */}
                        <H1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2D7A5C] leading-tight mb-4 sm:mb-6 break-words">
                            Shaping the Future<br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>Across Every Sector.
                        </H1>

                        {/* Description */}
                        <P className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                        </P>

                        {/* Contact Button */}
                        <button className="bg-[#F4A261] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center gap-2 sm:gap-3 hover:bg-[#E89551] transition-all text-sm sm:text-base">
                            CONTACT US
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Bottom Section - Logo Cards */}
                <div className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-16 border-t border-gray-200 relative">
                    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto relative z-20">
                        {/* Left Heading */}
                        <H2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D7A5C] leading-tight text-center md:text-left">
                            Duis<br />aute<br />irure
                        </H2>

                        {/* Logo Cards - Responsive Grid */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 flex-1 justify-center md:justify-start md:ml-12 w-full md:w-auto">
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-40 md:w-52 h-20 sm:h-24 md:h-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-gray-300 font-semibold text-xl sm:text-2xl">Logo</span>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-40 md:w-52 h-20 sm:h-24 md:h-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-gray-300 font-semibold text-xl sm:text-2xl">Logo</span>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-40 md:w-52 h-20 sm:h-24 md:h-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-gray-300 font-semibold text-xl sm:text-2xl">Logo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageEHS;

