import { useRef, useState, useEffect, lazy, Suspense } from "react";
// const FloatingLines = lazy(() => import("./AIFooterBackground"));
const ContactModal = lazy(() => import("../../AIOptimization/Navbar/ContactModal"));
import { toast } from "react-toastify";
 
// Simple inline SVG icons to avoid importing entire lucide-react library
const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 7h10v10" /><path d="M7 17L17 7" />
    </svg>
);
 
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);
 
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);
 
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
);
 
// const ENABLED_WAVES: Array<'top' | 'middle' | 'bottom'> = ['middle', 'bottom'];
// const LINE_COUNT = [10, 15, 20];
// const LINE_DISTANCE = [8, 6, 4];
 
const AIFooter = () => {
    const [email, setEmail] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [, setIsInView] = useState(false);
    const footerRef = useRef<HTMLElement>(null);
    const base = "/industries/cloud-finops-ai";
 
    // Native IntersectionObserver instead of framer-motion's useInView
    useEffect(() => {
        if (!footerRef.current) return;
 
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { rootMargin: "400px 0px 0px 0px" }
        );
 
        observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);
 
    const handleSubmit = () => {
        if (!email.trim()) {
            toast.error("Please enter your email");
            return;
        }
 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
 
        toast.success("Submitted successfully");
        setEmail("");
    };
 
    const socialIcons = [TwitterIcon, InstagramIcon, LinkedinIcon];
 
    return (
        <footer ref={footerRef} className="relative w-full overflow-hidden bg-[#254D70]">
            {/* Conditional Background Rendering */}
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
                <Suspense fallback={null}>
                    {isInView && (
                        <FloatingLines
                            linesGradient={[
                                '#00FFCC',
                                '#0099FF',
                                '#6600FF'
                            ]}
                            enabledWaves={ENABLED_WAVES}
                            lineCount={LINE_COUNT}
                            lineDistance={LINE_DISTANCE}
                            bendRadius={5.0}
                            bendStrength={-0.5}
                            interactive={false}
                            parallax={true}
                            paused={!isInView}
                        />
                    )}
                </Suspense>
            </div> */}
 
            {/* ========== TOP SECTION ========== */}
            <div className="relative w-full py-12 sm:py-14 md:py-16">
                <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="diagonal-lines-top" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse" patternTransform="rotate(-135)">
                                <line x1="0" y1="0" x2="0" y2="35" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagonal-lines-top)" />
                    </svg>
                </div>
 
                <div className="relative z-20 mx-4 sm:mx-8 md:mx-10 px-2 sm:px-4 lg:px-7 text-center">
                    <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-bold text-[#F5F5F5] leading-[110%]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                        Trust Qnest Clouddiet for guaranteed cloud savings
                    </h2>
                </div>
            </div>
 
            {/* ========== MAIN SECTION ========== */}
            <div className="relative w-full pt-10 pb-16 px-4 sm:px-8 lg:px-16 z-10">
                <div className="grid xl:grid-cols-[1fr_2fr] gap-12">
                    {/* LEFT SECTION */}
                    {/* Links */}
                    <div className="flex flex-wrap gap-16">
                        <div className="space-y-4">
                            <span className="text-xl font-bold text-white block">Products</span>
                            <ul className="space-y-2 text-[#F5F5F5]">
                                <li><a href={`${base}`} className="hover:underline">• CloudDIET</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <span className="text-xl font-bold text-white block">Quick Links</span>
                            <ul className="space-y-2 text-[#F5F5F5]">
                                <li><a href={`${base}/careers`} className="hover:underline">• Careers</a></li>
                                <li><button onClick={() => setModalOpen(true)} className="hover:underline">• Contact</button></li>
                                <li><a href="/industries/cloud-finops-ai/privacy-policy" className="hover:underline">• Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="flex gap-4 items-start">
                            {socialIcons.map((Icon, i) => (
                                <span key={i} className="w-6 h-6 text-white cursor-pointer hover:opacity-70">
                                    <Icon />
                                </span>
                            ))}
                        </div>
 
 
                    </div>
 
                    {/* RIGHT SIDE AI IMAGE */}
                    <div className="xl:pl-36 space-y-6">
                        <h3 className="text-[28px] sm:text-[44px] lg:text-[44px] text-[#F5F5F5] font-semibold leading-[110%]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                            Get Azure optimization tips  and savings updates monthly.
                        </h3>
 
                        <div className="max-w-md w-full flex items-center gap-4">
                            <input
                                type="email"
 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your mail"
                                className="flex-1 px-6 py-4 rounded-full text-white bg-transparent border-2 border-white/20 focus:border-white/60 outline-none"
                            />
 
                            <button className="inline-flex items-center gap-3 bg-black text-white px-4 py-3 font-bricolage rounded-lg font-bold uppercase hover:bg-zinc-600 transition-all whitespace-nowrap" onClick={handleSubmit}>
                                SUBMIT <ArrowUpRightIcon />
                            </button>
                        </div>
 
 
                    </div>
 
                </div>
 
            </div>
            <Suspense fallback={null}>
                {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
            </Suspense>
        </footer>
    );
};
 
export default AIFooter;