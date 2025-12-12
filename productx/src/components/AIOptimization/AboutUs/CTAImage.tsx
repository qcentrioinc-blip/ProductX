"use client";

export default function AnimatedMap() {
  return (
    <div className="relative w-full flex justify-center py-10 bg-[#020617]">
      
      {/* Blue Map */}
      <img
        src="/AIAbout/Map.png"
        className="w-[90%] max-w-8xl opacity-90"
        alt="World Map"
      />

      {/* SVG Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 600"
      >
        <style>
          {`
            .flow {
              stroke: #FFC445;
              stroke-width: 2;
              fill: none;
              stroke-dasharray: 8 10;
              animation: dashMove 2.3s linear infinite;
            }
            @keyframes dashMove {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -200; }
            }
          `}
        </style>

        {/* --- Nodes (your circles kept exactly) --- */}
        <circle cx="250" cy="200" r="5" fill="#FFC445" />
        <circle cx="850" cy="260" r="5" fill="#FFC445" />
        <circle cx="700" cy="400" r="5" fill="#FFC445" />
        <circle cx="420" cy="380" r="5" fill="#FFC445" />
        <circle cx="1110" cy="420" r="5" fill="#FFC445" />
        <circle cx="200" cy="100" r="5" fill="#FFC445" />
        <circle cx="800" cy="150" r="5" fill="#FFC445" />
        <circle cx="1000" cy="100" r="5" fill="#FFC445" />
        <circle cx="440" cy="80" r="5" fill="#FFC445" />
        <circle cx="300" cy="420" r="5" fill="#FFC445" />

        {/* --- CONNECTION ARCS --- */}

        {/* North America → Europe */}
        <path d="M200 100 C 350 40, 600 60, 800 150" className="flow" />

        {/* North America → North Africa */}
        <path d="M200 100 C 300 180, 350 240, 420 380" className="flow" />

        {/* USA → Europe */}
        <path d="M250 200 C 420 120, 700 120, 850 260" className="flow" />

        {/* USA → South America */}
        <path d="M250 200 C 240 300, 260 360, 300 420" className="flow" />

        {/* USA → Africa */}
        <path d="M250 200 C 350 260, 380 330, 420 380" className="flow" />

        {/* Europe → Middle East */}
        <path d="M800 150 C 860 170, 900 200, 1000 100" className="flow" />

        {/* Europe → Africa */}
        <path d="M800 150 C 720 240, 600 300, 700 400" className="flow" />

        {/* Europe → Asia / Australia */}
        <path d="M850 260 C 950 300, 1050 350, 1110 420" className="flow" />

        {/* Africa → South America */}
        <path d="M420 380 C 380 390, 330 395, 300 420" className="flow" />

        {/* Africa → Asia */}
        <path d="M420 380 C 550 350, 650 350, 700 400" className="flow" />

        {/* Asia → Australia */}
        <path d="M700 400 C 850 380, 1000 390, 1110 420" className="flow" />

      </svg>
    </div>
  );
}
