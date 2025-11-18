import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HighTechNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate(); // For Next.js
    // OR const navigate = useNavigate(); // For React Router
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleContactClick = () => {
        navigate('/industries/high-tech/contactform');
        // OR navigate('/industries/high-tech/contactform'); // For React Router
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Top Simple Bar - Platform & Marketplace */}
            <div
                className="w-full py-2 px-4"
                style={{
                    borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
                }}
            >
                <div className="max-w-[1600px] mx-auto h-[40px] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-white px-4 py-1 rounded-md">
                            <a href="/industries/high-tech"><span className="text-black text-[12px] font-bold">LOGO</span></a>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 sm:gap-10">
                        <a href="/platform" className="text-white text-xs sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
                            Platform
                        </a>
                        <a href="/marketplace" className="text-white text-xs sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
                            Marketplace
                        </a>
                    </div>
                </div>
            </div>

            {/* Main White Navbar */}
            <header className="w-full bg-transparent pt-4 pb-4">
                <div className="max-w-[1540px] mx-auto px-4 sm:px-8">
                    <nav className="relative w-full max-w-[1480px] h-[64px] sm:h-[80px] mx-auto bg-white rounded-[32px] sm:rounded-[60px] px-2 sm:px-4 flex items-center justify-between shadow-lg z-50">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="bg-[#2A2A2A] w-[44px] sm:w-[60px] h-[44px] sm:h-[60px] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                                <a href="/industries/high-tech">LOGO</a>
                            </div>
                        </div>

                        {/* Desktop Navigation - CENTERED */}
                        <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                            <ul className="flex gap-[18px] sm:gap-[36px] list-none items-center">
                                <li>
                                    <a href="#products" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="/industries/high-tech/aboutus" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/industries/high-tech/resources" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="/industries/high-tech/careers" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Button */}
                        <div className="hidden lg:flex items-center ml-auto">
                            <button 
                                onClick={handleContactClick}
                                className="bg-black text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-[8px] text-xs sm:text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300"
                            >
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
                            <a href="/industries/high-tech/aboutus" className="text-gray-800 text-base font-medium hover:text-black">
                                About Us
                            </a>
                        </li>
                        <li className="border-b border-gray-300 pb-3">
                            <a href="/industries/high-tech/resources" className="text-gray-800 text-base font-medium hover:text-black">
                                Resources
                            </a>
                        </li>
                        <li className="border-b border-gray-300 pb-3">
                            <a href="/industries/high-tech/careers" className="text-gray-800 text-base font-medium hover:text-black">
                                Careers
                            </a>
                        </li>
                        <li className="pt-2">
                            <button 
                                onClick={handleContactClick}
                                className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800"
                            >
                                CONTACT US
                                <span className="text-lg">↗</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default HighTechNavbar;
