'use client'

import { useEffect, useState, useRef } from 'react';
import {H1} from '../../styles/Typography'

interface ScrollState {
    scrollProgress: number;
    imageScale: number;
    imageOpacity: number;
    sideImageOffset: number;
    sideImageOpacity: number;
    showOverlayText: boolean;
    showBottomText: boolean;
    perspective: number;
    centerImageTransform: string;
}

const VisionImpact: React.FC = () => {
    const [scrollState, setScrollState] = useState<ScrollState>({
        scrollProgress: 0,
        imageScale: 1,
        imageOpacity: 1,
        sideImageOffset: 0,
        sideImageOpacity: 1,
        showOverlayText: false,
        showBottomText: false,
        perspective: 1200,
        centerImageTransform: 'perspective(1200px) scale(1)'
    });

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (): void => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const windowHeight = window.innerHeight;

            // Enhanced scroll calculation for smoother animation
            const scrollStart = windowHeight * 0.8;
            const scrollEnd = -windowHeight * 1.2;
            const rawProgress = (scrollStart - sectionTop) / (scrollStart - scrollEnd);
            const scrollProgress = Math.max(0, Math.min(1, rawProgress));

            // Enhanced scaling with perspective transform
            const imageScale = 1 + (scrollProgress * 5.5); // Reduced from 6 for smoother effect
            const imageOpacity = Math.max(0.2, 1 - (scrollProgress * 0.8));
            
            // Enhanced side image movement with perspective
            const sideImageOffset = scrollProgress * 450; // Increased for more dramatic effect
            const sideImageOpacity = Math.max(0.1, 1 - (scrollProgress * 1.8));
            
            // Enhanced text timing
            const showOverlayText = scrollProgress > 0.4; // Earlier appearance
            const showBottomText = scrollProgress > 0.6;

            // 3D perspective calculation
            const perspective = 1200 - (scrollProgress * 400);
            
            // Enhanced center image transform with 3D effects
            const scaleTransform = `scale(${imageScale})`;
            const perspectiveTransform = `perspective(${perspective}px)`;
            const rotateTransform = `rotateX(${scrollProgress * 2}deg) rotateY(${scrollProgress * 1}deg)`;
            const centerImageTransform = `${perspectiveTransform} ${scaleTransform} ${rotateTransform}`;

            setScrollState({
                scrollProgress,
                imageScale,
                imageOpacity,
                sideImageOffset,
                sideImageOpacity,
                showOverlayText,
                showBottomText,
                perspective,
                centerImageTransform
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
            <div className="flex items-center justify-center py-20">
                {/* <h1 className="text-4xl md:text-7xl text-center font-bold text-white px-4">
                    From Vision To Impact
                </h1> */}
                <H1>From Vision To Impact</H1>
            </div>

            {/* Main Animation Section */}
            <div
                ref={sectionRef}
                className="relative h-[100vh]" // Increased height for longer scroll
            >
                <div 
                    // In the class name there is an attribute named: Sticky.  In the problems, the error is:
                    // both sticky and relative has the same properties. so I removed sticky. Now its working same as previous
                    className="top-0 h-screen flex items-center justify-center overflow-hidden relative"
                    style={{ perspective: `${scrollState.perspective}px` }}
                >

                    {/* Image Gallery Container with enhanced 3D transforms */}
                    <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-7xl px-4 relative">

                        {/* Left Side Images with enhanced perspective */}
                        <div
                            className="flex gap-4 transition-all duration-700 ease-out transform-gpu"
                            style={{
                                transform: `perspective(${scrollState.perspective}px) translateX(-${scrollState.sideImageOffset}px) translateZ(-${scrollState.scrollProgress * 100}px) rotateY(${scrollState.scrollProgress * 15}deg)`,
                                opacity: scrollState.sideImageOpacity,
                                willChange: 'transform, opacity'
                            }}
                        >
                            <img
                                src="/VisionImpact/Vision1.png"
                                alt="Vision1"
                                className="w-20 h-32 md:w-36 md:h-56 lg:w-44 lg:h-68 object-cover rounded-lg shadow-2xl"
                                style={{
                                    transform: `scale(${1 - scrollState.scrollProgress * 0.3})`,
                                    filter: `blur(${scrollState.scrollProgress * 2}px)`
                                }}
                            />
                            <img
                                src="/VisionImpact/Vision2.png"
                                alt="Vision2"
                                className="w-20 h-32 md:w-36 md:h-56 lg:w-44 lg:h-68 object-cover rounded-lg shadow-2xl"
                                style={{
                                    transform: `scale(${1 - scrollState.scrollProgress * 0.2}) translateY(${scrollState.scrollProgress * 20}px)`,
                                    filter: `blur(${scrollState.scrollProgress * 1.5}px)`
                                }}
                            />
                        </div>

                        {/* Center Image with enhanced 3D scaling and perspective */}
                        <div className="relative z-20 flex items-center justify-center">
                            <div
                                className="relative overflow-hidden rounded-lg shadow-2xl"
                                style={{
                                    transform: scrollState.centerImageTransform,
                                    opacity: scrollState.imageOpacity,
                                    transformOrigin: 'center center',
                                    transformStyle: 'preserve-3d',
                                    willChange: 'transform, opacity',
                                    transition: 'all 0.1s ease-out'
                                }}
                            >
                                <img
                                    src="/VisionImpact/Vision3.png"
                                    alt="Vision3"
                                    className="w-24 h-36 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover"
                                />
                                {/* Enhanced overlay effects */}
                                <div 
                                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                                    style={{
                                        opacity: scrollState.scrollProgress * 0.5
                                    }}
                                />
                                <div 
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    style={{
                                        opacity: scrollState.scrollProgress * 0.3,
                                        transform: `translateX(${scrollState.scrollProgress * 100}%)`
                                    }}
                                />
                            </div>
                        </div>

                        {/* Right Side Images with enhanced perspective */}
                        <div
                            className="flex gap-4 transition-all duration-700 ease-out transform-gpu"
                            style={{
                                transform: `perspective(${scrollState.perspective}px) translateX(${scrollState.sideImageOffset}px) translateZ(-${scrollState.scrollProgress * 100}px) rotateY(-${scrollState.scrollProgress * 15}deg)`,
                                opacity: scrollState.sideImageOpacity,
                                willChange: 'transform, opacity'
                            }}
                        >
                            <img
                                src="/VisionImpact/Vision4.png"
                                alt="Vision4"
                                className="w-20 h-32 md:w-36 md:h-56 lg:w-44 lg:h-68 object-cover rounded-lg shadow-2xl"
                                style={{
                                    transform: `scale(${1 - scrollState.scrollProgress * 0.2}) translateY(-${scrollState.scrollProgress * 20}px)`,
                                    filter: `blur(${scrollState.scrollProgress * 1.5}px)`
                                }}
                            />
                            <img
                                src="/VisionImpact/Vision5.png"
                                alt="Vision5"
                                className="w-20 h-32 md:w-36 md:h-56 lg:w-44 lg:h-68 object-cover rounded-lg shadow-2xl"
                                style={{
                                    transform: `scale(${1 - scrollState.scrollProgress * 0.3})`,
                                    filter: `blur(${scrollState.scrollProgress * 2}px)`
                                }}
                            />
                        </div>
                    </div>

                    {/* Enhanced Overlay Text with better animations */}
                    <div
                        className={`absolute right-8 top-1/2 transform -translate-y-1/2 transition-all duration-1200 ease-out z-30 ${
                            scrollState.showOverlayText 
                                ? 'opacity-100 translate-x-0 scale-100' 
                                : 'opacity-0 translate-x-12 scale-95'
                        }`}
                        style={{
                            transform: `translateY(-50%) translateX(${scrollState.showOverlayText ? 0 : 48}px) scale(${scrollState.showOverlayText ? 1 : 0.95})`,
                            filter: `blur(${scrollState.showOverlayText ? 0 : 4}px)`
                        }}
                    >
                        <div className="text-white max-w-sm backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10">
                            <p className="text-sm md:text-base leading-relaxed mb-6 font-light">
                                Born as a proof of concept, ABC has evolved into a full-scale company, empowering industries across every sector with impactful solutions.
                            </p>
                            <button className="border-2 border-white bg-transparent text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-500 font-semibold text-sm tracking-wider rounded-sm hover:scale-105 transform">
                                LEARN MORE
                            </button>
                        </div>
                    </div>

                    {/* Enhanced Bottom Text */}
                    <div
                        className={`absolute bottom-8 right-8 max-w-md transition-all duration-1200 ease-out z-30 ${
                            scrollState.showBottomText 
                                ? 'opacity-100 translate-y-0 scale-100' 
                                : 'opacity-0 translate-y-12 scale-95'
                        }`}
                        style={{
                            transform: `translateY(${scrollState.showBottomText ? 0 : 48}px) scale(${scrollState.showBottomText ? 1 : 0.95})`,
                            filter: `blur(${scrollState.showBottomText ? 0 : 4}px)`
                        }}
                    >
                        <div className="text-white backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10">
                            <p className="text-sm md:text-base leading-relaxed font-light">
                                Over the years, we've transformed bold ideas into scalable products that solve real-world challenges, bridging gaps where traditional systems fall short. With a diverse portfolio spanning multiple domains, ABC doesn't just build tools—we build foundations for growth, efficiency, and innovation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VisionImpact;
