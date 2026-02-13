import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H2, H3, P } from '../../styles/Typography';

type ProcessStepProps = {
    step: string;
    title: string;
    description: string;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => {
    return (
        <div
            className="w-[90vw] sm:w-[75vw] md:w-[55vw] lg:w-[45vw] flex-shrink-0"
            style={{ fontFamily: 'Bricolage Grotesque' }}
        >
            <div className="relative flex flex-col items-start px-3 sm:px-4 lg:px-4">
                {/* Step Circle - Responsive sizes */}
                <div className="relative bg-white z-10 p-1 rounded-full">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                        {step}
                    </div>
                </div>

                {/* Title and Description - Responsive spacing */}
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-4">
                    {/* Title - Responsive positioning */}
                    <H3
                        className="font-semibold tracking-wide mb-2 sm:mb-3 md:mb-4 lg:mb-5 lg:ml-8"
                        style={{
                            fontSize: 'clamp(16px, 2.5vw, 24px)',
                            lineHeight: '1.3'
                        }}
                    >
                        {title}
                    </H3>

                    {/* Description - Responsive positioning */}
                    <P
                        className="text-gray-600 leading-relaxed max-w-full pr-2 sm:pr-4 md:max-w-lg lg:ml-64 lg:max-w-md"
                        style={{
                            fontSize: 'clamp(13px, 1.5vw, 15px)',
                            lineHeight: '1.2'
                        }}
                    >
                        {description}
                    </P>
                </div>
            </div>
        </div>
    );
};

const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Use useScroll hook
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform scroll progress - Desktop keeps same
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

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
                className="relative bg-white h-[200vh] sm:h-[250vh] lg:h-[300vh]"
            >

                {/* Sticky container */}
                <div className="sticky top-0 h-[50vh] sm:h-[60vh] lg:h-[85vh] flex items-start overflow-hidden pt-[10vh] sm:pt-[15vh] lg:pt-[35vh]">

                    {/* Header section - Responsive positioning */}
                    <div className="absolute top-6 sm:top-10 md:top-14 lg:top-24 left-0 right-0 flex-none z-20">
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="text-center">
                                <H2
                                    className='text-blue-500'
                                    style={{
                                        fontSize: 'clamp(20px, 4vw, 40px)', // Mobile: 20px, Desktop: 40px
                                        lineHeight: '1.2'
                                    }}
                                >
                                    Sed ut perspiciatis unde
                                </H2>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal scroll section */}
                    <div className="flex-1 flex items-start justify-start overflow-hidden w-full pt-10 sm:pt-16 md:pt-6 lg:mt-[-200px] xl:mt-0">
                        <motion.div
                            style={{ x }}
                            className="relative flex gap-x-4 sm:gap-x-6 md:gap-x-10 lg:gap-x-16 pl-4 sm:pl-6 md:pl-8"
                        >
                            {/* Dotted line - Responsive positioning */}
                            <div className="absolute top-9 sm:top-[44px] md:top-12 lg:top-[52px] left-16 sm:left-[84px] md:left-24 lg:left-[100px] w-[250vw] sm:w-[220vw] md:w-[180vw] h-px z-0">
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
