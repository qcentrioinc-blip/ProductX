import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { H2 } from "../../../styles/Typography";

const Statistics = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    // Trigger counters on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setInView(true);
            },
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Mouse glow movement
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden py-16 md:py-24"
            style={{
                // background: "linear-gradient(90deg, #2B68C34D, #FED6004D)",
            }}
        >
            {/* Glow effect following mouse */}
            <motion.div
                className="absolute w-[100px] h-[100px] rounded-full blur-3xl bg-white pointer-events-none"
                animate={{
                    x: mousePos.x - 60,
                    y: mousePos.y - 60,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />

            {/* Content Container */}
            <div className="max-w-8xl mx-4 sm:mx-6 md:mx-10 lg:mx-16 ">
                {/* Heading */}
                <H2 className="font-bold mb-12 sm:mx-5 md:mb-28">
                    <span className="text-[#254D70]">How CloudDIET Protect </span>
                    <br />
                    <span className="text-[#254D70]">Your Azure Environment & Data </span>
                </H2>

                {/* Counter Grid - Left Aligned */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#5A5A5A] [&>*]:border-r-0 sm:[&>*:nth-child(odd)]:border-r lg:[&>*:not(:last-child)]:border-r">          {[
                    { value: 0, suffix: "", text: "We analyze metadata only, never your files, databases, or apps. " },
                    { value: 100, suffix: "%", text: "CloudDIET never modifies resources or accesses customer data. " },
                    { value: 30, suffix: "%", text: "Enterprises reduce Azure spend without compromising performance. " },
                    { value: 256, suffix: "bit", text: "All data is encrypted at rest and in transit. " },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between items-start py-4 lg:py-0 mb-0 sm:mb-10 px-2 sm:px-4 md:px-6 lg:px-8"
                    >
                        {/* Text above */}
                        <p className=" mb-[30px] lg:mb-[84px] max-w-[240px]" style={{ color: "#141414", fontFamily: 'Quicksand', fontSize: '18px' }}>
                            {item.text}
                        </p>

                        {/* Counter with Icon */}
                        <div className="flex items-center gap-3 md:gap-6">
                            <img
                                src="/AIOptimization/TrendUp.svg"
                                alt="Trend icon"
                                className="h-4 md:h-6   lg:h-8"
                            />
                            <h2 className="text-[#141414] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bricolage">
                                {inView && (
                                    <CountUp
                                        start={0}
                                        end={item.value}
                                        duration={2}
                                        decimals={item.value % 1 !== 0 ? 1 : 0}
                                        suffix={item.suffix}
                                    />
                                )}
                            </h2>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;