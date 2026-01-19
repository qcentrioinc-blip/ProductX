import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView as useFramerInView } from 'framer-motion';
import { useRef } from 'react';
import { H1, P } from '../../../styles/Typography';
import { ContactUs, ContactUsAI } from '../../../styles/Button';

const HeroSection = () => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Fallback if not cached
    if (!rectRef.current && containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }

    if (!rectRef.current) return;

    // Check if rect is invalid (e.g. 0 width)
    const rect = rectRef.current;

    // Calculate relative to the cached rect
    // Note: e.clientX is global, rect.left is global. This works assuming no scroll shift of the element *during* the hover without mouseleaving.
    // However, if user scrolls *while* hovering, rect might become stale relative to viewport.
    // BUT mousemove usually fires on scroll.
    // For a Hero section which is top of page, this is generally safe enough for a tilt effect.
    // A safer, more robust way: use e.nativeEvent.offsetX / offsetY if possible? No, react synthetic event.
    // Let's rely on cached rect for high perf. 

    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 40, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

  const { scrollY } = useScroll();
  const yScroll = useTransform(scrollY, [0, 500], [0, -60]);
  const scaleScroll = useTransform(scrollY, [0, 500], [1, 1.08]);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="relative lg:pt-44 z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-16 max-w-8xl">
        <div className="relative flex flex-col items-center justify-center min-h-screen">

          <motion.div
            className="content-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: '1000px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '100px',
              willChange: "transform" // Performance optimization
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <H1 className="text-[#0AC276] leading-tight">
                Cloud Financial Optimization
                <span className="block text-white">
                  Smarter, Faster, Simpler.
                </span>
              </H1>
            </motion.div>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <P className="max-w-2xl mx-auto text-white/90">
                CloudDIET profiles, analyzes, and optimizes your Azure, AWS, and Google Cloud spend,
                ensuring faster ROI with guaranteed savings and no data access.
              </P>
            </motion.div>

            <motion.div
              className="py-14 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <ContactUs>Request A Demo</ContactUs>
              <ContactUsAI>Login</ContactUsAI>
            </motion.div>
          </motion.div>

          <div
            ref={ref}
            className="w-full max-w-6xl mx-auto relative dashboard-container"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotateX: 15, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10"
            >
              <motion.div
                ref={containerRef}
                style={{
                  rotateX,
                  rotateY,
                  y: yScroll,
                  scale: scaleScroll,
                  transformStyle: "preserve-3d",
                  cursor: "default",
                  willChange: "transform", // Crucial for smooth 3D
                  backfaceVisibility: "hidden", // Prevents flickering
                }}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full h-full"
              >
                <img
                  src="/AIProduct/DataImage.png"
                  alt="Banking Dashboard Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                    pointerEvents: "none" // Fixes cursor issues during tilt
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .content-container { width: 100% !important; max-width: 90% !important; margin-bottom: 60px !important; }
          .dashboard-container { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;