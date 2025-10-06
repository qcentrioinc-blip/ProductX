'use client'

import { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// Add this import if ScrollContext is exported from a file, adjust the path as needed
import { ScrollContext } from '../../context/ScrollContext';

const VisionImpact: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContext = useContext(ScrollContext);

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "center center"],
        container: scrollContext || undefined
    });

    // Transform values for different elements - V-shape movement (SAME FOR ALL DEVICES)
    const leftImageX = useTransform(scrollYProgress, [0.2, 0.6], [0, -700]);
    const leftImageY = useTransform(scrollYProgress, [0.2, 0.6], [0, -300]); // Move upward
    const leftImageOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.9], [1, 1, 0]);

    const rightImageX = useTransform(scrollYProgress, [0.2, 0.6], [0, 700]);
    const rightImageY = useTransform(scrollYProgress, [0.2, 0.6], [0, -300]); // Move upward
    const rightImageOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.9], [1, 1, 0]);

    // Center image transforms - MAXIMUM SCALING FOR MOBILE
    const centerImageScaleX = useTransform(scrollYProgress, [0.2, 1.2], [1, 15]);
    const centerImageScaleY = useTransform(scrollYProgress, [0.2, 2.5], [1, 10]);
    const centerImageZ = useTransform(scrollYProgress, [0.2, 1.8], [10, 200]);
    const centerImageOpacity = useTransform(scrollYProgress, [0.2, 1], [1, 0.8]);

    // Text animations (SAME FOR ALL DEVICES)
    const textOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);

    return (
        <div className="bg-black min-h-screen py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12 2xl:py-16" id="visionimpact">
            {/* Title Section */}
            <motion.div
                className="flex items-center justify-center px-4 pb-2 sm:pb-0 sm:px-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="text-center">
                    <motion.div
                        className="font-mono text-white text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4 lg:mb-6 opacity-60"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        ( *** )
                    </motion.div>
                    <motion.h1
                        className="text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl mb-2 sm:my-3 md:my-4 lg:my-6 xl:my-8 font-bold text-white tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        style={{
                            fontFamily: '"Bricolage Grotesque", sans-serif',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        From Vision to Impact
                    </motion.h1>
                </div>
            </motion.div>

            {/* This wrapper ensures a solid black background behind both the animation and the final text */}
            <div className="bg-black">
                {/* Main Animation Section */}
                <div
                    ref={containerRef}
                    className="relative h-[140vh] sm:h-[160vh] md:h-[180vh] lg:h-[140vh] xl:h-[160vh] 2xl:h-[180vh]"
                >
                    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                        <motion.div
                            className="flex items-center justify-center w-full max-w-7xl px-2 sm:px-2.5 md:px-3 lg:px-3.5 xl:px-4 relative"
                            style={{ perspective: '2000px' }}
                        >
                            {/* Left Images - V-shape movement */}
                            <motion.div
                                className="flex gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4"
                                style={{
                                    x: leftImageX,
                                    y: leftImageY,
                                    opacity: leftImageOpacity,
                                }}
                            >
                                <motion.div className="relative">
                                    <img
                                        src="/VisionImpact/Vision1.png"
                                        alt="Vision1"
                                        className="w-8 h-14 sm:w-10 sm:h-16 md:w-14 md:h-22 lg:w-18 lg:h-28 xl:w-32 xl:h-48 2xl:w-52 2xl:h-68 object-cover rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                                <motion.div className="relative">
                                    <img
                                        src="/VisionImpact/Vision2.png"
                                        alt="Vision2"
                                        className="w-8 h-14 sm:w-10 sm:h-16 md:w-14 md:h-22 lg:w-18 lg:h-28 xl:w-32 xl:h-48 2xl:w-52 2xl:h-68 object-cover rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Center Image - MAXIMUM SCALING FOR MOBILE FULL SCREEN */}
                            <motion.div
                                className="relative mx-0.5 sm:mx-1 md:mx-1.5 lg:mx-2 xl:mx-3 2xl:mx-4"
                                style={{
                                    scaleX: centerImageScaleX,
                                    scaleY: centerImageScaleY,
                                    zIndex: centerImageZ,
                                    opacity: centerImageOpacity,
                                    transformOrigin: 'center center',
                                    willChange: 'transform',
                                    transform: `scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) translateZ(0)`,
                                }}
                            >
                                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                    <img
                                        src="/VisionImpact/Vision3.png"
                                        alt="Vision3"
                                        className="w-10 h-16 sm:w-12 sm:h-18 md:w-16 md:h-24 lg:w-20 lg:h-30 xl:w-36 xl:h-54 2xl:w-52 2xl:h-72 object-cover"
                                        style={{
                                            willChange: 'transform',
                                            backfaceVisibility: 'hidden',
                                            transform: 'translateZ(0) scale3d(1, 1, 1)',
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Right Images - V-shape movement */}
                            <motion.div
                                className="flex gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4"
                                style={{
                                    x: rightImageX,
                                    y: rightImageY,
                                    opacity: rightImageOpacity,
                                }}
                            >
                                <motion.div className="relative">
                                    <img
                                        src="/VisionImpact/Vision4.png"
                                        alt="Vision4"
                                        className="w-8 h-14 sm:w-10 sm:h-16 md:w-14 md:h-22 lg:w-18 lg:h-28 xl:w-32 xl:h-48 2xl:w-52 2xl:h-68 object-cover rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                                <motion.div className="relative">
                                    <img
                                        src="/VisionImpact/Vision5.png"
                                        alt="Vision5"
                                        className="w-8 h-14 sm:w-10 sm:h-16 md:w-14 md:h-22 lg:w-18 lg:h-28 xl:w-32 xl:h-48 2xl:w-52 2xl:h-68 object-cover rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Text overlay on expanded image */}
                        <motion.div
                            className="absolute inset-0 bottom-20 flex items-center justify-center md:justify-end z-50 pointer-events-none"
                            style={{
                                opacity: textOpacity,
                                y: textY,
                            }}
                        >
                            <div className="text-center md:text-right text-white max-w-2xl px-3 sm:px-4 md:px-6 lg:px-7 xl:px-8 mt-0 lg:mt-48 xl:mt-96">
                                <motion.p
                                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light line-clamp-4 sm:line-clamp-4 md:line-clamp-5 lg:line-clamp-6 xl:line-clamp-7 2xl:line-clamp-8"
                                    style={{
                                        fontFamily: '"Quicksand", sans-serif',
                                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                                    }}
                                >
                                    Born as a proof of concept, ABC has evolved into a full-scale company, empowering industries across every sector with impactful solutions.
                                </motion.p>
                                <motion.div
                                    className="flex items-center justify-center md:justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 cursor-pointer group pointer-events-auto mt-2 sm:mt-3 md:mt-4 lg:mt-0"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span
                                        className="font-semibold text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base tracking-wider underline group-hover:no-underline transition-all duration-300"
                                        style={{
                                            fontFamily: '"Quicksand", sans-serif',
                                            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                                        }}
                                    >
                                        LEARN MORE
                                    </span>
                                    <motion.div
                                        whileHover={{ scale: 1.2, x: 3 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8))' }} />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Final Text Block - BALANCED GAP: Close but not colliding */}
                <div className="w-full px-3 sm:px-4 md:px-6 lg:px-7 xl:px-8 -mt-[20vh] sm:-mt-[18vh] md:-mt-[16vh] lg:mt-0">
                    <motion.div
                        className="flex justify-center md:justify-end"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="max-w-4xl py-8 sm:py-10 md:py-12 lg:py-16">
                            <p
                                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-gray-300 font-light text-center md:text-right"
                                style={{ fontFamily: '"Quicksand", sans-serif' }}
                            >
                                Over the years, we've transformed bold ideas into scalable products that solve real-world challenges, bridging gaps where traditional systems fall short. With a diverse portfolio spanning multiple domains, ABC doesn't just build tools—we build foundations for growth, efficiency, and innovation. Our mission is simple: to deliver technology that adapts, scales, and creates value for every industry we touch.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default VisionImpact;
