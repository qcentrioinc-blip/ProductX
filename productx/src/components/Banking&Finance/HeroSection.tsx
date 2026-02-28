import { useRef, useEffect, useState } from "react";
import { H1 } from "../../styles/Typography";

const WORDS = ["banking", "credit", "financial"];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pauseTimer);
    }

    const typingSpeed = isDeleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentWord) {
          setIsPaused(true);
        }
      } else {
        const next = displayText.slice(0, -1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, wordIndex, isDeleting, isPaused]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting && entry.intersectionRatio >= 0.3;
          if (!visible) {
            videoEl.pause();
            videoEl.muted = true;
          } else {
            videoEl.play().catch(() => {});
          }
        });
      },
      { threshold: [0, 0.3, 0.6, 1] }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        className="w-full h-auto max-h-screen object-cover"
        src="/Video/HeroFinal.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-16 left-2 md:top-28 lg:top-60 xl:top-1/2 xl:left-80 flex flex-col overflow-hidden text-center justify-center items-center">
        <H1 className="text-white ">
          Enterprise platforms transforming{" "}
          <br className="xl:block hidden" />
          <span className="inline-flex items-center gap-1">
            <span className="text-blue-300   text-left">
              {displayText}
            </span>
            <span className="inline-block w-[4px] h-[1em] bg-blue-400 animate-pulse align-middle" />
          </span>{" "}
          operations worldwide
        </H1>
      </div>
    </div>
  );
};

export default HeroSection;