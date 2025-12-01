const SmallArticle = () => {
  return (
    <div className="w-full bg-black min-h-screen py-12 sm:py-14 lg:py-16 px-4 sm:px-6">
      <div className="max-w-8xl mx-auto lg:mx-10 px-2 sm:px-4 lg:px-6">
        {/* MOBILE + TABLET LAYOUT */}
        <div className="block lg:hidden">
          {/* Header Section */}
          <div className="mb-10 sm:mb-12">
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 5vw, 32px)",
                lineHeight: "110%",
                color: "#F5F5F5",
                marginBottom: "10px",
              }}
            >
              Sed ut perspiciatis
            </h2>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "clamp(20px, 4.5vw, 28px)",
                lineHeight: "110%",
                letterSpacing: "0%",
                color: "#F99526",
                whiteSpace: "normal",
              }}
            >
              Unde Seduo ut perspiciatis
            </h3>
          </div>

          {/* Horizontal Dotted Line with Navigation Arrows */}
          <div className="relative mb-10 sm:mb-12">
            {/* Dotted Line */}
            <div
              className="w-full pr-24 sm:pr-28"
              style={{
                borderTop: "2px dashed rgba(255, 255, 255, 0.9)",
                height: "3px",
              }}
            />

            {/* Navigation Arrows - Right Side */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-3 sm:gap-4">
              {/* Up Arrow Button */}
              <button
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>

              {/* Down Arrow Button */}
              <button
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="mb-10 sm:mb-12">
            <p
              className="text-white max-w-xl sm:max-w-2xl"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(18px, 4vw, 24px)",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. occaecat cupidatat non.
            </p>
          </div>

          {/* Author Info Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Profile Image - Circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300" />

            {/* Name and Title */}
            <div className="mb-2 sm:mb-0">
              <h4
                className="text-white mb-1"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 3vw, 22px)",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                }}
              >
                Abcdefgh, Qnest CEO, Newyork - US
              </h4>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT – ORIGINAL, UNCHANGED */}
        <div className="hidden lg:block">
          {/* Header Section */}
          <div className="mb-16">
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: "42px",
                lineHeight: "100%",
                color: "#F5F5F5",
                marginBottom: "12px",
              }}
            >
              Sed ut perspiciatis
            </h2>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "40px",
                lineHeight: "86%",
                letterSpacing: "0%",
                color: "#F99526",
                whiteSpace: "nowrap",
              }}
            >
              Unde Seduo ut perspiciatis
            </h3>
          </div>

          {/* Horizontal Dotted Line with Navigation Arrows */}
          <div className="relative mb-16">
            {/* Dotted Line */}
            <div
              className="w-full"
              style={{
                borderTop: "2px dashed rgba(255, 255, 255, 0.9)",
                height: "3px",
              }}
            />

            {/* Navigation Arrows - Right Side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-4">
              {/* Up Arrow Button */}
              <button
                className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>

              {/* Down Arrow Button */}
              <button
                className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="mb-16">
            <p
              className="text-white max-w-8xl"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: "35px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. occaecat cupidatat non.
            </p>
          </div>

          {/* Author Info Section */}
          <div className="flex flex-col gap-6">
            {/* Profile Image - Circle */}
            <div className="w-20 h-20 rounded-full bg-gray-300" />

            {/* Name and Title */}
            <div className="mb-4">
              <h4
                className="text-white mb-1"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                Abcdefgh, Qnest CEO, Newyork - US
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
