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
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring",
            image: "/AboutUs/High2.png",
            bgColor: "bg-[#F99526]",
            textColor: "text-black"
        },
        {
            id: 2,
            number: "2",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High1.png",
            bgColor: "bg-[#230053]",
            textColor: "text-white"
        },
        {
            id: 3,
            number: "3",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High3.png",
            bgColor: "bg-[#5C5C5C]",
            textColor: "text-[#F99526]"
        }
    ];
 
     useEffect(() => {
        if (!scrollableContainerRef?.current) return;
 
        const calculateHeight = () => {
            const containerH = scrollableContainerRef?.current?.clientHeight ?? 0;
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
   
const thirdSectionStart = workProfileTop + sectionHeight * 2; // start of section 3
   // end of section 3
        
       
        // Show image only when section 1 is entering viewport
        const section1VisibleStart = workProfileTop - containerHeight * 0.3;
 
        // CRITICAL FIX: Check if we're PAST section 3 and hide image IMMEDIATELY
        // if (scroll >= workProfileBottom) {
        //     // Instantly hide when scrolling past section 3
        //     masterOpacity.set(0);
        //     setIsInView(false);
           
        //     imageOpacity[0].set(0);
        //     imageOpacity[1].set(0);
        //     imageOpacity[2].set(0);
        //     overlayOpacity[0].set(0);
        //     overlayOpacity[1].set(0);
        //     overlayOpacity[2].set(0);
        //     return;
        // }
 // Fade out image only AFTER 85% of section 3
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

        // BEFORE section 1 starts
        if (scroll < section1VisibleStart) {
            masterOpacity.set(0);
            setIsInView(false);
            return;
        }
 
        // WITHIN sections 1-3
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
           
            if (sectionProgress >= 0.85) {
                const fadeProgress = (sectionProgress - 0.85) / 0.15;
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
           
            if (sectionProgress >= 0.85) {
                const fadeProgress = (sectionProgress - 0.85) / 0.15;
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
        // Detect when section 3 is active
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
        <div ref={workProfileRef} className="  relative">
            <div className="beliefs-section">
                <div className="beliefs-wrap relative bg-white w-full">
                    <div className="beliefs-outer relative">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                soft-pin=""
                                className="  h-screen overflow-hidden relative"
                                style={{
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: index + 1,
                                }}
                            >
                                <motion.div
                                    className={`  h-full ${section.bgColor} flex items-start justify-center pt-24   gap-x-50 relative overflow-hidden`}

                                    
                                >
                                    {/* LEFT SIDE - NUMBER */}
                                    <div className="flex-shrink-0">
    <h1 className={`text-[10rem] font-bricolage sm:text-[12rem] lg:text-[14rem] font-bold ${section.textColor} opacity-90 leading-none`}>
        {section.number}
    </h1>
</div>

 
                                    {/* RIGHT SIDE - TITLE & DESCRIPTION */}
                                    <div className="flex flex-col  items-start justify-center text-left space-y-6 max-w-full relative z-5">
                                           <h2 className={`text-2xl font-bricolage sm:text-4xl lg:text-6xl font-bold ${section.textColor} tracking-wide`}>
    {section.title}
</h2>


    {/* Paragraph */}
   <p className={`text-sm font-quicksand sm:text-base ${section.textColor} leading-relaxed max-w-3xl`}>
    {section.description}
</p>

                                    </div>
 
                                    {/* FIXED STICKY IMAGE - CENTER */}
                                   <motion.div
    className={
        lockImageInThird
            ? "beliefs-img_wrap absolute left-1/2 -translate-x-1/2 mt-10 z-6"  
            : "beliefs-img_wrap fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-6"  
    }
    style={{
        opacity: masterOpacity,
        visibility: isInView ? "visible" : "hidden",
        willChange: "opacity"
    }}
>

                                        <div className=" relative w-96 h-52 top-50 -left-8 ">
                                            {sections.map((imgSection, imgIndex) => (
                                                <motion.img
                                                    // key={imgSection.id}
                                                    src={imgSection.image}
                                                    alt={imgSection.title}
                                                    className="beliefs-img absolute inset-0 w-full h-full rounded-xl object-cover shadow-lg"
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