import EHRNavbar from "../../EHR&PMS/Navbar/EHRNavbar";

const LandingPageEHS = () => {
    return (
        <div className="relative w-full bg-gradient-to-b from-yellow-100 to-green-100">
            {/* MERGED BACKGROUND - Gradient wrapper starts here */}
            <EHRNavbar />
            <div className="relative bg-gradient-to-b from-yellow-100 to-green-100">
                {/* Wrapper for hero section - Same gradient background continues */}
                <div className="relative">
                    {/* Circle Image - POSITION UNCHANGED: top-[-150px] */}
                    <div className="absolute right-0 top-[-150px] bottom-0 w-1/2 lg:w-1/2 z-10 pointer-events-none hidden md:block" style={{ height: 'calc(100% + 350px)' }}>
                        <img
                            src="/EHRandPMS/circles.png"
                            alt="Green Spiral"
                            className="absolute right-0 top-0 h-full w-auto object-cover object-left"
                        />
                    </div>

                    {/* Vertical White Lines Background - Left Side - Hidden on mobile */}
                    <div className="absolute left-0 top-0 bottom-0 w-full z-20 pointer-events-none overflow-hidden hidden lg:block">
                        <div className="relative w-full h-full">
                            {Array.from({ length: 12 }, (_, i) => (
                                <div
                                    key={i}
                                    className="absolute h-full border-l-[0.5px] border-white opacity-100"
                                    style={{
                                        left: `${97.27 + (i * 111.98)}px`,
                                        top: '3.3px'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Hero Section - No background needed (inherits from parent) */}
                    <div className="relative">
                        {/* Desktop Content with Exact CSS */}
                        <div className="hidden md:block relative z-20 px-4 sm:px-16 md:px-28 py-8 sm:py-12 md:py-16">
                            <h1
                                style={{
                                    width: '649px',
                                    height: '134px',
                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '64px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    opacity: 1,
                                    marginBottom: '24px'
                                }}
                                className="text-[#2D7A5C]"
                            >
                                Shaping the Future Across Every Sector.
                            </h1>

                            <p
                                style={{
                                    width: '649px',
                                    height: '59px',
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    opacity: 1,
                                    marginBottom: '32px'
                                }}
                                className="text-gray-800"
                            >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>

                            <button className="bg-[#F4A261] text-[#04531A] px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-[#E89551] transition-all">
                                <a href="/industries/ehr-and-pms/contactus">CONTACT US</a>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Responsive Content */}
                        <div className="md:hidden relative z-20 px-4 sm:px-8 py-8 sm:py-12">
                            <h1 className="text-2xl sm:text-3xl font-bold text-[#2D7A5C] leading-tight mb-4 sm:mb-6 break-words">
                                Shaping the Future<br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>Across Every Sector.
                            </h1>

                            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>

                            <button className="bg-[#F4A261] text-[#04531A]px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold flex items-center gap-2 sm:gap-3 hover:bg-[#E89551] transition-all text-sm sm:text-base">
                                CONTACT US
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Logo Cards with Light Green Background */}
            <div className="bg-gradient-to-b from-green-50 to-white py-12 px-8 sm:px-12 md:px-28 border-t border-gray-200 relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <h2
                        className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: '48px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#166D48'
                        }}
                    >
                        Duis aute
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 flex-1 justify-center md:justify-start w-full md:w-auto">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                                style={{
                                    padding: '32px 82px',
                                    borderRadius: '8px'
                                }}
                            >
                                <span className="text-gray-300 font-semibold text-xl">Logo</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageEHS;
