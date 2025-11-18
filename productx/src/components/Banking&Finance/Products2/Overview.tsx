 

const Overview = () => {
   

   
    return (
        <div className="w-full min-h-screen bg-[#FFD700] relative overflow-hidden">
            

          

            {/* Hero Section */}
            <section className="relative max-w-[1480px] lg:pt-44 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative z-10 text-center lg:text-left">
                        {/* Main Heading */}
                        <h1
                            className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-blue-600 mb-4 sm:mb-6"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                lineHeight: '110%',
                                letterSpacing: '-0.5px',
                                fontWeight: 700,
                                color: '#2B68C3'
                            }}
                        >
                            Smarter Banking, Simplified with AI
                        </h1>

                        {/* Description */}
                        <p
                            className="text-[14px] sm:text-[16px] text-[#2A2A2A] max-w-full lg:max-w-[520px] mb-6 sm:mb-8 lg:mb-10 mx-auto lg:mx-0"
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                lineHeight: '160%',
                                fontWeight: 400
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] justify-center lg:justify-start">
                            {/* Contact Sales Button */}
                            <button className="bg-white text-black h-[48px] px-6 sm:px-8 rounded-[8px] font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto">
                                CONTACT SALES
                                <span>↗</span>
                            </button>

                            {/* Watch Overview Button */}
                            <button className="bg-transparent text-blue-600 h-[48px] px-6 sm:px-8 rounded-[8px] font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto">
                                WATCH OVERVIEW
                                <span className="text-[16px]">▶</span>
                            </button>
                        </div>

                        {/* Decorative Circle - Bottom Left - Desktop Only */}
                        <img
                            src="/Products/Products2/CircleLeft.png"
                            alt="Decorative Circle"
                            className="absolute lg:block hidden pointer-events-none z-0"
                            style={{
                                width: '300px',
                                height: '220px',
                                bottom: '-250px',
                                left: '-140px',
                                opacity: 0.9
                            }}
                        />
                    </div>

                    {/* Right Content - Stats Dashboard */}
                    <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                        {/* Decorative Circle - Top Right - Desktop Only */}
                        <img
                            src="/Products/Products2/CircleRight.png"
                            alt="Decorative Circle"
                            className="absolute lg:block hidden pointer-events-none"
                            style={{
                                width: '180px',
                                height: '250px',
                                top: '-90px',
                                right: '-140px',
                                opacity: 0.9,
                                zIndex: 20
                            }}
                        />

                        {/* Stats Image - Responsive */}
                        <div className="stats-container relative rounded-[16px] overflow-hidden shadow-2xl lg:mt-12"
                            style={{
                                width: '900px',
                                height: '500px',
                                marginRight: '-210px',
                                zIndex: 0
                            }}
                        >
                            <img
                                src="/Products/Products2/Stats.png"
                                alt="Dashboard Stats"
                                className="w-full h-auto block"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsive Styles */}
            <style>{`
                /* Mobile & Tablet - Stats Image */
                @media (max-width: 1023px) {
                    .stats-container {
                        width: 100% !important;
                        max-width: 600px !important;
                        height: auto !important;
                        margin: 0 auto !important;
                        margin-right: 0 !important;
                    }
                }

                /* Tablet - Medium screens */
                @media (min-width: 640px) and (max-width: 1023px) {
                    .stats-container {
                        max-width: 700px !important;
                    }
                }

                /* Mobile - Extra small screens */
                @media (max-width: 639px) {
                    .stats-container {
                        max-width: 100% !important;
                        border-radius: 12px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Overview;
