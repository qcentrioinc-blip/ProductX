import { ArrowUpRight, Twitter, Instagram, Linkedin } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FloatingLines from "./AIFooterBackground";

const ENABLED_WAVES: Array<'top' | 'middle' | 'bottom'> = ['middle', 'bottom'];
const LINE_COUNT = [10, 15, 20];
const LINE_DISTANCE = [8, 6, 4];

const AIFooter = () => {
    const base = "/industries/ai-optimization";
    const footerRef = useRef(null);
    // Trigger when footer is within 400px of the viewport
    const isInView = useInView(footerRef, { margin: "400px 0px 0px 0px" });

    return (
        <footer ref={footerRef} className="relative w-full overflow-hidden bg-[#050505]">
            {/* Conditional Background Rendering */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <FloatingLines
                    enabledWaves={ENABLED_WAVES}
                    lineCount={LINE_COUNT}
                    lineDistance={LINE_DISTANCE}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={false} // Set to false to reduce mouse listener overhead
                    parallax={true}
                    paused={!isInView}
                />
            </div>

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
                                <h4 className="text-xl font-bold text-white">Products</h4>
                                <ul className="space-y-2 text-[#F5F5F5]">
                                    <li><a href={`${base}`} className="hover:underline">• CloudDIET</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white">Quick Links</h4>
                                <ul className="space-y-2 text-[#F5F5F5]">
                                    <li><a href={`${base}/careers`} className="hover:underline">• Careers</a></li>
                                    <li><a href={`${base}/contactus`} className="hover:underline">• Contact</a></li>
                                    <li><a href={`${base}/privacy-policy`} className="hover:underline">• Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="flex gap-4 items-start">
                                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <Icon key={i} className="w-6 h-6 text-white cursor-pointer hover:opacity-70" />
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
    placeholder="Enter your mail"
    className="flex-1 px-6 py-4 rounded-full text-white bg-transparent border-2 border-white/20 focus:border-white/60 outline-none"
  />

  <button className="inline-flex items-center gap-3 bg-black text-white px-4 py-3 font-bricolage rounded-lg font-bold uppercase hover:bg-zinc-600 transition-all whitespace-nowrap">
    SUBMIT <ArrowUpRight className="w-5 h-5" />
  </button>
</div>


                        
                    </div>
                    {/* <div className="hidden xl:block relative">
                        <img
                            src="/AIOptimization/AIGirl.png"
                            alt="AI interface"
                            className="absolute right-[-70px] bottom-[-65px] w-[600px] object-contain pointer-events-none"
                        />
                    </div> */}

                    
                </div>
                
            </div>
        </footer>
    );
};

export default AIFooter;