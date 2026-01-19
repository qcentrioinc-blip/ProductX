import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { H2, H3, P } from "../../../../../styles/Typography"

const sections = [
  { id: "optimizations", label: "Productivity" },
  { id: "cloud", label: "Usability" },
  { id: "security", label: "Outbound" },
]

// --- Image URLs for each feature ---
const featureImages = [
  "/AI/Careers/img10.png",
  "/AI/Careers/img7.png",
  "/AI/Careers/img4.png",
  "/AI/Careers/img6.png",
  "/AI/Careers/img10.png",
  "/AI/Careers/img7.png",
  "/AI/Careers/img4.png",
  "/AI/Careers/img6.png",
  "/AI/Careers/img10.png",
]

// --- Configuration Data & Mockups ---
interface Feature {
  id: number;
  title: string;
  description: string;
  color: string;
  highlight: string;
  borderColor: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Instant crypto exchange",
    description: "Swap crypto to crypto or crypto to euros at Tier-1 exchange rates, with access to over 100 trading pairs — all in one seamless platform.",
    color: "bg-blue-600",
    highlight: "text-blue-500",
    borderColor: "border-blue-500",
  },
  {
    id: 2,
    title: "Crypto wallet & personal IBAN",
    description: "Securely store crypto and manage your euro funds with a personal IBAN — all from a single, intuitive interface. Supports BTC, ETH, USDC and more.",
    color: "bg-purple-600",
    highlight: "text-purple-500",
    borderColor: "border-purple-500",
  },
  {
    id: 3,
    title: "Simple deposits & withdrawals",
    description: "Top up your wallet, exchange crypto to euros, and withdraw directly to your IBAN. SEPA/SEPA Instant transfers are fully integrated.",
    color: "bg-emerald-600",
    highlight: "text-emerald-500",
    borderColor: "border-emerald-500",
  },
  {
    id: 4,
    title: "Virtual cards with auto-conversion",
    description: "Issue virtual cards linked to your crypto accounts. Spend fiat or crypto online and offline via your phone, with automatic conversion.",
    color: "bg-rose-600",
    highlight: "text-rose-500",
    borderColor: "border-rose-500",
  },
  {
    id: 5,
    title: "Team collaboration tools",
    description: "Work seamlessly with your team with shared wallets, multi-signature approvals, and role-based access controls for enhanced security.",
    color: "bg-indigo-600",
    highlight: "text-indigo-500",
    borderColor: "border-indigo-500",
  },
  {
    id: 6,
    title: "Advanced analytics dashboard",
    description: "Get detailed insights into your transactions, portfolio performance, and market trends with our comprehensive analytics dashboard.",
    color: "bg-amber-600",
    highlight: "text-amber-500",
    borderColor: "border-amber-500",
  },
  {
    id: 7,
    title: "Enterprise-grade security",
    description: "Bank-level security with biometric authentication, cold storage, and insurance coverage for your digital assets.",
    color: "bg-green-600",
    highlight: "text-green-500",
    borderColor: "border-green-500",
  },
  {
    id: 8,
    title: "Global payment network",
    description: "Send and receive payments in over 50 countries with instant settlement and competitive exchange rates.",
    color: "bg-cyan-600",
    highlight: "text-cyan-500",
    borderColor: "border-cyan-500",
  },
  {
    id: 9,
    title: "API & automation tools",
    description: "Integrate our platform into your business workflows with our comprehensive API and automation tools.",
    color: "bg-orange-600",
    highlight: "text-orange-500",
    borderColor: "border-orange-500",
  },
];

// --- Sub-Component: Feature Visualization (Image & Pagination) ---
interface FeatureVisualizationProps {
  activeFeature: number;
  onDotClick: (index: number) => void;
  onNavigate: (direction: 'start' | 'end' | 'prev' | 'next') => void;
  animate?: boolean;
}

