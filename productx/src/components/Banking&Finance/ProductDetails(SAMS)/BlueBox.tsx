const BlueBox = () => {
    return (
        <div className="relative w-full overflow-hidden xl:w-8xl xl:mx-auto xl:flex xl:h-[730px]">

            <div className="
                bg-[#2B68C3] flex flex-col justify-between
                p-8 pt-12 pb-10
                sm:p-10 sm:pt-14 sm:pb-12
                lg:p-16
                xl:w-5xl xl:min-w-4xl xl:h-[730px]
                xl:pt-[60px] xl:pb-[60px] xl:pl-[80px] xl:pr-[80px]
            ">

                {/* ─── TOP: Heading + Ghost Button ─── */}
                <div>
                    {/* Heading — Bricolage Grotesque Bold (matches LandingSams h1) */}
                    <h1 className="
                        m-0 font-['Bricolage_Grotesque',sans-serif] font-bold
                        text-white leading-none
                        text-[36px]
                        sm:text-[48px]
                        lg:text-[56px]
                        xl:text-[64px]
                    ">
                        Ready to Automate<br />Your NPA Management
                    </h1>

                    {/* Ghost pill button */}
                    <button className="
                        mt-6 xl:mt-8
                        flex items-center justify-center
                        px-7 xl:px-8 h-10 xl:h-[44px]
                        rounded-full
                        border border-white bg-transparent
                        text-white
                        font-['Schibsted_Grotesk',sans-serif] font-normal
                        text-[14px] xl:text-[15px]
                        cursor-pointer
                    ">
                        Start
                    </button>
                </div>


                {/* ─── BOTTOM: Two Columns with Divider ─── */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch xl:items-stretch xl:max-w-[600px]">

                    {/* Column 1 */}
                    <div className="flex-1 sm:pr-8 xl:pr-10">
                        <h3 className="
                            m-0 font-['Bricolage_Grotesque',sans-serif] font-bold
                            text-white leading-none
                            text-[20px] sm:text-[24px] xl:text-[28px]
                        ">
                            See Demo
                        </h3>
                        <p className="
                            mt-3 xl:mt-4
                            font-['Schibsted_Grotesk',sans-serif] font-normal
                            text-white leading-[1.5]
                            text-[13px] sm:text-[14px] xl:text-[16px]
                        ">
                            Schedule a personalized walkthrough to see how SAMS automates NPA tracking and provisioning for your bank.
                        </p>

                        {/* White solid pill button */}
                        <button className="
                            mt-5 xl:mt-6
                            flex items-center justify-center
                            px-7 xl:px-8 h-10 xl:h-[44px]
                            rounded-full
                            bg-white border-none
                            text-[#131313]
                            font-['Schibsted_Grotesk',sans-serif] font-semibold
                            text-[14px] xl:text-[15px]
                            cursor-pointer
                        " onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                            }}>
                            Contact
                        </button>
                    </div>

                    {/* Vertical white divider — hidden on mobile, visible sm+ */}
                    <div className="hidden sm:block w-px self-stretch bg-white opacity-70" />

                    {/* Column 2 */}
                    <div className="flex-1 sm:pl-8 xl:pl-10">
                        <h3 className="
                            m-0 font-['Bricolage_Grotesque',sans-serif] font-bold
                            text-white leading-none
                            text-[20px] sm:text-[24px] xl:text-[28px]
                        ">
                            Contact Us
                        </h3>
                        <p className="
                            mt-3 xl:mt-4
                            font-['Schibsted_Grotesk',sans-serif] font-normal
                            text-white leading-[1.5]
                            text-[13px] sm:text-[14px] xl:text-[16px]
                        ">
                            Speak with our product experts to discuss your stressed asset management requirements and compliance needs.
                        </p>
                    </div>

                </div>
            </div>


            {/* ══════════════════════════════════════════
                RIGHT GRAY PANEL — desktop only
            ══════════════════════════════════════════ */}
            <div className="hidden xl:block flex-1 bg-[#EAEAEA] relative">
            </div>

            {/* Absolute positioning for Laptop image overlapping the blue left side */}
            <div className="hidden xl:block absolute bottom-0 2xl:right-0 xl:right-0 z-10 w-[650px] h-auto pointer-events-none">
                <img
                    src="/BNFCos/cta.webp"
                    alt="Automate NPA Management"
                    className="w-full h-full object-cover object-bottom"
                />
            </div>
        </div>
    );
};

export default BlueBox;
