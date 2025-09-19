import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useTransform, useMotionValue } from 'motion/react';

type ProcessStepProps = {
    step: string;
    title: string;
    description: string;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => {
    return (
        <div className="w-[80vw] md:w-[45vw] flex-shrink-0">
            <div className="relative flex flex-col items-start px-4">
                <div className="relative bg-white z-10 p-1">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-semibold text-xs">
                        {step}
                    </div>
                </div>
                <div className="mt-8 text-left">
                    <h3 className="font-bold text-xs tracking-widest uppercase text-gray-800 mb-4">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // const scrollerRef = useRef<HTMLDivElement>(null);
    const scrollProgress = useMotionValue(0);

    const steps = [
        {
            step: "STEP 1",
            title: "GETTING OUR START",
            description: "Founders Sarah Taylor and James Thompson open doors, bringing a combined 25 years of design expertise. United by a passion for creating spaces that improve people's lives, Sarah and James aimed to make a mark through resilient and inspiring architectural projects.",
        },
        {
            step: "STEP 2",
            title: "GROWING TO 10 STRONG",
            description: "We expand our team to include five architects plus support staff as project requests increase.",
        },
        {
            step: "STEP 3",
            title: "AWARD-WINNING HOSPITALITY PROJECTS",
            description: "Our innovative hotel and restaurant designs earn three Interior Design Hospitality Awards and appear in magazines. We brought our artistic vision to life in three boutique hotel projects, which went on to earn Interior Design Hospitality Awards and appear in Architectural Digest.",
        },
        {
            step: "STEP 4",
            title: "RESIDENTIAL PORTFOLIOS EXPANDING",
            description: "80% of projects now in high-end custom residential including expansive rural estates and high-rise urban condos. Our personalized approach to understanding client aspirations enabled the creation.",
        },
    ];

    // **TRANSFORM BASED ON MANUAL SCROLL PROGRESS**
    const x = useTransform(scrollProgress, [0, 1], ["40%", "-90%"]);

    // **WHEEL EVENT HANDLER**: Complete scroll hijacking
    const handleWheel = useCallback((e: WheelEvent) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (!isInView) return;

        // **PREVENT ALL DEFAULT SCROLLING**
        e.preventDefault();
        e.stopPropagation();

        const currentProgress = scrollProgress.get();
        const scrollSensitivity = 0.001; // Adjust for scroll speed
        const newProgress = Math.max(0, Math.min(1, currentProgress + e.deltaY * scrollSensitivity));
        
        scrollProgress.set(newProgress);

        // **MANAGE BODY SCROLL STATE**
        if (newProgress > 0 && newProgress < 1) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            
            // **CONTINUE SCROLLING IN BOTH DIRECTIONS**
            if (newProgress >= 1) {
                // **SCROLL DOWN**: Animation finished, continue scrolling down
                window.scrollBy(0, e.deltaY);
            } else if (newProgress <= 0 && e.deltaY < 0) {
                // **SCROLL UP**: Animation at start, continue scrolling up [web:253][web:258]
                window.scrollBy(0, e.deltaY);
            }
        }
    }, [scrollProgress]);

    // **ATTACH WHEEL EVENT LISTENERS**
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // **PASSIVE: FALSE ALLOWS preventDefault()**
        container.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            document.removeEventListener('wheel', handleWheel);
            document.body.style.overflow = 'auto'; // **CLEANUP**
        };
    }, [handleWheel]);

    return (
        <div className="bg-white font-sans">
            {/* **FULL FRAME STICKY SECTION**: Header + Horizontal Animation in one viewport */}
            <div ref={containerRef} className="relative bg-white overflow-hidden py-8">
                <div className="sticky top-0 flex flex-col bg-white">
                    
                    {/* **HEADER SECTION**: Now part of sticky container */}
                    <div className="flex-none pt-8 pb-4">
                        <div className="container mx-auto px-4">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h1>
                                <p className="text-lg text-gray-600">
                                    Milestones mark our ascent, chapters define our <br /> growth, and an unwavering commitment
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* **HORIZONTAL SCROLL SECTION**: Flexible container for steps */}
                    <div className="flex-1 flex items-center overflow-hidden">
                        <motion.div 
                            style={{ x }} 
                            className="flex gap-x-8 md:gap-x-16"
                        >
                            <div className="absolute top-8 left-0 w-[400vw] h-px z-0">
                                <div className="border-t-2 border-dotted border-gray-300 w-full"></div>
                            </div>

                            {steps.map((item) => (
                                <ProcessStep
                                    key={item.step}
                                    step={item.step}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;

