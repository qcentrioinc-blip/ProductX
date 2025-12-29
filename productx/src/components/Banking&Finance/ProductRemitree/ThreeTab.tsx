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
            {/* Title & Description - Responsive Positioning */}
            <div
                className="title-container flex flex-col items-center w-full max-w-[900px] px-4 md:px-0 z-10 pointer-events-none"
            >
                <h1
                    className="
                        text-center
                        font-bold
                        font-['Space_Grotesk']
                        text-2xl sm:text-3xl md:text-4xl lg:text-[44px]
                        leading-[1.1]
                        text-[#232323]
                        mt-4 mb-2
                        w-full max-w-screen-sm lg:max-w-[850px]
                    "
                >
                    Sed ut perspiciatis unde
                </h1>
                <p
                    className="
                        text-center
                        font-['Quicksand']
                        font-normal
                        text-[13px] sm:text-[15px] md:text-base
                        text-[#252525]
                        mt-2
                        w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[650px]
                    "
                >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                </p>
            </div>


            {/* DESKTOP VERSION - Content Box */}
            {/* DESKTOP VERSION - Content Box */}
            <div
                className="desktop-content"
                style={{
                    width: '1580px',
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
                                width: '626px',
                                height: '90px',
                                borderTopRightRadius: index === 0 ? '0px' : '8px',
                                borderBottomRightRadius: '8px',
                                borderTopLeftRadius: index === 0 ? '8px' : '0px',
                                borderBottomLeftRadius: '8px',
                                paddingTop: '20px',
                                paddingBottom: '30px',
                                paddingLeft: '100px',
                                paddingRight: '100px',
                                background: activeTab === index ? '#ABCDFF' : 'transparent',
                                color: activeTab === index ? '#2B68C3' : '#666',
                                fontSize: '34px',
                                textAlign: 'left'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Left Content - 50% */}
                <div
                    className="absolute flex flex-col"
                    style={{
                        width: '726px',
                        gap: '32px',
                        top: '217px',
                        left: '64px'
                    }}
                >
                    <h2
                        style={{
                            width: '100%',
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 700,
                            fontSize: '40px',
                            lineHeight: '120%',
                            letterSpacing: '0%',
                            color: '#2B68C3'
                        }}
                    >
                        {tabContents[activeTab].title}
                    </h2>

                    <p
                        style={{
                            width: '100%',
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '160%',
                            letterSpacing: '0%',
                            color: '#333',
                            opacity: 1
                        }}
                    >
                        {tabContents[activeTab].text}
                    </p>
                </div>

                {/* Right Image - 50% */}
                <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Business meeting"
                    className="absolute"
                    style={{
                        width: '790px',
                        height: '468px',
                        top: '150px',
                        left: '790px',
                        borderRadius: '0 0 8px 0',
                        background: '#D9D9D9',
                        objectFit: 'cover',
                        opacity: 1
                    }}
                />
            </div>


            {/* SCALED DESKTOP for iPad Pro (1024px - 1350px) */}
            <div
                className="hidden lg:block lg:max-w-[1366px] mx-auto desktop-layout-wrapper"
            >
                {/* This wrapper is controlled by media queries below to show/scale the desktop content */}
            </div>

            {/* MOBILE & TABLET (iPad Mini/Air) VERSION - Styled to match Desktop Card */}
            <div className="mobile-content w-full flex flex-col items-center px-4 md:px-8 pb-12 relative z-10">

                {/* Gray Card Container */}
                <div
                    className="w-full max-w-[700px] bg-[#ECECEC] rounded-xl overflow-hidden shadow-sm"
                    style={{ minHeight: '500px' }}
                >
                    {/* Tab Header */}
                    <div className="flex w-full overflow-x-auto scrollbar-hide border-b border-gray-300/50">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    flex-1 py-4 px-6 text-sm md:text-lg font-bold whitespace-nowrap transition-colors
                                    ${activeTab === index
                                        ? 'bg-[#ABCDFF] text-[#2B68C3]'
                                        : 'bg-transparent text-[#666] hover:bg-black/5'
                                    }
                                `}
                                style={{ minWidth: "120px" }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Body */}
                    <div className="p-6 md:p-8 flex flex-col gap-6">
                        <h2
                            style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 700,
                                fontSize: 'clamp(24px, 5vw, 32px)',
                                color: '#2B68C3',
                                lineHeight: '110%'
                            }}
                        >
                            {tabContents[activeTab].title}
                        </h2>

                        <p
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontSize: 'clamp(14px, 3vw, 16px)',
                                color: '#333',
                                lineHeight: '150%'
                            }}
                        >
                            {tabContents[activeTab].text}
                        </p>

                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Business meeting"
                            className="w-full h-auto rounded-lg object-cover shadow-sm"
                            style={{ maxHeight: '350px' }}
                        />
                    </div>
                </div>
            </div>


            {/* Responsive Styles */}
            {/* Responsive Styles */}
            <style>{`
    /* Default: Show Mobile Content, Hide Desktop */
    .desktop-content { display: none !important; }
    .mobile-content { display: flex !important; }
    .title-container { position: relative; padding-bottom: 30px; }
    .three-tab-section { height: auto !important; min-height: 100vh; padding-top: 40px; }

    /* MOBILE/TABLET (Below 768px) */
    @media (max-width: 767px) {
        .desktop-content { display: none !important; }
        .mobile-content { display: flex !important; }
        
        .three-tab-section {
            height: auto !important;
            min-height: auto;
            padding-top: 60px;
            padding-bottom: 60px;
            background-size: cover !important;
            flex-direction: column !important; 
            justify-content: flex-start !important;
        }
        
        .title-container {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            padding-bottom: 30px;
            width: 100%;
            max-width: 100%;
            padding-left: 16px; 
            padding-right: 16px;
        }
    }

    /* Smaller tablets (768px - 1023px) */
    @media (min-width: 768px) and (max-width: 1023px) {
        .mobile-content { display: none !important; }
        .desktop-content { display: block !important; }
        
        .desktop-content {
            transform: translateX(-50%) scale(0.55) !important; 
            transform-origin: top center;
            top: 140px !important;
            left: 50% !important;
            margin-left: 0 !important;
            position: absolute !important;
        }
        
        .three-tab-section {
            height: 540px !important;
            overflow: hidden !important;
            padding-bottom: 0 !important;
            padding-top: 0 !important;
            display: block;
        }
        
        .title-container {
            position: absolute;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 900px;
            z-index: 20; 
        }
    }

    /* iPad Pro SPECIFIC (1024px - 1366px) */
    @media (min-width: 1024px) and (max-width: 1366px) {
        .mobile-content { display: none !important; }
        .desktop-content { display: block !important; }
        
        .desktop-content {
            width: 1280px !important;
            height: 618px !important;
            transform: translateX(-50%) scale(0.72) !important; 
            transform-origin: top center;
            top: 250px !important;
            left: 50% !important;
            margin-left: 0 !important;
            position: absolute !important;
        }
        
        .three-tab-section {
            height: 340px !important;
            overflow-x: hidden !important;
            overflow-y: hidden !important;
            padding-bottom: 0 !important;
            padding-top: 0 !important;
            display: block;
        }
        
        .title-container {
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 900px;
            z-index: 20;
            padding-bottom: 0;
        }
    }

    /* STANDARD DESKTOP (1367px - 1450px) */
    @media (min-width: 1367px) and (max-width: 1450px) {
        .mobile-content { display: none !important; }
        .desktop-content { display: block !important; }

        .three-tab-section {
            display: block;
            padding-top: 0;
            padding-bottom: 0;
            height: 620px !important;
            overflow: hidden !important;
        }

        .title-container {
            position: absolute;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 900px;
            z-index: 20; 
        }

        .desktop-content {
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) scale(0.65) !important;
            transform-origin: top center;
            margin: 0 !important;
            top: 160px !important; 
        }
    }

    /* LARGE DESKTOP (> 1450px) */
    @media (min-width: 1451px) {
        .mobile-content { display: none !important; }
        .desktop-content { display: block !important; }

        .three-tab-section {
            display: block;
            padding-top: 0;
            padding-bottom: 0;
            height: 980px !important;
        }

        .title-container {
            position: absolute;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 900px;
            z-index: 20; 
        }

        .desktop-content {
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin: 0 !important;
            top: 250px !important; 
        }
    }
`}</style>

        </div>
    );
};

export default ThreeTab;
