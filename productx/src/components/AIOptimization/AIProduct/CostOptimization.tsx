
import { H2, P } from '../../../styles/Typography';
// import { useInView } from 'react-intersection-observer';

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


const CostOptimization = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   rootMargin: '200px',
  // });

  return (
    <section className="w-full relative z-20 text-white px-4 sm:px-6 md:px-10 py-12 md:py-16 overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-auto object-cover"
          src="/Video/Waves2.mp4"
          preload="auto"
  muted
  playsInline
  disablePictureInPicture
  disableRemotePlayback
          autoPlay
          loop
          
         />
        {/* Optional dark overlay for readability */}
        {/* <div className="absolute inset-0 bg-white/10" /> */}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex  justify-center mb-12">
          <H2 className="  text-[#254D70] px-6 py-3 text-xl md:text-2xl">
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
                <h3 className="text-base font-bricolage xl:text-[24px] text-[#254D70] font-semibold mb-4 min-h-[28px]">
                  {layer.title}
                </h3>

                <div className="border border-[#254D70]  font-medium text-[#141414] rounded-md  font-quicksand p-4 text-sm md:text-base bg-[#FAFAFA] backdrop-blur-sm w-full min-h-[120px] flex items-center justify-center">
                  {layer.description}
                </div>
              </div>
            ))}
          </div>

          {/* Connection Lines - Desktop Only */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none"
            style={{ height: '500px' }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 500"
              preserveAspectRatio="none"
            >
              <path
                d="M 120 170
                   L 120 220
                   Q 120 260, 160 260
                   L 330 260
                   Q 360 260, 360 230
                   L 360 170"
                stroke="#254D70"
                strokeWidth="3"
                fill="none"
              />

              {/* LONG CONNECTOR — Visualization → Engineering (shifted left) */}
              <path
                d="
    M 70 170
    L 70 340
    Q 70 380, 130 380
    L 1000 380
    Q 1060 380, 1060 340
    L 1060 170
  "
  stroke="#254D70"
  strokeWidth="3"
  fill="none"
/>


              <line
                x1="240"
                y1="260"
                x2="240"
                y2="290"
                stroke="#254D70"
                strokeWidth="2"
              />

              {/* Vertical connector above CloudDIET logo */}
<line
  x1="600"
  y1="380"
  x2="600"
  y2="450"
  stroke="#254D70"
  strokeWidth="3"
/>

            </svg>
          </div>

          {/* Existing Tools Label */}
          <div
            className="hidden lg:block absolute"
            style={{ top: '300px', left: '200px' }}
          >
            <P className="text-black font-serif text-base">Existing Tools</P>
          </div>
        </div>

        {/* CloudDIET Logo */}
        <div className="relative mt-20 flex justify-center z-20">
          <div className="bg-[#19E3A1] px-8 py-4 flex items-center gap-3 shadow-lg">
            {/* <img src="/ClouddietLogo2.svg" alt="CloudDIET Logo" className="h-8 w-auto" /> */}

            <div className="text-white text-4xl font-bricolage font-extrabold">
              Cloud<span className="text-white font-medium">DIET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOptimization;
