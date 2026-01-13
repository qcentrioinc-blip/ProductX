import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { H1, P } from '../../../styles/Typography';
import { Link } from 'react-router-dom';
import Navbar from '../../Global/Navbar/Navbar';

interface IndustryCardProps {
  title: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
  url: string;
}

const IndustryCard = React.forwardRef<HTMLDivElement, IndustryCardProps>(
  ({ title, image, isActive, onClick, url }, ref) => (
    <motion.div
      ref={ref}
      layout
      onClick={onClick}
      className="relative cursor-pointer group shrink-0 xl:w-full flex flex-col xl:block"
      initial={false}
      animate={{
        scale: isActive ? 1.05 : 1,
        opacity: isActive ? 1 : 0.6,
      }}
      whileHover={{ opacity: 1, scale: isActive ? 1.05 : 1.02 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {/* Image Container */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative overflow-hidden rounded-xl transition-all duration-700 ${
          isActive ? 'shadow-[0_0_40px_rgba(255,255,255,0.2)]' : ''
        }`}
        style={{ height: '140px', width: '260px' }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Desktop Overlay - Title on hover/active */}
        <div className={`hidden xl:flex absolute inset-0 bg-black/40 transition-opacity duration-700 items-end p-4 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          <div className={`flex justify-between items-center w-full transition-transform duration-700 ${
            isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
          }`}>
            <span className="text-white font-semibold text-base tracking-tight">{title}</span>
            <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-md">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </div>
        </div>

        {isActive && (
          <motion.div layoutId="activeGlowBorder"
            className="absolute inset-0 border-2 border-white/70 rounded-xl z-30 pointer-events-none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        )}

        {isActive && (
          <motion.div className="absolute bottom-0 left-0 h-1 bg-white z-20"
            initial={{ width: '0%' }} animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }} />
        )}
      </a>

      {/* Mobile/Tablet Title - Below image (always visible) */}
      <div className="xl:hidden mt-4 w-full max-w-[260px]">
        <div className="flex justify-between items-center w-full">
          <span className={`text-white font-semibold text-base tracking-tight transition-all duration-300 ${
            isActive ? 'opacity-100' : 'opacity-60'
          }`}>
            {title}
          </span>
          <div className={`p-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isActive ? 'bg-white/20' : 'bg-white/10'
          }`}>
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>
        
        {/* Active indicator for mobile/tablet */}
        {isActive && (
          <motion.div 
            className="h-0.5 bg-white mt-3"
            initial={{ width: '0%' }} 
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </div>
    </motion.div>
  )
);

export default function InteractiveHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useRef(true);

  const industries = [
    { title: 'Banking and Finance', image: '/LandingPageNew/BNFImage.jpg', url: '/industries/banking-and-finance' },
    { title: 'EHR and PMS', image: '/LandingPageNew/EHRImage.png', url: '/industries/ehr-and-pms' },
    { title: 'High Tech', image: '/LandingPageNew/HighTechImage.png', url: '/industries/high-tech' },
    { title: 'AI Optimization', image: '/LandingPageNew/AI.png', url: '/industries/ai-optimization' }
  ];

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
    cardRefs.current[activeIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => setActiveIndex((p) => (p + 1) % industries.length), 5000);
    return () => clearInterval(interval);
  }, []);

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
                <P className="text-[#F5F5F5] max-w-xl leading-relaxed">
                  Qnest Global helps businesses modernize with AI, CRM, HRM, and secure cloud platforms. Our teams design, build, and manage solutions that improve efficiency, cut risk, and support long‑term growth.
                </P>
                <Link to="/contact" className="inline-block w-fit">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="bg-white w-fit text-black px-8 py-4 rounded-2xl font-bold text-sm cursor-pointer flex items-center gap-2 mt-4 xl:mt-6 shadow-xl">
                    Get Your Custom Proposal <ArrowUpRight size={18} />
                  </motion.button>
                </Link>
              </div>

              <div className="flex flex-wrap font-bricolage gap-10 xl:gap-15 mt-12 xl:mt-0">
                {[
                  { label: '30% + ROI', sub: 'AI-Driven Outcomes' },
                  { label: '24/7', sub: 'End-to-End Delivery' },
                  { label: '99.9%', sub: 'Secure, Scalable Cloud' }
                ].map((stat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-[3px] bg-gradient-to-b from-white to-transparent opacity-50"></div>
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
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
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
    </div>
    </>
  );
}