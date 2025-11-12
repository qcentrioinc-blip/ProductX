import { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { Submit } from '../../styles/Button';
import { H3, P } from '../../styles/Typography';
import { ScrollContext } from '../../context/ScrollContext';

const Footer = () => {
    // State for tracking scroll behavior and bottom reach
    const [hasReachedBottom, setHasReachedBottom] = useState(false);
    const rafRef = useRef<number | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const lastScrollY = useRef(0);
    const scrollContext = useContext(ScrollContext);
    
    // Motion values for the blue circle animation
    const scaleValue = useMotionValue(0.1);
    const opacityValue = useMotionValue(0);
    
    // ADDED: useSpring for very slow, smooth animations
    const scale = useSpring(scaleValue, { 
        stiffness: 80,    // Very low stiffness for slow movement
        damping: 40,      // High damping for smooth, non-bouncy motion
        mass: 1.2           // Higher mass for slower response
    });
    
    const opacity = useSpring(opacityValue, { 
        stiffness: 100,    // Even lower stiffness for opacity
        damping: 40,      // Higher damping for smooth fade
        mass: 1
    });
    
    // InView hook for visibility detection
    const isInView = useInView(footerRef, {
        root: scrollContext ?? undefined,
        amount: 0.05,
        margin: '0px 0px 0px 0px'
    });

    const updateTransform = useCallback(() => {
        const scrollContainer = scrollContext?.current;
        if (!footerRef.current || !scrollContainer) return;

        const currentScrollY = scrollContainer.scrollTop;
        const windowHeight = scrollContainer.clientHeight;
        const documentHeight = scrollContainer.scrollHeight;
        
        // Check if user has reached the very bottom of the page
        // A small buffer (e.g., 10px) helps with floating point inaccuracies
        const isAtBottom = (windowHeight + currentScrollY) >= (documentHeight - 10);
        
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
        if (hasReachedBottom && isScrollingUp && isInView) {
            const rect = footerRef.current.getBoundingClientRect();
            const footerTop = rect.top;
            const footerHeight = rect.height;
            
            // Calculate animation progress based on how much footer is visible
            let scrollProgress = 0;
            
            if (footerTop < windowHeight) {
                const visibleHeight = windowHeight - footerTop;
                scrollProgress = Math.min(visibleHeight / (footerHeight * 0.3), 1);
            }
            
            const newScale = 0.2 + (scrollProgress * 1.3);
            const newOpacity = scrollProgress * 2;
            
            // Update motion values (useSpring will handle smooth animation)
            scaleValue.set(newScale);
            opacityValue.set(newOpacity);
        } else if (!isScrollingUp || !hasReachedBottom) {
            // Reset animation when scrolling down or haven't reached bottom
            scaleValue.set(0.2);
            opacityValue.set(0);
        }
    }, [hasReachedBottom, isInView, scaleValue, opacityValue, scrollContext]);

    useEffect(() => {
        const scrollContainer = scrollContext?.current;

        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            rafRef.current = requestAnimationFrame(updateTransform);
        };

        if (scrollContainer) {
            // Initialize scroll position
            lastScrollY.current = scrollContainer.scrollTop;
            scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            scrollContainer?.removeEventListener('scroll', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [updateTransform, scrollContext]);

    return (
        <motion.div 
            ref={footerRef}
            className="bg-black text-white relative overflow-hidden min-h-screen"
        >
            {/* Scroll-triggered Blue Circle - MODIFIED: Very slow spring animation */}
            <motion.div 
                className="absolute bottom-0 left-1/2 pointer-events-none z-50"
                style={{
                    scale,          // Using spring-animated values
                    opacity,        // Using spring-animated values
                    x: '-50%',
                    y: '50%',
                    transformOrigin: 'center bottom',
                }}
            >
                <div className="w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px] rounded-full bg-[#011eff]"></div>
            </motion.div>

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
                    {/* <p className="text-gray-300 text-sm leading-relaxed">
                        We are more than a technology provider; we are your strategic partner in progress.
                    </p> */}
                    <P>We are more than a technology provider; we are your strategic partner in progress.</P>
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
                        {/* <h3 className="text-white font-medium text-lg mb-6">Industries</h3> */}
                        <H3>Industries</H3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">High Tech</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Banking and Finance</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">EHS and PMS</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        {/* <h3 className="text-white font-medium text-lg mb-6">Quick Links</h3> */}
                        <H3>Quick Links</H3>
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
                        {/* <h3 className="text-white font-medium text-lg mb-6">Contact Sales</h3> */}
                        <H3>Contact Sales</H3>
                        <div className="space-y-3">
                            {/* <p className="text-gray-300 text-sm">info@abc.com</p>
                            <p className="text-gray-300 text-sm">040-7418529630</p> */}
                            <P>info@abc.com</P>
                            <P>040-7418529630</P>
                        </div>
                    </div>

                    {/* Stay Up to Date Column */}
                    <div>
                        {/* <h3 className="text-white font-medium text-lg mb-6">Stay Up to date</h3> */}
                        <H3>Stay up to date</H3>
                        {/* <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Subscribe to our Insights, our monthly look at the critical issues facing global businesses.
                        </p> */}
                        <P>Subscribe to our Insights, our monthly look at the critical issues facing global businesses.</P>
                        <div className="flex gap-2 mt-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-transparent border border-gray-600 rounded px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                            />
                            {/* <button className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                                SUBMIT
                            </button> */}
                            <Submit>SUBMIT</Submit>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section with Centered ANIMA */}
            <div className="px-10 relative z-10">
                {/* ANIMA Text - Centered at Bottom */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ y: 48, opacity: 0 }}
                        animate={{ 
                            y: isInView ? 0 : 48, 
                            opacity: isInView ? 1 : 0 
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white tracking-widest text-center">
                            ANIMA
                        </h1>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
