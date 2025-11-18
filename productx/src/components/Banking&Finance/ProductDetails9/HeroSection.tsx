import { H1, P } from "../../../styles/Typography";
import { useState, useRef } from "react";
import React from 'react'; // Ensure React is imported for event types

// Define the type for the style state
type TransformStyle = React.CSSProperties;

const HeroSec = () => {
  const [transformStyle, setTransformStyle] = useState<TransformStyle>({});
  const [isHovering, setIsHovering] = useState(false);
  // FIX: Type the ref to an HTMLImageElement or null
  const imageRef = useRef<HTMLImageElement | null>(null);

  // FIX: Type the event 'e' as a React Mouse Event on an HTMLImageElement
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imageRef.current) return;

    // imageRef.current is now correctly typed as HTMLImageElement
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const tiltX = y * 8;
    const tiltY = x * -8;

    setTransformStyle({
      transform: `
        perspective(1200px) 
        rotateX(${tiltX}deg) 
        rotateY(${tiltY}deg)
        translateZ(30px)
        scale3d(1.04, 1.04, 1.04)
      `,
      boxShadow: `
        0 0 20px rgba(59, 130, 246, 0.6),
        0 0 40px rgba(147, 51, 234, 0.4),
        0 0 60px rgba(236, 72, 153, 0.2)
      `,
      animation: "pulse-glow 2s ease-in-out infinite",
    });
  };

  // Type the event for consistency, although not strictly required by the error log
  const handleMouseEnter = () => {
    setIsHovering(true);
    setTransformStyle({
      transform: `perspective(1200px) translateZ(50px) scale3d(1.06, 1.06, 1.06)`,
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      boxShadow: `
        0 0 30px rgba(59, 130, 246, 0.8),
        0 0 60px rgba(147, 51, 234, 0.5),
        0 0 90px rgba(236, 72, 153, 0.3)
      `,
      animation: "pulse-glow 1.5s ease-in-out infinite",
    });
  };

  // Type the event for consistency
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransformStyle({
      transform: `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      animation: "none",
      transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    });
  };

  const handleTouchStart = () => {
    setIsHovering(true);
    setTransformStyle({
      transform: `perspective(1200px) translateZ(60px) scale3d(1.07, 1.07, 1.07)`,
      boxShadow: `
        0 0 40px rgba(59, 130, 246, 0.9),
        0 0 80px rgba(147, 51, 234, 0.6),
        0 0 120px rgba(236, 72, 153, 0.4)
      `,
      animation: "pulse-glow 1s ease-in-out infinite",
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    });
  };

  const handleTouchEnd = () => {
    setIsHovering(false);
    setTransformStyle({
      transform: `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      animation: "none",
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    });
  };

  return (
    <section className="relative w-full bg-[#2B68C3] pt-[85px] pb-[35px] overflow-hidden h-full">
      
      {/* FIX: Use a regular <style> tag instead of <style jsx> */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(59, 130, 246, 0.6),
              0 0 40px rgba(147, 51, 234, 0.4),
              0 0 60px rgba(236, 72, 153, 0.2);
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.8),
              0 0 60px rgba(147, 51, 234, 0.6),
              0 0 90px rgba(236, 72, 153, 0.4);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center lg:items-start gap-4">

        {/* === TOP ROW: Heading + Avatars + Paragraph === */}
        <div className="w-full flex flex-col lg:pt-24 lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left: Heading + Avatars */}
          <div className="flex flex-col flex-1 w-full max-w-[700px]">
            <H1 className="mb-6 leading-tight text-white text-center z-20 lg:text-left">
              Lorem ipsum dolor adipis
            </H1>

            {/* Avatar Group */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white"
                  />
                ))}
              </div>
              <P className="text-white/90 z-20">Trusted by 15k+</P>
            </div>

            {/* Paragraph (Visible for Mobile only) */}
            <div className="mt-6 lg:hidden bg-white/90 rounded-xl p-3 shadow-md z-20 xs:max-w-[350px] items-center mx-[1px] lg:mx-0 md:px-5">
              <P className="text-start text-[#2B68C3] leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
              </P>
            </div>
          </div>

          {/* Right Paragraph (Visible for 1024px and above) */}
          <div className="hidden lg:flex flex-1 lg:max-w-md">
            <div className="bg-white/90 z-20 rounded-xl p-6 shadow-md mt-20 xl:mt-22 2xl:mt-25">
              <P className="leading-relaxed text-[#2B68C3]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
              </P>
            </div>
          </div>
        </div>

        {/* === Decorative yellow blur blobs === */}
        <div className="absolute top-[-10px] right-[-150px] w-[450px] h-[450px] bg-[#FED600] opacity-80 blur-[150px] rounded-full z-0 pointer-events-none"></div>
        <div className="absolute bottom-[-120px] left-[-150px] w-[450px] h-[450px] bg-[#FED600] opacity-80 blur-[150px] rounded-full z-0 pointer-events-none"></div>

        {/* === BOTTOM IMAGE SECTION === */}
        <div className="w-full flex justify-center mt-16 relative">
          <div className="relative w-full max-w-7xl sm:pt-30 lg:pt-20 flex justify-center items-center">

            {/* Static Shape behind dashboard */} 
            <img
              src="/ProductPage9/shape.png"
              alt="shape preview"
              className="absolute top-[80px] sm:top-[230px] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[100%] lg:w-[100%] md:h-[250%] object-cover z-10 pointer-events-none max-w-none"
            />

            {/* Dashboard Image with Pulsing Glow Effect */}
            <img
              ref={imageRef}
              src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png?width=2400&height=1350"
              alt="Dashboard preview"
              className="w-[99%] sm:w-[75%] md:w-[80%] lg:w-full aspect-[16/9] md:h-[500px] rounded-2xl mt-[-60px] border border-gray-200 relative z-20 cursor-pointer md:top-[-40px]"
              style={{
                ...transformStyle,
                transition: isHovering 
                  ? "transform 0.15s ease-out, box-shadow 0.3s ease" 
                  : "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transformStyle: "preserve-3d",
                willChange: "transform",
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;