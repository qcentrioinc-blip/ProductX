import { useRef, useEffect, useState } from "react";
import { H2, H4, P } from "../../../styles/Typography";

const cards = [
  {
    title: " Potential Savings",
    desc: " Instantly view potential savings categorized by implementation effort, easy, medium, and hard. Target 60–70% savings within six weeks. ",
    video: "/Video/1.mp4",
  },
  {
    title: " Cost Transparency",
    desc: "Gain deeper cost insights than native tools. Break down spending by environment, division, service, and resource configuration.",
    video: "/Video/2.1.mp4",
  },
  {
    title: " Savings Plans",
    desc: " Make informed decisions with what-if analyses for Reserved Instances and Savings Plans. Optimize commitments for maximum long-term value.",
    video: "/Video/3.mp4",
  },
];

// Video card component with visibility-based playback and lazy loading
const VideoCard = ({ card, index }: { card: typeof cards[0]; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => { });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "200px 0px 200px 0px" // Pre-load before visible to hide jank
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      key={index}
      className="
        group relative overflow-hidden rounded-lg bg-white
        border-2 border-slate-100
        transition-transform duration-300 ease-out 
        will-change-transform contain-content
        hover:scale-[1.02]
        hover:shadow-[0_20px_60px_rgba(10,15,60,0.35)]
      
        md:min-w-[55%] md:snap-center  
        xl:min-w-0
      "
      style={{ contentVisibility: 'auto' }} // Modern browser optimization
    >
      {/* Video - Lazy loaded with strict aspect ratio */}
      <div className="overflow-hidden aspect-video bg-gray-50 flex items-center justify-center transform-gpu">
        {shouldLoad ? (
          <video
            ref={videoRef}
            src={card.video}
            className="
            w-full h-full object-contain
            transition-opacity duration-500 ease-out
          "
            playsInline
            muted
            loop
            preload="metadata"
          />
        ) : (
          /* Placeholder while waiting for scroll */
          <div className="w-full h-full bg-gray-100/50" />
        )}
      </div>

      {/* Content */}
      <div className="relative p-6 lg:px-10">
        <H4 className="mb-2 text-lg font-semibold text-slate-900">
          {card.title}
        </H4>
        <P className="leading-relaxed text-black">
          {card.desc}
        </P>
      </div>
    </div>
  );
};

export default function Onboarding() {
  return (
    <section>
      <div id="benefits" className="relative max-w-8xl pt-20 lg:px-10 mx-6 lg:mx-10">
        {/* Heading */}
        <H2 className="mb-8 lg:mb-18 max-w-4xl mx-auto text-left xl:text-center font-semibold text-[#254D70]">
          Cloud Optimization Features That Deliver Results
        </H2>

        {/* WHITE CONTAINER */}
        <div className="rounded-3xl">
          {/* Cards */}
          <div
            className="
              grid grid-cols-1 gap-8
              sm:grid-cols-2
              xl:grid-cols-3

              md:flex md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory
              md:-mx-6 md:px-6
              xl:overflow-visible xl:snap-none lg:px-0 lg:mx-0
            "
          >
            {cards.map((card, i) => (
              <VideoCard key={i} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
