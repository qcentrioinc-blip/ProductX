'use client';

import { useEffect, useRef, useState } from 'react';

const LifeCycleTech = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden"
            style={{
                // Purple top SOLID, white bottom TRANSPARENT
                background: 'linear-gradient(180deg, #5B21B6 0%, #6D28D9 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
                paddingBottom: '500px'
            }}
        >
            {/* Background Pattern - EXTENDED HEIGHT */}
            <div
                className="absolute w-full"
                style={{
                    top: 200,
                    left: 0,
                    right: 0,
                    bottom: '-500px', // Extends 200px below the section
                    height: 'calc(100% + 500px)', // Increases total height
                    backgroundImage: "url('/LandingPageNew/LifeCycleBack.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    opacity: 0.52,
                    zIndex: 1
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1
                        className="transition-all duration-700 ease-in-out mb-4"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: 'clamp(32px, 5vw, 48px)',
                            lineHeight: '120%',
                            color: '#FFFFFF',
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transitionDelay: '0.1s'
                        }}
                    >
                        Entire lifecycle of tech-<br className="hidden sm:block" />modernization
                    </h1>
                    <p
                        className="max-w-4xl mx-auto transition-all duration-700 ease-in-out"
                        style={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: 'clamp(14px, 1.5vw, 16px)',
                            lineHeight: '150%',
                            color: '#E5E5FF',
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transitionDelay: '0.3s'
                        }}
                    >
                        Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap. Execute AI and digital strategies across the enterprise swiftly and flawlessly, utilizing established methodologies.
                    </p>
                </div>

                {/* White Card Section */}
                <div
                    className="bg-white rounded-none shadow-2xl p-8 lg:p-12 transition-all duration-700 ease-in-out"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                        transitionDelay: '0.5s'
                    }}
                >

                    {/* Ecosystem Title */}
                    <h2
                        className="mb-8"
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: 'clamp(24px, 3vw, 32px)',
                            lineHeight: '120%',
                            color: '#1F2937'
                        }}
                    >
                        Ecosystem of partnerships
                    </h2>

                    {/* Company Logos */}
                    <div
                        className="flex flex-wrap items-center gap-6 lg:gap-8 mb-10 pb-8 border-b border-gray-200"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.7s ease-in-out',
                            transitionDelay: '0.7s'
                        }}
                    >
                        {/* Microsoft */}
                        <div className="grayscale hover:grayscale-0 transition-all duration-300">
                            <svg width="100" height="22" viewBox="0 0 100 22" fill="none">
                                <rect width="10" height="10" fill="#F25022" />
                                <rect x="11" width="10" height="10" fill="#7FBA00" />
                                <rect y="11" width="10" height="10" fill="#00A4EF" />
                                <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
                                <text x="26" y="16" fontFamily="Segoe UI" fontSize="14" fill="#5E5E5E">Microsoft</text>
                            </svg>
                        </div>

                        {/* Google Cloud */}
                        <div className="grayscale hover:grayscale-0 transition-all duration-300">
                            <svg width="110" height="24" viewBox="0 0 110 24">
                                <text x="0" y="16" fontFamily="Google Sans" fontSize="14" fontWeight="500" fill="#5F6368">Google Cloud</text>
                            </svg>
                        </div>

                        {/* Oracle */}
                        <div className="grayscale hover:grayscale-0 transition-all duration-300">
                            <svg width="80" height="24" viewBox="0 0 80 24">
                                <text x="0" y="16" fontFamily="Arial" fontSize="16" fontWeight="700" fill="#C74634">ORACLE</text>
                            </svg>
                        </div>

                        {/* Dell */}
                        <div className="grayscale hover:grayscale-0 transition-all duration-300">
                            <svg width="60" height="24" viewBox="0 0 60 24">
                                <text x="0" y="16" fontFamily="Arial" fontSize="18" fontWeight="700" fill="#007DB8">DELL</text>
                            </svg>
                        </div>

                        {/* Infosys */}
                        <div className="grayscale hover:grayscale-0 transition-all duration-300">
                            <svg width="70" height="24" viewBox="0 0 70 24">
                                <text x="0" y="16" fontFamily="Arial" fontSize="14" fill="#007CC3">Infosys</text>
                            </svg>
                        </div>

                        {/* AWS */}
                        <div className="grayscale hover:grayscale-0 transition-all duration-300">
                            <svg width="50" height="24" viewBox="0 0 50 24">
                                <text x="0" y="16" fontFamily="Arial" fontSize="16" fontWeight="700" fill="#FF9900">aws</text>
                            </svg>
                        </div>

                        {/* Deloitte */}
                        <div className="grayscale hover:grayscale-0 transition-all duration-300">
                            <svg width="80" height="24" viewBox="0 0 80 24">
                                <text x="0" y="16" fontFamily="Arial" fontSize="14" fill="#86BC25">Deloitte.</text>
                            </svg>
                        </div>
                    </div>

                    {/* Two Column Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Column */}
                        <div
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                                transition: 'all 0.7s ease-in-out',
                                transitionDelay: '0.9s'
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                                    lineHeight: '160%',
                                    color: '#4B5563'
                                }}
                            >
                                Every collaboration is a partnership. We listen, adapt, and provide solutions that scale with your goals because your success is our success.
                            </p>
                            <br />
                            <p
                                style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                                    lineHeight: '160%',
                                    color: '#4B5563'
                                }}
                            >
                                Technology may evolve, but the relationships we build with our clients remain timeless.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                                transition: 'all 0.7s ease-in-out',
                                transitionDelay: '1.1s'
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                                    lineHeight: '160%',
                                    color: '#4B5563'
                                }}
                            >
                                Born in India, built for the world we carry the spirit of innovation, resilience, and precision into everything we do. While our roots keep us grounded, our global standards ensure that every solution we deliver can compete and win on the world stage.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default LifeCycleTech;
