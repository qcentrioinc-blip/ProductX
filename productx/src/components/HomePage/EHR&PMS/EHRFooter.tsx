import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// SMOOTH WAVE BREATHING EFFECT - Reduced heights + Smooth scroll
const GradientLayers = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Removed smooth - doesn't exist
  });

  const GRADIENT = 'linear-gradient(90deg, #0E5756 0%, #116D6B 25%, #218281 50%, #41A09E 75%, #51B4B3 100%)';

  // REDUCED heights (about 40% smaller)
  const layers = [
  { opacity: 0.9, minHeight: 10, maxHeight: 28 },
  { opacity: 0.8, minHeight: 12, maxHeight: 30 },
  { opacity: 0.6, minHeight: 8, maxHeight: 25 },
  { opacity: 0.4, minHeight: 12, maxHeight: 32 },
  { opacity: 0.2, minHeight: 6, maxHeight: 22 },
  { opacity: 0.05, minHeight: 5, maxHeight: 20 }
];


  return (
    <div ref={containerRef} className="w-full">
      {layers.map((layer, index) => {
        // WIDER scroll ranges for SMOOTHER transitions
        const scrollRange = [
          0.0 + (index * 0.03),
          0.5,
          1.0 - (index * 0.03)
        ];

        const height = useTransform(
          scrollYProgress,
          scrollRange,
          [layer.minHeight, layer.maxHeight, layer.minHeight]
          // Removed ease option - not valid in useTransform
        );

        return (
          <motion.div
            key={index}
            className="relative w-full"
            style={{
              background: GRADIENT,
              height
            }}
          >
            <span
              className="absolute inset-0 block"
              style={{ background: `rgba(1, 29, 33, ${1 - layer.opacity})` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const EHRFooter = () => {
  const base = '/industries/ehr-and-pms';

  const quickLinks = [
    { name: 'Physician', path: `${base}/physician` },
    { name: 'Admin', path: `${base}/admin` },
    { name: 'Nurse', path: `${base}/nurse` },
    { name: 'Receptionist', path: `${base}/receptionist` },
    
    { name: 'Insurance Coordinator', path: `${base}/insurance-coordinator` },
    { name: 'Pricing', path: `${base}/pricing` },
  ];

  const builtfor = [
    { name: 'Long Term Care', path: `${base}/built-for/long-term-care` },
    { name: 'Home Healthcare', path: `${base}/built-for/home-healthcare` },
    { name: 'Clinics & Hospitals', path: `${base}/built-for/clinics-and-hospitals` },
  ];

  return (
    <footer className="bg-[#008280]">
      {/* Green Gradient Layers - NOW WITH FASTER ANIMATION */}
      <GradientLayers />

      {/* Main Container */}
      <div className="bg-[#008280] flex flex-col pt-16 items-left max-w-8xl px-4 sm:px-6 md:px-8  ">

        {/* TOP CARD - Newsletter */}
        <div
          className="bg-white shadow-xl w-full"
          style={{
            borderRadius: '10px',
            marginBottom: '11px',
            opacity: 1
          }}
        >
          <div className="px-12 md:px-16 lg:px-20 py-12 md:py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">

              <div className="flex-shrink-0">
                <img src="/QnestEHRLogo.svg" alt="QNEST Logo" className="w-50 lg:w-70 h-auto" />
              </div>

              <div className="flex-1 w-full max-w-2xl flex flex-col items-start lg:items-center">
                <h2
                  className="mb-8 text-left lg:text-left"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    lineHeight: '120%',
                    color: '#008280'
                  }}
                >
                  Subscribe to our<br />newsletter.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:justify-end items-stretch">
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    className="flex-1 sm:max-w-sm px-6 rounded-full border-2 border-gray-300 bg-white outline-none text-gray-800 placeholder:text-gray-500 focus:border-[#008280] transition-colors"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: '16px',
                      height: '56px'
                    }}
                  />
                  <button
                    className="px-8 bg-black hover:bg-gray-900 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap"
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      height: '56px',
                      minWidth: '140px'
                    }}
                  >
                    SUBMIT
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARD - Links */}
        <div
          className="bg-white shadow-xl w-full relative"
          style={{
            borderRadius: '8px',
            opacity: 1
          }}
        >
          <div className="px-12 md:px-16 lg:px-20 py-12 md:py-14">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[0.5fr_0.5fr_1.5fr] gap-x-16 lg:gap-x-20 gap-y-10 pb-16 lg:pb-0">

              {/* QUICK LINKS */}
              <div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#2A2A2A'
                  }}
                >
                  Quick Links
                </h3>
                <ul className="space-y-5">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="hover:opacity-80 transition-opacity inline-block"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: '24px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#008280'
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#2A2A2A'
                  }}
                >
                  Built For
                </h3>
                <ul className="space-y-5">
                  {builtfor.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="hover:opacity-80 transition-opacity inline-block"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: '24px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#008280'
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PRODUCTS */}
              <div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#2A2A2A'
                  }}
                >
                  Resources
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={`${base}/blogs`}
                      className="hover:opacity-80 transition-opacity inline-block"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#008280'
                      }}
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="absolute bottom-12 right-12 md:bottom-14 md:right-16 lg:right-20 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#008280] rounded-lg flex items-center justify-center hover:bg-[#008280] hover:text-white transition-all text-[#008280]"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#008280] rounded-lg flex items-center justify-center hover:bg-[#008280] hover:text-white transition-all text-[#008280]"
                aria-label="X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#008280] rounded-lg flex items-center justify-center hover:bg-[#008280] hover:text-white transition-all text-[#008280]"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="  px-4 sm:px-6 md:px-12 pb-8 pt-10">
          <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white">
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              © 2025 Qnest. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
              <a
                href={`${base}/privacy-policy`}
                className="hover:underline"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                Privacy Policy
              </a>
              <a
                href={`${base}/cookie-policy`}
                className="hover:underline"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                Cookie Policy
              </a>
              <a
                href={`${base}/terms-and-conditions`}
                className="hover:underline"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}

    </footer>
  );
};

export default EHRFooter;