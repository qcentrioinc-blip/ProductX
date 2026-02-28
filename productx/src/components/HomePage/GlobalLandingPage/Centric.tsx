// Centric.jsx

const Centric = () => {
    return (
        <section className="w-full bg-white overflow-hidden">

            {/* ── DESKTOP (xl) ── */}
            <div className="hidden xl:flex w-full h-[640px] relative">
                {/* ── COL 1 ── */}
                <div className="relative flex-1 h-full border-opacity-0">

                    {/* Divider only goes to 331px height */}
                    <div className="absolute right-[-2px] top-0 w-0 h-[365px] border-r border-[1px] border-[#515151]" />

                    {/* Grey Box — starts from left-0, top: 140px */}
                    <div className="absolute top-[140px] left-0 right-0 h-[227px] bg-[#EAEAEA] flex flex-col justify-center px-8 gap-4">
                        <span
                            className="text-[#2B68C3] text-[24px] font-semibold leading-none block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Driven by Outcomes
                        </span>
                        <p
                            className="text-[#141414] text-[16px] font-normal leading-[130%] m-0 max-w-[256px]"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            We focus on measurable improvements in performance, cost, and
                            reliability.
                        </p>
                    </div>
                </div>

                {/* ── COL 2 ── */}
                <div className="relative flex-1 h-full">

                    {/* Divider only goes to 577px height */}
                    <div className="absolute right-[1px] top-0 w-0 h-[500px] border-r border-[1px] border-[#515151]" />

                    {/* People-Centric Delivery — vertically center-lower */}
                    <div className="absolute top-[200px] left-8 right-8 flex flex-col gap-4">
                        <span
                            className="text-[#2B68C3] text-[24px] font-semibold leading-none block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            People‑Centric Delivery
                        </span>
                        <p
                            className="text-[#141414] text-[16px] font-normal leading-[130%] m-0"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Qnest Global supports companies across banking, manufacturing,
                            healthcare, retail, and services. Our teams design AI, CRM, HRM
                        </p>
                    </div>
                </div>

                {/* ── COL 3 ── */}
                <div className="relative flex-1 h-full">

                    {/* Divider only goes to 439px height */}
                    <div className="absolute right-[-2px] top-40 w-0 h-[400px] border-r border-[1px] border-[#515151]" />

                    {/* Dotted Image — top, full col width */}
                    <div className="absolute top-0 left-0 right-0 h-[50px] flex items-center justify-center">
                        <img
                            src="/Dotted.png"
                            alt="dot pattern"
                            className="w-[280px] h-[220px] object-contain rotate-180"
                        />
                    </div>

                    {/* Grey Box — col 3, below dots */}
                    <div className="absolute top-[270px] left-0 right-0 h-[231px] bg-[#EAEAEA] flex flex-col justify-center px-8 gap-4">
                        <span
                            className="text-[#2B68C3] text-[24px] font-semibold leading-[120%] block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Accountable Partnership
                        </span>
                        <p
                            className="text-[#141414] text-[16px] font-normal leading-[130%] m-0 max-w-[290px]"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            We commit to clear expectations, honest updates, and consistent
                            follow-through. .
                        </p>
                    </div>
                </div>

                {/* ── COL 4 ── */}
                <div className="relative flex-1 h-full">

                    {/* People-Centric Delivery — bottom aligned */}
                    <div className="absolute top-[450px] left-8 right-8 flex flex-col gap-4">
                        <span
                            className="text-[#2B68C3] text-[24px] font-semibold leading-none block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            People‑Centric Delivery
                        </span>
                        <p
                            className="text-[#141414] text-[16px] font-normal leading-[130%] m-0"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Qnest Global supports companies across banking, manufacturing,
                            healthcare, retail, and services. Our teams design AI, CRM, HRM
                        </p>
                    </div>
                </div>

            </div>

            {/* ── MOBILE & TABLET (below xl) ── */}
            <div className="xl:hidden flex flex-col divide-y divide-gray-200">

                {/* Col 1 */}
                <div className="bg-[#EAEAEA] px-8 py-8 flex flex-col gap-4">
                    <span
                        className="text-[#2B68C3] text-[20px] font-semibold leading-none"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Driven by Outcomes
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        We focus on measurable improvements in performance, cost, and
                        reliability.
                    </p>
                </div>

                {/* Col 2 */}
                <div className="px-8 py-8 flex flex-col gap-4">
                    <span
                        className="text-[#2B68C3] text-[20px] font-semibold leading-none"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        People‑Centric Delivery
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Qnest Global supports companies across banking, manufacturing,
                        healthcare, retail, and services. Our teams design AI, CRM, HRM
                    </p>
                </div>

                {/* Col 3 */}
                <div className="bg-[#EAEAEA] px-8 py-8 flex flex-col gap-4">
                    <img
                        src="/Centric/Dotted.jpg"
                        alt="dot pattern"
                        className="w-[160px] h-[90px] object-cover mb-2 hidden"
                    />
                    <span
                        className="text-[#2B68C3] text-[20px] font-semibold leading-[120%]"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Accountable Partnership
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        We commit to clear expectations, honest updates, and consistent
                        follow-through.
                    </p>
                </div>

                {/* Col 4 */}
                <div className="px-8 py-8 flex flex-col gap-4">
                    <span
                        className="text-[#2B68C3] text-[20px] font-semibold leading-none"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        People‑Centric Delivery
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Qnest Global supports companies across banking, manufacturing,
                        healthcare, retail, and services. Our teams design AI, CRM, HRM
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Centric;
