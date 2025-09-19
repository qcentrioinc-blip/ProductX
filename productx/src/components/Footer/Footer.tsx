import { useState, useEffect, useCallback, useRef } from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
 
const Footer = () => {
    const [transform, setTransform] = useState({ scale: 0.2, opacity: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [hasReachedBottom, setHasReachedBottom] = useState(false);
    const rafRef = useRef<number | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const lastScrollY = useRef(0);
    // const previousScrollY = useRef(0);
 
    const updateTransform = useCallback(() => {
        if (!footerRef.current) return;
 
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
       
        // Check if user has reached the very bottom of the page
        const isAtBottom = (windowHeight + currentScrollY) >= (documentHeight - 10)
       
        // Detect scroll direction
        const isScrollingUp = currentScrollY < lastScrollY.current;
        lastScrollY.current = currentScrollY;
       
        // Set flag when user reaches bottom
        if (isAtBottom) {
            setHasReachedBottom(true);
        }
 
        // Only animate if:
        // 1. User has reached bottom at least once
        // 2. User is currently scrolling UP
        // 3. Footer is visible
        if (hasReachedBottom && isScrollingUp && isVisible) {
            const rect = footerRef.current.getBoundingClientRect();
            const footerTop = rect.top;
            const footerHeight = rect.height;
           
            // Calculate animation progress based on how much footer is visible
            let scrollProgress = 0;
           
            if (footerTop < windowHeight) {
                const visibleHeight = windowHeight - footerTop;
                scrollProgress = Math.min(visibleHeight / (footerHeight * 0.8), 1);
            }
           
            const newScale = 0.2 + (scrollProgress * 1.3);
            const newOpacity = scrollProgress * 0.4;
           
            setTransform({ scale: newScale, opacity: newOpacity });
        } else if (!isScrollingUp || !hasReachedBottom) {
            // Reset animation when scrolling down or haven't reached bottom
            setTransform({ scale: 0.2, opacity: 0 });
        }
    }, [hasReachedBottom, isVisible]);
 
    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
           
            rafRef.current = requestAnimationFrame(updateTransform);
        };
 
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -5% 0px'
            }
        );
 
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
 
        // Initialize scroll position
        lastScrollY.current = window.scrollY;
       
        window.addEventListener('scroll', handleScroll, { passive: true });
       
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [updateTransform]);
 
    return (
        <div
            ref={footerRef}
            className="bg-black text-white relative overflow-hidden min-h-screen"
        >
            {/* Scroll-triggered Blue Circle - Only on scroll UP from bottom */}
            <div
                className="absolute bottom-0 left-1/2 pointer-events-none transition-all duration-300 ease-out"
                style={{
                    transform: `translate(-50%, 50%) perspective(1200px) scale(${transform.scale})`,
                    opacity: transform.opacity,
                    willChange: 'transform, opacity',
                    transformOrigin: 'center bottom'
                }}
            >
                <div className="w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px] rounded-full bg-blue-600"></div>
            </div>
 
            {/* Top Section */}
            <div className="px-10 pt-16 pb-8 relative z-10">
                <div className="flex items-start gap-6">
                    {/* Logo placeholder */}
                    <div className="bg-gray-200 text-black px-4 py-2 rounded text-sm font-medium">
                        LOGO
                    </div>
                </div>
 
                {/* Company Description */}
                <div className="mt-6 max-w-md">
                    <p className="text-gray-300 text-sm leading-relaxed">
                        We are more than a technology provider; we are your strategic partner in progress.
                    </p>
                </div>
 
                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                    <Twitter className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors duration-200" />
                    <Instagram className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors duration-200" />
                    <Linkedin className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors duration-200" />
                </div>
            </div>
 
            {/* Horizontal Line */}
            <div className="px-10 relative z-10">
                <hr className="border-gray-800" />
            </div>
 
            {/* Main Footer Content */}
            <div className="px-10 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Industries Column */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Industries</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">High Tech</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Banking and Finance</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">EHS and PMS</a></li>
                        </ul>
                    </div>
 
                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Industries</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Solutions</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Resources</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Platforms</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Company</a></li>
                        </ul>
                    </div>
 
                    {/* Contact Sales Column */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Contact Sales</h3>
                        <div className="space-y-3">
                            <p className="text-gray-300 text-sm">info@abc.com</p>
                            <p className="text-gray-300 text-sm">040-7418529630</p>
                        </div>
                    </div>
 
                    {/* Stay Up to Date Column */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Stay Up to date</h3>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Subscribe to our Insights, our monthly look at the critical issues facing global businesses.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-transparent border border-gray-600 rounded px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                            />
                            <button className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Bottom Section with Centered ANIMA */}
            <div className="px-10 relative z-10">
                {/* ANIMA Text - Centered at Bottom */}
                <div className="flex justify-center">
                    <div className={`transform transition-all duration-1000 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}>
                        <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white tracking-widest text-center">
                            ANIMA
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Footer;