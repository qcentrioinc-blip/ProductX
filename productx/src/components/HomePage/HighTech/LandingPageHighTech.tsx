import HighTechNavbar from '../../HighTech/Navbar/HighTechNavbar';

const LandingPageHighTech = () => {
  

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

      <HighTechNavbar />

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
