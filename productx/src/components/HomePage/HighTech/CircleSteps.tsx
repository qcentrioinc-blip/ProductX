import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Type definitions
interface Step {
  text: string;
  position: 'left' | 'right';
  bgGradient: string;
  sphereGradient: string;
}

interface ParticleSphereProps {
  gradient: string;
}

interface AnimatedSphereProps {
  gradient: string;
  position: 'left' | 'right';
  index: number;
}

interface GlitchTextProps {
  children: React.ReactNode;
  color?: string;
}

const CircleSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const steps: Step[] = [
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'right',
      bgGradient: 'linear-gradient(90deg, #B8A0D8 0%, #8B7AB8 20%, #7B52AB 45%, #5F3C8E 70%, #3D2456 85%, #000000 100%)',
      sphereGradient: 'radial-gradient(circle at 30% 30%, #B366FF 0%, #8338EC 40%, #5F2BA8 70%, #3D1970 100%)',
    },
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'left',
      bgGradient: 'linear-gradient(90deg, #000000 0%, #4A2B1A 15%, #8B5A2B 35%, #D4853D 60%, #E89D4D 100%)',
      sphereGradient: 'radial-gradient(circle at 35% 35%, #FFB366 0%, #F99526 35%, #D47520 60%, #8B4513 85%, #3D1F0F 100%)',
    },
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'right',
      bgGradient: 'linear-gradient(90deg, #D0D0D0 0%, #9B9B9B 25%, #6B6B6B 45%, #3A3A3A 70%, #1A1A1A 85%, #000000 100%)',
      sphereGradient: 'radial-gradient(circle at 30% 30%, #4A4A4A 0%, #252525 35%, #111111 60%, #030008 85%, #000000 100%)',
    },
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'left',
      bgGradient: 'linear-gradient(90deg, #000000 0%, #4B4B4B 15%, #7B7B7B 35%, #9B9B9B 55%, #BABABA 80%, #D0D0D0 100%)',
      sphereGradient: 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #E8E8E8 25%, #D7D7D7 45%, #AFAFAF 70%, #7A7A7A 100%)',
    },
  ];

  // Get animation direction based on index
  const getAnimationDirection = (index: number): 'left' | 'right' => {
    // Step 1 (index 0): from left
    // Step 2 (index 1): from right  
    // Step 3 (index 2): from left (opposite of before)
    // Step 4 (index 3): from right (opposite of before)
    switch(index) {
      case 0: return 'left';   // Step 1: from left
      case 1: return 'right';  // Step 2: from right
      case 2: return 'left';   // Step 3: from left (changed from right)
      case 3: return 'right';  // Step 4: from right (changed from left)
      default: return 'left';
    }
  };

  // Get initial X position based on direction
  const getInitialX = (direction: 'left' | 'right'): number => {
    return direction === 'left' ? -200 : 200;
  };

  // Particle effects for spheres
  const ParticleSphere = ({ gradient }: ParticleSphereProps) => {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: gradient.includes('#B366FF') 
                ? 'radial-gradient(circle, #B366FF80)' 
                : gradient.includes('#FFB366') 
                ? 'radial-gradient(circle, #FFB36680)' 
                : 'radial-gradient(circle, #FFFFFF80)',
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 40],
              y: [0, (Math.random() - 0.5) * 40],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'reverse' as const,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    );
  };

  // Enhanced sphere with hologram effect
  const AnimatedSphere = ({ gradient, position, index }: AnimatedSphereProps) => {
    return (
      <motion.div
        className="absolute hidden lg:block"
        style={{
          width: '164px',
          height: '164px',
          borderRadius: '50%',
          background: gradient,
          left: position === 'left' ? '69.05px' : 'auto',
          right: position === 'right' ? '69.05px' : 'auto',
          top: '0',
          boxShadow: position === 'left'
            ? '15px 10px 30px rgba(0, 0, 0, 0.5), inset -10px -10px 20px rgba(0, 0, 0, 0.3), inset 5px 5px 15px rgba(255, 255, 255, 0.1)'
            : '-15px 10px 30px rgba(0, 0, 0, 0.5), inset 10px -10px 20px rgba(0, 0, 0, 0.3), inset -5px 5px 15px rgba(255, 255, 255, 0.1)',
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? {
          scale: 1,
          rotate: 0,
          y: [0, -10, 0],
        } : {}}
        transition={{
          scale: { type: 'spring', stiffness: 200, damping: 20, delay: index * 0.2 + 0.3 },
          rotate: { type: 'spring', stiffness: 100, damping: 15, delay: index * 0.2 + 0.3 },
          y: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse' as const,
            ease: 'easeInOut',
            delay: index * 0.1,
          },
        }}
      >
        <ParticleSphere gradient={gradient} />
        
        {/* Holographic rings */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                borderColor: gradient.includes('#B366FF') 
                  ? '#B366FF40' 
                  : gradient.includes('#FFB366') 
                  ? '#FFB36640' 
                  : '#FFFFFF40',
                width: '100%',
                height: '100%',
                borderWidth: '2px',
                scale: 0.8 + i * 0.3,
              }}
              animate={{
                scale: [0.8 + i * 0.3, 1.2 + i * 0.3, 0.8 + i * 0.3],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  // Glitch text effect for headings
  const GlitchText = ({ children, color = '#F5F5F5' }: GlitchTextProps) => {
    return (
      <div className="relative inline-block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute top-0 left-0"
          style={{ color }}
          initial={{ opacity: 0, x: 0 }}
          animate={isInView ? {
            opacity: [0, 0.3, 0, 0.3, 0],
            x: [-2, 2, -1, 1, 0],
          } : {}}
          transition={{
            duration: 0.3,
            times: [0, 0.2, 0.4, 0.6, 1],
            delay: 0.8,
          }}
        >
          {children}
        </motion.div>
      </div>
    );
  };

  // Step item animation variants with proper TypeScript types
  const stepVariants = {
    // hiddenLeft: { opacity: 0, x: -100, filter: 'blur(10px)' },
    // hiddenRight: { opacity: 0, x: 100, filter: 'blur(10px)' },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      // filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  // Get mobile animation direction based on index
  const getMobileAnimationDirection = (index: number): 'hiddenLeft' | 'hiddenRight' => {
    // Step 1 (index 0): from left
    // Step 2 (index 1): from right  
    // Step 3 (index 2): from left (opposite of before)
    // Step 4 (index 3): from right (opposite of before)
    switch(index) {
      case 0: return 'hiddenLeft';   // Step 1: from left
      case 1: return 'hiddenRight';  // Step 2: from right
      case 2: return 'hiddenLeft';   // Step 3: from left (changed from right)
      case 3: return 'hiddenRight';  // Step 4: from right (changed from left)
      default: return 'hiddenLeft';
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-black overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #7B52AB20 0%, transparent 70%)',
            left: '-200px',
            top: '20%',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #F9952620 0%, transparent 70%)',
            right: '-150px',
            bottom: '30%',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
            delay: 1,
          }}
        />
      </div>

      {/* ========== MOBILE + TABLET LAYOUT ========== */}
      <div className="block lg:hidden relative z-10">
        {/* Header with enhanced animation */}
        <div className="text-center py-8 sm:py-10 md:py-12 bg-transparent px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(24px, 5vw, 32px)',
                lineHeight: '110%',
                color: '#F5F5F5',
                marginBottom: '10px',
              }}
            >
              Sed ut perspiciatis
            </h2>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: '#F99526',
                whiteSpace: 'normal',
              }}
            >
              Unde Seduo ut perspiciatis
            </h3>
          </motion.div>
        </div>

        {/* Steps with enhanced animations */}
        <div className="space-y-4 px-4">
          <AnimatePresence>
            {steps.map((step, index) => {
              const animationDirection = getMobileAnimationDirection(index);
              
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial={animationDirection}
                  animate={isInView ? "visible" : ""}
                  variants={stepVariants}
                  className="relative overflow-hidden rounded-2xl"
                  style={{ background: step.bgGradient }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  <div className="relative flex items-center py-8 sm:py-10 md:py-12 px-4 sm:px-6">
                    <p
                      className="text-white mx-auto text-center text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        lineHeight: '130%',
                        letterSpacing: '0%',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      }}
                    >
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* ========== DESKTOP LAYOUT ========== */}
      <div className="hidden lg:block relative z-10">
        {/* Header Section - Desktop with advanced animations */}
        <div className="text-center py-8 sm:py-12 md:py-14 lg:py-16 bg-transparent px-4 lg:px-0">
          <div className="space-y-4">
            <GlitchText>
              <h2
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  fontSize: '42px',
                  lineHeight: '100%',
                  color: '#F5F5F5',
                  marginBottom: '12px',
                }}
              >
                Sed ut perspiciatis
              </h2>
            </GlitchText>
            <GlitchText color="#F99526">
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: '40px',
                  lineHeight: '86%',
                  letterSpacing: '0%',
                  color: '#F99526',
                  whiteSpace: 'nowrap',
                }}
              >
                Unde Seduo ut perspiciatis
              </h3>
            </GlitchText>
          </div>
        </div>

        {/* Steps Section with Horizontal Stripes - Desktop */}
        <div className="relative">
          <AnimatePresence>
            {steps.map((step, index) => {
              const animationDirection = getAnimationDirection(index);
              const initialX = getInitialX(animationDirection);
              
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ x: initialX, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: index * 0.5,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="relative overflow-hidden"
                  style={{
                    background: step.bgGradient,
                    height: '164px',
                  }}
                  whileHover={{
                    scale: 1.005,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Animated scan line */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                    }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 1,
                    }}
                  />

                  {/* Text Content - Desktop */}
                  <div className="w-full flex justify-center items-center px-4 sm:px-8 md:px-10 lg:px-12 h-full">
                    <motion.p
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-white text-center max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg lg:text-[29px]"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        lineHeight: '100%',
                        textAlign: 'left',
                        letterSpacing: '0%',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      }}
                    >
                      {step.text}
                    </motion.p>
                  </div>

                  {/* Animated Sphere */}
                  <AnimatedSphere 
                    gradient={step.sphereGradient} 
                    position={step.position}
                    index={index}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating particles in background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: 'rgba(255,255,255,0.05)',
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, (Math.random() - 0.5) * 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleSteps;