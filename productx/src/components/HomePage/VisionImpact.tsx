// 'use client'

// import { useEffect, useState, useRef } from 'react';

// interface ScrollState {
//     scrollProgress: number;
//     imageScale: number;
//     imageOpacity: number;
//     sideImageOffset: number;
//     showTexts: boolean;
// }

// const VisionImpact: React.FC = () => {
//     const [scrollState, setScrollState] = useState<ScrollState>({
//         scrollProgress: 0,
//         imageScale: 1,
//         imageOpacity: 1,
//         sideImageOffset: 0,
//         showTexts: false
//     });

//     // const containerRef = useRef<HTMLDivElement>(null);
//     const sectionRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const handleScroll = (): void => {
//             if (!sectionRef.current) return;

//             const rect = sectionRef.current.getBoundingClientRect();
//             const sectionTop = rect.top;
//             const windowHeight = window.innerHeight;

//             // Calculate scroll progress within the section
//             const scrollStart = -windowHeight * 0.2;
//             const scrollEnd = -windowHeight * 2;
//             const rawProgress = (scrollStart - sectionTop) / (scrollStart - scrollEnd);
//             const scrollProgress = Math.max(0, Math.min(1, rawProgress));

//             // Image scaling: starts at 1, goes to 4+ (aggressive zoom)
//             const imageScale = 1 + (scrollProgress * 8); // Scale up to 9x

//             // Image opacity: fades out as it zooms
//             const imageOpacity = Math.max(0.1, 1 - (scrollProgress * 0.9));

//             // Side images movement - push left and right images outward
//             const sideImageOffset = scrollProgress * 200; // Move 200px outward

//             // Both texts appear together after 70% scroll progress
//             const showTexts = scrollProgress > 0.7;

//             setScrollState({
//                 scrollProgress,
//                 imageScale,
//                 imageOpacity,
//                 sideImageOffset,
//                 showTexts
//             });
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         handleScroll(); // Initial calculation

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="bg-black">
//             {/* Title Section */}
//             <div className="h-screen flex items-center justify-center">
//                 <h1 className="text-4xl md:text-7xl text-center font-bold text-white px-4">
//                     From Vision To Impact
//                 </h1>
//             </div>

//             {/* Main Animation Section */}
//             <div
//                 ref={sectionRef}
//                 className="h-[400vh] relative"
//             >
//                 {/* Sticky Container */}
//                 <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden relative">

//                     {/* Image Gallery Container */}
//                     <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-6xl px-4 relative">

//                         {/* Left Side Images - Move Left */}
//                         <div
//                             className="flex gap-4 transition-all duration-700 ease-out"
//                             style={{
//                                 transform: `translateX(-${scrollState.sideImageOffset}px)`,
//                                 opacity: scrollState.scrollProgress > 0.1 ? 0 : 1
//                             }}
//                         >
//                             <img
//                                 src="/VisionImpact/Vision1.png"
//                                 alt="Vision1"
//                                 className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
//                             />
//                             <img
//                                 src="/VisionImpact/Vision2.png"
//                                 alt="Vision2"
//                                 className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
//                             />
//                         </div>

//                         {/* Center Image - Main Animation Target */}
//                         <div className="relative z-10 flex items-center justify-center">
//                             <img
//                                 src="/VisionImpact/Vision3.png"
//                                 alt="Vision3"
//                                 className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover transition-all duration-500 ease-out"
//                                 style={{
//                                     transform: `scale(${scrollState.imageScale})`,
//                                     opacity: scrollState.imageOpacity,
//                                     transformOrigin: 'center center',
//                                     borderRadius: scrollState.scrollProgress > 0.3 ? '20px' : '12px', // Make it square
//                                     aspectRatio: scrollState.scrollProgress > 0.3 ? '1/1' : 'auto'
//                                 }}
//                             />
//                         </div>

//                         {/* Right Side Images - Move Right */}
//                         <div
//                             className="flex gap-4 transition-all duration-700 ease-out"
//                             style={{
//                                 transform: `translateX(${scrollState.sideImageOffset}px)`,
//                                 opacity: scrollState.scrollProgress > 0.1 ? 0 : 1
//                             }}
//                         >
//                             <img
//                                 src="/VisionImpact/Vision4.png"
//                                 alt="Vision4"
//                                 className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
//                             />
//                             <img
//                                 src="/VisionImpact/Vision5.png"
//                                 alt="Vision5"
//                                 className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Side Text Content - Both texts appear together */}
//                     <div
//                         className={`absolute right-8 top-1/2 transform -translate-y-1/2 max-w-md space-y-8 transition-all duration-1000 ease-in-out ${scrollState.showTexts ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
//                             }`}
//                     >
//                         {/* First Text Block - Center overlay text moved to right */}
//                         <div className="text-white">
//                             <h2 className="text-lg md:text-2xl font-bold mb-4 leading-tight">
//                                 Born as a proof of concept, ABC has evolved into a full-scale company, empowering industries across every sector with impactful solutions.
//                             </h2>
//                             <button className="border-2 border-white bg-transparent text-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wider">
//                                 LEARN MORE
//                             </button>
//                         </div>

