import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const LazyVideo = ({
  src,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
}: LazyVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCanLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      playsInline
      muted={muted}
      loop={loop}
      autoPlay={canLoad && autoPlay}
      preload="metadata"
      poster={poster}
    >
      {canLoad && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default LazyVideo;
