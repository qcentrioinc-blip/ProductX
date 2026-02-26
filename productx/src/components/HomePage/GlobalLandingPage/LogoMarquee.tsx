"use client";

const logos = [
  { src: "/Logo/logo1.svg", alt: "Logo 1" },
  { src: "/Logo/logo2.svg", alt: "Logo 2" },
  { src: "/Logo/logo3.svg", alt: "Logo 3" },
  { src: "/Logo/logo4.svg", alt: "Logo 4" },
  { src: "/Logo/logo5.svg", alt: "Logo 5" },
  { src: "/Logo/logo6.svg", alt: "Logo 6" },
  { src: "/Logo/logo7.svg", alt: "Logo 7" },
  { src: "/Logo/logo8.svg", alt: "Logo 8" },
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
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "180px",
            background: "linear-gradient(to right, #ffffff 0%, transparent 100%)",
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
                width: "350px",
                height: "200px",
                borderRight: "1px solid #505050",
                padding: "0 40px",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                draggable={false}
                style={{
                  maxWidth: "160px",
                  maxHeight: "70px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: 0.85,
                  userSelect: "none",
                  transition: "opacity 0.3s ease, filter 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                }}
              />
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "120px",
            background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
          }}
        />
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}