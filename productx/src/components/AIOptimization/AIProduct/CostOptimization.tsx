 
import { H2, P } from '../../../styles/Typography';

const COST_LAYERS = [
  {
    title: "Visualization",
    description: "Report costs across environments and business divisions clearly.",
  },
  {
    title: "Utilization",
    description: "Trend how and where your cloud costs are accruing.",
  },
  {
    title: "Configuration",
    description: "Optimize licensing, discounts, and incentives from cloud providers.",
  },
  {
    title: "Commercial",
    description: "Analyze how services are deployed and configured within environments.",
  },
  {
    title: "Engineering",
    description: "Deep profiling of service configuration, utilization, and cost accrual.",
  },
];

const CostOptimization = () => {
  return (
    <section className="w-full relative z-20 text-white px-4 sm:px-6 md:px-10 py-12 md:py-16 overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full  block   h-full object-cover"
          src="/Video/Waves2.mp4"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          autoPlay
          loop
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-8 md:mb-12">
          <H2 className="text-[#254D70] px-6 py-3 text-xl md:text-2xl font-bold text-center">
            Layers of Optimization
          </H2>
        </div>

        {/* DESKTOP VIEW (lg and up) */}
        <div className="hidden lg:block relative pb-10 xl:pb-40">
          {/* Cards Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {COST_LAYERS.map((layer, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <h3 className="text-base xl:text-[24px] text-[#254D70] font-semibold mb-4 min-h-[28px]">
                  {layer.title}
                </h3>
                <div className="border border-[#254D70] font-medium text-[#141414] rounded-md p-4 text-sm md:text-base bg-[#FAFAFA] backdrop-blur-sm w-full min-h-[120px] flex items-center justify-center">
                  {layer.description}
                </div>
              </div>
            ))}
          </div>

          {/* Connection Lines - Desktop */}
          <div className="absolute inset-0 pointer-events-none" style={{ height: '500px' }}>
            <svg className="w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="none">
              <path
                d="M 120 170 L 120 220 Q 120 260, 160 260 L 330 260 Q 360 260, 360 230 L 360 170"
                stroke="#254D70"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M 70 170 L 70 340 Q 70 380, 130 380 L 1000 380 Q 1060 380, 1060 340 L 1060 170"
                stroke="#254D70"
                strokeWidth="3"
                fill="none"
              />
              <line x1="240" y1="260" x2="240" y2="290" stroke="#254D70" strokeWidth="2" />
              <line x1="600" y1="380" x2="600" y2="450" stroke="#254D70" strokeWidth="3" />
            </svg>
          </div>

          {/* Existing Tools Label */}
          <div className="absolute" style={{ top: '300px', left: '150px' }}>
            <P className="text-black text-base">Existing Tools</P>
          </div>
        </div>

        {/* TABLET VIEW (md to lg) */}
        <div className="hidden   relative pb-20">
          <div className="max-w-2xl mx-auto">
            {/* Right Column with Connection Line */}
            <div className="relative">
              {/* Vertical Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#254D70] transform -translate-x-1/2" 
                   style={{ height: 'calc(100% - 80px)' }}
              />
              
              {/* Horizontal line to CloudDIET */}
              <div className="absolute left-1/2 w-32 h-0.5 bg-[#254D70]" 
                   style={{ top: 'calc(100% - 80px)' }}
              />

              {/* Cards - Stacked vertically on right */}
              <div className="relative z-10 flex flex-col items-end gap-4 pr-4">
                <div className="w-full max-w-xs">
                  <p className="text-xs text-gray-600 mb-2 text-right">Visualization</p>
                  <div className="border border-[#254D70] rounded-md p-3 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[0].description}
                  </div>
                </div>

                <div className="w-full max-w-xs">
                  <p className="text-xs text-gray-600 mb-2 text-right">Utilization</p>
                  <div className="border border-[#254D70] rounded-md p-3 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[1].description}
                  </div>
                </div>

                <div className="w-full max-w-xs">
                  <p className="text-xs text-gray-600 mb-2 text-right">Configuration</p>
                  <div className="border border-[#254D70] rounded-md p-3 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[2].description}
                  </div>
                </div>

                <div className="w-full max-w-xs">
                  <p className="text-xs text-gray-600 mb-2 text-right">Commercial</p>
                  <div className="border border-[#254D70] rounded-md p-3 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[3].description}
                  </div>
                </div>

                <div className="w-full max-w-xs">
                  <p className="text-xs text-gray-600 mb-2 text-right">Engineering</p>
                  <div className="border border-[#254D70] rounded-md p-3 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[4].description}
                  </div>
                </div>
              </div>

              <div className="absolute left-0 transform -rotate-90 origin-center" 
                   style={{ top: '40%', left: '-60px' }}>
                <P className="text-[#254D70] whitespace-nowrap">Existing Tool</P>
              </div>
            </div>
          </div>
        </div>

     
        <div className="lg:hidden relative pb-20">
          <div className="max-w-md mx-auto px-4">
            <div className="relative flex justify-center">
              {/* SVG Container for Connection Line - Positioned on the LEFT */}
              <div className="absolute left-0 top-0 w-20 h-full pointer-events-none">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 80 600" 
                  preserveAspectRatio="none"
                  style={{ position: 'absolute', left: 0, top: 0 }}
                >
                  {/* Vertical line from left edge */}
                  <line 
                    x1="20" 
                    y1="40" 
                    x2="20" 
                    y2="200" 
                    stroke="#254D70" 
                    strokeWidth="2" 
                  />
                  
                  {/* Horizontal line connecting to first card (Visualization) */}
                  <line 
                    x1="20" 
                    y1="40" 
                    x2="80" 
                    y2="40" 
                    stroke="#254D70" 
                    strokeWidth="2" 
                  />
                  
                  {/* Horizontal line connecting to second card (Utilization) */}
                  <line 
                    x1="20" 
                    y1="200" 
                    x2="80" 
                    y2="200" 
                    stroke="#254D70" 
                    strokeWidth="2" 
                  />
                </svg>
              </div>

              {/* "Existing Tool" Label - Rotated on LEFT side */}
              <div className="absolute left-0 transform -rotate-90 origin-center" 
                   style={{ top: '20%', left: '-40px' }}>
                <p className="text-[#254D70] text-sm font-medium whitespace-nowrap">
                  Existing Tool
                </p>
              </div>

              {/* Cards Column - CENTERED */}
              <div className="relative z-10 flex flex-col gap-6 w-full max-w-xs">
                {/* Card 1 - Visualization */}
                <div className="w-full">
                  <p className="text-xs text-[#254D70] mb-2 font-medium text-right">
                    Visualization
                  </p>
                  <div className="border border-[#254D70] rounded-md p-4 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[0].description}
                  </div>
                </div>

                {/* Card 2 - Utilization */}
                <div className="w-full">
                  <p className="text-xs text-[#254D70] mb-2 font-medium text-right">
                    Utilization
                  </p>
                  <div className="border border-[#254D70] rounded-md p-4 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[1].description}
                  </div>
                </div>

                {/* Card 3 - Configuration */}
                <div className="w-full">
                  <p className="text-xs text-[#254D70] mb-2 font-medium text-right">
                    Configuration
                  </p>
                  <div className="border border-[#254D70] rounded-md p-4 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[2].description}
                  </div>
                </div>

                {/* Card 4 - Commercial */}
                <div className="w-full">
                  <p className="text-xs text-[#254D70] mb-2 font-medium text-right">
                    Commercial
                  </p>
                  <div className="border border-[#254D70] rounded-md p-4 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[3].description}
                  </div>
                </div>

                {/* Card 5 - Engineering */}
                <div className="w-full">
                  <p className="text-xs text-[#254D70] mb-2 font-medium text-right">
                    Engineering
                  </p>
                  <div className="border border-[#254D70] rounded-md p-4 bg-[#FAFAFA] text-[#141414] text-sm min-h-[70px] flex items-center">
                    {COST_LAYERS[4].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CloudDIET Logo - All Views */}
        <div className="relative  md:mt-12 lg:mt-44 xl:mt-20 flex justify-center z-20">
          <div className="bg-[#254D70] px-6 md:px-8 py-3 md:py-4 flex items-center gap-3 shadow-lg">
            <div className="text-white text-2xl md:text-4xl font-extrabold">
              CLOUD<span className="font-normal">DIET</span>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default CostOptimization;