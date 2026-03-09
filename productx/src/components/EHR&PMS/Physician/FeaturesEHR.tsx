import { useState, useEffect, useRef } from "react";
import { H2EHR, H3EHR, H4EHR, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type FeaturesEHRProps = {
  content: {
    cardTitle: string;
    cardDescription: string;
    heading: string;
    features: FeatureItem[];
  };
};

// Animated vertical divider — draws downward on scroll trigger
const VerticalDivider = ({ animate, delay = 0 }: { animate: boolean; delay?: number }) => (
  <div className="hidden lg:flex items-stretch justify-center w-[2px] flex-shrink-0">
    <div
      className="w-[2px] bg-[#008280] origin-top"
      style={{
        height: animate ? "100%" : "0%",
        transition: animate
          ? `height 0.85s cubic-bezier(0.4,0,0.2,1) ${delay}ms`
          : "none",
      }}
    />
  </div>
);

const FeaturesEHR = ({ content }: FeaturesEHRProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [linesVisible, setLinesVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Trigger once when the features grid enters the viewport
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLinesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen md:min-h-fit lg:min-h-fit xl:min-h-fit bg-white py-10 px-4 sm:px-8 lg:px-8">
      <div className="max-w-7xl xl:mx-auto">
        <div className="border-2 border-[#166D48] rounded-3xl p-6 md:p-10 lg:p-10 xl:p-12">

          {/* Top Section */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 mb-12">
            <div className="relative w-full lg:w-auto lg:flex-shrink-0">
              <div className="relative w-full">
                <img src="/EHRIcons/GreenRec.webp" alt="ehr and pms" className="xl:h-66" />
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="absolute top-6 right-6 md:top-6 md:right-6 lg:top-10 lg:right-10 xl:top-2 xl:right-2 w-16 h-16 xs:w-20 xs:h-20 lg:w-48 lg:h-48 xl:w-32 xl:h-32 z-30 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                >
                  <img src="/EHRIcons/GreenArrow.svg" alt="arrow" className="w-full h-full object-contain pointer-events-none" />
                </button>
                <div className="p-2 absolute top-8 z-10 md:p-6">
                  <H3EHR className="text-white mb-12 xs:mb-18 md:mb-40 lg:mb-48 xl:mb-4 inline-block border-b-2 whitespace-pre-normal md:whitespace-normal xl:whitespace-pre-normal border-white">
                    {content.cardTitle}
                  </H3EHR>
                  <P className="text-white max-w-xs md:max-w-sm lg:max-w-lg xl:whitespace-pre-line xl:mt-5 leading-relaxed">
                    {content.cardDescription}
                  </P>
                </div>
              </div>
            </div>

            <div className="flex-1 text-left xl:text-right">
              <H2EHR className="text-[#008280] leading-tight whitespace-pre-line">
                {content.heading}
              </H2EHR>
            </div>
          </div>

          {/* Features Grid — with animated vertical dividers */}
          <div
            ref={gridRef}
            className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-6 lg:gap-0"
          >
            {content.features.map((feature, index) => (
              <>
                {/* Divider BEFORE each column except the first */}
                {index > 0 && (
                  <VerticalDivider
                    key={`div-${index}`}
                    animate={linesVisible}
                    delay={(index - 1) * 180} // stagger: 0ms, 180ms, 360ms
                  />
                )}

                <div key={feature.id} className="flex flex-col flex-1 lg:px-6 first:pl-0 last:pr-0">
                  <img
                    className="w-10 h-10 overflow-visible my-8"
                    src={feature.image}
                    alt={feature.title}
                  />
                  <H4EHR className="mb-2">{feature.title}</H4EHR>
                  <P className="text-sm leading-relaxed">{feature.description}</P>
                </div>
              </>
            ))}
          </div>

        </div>
      </div>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default FeaturesEHR;