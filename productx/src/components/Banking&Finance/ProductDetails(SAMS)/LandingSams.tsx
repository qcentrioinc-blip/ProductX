import { ContactUs } from "../../../styles/Button";

const LandingSams = () => {
    return (
        <div className="w-full overflow-x-hidden bg-[#131313]">
            <div className="
                w-full bg-[#131313] relative
                font-['Bricolage_Grotesque',sans-serif]
                lg:h-[780px] lg:overflow-hidden
                xl:w-full xl:min-w-7xl xl:h-[990px] xl:overflow-hidden xl:mx-auto
            ">

                {/* ═══════════════════════════════════════
                    BACKGROUND SHAPES
                    lg+: show both shapes (iPad Pro + Desktop)
                    below lg: subtle decorative only
                ═══════════════════════════════════════ */}

                {/* Top-left parallelogram — lg AND desktop */}
                <div className="
                    hidden lg:block
                    absolute w-[449px] h-[209px] left-[204px] top-0 z-[1]
                    bg-[url('/BNFCos/Rect1.png')] bg-cover bg-center bg-no-repeat
                    [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]
                " />

                {/* Right chevron — lg AND desktop */}
                <div className="
                    hidden lg:block
                    absolute w-[1070px] h-[917px] top-[11px] left-[450px] z-[1]
                    bg-[url('/BNFCos/Rect2.png')] bg-cover bg-center bg-no-repeat
                    [clip-path:polygon(30%_0%,100%_0%,120%_100%,30%_100%,14%_80%)]
                " />

                {/* Subtle decorative bg — Mobile & Tablet only (below lg) */}
                <div className="
                    lg:hidden absolute inset-0 z-0 pointer-events-none
                    bg-[url('/BNFCos/Rect2.png')] bg-cover bg-right opacity-20
                    [clip-path:polygon(35%_0%,100%_0%,100%_100%,35%_100%,20%_50%)]
                " />


                {/* ═══════════════════════════════════════
                    HERO WRAPPER
                    default → flex-col (mobile)
                    md      → 2-col grid (tablet)
                    lg      → block, children go absolute (iPad Pro)  ← NEW
                    xl      → block, children go absolute (desktop)
                ═══════════════════════════════════════ */}
                <div className="
                    relative z-[5]
                    flex flex-col gap-6 px-5 py-16
                    sm:px-6 sm:py-12
                    md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-6 md:px-8 md:py-14 md:items-start
                    lg:block lg:p-0
                    xl:block xl:p-0
                ">

                    {/* ─── LEFT HERO ─── */}
                    <div className="
                        lg:absolute lg:left-[60px] lg:top-[140px] lg:z-[5]
                        xl:absolute xl:left-[80px] xl:top-[190px] xl:z-[5]
                    ">
                        <h1 className="
                            m-0 font-['Bricolage_Grotesque',sans-serif] font-bold text-[#FAFAFA]
                            text-[38px] leading-[1.1]
                            sm:text-[50px] sm:leading-none
                            md:text-[56px]
                            lg:text-[52px] lg:w-[420px] lg:leading-none
                            xl:text-[64px] xl:w-[660px] xl:h-[172px]
                            xl:whitespace-nowrap xl:relative xl:top-[30px]
                        ">
                            Stressed Asset <br /> Management <br /> Solution for Bank
                        </h1>

                        <p className="
                            font-['Quicksand',sans-serif] font-normal text-[#FAFAFA] leading-[1.3]
                            text-sm mt-4 w-full
                            sm:text-[15px] sm:mt-5
                            md:text-base md:mt-6
                            lg:text-[16px] lg:w-[380px] lg:mt-[20px]
                            xl:text-[18px] xl:w-2xl xl:mt-[60px]
                        ">
                            SAMS automates NPA tracking, provisioning calculations, and regulatory reporting. Integrates customer data across multiple loan products for unified management.
                        </p>

                        <ContactUs
                            className="!bg-[#2B68C3] !text-[#FAFAFA] !border-none mt-6 xl:mt-[32px] hover:!bg-[#1e4e94]"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Contact Us
                        </ContactUs>
                    </div>


                    {/* ─── RIGHT HERO ─── */}
                    <div className="
                        lg:absolute lg:left-[520px] lg:top-[200px] lg:z-[5]
                        xl:absolute xl:left-[880px] xl:top-[222px] xl:z-[5]
                    ">
                        <p className="
                            font-['Schibsted_Grotesk',sans-serif] font-normal text-[#FAFAFA] leading-[1.3] m-0
                            text-sm w-full
                            sm:text-[15px]
                            md:text-base
                            lg:text-[16px] lg:w-[360px] lg:relative lg:left-0 lg:top-3
                            xl:text-[18px] xl:w-[390px] xl:h-[88px]
                            xl:relative xl:left-[40px] xl:top-[50px]
                        ">
                            System identifies NPA records for agriculture and non-agriculture cases using IRAC guidelines. Differentiated logic for financial and non-financial parameters ensures accurate classification and provisioning.
                        </p>

                        {/* Card */}
                        <div className="
                            flex items-center justify-between gap-[10px] box-border
                            bg-white/10 border border-white/[0.22] backdrop-blur-[2px]
                            w-full rounded-xl p-5 mt-4
                            sm:mt-5 sm:p-6
                            md:p-5
                            lg:w-[360px] lg:h-[160px] lg:mt-[20px] lg:p-5
                            lg:rounded-[10px] lg:relative lg:left-0 lg:top-0
                            xl:w-[390px] xl:h-[179px] xl:mt-[26px]
                            xl:pt-[47px] xl:pr-[23px] xl:pb-[47px] xl:pl-[32px]
                            xl:rounded-[10px] xl:relative xl:top-[80px]
                        ">
                            <span className="
                                font-['Bricolage_Grotesque',sans-serif] font-semibold
                                text-white text-center leading-[1.2]
                                text-xl
                                lg:text-[28px]
                                xl:text-[30px] xl:w-4xl xl:flex xl:items-center xl:justify-center
                            ">
                                Automated NPA Management
                            </span>

                            <div className="
                                flex items-center justify-center
                                rounded-full bg-white flex-shrink-0
                                w-[60px] h-[60px] min-w-[60px] min-h-[60px]
                                sm:w-[72px] sm:h-[72px] sm:min-w-[72px] sm:min-h-[72px]
                                lg:w-[75px] lg:h-[75px] lg:min-w-[75px] lg:min-h-[75px]
                                xl:w-[85px] xl:h-[85px] xl:min-w-[85px] xl:min-h-[85px]
                            ">
                                <img src="/BNFCos/Setting.svg" alt="setting" className="w-[65%] h-[65%] object-contain" />
                            </div>
                        </div>
                    </div>

                </div>{/* end hero wrapper */}


                {/* ═══════════════════════════════════════
                    GRAY BOX
                ═══════════════════════════════════════ */}
                <div className="
                    relative z-[10] overflow-hidden bg-[#D9D9D9]
                    mx-5 mt-4 mb-10 h-36 rounded-xl
                    sm:mx-6 sm:h-44 sm:mb-12
                    md:mx-8 md:h-52 md:mt-0
                    lg:absolute lg:w-[904px] lg:h-[220px] lg:top-[530px] lg:left-[60px]
                    lg:mx-0 lg:mt-0 lg:mb-0 lg:rounded-[10px]
                    xl:absolute xl:w-7xl xl:h-[323px] xl:top-[605px] xl:left-[80px]
                    xl:mx-0 xl:mt-0 xl:mb-0 xl:rounded-[10px]
                ">
                    <img src="/BNFCos/hero.webp" alt="Pen" className="w-full h-full object-cover" />
                </div>

            </div>
        </div>
    );
};

export default LandingSams;
