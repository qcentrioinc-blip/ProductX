import { Check } from "lucide-react";

const TwoPart = () => {
  return (
    <div className="w-full relative">
      {/* Desktop (lg and up): same as your layout */}
      <div
        className="hidden lg:flex w-full relative"
        style={{
          height: '800px',
          position: 'relative'
        }}
      >
        {/* Left Blue Section */}
        <div
          style={{
            width: '46.6%',
            height: '800px',
            background: '#2B68C3',
            position: 'relative'
          }}
        >
          {/* Asterisk */}
          <span
            style={{
              position: 'absolute',
              width: '97px',
              height: '233px',
              top: '14.81px',
              left: '43.49px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '192.82px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              opacity: 1
            }}
          >
            *
          </span>
        </div>

        {/* Right Beige Section */}
        <div
          style={{
            width: '53.4%',
            height: '800px',
            background: '#F5DDA9',
            position: 'relative'
          }}
        >
          <div
            className="absolute flex flex-col"
            style={{
              width: '546px',
              height: '392px',
              top: '204px',
              left: '142.76px',
              gap: '36px',
              zIndex: 10
            }}
          >
            <h2
              style={{
                width: '545px',
                height: '96px',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#2B68C3'
              }}
            >
              Consecte adipiscing werdasec ku werdasec ku
            </h2>

            <p
              style={{
                width: '545px',
                height: '60px',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#333',
                overflow: 'hidden'
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>

            {/* Checkmark List */}
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check
                    size={24}
                    style={{
                      color: '#2B68C3',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: '16px',
                      color: '#333',
                      lineHeight: '140%'
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlapping Image */}
        <img
          src="/Products/Products2/ImageRadius.png"
          alt="Contractor Information"
          className="absolute"
          style={{
            width: '787.6px',
            height: '503.28px',
            top: '135.55px',
            left: '80px',
            borderRadius: '25px',
            objectFit: 'cover',
            opacity: 1,
            zIndex: 5
          }}
        />
      </div>
      
      {/* Mobile/Tablet Layout (below lg) */}
      <div className="lg:hidden flex flex-col bg-[#F5DDA9] min-h-screen relative">
        <div className="p-6 flex flex-col gap-6 z-10">
          <h2
            className="font-bold"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '28px',
              color: '#2B68C3',
              lineHeight: '110%',
              wordBreak: 'break-word'
            }}
          >
            Consecte adipiscing werdasec ku werdasec ku
          </h2>
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '15px',
              color: '#333',
              lineHeight: '150%'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          </p>
          
          <img
            src="/Products/Products2/ImageRadius.png"
            alt="Contractor Information"
            className="w-full h-auto rounded-xl max-h-[260px] object-cover"
            style={{ margin: '0 auto' }}
          />

          {/* Checkmark List */}
          <div className="flex flex-col gap-3 mt-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={20} style={{ color: '#2B68C3', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: '15px', color: '#333', lineHeight: '140%' }}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoPart;
