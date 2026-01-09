import { ArrowUpRight, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";


import FloatingLines from "./AIFooterBackground";



const AIFooter = () => {
    const base = "/industries/ai-optimization";
    return (
        <footer className="relative w-full overflow-hidden">

            {/* Background for the entire footer */}
            <div className="absolute inset-0 z-0">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={[10, 15, 20]}
                    lineDistance={[8, 6, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                // topWavePosition={{ x: 10.0, y: 0.15, rotate: -0.4 }}
                // middleWavePosition={{ x: 5.0, y: -0.35, rotate: 0.2 }} // height
                // bottomWavePosition={{ x: 2.0, y: -1.0, rotate: -1.0 }}
                // topWavePosition={{ x: 10.0, y: 0.5, rotate: 0.4 }}
                // middleWavePosition={{ x: 5.0, y: 0.0, rotate: -0.2 }} // reverse
                // bottomWavePosition={{ x: 2.0, y: -0.7, rotate: 1.0 }}
                />
            </div>

            {/* ========== TOP SECTION ========== */}
            <div className="relative w-full py-12 sm:py-14 md:py-16">

                {/* Pattern Overlay */}
                <div className="absolute inset-0 overflow-hidden opacity-60">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="diagonal-lines-top"
                                x="0"
                                y="0"
                                width="35"
                                height="35"
                                patternUnits="userSpaceOnUse"
                                patternTransform="rotate(-135)"
                            >
                                <line
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="35"
                                    stroke="rgba(255, 255, 255, 0.4)"
                                    strokeWidth="1.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagonal-lines-top)" />
                    </svg>
                </div>

                {/* Heading */}
                <div className="relative z-20 mx-4 sm:mx-8 md:mx-10 px-2 sm:px-4 lg:px-7 text-center">
                    <h2
                        className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px]"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 700,
                            lineHeight: "110%",
                            color: "#F5F5F5",
                        }}
                    >
                        Trust Qnest Clouddiet for guaranteed cloud savings
                    </h2>
                </div>
            </div>

            {/* ========== MAIN SECTION ========== */}
            <div className="relative w-full pt-10 sm:pt-12 md:pt-16 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-8 lg:px-16">
                {/* FloatingLines removed from here */}

                <div className="relative z-10 mx-4 sm:mx-8 md:mx-10">

                    <div className="grid xl:grid-cols-2 gap-12 xl:gap-0">

                        {/* LEFT SECTION */}
                        <div>

                            {/* Newsletter */}
                            <div className="space-y-6 sm:space-y-7 md:space-y-8">
                                <h3
                                    className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[64px] xl:whitespace-nowrap"
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', sans-serif",
                                        fontWeight: 600,
                                        lineHeight: "110%",
                                        color: "#F5F5F5",
                                    }}
                                >
                                    Get Azure optimization tips
                                    <br className="hidden sm:block" />
                                    and savings updates monthly.
                                </h3>

                                {/* Email */}
                                <div className="max-w-md w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your mail"
                                        className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-full text-white text-[14px] sm:text-[16px] bg-transparent border-2 border-white/40 focus:border-white/70 focus:outline-none placeholder:text-white/70"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    className="inline-flex items-center gap-3 rounded-lg transition-colors uppercase hover:bg-gray-100"
                                    style={{
                                        fontFamily: "'Quicksand', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "14px",
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        padding: "14px 34px",
                                    }}
                                >
                                    SUBMIT
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Footer Columns */}
                            <div className="pt-10 sm:pt-12 flex flex-wrap gap-10 sm:gap-16 md:gap-20">

                                {/* Products */}
                                <div className="space-y-3 min-w-[150px]">
                                    <h4
                                        className="text-[20px] sm:text-[22px] md:text-[24px]"
                                        style={{
                                            fontFamily: "'Bricolage Grotesque', sans-serif",
                                            fontWeight: 700,
                                            color: "#F5F5F5",
                                        }}
                                    >
                                        Products
                                    </h4>

                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-[16px]">•</span>
                                            <a
                                                className="hover:underline"
                                                href="/industries/ai-optimization/clouddiet"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontSize: "16px",
                                                    color: "#F5F5F5",
                                                }}
                                            >
                                                CloudDIET
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Quick Links */}
                                <div className="space-y-3 min-w-[150px]">
                                    <h4
                                        className="text-[20px] sm:text-[22px] md:text-[24px] "
                                        style={{
                                            fontFamily: "'Bricolage Grotesque', sans-serif",
                                            fontWeight: 700,
                                            color: "#F5F5F5",
                                        }}
                                    >
                                        Quick Links
                                    </h4>

                                    <ul className="space-y-2">
                                        {/* Careers Link */}
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-[16px]">•</span>
                                            <a
                                                href={`${base}/careers`}
                                                className="hover:text-white hover:underline transition-colors"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontSize: "16px",
                                                    color: "#F5F5F5",
                                                }}
                                            >
                                                Careers
                                            </a>
                                        </li>

                                        {/* Resources Link */}
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-[16px]">•</span>
                                            <a
                                                href={`${base}/resources`}
                                                className="hover:text-white hover:underline transition-colors"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontSize: "16px",
                                                    color: "#F5F5F5",
                                                }}
                                            >
                                                Resources
                                            </a>
                                        </li>

                                        {/* Contact Link */}
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-[16px]">•</span>
                                            <Link
                                                to={`${base}/contactus`}
                                                className="hover:text-white hover:underline transition-colors"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontSize: "16px",
                                                    color: "#F5F5F5",
                                                }}
                                            >
                                                Contact
                                            </Link>
                                        </li>

                                        {/* Privacy Policy Link */}
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-[16px]">•</span>
                                            <Link
                                                to={`${base}/privacy-policy`}
                                                className="hover:text-white hover:underline transition-colors"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontSize: "16px",
                                                    color: "#F5F5F5",
                                                }}
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>

                                        {/* Cookies Policy Link */}
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-[16px]">•</span>
                                            <Link
                                                to={`${base}/cookies-policy`}
                                                className="hover:text-white hover:underline transition-colors"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontSize: "16px",
                                                    color: "#F5F5F5",
                                                }}
                                            >
                                                Cookies Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Social Icons */}
                                <div className="flex items-start gap-4">
                                    {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="text-white hover:text-white/80">
                                            <Icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE AI IMAGE (Desktop Only) */}
                        <div className="hidden xl:block relative">
                            <div className="absolute right-0 top-[-100px] left-[230px] w-[520px] xl:w-[620px]">
                                <img
                                    src="/AIOptimization/AIGirl.png"
                                    alt="AI Girl"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AIFooter;
