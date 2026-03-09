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
        <div
            className="three-tab-section w-full relative flex flex-col items-center justify-start overflow-hidden h-auto md:h-[600px] lg:h-[700px] xl:h-[850px] 2xl:h-[1000px] pt-10 md:pt-0"
            style={{
                width: '100%',
                margin: '0 auto',
                background: '#FFFFFF',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* ── Title & Description ── */}
            <div className="title-container flex flex-col items-center w-full max-w-7xl px-4 md:px-0 z-10 pointer-events-none relative md:absolute md:top-16 lg:top-24 xl:top-16 md:left-1/2 md:-translate-x-1/2 mb-8 md:mb-0">
                <h1 className="text-center font-bold font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.1] text-[#232323] mt-4 mb-2 w-full max-w-screen-sm lg:max-w-7xl">
                    Sed ut perspiciatis unde
                </h1>
                <p className="text-center font-['Quicksand'] font-normal text-[13px] sm:text-[15px] md:text-base text-[#252525] mt-2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[650px]">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                </p>
            </div>

            {/* ── DESKTOP VERSION ── */}
            <div
                className="desktop-content w-full max-w-7xl hidden md:block absolute left-1/2 -translate-x-1/2 transform origin-top md:scale-[0.45] lg:scale-[0.55] xl:scale-[0.75] 2xl:scale-100 top-48 md:top-56 lg:top-68 xl:top-72"
            >
                {/* Card with border */}
                <div style={{
                    border: '1.5px solid #D5D5D5',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#ffffff',
                }}>
                    {/* ── Tab Navigation ── */}
                    <div
                        className="flex"
                        style={{ borderBottom: '1.5px solid #D5D5D5' }}
                    >
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className="font-semibold transition-all duration-300"
                                style={{
                                    flex: 1,
                                    height: '90px',
                                    // ✅ Dark blue fill + white text for active; blue text for inactive
                                    background: activeTab === index ? '#2B68C3' : 'transparent',
                                    color: activeTab === index ? '#ffffff' : '#2B68C3',
                                    fontSize: '34px',
                                    textAlign: 'left',
                                    paddingLeft: '60px',
                                    paddingRight: '40px',
                                    // ✅ Diagonal right edge (trapezoid shape) only on active tab
                                    clipPath: activeTab === index
                                        ? 'polygon(0 0, calc(100% - 0px) 0, 100% 100%, 0 100%)'
                                        : 'none',
                                    position: 'relative',
                                    zIndex: activeTab === index ? 1 : 0,
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* ── Content Row ── */}
                    <div className="flex" style={{ minHeight: '528px' }}>

                        {/* Left Content */}
                        <div
                            className="flex flex-col"
                            style={{ width: '50%', padding: '56px 64px', gap: '28px' }}
                        >
                            <h2 style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 700,
                                fontSize: '40px',
                                lineHeight: '120%',
                                color: '#2B68C3'
                            }}>
                                {tabContents[activeTab].title}
                            </h2>

                            <p style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '160%',
                                color: '#333',
                            }}>
                                {tabContents[activeTab].text}
                            </p>

                            {/* ✅ 2×2 Feature Items Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '20px 32px',
                                marginTop: '8px'
                            }}>
                                {tabContents[activeTab].features.map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        {/* Gray Circle Icon */}
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            background: '#D9D9D9',
                                            flexShrink: 0
                                        }} />
                                        <span style={{
                                            fontFamily: "'Quicksand', sans-serif",
                                            fontSize: '18px',
                                            color: '#333'
                                        }}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image — fills full right half */}
                        <div style={{ width: '50%', overflow: 'hidden' }}>
                            <img
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Business meeting"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MOBILE VERSION ── */}
            <div className="mobile-content w-full flex md:hidden flex-col items-center px-4 pb-12 relative z-10 mt-0">
                {/* ✅ White background + gray border (matches desktop card) */}
                <div
                    className="w-full max-w-[700px] rounded-xl overflow-hidden"
                    style={{
                        background: '#ffffff',
                        border: '1.5px solid #D5D5D5',
                        minHeight: '500px'
                    }}
                >
                    {/* Tab Header */}
                    <div
                        className="flex w-full overflow-x-auto scrollbar-hide"
                        style={{ borderBottom: '1.5px solid #D5D5D5' }}
                    >
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className="flex-1 py-4 px-5 text-sm font-bold whitespace-nowrap transition-colors"
                                style={{
                                    minWidth: '110px',
                                    // ✅ Same active/inactive colors as desktop
                                    background: activeTab === index ? '#2B68C3' : 'transparent',
                                    color: activeTab === index ? '#ffffff' : '#2B68C3',
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
                        <h2 style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 700,
                            fontSize: 'clamp(22px, 5vw, 30px)',
                            color: '#2B68C3',
                            lineHeight: '110%'
                        }}>
                            {tabContents[activeTab].title}
                        </h2>

                        <p style={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: 'clamp(13px, 3vw, 16px)',
                            color: '#333',
                            lineHeight: '150%'
                        }}>
                            {tabContents[activeTab].text}
                        </p>

                        {/* ✅ 2×2 Feature Items Grid (mobile) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '14px 16px',
                        }}>
                            {tabContents[activeTab].features.map((feature, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: '#D9D9D9',
                                        flexShrink: 0
                                    }} />
                                    <span style={{
                                        fontFamily: "'Quicksand', sans-serif",
                                        fontSize: 'clamp(12px, 2.5vw, 14px)',
                                        color: '#333'
                                    }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Business meeting"
                            className="w-full h-auto rounded-lg object-cover"
                            style={{ maxHeight: '300px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeTab;
