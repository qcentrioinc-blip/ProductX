import { ContactUs } from "../../../styles/Button";

const Overview = () => {
    return (
        <div className="w-full min-h-screen bg-[#FFD700] relative overflow-hidden">

            {/* Hero Section */}
            <section className="relative max-w-[1480px] pt-28 lg:pt-44 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div className="relative z-10 text-center lg:text-left">

                        {/* Heading */}
                        <h1
                            className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] 
                            font-bold text-blue-600 mb-4 sm:mb-6 leading-[110%]"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                letterSpacing: "-0.5px",
                                color: "#2B68C3"
                            }}
                        >
                            Smarter Banking, Simplified with AI
                        </h1>

                        {/* Description */}
                        <p
                            className="text-[14px] sm:text-[16px] text-[#2A2A2A] 
                            max-w-full lg:max-w-[520px] mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10"
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                lineHeight: "160%"
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-row flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start">
                            <ContactUs>Contact Sales</ContactUs>

                            <button
                                className="bg-transparent text-[#2B68C3] h-[48px] px-6 sm:px-8 
                                rounded-[8px] font-semibold flex items-center justify-center gap-2 
                                hover:bg-blue-50 transition-colors duration-300"
                                style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontSize: "14px",
                                    letterSpacing: "0.5px"
                                }}
                            >
                                WATCH OVERVIEW
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>

                        {/* Decorative Circle - Bottom Left (Desktop Only) */}
                        <img
                            src="/Products/Products2/CircleLeft.png"
                            className="hidden lg:block absolute pointer-events-none w-[250px] h-[200px] 
                            -bottom-57 -left-35 opacity-90"
                        />
                    </div>

                    {/* Right Content – Stats */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Decorative Circle - Top Right (Desktop Only) */}
                        <img
                            src="/Products/Products2/CircleRight.png"
                            className="hidden lg:block absolute pointer-events-none 
                            w-[180px] h-[250px] -top-25 -right-35 opacity-90 z-20"
                        />

                        {/* Stats Image */}
                        <div
                            className="relative rounded-[16px] overflow-hidden shadow-2xl 
                            w-full max-w-[900px] lg:h-[500px] lg:mr-[-180px]"
                        >
                            <img
                                src="/Products/Products2/Stats.png"
                                className="w-full h-auto block"
                                alt="Dashboard Stats"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Overview;
