import { ContactUs } from "../../../styles/Button";
import { H1 } from "../../../styles/Typography";

const column1Images = [
    "/Remitree/1.webp",
    "/Remitree/2.webp",
    "/Remitree/3.webp"
];

const column2Images = [
    "/Remitree/4.webp",
    "/Remitree/5.webp",
    "/Remitree/6.webp"
];

const Overview = () => {
    return (
        <div className="w-full h-auto bg-white relative font-sans" style={{ backgroundImage: "url('/Remitree/hero-transformed.webp')" }}>

            <section className="
                relative
                px-5       py-14
                sm:px-8    sm:py-12
                md:px-10   md:py-12
                lg:px-16   lg:py-12
                xl:px-24   xl:py-0 xl:pt-24
            ">
                <div className="
                    grid grid-cols-1 lg:grid-cols-2
                    gap-10 lg:gap-8 xl:gap-16
                    items-start
                ">

                    {/* ── Left Content ── */}
                    <div className="
                        relative z-10
                        text-center lg:text-left
                        pt-0
                        lg:pt-24
                        xl:pt-32
                    ">
                        {/* Heading */}
                        <H1 className="
                            font-['Space_Grotesk'] font-bold
                            leading-[110%] tracking-[-0.5px] text-[#2B68C3]
                            mb-4 sm:mb-6
                            text-[28px]
                            sm:text-[38px]
                            md:text-[46px]
                            lg:text-[40px]
                            xl:text-[56px]
                            2xl:text-[64px]
                        ">
                            Cross-Border Remittance<br />Middleware Solution
                        </H1>

                        {/* Description */}
                        <p className="
                            font-['Quicksand'] leading-[160%] text-black
                            mx-auto lg:mx-0
                            mb-6 sm:mb-8 lg:mb-10
                            text-[13px]   max-w-full
                            sm:text-[14px]
                            md:text-[15px] md:max-w-lg
                            lg:text-[14px] lg:max-w-[380px]
                            xl:text-[16px] xl:max-w-[480px]
                            2xl:max-w-[520px]
                        ">
                            Remitree bridges core banking systems with the Swift Alliance Gateway for seamless international payments. Automates message creation, validation, and transmission with built-in compliance screening.
                        </p>

                        {/* CTA Buttons */}
                        <div className="
                            flex flex-row flex-wrap items-center gap-2
                            justify-center lg:justify-start
                            mb-8 lg:mb-12 xl:mb-16
                        ">
                            <ContactUs
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >Explore Remitree</ContactUs>
                            {/* <button className="
                                bg-transparent text-[#2B68C3]
                                h-[44px] xl:h-[48px]
                                px-5 sm:px-6
                                rounded-lg font-semibold
                                flex items-center justify-center gap-2
                                hover:bg-blue-50 transition-colors duration-300
                                font-['Quicksand'] text-[12px] xl:text-[13px] tracking-[0.8px]
                            ">
                                WATCH OVERVIEW
                                <span className="
                                    w-6 h-6 xl:w-[26px] xl:h-[26px]
                                    rounded-full border-2 border-[#2B68C3]
                                    flex items-center justify-center flex-shrink-0
                                ">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#2B68C3">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </button> */}
                        </div>
                    </div>

                    {/* ── Right Content — Animated Card Columns ── */}
                    <div className="
                        relative hidden lg:flex
                        justify-end items-start
                        gap-4 xl:gap-6 2xl:gap-8
                        overflow-hidden
                        h-[460px]
                        lg:h-[600px]
                        xl:h-[700px]
                        2xl:h-[700px]
                    ">
                        {/* Column 1 — Scrolls UP */}
                        <div className="flex flex-col gap-4 xl:gap-6 animate-cards-up">
                            {[...column1Images, ...column1Images].map((imgSrc, i) => (
                                <div
                                    key={`col1-${i}`}
                                    className="
                                        flex-shrink-0 bg-[#D9D9D9] rounded-[10px] overflow-hidden relative
                                        w-[190px]  h-[260px]
                                        xl:w-[240px] xl:h-[340px]
                                        2xl:w-[301px] 2xl:h-[419px]
                                    "
                                >
                                    <img src={imgSrc} alt={`Remitree Use Case ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* Column 2 — Scrolls DOWN */}
                        <div className="
                            flex flex-col gap-4 xl:gap-6 animate-cards-down
                            mt-14 xl:mt-20 2xl:mt-24
                        ">
                            {[...column2Images, ...column2Images].map((imgSrc, i) => (
                                <div
                                    key={`col2-${i}`}
                                    className="
                                        flex-shrink-0 bg-[#D9D9D9] rounded-[10px] overflow-hidden relative
                                        w-[190px]  h-[260px]
                                        xl:w-[240px] xl:h-[340px]
                                        2xl:w-[301px] 2xl:h-[419px]
                                    "
                                >
                                    <img src={imgSrc} alt={`Remitree Feature ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Animation Keyframes ── */}
            <style>{`
                @keyframes cards-up {
                    0%   { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes cards-down {
                    0%   { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                .animate-cards-up {
                    animation: cards-up 30s linear infinite;
                }
                .animate-cards-down {
                    animation: cards-down 30s linear infinite;
                }
                .animate-cards-up:hover,
                .animate-cards-down:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Overview;
