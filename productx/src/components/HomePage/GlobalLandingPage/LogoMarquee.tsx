"use client";

const logos = [
  { src: "/Logo/logo1.svg", alt: "Logo 1", label: "ALMANAC" },
  { src: "/Logo/logo2.svg", alt: "Logo 2", label: "Concilier" },
  { src: "/Logo/logo3.svg", alt: "Logo 3", label: "PAGO" },
  { src: "/Logo/logo4.svg", alt: "Logo 4", label: "Sherlock" },
  { src: "/Logo/logo5.svg", alt: "Logo 5", label: "Product 5" },
  { src: "/Logo/logo6.svg", alt: "Logo 6", label: "Product 6" },
  { src: "/Logo/logo7.svg", alt: "Logo 7", label: "Product 7" },
  { src: "/Logo/logo8.svg", alt: "Logo 8", label: "Product 8" },
];

export default function LogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <div
      className="w-full bg-[#fcfcfc] mt-1 overflow-hidden"
      style={{
        borderTop: "2px solid #efefef",
        borderBottom: "2px solid #efefef",
        
      }}
    >
      <div className="relative flex">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10  "
          style={{
            width: "180px",
            background:
              "linear-gradient(to right, #ffffff 0%, transparent 100%)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex items-center"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                // Desktop: 350×200, Mobile: 160×80
                width: "clamp(160px, 22vw, 350px)",
                height: "clamp(80px, 10vw, 200px)",
                borderRight: "1px solid #e0e0e0",
                padding: "0 clamp(16px, 2vw, 40px)",
              }}
            >
              <span
                className="product-name text-[18px] xl:text-[28px]"
                style={{
                  
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "#b5b5b5",
                  filter: "grayscale(100%)",
                  opacity: 1,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  userSelect: "none",
                  fontFamily:"bricolage,sans-serif"
                }}
              >
                {logo.label || logo.alt}
              </span>
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "120px",
            background:
              "linear-gradient(to left, #ffffff 0%, transparent 100%)",
          }}
        />
      </div>

      <style>{`
        .product-name:hover {
          filter: grayscale(0%);
          opacity: 1;
          color: #000;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}