//                         {/* Second Text Block - Additional content */}
//                         <div className="text-white">
//                             <p className="text-sm md:text-base leading-relaxed">
//                                 Over the years, we've transformed bold ideas into scalable products that solve real-world challenges, bridging gaps where traditional systems fall short. With a diverse portfolio spanning multiple domains, ABC doesn't just build tools—we build foundations for growth, efficiency, and innovation. Our mission is simple: to deliver technology that adapts, scales, and creates value for every industry we touch.
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Additional Content */}
//             <div className="h-screen bg-black"></div>
//         </div>
//     );
// };

// export default VisionImpact;

'use client'

import { useEffect, useState, useRef } from 'react';

interface ScrollState {
    scrollProgress: number;
    imageScale: number;
    imageOpacity: number;
    sideImageOffset: number;
    sideImageOpacity: number;
    showOverlayText: boolean;
    showBottomText: boolean;
}

const VisionImpact: React.FC = () => {
    const [scrollState, setScrollState] = useState<ScrollState>({
        scrollProgress: 0,
        imageScale: 1,
        imageOpacity: 1,
        sideImageOffset: 0,
        sideImageOpacity: 1,
        showOverlayText: false,
        showBottomText: false
    });

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (): void => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const windowHeight = window.innerHeight;

            const scrollStart = -windowHeight * 0.2;
            const scrollEnd = -windowHeight * 1.8;
            const rawProgress = (scrollStart - sectionTop) / (scrollStart - scrollEnd);
            const scrollProgress = Math.max(0, Math.min(1, rawProgress));

            const imageScale = 1 + (scrollProgress * 6);
            const imageOpacity = Math.max(0.15, 1 - (scrollProgress * 0.85));
            const sideImageOffset = scrollProgress * 300;
            const sideImageOpacity = Math.max(0, 1 - (scrollProgress * 2));
            const showOverlayText = scrollProgress > 0.6;
            const showBottomText = scrollProgress > 0.7;

            setScrollState({
                scrollProgress,
                imageScale,
                imageOpacity,
                sideImageOffset,
                sideImageOpacity,
                showOverlayText,
                showBottomText
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-black">
            {/* Title Section */}
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-4xl md:text-7xl text-center font-bold text-white px-4">
                    From Vision To Impact
                </h1>
            </div>

            {/* Main Animation Section */}
            <div
                ref={sectionRef}
                className="h-[250vh] relative"
            >
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden relative">

                    {/* Image Gallery Container */}
                    <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-6xl px-4 relative">

                        {/* Left Side Images */}
                        <div
                            className="flex gap-4 transition-all duration-500 ease-out"
                            style={{
                                transform: `translateX(-${scrollState.sideImageOffset}px)`,
                                opacity: scrollState.sideImageOpacity
                            }}
                        >
                            <img
                                src="/VisionImpact/Vision1.png"
                                alt="Vision1"
                                className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
                            />
                            <img
                                src="/VisionImpact/Vision2.png"
                                alt="Vision2"
                                className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
                            />
                        </div>

                        {/* Center Image with Scaling */}
                        <div className="relative z-10 flex items-center justify-center">
                            <img
                                src="/VisionImpact/Vision3.png"
                                alt="Vision3"
                                className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover transition-all duration-500 ease-out"
                                style={{
                                    transform: `scale(${scrollState.imageScale})`,
                                    opacity: scrollState.imageOpacity,
                                    transformOrigin: 'center center',
                                    borderRadius: '12px'
                                }}
                            />
                        </div>

                        {/* Right Side Images */}
                        <div
                            className="flex gap-4 transition-all duration-500 ease-out"
                            style={{
                                transform: `translateX(${scrollState.sideImageOffset}px)`,
                                opacity: scrollState.sideImageOpacity
                            }}
                        >
                            <img
                                src="/VisionImpact/Vision4.png"
                                alt="Vision4"
                                className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
                            />
                            <img
                                src="/VisionImpact/Vision5.png"
                                alt="Vision5"
                                className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Overlay Text - RIGHT SIDE of Image (3 lines + LEARN MORE) */}
                    <div
                        className={`absolute right-8 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${
                            scrollState.showOverlayText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`}
                    >
                        <div className="text-white max-w-sm">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                Born as a proof of concept, ABC has evolved into a full-scale company, empowering industries across every sector with impactful solutions.
                            </p>
                            <button className="border-2 border-white bg-transparent text-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm tracking-wider">
                                LEARN MORE
                            </button>
                        </div>
                    </div>

                    {/* Bottom Text - BELOW Image on Right Side */}
                    <div
                        className={`absolute bottom-8 right-8 max-w-md transition-all duration-1000 ease-in-out ${
                            scrollState.showBottomText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <div className="text-white">
                            <p className="text-sm md:text-base leading-relaxed">
                                Over the years, we've transformed bold ideas into scalable products that solve real-world challenges, bridging gaps where traditional systems fall short. With a diverse portfolio spanning multiple domains, ABC doesn't just build tools—we build foundations for growth, efficiency, and innovation. Our mission is simple: to deliver technology that adapts, scales, and creates value for every industry we touch.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section ends here - no more scrolling */}
        </div>
    );
};

export default VisionImpact;
