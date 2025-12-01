const ThirdCards = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center relative bg-[#FAFAFA]"
      style={{
        height: '320px',
        margin: '0 auto',
        padding: '0 20px'
      }}
    >
      {/* Content Container: Heading, Cards (Desktop Only) */}
      <div
        className="flex flex-col items-center w-full max-w-[872px] gap-8 mt-20 hidden lg:flex"
        style={{
          marginTop: '0px'
        }}
      >
        <h1
          className="text-center font-bold"
          style={{
            fontSize: '48px',
            color: ' #2B68C3',
            fontWeight: 600,
            lineHeight: '100%'
          }}
        >
          Sed ut perspiciatis unde
        </h1>
        <div
          className="flex justify-center w-full"
          style={{
            gap: '24px'
          }}
        >
          {[1,2,3,4].map((id) => (
            <div
              key={id}
              style={{
                width: '200px',
                height: '80px',
                borderRadius: '8px',
                background: '#D9D9D9'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Heading & Animation Row */}
      <div className="lg:hidden w-full flex flex-col items-center py-8">
        <h1
          className="text-center font-bold mb-6"
          style={{
            fontSize: '24px',
            color: '#1E5BA8',
            fontWeight: 700,
            lineHeight: '1.2'
          }}
        >
          Sed ut perspiciatis unde
        </h1>
        {/* Animated / Scrollable Cards */}
        <div className="w-full overflow-x-auto">
          <div className="flex animate-scroll-rtl" style={{ minWidth: '140vw', gap: '16px' }}>
            {/* 8 cards, for seamless scroll */}
            {[1,2,3,4,5,6,7,8].map((id) => (
              <div
                key={id}
                className="flex-shrink-0"
                style={{
                  width: '70vw',
                  maxWidth: '200px',
                  height: '64px',
                  borderRadius: '8px',
                  background: '#D9D9D9'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 15s linear infinite;
        }
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ThirdCards;
