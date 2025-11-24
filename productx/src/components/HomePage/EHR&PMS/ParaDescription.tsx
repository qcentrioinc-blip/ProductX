import { ArrowRight } from "lucide-react";

const ParaDescription = () => {
    return (
        <div className="relative w-full">
            {/* ==== TOP SECTION - Hand Image with Overlays ==== */}
            <div
                className="relative w-full flex items-center justify-center"
                style={{
                    height: '835.09px',
                    padding: '30px 3px',
                    gap: '10px',
                    opacity: 1,
                    margin: '0 auto'
                }}
            >
                {/* Hand Background Image */}
                <img
                    src="/EHRandPMS/Hand.png"
                    alt="Hand"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Content Container - Inside Hand */}
                <div
                    className="relative z-10"
                    style={{
                        width: '1559px',
                        height: '614px',
                        maxWidth: '100%',
                        opacity: 1
                    }}
                >
                    {/* Text Overlay - Top Left */}
                    <div className="absolute top-0 left-0">
                        <h1
                            style={{
                                width: '743.42px',
                                maxWidth: '100%',
                                height: '58px',
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: '48px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#FAFAFA',
                                opacity: 1,
                                margin: 0,
                                marginBottom: '20px'
                            }}
                        >
                            Sed ut perspiciatis Unde Seduo
                        </h1>

                        <p
                            style={{
                                width: '743.42px',
                                maxWidth: '100%',
                                height: '46px',
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '100%',
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
                    <div
                        className="absolute"
                        style={{
                            width: '1359px',
                            height: '475.57px',
                            top: '180.98px',
                            left: '0px',
                            opacity: 1
                        }}
                    >
                        {/* Left Side - Dashboard Image */}
                        <div
                            className="absolute"
                            style={{
                                width: '788px',
                                height: '475.57px',
                                top: '0',
                                left: '-90px',
                                opacity: 1
                            }}
                        >
                            <div className="relative w-full h-full">
                                <img
                                    src="/EHRandPMS/Rectangle.png"
                                    alt="Dashboard Background"
                                    className="w-full h-full object-contain rounded-lg shadow-xl"
                                />
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <img
                                        src="/EHRandPMS/Calender.png"
                                        alt="Healthcare Dashboard"
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Text Box and Green Card */}
                        <div
                            className="absolute"
                            style={{
                                width: '437px',
                                height: '447.59px',
                                top: '14px',
                                left: '962px',
                                opacity: 1
                            }}
                        >
                            {/* Semi-transparent Text Box */}
                            <div
                                style={{
                                    width: '436.69px',
                                    minHeight: '151.65px',
                                    padding: '30px 36px',
                                    gap: '10px',
                                    background: 'rgba(255, 255, 255, 0.09)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderImageSource: 'conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)',
                                    opacity: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <h3
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', sans-serif",
                                        fontWeight: 600,
                                        fontSize: '20px',
                                        lineHeight: '120%',
                                        letterSpacing: '0%',
                                        background: 'linear-gradient(90deg, #28B87B 0%, #FFB96B 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textAlign: 'center',
                                        margin: 0
                                    }}
                                >
                                    Sed ut perspiciatis Unde Seduo ut perspiciatis
                                </h3>
                            </div>

                            {/* Green Card */}
                            <div
                                className="absolute rounded-xl overflow-hidden shadow-2xl"
                                style={{
                                    width: '436.69px',
                                    minHeight: '200px',
                                    top: '192px',
                                    left: '0',
                                    background: '#166D48',
                                    opacity: 1
                                }}
                            >
                                <div className="p-6">
                                    <p
                                        style={{
                                            fontFamily: "'Quicksand', sans-serif",
                                            fontWeight: 400,
                                            fontSize: '16px',
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
                                        <ArrowRight className="w-6 h-6 text-black" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==== MIDDLE SECTION - Light Green with Wave ==== */}
            <div
                className="bg-[#EFF8F5] relative flex items-center justify-center overflow-hidden"
                style={{
                    minHeight: '900px',
                    width: '100%'
                }}
            >
                {/* Wave Background */}
                <div className="absolute pointer-events-none left-0 bottom-20">
                    <img
                        src="/EHRandPMS/Wave.png"
                        alt="Wave"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Main Content Container */}
                <div
                    className="relative"
                    style={{
                        width: '1619.71px',
                        height: '726.21px',
                        maxWidth: '100%',
                        opacity: 1
                    }}
                >
                    {/* Left Side Content */}
                    <div className="relative">
                        {/* Title with Gradient */}
                        <h1
                            style={{
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
                            }}
                        >
                            Sed ut perspiciatis Unde
                        </h1>

                        {/* Contact Button */}
                        <button
                            style={{
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
                            onMouseLeave={(e) => e.currentTarget.style.background = '#141414'}
                        >
                            <a href="/industries/ehr-and-pms/contactus">CONTACT US</a>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </button>

                        {/* Circular Image */}
                        <div
                            className="absolute pointer-events-none"
                            style={{
                                width: '551.27px',
                                height: '551.27px',
                                top: '104px',
                                left: '-165.03px',
                                opacity: 1,
                                zIndex: 20
                            }}
                        >
                            <img
                                src="/EHRandPMS/circular.png"
                                alt="Decorative circular"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side - 4 Cards Grid */}
                    <div
                        className="absolute grid grid-cols-2"
                        style={{
                            width: '870px',
                            top: '0',
                            left: '750px',
                            rowGap: '80px',
                            columnGap: '96px'
                        }}
                    >
                        {[1, 2, 3, 4].map((index) => (
                            <div
                                key={index}
                                style={{
                                    width: '292.99px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="text-[#F4A261]"
                                    style={{
                                        fontSize: '48px',
                                        fontWeight: 300,
                                        lineHeight: '100%',
                                        width: 'fit-content'
                                    }}
                                >
                                    +
                                </div>

                                <h3
                                    style={{
                                        width: '100%',
                                        fontFamily: "'Bricolage Grotesque', sans-serif",
                                        fontWeight: 600,
                                        fontSize: '32px',
                                        lineHeight: '100%',
                                        letterSpacing: '0%',
                                        color: '#141414',
                                        opacity: 1,
                                        margin: 0
                                    }}
                                >
                                    Duis aute irure
                                </h3>

                                <p
                                    style={{
                                        fontFamily: "'Quicksand', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '140%',
                                        letterSpacing: '0%',
                                        color: '#666666',
                                        margin: 0
                                    }}
                                >
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==== BOTTOM SECTION - Stone Image ==== */}
            <div
                className="w-full relative flex items-center justify-center"
                style={{
                    width: '100%',
                    height: '934px',
                    margin: '0 auto',
                    opacity: 1
                }}
            >
                {/* Stone Background with Gradient */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: `linear-gradient(270deg, rgba(0, 0, 0, 0) 2.26%, rgba(1, 98, 57, 0.7) 62.16%, rgba(0, 122, 70, 0.7) 100%), url('/EHRandPMS/Stone.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // transform: 'rotate(-180deg)'
                    }}
                ></div>

                {/* Content Container */}
                <div className="relative w-full h-full">
                    {/* Top Left Green Card */}
                    <div
                        className="absolute z-20"
                        style={{
                            width: '437px',
                            height: '301px',
                            top: '-140px',
                            left: '80px'
                        }}
                    >
                        <div className="bg-[#166D48] rounded-lg overflow-hidden shadow-2xl h-full">
                            <div className="p-10">
                                <p
                                    style={{
                                        fontFamily: "'Quicksand', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '140%',
                                        color: 'rgba(255, 255, 255, 0.95)',
                                        margin: 0
                                    }}
                                >
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
                    <div
                        className="absolute z-20"
                        style={{
                            width: '528px',
                            height: '455px',
                            top: '163px',
                            left: '1041px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px'
                        }}
                    >
                        <div>
                            <h1
                                style={{
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
                                }}
                            >
                                Sed ut perspiciatis Unde Seduo
                            </h1>
                            <p
                                style={{
                                    width: '528px',
                                    height: '69px',
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#CCCCCC',
                                    opacity: 1,
                                    margin: 0
                                }}
                            >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                            </p>
                        </div>

                        <div className="border-t border-white/40 w-full"></div>

                        <div>
                            <p
                                style={{
                                    width: '528px',
                                    height: '69px',
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#CCCCCC',
                                    opacity: 1,
                                    margin: 0
                                }}
                            >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                            </p>
                        </div>

                        <div className="border-t border-white/40 w-full"></div>

                        <div>
                            <p
                                style={{
                                    width: '528px',
                                    height: '69px',
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#CCCCCC',
                                    opacity: 1,
                                    margin: 0
                                }}
                            >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                            </p>
                        </div>
                    </div>

                    {/* Bottom Left - Gradient Box */}
                    <div
                        className="absolute z-20"
                        style={{
                            width: '436px',
                            height: '193px',
                            bottom: '113px',
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
                        }}
                    >
                        <div>
                            <h2
                                style={{
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
                                }}
                            >
                                Sed ut perspiciatis Unde
                            </h2>
                            <h2
                                style={{
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
                                }}
                            >
                                Seduo ut perspiciatis
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==== RESPONSIVE STYLES FOR MOBILE/TABLET ==== */}
            <style>{`
  @media (max-width: 1023px) {
    /* ===== TOP SECTION (Hand) ===== */
    div[style*="height: 835.09px"] {
      height: auto !important;
      min-height: 480px !important;
      padding: 20px 0 !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      justify-content: flex-start !important;
    }
    div[style*="width: 1559px"] {
      position: static !important;
      width: 100% !important;
      height: auto !important;
      max-width: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 20px !important;
      padding: 0 !important;
    }
    div[style*="width: 1359px"] {
      position: static !important;
      width: 100% !important;
      height: auto !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 20px !important;
    }
    div[style*="left: -90px"] {
      position: static !important;
      width: 100% !important;
      height: auto !important;
      left: 0 !important;
      margin-bottom: 20px !important;
    }
    div[style*="left: 962px"] {
      position: static !important;
      width: 100% !important;
      height: auto !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 16px !important;
      left: 0 !important;
      margin-bottom: 0 !important;
    }

    /* Headline and paragraph top/left */
    div[style*="width: 1559px"] > div.absolute.top-0.left-0 {
      position: static !important;
      margin-bottom: 12px !important;
      padding: 0 10px !important;
    }
    div[style*="width: 1559px"] h1 {
      font-size: 28px !important;
      width: 100% !important;
      height: auto !important;
      margin-bottom: 8px !important;
    }
    div[style*="width: 1559px"] p {
      font-size: 14px !important;
      width: 100% !important;
      height: auto !important;
      margin-bottom: 5px !important;
    }

    /* ===== DASHBOARD IMAGE ===== */
    div[style*="width: 788px"] {
      width: 100% !important;
      height: auto !important;
      min-width: 0 !important;
      left: 0 !important;
    }

    /* ===== TEXT BOX AND GREEN CARD ===== */
    div[style*="width: 437px"] {
      width: 100% !important;
      height: auto !important;
      position: static !important;
      left: 0 !important;
      top: 0 !important;
      margin-top: 10px !important;
      margin-bottom: 0 !important;
    }
    div[style*="background: 'rgba(255, 255, 255, 0.09)'"] {
      min-width: 0 !important;
      width: 100% !important;
      padding: 16px 12px !important;
      font-size: 16px !important;
      word-break: break-word !important;
    }
    div[style*="background: #166D48"] {
      min-width: 0 !important;
      width: 100% !important;
      padding: 16px 12px !important;
      position: static !important;
      left: 0 !important;
      top: 0 !important;
      margin-top: 15px !important;
    }

    /* ===== MIDDLE WAVE SECTION ===== */
    div[style*="minHeight: 900px"] {
      min-height: 480px !important;
      padding: 32px 0 !important;
      width: 100% !important;
    }
    div[style*="width: 1619.71px"] {
      width: 100% !important;
      height: auto !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 24px !important;
    }
    div[style*="left: 750px"].grid {
      position: static !important;
      width: 100% !important;
      grid-template-columns: 1fr !important;
      row-gap: 28px !important;
      column-gap: 0 !important;
      left: 0 !important;
      margin-top: 32px !important;
    }
    div[style*="width: 292.99px"] {
      width: 100% !important;
    }
    div[style*="width: 551.27px"], div[style*="height: 551.27px"] {
      max-width: 240px !important;
      width: 55vw !important;
      height: auto !important;
      left: 0 !important;
      top: 80px !important;
      margin: 0 auto !important;
    }
    h1[style*="width: 571.75px"] {
      width: 100% !important;
      font-size: 24px !important;
      left: 0 !important;
      position: static !important;
      text-align: center !important;
    }
    button[style*="left: 20px"] {
      margin: 10px auto !important;
      width: 80vw !important;
      padding: 10px !important;
      font-size: 12px !important;
      left: 0 !important;
      display: block !important;
      min-width: 130px !important;
      max-width: 230px !important;
      position: static !important;
    }

    /* ===== BOTTOM SECTION (Stone) ===== */
    div[style*="height: 934px"] {
      height: auto !important;
      min-height: 450px !important;
      padding: 32px 0 !important;
      background: linear-gradient(180deg, #1a5a3d 0%, #0d3d28 100%) !important;
    }
    div[style*="width: 528px"] {
      width: 100% !important;
      height: auto !important;
      left: 0 !important;
      top: 0 !important;
      gap: 19px !important;
      display: flex !important;
      flex-direction: column !important;
      margin-bottom: 0 !important;
    }
    div[style*="width: 528px"] h1, div[style*="width: 528px"] p {
      width: 100% !important;
      font-size: 22px !important;
      line-height: 120% !important;
    }
    div[style*="height: 301px"] {
      width: 100% !important;
      height: auto !important;
      min-height: 160px !important;
      margin-bottom: 24px !important;
      left: 0 !important;
      top: 0 !important;
    }
    div[style*="bottom: 113px"] {
      position: static !important;
      width: 100% !important;
      height: auto !important;
      left: 0 !important;
      top: 0 !important;
      padding: 32px 10px !important;
      margin-top: 24px !important;
      margin-bottom: 0 !important;
    }
    div[style*="bottom: 113px"] h2 {
      font-size: 19px !important;
    }
  }

  @media (max-width: 639px) {
    div[style*="height: 835.09px"] {
      min-height: 380px !important;
      padding: 10px 0 !important;
    }
    div[style*="minHeight: 900px"] {
      min-height: 340px !important;
      padding: 20px 0 !important;
    }
    div[style*="height: 934px"] {
      min-height: 270px !important;
      padding: 15px 0 !important;
    }
    h1, h2 {
      font-size: 18px !important;
    }
    p {
      font-size: 13px !important;
    }
  }
`}</style>

        </div>
    );
};

export default ParaDescription;
