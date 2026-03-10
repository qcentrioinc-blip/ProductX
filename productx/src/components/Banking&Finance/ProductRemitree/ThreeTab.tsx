import { useState } from "react";

const ThreeTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Suwrepher', 'Adipiscing', 'Consecte'];

    const tabContents = [
        {
            title: 'Suwrepher adipiscing',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            features: ['Consecte adipiscing', 'Consecte adipiscing', 'Consecte adipiscing', 'Consecte adipiscing'],
        },
        {
            title: 'Adipiscing consecte',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            features: ['Consecte adipiscing', 'Consecte adipiscing', 'Consecte adipiscing', 'Consecte adipiscing'],
        },
        {
            title: 'Consecte adipiscing',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            features: ['Consecte adipiscing', 'Consecte adipiscing', 'Consecte adipiscing', 'Consecte adipiscing'],
        },
    ];

    return (
        <div className="w-full bg-white">

            {/* ── Title & Description ─────────────────────────────
                Normal flow — no absolute positioning
            ─────────────────────────────────────────────────── */}
            <div className="
                flex flex-col items-center text-center w-full
                px-4 py-4
            ">
                <h1 className="
                    font-bold font-['Space_Grotesk'] leading-[1.1] text-[#232323] w-full
                    text-[22px]     max-w-[280px]
                    sm:text-[30px]  sm:max-w-md
                    md:text-[34px]  md:max-w-xl
                    lg:text-[40px]  lg:max-w-2xl
                    xl:text-[44px]  xl:max-w-4xl
                ">
                    Sed ut perspiciatis unde
                </h1>
                <p className="
                    font-['Quicksand'] font-normal text-[#252525] mt-3 w-full
                    text-[13px]  max-w-[280px]
                    sm:text-[14px] sm:max-w-sm
                    md:text-[14px] md:max-w-lg
                    lg:text-[15px] lg:max-w-[560px]
                    xl:text-[16px] xl:max-w-[650px]
                ">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official
                </p>
            </div>

            {/* ── TABLET + DESKTOP CARD (md and above) ───────────
                NO scaling, NO absolute — pure responsive Tailwind
            ─────────────────────────────────────────────────── */}
            <div className="
                hidden md:block w-full
                px-4
                md:px-6
                lg:px-10
                xl:px-16
                pb-12 xl:pb-16
            ">
                <div className="
                    border-[1.5px] border-[#D5D5D5] rounded-xl overflow-hidden bg-white
                    w-full max-w-[1400px] mx-auto
                ">
                    {/* ── Tab Navigation ── */}
                    <div className="flex border-b-[3px] border-b-[#a5bbd5]">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    flex-1 font-semibold transition-all duration-300 text-left relative
                                    h-[48px]  text-[14px] pl-4
                                    md:h-[56px]  md:text-[16px] md:pl-5
                                    lg:h-[68px]  lg:text-[22px] lg:pl-8
                                    xl:h-[90px]  xl:text-[30px] xl:pl-[60px] xl:pr-[40px]
                                    ${activeTab === index
                                        ? 'bg-[#2B68C3] text-white z-[1]'
                                        : 'bg-transparent text-[#2B68C3] z-0'
                                    }
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* ── Content Row ── */}
                    <div className="flex flex-col md:flex-row">

                        {/* Left Content */}
                        <div className="
                            w-full md:w-1/2 flex flex-col
                            p-5       gap-3
                            md:p-6    md:gap-4
                            lg:p-10   lg:gap-5
                            xl:py-14  xl:px-16  xl:gap-7
                        ">
                            <h2 className="
                                font-['Bricolage_Grotesque'] font-bold text-[#2B68C3] leading-[120%]
                                text-[18px]
                                md:text-[22px]
                                lg:text-[28px]
                                xl:text-[40px]
                            ">
                                {tabContents[activeTab].title}
                            </h2>

                            <p className="
                                font-['Quicksand'] font-normal text-[#333] leading-[160%]
                                text-[12px]
                                md:text-[13px]
                                lg:text-[14px]
                                xl:text-[18px]
                            ">
                                {tabContents[activeTab].text}
                            </p>

                            {/* 2×2 Feature Items Grid */}
                            <div className="
                                grid grid-cols-2
                                gap-y-3 gap-x-3
                                lg:gap-y-4 lg:gap-x-5
                                xl:gap-y-5 xl:gap-x-8
                                mt-1
                            ">
                                {tabContents[activeTab].features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 xl:gap-4">
                                        <div className="
                                            rounded-full bg-[#D9D9D9] flex-shrink-0
                                            w-7 h-7
                                            md:w-8 md:h-8
                                            lg:w-9 lg:h-9
                                            xl:w-12 xl:h-12
                                        " />
                                        <span className="
                                            font-['Quicksand'] text-[#333]
                                            text-[11px]
                                            md:text-[12px]
                                            lg:text-[13px]
                                            xl:text-[18px]
                                        ">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="
                            w-full md:w-1/2 overflow-hidden
                            min-h-[180px]
                            md:min-h-[280px]
                            lg:min-h-[380px]
                            xl:min-h-[528px]
                        ">
                            <img
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Business meeting"
                                className="w-full h-full lg:object-cover xl:object-contain block"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MOBILE VERSION (below md only) ─────────────── */}
            <div className="md:hidden w-full flex flex-col items-center px-4 pb-12 relative z-10">
                <div className="w-full max-w-[700px] rounded-xl overflow-hidden bg-white border-[1.5px] border-[#D5D5D5] min-h-[500px]">

                    {/* Tab Header */}
                    <div className="flex w-full overflow-x-auto scrollbar-hide border-b-[1.5px] border-b-[#D5D5D5]">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    flex-1 py-4 px-5 min-w-[110px]
                                    text-sm font-bold whitespace-nowrap transition-colors
                                    ${activeTab === index
                                        ? 'bg-[#2B68C3] text-white'
                                        : 'bg-transparent text-[#2B68C3]'
                                    }
                                `}
                                style={{
                                    clipPath: activeTab === index
                                        ? 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)'
                                        : 'none',
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex flex-col gap-5">
                        <h2 className="
                            font-['Bricolage_Grotesque'] font-bold text-[#2B68C3] leading-[110%]
                            text-[22px] sm:text-[26px]
                        ">
                            {tabContents[activeTab].title}
                        </h2>

                        <p className="
                            font-['Quicksand'] text-[#333] leading-[150%]
                            text-[13px] sm:text-[14px]
                        ">
                            {tabContents[activeTab].text}
                        </p>

                        {/* 2×2 Feature Grid */}
                        <div className="grid grid-cols-2 gap-y-[14px] gap-x-4">
                            {tabContents[activeTab].features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-[10px]">
                                    <div className="w-9 h-9 rounded-full bg-[#D9D9D9] flex-shrink-0" />
                                    <span className="font-['Quicksand'] text-[#333] text-[12px] sm:text-[14px]">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Business meeting"
                            className="w-full h-auto rounded-lg object-cover max-h-[300px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeTab;
