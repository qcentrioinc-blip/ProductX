import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const LandingPageHighTech = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-orange-900">
      {/* Background Wave Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/HighTech/HomePage/WaveHighTech.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

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

      {/* Main White Navbar */}
      <header className="w-full bg-transparent pt-4 pb-4">
        <div className="max-w-[1540px] mx-auto">
          <nav className="relative w-full max-w-[1480px] h-[80px] mx-auto bg-white rounded-[60px] px-4 flex items-center justify-between shadow-lg z-50">
            {/* Logo */}
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

      {/* Hero Section with Exact Typography */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 md:py-20 lg:py-20 mt-6 sm:mt-8 md:mt-12 lg:mt-12">
        <div className="text-center flex flex-col items-center">
          {/* Title Container - Exact Width */}
          <div
            style={{
              width: '1091px',
              maxWidth: '100%',
              opacity: 1
            }}
          >
            {/* Main Heading - Bricolage Grotesque */}
            <h1
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: '64px',
                lineHeight: '117%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#F5F5F5',
                opacity: 1,
                margin: 0,
                marginBottom: '8px'
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              Shaping the Future Across
            </h1>

            {/* Italic Purple Text - Playfair Display */}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '64px',
                lineHeight: '130%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#8338EC',
                opacity: 1,
                margin: 0,
                marginBottom: '48px'
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
            >
              all the industries
            </h2>
          </div>

          {/* Contact Button */}
          <button className="bg-white text-black px-6 sm:px-8 md:px-8 lg:px-8 py-3 sm:py-4 md:py-4 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-xl text-sm sm:text-base md:text-base lg:text-base">
            CONTACT US
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Image Boxes - Exact Specifications */}
      <div
        className="relative z-20 mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-16 mt-12 sm:mt-16 md:mt-24 lg:mt-24"
        style={{
          width: '1248.39px',
          maxWidth: 'calc(100% - 40px)',
          paddingLeft: '20px',
          paddingRight: '20px',
          margin: '0 auto'
        }}
      >
        <div
          className="flex flex-wrap justify-center items-center"
          style={{
            gap: '55px',
            opacity: 1
          }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="rounded-lg"
              style={{
                width: '197.68px',
                height: '77.09px',
                background: '#D9D9D936',
                opacity: 1
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageHighTech;
