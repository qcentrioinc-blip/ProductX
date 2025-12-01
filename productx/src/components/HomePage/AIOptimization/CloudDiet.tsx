import { ArrowUpRight } from "lucide-react";

const CloudDiet = () => {
    return (
        <section className="relative w-full min-h-[480px] overflow-hidden bg-gradient-to-br from-[#10DC78] via-[#0EC970] to-[#0AB861] px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-6 relative">
                
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col space-y-6 sm:space-y-7 lg:space-y-8">

                        {/* Top Purple Text */}
                        <p
                            className="text-[18px] sm:text-[20px] lg:text-[24px]"
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 700,
                                lineHeight: "110%",
                                color: "#5551FF",
                            }}
                        >
                            Lorem ipsum dolor sit amet Lorem
                        </p>

                        {/* Main Heading */}
                        <h1
                            className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[64px]"
                            style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                lineHeight: "110%",
                                color: "#000000",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
                        </h1>

                        {/* CTA Button */}
                        <div>
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-black rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl uppercase"
                                style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    backgroundColor: "#F5F5F5",
                                    paddingTop: "14px",
                                    paddingBottom: "14px",
                                    paddingLeft: "24px",
                                    paddingRight: "24px",
                                }}
                            >
                                BOOK A DEMO NOW
                                <span className="inline-flex items-center justify-center">
                                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex items-center justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0">
                        <div className="w-[80%] sm:w-[75%] md:w-[65%] lg:max-w-[550px]">
                            <img
                                src="/AIOptimization/CloudDiet.png"
                                alt="CloudDiet Logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CloudDiet;
