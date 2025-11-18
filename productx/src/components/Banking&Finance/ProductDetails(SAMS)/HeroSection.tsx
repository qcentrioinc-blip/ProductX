import React, { useRef } from 'react';
import { ContactUs } from '../../../styles/Button';
import { H1, P } from '../../../styles/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';

// Define proper TypeScript interfaces
interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  index?: number;
}

interface ScrollAnimatedCircleProps {
  size: string;
  border: string;
  color: string;
  translate: string;
  className?: string;
  parallaxIntensity?: number;
}

// Animation variants with proper typing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const floatingAnimation = {
  y: [-15, 15, -15],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const rotateAnimation = {
  rotate: [0, 8, 0, -8, 0],
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const scalePulseAnimation = {
  scale: [1, 1.08, 1],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// Animated Image Component with 3D Tilt - SLOWER HOVER
const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className, index = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring" as const,
          damping: 15,
          stiffness: 100,
          delay: index * 0.1
        }
      } : {}}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.5 }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d" as const
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer ${className}`}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d" as const
        }}
        className="relative"
      >
        {/* Purple Gradient Border Container */}
        <motion.div
          className="relative p-1 rounded-lg"
          initial={{ 
            background: "transparent"
          }}
          whileHover={{
            background: "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
            backgroundSize: "300% 300%",
            transition: { 
              duration: 0.5,
              background: { duration: 0.8 }
            }
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "linear"
              }
            }
          }}
        >
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
            whileHover={{
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Animated Carousel Image Component - SLOWER HOVER
const AnimatedCarouselImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          type: "spring" as const,
          damping: 20,
          stiffness: 100,
          duration: 0.8
        }
      } : {}}
      whileHover={{
        scale: 1.04,
        y: -4,
        transition: { duration: 0.5 }
      }}
      className={`relative ${className}`}
    >
      <div className="relative w-full pt-[66.66%] sm:pt-[56.25%] md:pt-[56.25%] lg:pt-[56.25%]">
        {/* Purple Gradient Border Container for Carousel */}
        <motion.div
          className="absolute inset-0 p-1 rounded-lg"
          initial={{ 
            background: "transparent"
          }}
          whileHover={{
            background: "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
            backgroundSize: "300% 300%",
            transition: { 
              duration: 0.5,
              background: { duration: 0.8 }
            }
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "linear"
              }
            }
          }}
        >
          <motion.img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            whileHover={{
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Scroll Animated Circle Component
const ScrollAnimatedCircle: React.FC<ScrollAnimatedCircleProps> = ({ 
  size, 
  border, 
  color, 
  translate, 
  className = "",
  parallaxIntensity = 100 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxIntensity]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      animate={floatingAnimation}
      className={`absolute rounded-full ${size} ${border} ${color} ${translate} ${className}`}
    />
  );
};

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const carouselImages = [
    { id: 1, src: "/SAMS/img1.png", alt: "Dashboard 1" },
    { id: 2, src: "/SAMS/img1.png", alt: "Dashboard 2" },
    { id: 3, src: "/SAMS/img1.png", alt: "Dashboard 3" },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full flex flex-col items-center bg-transparent overflow-hidden"
    >
      <div className="relative w-full flex flex-col">
        {/* Pink Background with animated elements */}
        <motion.div
          className="relative w-full lg:pt-16 flex flex-col items-start md:items-start pb-[20vh] md:pb-[30vh] lg:pb-[35vh] xl:pb-[40vh]"
          style={{
            background: `
              linear-gradient(to bottom, #d7e6ff, #7aa8ff, #1f4fff),
              repeating-linear-gradient(
                to bottom,
                rgba(255,255,255,0.8) 0px,
                rgba(255,255,255,0.8) 0.5px,
                transparent 1px,
                transparent 145px
              )
            `,
            backgroundBlendMode: "overlay",
            opacity: backgroundOpacity
          }}
        >
          {/* Scroll Animated Circles */}
          <ScrollAnimatedCircle
            size="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
            border="border-[6px] md:border-[10px] xl:border-[12px]"
            color="border-[#7087e933]"
            translate="translate-x-1/4 -translate-y-1/4"
            className="opacity-50 md:opacity-70 top-0 right-0"
            parallaxIntensity={150}
          />
          
          <ScrollAnimatedCircle
            size="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[550px] md:h-[550px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px]"
            border="border-[5px] md:border-[8px] xl:border-[8px]"
            color="border-[#FED60033]"
            translate="translate-x-1/4 -translate-y-1/4"
            className="opacity-50 md:opacity-70 top-0 right-0"
            parallaxIntensity={100}
          />

          {/* Additional animated decorative elements */}
          <motion.div
            animate={rotateAnimation}
            className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-200/20 blur-xl"
          />
          <motion.div
            animate={scalePulseAnimation}
            className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-200/30 blur-lg"
          />

          {/* Main Content with scroll effect */}
          <motion.div 
            style={{ y: contentY }}
            variants={containerVariants}
            className="relative z-10 w-full  mx-4 sm:mx-6 lg:mx-10 xl:mx-20 mt-20 md:mt-12 lg:mt-20 xl:mt-24 py-8 sm:py-12 lg:py-16 flex flex-col items-center md:items-start gap-4 sm:gap-6 lg:gap-8 text-center md:text-left"
          >
            <motion.div variants={itemVariants}>
              <H1 className="text-gray-900">
                Lorem ipsum dolor , <br/>consectetur adipis
              </H1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <P className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt mollit anim id est laborum.
              </P>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <ContactUs className="mt-3 sm:mt-6 lg:mt-8">CONTACT US</ContactUs>
            </motion.div>
          </motion.div>

          {/* Images Section */}
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-full px-4 sm:px-6 lg:px-12 xl:px-16"
          >
            {/* Carousel for mobile/tablet */}
            <div 
              className="xl:hidden mx-auto w-full max-w-[800px] sm:max-w-full" 
              style={{ 
                paddingBottom: '30px',
                background: 'transparent' 
              }} 
            >
              <Slider {...carouselSettings}>
                {carouselImages.map((image) => (
                  <div key={image.id} className="p-2 sm:p-4 md:p-6">
                    <AnimatedCarouselImage
                      src={image.src}
                      alt={image.alt}
                      className="p-2"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Desktop Image Layout */}
            <motion.div 
              variants={containerVariants}
              className="hidden xl:flex gap-6 lg:gap-12 xl:gap-16 overflow-x-auto xl:overflow-x-visible justify-start xl:justify-center snap-x snap-mandatory scroll-smooth"
              style={{ background: 'transparent' }}
            >
              {[1, 2, 3].map((i, index) => (
                <AnimatedImage
                  key={i}
                  src="/SAMS/img1.png"
                  alt={`Dashboard ${i}`}
                  index={index}
                  className="flex-shrink-0 rounded-lg w-[450px] h-[250px] sm:w-[450px] sm:h-[320px] md:w-[550px] md:h-[390px] lg:w-[550px] lg:h-[390px] xl:w-[400px] xl:h-[480px]"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* White Background Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="w-full bg-[#FED600] h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh]" 
        />
      </div>
    </motion.section>
  );
};
export default HeroSection;