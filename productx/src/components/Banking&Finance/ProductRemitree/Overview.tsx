import { ContactUs } from "../../../styles/Button";
import { H1 } from "../../../styles/Typography";

const Overview = () => {
    return (
        <div className="w-full h-auto bg-white relative overflow-hidden font-sans">
            {/* Hero Section */}
            <section className="relative max-w-8xl py-28 lg:py-40 xl:py-44 mx-10 px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 xl:gap-20 items-center">

                    {/* Left Content */}
                    <div className="relative z-10 text-center lg:text-left">

                        {/* Heading */}
                        <H1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[48px] xl:text-[64px] 
                                     font-bold text-black mb-4 sm:mb-6 leading-[110%] tracking-[-0.5px] font-['Space_Grotesk']">
                            Smarter Banking, Simplified with AI
                        </H1>

                        {/* Description */}
                        <p className="text-[14px] sm:text-[16px] text-black 
                                    max-w-full lg:max-w-[480px] xl:max-w-[520px] mx-auto lg:mx-0 
                                    mb-6 sm:mb-8 lg:mb-10 font-['Quicksand'] leading-[160%]">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-row flex-wrap  justify-center lg:justify-start">
                            <ContactUs>Contact Sales</ContactUs>

                            <button className="bg-transparent text-black h-[48px] px-6 sm:px-8 
                                             rounded-[8px] font-semibold flex items-center justify-center gap-2 
                                             hover:bg-blue-50 transition-colors duration-300 font-['Quicksand'] text-[14px] tracking-[0.5px]">
                                WATCH OVERVIEW
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>

                        {/* Decorative Circle - Bottom Left (Desktop Only) */}
                        {/* <img
                            src="/Products/Products2/CircleLeft.png"
                            alt=""
                            className="hidden lg:block absolute pointer-events-none w-[200px] xl:w-[250px] h-auto 
                                     -bottom-60 xl:-bottom-65 -left-25 xl:-left-35 opacity-90"
                        /> */}
                    </div>

                    {/* Right Content – Stats */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Decorative Circle - Top Right (Desktop Only) */}
                        {/* <img
                            src="/Products/Products2/CircleRight.png"
                            alt=""
                            className="hidden lg:block absolute pointer-events-none 
                                     w-[150px] xl:w-[180px] h-auto -top-15 xl:-top-15 -right-30 xl:-right-25 opacity-90 z-20"
                        /> */}

                        {/* Stats Image */}
                        <div className="relative rounded-[16px] overflow-visible lg:overflow-visible xl:overflow-hidden 
                                      w-full max-w-[600px] lg:max-w-none xl:max-w-[900px] 
                                      lg:w-[130%] xl:w-full
                                      h-auto lg:h-auto xl:h-[500px] 
                                      lg:mr-[-100px] xl:mr-[-180px] shadow-2xl ">
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
