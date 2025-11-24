const ShortDesc = () => {
  return (
    <div 
      className="w-full relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-0 py-8 sm:py-10 lg:py-0"
      style={{
        width: '100%',
        minHeight: '600px',
        height: 'auto',
        background: '#EDE4CA',
        margin: '0 auto',
        opacity: 1
      }}
    >
      {/* Content Container */}
      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: '1280px',
          width: '100%',
          paddingTop: '0',
          paddingLeft: '0',
          opacity: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        {/* Title with Gradient - RESPONSIVE */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            maxWidth: '100%',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 600,
            fontSize: window.innerWidth >= 1024 ? '48px' : undefined,
            lineHeight: '110%',
            letterSpacing: '0%',
            background: 'linear-gradient(90deg, #166D48 0%, #F99526 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 1,
            margin: 0
          }}
        >
          Sed ut perspiciatis Unde Seduo ut perspiciatis
        </h1>

        {/* Description Paragraph 1 - RESPONSIVE */}
        <p
          className="text-sm sm:text-base md:text-lg"
          style={{
            maxWidth: '100%',
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            fontSize: window.innerWidth >= 1024 ? '18px' : undefined,
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#141414',
            opacity: 1,
            margin: 0
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br /> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
        </p>

        {/* Description Paragraph 2 - RESPONSIVE */}
        <p
          className="text-sm sm:text-base md:text-lg"
          style={{
            maxWidth: '100%',
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            fontSize: window.innerWidth >= 1024 ? '18px' : undefined,
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#141414',
            opacity: 1,
            margin: 0
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br /> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
        </p>

        {/* Contact Us Button - RESPONSIVE */}
        <button
          className="w-full sm:w-auto"
          style={{
            maxWidth: '185px',
            minWidth: '160px',
            height: '48px',
            background: '#141414',
            borderRadius: '8px',
            padding: '12px 24px',
            gap: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            opacity: 1,
            fontFamily: "'Arial', sans-serif",
            fontWeight: 600,
            fontSize: '14px',
            color: '#FFFFFF',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#2A2A2A'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#141414'}
        >
          <a href="/industries/ehr-and-pms/contactus">CONTACT US</a>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </button>
      </div>

      {/* Wave Bottom Image - Positioned at bottom right - RESPONSIVE */}
      <div
        className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-0 pointer-events-none"
        style={{
          width: window.innerWidth < 640 ? '70%' : window.innerWidth < 1024 ? '60%' : '50%',
          height: 'auto',
          opacity: 0.6
        }}
      >
        <img
          src="/EHRandPMS/WaveBottom.png"
          alt=""
          className="w-full h-auto object-contain"
          style={{
            display: 'block'
          }}
        />
      </div>
    </div>
  );
};

export default ShortDesc;
