import React, { useRef, useEffect, useCallback, useState, useContext } from 'react';
import { motion, useTransform, useMotionValue } from 'motion/react';
import { H1, H3, P } from '../../styles/Typography';
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
    const scrollProgress = useMotionValue(0);
    const [canHorizontalScroll, setCanHorizontalScroll] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'still'>('still');
    const lastScrollY = useRef(0);
    const scrollContext = useContext(ScrollContext);

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

    // **DETECT SCROLL DIRECTION**
    const detectScrollDirection = useCallback(() => {
        const scrollContainer = scrollContext?.current;
        if (!scrollContainer) return;
        const currentScrollY = scrollContainer.scrollTop;
        
        if (currentScrollY > lastScrollY.current) {
            setScrollDirection('down');
        } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection('up');
        } else {
            setScrollDirection('still');
        }
        
        lastScrollY.current = currentScrollY;
    }, [scrollContext]);

    // **BIDIRECTIONAL SCROLL POSITION CHECK**
    const checkScrollPosition = useCallback(() => {
        const scrollContainer = scrollContext?.current;
        if (!containerRef.current || !scrollContainer) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        
        // **ENABLE HORIZONTAL SCROLL IN BOTH DIRECTIONS WHEN CONTAINER IS PROPERLY POSITIONED**
        const shouldEnableHorizontalScroll = (
            rect.top <= 100 && // Container has scrolled up enough (with buffer for header)
            rect.top >= -100 && // But not scrolled too far past
            rect.bottom > scrollContainer.clientHeight * 0.6 // Enough content still visible
        );
        
        setCanHorizontalScroll(shouldEnableHorizontalScroll);
        
        // **ALSO DETECT SCROLL DIRECTION**
        detectScrollDirection();
    }, [detectScrollDirection, scrollContext]);

    // **LISTEN FOR SCROLL EVENTS TO UPDATE POSITION AND DIRECTION**
    useEffect(() => {
        const scrollContainer = scrollContext?.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            checkScrollPosition();
        };

        // **INITIALIZE LAST SCROLL POSITION**
        lastScrollY.current = scrollContainer.scrollTop;

        scrollContainer.addEventListener('scroll', handleScroll);
        // **INITIAL CHECK**
        checkScrollPosition();

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [checkScrollPosition, scrollContext]);

    // **TRANSFORM BASED ON MANUAL SCROLL PROGRESS**
    const x = useTransform(scrollProgress, [0, 1], ["50%", "-90%"]);

    // **BIDIRECTIONAL WHEEL EVENT HANDLER**
    const handleWheel = useCallback((e: WheelEvent) => {
        if (!containerRef.current) return;
        const scrollContainer = scrollContext?.current;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= (scrollContainer?.clientHeight ?? 0) * 0.5;

        if (!isInView) return;

        // **ONLY ALLOW HORIZONTAL SCROLLING WHEN SECTION IS PROPERLY POSITIONED (BOTH DIRECTIONS)**
        if (!canHorizontalScroll) {
            return;
        }

        const currentProgress = scrollProgress.get();
        const scrollSensitivity = 0.002;
        
        // **HANDLE BOTH SCROLL DIRECTIONS THE SAME WAY**
        let newProgress;
        if (e.deltaY > 0) {
            // **SCROLLING DOWN - MOVE FORWARD**
            newProgress = Math.max(0, Math.min(1, currentProgress + e.deltaY * scrollSensitivity));
        } else {
            // **SCROLLING UP - MOVE BACKWARD** 
            newProgress = Math.max(0, Math.min(1, currentProgress + e.deltaY * scrollSensitivity));
        }
        
        scrollProgress.set(newProgress);
        
        // **MANAGE SCROLL HIJACKING**
        // If we are between 0 and 1, prevent default vertical scroll.
        if (newProgress > 0 && newProgress < 1) {
            e.preventDefault();
            e.stopPropagation();
            if (scrollContainer) scrollContainer.style.overflow = 'hidden';
        } else {
            // Otherwise, allow default vertical scroll to take over.
            if (scrollContainer) scrollContainer.style.overflow = 'auto';

            // A tiny timeout helps ensure the overflow style applies before the next scroll event.
            // This prevents a "jump" when exiting the horizontal scroll.
            setTimeout(() => { if (scrollContainer) scrollContainer.style.overflow = 'auto'; }, 50);
        }
    }, [scrollProgress, canHorizontalScroll, scrollContext]);

    // **ATTACH WHEEL EVENT LISTENERS**
    useEffect(() => {
        const container = containerRef.current;
        const scrollContainer = scrollContext?.current;
        if (!container || !scrollContainer) return;

        container.addEventListener('wheel', handleWheel, { passive: false });
        // We only need to listen on the container, not the whole document

        return () => {
            container.removeEventListener('wheel', handleWheel);
            if (scrollContainer) scrollContainer.style.overflow = 'auto';
        };
    }, [handleWheel, scrollContext]);

    return (
        <div className="bg-white font-sans" id='our-process'>
            {/* **CONTAINER WITH EXTRA HEIGHT FOR BIDIRECTIONAL SCROLLING** */}
            <div ref={containerRef} className="relative bg-white h-[80vh]">
                <div className="sticky top-0 flex flex-col bg-white h-screen">
                    
                    {/* **HEADER SECTION** */}
                    <div className="flex-none pt-6 pb-6">
                        <div className="container mx-auto px-4">
                            <div className="text-center">
                                <H1>Our Process</H1>
                                <P>Milestones mark our ascent, chapters define our <br /> growth, and an unwavering commitment</P>
                            </div>
                        </div>
                    </div>

                    {/* **HORIZONTAL SCROLL SECTION** */}
                    <div className="flex-1 flex items-start justify-center overflow-hidden">
                        <motion.div 
                            style={{ x }} 
                            className="flex gap-x-8 md:gap-x-16"
                        >
                            <div className="absolute top-12 left-10 w-[190vw] h-px z-0">
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

                    {/* **DEBUG INDICATOR WITH SCROLL DIRECTION** */}
                    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-sm z-50">
                        {canHorizontalScroll ? (
                            <div>
                                🟢 Horizontal Active<br />
                                Direction: {scrollDirection === 'down' ? '⬇️' : scrollDirection === 'up' ? '⬆️' : '⏸️'}
                            </div>
                        ) : (
                            "🔴 Positioning..."
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
