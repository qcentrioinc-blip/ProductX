import { useContext, useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';
 
const WorkProfile = () => {
    const [, setScrollY] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [isInView, setIsInView] = useState(false);
   
    const workProfileRef = useRef<HTMLDivElement>(null);
    const scrollableContainerRef = useContext(ScrollContext);
    const [lockImageInThird, setLockImageInThird] = useState(false);

    const imageOpacity = [useMotionValue(1), useMotionValue(0), useMotionValue(0)];
    const overlayOpacity = [useMotionValue(0), useMotionValue(0), useMotionValue(0)];
    const masterOpacity = useMotionValue(0);
 
    const sections = [
        {
            id: 1,
            number: "1",
            title: "ROCK SOLID TECHNOLOGY",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ",
            image: "/AboutUs/High2.png",
            bgColor: "bg-[#F99526]",
            textColor: "text-black"
        },
        {
            id: 2,
            number: "1",
            title: "ROCK SOLID TECHNOLOGY",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ",
            image: "/AboutUs/High1.png",
            bgColor: "bg-[#230053]",
            textColor: "text-white"
        },
        {
            id: 3,
            number: "1",
            title: "ROCK SOLID TECHNOLOGY",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ",
            image: "/AboutUs/High3.png",
            bgColor: "bg-[#5C5C5C]",
            textColor: "text-[#F99526]"
        }
    ];
 
    
    useEffect(() => {
        if (!scrollableContainerRef?.current) return;
 
        const calculateHeight = () => {
            const containerH = window.innerHeight;
            setContainerHeight(containerH);
        };
 
        setTimeout(calculateHeight, 300);
        window.addEventListener('resize', calculateHeight);
 
        return () => window.removeEventListener('resize', calculateHeight);
    }, [scrollableContainerRef]);
 
    useEffect(() => {
        if (!scrollableContainerRef?.current || containerHeight === 0) return;
 
        const handleScroll = () => {
            try {
                const scroll = scrollableContainerRef?.current?.scrollTop ?? 0;
                const workProfileElement = workProfileRef.current;
 
                if (!workProfileElement) return;
 
                setScrollY(scroll);
 
                const workProfileTop = workProfileElement.offsetTop;
                const sectionHeight = containerHeight;
               
                const thirdSectionStart = workProfileTop + sectionHeight * 2;

                if (scroll > thirdSectionStart + sectionHeight * 0.85) {
                    const fade = (scroll - (thirdSectionStart + sectionHeight * 0.85)) / (sectionHeight * 0.15);
                    const fadeProgress = Math.min(1, fade);

                    masterOpacity.set(1 - fadeProgress);
                    imageOpacity[2].set(1 - fadeProgress);
                    overlayOpacity[2].set(0);  

                    if (fadeProgress >= 1) {
                        setIsInView(false);
                    }

                    return;
                }

                const section1VisibleStart = workProfileTop - containerHeight * 0.3;
 
                if (scroll < section1VisibleStart) {
                    masterOpacity.set(0);
                    setIsInView(false);
                    return;
                }
 
                setIsInView(true);
                masterOpacity.set(1);
 
                const scrollWithinWorkProfile = scroll - workProfileTop;
                const currentSectionIndex = Math.floor(scrollWithinWorkProfile / sectionHeight);
                const sectionProgress = (scrollWithinWorkProfile % sectionHeight) / sectionHeight;
 
                if (currentSectionIndex === 0) {
                    imageOpacity[0].set(1);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(0);
                    overlayOpacity[0].set(sectionProgress * 0.4);
                   
                  if (sectionProgress >= 0.20) {
    const fadeProgress = (sectionProgress - 0.20) / 0.20;

                        imageOpacity[0].set(1 - fadeProgress);
                        imageOpacity[1].set(fadeProgress);
                    } else {
                        overlayOpacity[1].set(0);
                    }
                    overlayOpacity[2].set(0);
                }
                else if (currentSectionIndex === 1) {
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(1);
                    imageOpacity[2].set(0);
                    overlayOpacity[1].set(sectionProgress * 0.4);
                   
                    if (sectionProgress >= 0.20) {
    const fadeProgress = (sectionProgress - 0.20) / 0.20;

                        imageOpacity[1].set(1 - fadeProgress);
                        imageOpacity[2].set(fadeProgress);
                    } else {
                        overlayOpacity[2].set(0);
                    }
                    overlayOpacity[0].set(0);
                }
                else if (currentSectionIndex === 2) {
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(1);
                    overlayOpacity[2].set(sectionProgress * 0.4);
                    overlayOpacity[0].set(0);
                    overlayOpacity[1].set(0);
                }

                if (currentSectionIndex === 2) {
                    setLockImageInThird(true);
                } else {
                    setLockImageInThird(false);
                }
 
            } catch (error) {
                console.error('Scroll handler error:', error);
            }
        };
 
        const container = scrollableContainerRef.current;
        container.addEventListener('scroll', handleScroll);
        handleScroll();
 
        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollableContainerRef, containerHeight, imageOpacity, overlayOpacity, masterOpacity]);
 
    return (
        <div ref={workProfileRef} className="relative">
            <div className="beliefs-section">
                <div className="beliefs-wrap relative bg-white w-full">
                    <div className="beliefs-outer relative">

                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                soft-pin=""
                                className="h-[80vh] lg:h-screen overflow-hidden relative"
                                style={{
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: index + 1,
                                }}
                            >
                                <motion.div
                                    className={`h-full ${section.bgColor} flex items-start justify-start
                                    pt-24 gap-x-12 lg:gap-x-50 relative overflow-hidden 
                                    px-4 sm:px-6 lg:px-24`} 
                                >
                                    <div className="flex-shrink-0">
                                        <h1 className={`font-bricolage lg:-mt-10 font-bold ${section.textColor}   leading-none
                                            text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[16rem]`}>
                                            {section.number}
                                        </h1>
                                    </div>

                                    <div className="flex flex-col items-start justify-center text-left space-y-6 max-w-full relative z-5">
                                        <h2 className={`font-bricolage font-extrabold tracking-wide ${section.textColor}
                                            text-3xl md:text-6xl lg:text-7xl`}>
                                            {section.title}
                                        </h2>

                                        <p className={`font-quicksand leading-relaxed ${section.textColor}
                                            text-sm sm:text-base max-w-xl lg:max-w-4xl`}>
                                            {section.description}
                                        </p>
                                    </div>

                                    <motion.div
                                        className={
                                            lockImageInThird
                                                ? "  absolute left-1/2 -translate-x-1/2 mt-10 z-6"
                                                : "  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-6"
                                        }
                                        style={{
                                            opacity: masterOpacity,
                                            visibility: isInView ? "visible" : "hidden",
                                            willChange: "opacity"
                                        }}
                                    >
                                        <div className="relative 
                                           
                                          
                                             w-72 h-44 
                                            lg:w-96 lg:h-52 top-12
                                            lg:top-50  left-4 md:-left-28 lg:-left-48">
                                            {sections.map((imgSection, imgIndex) => (
                                                <motion.img
                                                    key={imgSection.id}
                                                    src={imgSection.image}
                                                    alt={imgSection.title}
                                                    className="  absolute inset-0 w-full h-full rounded-xl object-cover shadow-lg"
                                                    style={{
                                                        opacity: imageOpacity[imgIndex],
                                                    }}
                                                    loading="eager"
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    softpin-overlay=""
                                    className="belief-overlay absolute inset-0 bg-black pointer-events-none"
                                    style={{ opacity: overlayOpacity[index] }}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default WorkProfile;
