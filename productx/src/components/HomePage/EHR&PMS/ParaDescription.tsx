import { ArrowRight } from "lucide-react";

const ParaDescription = () => {
    return (
        <div className="relative w-full">
            {/* ==== TOP SECTION - Hand Image with Overlays ==== */}
            <div className="relative w-full flex items-center justify-center overflow-hidden min-h-[600px] lg:min-h-0 lg:h-[835.09px] py-8 lg:py-[30px] px-4 lg:px-[3px]">
                {/* Hand Background Image - Desktop only */}
                <img
                    src="/EHRandPMS/Hand.png"
                    alt="Hand"
                    className="hidden lg:block absolute inset-0 w-full h-full object-cover"
                />

                {/* Mobile/Tablet: Gradient Background */}
                <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>

                {/* Content Container - Inside Hand */}
                <div
                    className="relative z-10 w-full max-w-[1559px] mx-auto lg:h-[614px]"
                >
                    {/* Text Overlay - Top Left */}
                    <div className="relative lg:absolute lg:top-0 lg:left-0 mb-8 lg:mb-0">
                        <h1
                            className="text-white font-semibold mb-4 lg:mb-5"
                            style={{
                                maxWidth: '743.42px',
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '110%',
                                letterSpacing: '0%',
                                color: '#FAFAFA',
                                opacity: 1,
                                margin: 0,
                                marginBottom: 'clamp(16px, 2vw, 20px)'
                            }}
                        >
                            Sed ut perspiciatis Unde Seduo
                        </h1>

                        <p
                            className="text-gray-300"
                            style={{
                                maxWidth: '743.42px',
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, 2vw, 18px)',
                                lineHeight: '140%',
                                letterSpacing: '0%',
                                color: '#CCCCCC',
                                opacity: 1,
                                margin: 0
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                        </p>
                    </div>

                    {/* Bottom Content - Image and Card Container */}
                    <div className="relative lg:absolute w-full lg:w-[1359px] lg:h-[475.57px] lg:top-[180.98px] lg:left-0 flex flex-col lg:block gap-6 lg:gap-0">

                        {/* Left Side - Dashboard Image */}
                        <div className="relative lg:absolute w-full lg:w-[788px] lg:h-[475.57px] lg:top-0 lg:-left-[90px]">
                            <div className="relative w-full aspect-[788/475.57] lg:h-full">
                                <img
                                    src="/EHRandPMS/Rectangle.png"
                                    alt="Dashboard Background"
                                    className="w-full h-full object-contain rounded-lg shadow-xl"
                                />
                                <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-6">
                                    <img
                                        src="/EHRandPMS/Calender.png"
                                        alt="Healthcare Dashboard"
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Text Box and Green Card */}
                        <div className="relative lg:absolute w-full lg:w-[437px] lg:h-[447.59px] lg:top-[14px] lg:left-[962px] flex flex-col gap-6 lg:gap-0">

                            {/* Semi-transparent Text Box */}
                            <div
                                className="w-full lg:w-[436.69px] p-6 lg:p-[30px_36px] rounded-xl flex items-center justify-center"
                                style={{
                                    minHeight: '151.65px',
                                    background: 'rgba(255, 255, 255, 0.09)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderImageSource: 'conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)',
                                    opacity: 1,
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <h3
                                    className="font-semibold text-left"
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', sans-serif",
                                        fontWeight: 600,
                                        fontSize: 'clamp(24px, 4vw, 32px)',
                                        lineHeight: '120%',
                                        letterSpacing: '0%',
                                        background: 'linear-gradient(90deg, #28B87B 0%, #FFB96B 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        margin: 0
                                    }}
                                >
                                    Sed ut perspiciatis <br /> Unde Seduo ut
                                </h3>
                            </div>

                            {/* Green Card */}
                            <div
                                className="relative lg:absolute w-full lg:w-[436.69px] rounded-xl overflow-hidden shadow-2xl lg:top-[192px] lg:left-0"
                                style={{
                                    minHeight: '200px',
                                    background: '#166D48',
                                    opacity: 1
                                }}
                            >
                                <div className="p-6">
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: "'Quicksand', sans-serif",
                                            fontWeight: 400,
                                            fontSize: 'clamp(14px, 2vw, 16px)',
                                            lineHeight: '150%',
                                            color: 'rgba(255, 255, 255, 0.9)'
                                        }}
                                    >
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                                    </p>
                                </div>
                                <div className="border-t border-white/20 w-full"></div>
                                <div className="bg-[#166D48] p-4 flex justify-end">
                                    <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all">
                                        <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ==== MIDDLE SECTION - Light Green with Wave ==== */}
            <div className="bg-[#EFF8F5] relative flex items-center justify-center overflow-hidden"
                style={{
                    minHeight: '900px',
                    width: '100%'
                }}>
                {/* Wave Background - Desktop only */}
                <div className="absolute pointer-events-none left-0 bottom-20 hidden lg:block">
                    <img
                        src="/EHRandPMS/Wave.png"
                        alt="Wave"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* DESKTOP LAYOUT - 1024px and above - PIXEL PERFECT UNCHANGED */}
                <div className="hidden lg:block relative"
                    style={{
                        width: '1619.71px',
                        height: '726.21px',
                        maxWidth: '100%',
                        opacity: 1
                    }}>
                    {/* Left Side Content */}
                    <div className="relative">
                        {/* Title with Gradient */}
                        <h1 style={{
                            position: 'absolute',
                            width: '571.75px',
                            height: '58px',
                            top: '0',
                            left: '20px',
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: '48px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            background: 'linear-gradient(90deg, #28B87B 0%, #FFB96B 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            opacity: 1,
                            margin: 0,
                            zIndex: 30
                        }}>
                            Sed ut perspiciatis Unde
                        </h1>

                        {/* Contact Button */}
                        <button style={{
                            position: 'absolute',
                            top: '70px',
                            left: '20px',
                            background: '#141414',
                            color: '#FFFFFF',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 30,
                            transition: 'background 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#2A2A2A'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#141414'}>
                            <a href="/industries/ehr-and-pms/contactus">CONTACT US</a>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </button>

                        {/* Circular Image */}
                        <div className="absolute pointer-events-none"
                            style={{
                                width: '551.27px',
                                height: '551.27px',
                                top: '104px',
                                left: '-165.03px',
                                opacity: 1,
                                zIndex: 20
                            }}>
                            <img
                                src="/EHRandPMS/circular.png"
                                alt="Decorative circular"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side - 4 Cards Grid */}
                    <div className="absolute grid grid-cols-2"
                        style={{
                            width: '870px',
                            top: '0',
                            left: '750px',
                            rowGap: '80px',
                            columnGap: '96px'
                        }}>
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index}
                                style={{
                                    width: '292.99px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                    opacity: 1
                                }}>
                                <div className="text-[#F4A261]"
                                    style={{
                                        fontSize: '48px',
                                        fontWeight: 400,
                                        lineHeight: '100%',
                                        width: 'fit-content'
                                    }}>
                                    +
                                </div>

                                <h3 style={{
                                    width: '100%',
                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#141414',
                                    opacity: 1,
                                    margin: 0
                                }}>
                                    Duis aute irure
                                </h3>

                                <p style={{
                                    fontFamily: "'Schibsted Grotesk', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '140%',
                                    letterSpacing: '0%',
                                    color: '#141414',
                                    margin: 0
                                }}>
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TABLET (768px to 1023px) */}
                <div className="hidden md:block lg:hidden w-full py-16 px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: '40px',
                                lineHeight: '100%',
                                background: 'linear-gradient(90deg, #28B87B 0%, #FFB96B 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '24px'
                            }}>
                                Sed ut perspiciatis Unde
                            </h1>

                            <button style={{
                                background: '#141414',
                                color: '#FFFFFF',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '14px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                CONTACT US
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>

                        {/* Decorative Circle */}
                        <div className="flex justify-center mb-12">
                            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#28B87B]/20 to-[#FFB96B]/20" />
                        </div>

                        {/* Cards - 2 columns */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                            {[1, 2, 3, 4].map((index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="text-[#F4A261] text-4xl font-normal leading-[100%]">+</div>
                                    <h3 style={{
                                        fontFamily: "'Bricolage Grotesque', sans-serif",
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        lineHeight: '100%',
                                        color: '#141414',
                                        margin: 0
                                    }}>
                                        Duis aute irure
                                    </h3>
                                    <p style={{
                                        fontFamily: "'Schibsted Grotesk', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '140%',
                                        color: '#141414',
                                        margin: 0
                                    }}>
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MOBILE (below 768px) */}
                <div className="block md:hidden w-full py-12 px-6">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: '32px',
                            lineHeight: '110%',
                            background: 'linear-gradient(90deg, #28B87B 0%, #FFB96B 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '20px'
                        }}>
                            Sed ut perspiciatis Unde
                        </h1>

                        <button style={{
                            background: '#141414',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '14px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            CONTACT US
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </button>
                    </div>

                    {/* Decorative Circle */}
                    <div className="flex justify-center mb-8">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#28B87B]/20 to-[#FFB96B]/20" />
                    </div>

                    {/* Cards - Single column */}
                    <div className="flex flex-col gap-6">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="bg-white/40 backdrop-blur-sm p-6 rounded-xl flex flex-col gap-3">
                                <div className="text-[#F4A261] text-3xl font-normal leading-[100%]">+</div>
                                <h3 style={{
                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '22px',
                                    lineHeight: '110%',
                                    color: '#141414',
                                    margin: 0
                                }}>
                                    Duis aute irure
                                </h3>
                                <p style={{
                                    fontFamily: "'Schibsted Grotesk', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '15px',
                                    lineHeight: '140%',
                                    color: '#141414',
                                    margin: 0
                                }}>
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==== BOTTOM SECTION - Stone Image ==== */}
            <div className="hidden lg:block w-full relative flex items-center justify-center"
                style={{
                    width: '100%',
                    height: '734px',
                    margin: '0 auto',
                    opacity: 1
                }}>
                {/* Stone Background with Gradient */}
                <div className="absolute inset-0 w-full h-full"
                    style={{
                        background: `linear-gradient(270deg, rgba(0, 0, 0, 0) 2.26%, rgba(1, 98, 57, 0.7) 62.16%, rgba(0, 122, 70, 0.7) 100%), url('/EHRandPMS/Stone.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                {/* Content Container */}
                <div className="relative w-full h-full">
                    {/* Top Left Green Card */}
                    <div className="absolute z-20"
                        style={{
                            width: '437px',
                            height: '301px',
                            top: '-140px',
                            left: '80px'
                        }}>
                        <div className="bg-[#166D48] rounded-lg overflow-hidden shadow-2xl h-full">
                            <div className="p-10">
                                <p style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '140%',
                                    color: 'rgba(255, 255, 255, 0.95)',
                                    margin: 0
                                }}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                                </p>
                            </div>
                            <div className="border-t border-white/30 w-full"></div>
                            <div className="bg-[#166D48] p-5 flex justify-end">
                                <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all">
                                    <ArrowRight className="w-6 h-6 text-black" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="absolute z-20"
                        style={{
                            width: '528px',
                            height: '455px',
                            top: '163px',
                            left: '980px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px'
                        }}>
                        <div>
                            <h1 style={{
                                width: '528px',
                                height: '116px',
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: '48px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#FAFAFA',
                                opacity: 1,
                                margin: 0,
                                marginBottom: '20px'
                            }}>
                                Sed ut perspiciatis Unde Seduo
                            </h1>
                            <p style={{
                                width: '528px',
                                height: '69px',
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '130%',
                                letterSpacing: '0%',
                                color: '#CCCCCC',
                                opacity: 1,
                                margin: 0
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                            </p>
                        </div>

                        <div className="border-t border-white/40 w-full"></div>

                        <div>
                            <p style={{
                                width: '528px',
                                height: '69px',
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '130%',
                                letterSpacing: '0%',
                                color: '#CCCCCC',
                                opacity: 1,
                                margin: 0
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                            </p>
                        </div>

                        <div className="border-t border-white/40 w-full"></div>

                        <div>
                            <p style={{
                                width: '528px',
                                height: '69px',
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '130%',
                                letterSpacing: '0%',
                                color: '#CCCCCC',
                                opacity: 1,
                                margin: 0
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                            </p>
                        </div>
                    </div>

                    {/* Bottom Left - Gradient Box */}
                    <div className="absolute z-20"
                        style={{
                            width: '436px',
                            height: '193px',
                            bottom: '123px',
                            left: '80px',
                            gap: '10px',
                            padding: '93px 36px',
                            background: 'rgba(255, 255, 255, 0.09)',
                            border: '1px solid',
                            borderImageSource: 'conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)',
                            boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 1
                        }}>
                        <div>
                            <h2 style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: '28px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                background: 'linear-gradient(90deg, #5FCFA0 0%, #F4A261 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                margin: 0
                            }}>
                                Sed ut perspiciatis Unde
                            </h2>
                            <h2 style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: '28px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                background: 'linear-gradient(90deg, #5FCFA0 0%, #F4A261 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                margin: 0,
                                marginTop: '8px'
                            }}>
                                Seduo ut perspiciatis
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* TABLET (768px to 1023px) */}
            <div className="hidden md:block lg:hidden w-full relative py-16 px-8"
                style={{
                    minHeight: '800px',
                    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 2.26%, rgba(1, 98, 57, 0.7) 62.16%, rgba(0, 122, 70, 0.7) 100%), #1a4d3a',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Green Card */}
                    <div className="bg-[#166D48] rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8">
                            <p style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '15px',
                                lineHeight: '140%',
                                color: 'rgba(255, 255, 255, 0.95)',
                                margin: 0
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>
                        </div>
                        <div className="border-t border-white/30 w-full"></div>
                        <div className="bg-[#166D48] p-4 flex justify-end">
                            <button className="bg-white rounded-full p-2.5 hover:bg-gray-100 transition-all">
                                <ArrowRight className="w-5 h-5 text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: '36px',
                                lineHeight: '110%',
                                color: '#FAFAFA',
                                marginBottom: '16px'
                            }}>
                                Sed ut perspiciatis Unde Seduo
                            </h1>
                            <p style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '140%',
                                color: '#CCCCCC'
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                            </p>
                        </div>

                        <div className="border-t border-white/40 w-full"></div>

                        <p style={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '140%',
                            color: '#CCCCCC'
                        }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                        </p>

                        <div className="border-t border-white/40 w-full"></div>

                        <p style={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '140%',
                            color: '#CCCCCC'
                        }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                        </p>
                    </div>

                    {/* Gradient Box */}
                    <div style={{
                        padding: '48px 32px',
                        background: 'rgba(255, 255, 255, 0.09)',
                        border: '1px solid rgba(94, 94, 94, 0.5)',
                        boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '110%',
                            background: 'linear-gradient(90deg, #5FCFA0 0%, #F4A261 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Sed ut perspiciatis Unde Seduo ut perspiciatis
                        </h2>
                    </div>
                </div>
            </div>

            {/* MOBILE (below 768px) */}
            <div className="block md:hidden w-full relative py-12 px-6"
                style={{
                    minHeight: '700px',
                    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 2.26%, rgba(1, 98, 57, 0.7) 62.16%, rgba(0, 122, 70, 0.7) 100%), #1a4d3a',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="space-y-8">
                    {/* Green Card */}
                    <div className="bg-[#166D48] rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-6">
                            <p style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '140%',
                                color: 'rgba(255, 255, 255, 0.95)',
                                margin: 0
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="border-t border-white/30 w-full"></div>
                        <div className="bg-[#166D48] p-4 flex justify-end">
                            <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition-all">
                                <ArrowRight className="w-5 h-5 text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: '28px',
                                lineHeight: '110%',
                                color: '#FAFAFA',
                                marginBottom: '14px'
                            }}>
                                Sed ut perspiciatis Unde Seduo
                            </h1>
                            <p style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '15px',
                                lineHeight: '140%',
                                color: '#CCCCCC'
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="border-t border-white/40 w-full"></div>

                        <p style={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '140%',
                            color: '#CCCCCC'
                        }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum.
                        </p>

                        <div className="border-t border-white/40 w-full"></div>

                        <p style={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '140%',
                            color: '#CCCCCC'
                        }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    {/* Gradient Box */}
                    <div style={{
                        padding: '36px 24px',
                        background: 'rgba(255, 255, 255, 0.09)',
                        border: '1px solid rgba(94, 94, 94, 0.5)',
                        boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '110%',
                            background: 'linear-gradient(90deg, #5FCFA0 0%, #F4A261 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Sed ut perspiciatis Unde Seduo ut perspiciatis
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParaDescription;
