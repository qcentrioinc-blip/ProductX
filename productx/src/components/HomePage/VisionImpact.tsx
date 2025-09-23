'use client'

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// import { P } from '../../styles/Typography';

const VisionImpact: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "center start"]
    });

    // Transform values for different elements
    const leftImageX = useTransform(scrollYProgress, [0.2, 0.7], [0, -800]);
    const leftImageOpacity = useTransform(scrollYProgress, [0.2, 0.6, 0.7], [1, 1, 0]);

    const rightImageX = useTransform(scrollYProgress, [0.2, 0.7], [0, 800]);
    const rightImageOpacity = useTransform(scrollYProgress, [0.2, 0.6, 0.7], [1, 1, 0]);

    // Center image transforms
    const centerImageScaleX = useTransform(scrollYProgress, [0.2, 0.9], [1, 9]);
    const centerImageScaleY = useTransform(scrollYProgress, [0.2, 0.9], [1, 5]);
    const centerImageZ = useTransform(scrollYProgress, [0.2, 0.9], [10, 100]);
    const centerImageOpacity = useTransform(scrollYProgress, [0.2, 1], [1, 0.8]);

    // Text animations
    const textOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);


    return (
        <div className="bg-black">
            {/* Title Section */}
            <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="text-center">
                    <motion.div
                        className="font-mono text-white text-lg mb-6 opacity-60"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        ( *** )
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl my-8 font-bold text-white tracking-tight"
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

            {/* Main Animation Section */}
            <div
                ref={containerRef}
                className="relative h-[210vh]" // This height controls the scroll animation speed
            >
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    <motion.div
                        className="flex items-center justify-center w-full max-w-7xl px-4 relative"
                        style={{ perspective: '1200px' }}
                    >
                        {/* Left Images */}
                        <motion.div
                            className="flex gap-4"
                            style={{
                                x: leftImageX,
                                opacity: leftImageOpacity,
                            }}
                        >
                            <motion.div className="relative">
                                <img
                                    src="/VisionImpact/Vision1.png"
                                    alt="Vision1"
                                    className="w-20 h-32 md:w-36 md:h-56 lg:w-52 lg:h-68 object-cover rounded-lg shadow-2xl"
                                />
                            </motion.div>
                            <motion.div className="relative">
                                <img
                                    src="/VisionImpact/Vision2.png"
                                    alt="Vision2"
                                    className="w-20 h-32 md:w-36 md:h-56 lg:w-52 lg:h-68 object-cover rounded-lg shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Center Image - Expands to full screen */}
                        <motion.div
                            className="relative mx-4"
                            style={{
                                scaleX: centerImageScaleX,
                                scaleY: centerImageScaleY, // Explicitly set to prevent vertical scaling
                                zIndex: centerImageZ,
                                opacity: centerImageOpacity,
                                transformOrigin: 'center center',
                            }}
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="/VisionImpact/Vision3.png"
                                    alt="Vision3"
                                    className="w-24 h-36 md:w-40 md:h-60 lg:w-52 lg:h-72 object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right Images */}
                        <motion.div
                            className="flex gap-4"
                            style={{
                                x: rightImageX,
                                opacity: rightImageOpacity,
                            }}
                        >
                            <motion.div className="relative">
                                <img
                                    src="/VisionImpact/Vision4.png"
                                    alt="Vision4"
                                    className="w-20 h-32 md:w-36 md:h-56 lg:w-52 lg:h-68 object-cover rounded-lg shadow-2xl"
                                />
                            </motion.div>
                            <motion.div className="relative">
                                <img
                                    src="/VisionImpact/Vision5.png"
                                    alt="Vision5"
                                    className="w-20 h-32 md:w-36 md:h-56 lg:w-52 lg:h-68 object-cover rounded-lg shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Text overlay on expanded image */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-end z-50 pointer-events-none"
                        style={{
                            opacity: textOpacity,
                            y: textY,
                        }}
                    >
                        <div className="text-center text-white max-w-2xl px-8 sm:mt-0 lg:mt-96">
                            <motion.p
                                className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-right"
                                style={{
                                    fontFamily: '"Quicksand", sans-serif',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                                }}
                            >
                                Born as a proof of concept, ABC has evolved into a full-scale company, empowering industries across every sector with impactful solutions.
                            </motion.p>
                            <motion.div
                                className="flex items-center justify-center gap-3 cursor-pointer group pointer-events-auto"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span
                                    className="font-semibold text-sm md:text-base tracking-wider underline group-hover:no-underline transition-all duration-300 text-right"
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
                                    <ArrowRight className="w-5 h-5" style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8))' }} />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- MODIFIED: Bottom Section is now outside and pulled up with negative margin --- */}
            <div className="bg-black relative z-10 mt-[-100vh]">
                <div className="w-full px-8">
                    <motion.div
                        className="flex justify-end"
                        style={{
                            opacity: textOpacity,
                            y: textY,
                        }}
                    >
                        <div className="max-w-4xl">
                            <p
                                className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 font-light text-right line-clamp-6 md:line-clamp-6"
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

