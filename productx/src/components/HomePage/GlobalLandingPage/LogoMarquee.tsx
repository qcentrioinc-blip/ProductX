"use client";

const logos = [
  { label: "Bankfair", tagline: "Core Banking" },
  { label: "PAGO", tagline: "Payment System" },
  { label: "Sherlock", tagline: "AML Monitoring" },
  { label: "Remitree", tagline: "Cross-border Remittance" },
  { label: "LOS", tagline: "Loan Origination System" },
  { label: "ALMANAC", tagline: "Asset Management" },
  { label: "SAMS", tagline: "NPA Tracking" },
  { label: "Conciliare", tagline: "AI Reconciliation" },
  { label: "IOS", tagline: "Internet & Mobile Banking" },
  { label: "Diligent", tagline: "KYC & CDD Platform" },
  { label: "Cloud Diet", tagline: "Cloud Optimization AI" },
  { label: "Unified Health", tagline: "EHR & PMS" },
  { label: "HRMS", tagline: "Human Resource Platform" },
  { label: "DMS", tagline: "Document & Contract Management" },
];

export default function LogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <div
      className="w-full bg-[#fcfcfc] mt-1 overflow-hidden"
      style={{
        borderTop: "2px solid #a9a9a9",
        borderBottom: "2px solid #a9a9a9",
        
      }}
    >
      <div className="relative flex">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10  "
          style={{
            width: "60px",
            background:
              "linear-gradient(to right, #ffffff 0%, transparent 100%)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex items-center"
          style={{ animation: "marquee 38s linear infinite" }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center space-y-4 justify-center flex-shrink-0"
              style={{
                // Desktop: 350×200, Mobile: 160×80
              width: "clamp(220px, 40vw, 350px)",
height: "clamp(110px, 18vw, 200px)",
                borderRight: "2px solid #a9a9a9 ",
                padding: "0 clamp(16px, 2vw, 40px)",
              }}
            >
             <div className="text-center leading-tight">
  <div
    className="product-name text-gray-500  text-[18px] xl:text-[28px]"
    style={{
      fontWeight: 600,
      letterSpacing: "1px",
      
      filter: "grayscale(100%)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      userSelect: "none",
      fontFamily: "bricolage, sans-serif",
    
    }}
  >
    {logo.label}
  </div>

  <div
    className="text-[12px]  text-[#1C59A1] font-bricolage  xl:text-[20px]"
    style={{
       
      marginTop: "8px",
      fontWeight: 400,
      letterSpacing: "0.5px",
      transition: "all 0.3s ease",
    }}
  >
    {logo.tagline}
  </div>
</div>
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "60px",
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