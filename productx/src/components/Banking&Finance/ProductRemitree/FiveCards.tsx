import { H1, H2, H3, P } from "../../../styles/Typography";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// MagicBento component implementation
const createParticleElement = (x: number, y: number, color: string = '132, 0, 255'): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  particleCount = 12,
  glowColor = '132, 0, 255',
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true
}: {
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const clearAllParticles = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  };

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;

      // Initialize particles on first hover
      if (!particlesInitialized.current && cardRef.current) {
        const { width, height } = cardRef.current.getBoundingClientRect();
        memoizedParticles.current = Array.from({ length: particleCount }, () =>
          createParticleElement(Math.random() * width, Math.random() * height, glowColor)
        );
        particlesInitialized.current = true;
      }

      // Animate particles
      if (particlesInitialized.current) {
        memoizedParticles.current.forEach((particle, index) => {
          const timeoutId = window.setTimeout(() => {
            if (!isHoveredRef.current || !cardRef.current) return;

            const clone = particle.cloneNode(true) as HTMLDivElement;
            cardRef.current.appendChild(clone);
            particlesRef.current.push(clone);

            gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

            gsap.to(clone, {
              x: (Math.random() - 0.5) * 100,
              y: (Math.random() - 0.5) * 100,
              rotation: Math.random() * 360,
              duration: 2 + Math.random() * 2,
              ease: 'none',
              repeat: -1,
              yoyo: true
            });

            gsap.to(clone, {
              opacity: 0.3,
              duration: 1.5,
              ease: 'power2.inOut',
              repeat: -1,
              yoyo: true
            });
          }, index * 100);

          timeoutsRef.current.push(timeoutId);
        });
      }

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor, particleCount]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const FiveCards = () => {
  const smallCards = [
    {
      title: "Lorem Ipsum",
      description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    },
    {
      title: "Lorem Ipsum",
      description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    },
    {
      title: "Lorem Ipsum",
      description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    },
    {
      title: "Lorem Ipsum",
      description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
      image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
    }
  ];

  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-8xl mx-auto px-10">
        <H1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          Sed ut perspiciatis unde
        </H1>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
          {/* Left Section - 4 Small Cards with MagicBento animations */}
          <div className="xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {smallCards.map((card, index) => (
              <ParticleCard
                key={index}
                className="bg-[#fafafa] text-black rounded-lg p-4 sm:p-6 md:p-7 lg:p-9 flex flex-col h-full border border-gray-300"
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                particleCount={8}
                glowColor="59, 130, 246" // Blue color matching your theme
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500 rounded-full mb-3 sm:mb-4"></div>
                <H3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">{card.title}</H3>
                <P className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </P>
              </ParticleCard>
            ))}
          </div>

          {/* Right Section - Large Card with MagicBento animations */}
          <div className="xl:col-span-6 mt-4 sm:mt-6 xl:mt-0">
            <ParticleCard
              className="bg-[#fafafa] text-black rounded-lg p-4 sm:p-6 md:p-7 lg:p-8 h-full flex flex-col border border-gray-300"
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              particleCount={12}
              glowColor="59, 130, 246" // Blue color matching your theme
            >
              <H2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                Conse adipiscing werdas
              </H2>
              <P className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Duis qute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt
              </P>
              <div className="flex-1 bg-gray-300 rounded-lg mt-2 sm:mt-4 min-h-32 sm:min-h-40 md:min-h-48"></div>
            </ParticleCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveCards;