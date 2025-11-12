import { useState, useEffect, useRef } from 'react';
import { H1, P } from '../../../styles/Typography';
import Image1 from '/ClinicApp/Phone.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pageOpened, setPageOpened] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // ✅ Type the refs properly
  const contentRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // ✅ Intersection Observer for content slide animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    const content = contentRef.current;
    if (content) observer.observe(content);

    return () => {
      if (content) observer.unobserve(content);
    };
  }, []);

  // ✅ Page opening animation
  useEffect(() => {
    const timer = setTimeout(() => setPageOpened(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Custom cursor tracking
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Explicitly type event as MouseEvent (not React.MouseEvent)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroElement.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    heroElement.addEventListener('mousemove', handleMouseMove);
    heroElement.addEventListener('mouseenter', handleMouseEnter);
    heroElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
      heroElement.removeEventListener('mouseenter', handleMouseEnter);
      heroElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Page Opening Overlay */}
     <div
  className="fixed inset-0 z-50 flex justify-center items-center overflow-hidden pointer-events-none"
  style={{
    clipPath: pageOpened
      ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
      : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: 'clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
    background: 'linear-gradient(135deg, #166D48 0%, #28B87B 100%)',
  }}
>
  
  <h1
    className="text-8xl font-bricolage text-white flex items-center gap-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
    style={{
      transform: pageOpened ? 'translateX(-100%)' : 'translateX(0)',
      opacity: pageOpened ? 0 : 1,
    }}
  >
    <span className="text-8xl font-bricolage font-light">|</span> QNEST
  </h1>
</div>

 
      <div
        className="w-full mt-16 overflow-hidden relative"
        ref={heroRef}
        style={{ cursor: isHovering ? 'none' : 'default' }}
      >
        {/* ✅ Custom Cursor Zoom Effect */}
        {isHovering && (
          <div
            className="fixed pointer-events-none z-40 rounded-full border-2 border-green-800 transition-all duration-150 ease-out"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              width: '100px',
              height: '100px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(22, 109, 72, 0.1)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <div className="absolute inset-0 rounded-full border border-green-400 opacity-50 animate-ping" />
          </div>
        )}

        {/* ✅ Radial Background Section */}
        <div
          className="md:h-[100vh] h-[65vh] w-full flex flex-col md:pt-24 pt-12 justify-start items-center relative"
          style={{
            background: 'radial-gradient(circle, #FFF9F3 0%, #C8FFD7 100%)',
            opacity: pageOpened ? 1 : 0,
            transform: pageOpened ? 'scale(1.05)' : 'scale(0.95)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s',
          }}
        >
          <H1 className="font-thin text-[#166D48] text-center mx-2 px-2 md:mx-20 md:px-20">
            Sed ut perspiciatis Unde <br /> Seduo ut perspiciatis
          </H1>

          {/* ✅ Image */}
          <div className="absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
            <img
              src={Image1}
              alt="Laptop application interface"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* ✅ White Section with Content */}
        <div
          className="bg-white py-12 md:px-20 px-10 sm:py-16 md:py-20 lg:pt-80 lg:pb-40"
          ref={contentRef}
        >
          <div className="w-full lg:mt-28 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start px-4 sm:px-6 lg:px-8">
              {/* Left Heading */}
              <div
                className="space-y-4 transition-all duration-1000 ease-out"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <h2
                  className="text-3xl font-bricolage md:text-4xl lg:text-5xl leading-tight"
                  style={{
                    background: 'linear-gradient(90deg, #28B87B 0%, #F99526 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Sed ut perspiciatis Unde <br />Seduo ut perspiciatis
                </h2>
              </div>

              {/* Right Paragraph */}
              <div
                className="space-y-4 transition-all duration-1000 ease-out"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: '300ms',
                }}
              >
                <P className="text-black lg:pt-20 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
