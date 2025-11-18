import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Overview = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="w-full min-h-screen bg-[#FFD700] relative overflow-hidden">
            {/* Top Simple Bar */}
            <div
                className="w-full bg-[#FFD700] px-4"
                style={{
                    borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
                }}
            >
                <div className="max-w-[1600px] mx-auto h-[40px] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-white px-4 py-1 rounded-md">
                            <span className="text-[#FFD700] text-[12px] font-bold">LOGO</span>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 sm:gap-10">
                        <a href="#platform" className="text-white text-[12px] sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
                            Platform
                        </a>
                        <a href="#marketplace" className="text-white text-[12px] sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
                            Marketplace
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="w-full bg-transparent pt-4 pb-4">
                <div className="max-w-[1540px] mx-auto px-4 sm:px-8">
                    <nav className="relative w-full max-w-[1480px] h-[80px] mx-auto bg-white rounded-[60px] px-4 flex items-center justify-between shadow-lg z-50">
                        <div className="flex items-center">
                            <div className="bg-[#2A2A2A] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                                LOGO
                            </div>
                        </div>

                        {/* Desktop Navigation - CENTERED */}
                        <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                            <ul className="flex gap-[36px] list-none items-center">
                                <li>
                                    <a href="#products" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#resources" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#careers" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Button */}
                        <div className="hidden lg:flex items-center ml-auto">
                            <button className="bg-black text-white px-7 py-3 rounded-[8px] text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
                                CONTACT US
                                <span className="text-[16px]"><ArrowUpRight /></span>
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
                        >
                            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                        </button>
                    </nav>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`lg:hidden bg-white mx-4 rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <ul className="flex flex-col px-5 py-4 space-y-4">
                        <li className="border-b border-gray-300 pb-3">
                            <a href="#products" className="text-gray-800 text-base font-medium hover:text-black">
                                Products
                            </a>
                        </li>
                        <li className="border-b border-gray-300 pb-3">
                            <a href="#about" className="text-gray-800 text-base font-medium hover:text-black">
                                About Us
                            </a>
                        </li>
                        <li className="border-b border-gray-300 pb-3">
                            <a href="#resources" className="text-gray-800 text-base font-medium hover:text-black">
                                Resources
                            </a>
                        </li>
                        <li className="border-b border-gray-300 pb-3">
                            <a href="#careers" className="text-gray-800 text-base font-medium hover:text-black">
                                Careers
                            </a>
                        </li>
                        <li className="pt-2">
                            <button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800">
                                CONTACT US
                                <span className="text-lg">↗</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative z-10 text-center lg:text-left">
                        {/* Main Heading */}
                        <h1
                            className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-blue-600 mb-4 sm:mb-6"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                lineHeight: '110%',
                                letterSpacing: '-0.5px',
                                fontWeight: 700,
                                color: '#2B68C3'
                            }}
                        >
                            Smarter Banking, Simplified with AI
                        </h1>

                        {/* Description */}
                        <p
                            className="text-[14px] sm:text-[16px] text-[#2A2A2A] max-w-full lg:max-w-[520px] mb-6 sm:mb-8 lg:mb-10 mx-auto lg:mx-0"
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                lineHeight: '160%',
                                fontWeight: 400
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] justify-center lg:justify-start">
                            {/* Contact Sales Button */}
                            <button className="bg-white text-black h-[48px] px-6 sm:px-8 rounded-[8px] font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto">
                                CONTACT SALES
                                <span>↗</span>
                            </button>

                            {/* Watch Overview Button */}
                            <button className="bg-transparent text-blue-600 h-[48px] px-6 sm:px-8 rounded-[8px] font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto">
                                WATCH OVERVIEW
                                <span className="text-[16px]">▶</span>
                            </button>
                        </div>

                        {/* Decorative Circle - Bottom Left - Desktop Only */}
                        <img
                            src="/Products/Products2/CircleLeft.png"
                            alt="Decorative Circle"
                            className="absolute lg:block hidden pointer-events-none z-0"
                            style={{
                                width: '300px',
                                height: '220px',
                                bottom: '-250px',
                                left: '-140px',
                                opacity: 0.9
                            }}
                        />
                    </div>

                    {/* Right Content - Stats Dashboard */}
                    <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                        {/* Decorative Circle - Top Right - Desktop Only */}
                        <img
                            src="/Products/Products2/CircleRight.png"
                            alt="Decorative Circle"
                            className="absolute lg:block hidden pointer-events-none"
                            style={{
                                width: '180px',
                                height: '250px',
                                top: '-90px',
                                right: '-140px',
                                opacity: 0.9,
                                zIndex: 20
                            }}
                        />

                        {/* Stats Image - Responsive */}
                        <div className="stats-container relative rounded-[16px] overflow-hidden shadow-2xl lg:mt-12"
                            style={{
                                width: '900px',
                                height: '500px',
                                marginRight: '-210px',
                                zIndex: 0
                            }}
                        >
                            <img
                                src="/Products/Products2/Stats.png"
                                alt="Dashboard Stats"
                                className="w-full h-auto block"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsive Styles */}
            <style>{`
                /* Mobile & Tablet - Stats Image */
                @media (max-width: 1023px) {
                    .stats-container {
                        width: 100% !important;
                        max-width: 600px !important;
                        height: auto !important;
                        margin: 0 auto !important;
                        margin-right: 0 !important;
                    }
                }

                /* Tablet - Medium screens */
                @media (min-width: 640px) and (max-width: 1023px) {
                    .stats-container {
                        max-width: 700px !important;
                    }
                }

                /* Mobile - Extra small screens */
                @media (max-width: 639px) {
                    .stats-container {
                        max-width: 100% !important;
                        border-radius: 12px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Overview;
