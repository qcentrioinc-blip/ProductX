import { useState } from "react";

const ThreeTab1 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Identification ', 'Unification', 'Classification'];

    const tabContents = [
        {
            title: 'NPA Identification',
            title1: 'Automated NPA Identification',
            text1: 'System identifies NPA records for agriculture and non-agriculture cases using IRAC guidelines. Differentiated logic applies for financial and non-financial parameters automatically.',
            title2: 'Rules Engine',
            text2: 'Configurable rules for overdrawn accounts, installment overdue, bills overdue, and interest not served. Non-financial parameters include limit expiry and drawing power updates.',
            features: [
                { text: 'Days Past Due', icon: '/SAMS/clock-time.svg' },
                { text: 'Financial Parameters', icon: '/SAMS/money-bag.svg' }
            ],
            image: '/BNFCos/1st.webp'
        },
        {
            title: 'Customer Unification',
            title1: 'Data Consolidation',
            text1: 'Daily upload of candidate data files, including outstanding, arrears, and customer information from various systems. Auto-upload facility streamlines data collection process.',
            title2: 'Unique Identification',
            text2: 'Uniform Customer Code assigned across all products and systems using SSN, National ID, or Customer Code. Provides a unified view of all credit facilities held by each customer.',
            features: [
                { text: 'Exception Reporting', icon: '/BNFCos/Document.svg' },
                { text: 'Automated Process', icon: '/BNFCos/Setting.svg' }
            ],
            image: '/BNFCos/2nd.webp'
        },
        {
            title: 'Asset Classification',
            title1: 'Provision Computation',
            text1: 'Based on asset classification provisioning master and uploaded security details. Secured principal calculated as the lesser of security value or the principal outstanding.',
            title2: 'Collateral Distribution',
            text2: 'Uploads securities and collaterals data feeds automatically. Excludes loans against securities if sufficient margin available as per regulatory guidelines.',
            features: [
                { text: 'Sub-Standard Assets', icon: '/SAMS/categories.svg' },
                { text: 'Doubtful Categories', icon: '/SAMS/asset.svg' }
            ],
            image: '/BNFCos/3rd.webp'
        },
    ];

    return (
        <div className="w-full bg-white">

            {/* ── Title & Description ─────────────────────────────
                Normal flow — no absolute positioning
            ─────────────────────────────────────────────────── */}
            <div className="
                w-full max-w-7xl mx-auto 
                px-4 md:px-6 lg:px-8 xl:px-0
                pt-8 pb-6
                text-left
            ">
                <h1 className="
                    font-bold font-['Bricolage_Grotesque'] leading-[1.1] text-[#232323]
                    text-[36px] md:text-[44px] lg:text-[50px]
                ">
                    Key Features of SAMS Platform
                </h1>
                <p className="
                    font-['Quicksand'] font-normal text-[#555] mt-4 
                    text-[15px] md:text-[16px] xl:text-[18px] max-w-3xl
                ">
                    SAMS automates NPA tracking, customer data unification, and provisioning calculations. Real-time dashboards and predictive analytics enable proactive risk management for financial institutions.
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
                    w-full max-w-7xl mx-auto
                ">
                    {/* ── Tab Navigation ── */}
                    <div className="flex border-b-[3px] border-b-[#a5bbd5]">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    flex-1 font-semibold transition-all duration-300 text-center relative
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

                            <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5 mt-1 xl:mt-2">
                                <div>
                                    <h3 className="font-['Bricolage_Grotesque'] font-bold text-[#232323] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[26px]">
                                        {tabContents[activeTab].title1}
                                    </h3>
                                    <p className="font-['Quicksand'] font-normal text-[#555] leading-[160%] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] xl:w-[90%] mt-1 lg:mt-2">
                                        {tabContents[activeTab].text1}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-['Bricolage_Grotesque'] font-bold text-[#232323] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[26px]">
                                        {tabContents[activeTab].title2}
                                    </h3>
                                    <p className="font-['Quicksand'] font-normal text-[#555] leading-[160%] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] xl:w-[90%] mt-1 lg:mt-2">
                                        {tabContents[activeTab].text2}
                                    </p>
                                </div>
                            </div>

                            {/* 2×2 Feature Items Grid */}
                            <div className="
                                grid grid-cols-2
                                gap-y-3 gap-x-3
                                lg:gap-y-4 lg:gap-x-5
                                xl:gap-y-5 xl:gap-x-4
                                mt-1
                            ">
                                {tabContents[activeTab].features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 xl:gap-4">
                                        <div className="
                                            rounded-full flex-shrink-0 flex items-center justify-center p-1.5
                                            w-7 h-7
                                            md:w-8 md:h-8
                                            lg:w-9 lg:h-9
                                            xl:w-12 xl:h-12
                                        ">
                                            <img src={feature.icon} alt={feature.text} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="
                                            font-['Quicksand'] text-[#333]
                                            text-[11px]
                                            md:text-[12px]
                                            lg:text-[13px]
                                            xl:text-[18px]
                                        ">
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="
                            w-full md:w-1/2 overflow-hidden
                            pt-5 md:pt-6 lg:pt-10 xl:pt-14
                        ">
                            <img
                                src={tabContents[activeTab].image}
                                alt={tabContents[activeTab].title}
                                className="w-full h-full lg:object-cover xl:object-cover rounded-tl-xl md:rounded-tl-2xl rounded-tr-xl border-t border-l border-gray-100 md:border-t-0 md:rounded-tr-none"
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

                        <div className="flex flex-col gap-3">
                            <div>
                                <h3 className="font-['Bricolage_Grotesque'] font-bold text-[#232323] text-[18px] sm:text-[20px]">
                                    {tabContents[activeTab].title1}
                                </h3>
                                <p className="font-['Quicksand'] text-[#555] leading-[150%] text-[13px] sm:text-[14px] mt-1">
                                    {tabContents[activeTab].text1}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-['Bricolage_Grotesque'] font-bold text-[#232323] text-[18px] sm:text-[20px]">
                                    {tabContents[activeTab].title2}
                                </h3>
                                <p className="font-['Quicksand'] text-[#555] leading-[150%] text-[13px] sm:text-[14px] mt-1">
                                    {tabContents[activeTab].text2}
                                </p>
                            </div>
                        </div>

                        {/* 2×2 Feature Grid */}
                        <div className="grid grid-cols-2 gap-y-[14px] gap-x-4">
                            {tabContents[activeTab].features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-[10px]">
                                    <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center p-1.5">
                                        <img src={feature.icon} alt={feature.text} className="w-full h-full object-contain" />
                                    </div>
                                    <span className="font-['Quicksand'] text-[#333] text-[12px] sm:text-[14px]">
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <img
                            src={tabContents[activeTab].image}
                            alt={tabContents[activeTab].title}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeTab1;
