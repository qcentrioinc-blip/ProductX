import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";

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
                    absolute w-[1070px] h-[917px] top-[11px] left-[450px] z-[10] lg:z-[10] xl:z-[10]
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
                    relative
                    flex flex-col gap-8 px-5 py-12
                    sm:px-6 sm:py-16
                    md:grid md:grid-cols-[1.1fr_1fr] md:gap-x-8 md:gap-y-6 md:px-8 md:py-20 md:items-start
                    lg:block lg:p-0
                    xl:block xl:p-0
                ">

                    {/* ─── LEFT HERO ─── */}
                    <div className="
                        relative overflow-hidden
                        bg-[#2A2A2A]/90 border border-white/[0.15] backdrop-blur-[4px]
                        rounded-[20px] p-5 sm:p-6
                        md:p-[30px]
                        lg:absolute lg:left-[60px] lg:top-[110px] lg:z-[4] lg:p-[30px] lg:w-[500px]
                        xl:absolute xl:left-[80px] xl:top-[180px] xl:z-[4] xl:w-[700px] xl:p-[20px]
                    ">

                        <H1 className="
                            relative z-10 m-0 text-[#FAFAFA]
                             leading-[1.15]
                             sm:leading-[1.15]
                             md:leading-[1.15]
                             lg:w-full lg:leading-[1.15]
                             xl:w-full xl:leading-[1.1]
                        ">
                            Stressed Asset <br /> Management <br /> Solution for Banks
                        </H1>

                        <P className="
                            relative z-10 font-normal text-[#FAFAFA] leading-[1.5]
                             w-full opacity-90 mt-3
                             sm:mt-4
                            md:mt-4
                             lg:w-[95%] lg:mt-4
                            xl:w-[95%] xl:mt-4
                        ">
                            SAMS automates NPA tracking, provisioning calculations, and regulatory reporting. Integrates customer data across multiple loan products for unified management.
                        </P>

                        <ContactUs
                            className="relative z-10 !bg-[#2B68C3] !text-[#FAFAFA] !border-none hover:!bg-[#1e4e94] mt-5 lg:mt-6 xl:mt-4 flex items-center justify-center gap-2 !px-5 !py-2.5 md:!px-6 md:!py-3.5 !rounded-[8px] uppercase text-[14px] md:text-[15px] font-semibold tracking-wide w-fit"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            CONTACT US
                        </ContactUs>
                    </div>


                    {/* ─── RIGHT HERO ─── */}
                    <div className="
                        relative 
                        md:mt-[40px]
                        lg:absolute lg:left-[580px] lg:top-[160px] lg:z-[50] lg:mt-0
                        xl:absolute xl:left-[880px] xl:top-[222px] xl:z-[50] xl:mt-0
                    ">
                        <P className="
                            relative z-10 
                            font-normal text-[#FAFAFA] leading-[1.3] m-0
                            w-full
                            lg:w-[320px] lg:left-[15px] lg:top-[50px]
                            xl:w-[390px] xl:h-[88px] xl:left-[40px] xl:top-[50px]
                        ">
                            System identifies NPA records for agriculture and non-agriculture cases using IRAC guidelines. Differentiated logic for financial and non-financial parameters ensures accurate classification and provisioning.
                        </P>

                        {/* Card */}
                        <div className="
                            relative z-[15]
                            flex items-center justify-between gap-[10px] box-border
                            bg-white/10 border border-white/[0.22] backdrop-blur-[2px]
                            w-full rounded-[10px] p-5 mt-5
                            sm:p-6 sm:mt-6
                            md:p-5 md:mt-6
                            lg:w-[340px] lg:h-[140px] lg:p-5 lg:mt-[50px] lg:top-[40px] lg:left-0
                            xl:w-[390px] xl:h-[179px] xl:mt-[26px] xl:pt-[47px] xl:pr-[23px] xl:pb-[47px] xl:pl-[32px] xl:top-[80px] xl:left-0
                        ">
                            <span className="
                                font-['Bricolage_Grotesque',sans-serif] font-semibold
                                text-white text-left leading-[1.2]
                                text-[22px]
                                sm:text-[24px]
                                lg:text-[24px]
                                xl:text-[30px] xl:w-4xl xl:flex xl:items-center xl:justify-center
                            ">
                                Automated NPA Management
                            </span>

                            <div className="
                                flex items-center justify-center
                                rounded-full bg-white flex-shrink-0
                                w-[50px] h-[50px] min-w-[50px] min-h-[50px]
                                sm:w-[60px] sm:h-[60px] sm:min-w-[60px] sm:min-h-[60px]
                                lg:w-[65px] lg:h-[65px] lg:min-w-[65px] lg:min-h-[65px]
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
