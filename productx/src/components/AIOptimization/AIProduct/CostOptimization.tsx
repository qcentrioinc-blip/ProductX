import { H2, P } from '../../../styles/Typography';
import LazyVideo from '../../Global/LazyVideo';

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
    <section className="w-full relative z-20 text-white px-4 sm:px-6 md:px-20 py-12 md:pb-16  md:pt-10 xl:px-[160px] overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <LazyVideo
          className="w-full block h-full object-cover"
          src="/Video/LOOO.mp4"
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          autoPlay
          loop
        />
      </div>

      <div className="relative max-w-full  ">
        {/* Heading */}
        <div className="flex justify-center">
          <H2 className="text-black  px-6 py-3 mb-10 text-xl md:text-2xl font-bold text-center">
            Layers of Optimization
          </H2>
        </div>

        {/* DESKTOP VIEW (lg and up) */}
        <div className="hidden lg:block relative pb-10 xl:pb-40">
          {/* Cards Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {COST_LAYERS.map((layer, index) => (
              <div key={index} className="flex flex-col border border-[#00AA72] items-center text-center">
                <h3 className="text-base mt-4 xl:text-[24px] text-[#00AA72]  font-semibold">
                  {layer.title}
                </h3>
                <div className="  font-medium text-[#141414] rounded-md p-4 text-sm md:text-base bg-[#FAFAFA] backdrop-blur-sm w-full min-h-[120px] flex items-start justify-center">
                  {layer.description}
                </div>
              </div>
            ))}
          </div>

          {/* Connection Lines - Desktop */}
          <div className="absolute inset-0 pointer-events-none" style={{ height: '500px' }}>
            <svg className="w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="none">
              <path
                d="M 12  font-quadran 0 170 L 120 220 Q 120 260, 160 260 L 330 260 Q 360 260, 360 230 L 360 170"
                stroke="black"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M 70  font-quadran  170 L 70 340 Q 70 380, 130 380 L 1000 380 Q 1060 380, 1060 340 L 1060 170"
                stroke="black"
                strokeWidth="3"
                fill="none"
              />
              <line x1="240" y1="260" x2="240" y2="290" stroke="black" strokeWidth="2" />
              <line x1="600" y1="380" x2="600" y2="450" stroke="black" strokeWidth="3" />
            </svg>
          </div>

          {/* Existing Tools Label */}
          <div className="absolute top-[300px] xl:left-[200px] lg:left-[150px]"   >
            <P className="text-black text  font-quadran -base">Existing Tools</P>
          </div>
        </div>

        {/* TABLET VIEW (md to lg) */}
        <div className="hidden md:block lg:hidden relative pb-20">
          <div className="max-w-xl mx-auto px-6">
            <div className="relative ">
              {/* SVG Container for Connection Lines */}
              <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: '180px', height: '100%', marginLeft: '0px' }}>
                <svg
                  className="w-full h-full"
                  viewBox="0 0 180 1000"
                  preserveAspectRatio="none"
                >
                  {/* Horizontal line from first box (Visualization) */}
                  <line
                    x1="0"
                    y1="80"
                    x2="100"
                    y2="80"
                    stroke="black"
                    strokeWidth="2.5"
                  />

                  {/* Curve from first horizontal line */}
                  {/* <path
                    d="  font-quadran M 30 80 Q 50 80, 50 100"
                    stroke="black"
                    strokeWidth="2.5"
                    fill="none"
                  />
                   */}
                  <line
                    x1="0"
                    y1="60"
                    x2="150"
                    y2="60"
                    stroke="black"
                    strokeWidth="2.5"
                  />

                  <line
                    x1="100"
                    y1="230"
                    x2="100"
                    y2="80"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  {/* Horizontal line from second box (Utilization) */}
                  <line
                    x1="0"
                    y1="230"
                    x2="100"
                    y2="230"
                    stroke="black"
                    strokeWidth="2.5"
                  />

                  {/* Curve from second horizontal line */}
                  {/* <path
                    d="  font-quadran M 30 230 Q 50 230, 50 210"
                    stroke="black"
                    strokeWidth="2.5"
                    fill="none"
                  /> */}

                  {/* Main vertical line from top to bottom */}
                  <line
                    x1="150"
                    y1="55"
                    x2="150"
                    y2="880"
                    stroke="black"
                    strokeWidth="2.5"
                  />

                  {/* Horizontal line from bottom to last card (Engineering) */}
                  <line
                    x1="0"
                    y1="880"
                    x2="150"
                    y2="880"
                    stroke="black"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              {/* "Existing Tools" Label - Rotated on RIGHT side */}
              <div className="absolute transform rotate-90 origin-center"
                style={{ top: '14%', left: 'calc(65% + 70px)' }}>
                <p className="text-[#00AA72]   font-quadran  text-sm font-quicksand font-medium whitespace-nowrap">
                  Existing Tools
                </p>
              </div>

              {/* CloudDIET Label - on RIGHT side */}
              <div className="absolute"
                style={{ top: '48%', left: 'calc(82% + 70px)' }}>
                <p className="text-[#00AA72]   font-quadran  text-lg font-semibold whitespace-nowrap">
                  CLOUDDIET
                </p>
              </div>

              {/* Cards Column - LEFT aligned with reduced width */}
              <div className="relative z-10 flex flex-col gap-5 w-full max-w-sm">
                {COST_LAYERS.map((layer, index) => (
                  <div key={index} className="w-full">
                    <div className="border border-white  rounded-md p-4 bg-[#FAFAFA] text-[#141414] min-h-[90px] flex flex-col justify-center">
                      <p className="text-sm text-[#  font-quadran 00AA72]  mb-2 font-semibold">
                        {layer.title}
                      </p>
                      <p className="text-xs">
       font-quadran                    {layer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (sm and below) */}
        <div className="md:hidden relative pb-20">
          <div className="max-w-sm mx-auto px-4">
            <div className="relative flex justify-start">

              {/* SVG CONNECTOR */}
              <div className="absolute right-[20%] top-0 pointer-events-none h-full w-[60px]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 60 800"
                  preserveAspectRatio="none"
                >
                  {/* Vertical spine */}
                  <line
                    x1="30"
                    y1="40"
                    x2="30"
                    y2="190"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <line

                    x1="-20"
                    y1="100"
                    x2="250"
                    y2="100"
                    stroke="black"
                    strokeWidth="2"
                  />

                  <line
                    x1="200"
                    y1="720"
                    x2="0"
                    y2="720"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="100"
                    x2="60"
                    y2="720"
                    stroke="black"
                    strokeWidth="2.5"
                  />

                  {/* Horizontal connectors (aligned to card centers) */}
                  {[40, 190].map((y, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={y}
                      x2="30"
                      y2={y}
                      stroke="black"
                      strokeWidth="2"
                    />
                  ))}

                  {/* Final horizontal to right */}
                  {/* <line
            x1="30"
            y1="700"
            x2="55"
            y2="720"
            stroke="black"
            strokeWidth="2"
          /> */}
                </svg>
              </div>

              {/* ROTATED LABEL */}
              <div
                className="absolute right-[40px] top-14 rotate-90"
              >
                <p className="text-[#00AA72]   text-sm font-quadran  font-medium whitespace-nowrap">
                  Existing Tool
                </p>
              </div>
              <div
                className="absolute right-0 bottom-[50%]"
              >
                <div className="text-[#00AA72] font-quadran   text-sm font-quadran   font-extrabold">
                  Cloud<span className="font-normal">DIET</span>
                </div>
              </div>

              {/* CARDS COLUMN */}
              <div className="relative z-10 flex flex-col gap-6 w-[220px]">
                {COST_LAYERS.map((layer, index) => (
                  <div
                    key={index}
                    className="border border-white  rounded-md bg-[#FAFAFA] p-3"
                  >
                    {/* Heading INSIDE box */}
                    <p className="text-sm   font-quadran mibold text-[#00AA72]  mb-1">
                      {layer.title}
                    </p>

                    <p className="text-xs text-[#141414] font-quadran leading-snug">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

       
        {/* CloudDIET Logo - All Views */}
        <div className="relative   mt-8 md:mt-12 lg:mt-44 xl:mt-20 hidden lg:flex justify-center z-20">
          <div className="bg-white  px-6 md:px-8 py-3 md:py-4 flex items-center gap-3 shadow-lg">
            <div className="text-[#00AA72] text-2xl md:text-4xl font-extrabold">
              CLOUD<span className="font-normal">DIET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOptimization;