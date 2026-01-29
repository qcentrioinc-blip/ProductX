import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { H1, P } from '../../../styles/Typography';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Global/Navbar/Navbar';

// Prefetch function for routes - triggered on hover
const prefetchRoutes = () => {
  // Now that FloatingLines is statically imported in HeroCombined,
  // we only need to prefetch the main route chunk to get everything.
  import('../../../routes/industries/AIOptimization');
  import('three');

  // Preload hero assets
  const dashImg = new Image();
  dashImg.src = '/AIOptimization/Hero_DashBoard.webp';
};

interface IndustryCardProps {
  title: string;
  image: string;
  isActive: boolean;
  isReady: boolean;
  isMobile: boolean;
  onClick: () => void;
  url: string;
  onComingSoonClick: (title: string) => void;
  onNavigate: (url: string) => void;
  onPrefetch?: () => void;
}

const IndustryCard = React.forwardRef<HTMLDivElement, IndustryCardProps>(
  ({ title, image, isReady, isMobile, onClick, url, onComingSoonClick, onNavigate, onPrefetch }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasPrefetched = useRef(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
      // Prefetch on first hover for ready items
      if (isReady && onPrefetch && !hasPrefetched.current) {
        hasPrefetched.current = true;
        onPrefetch();
      }
    };

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (!isReady) {
        onComingSoonClick(title);
      } else {
        // Also trigger prefetch on click in case hover didn't happen (touch devices)
        if (onPrefetch && !hasPrefetched.current) {
          hasPrefetched.current = true;
          onPrefetch();
        }
        onNavigate(url);
      }
    };

    // 
    // Mobile/Tablet: Show text ALWAYS for non-ready items.
    // Desktop: Show text ONLY on hover for non-ready items.
    //
    const showComingSoonText = !isReady && (isHovered || isMobile);

    return (
      <motion.div
        ref={ref}
        layout
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer group shrink-0 xl:w-full flex flex-col"
        initial={false}
        animate={{
          // Logic: Ready always visible (1), Non-ready dimmed (0.6) unless hovered (1) or on mobile (1).
          opacity: isReady ? 1 : (isHovered || isMobile ? 1 : 0.6),

          // Logic: Scale up ONLY on hover (desktop) OR always on mobile if you want touch feedback, 
          // but keeping it scale-1 on mobile usually looks cleaner.
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        <div
          onClick={handleClick}
          className="block relative overflow-hidden rounded-xl transition-all duration-700 cursor-pointer"
          style={{ height: '140px', width: '260px' }}
        >
          {/* Image */}
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-1000 ${isReady
              ? 'brightness-100 group-hover:brightness-110'
              : 'brightness-75'
              } ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          {/* Overlay */}
          <div className={`absolute inset-0 flex flex-col justify-between p-4 transition-all duration-500 z-10 ${isReady
            ? 'bg-transparent'
            : showComingSoonText
              ? 'bg-black/75'
              : 'bg-black/20'
            }`}>

            {/* 1. CENTER: Scrolling Text */}
            {showComingSoonText && (
              <div className="absolute inset-0 flex items-center justify-center w-full overflow-hidden pointer-events-none z-0">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="flex whitespace-nowrap"
                >
                  <span className="text-xl lg:text-3xl font-bold font-bricolage uppercase tracking-[0.1em] text-white/90 mx-4">Coming Soon</span>
                  <span className="text-xl lg:text-3xl font-bold font-bricolage uppercase tracking-[0.1em] text-white/30 mx-4">•</span>
                  <span className="text-xl lg:text-3xl font-bold font-bricolage uppercase tracking-[0.1em] text-white/90 mx-4">Coming Soon</span>
                  <span className="text-xl lg:text-3xl font-bold font-bricolage uppercase tracking-[0.1em] text-white/30 mx-4">•</span>
                  <span className="text-xl lg:text-3xl font-bold font-bricolage uppercase tracking-[0.1em] text-white/90 mx-4">Coming Soon</span>
                </motion.div>
              </div>
            )}

            {/* 2. BOTTOM: Title & Icon */}
            <div className="relative z-20 w-full mt-auto">
              <div className="flex justify-between items-center w-full">
                <span className={`font-semibold text-base lg:text-base tracking-wider transition-all ${isReady
                  ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                  : 'text-white'
                  }`}>
                  {title}
                </span>

                <div className={`p-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${isReady
                  ? 'bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] text-white'
                  : 'bg-white/10 text-white'
                  }`}>
                  {isReady ? (
                    <ArrowUpRight size={16} className="drop-shadow-sm" />
                  ) : (
                    <Clock size={16} className="drop-shadow-sm" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Border */}
          {isReady && isHovered && (
            <motion.div layoutId="activeGlowBorder"
              className="absolute inset-0 border-2 border-white/70 rounded-xl z-30 pointer-events-none"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          )}
        </div>
      </motion.div>
    )
  }
);

const Toast = ({ message, isVisible }: { message: string, isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="bg-[#1a1a1a] border border-white/20 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <Clock size={18} className="text-gray-400" />
            <span className="text-sm font-medium tracking-wide">
              {message} <span className="text-gray-400 font-normal">- Coming Soon</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function InteractiveHeroSection() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [toast, setToast] = useState<{ show: boolean, message: string }>({ show: false, message: '' });
  const [isMobile, setIsMobile] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useRef(true);

  // No prefetch on mount - let landing page load fully first

  // Detect Mobile/Tablet screens (< 1280px / xl breakpoint)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const industries = [
    { title: 'Cloud Finops AI', image: '/Global-Landing-Page/AI.webp', url: '/industries/cloud-finops-ai', isReady: true },
    { title: 'Banking and Finance', image: '/Global-Landing-Page/BNF.webp', url: '/industries/banking-and-finance', isReady: false },
    { title: 'EHR and PMS', image: '/Global-Landing-Page/EHR.webp', url: '/industries/ehr-and-pms', isReady: false },
    { title: 'High Tech', image: '/Global-Landing-Page/HighTech.webp', url: '/industries/high-tech', isReady: false }
  ];

  const handleComingSoon = (title: string) => {
    setToast({ show: true, message: title });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => (isHeroVisible.current = entry.isIntersecting),
      { threshold: 0.3 }
    );
    heroRef.current && observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHeroVisible.current) return;
    // Only scroll if user manually clicked/updated index (logic happens in onClick)
    cardRefs.current[activeIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeIndex]);

  useEffect(() => {
    // DISABLE AUTO SCROLL ON MOBILE/TABLET
    if (isMobile) return;

    // ENABLE AUTO SCROLL ONLY ON DESKTOP
    const interval = setInterval(() => setActiveIndex((p) => (p + 1) % industries.length), 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      <Navbar />
      <div className="bg-black overflow-x-hidden font-quicksand">
        <div ref={heroRef} className="relative min-h-[100svh] md:min-h-[70svh] xl:min-h-screen flex items-center md:pt-15 xl:py-6">
          <div className="max-w-8xl xl:px-10 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-[60%_1fr_20%] gap-10 xl:gap-8 items-stretch pt-28 md:pt-15 xl:pr-10">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col justify-between mx-10">
                <div className="space-y-6">
                  <H1 className="text-white">
                    Shaping The Future <br className="hidden sm:block" /> Across Every Sector
                  </H1>
                  <P className="text-[#F5F5F5] max-w-2xl leading-relaxed">
                    Qnest Global helps businesses modernize with AI, CRM, HRM, and secure cloud platforms. Our teams design, build, and manage solutions that improve efficiency, cut risk, and support long‑term growth.
                  </P>
                  <Link to="/contact" className="inline-block w-fit">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="bg-white w-fit text-black px-8 py-4 rounded-2xl font-bold text-sm cursor-pointer flex items-center gap-2 mt-4 xl:mt-0 shadow-xl">
                      Get Your Custom Proposal <ArrowUpRight size={18} />
                    </motion.button>
                  </Link>
                </div>

                <div className="flex flex-wrap font-bricolage gap-10 xl:gap-15 mt-12 xl:mt-0">
                  {[
                    { label: '30%', sub: 'AI-Driven Outcomes' },
                    { label: '24/7', sub: 'End-to-End Delivery' },
                    { label: '99.9%', sub: 'Secure, Scalable Cloud' }
                  ].map((stat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-[4px] bg-[#92278F] opacity-100"></div>
                      <div>
                        <div className="text-4xl xl:text-6xl font-bold text-white whitespace-nowrap tracking-tighter">{stat.label}</div>
                        <div className="text-[#F5F5F5] text-[10px] mt-1 uppercase tracking-widest font-quicksand">{stat.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="hidden xl:block"></div>

              <div className="relative flex flex-col justify-center mt-10 xl:mt-0">
                <div ref={scrollContainerRef}
                  className="flex flex-row xl:flex-col items-center xl:items-end gap-6 xl:gap-6 overflow-x-auto xl:overflow-visible pt-6 pb-12 xl:py-0 scroll-smooth no-scrollbar justify-start xl:justify-end px-6 xl:px-0">

                  <AnimatePresence mode="popLayout">
                    {industries.map((industry, index) => (
                      <div key={industry.title} className="flex flex-col items-center">
                        <IndustryCard
                          ref={(el) => { cardRefs.current[index] = el; }}
                          title={industry.title}
                          image={industry.image}
                          url={industry.url}
                          isReady={industry.isReady}
                          isActive={activeIndex === index}
                          isMobile={isMobile}
                          onClick={() => setActiveIndex(index)}
                          onComingSoonClick={handleComingSoon}
                          onNavigate={(url) => navigate(url)}
                          onPrefetch={prefetchRoutes}
                        />
                      </div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[120px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <Toast
          message={toast.message}
          isVisible={toast.show}
        />
      </div>
    </>
  );
}