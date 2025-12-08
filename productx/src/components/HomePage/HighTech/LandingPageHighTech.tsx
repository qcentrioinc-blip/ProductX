import { Link } from "react-router-dom";

const LandingPageHighTech = () => {
  return (
    <div className="w-full">
      {/* ================= MOBILE + TABLET LAYOUT ================= */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-orange-900 flex flex-col lg:hidden">
        {/* Background Wave Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/HighTech/HomePage/WaveHighTech.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Section - perfectly centered vertically and horizontally */}
        <div className="relative z-30 flex-1 flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-2xl text-center flex flex-col items-center gap-4 sm:gap-5">
            {/* First line - white text */}
            <h1
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 7vw, 42px)",
                lineHeight: "115%",
                letterSpacing: "0%",
                color: "#F5F5F5",
                margin: 0,
              }}
            >
              Shaping the Future Across
            </h1>

            {/* Second line - purple italic text */}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "clamp(24px, 6.5vw, 38px)",
                lineHeight: "115%",
                letterSpacing: "0%",
                color: "#8338EC",
                margin: 0,
              }}
            >
              all the industries
            </h2>

            {/* Contact button - smaller with w-fit */}
            <a
              href="/industries/high-tech/contactform"
              className="px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-xl hover:bg-gray-800 transition-all w-fit mt-3"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "100%",
                letterSpacing: "4%",
                textTransform: "uppercase",
                background: "#FFFFFF",
                color: "#2A2A2A",
              }}
            >
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
            </a>

          </div>
        </div>

        {/* Bottom Image Boxes - mobile/tablet grid */}
        <div className="relative z-20 pb-8 sm:pb-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="rounded-lg w-full h-16 sm:h-20"
                  style={{
                    background: "#D9D9D936",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT (ORIGINAL, UNCHANGED) ================= */}
      <div className="hidden lg:block">
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-orange-900">
          {/* Background Wave Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/HighTech/HomePage/WaveHighTech.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hero Section with Exact Typography */}
          <div className="relative z-30 max-w-8xl mx-10 px-4 sm:px-6 lg:px-6 py-32 sm:py-40 md:py-44 lg:py-60">
            <div className="text-center flex flex-col items-center">
              {/* Title Container - Exact Width */}
              <div
                style={{
                  width: "1091px",
                  maxWidth: "100%",
                  opacity: 1,
                }}
              >
                {/* Main Heading - Bricolage Grotesque */}
                <h1
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "64px",
                    lineHeight: "117%",
                    position: "relative",
                    top: "100px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#F5F5F5",
                    opacity: 1,
                    margin: 0,
                    marginBottom: "8px",
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
                    fontStyle: "italic",
                    fontSize: "64px",
                    position: "relative",
                    top: "100px",
                    lineHeight: "130%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#8338EC",
                    opacity: 1,
                    margin: 0,
                    marginBottom: "48px",
                  }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
                >
                  all the industries
                </h2>
              </div>

              {/* Contact Button */}
              <Link
                to="/industries/high-tech/contactform"
                className="px-8 py-4 rounded-lg flex items-center gap-3 shadow-xl hover:bg-gray-800 transition-all"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                  position: "relative",
                  top: "100px",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "4%",
                  textTransform: "uppercase",
                  verticalAlign: "middle",
                  background: "#FFFFFF",
                  color: "#2A2A2A",
                }}
              >
                CONTACT US
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Image Boxes - Exact Specifications */}
          <div
            className="z-20 mx-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 absolute bottom-0 left-0 right-0"
            style={{
              width: "1548.39px",
              maxWidth: "calc(100% - 40px)",
              paddingLeft: "20px",
              paddingRight: "20px",
              margin: "0 auto",
            }}
          >
            <div
              className="flex flex-wrap justify-center items-center"
              style={{
                gap: "85px",
                opacity: 1,
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="rounded-lg"
                  style={{
                    width: "230px",
                    height: "80px",
                    background: "#D9D9D936",
                    opacity: 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHighTech;
