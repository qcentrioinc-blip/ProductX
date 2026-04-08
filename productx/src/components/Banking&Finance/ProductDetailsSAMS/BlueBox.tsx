import { H1, H3, P } from "../../../styles/Typography";

const BlueBox = () => {
    return (
        <div className="relative w-full overflow-hidden xl:w-8xl xl:mx-auto xl:flex xl:h-[730px]">

            <div className="
                bg-[#2B68C3]  dark:bg-black flex flex-col justify-between
                p-8 pt-12 pb-10
                sm:p-10 sm:pt-14 sm:pb-12
                lg:p-16
                xl:w-5xl xl:min-w-4xl xl:h-[730px]
                xl:pt-[60px] xl:pb-[60px] xl:pl-[120px] xl:pr-[80px]
            ">

                {/* ─── TOP: Heading + Ghost Button ─── */}
                <div>
                    {/* Heading — Bricolage Grotesque Bold (matches LandingSams h1) */}
                    <H1 className="
                        m-0
                        text-white leading-none
                    ">
                        Ready to Automate<br />Your NPA Management
                    </H1>

                    {/* Ghost pill button */}
                    <button className="
                        mt-6 lg:mt-4 xl:mt-8 mb-4 lg:mb-4 xl:mb-0
                        flex items-center justify-center
                        px-7 xl:px-8 h-10 xl:h-[40px]
                        rounded-full
                        border border-white bg-transparent
                        text-white
                        font-['Quicksand',sans-serif] font-normal
                        text-[14px] xl:text-[15px]
                        cursor-pointer
                    "
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Start
                    </button>
                </div>


                {/* ─── BOTTOM: Two Columns with Divider ─── */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch xl:items-stretch xl:max-w-[600px]">

                    {/* Column 1 */}
                    <div className="flex-1 sm:pr-8 xl:pr-10">
                        <H3 className="
                            m-0
                            text-white leading-none
                        ">
                            See Demo
                        </H3>
                        <P className="
                            mt-3 xl:mt-4
                            text-white leading-[150%]
                        ">
                            Schedule a personalized walkthrough to see how SAMS automates NPA tracking and provisioning for your bank.
                        </P>

                        {/* White solid pill button */}
                        <button className="
                            mt-5 xl:mt-6
                            flex items-center justify-center
                            px-7 xl:px-8 h-10 xl:h-[44px]
                            rounded-full
                            bg-white border-none
                            text-[#131313]
                            font-['Quicksand',sans-serif] font-semibold
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
                        <H3 className="
                            m-0
                            text-white leading-none
                        ">
                            Contact Us
                        </H3>
                        <P className="
                            mt-3 xl:mt-4
                            text-white leading-[150%]
                        ">
                            Speak with our product experts to discuss your stressed asset management requirements and compliance needs.
                        </P>
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
