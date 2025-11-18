

import React, { useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H1, H3 } from '../../styles/Typography';
import { ScrollContext } from '../../context/ScrollContext';

type ProcessStepProps = {
    step: string;   
    title: string;
    description: string;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => {
    return (
        <div className="w-[80vw] md:w-[45vw] flex-shrink-0" style={{ fontFamily: 'Bricolage Grotesque' }}>
            <div className="relative flex flex-col items-start px-4">
                <div className="relative bg-white z-10 p-1">
                    <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {step}
                    </div>
                </div>
                <div className="mt-8 text-left">
                    <H3>{title}</H3>
                    <p className="text-gray-600 text-[16px] leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContext = useContext(ScrollContext);

    // Use useScroll hook - same approach as FeatureCards
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
        container: scrollContext || undefined,
    });

    // Transform scroll progress to horizontal position
    const x = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"]);

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

    return (
        <div className="bg-white font-sans" id='our-process'>
            {/* Container with section height for scroll tracking */}
            <div 
                ref={containerRef} 
                className="relative bg-white"
                style={{ height: "300vh" }}
            >
                {/* Sticky container */}
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    
                    {/* Header section */}
                    <div className="absolute top-0 left-0 right-0 flex-none pt-6 pb-6 z-20">
                        <div className="container mx-auto px-4">
                            <div className="text-center">
                                <H1>Our Process</H1>
                                <p>Milestones mark our ascent, chapters define our <br /> growth, and an unwavering commitment</p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal scroll section */}
                    <div className="flex-1 flex items-start justify-center overflow-hidden mt-0 lg:mt-16 w-full">
                        <motion.div 
                            style={{ x }} 
                            className="flex gap-x-8 md:gap-x-16"
                        >
                            {/* Dotted line */}
                            <div className="absolute top-12 left-10 w-[190vw] h-px z-0">
                                <div className="border-t-2 border-dotted border-gray-300 w-full"></div>
                            </div>

                            {/* Process steps */}
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