const FeatureVisualization: React.FC<FeatureVisualizationProps> = ({
  activeFeature,
  onDotClick,
  onNavigate,
  animate = true
}) => {
  return (
    <div className="w-full">
      {/* Image Container */}
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[450px] xl:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-white">
        {animate ? (
          // Desktop animation - SMOOTHED SLIDE UP
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 1, 0.5, 1]
                }
              }}
              exit={{
                opacity: 0,
                y: -30,
                transition: {
                  duration: 0.3,
                  ease: "easeIn"
                }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={featureImages[activeFeature]}
                alt={`Feature ${activeFeature + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Feature Indicator */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <div className={`w-3 h-3 rounded-full ${features[activeFeature].color}`}></div>
                  <span className="text-sm font-medium text-gray-900">
                    Feature {features[activeFeature].id}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          // Mobile/Tablet - no animation logic handled here
          <div className="absolute inset-0 w-full h-full">
            <img
              src={featureImages[activeFeature]}
              alt={`Feature ${activeFeature + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <div className={`w-3 h-3 rounded-full ${features[activeFeature].color}`}></div>
                <span className="text-sm font-medium text-gray-900">
                  Feature {features[activeFeature].id}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pagination Controls - Desktop Only */}
      <div className="mt-6 hidden xl:flex justify-center items-center gap-4">
        {/* Start Button */}
        <button
          onClick={() => onNavigate('start')}
          disabled={activeFeature === 0}
          className={`
            px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium transition-all duration-300 shadow-sm
            ${activeFeature === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-indigo-900 hover:text-indigo-900 active:scale-95'}
          `}
        >
          Start
        </button>

        {/* Prev Button (<) */}
        <button
          onClick={() => onNavigate('prev')}
          disabled={activeFeature === 0}
          className={`
            p-2 rounded-lg border border-gray-200 bg-white transition-all duration-300 shadow-sm
            ${activeFeature === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-indigo-900 hover:text-indigo-900 active:scale-95'}
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onDotClick(idx)}
              className={`transition-all duration-300 ${idx === activeFeature
                ? `${features[activeFeature].color} scale-110 shadow-md`
                : "bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
              style={{
                width: idx === activeFeature ? "24px" : "12px",
                height: idx === activeFeature ? "24px" : "12px"
              }}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button (>) */}
        <button
          onClick={() => onNavigate('next')}
          disabled={activeFeature === features.length - 1}
          className={`
            p-2 rounded-lg border border-gray-200 bg-white transition-all duration-300 shadow-sm
            ${activeFeature === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-indigo-900 hover:text-indigo-900 active:scale-95'}
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>

        {/* End Button */}
        <button
          onClick={() => onNavigate('end')}
          disabled={activeFeature === features.length - 1}
          className={`
            px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium transition-all duration-300 shadow-sm
            ${activeFeature === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-indigo-900 hover:text-indigo-900 active:scale-95'}
          `}
        >
          End
        </button>
      </div>
    </div>
  );
};

// --- Sub-Component: Text Item (Right Side) ---
interface FeatureItemProps {
  feature: Feature;
  index: number;
  setInView: (i: number) => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  feature,
  index,
  setInView,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px"
  });

  useEffect(() => {
    if (isInView) setInView(index);
  }, [isInView, index, setInView]);

  return (
    <div
      ref={ref}
      className={`
        min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex flex-col justify-center px-6 sm:px-8 py-12 sm:py-16 transition-all duration-500
        ${isInView ? "opacity-100 scale-100" : "opacity-30 scale-95"}
      `}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className={`text-5xl sm:text-6xl font-bold opacity-20 ${feature.highlight}`}>0{feature.id}</span>
        <div className={`p-3 rounded-xl shadow-lg ${feature.color}`}>
          <div className="w-6 h-6"></div>
        </div>
      </div>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        {feature.title}
      </h3>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
        {feature.description}
      </p>
    </div>
  );
};

// --- Sub-Component: Mobile/Tablet Feature Block ---
interface MobileFeatureBlockProps {
  feature: Feature;
  index: number;
  isActive: boolean;
}

const MobileFeatureBlock: React.FC<MobileFeatureBlockProps> = ({
  feature,
  index,
  isActive,
}) => {
  return (
    <div
      id={`mobile-feature-${index}`}
      className="w-full scroll-mt-24"
    >
      {/* Text Block */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span
            className={`text-4xl font-bold transition-all duration-300 ${isActive ? `opacity-30 ${feature.highlight}` : "opacity-20 text-gray-400"
              }`}
          >
            0{feature.id}
          </span>
          <div
            className={`p-3 rounded-xl transition-all duration-300 ${feature.color} ${isActive ? "opacity-100 shadow-lg" : "opacity-70 shadow"
              }`}
          >
            <div className="w-6 h-6"></div>
          </div>
        </div>
        <H3
          className={`mb-3 transition-all duration-300 ${isActive ? "text-gray-900" : "text-gray-700"
            }`}
        >
          {feature.title}
        </H3>
        <P
          className={`leading-relaxed transition-all duration-300 ${isActive ? "text-gray-800" : "text-gray-500"
            }`}
        >
          {feature.description}
        </P>
      </div>

      {/* Image Block */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={`image-${index}`}
            initial={{
              opacity: 0,
              y: 20,
              height: 0,
              marginBottom: 0
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: 280,
              marginBottom: 32
            }}
            exit={{
              opacity: 0,
              y: -20,
              height: 0,
              marginBottom: 0
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className="relative w-full rounded-xl overflow-hidden shadow-2xl mt-4"
          >
            <img
              src={featureImages[index]}
              alt={`Feature ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Feature Indicator */}
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <div className={`w-3 h-3 rounded-full ${feature.color}`}></div>
                <span className="text-sm font-medium text-gray-900">
                  Feature {feature.id}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function StickyPremiumSections() {
  const [active, setActive] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [activeFeature, setActiveFeature] = useState<number>(0)

  const storyboardRef = useRef<HTMLDivElement>(null)
  const activeFeatureRef = useRef<number>(0)

  // Store refs for each section
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  useEffect(() => {
    sectionRefs.current = sections.map(section =>
      document.getElementById(section.id)
    )
  }, [])

  // Main scroll handler for section detection (Sections 1 & 2)
  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight

          let currentActive = 0
          let currentProgress = 0

          sections.forEach((section, index) => {
            const element = document.getElementById(section.id)
            if (!element) return

            const rect = element.getBoundingClientRect()
            const elementTop = rect.top + scrollY
            const elementBottom = elementTop + element.offsetHeight

            if (scrollY + windowHeight * 0.2 >= elementTop &&
              scrollY + windowHeight * 0.2 < elementBottom) {
              currentActive = index

              const sectionStart = elementTop - windowHeight * 0.5
              const sectionEnd = elementBottom - windowHeight * 0.5
              const sectionLength = sectionEnd - sectionStart

              if (sectionLength > 0) {
                currentProgress = (scrollY - sectionStart) / sectionLength
                currentProgress = Math.max(0, Math.min(1, currentProgress))
              }
            }
          })

          if (currentProgress === 0) {
            sections.forEach((section, index) => {
              const element = document.getElementById(section.id)
              if (!element) return

              const rect = element.getBoundingClientRect()
              const elementTop = rect.top + scrollY

              if (scrollY >= elementTop) {
                currentActive = index
                currentProgress = 1
              }
            })
          }

          setActive(currentActive)
          setProgress(currentProgress)

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  // FIXED: Unified Scroll Handler for Mobile and Tablet
  // This fixes the "only works on reload" issue by running the calculation immediately on mount
  useEffect(() => {
    // Only run for mobile/tablet screens
    if (typeof window === 'undefined' || window.innerWidth >= 1280) return;

    let ticking = false;

    const updateActiveFeature = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const viewportCenter = scrollY + viewportHeight / 2;

        let bestMatchIndex = activeFeatureRef.current;
        let closestDistance = Infinity;

        // Find feature block closest to viewport center
        for (let i = 0; i < features.length; i++) {
          const element = document.getElementById(`mobile-feature-${i}`);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          const elementTop = scrollY + rect.top;
          const elementHeight = rect.height;
          const elementCenter = elementTop + elementHeight / 2;

          // Calculate distance from viewport center
          const distance = Math.abs(elementCenter - viewportCenter);

          // Check if element is mostly in viewport
          const isInViewport = rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;

          if (isInViewport && distance < closestDistance) {
            closestDistance = distance;
            bestMatchIndex = i;
          }
        }

        // Only update if changed
        if (bestMatchIndex !== activeFeatureRef.current) {
          setActiveFeature(bestMatchIndex);
          activeFeatureRef.current = bestMatchIndex;
        }

        ticking = false;
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", updateActiveFeature, { passive: true });

    // CRITICAL FIX: Initial Call
    // This runs immediately to fix the "only works on reload" issue
    updateActiveFeature();

    return () => {
      window.removeEventListener("scroll", updateActiveFeature);
    };
  }, []);

  // Desktop scroll handler for feature activation (Section 3)
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1280) return;

    const handleDesktopScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + viewportHeight / 2;

      let bestMatchIndex = activeFeatureRef.current;
      let closestDistance = Infinity;

      // Find the feature text element closest to viewport center
      features.forEach((_, index) => {
        const element = document.querySelector(`[data-feature-index="${index}"]`);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementTop = scrollY + rect.top;
        const elementHeight = rect.height;
        const elementCenter = elementTop + elementHeight / 2;

        const distance = Math.abs(elementCenter - viewportCenter);

        // Check if element is mostly in viewport
        const isInViewport = rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;

        if (isInViewport && distance < closestDistance) {
          closestDistance = distance;
          bestMatchIndex = index;
        }
      });

      if (bestMatchIndex !== activeFeatureRef.current) {
        setActiveFeature(bestMatchIndex);
        activeFeatureRef.current = bestMatchIndex;
      }
    };

    // Throttle desktop scroll
    let desktopScrollTimeout: number | null = null;
    const throttledDesktopScroll = () => {
      if (desktopScrollTimeout) return;

      desktopScrollTimeout = window.setTimeout(() => {
        handleDesktopScroll();
        desktopScrollTimeout = null;
      }, 16);
    };

    window.addEventListener("scroll", throttledDesktopScroll, { passive: true });

    // Initial calculation
    handleDesktopScroll();

    return () => {
      window.removeEventListener("scroll", throttledDesktopScroll);
      if (desktopScrollTimeout) {
        clearTimeout(desktopScrollTimeout);
      }
    };
  }, []);

  // Scroll to section handler
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  // Handle dot click for desktop
  const handleDotClick = (index: number) => {
    setActiveFeature(index)
    // Scroll to the text element associated with this feature
    const element = document.querySelector(`[data-feature-index="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // Handle Navigation buttons for desktop (Start, End, Prev, Next)
  const handleNavigate = (direction: 'start' | 'end' | 'prev' | 'next') => {
    let newIndex = activeFeature;

    if (direction === 'start') newIndex = 0;
    if (direction === 'end') newIndex = features.length - 1;
    if (direction === 'prev') newIndex = Math.max(0, activeFeature - 1);
    if (direction === 'next') newIndex = Math.min(features.length - 1, activeFeature + 1);

    if (newIndex !== activeFeature) {
      setActiveFeature(newIndex);

      // Priority 1: Scroll Desktop Element (ensures image updates via scroll detection)
      const desktopElement = document.querySelector(`[data-feature-index="${newIndex}"]`);
      if (desktopElement && window.innerWidth >= 1280) {
        desktopElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      // Priority 2: Scroll Mobile Element
      else {
        const mobileElement = document.getElementById(`mobile-feature-${newIndex}`);
        if (mobileElement) {
          const yOffset = -80;
          const y = mobileElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  }

  return (
    <div className="relative w-full overflow-visible">
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
        <div className="max-w-8xl mx-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center justify-between w-full gap-3">
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(i)}
                  className={`px-4 py-2 text-sm font-medium font-bricolage rounded-full transition-all duration-300 shadow-sm
                    ${active === i
                      ? "bg-indigo-900 text-white shadow-lg"
                      : "text-gray-600 hover:text-indigo-900 hover:bg-gray-100"
                    }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-indigo-900 shadow-sm"
              animate={{ width: `${((active + progress) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-4 sm:mx-6 lg:mx-6 flex flex-col lg:flex-row items-start gap-8 lg:gap-10">

        {/* LEFT NAV (Desktop and iPad Pro - lg screens and above) */}
        <div className="hidden lg:block w-56 sticky top-32 space-y-4 lg:mt-14 xl:mt-20">
          {sections.map((s, i) => (
            <div key={s.id} className="relative">
              <button
                onClick={() => scrollToSection(i)}
                className={`w-full flex items-center gap-2 uppercase text-[16px] md:text-[20px] lg:text-[24px]
                  font-bricolage leading-[120%] transition-all duration-300 
                  ${active === i ? "text-indigo-900 font-semibold" : "text-gray-400 hover:text-gray-600"}`}
              >
                <span className={`h-2 w-2 rounded-full transition-all duration-300 flex-shrink-0 
                  ${active === i ? "bg-indigo-900 shadow" : "bg-gray-300"}`} />
                <span className="text-left">{s.label}</span>
              </button>

              {/* Progress bar container */}
              {/* Progress bar */}
              {active === i && (
                <div className="relative mt-2 h-[2px] w-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-indigo-900"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              )}

            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-24 md:space-y-40 lg:space-y-48">

          {/* Section 1 */}
          <section
            id="optimizations"
            className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] scroll-mt-20 xl:scroll-mt-32 mt-4 lg:mt-10 xl:mt-16 mx-6 lg:mx-4"
          >
            <H2 className="text-indigo-900">
              Lorem ipsum dolor
              <br className="hidden lg:block" />
              <span className="hidden lg:inline-block lg:ml-60 xl:ml-100" />
              sit amet Lorem
            </H2>

            <P className="mt-6 md:mt-8 xl:mt-10 max-w-full md:max-w-3xl xl:max-w-5xl leading-relaxed">
              Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus. Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.
            </P>
            <P className="mt-4 max-w-full md:max-w-3xl xl:max-w-5xl leading-relaxed">
              Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus. Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.Sed ac faucibus lectus. Ut sed eros vel sapien tristique. Sed ac faucibus lectus.
            </P>

            <div className="mt-10 md:mt-10 xl:mt-12 w-full lg:w-[750px] xl:w-[1000px] h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[550px] rounded-xl lg:rounded-2xl overflow-hidden bg-white">
              <img
                src="/AI/Careers/img10.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16">
              <H2 className="text-indigo-900">
                Transform Your Cloud
                <br className="hidden lg:block" />
                <span className="hidden lg:inline-block lg:ml-60 xl:ml-100" />
                Spend with AI Insights
              </H2>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:mt-4">

                {/* LEFT BLOCK */}
                <div className="mt-3 md:mt-4 lg:mt-6 lg:p-6">
                  <H3 className="text-indigo-900 mb-3">
                    Engineering-Led Profiling
                  </H3>
                  <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                    CloudDIET’s AI-powered profiler analyzes Azure configuration, usage, and billing metadata without accessing your data. It identifies misconfigurations, over-provisioning, and optimization opportunities across IaaS, PaaS, and Azure services.
                  </P>

                  <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full md:w-[700px] lg:w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl bg-white shadow-md overflow-hidden">
                    <img
                      src="/AI/Careers/img10.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>

                {/* RIGHT BLOCK */}
                <div className="xl:mt-6 md:mt-6 lg:mt-3 lg:p-6">
                  <H3 className="text-indigo-900 mb-3">
                    Advanced Cost Intelligence
                  </H3>
                  <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                    Go beyond basic FinOps with deep cost attribution, granular spend breakdowns, and trend analysis. View costs at the resource, table, or SKU level—insights standard Azure billing can't provide.
                  </P>

                  <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full md:w-[700px] lg:w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl bg-white shadow-md overflow-hidden">
                    <img
                      src="/AI/Careers/img10.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Section 2 */}
          <section
            id="cloud"
            className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] scroll-mt-20 lg:scroll-mt-32"
          >
            <H2 className="text-indigo-900 mx-6">
              Engineered for Azure Cost
              <br className="hidden lg:block" />
              <span className="hidden lg:inline-block lg:ml-60 xl:ml-100" />
              Intelligence & Savings
            </H2>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:mt-6">

              {/* LEFT BLOCK */}
              <div className="p-6 md:mt-6 lg:mt-8">
                <H3 className="text-indigo-900 mb-3">
                  Savings Plan Designer 
                </H3>
                <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                  Model and optimize Azure Savings Plan commitments with interactive what-if analysis. Adjust terms, commitment percentages, and forecast savings while avoiding overcommitment—all backed by real usage data. 
                </P>

                <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full md:w-[700px] lg:w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl bg-white shadow-2xl overflow-hidden">
                  <img
                    src="/AI/Careers/img10.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>

              {/* RIGHT BLOCK */}
              <div className="p-6 md:mt-6 lg:mt-8">
                <H3 className="text-indigo-900 mb-3">
                  Guided Optimization Workflows 
                </H3>
                <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                  Receive categorized savings opportunities with detailed implementation steps, risk assessments, and effort levels (Minimal, Moderate, Significant). CloudDIET helps you prioritize and execute optimizations with confidence. 
                </P>

                <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full md:w-[700px] lg:w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl bg-white shadow-2xl overflow-hidden">
                  <img
                    src="/AI/Careers/img10.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 - RESPONSIVE STICKY SCROLL SECTION */}
          <section
            ref={storyboardRef}
            id="security"
            className="relative w-full bg-white font-bricolage"
          >
            {/* Desktop Layout (xl screens and above - 1280px+) */}
            <div className="hidden xl:flex relative w-full max-w-[1400px] mx-auto flex-row">
              <div className="flex-1 h-screen sticky top-0 flex items-center justify-center overflow-hidden p-6 lg:p-8 xl:p-10">
                <div className="w-full max-w-[600px]">
                  <FeatureVisualization
                    activeFeature={activeFeature}
                    onDotClick={handleDotClick}
                    onNavigate={handleNavigate}
                    animate={true}
                  />
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <div className="h-[15vh]" />

                <div className="flex flex-col pb-20">
                  {features.map((feature, index) => (
                    <div key={feature.id} data-feature-index={index}>
                      <FeatureItem
                        feature={feature}
                        index={index}
                        setInView={(i) => setActiveFeature(i)}
                      />
                    </div>
                  ))}
                </div>

                <div className="h-[15vh]" />
              </div>
            </div>

            {/* Mobile & Tablet Layout (below xl screens - <1280px) */}
            <div className="xl:hidden w-full py-8 sm:py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Vertical Stack of Feature Blocks */}
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={feature.id} id={`mobile-feature-${index}`}>
                      <MobileFeatureBlock
                        feature={feature}
                        index={index}
                        isActive={activeFeature === index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </section>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @media (max-width: 768px) {
          .max-w-8xl {
            max-width: 100%;
          }
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        /* Glow effect for active text blocks */
        .glow-effect {
          box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 0 20px -5px currentColor;
        }
        
        /* Smooth transitions for mobile features */
        #mobile-feature-* {
          transition: all 0.3s ease-out;
        }
        
        /* Better scroll performance */
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}