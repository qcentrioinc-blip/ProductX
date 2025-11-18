import { Link } from 'react-router-dom';

const EHRFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-[#A8D5C3] via-[#7CB89D] to-[#5A9B80] text-white">
      {/* Top Section - Logo and Newsletter */}
      <div className="bg-[#A8D5C3] py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Side - Logo and Tagline */}
          <div className="flex-shrink-0">
            {/* Logo - QNEST with Bricolage Grotesque */}
            <h1 
              className="mb-4"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(80px, 10vw, 124.56px)',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              <span className="text-black">Q</span>
              <span className="text-[#166D48]">N</span>
              <span className="text-black">E</span>
              <span className="text-[#166D48]">S</span>
              <span className="text-black">T</span>
            </h1>

            {/* Tagline with Quicksand */}
            <p 
              className="max-w-md"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#F5F5F5'
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </p>
          </div>

          {/* Right Side - Newsletter Section */}
          <div className="flex-1 max-w-2xl w-full">
            {/* Newsletter Title with Bricolage Grotesque */}
            <h2 
              className="mb-6 text-right"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000'
              }}
            >
              Subscribe to our newsletter.
            </h2>

            {/* Email Input and Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 sm:max-w-md px-6 py-4 rounded-full border-2 border-[#166D48] bg-transparent outline-none text-black placeholder:text-gray-600"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '16px'
                }}
              />
              <button
                className="px-6 py-4 bg-[#141414] hover:bg-[#2A2A2A] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                style={{
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: 600
                }}
              >
                SUBMIT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex flex-col">
        {/* Home */}
        <Link 
          to="/industries/ehr-and-pms" 
          className="bg-[#7CB89D] border-b border-[#6BA88A] py-6 px-8 md:px-16 lg:px-24 flex justify-end items-center hover:bg-[#6FA88F] transition-colors cursor-pointer"
        >
          <span 
            className="text-white"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(24px, 3vw, 32px)',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Home
          </span>
        </Link>

        {/* About Us with LinkedIn */}
        <div className="bg-[#6FAA8F] border-b border-[#5E9880] py-6 px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* LinkedIn Icon */}
              <a 
                href="https://linkedin.com/company/yourcompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Arrow */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" transform="rotate(-45 12 12)" />
              </svg>
            </div>
            <Link 
              to="/industries/ehr-and-pms/about-us" 
              className="text-white hover:text-gray-200 transition-colors"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Clinic App */}
        <Link 
          to="/industries/ehr-and-pms/clinic-app" 
          className="bg-[#62A082] border-b border-[#528E71] py-6 px-8 md:px-16 lg:px-24 flex justify-end items-center hover:bg-[#569775] transition-colors cursor-pointer"
        >
          <span 
            className="text-white"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(24px, 3vw, 32px)',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Clinic App
          </span>
        </Link>

        {/* Blogs with X (Twitter) */}
        <div className="bg-[#569775] border-b border-[#478566] py-6 px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* X Icon */}
              <a 
                href="https://x.com/yourcompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Arrow */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" transform="rotate(-45 12 12)" />
              </svg>
            </div>
            <Link 
              to="/industries/ehr-and-pms/blogs" 
              className="text-white hover:text-gray-200 transition-colors"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <Link 
          to="/industries/ehr-and-pms/case-studies" 
          className="bg-[#4A8D68] border-b border-[#3D7A5A] py-6 px-8 md:px-16 lg:px-24 flex justify-end items-center hover:bg-[#3D835B] transition-colors cursor-pointer"
        >
          <span 
            className="text-white"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(24px, 3vw, 32px)',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Case Studies
          </span>
        </Link>

        {/* Careers with Instagram */}
        <div className="bg-[#3D835B] py-6 px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* Instagram Icon */}
              <a 
                href="https://instagram.com/yourcompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Arrow */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" transform="rotate(-45 12 12)" />
              </svg>
            </div>
            <Link 
              to="/industries/ehr-and-pms/career" 
              className="text-white hover:text-gray-200 transition-colors"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Links */}
      <div className="bg-[#2D7250] py-6 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <p 
          className="text-white"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '14px'
          }}
        >
          © 2025 Qnest. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
          <Link 
            to="/industries/ehr-and-pms/privacy-policy" 
            className="text-white hover:underline"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '14px'
            }}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/industries/ehr-and-pms/cookie-policy" 
            className="text-white hover:underline"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '14px'
            }}
          >
            Cookie Policy
          </Link>
          <Link 
            to="/industries/ehr-and-pms/terms-and-conditions" 
            className="text-white hover:underline"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '14px'
            }}
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default EHRFooter;
