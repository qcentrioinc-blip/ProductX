const OnePoint = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-purple-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">

          {/* Left Side - Title */}
          <div className="pt-4 sm:pt-6 lg:pt-8">
            <h2
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                lineHeight: '90%',
                letterSpacing: '-1px',
              }}
            >
              Duis aute iru <br /> dolor
            </h2>
          </div>

          {/* RIGHT SIDE - MOBILE / TABLET VERSION */}
          <div className="block lg:hidden mt-8 sm:mt-10">
            {/* Top circle */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Dotted line + content */}
            <div className="flex">
              {/* Line */}
              <div className="ml-[18px] mt-2 mb-4">
                <div
                  style={{
                    width: '2px',
                    height: '220px',
                    background: `
                      repeating-linear-gradient(
                        to bottom,
                        #F99526 0px,
                        #8338EC 20px,
                        transparent 20px,
                        transparent 35px
                      )
                    `,
                    borderRadius: '999px',
                  }}
                />
              </div>

              {/* Content */}
              <div className="ml-6 mt-4">
                <h3
                  className="text-white mb-3 text-xl sm:text-2xl"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    lineHeight: '110%',
                    letterSpacing: '0%',
                  }}
                >
                  Duis aute iru dolor
                </h3>

                <p
                  className="text-gray-300 mb-6 text-sm sm:text-base"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 400,
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: '#F5F5F5',
                  }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  occaecat cupidatat non.
                </p>

                <a
                  href="/industries/high-tech/contactform"
                  className="bg-white text-black px-6 sm:px-7 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center text-sm sm:text-[15px]"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                    fontStyle: 'bold',
                    letterSpacing: '0.5px',
                  }}
                >
                  BOOK A FREE DEMO
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-[18px] sm:h-[18px]"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>

              </div>
            </div>

            {/* Bottom circle */}
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - DESKTOP VERSION (UNCHANGED) */}
          <div className="relative pt-4 hidden lg:block">
            {/* First Circle Marker - Top */}
            <div className="relative">
              <div
                className="w-14 h-14 rounded-full border-2 border-white bg-transparent flex items-center justify-center absolute left-0 top-140"
              >
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              {/* Gradient Dotted Line */}
              <div
                className="absolute left-7 top-24"
                style={{
                  width: '3px',
                  height: '455px',
                  background: `
                    repeating-linear-gradient(
                      to bottom,
                      #F99526 0px,
                      #8338EC 20px,
                      transparent 20px,
                      transparent 35px
                    )
                  `,
                  borderRadius: '10px',
                }}
              ></div>

              {/* Content - Right of Circle */}
              <div className="relative">
                <div className="ml-24 pt-4 absolute left-0 top-72">
                  <h3
                    className="text-white mb-5"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: '32px',
                      lineHeight: '110%',
                      letterSpacing: '0%',
                    }}
                  >
                    Duis aute iru dolor
                  </h3>

                  <p
                    className="text-gray-300 mb-8"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '130%',
                      letterSpacing: '0%',
                      color: '#F5F5F5',
                      maxWidth: '520px',
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. occaecat cupidatat non.
                  </p>

                  {/* Button */}
                  <a
                    href="/industries/high-tech/contactform"
                    className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 w-fit"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 700,
                      fontStyle: 'bold',
                      fontSize: '16px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    BOOK A FREE DEMO
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Circle Marker - Bottom */}
            <div className="relative mt-8">
              <div
                className="w-14 h-14 rounded-full border-2 border-white bg-transparent flex items-center justify-center absolute left-0 top-0"
              >
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnePoint;
