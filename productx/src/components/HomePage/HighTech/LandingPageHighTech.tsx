import { useState } from 'react';
import { H1 } from '../../../styles/Typography';

const LandingPageHighTech = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Careers', href: '#careers' }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-orange-900">
      {/* Background Wave Image - Positioned in hero area */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/HighTech/HomePage/WaveHighTech.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Navigation Bar - Small, dark */}
      <div className="relative z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="bg-gray-600 text-white text-xs px-3 py-1 rounded">
              LOGO
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Marketplace</a>
          </div>
        </div>
      </div>

      {/* Main Navigation - White pill-shaped with rounded edges */}
      <div className="relative z-40 px-4 sm:px-6 lg:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="bg-white rounded-full shadow-2xl px-4 sm:px-6 md:px-8 lg:px-8 py-3 sm:py-4 md:py-4 lg:py-4 flex items-center justify-between">
            {/* Logo Circle */}
            <div className="flex items-center flex-shrink-0">
              <div className="w-10 sm:w-12 md:w-12 lg:w-12 h-10 sm:h-12 md:h-12 lg:h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-semibold">LOGO</span>
              </div>
            </div>

            {/* Navigation Links - Desktop Only */}
            <div className="hidden lg:flex items-center gap-8 text-gray-900 font-medium">
              <a href="#products" className="hover:text-gray-600 transition-colors">Products</a>
              <a href="#about" className="hover:text-gray-600 transition-colors">About Us</a>
              <a href="#resources" className="hover:text-gray-600 transition-colors">Resources</a>
              <a href="#careers" className="hover:text-gray-600 transition-colors">Careers</a>
            </div>

            {/* Desktop Contact Button */}
            <button className="hidden lg:flex bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors items-center gap-2 flex-shrink-0">
              CONTACT US
              <svg 
                width="16" 
                height="16" 
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

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </nav>

          {/* Mobile Menu - Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white rounded-lg shadow-2xl mt-2 p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-900 font-medium py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full mt-2">
                CONTACT US
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 md:py-20 lg:py-20 mt-6 sm:mt-8 md:mt-12 lg:mt-12">
        <div className="text-center">
          {/* Main Heading */}
          <H1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-3 sm:mb-4 lg:mb-4">
            Shaping the Future Across
          </H1>
          
          {/* Italic Purple Text */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold italic mb-8 sm:mb-10 md:mb-12 lg:mb-12"
              style={{ 
                color: '#a855f7',
                fontStyle: 'italic'
              }}>
            all the industries
          </h2>

          {/* Contact Button */}
          <button className="bg-white text-black px-6 sm:px-8 md:px-8 lg:px-8 py-3 sm:py-4 md:py-4 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto shadow-xl text-sm sm:text-base md:text-base lg:text-base">
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

      {/* Bottom Image Placeholder Boxes */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 pb-8 sm:pb-12 md:pb-16 lg:pb-16 mt-12 sm:mt-16 md:mt-24 lg:mt-24">
        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-6 justify-center items-center">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-gray-700/30 backdrop-blur-sm rounded-lg"
              style={{
                width: '197.677px',
                height: '77.094px',
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
