import { useRef, useEffect, useState, memo } from "react";
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

// Video card - loads once triggered, plays when section visible
const VideoCard = memo(({ card, shouldLoad, isPlaying }: {
  card: typeof cards[0];
  shouldLoad: boolean;
  isPlaying: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div
      className="
        group relative overflow-hidden rounded-lg bg-white
        border-2 border-slate-100
        hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(10,15,60,0.35)]
        [transition:transform_0.3s_ease-out,box-shadow_0.3s_ease-out]
      
        md:w-[450px] md:flex-shrink-0
        xl:w-auto xl:flex-shrink xl:flex-1
      "
    >
      <div className="overflow-hidden aspect-video bg-gray-50 flex items-center justify-center">
        {shouldLoad ? (
          <video
            ref={videoRef}
            src={card.video}
            className="w-full h-full object-contain"
            playsInline
            muted
            preload="auto"
          />
        ) : (
          <div className="w-full h-full bg-gray-100/50" />
        )}
      </div>

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
});

export default function Onboarding() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Observer 1: Trigger video LOAD once (sentinel at top)
  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasLoaded) {
          setHasLoaded(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      {
        threshold: 1.0, // Fully visible
        rootMargin: "-100px 0px 0px 0px" // Only trigger when 100px into viewport
      }
    );

    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [hasLoaded]);

  // Observer 2: Control PLAY/PAUSE based on section visibility
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsPlaying(entries[0].isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div
        ref={sectionRef}
        id="benefits"
        className="relative max-w-8xl pt-20 lg:px-10 mx-6 lg:mx-10"
      >
        {/* Invisible trigger sentinel at the TOP of section */}
        <div ref={triggerRef} className="absolute top-0 left-0 w-full h-1" aria-hidden="true" />

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

              md:flex md:gap-6 md:overflow-x-auto
              md:-mx-6 md:px-6 md:pb-4
              md:overscroll-x-contain
              xl:overflow-visible lg:px-0 lg:mx-0
            "
          >
            {cards.map((card, i) => (
              <VideoCard
                key={i}
                card={card}
                shouldLoad={hasLoaded}
                isPlaying={isPlaying}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



