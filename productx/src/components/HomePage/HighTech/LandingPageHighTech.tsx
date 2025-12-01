// import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

const LandingPageHighTech = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // userMuted = what user selected via button
  const [userMuted, setUserMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMuted = !userMuted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted) {
      videoRef.current.volume = 1;
    }
    setUserMuted(nextMuted);
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // start muted for autoplay
    videoEl.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting && entry.intersectionRatio >= 0.3;

          if (!visible) {
            // section out of view -> pause and mute
            videoEl.pause();
            videoEl.muted = true;
          } else {
            // section back in view -> play
            videoEl.play().catch(() => { });

            // restore user choice (unmute if userMuted is false)
            if (!userMuted) {
              videoEl.muted = false;
              videoEl.volume = 1;
            }
          }
        });
      },
      {
        threshold: [0, 0.3, 0.6, 1],
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, [userMuted]);

  return (
    <div className="w-full bg-black">
      <video
        ref={videoRef}
        className="w-full h-auto max-h-screen object-cover"
        src="/HighTech/HighTechVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        Your browser does not support the video tag.
      </video>


      {/* Sound toggle button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 bg-black/70 text-white text-xs sm:text-sm px-3 py-2 rounded-full flex items-center gap-2"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
        {userMuted ? "Enable Sound" : "Mute Sound"}
      </button>
    </div>
  );
};

export default LandingPageHighTech;
