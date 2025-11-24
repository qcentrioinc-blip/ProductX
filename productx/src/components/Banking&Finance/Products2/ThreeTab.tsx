import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ThreeTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Suwrepher', 'Adipiscing', 'Consecte'];

    const tabContents = [
        {
            title: 'Suwrepher adipiscing',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Adipiscing consecte',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Consecte adipiscing',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];

    return (
        <div
            className="three-tab-section w-full relative flex items-center justify-center overflow-hidden"
            style={{
                width: '100%',
                height: '938px',
                margin: '0 auto',
                background: '#FAFAFA',
                backgroundImage: 'url("/Products/Products2/Draxora.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Title & Description - Centered Top */}
            <div
                className="absolute left-1/2 flex flex-col items-center"
                style={{
                    top: '70px',
                    transform: 'translateX(-50%)',
                    zIndex: 5,
                    width: '900px',
                    pointerEvents: 'none'
                }}
            >
                <h1
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '44px',
                        color: '#232323',
                        margin: 0,
                        textAlign: 'center',
                        lineHeight: '110%'
                    }}
                >
                    Sed ut perspiciatis unde
                </h1>
                <p
                    style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: 400,
                        fontSize: '15px',
                        color: '#252525',
                        margin: 0,
                        marginTop: '18px',
                        textAlign: 'center',
                        maxWidth: '650px'
                    }}
                >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                </p>
            </div>

            {/* DESKTOP VERSION - Content Box */}
            <div
                className="desktop-content"
                style={{
                    width: '1280px',
                    height: '618px',
                    borderRadius: '8px',
                    background: '#ECECEC',
                    overflow: 'visible',
                    position: 'relative',
                    top: '120px'
                }}
            >
                {/* Tab Navigation */}
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className="font-semibold transition-all duration-300"
                            style={{
                                width: '480px',
                                height: '120px',
                                borderTopRightRadius: index === 0 ? '0px' : '8px',
                                borderBottomRightRadius: '8px',
                                borderTopLeftRadius: index === 0 ? '8px' : '0px',
                                borderBottomLeftRadius: '8px',
                                paddingTop: '44px',
                                paddingBottom: '44px',
                                paddingLeft: '136px',
                                paddingRight: '136px',
                                background: activeTab === index ? '#ABCDFF' : 'transparent',
                                color: activeTab === index ? '#2B68C3' : '#666',
                                fontSize: '35px',
                                textAlign: 'left'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Left Content */}
                <div
                    className="absolute flex flex-col"
                    style={{
                        width: '518px',
                        gap: '32px',
                        top: '217px',
                        left: '64px'
                    }}
                >
                    <h2
                        style={{
                            width: '518px',
                            height: '48px',
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 700,
                            fontSize: '40px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#2B68C3'
                        }}
                    >
                        {tabContents[activeTab].title}
                    </h2>

                    <p
                        style={{
                            width: '518px',
                            height: '100px',
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#333',
                            opacity: 1,
                            overflow: 'hidden'
                        }}
                    >
                        {tabContents[activeTab].text}
                    </p>
                </div>

                {/* Right Image */}
                <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Business meeting"
                    className="absolute"
                    style={{
                        width: '654px',
                        height: '468px',
                        top: '150px',
                        left: '626px',
                        borderRadius: '0 0 8px 0',
                        background: '#D9D9D9',
                        objectFit: 'cover',
                        opacity: 1
                    }}
                />
            </div>

            {/* MOBILE/TABLET VERSION */}
            <div className="mobile-content w-full h-full flex flex-col p-6 bg-white/95">
                {/* Mobile Tabs - Horizontal Scroll */}
                <div className="overflow-x-auto scrollbar-hide mb-6">
                    <div className="flex gap-3 min-w-max">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                                    activeTab === index
                                        ? 'bg-[#ABCDFF] text-[#2B68C3]'
                                        : 'bg-gray-200 text-gray-600'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Content */}
                <div className="space-y-5 overflow-y-auto flex-1">
                    <h2
                        className="font-bold"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontSize: '28px',
                            color: '#2B68C3',
                            lineHeight: '120%'
                        }}
                    >
                        {tabContents[activeTab].title}
                    </h2>
                    
                    <p
                        style={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '14px',
                            color: '#333',
                            lineHeight: '150%'
                        }}
                    >
                        {tabContents[activeTab].text}
                    </p>
                    
                    <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Business meeting"
                        className="w-full h-auto rounded-lg"
                    />
                    
                    <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors">
                        CONTACT US
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                /* Desktop Only - lg and above (1024px+) */
                @media (min-width: 1024px) {
                    .mobile-content {
                        display: none !important;
                    }
                    .desktop-content {
                        display: block !important;
                    }
                }

                /* Mobile/Tablet - below lg (below 1024px) */
                @media (max-width: 1023px) {
                    .desktop-content {
                        display: none !important;
                    }
                    .mobile-content {
                        display: flex !important;
                    }
                    
                    .three-tab-section {
                        height: auto !important;
                        min-height: 100vh !important;
                        background-size: cover !important;
                    }
                }

                /* Tablet - Medium screens (640px - 1023px) */
                @media (min-width: 640px) and (max-width: 1023px) {
                    .mobile-content h2 {
                        font-size: 32px !important;
                    }
                    
                    .mobile-content p {
                        font-size: 15px !important;
                    }
                    
                    .mobile-content button {
                        padding: 12px 28px !important;
                    }
                }

                /* Mobile - Small screens (below 640px) */
                @media (max-width: 639px) {
                    .mobile-content h2 {
                        font-size: 24px !important;
                    }
                    
                    .mobile-content p {
                        font-size: 13px !important;
                    }
                    
                    .mobile-content {
                        padding: 20px !important;
                    }
                }

                /* Hide scrollbar */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    )
}

export default ThreeTab;
