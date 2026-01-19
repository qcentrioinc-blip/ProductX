import { useEffect, useRef } from 'react';
import { H2, H3, P } from '../../../styles/Typography';

const COST_LAYERS = [
  {
    title: "Visualization",
    description:
      "Report costs across environments and business divisions clearly.",
  },
  {
    title: "Utilization",
    description:
      "Trend how and where your cloud costs are accruing. ",
  },
  {
    title: "Commercial",
    description:
      " Optimize licensing, discounts, and incentives from cloud providers.",
  },
  {
    title: "Configuration",
    description:
      " Analyze how services are deployed and configured within environments.",
  },
  {
    title: "Engineering",
    description:
      "Deep profiling of service configuration, utilization, and cost accrual.",
  },
];

const ParticleWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const rows = 35;
    const cols = 120;
    
    // ADJUST THIS VALUE TO INCREASE/DECREASE DOT SIZE
    const dotSizeMultiplier = 1; // Increase this number for larger dots (try 2, 3, 4, etc.)
    
    const animate = () => {
      ctx.fillStyle = '#1E2440';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const spacing = canvas.width / cols;
      const rowSpacing = canvas.height / rows;

      for (let i = 0; i < rows; i++) {
        ctx.beginPath();
        
        for (let j = 0; j < cols; j++) {
          const x = j * spacing;
          const y = i * rowSpacing;
          
          // Create multiple wave layers with different frequencies
          const wave1 = Math.sin((j * 0.05) + (time * 0.02) + (i * 0.1)) * 20;
          const wave2 = Math.sin((j * 0.03) - (time * 0.015) + (i * 0.15)) * 15;
          const wave3 = Math.cos((j * 0.04) + (time * 0.01) + (i * 0.08)) * 10;
          
          const offsetY = wave1 + wave2 + wave3;
          
          // Calculate depth for brightness
          const depth = (offsetY + 45) / 90;
          
          // Create gradient colors from teal to dark blue
          const brightness = Math.max(0.2, depth);
          const r = Math.floor(25 + brightness * 30);
          const g = Math.floor(227 - (1 - brightness) * 140);
          const b = Math.floor(161 + (1 - brightness) * 40);
          
          // Draw dots with adjustable size
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${brightness})`;
          const size = (1.5 + brightness * 1) * dotSizeMultiplier; // Apply multiplier here
          ctx.fillRect(x, y + offsetY, size, size);
          
          // Connect dots in the same row
          if (j > 0) {
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${brightness * 0.3})`;
            ctx.lineWidth = 0.5 * dotSizeMultiplier; // Also scale line width
            const prevX = (j - 1) * spacing;
            const prevWave1 = Math.sin(((j - 1) * 0.05) + (time * 0.02) + (i * 0.1)) * 20;
            const prevWave2 = Math.sin(((j - 1) * 0.03) - (time * 0.015) + (i * 0.15)) * 15;
            const prevWave3 = Math.cos(((j - 1) * 0.04) + (time * 0.01) + (i * 0.08)) * 10;
            const prevOffsetY = prevWave1 + prevWave2 + prevWave3;
            
            ctx.beginPath();
            ctx.moveTo(prevX, y + prevOffsetY);
            ctx.lineTo(x, y + offsetY);
            ctx.stroke();
          }
        }
      }

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

const CostOptimization = () => {
  return (
    <section className="w-full relative z-20 bg-[#1E2440] text-white px-4 sm:px-6 md:px-10 py-12 md:py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-12">
          <H2 className="bg-gray-400 text-white px-6 py-3 text-xl md:text-2xl">
            Layers of Cost Optimizations
          </H2>
        </div>

        {/* Layers Container */}
        <div className="relative pb-10 xl:pb-40">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {COST_LAYERS.map((layer, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <H3 className="text-base md:text-lg font-semibold mb-4 min-h-[28px]">
                  {layer.title}
                </H3>

                <div className="border border-gray-300 font-medium p-4 text-sm md:text-base text-[#19E3A1] bg-white/10 backdrop-blur-sm w-full min-h-[120px] flex items-center justify-center">
                  {layer.description}
                </div>
              </div>
            ))}
          </div>

          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ height: '500px' }}>
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 500"
              preserveAspectRatio="none"
            >
              <defs>
                <style>
                  {`
                    .blue-line {
                      fill: none;
                      stroke: white;
                      stroke-width: 3;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    }
                    .orange-line {
                      fill: none;
                      stroke: white;
                      stroke-width: 3;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    }
                  `}
                </style>
              </defs>

              {/* BLUE PATH: Visualization → Utilization (short curve) */}
              <path
                d="M 120 160
                   L 120 220
                   Q 120 260, 160 260
                   L 330 260
                   Q 360 260, 360 230
                   L 360 170"
                className="blue-line"
              />

              {/* ORANGE PATH: Visualization → Engineering (long curve) */}
              <path
                d="M 140 160
                   L 140 360
                   Q 140 400, 180 400
                   L 1020 400
                   Q 1060 400, 1060 360
                   L 1060 170"
                className="orange-line"
              />

              {/* Existing Tools Label Pointer */}
              <line
                x1="260"
                y1="260"
                x2="260"
                y2="290"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Existing Tools Label */}
          <div className="hidden lg:block absolute" style={{ top: '300px', left: '180px' }}>
            <P className="text-gray-300 text-base">Existing Tools</P>
          </div>
        </div>

        {/* CloudDIET Logo */}
        <div className="relative mt-8 flex justify-center z-20">
          <div className="bg-[#19E3A1] px-8 py-4 flex items-center gap-3 shadow-lg">
            {/* Cloud Icon */}
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            
            {/* Text */}
            <div className="text-white text-2xl font-bold">
              Cloud<span className="font-normal">DIET</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D PARTICLE WAVE DECORATION */}
      <div className="absolute bottom-0 left-0 right-0 h-48 -z-10 md:h-56 overflow-hidden pointer-events-none">
        <ParticleWave />
      </div> 
      {/* WAVE VIDEO DECORATION
<div className="absolute bottom-0 left-0 right-0 h-[28%] overflow-hidden pointer-events-none -z-10">
  <video
    className="w-full h-full object-cover opacity-80"
    src="/videos/AIProduct/COVideo.moc"
    autoPlay
    loop
    muted
    playsInline
  />
</div>*/}

    </section>
  );
};

export default CostOptimization;