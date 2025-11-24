export default function ThreeCards() {
  return (
    <div className="w-full flex items-center justify-center bg-[#F3F3F3]">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative" style={{ width: '1440px', height: '868px' }}>
        <div
          className="absolute flex flex-col"
          style={{
            width: '1283px',
            height: '548px',
            top: '160px',
            left: '80px',
            gap: '32px'
          }}
        >
          <h1
            style={{
              width: '1283px',
              height: '58px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '120%',
              color: '#2A2A2A',
              margin: 0,
            }}
          >
            Lorem ipsum dolor , consectetur adipis
          </h1>

          <div className="flex" style={{ gap: '32px', height: '458px' }}>
            {/* Left Card */}
            <div
              style={{
                width: '685px',
                height: '458px',
                borderRadius: '8px',
                background: '#E4F0FF',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#FFF',
                  borderRadius: '50%'
                }}
              />
              <h2
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '140%',
                  color: '#2A2A2A',
                  margin: 0
                }}
              >
                Duis aute irure dolor in
              </h2>
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '150%',
                  color: '#333333',
                  margin: 0
                }}
              >
                Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore
              </p>

              <div
                style={{
                  position: 'absolute',
                  width: '612.66px',
                  height: '227.04px',
                  top: '234.28px',
                  left: '32px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  background: '#FFF'
                }}
              />
            </div>

            {/* Right Cards */}
            <div className="flex flex-col" style={{ gap: '24px' }}>
              {[1, 2].map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '566px',
                    height: '217px',
                    borderRadius: '8px',
                    background: '#E4F0FF',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#FFF',
                      borderRadius: '50%'
                    }}
                  />
                  <h2
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '140%',
                      color: '#2A2A2A',
                      margin: 0
                    }}
                  >
                    Duis aute irure dolor in
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '150%',
                      color: '#333333',
                      margin: 0
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Responsive */}
      <div className="lg:hidden w-full px-6 py-12 flex flex-col items-center gap-8 bg-[#F3F3F3]">
        <h1 className="font-bold text-[32px] text-[#2A2A2A] leading-[120%] text-center max-w-full" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Lorem ipsum dolor , consectetur adipis
        </h1>

        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="w-full max-w-md rounded-lg bg-[#E4F0FF] p-6 flex flex-col gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-full" />
            <h2 className="font-bold text-xl text-[#2A2A2A]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Duis aute irure dolor in
            </h2>
            <p className="text-base text-[#333333]" style={{ fontFamily: "'Quicksand', sans-serif", lineHeight: '150%' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
