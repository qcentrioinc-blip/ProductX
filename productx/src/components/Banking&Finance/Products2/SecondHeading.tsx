import ShortNav from "./ShortNav";

const SecondHeading = () => {
  return (
    <>
      <ShortNav />
      
      <div
        className="second-heading-section w-full relative flex items-center justify-center"
        style={{
          width: '100%',
          height: '363px',
          margin: '0 auto',
          background: '#EAF2FB',
          opacity: 1
        }}
      >
        {/* DESKTOP VERSION - Content Box */}
        <div
          className="desktop-content absolute flex flex-col"
          style={{
            width: '655px',
            height: '133px',
            top: '150px',
            gap: '16px'
          }}
        >
          {/* Title */}
          <h1
            style={{
              width: '655px',
              height: '58px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '120%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#2B68C3',
              opacity: 1
            }}
          >
            Lorem ipsum dolor sit amet
          </h1>

          {/* Description */}
          <p
            style={{
              width: '619.93px',
              height: '60px',
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#141414',
              opacity: 1,
              margin: '0 auto',
              overflow: 'hidden'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip magna aliqua. Ut enim
          </p>
        </div>

        {/* MOBILE/TABLET VERSION */}
        <div className="mobile-content w-full h-full flex flex-col items-center justify-center px-6 py-8">
          <h1
            className="font-bold text-center mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '32px',
              color: '#2B68C3',
              lineHeight: '120%'
            }}
          >
            Lorem ipsum dolor sit amet
          </h1>
          <p
            className="text-center"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '14px',
              color: '#141414',
              lineHeight: '140%'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip magna aliqua. Ut enim
          </p>
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
            display: flex !important;
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
          
          .second-heading-section {
            height: auto !important;
            min-height: 300px !important;
            padding: 40px 0 !important;
          }
        }

        /* Tablet - Medium screens (640px - 1023px) */
        @media (min-width: 640px) and (max-width: 1023px) {
          .mobile-content h1 {
            font-size: 40px !important;
            margin-bottom: 20px !important;
          }
          
          .mobile-content p {
            font-size: 15px !important;
            max-width: 600px !important;
          }
        }

        /* Mobile - Small screens (below 640px) */
        @media (max-width: 639px) {
          .mobile-content h1 {
            font-size: 28px !important;
            margin-bottom: 16px !important;
          }
          
          .mobile-content p {
            font-size: 13px !important;
            line-height: 150% !important;
          }
          
          .second-heading-section {
            min-height: 250px !important;
            padding: 30px 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default SecondHeading;
