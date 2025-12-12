"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { ScrollContext } from "../../../context/ScrollContext";
import { H1, H2, P } from "../../../styles/Typography";

const Harper = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // const scrollContext = useContext(ScrollContext);

    // Horizontal Scroll Animation (Same logic as Process)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Move horizontally based on scroll progress
    // Adjusted to match your card width (80vw)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    // Your content array
    const content = [
        {
            id: 1,
            desktopImage: "/Products/Products7/Harper0.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-1",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        },
        {
            id: 2,
            desktopImage: "/Products/Products7/Harper0.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-2",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        },
        {
            id: 3,
            desktopImage: "/Products/Products7/Harper0.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-3",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        },
        {
            id: 4,
            desktopImage: "/Products/Products7/Harper0.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-4",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        },
    ];

    return (
        <div className="font-sans">

            {/* ---------------------------------------- */}
            {/* MOBILE / TABLET (Vertical layout)        */}
            {/* ---------------------------------------- */}
            <div className="block lg:hidden bg-[#F5DDA9] py-8 px-4">
                <div className="mb-8">
                    <H1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-left ml-2 sm:ml-4">
                        Sed ut perspiciatis Sed ut
                    </H1>
                </div>

                <div className="flex flex-col gap-y-10">
                    {content.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="relative mx-auto max-w-[600px] h-[320px] rounded-[20px] overflow-hidden mb-6 bg-white p-4">
                                <img
                                    src={item.mobileImage}
                                    alt={item.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="mx-auto max-w-[600px] px-4">
                                <H2 className="text-xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </H2>
                                <P className="text-base text-gray-700 leading-relaxed">
                                    {item.description}
                                </P>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ---------------------------------------- */}
            {/* DESKTOP (Horizontal Scroll with Process Logic) */}
            {/* ---------------------------------------- */}
            <div
                ref={containerRef}
                className="hidden lg:block relative bg-[#F5DDA9]"
                style={{ height: "300vh" }} // scroll container height
            >
                <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

                    {/* Title */}
                    <div className="pt-16 pb-6 px-20 z-20">
                        <h1
                            style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 700,
                                fontSize: "64px",
                                lineHeight: "100%",
                                color: "#2A2A2A",
                            }}
                        >
                            Sed ut perspiciatis Sed ut
                        </h1>
                    </div>

                    {/* Horizontal Scroll Section */}
                    <div className="flex-1 flex items-center justify-start overflow-hidden py-4">
                        <motion.div
                            style={{ x }}
                            className="flex gap-x-16 h-full pl-20 pr-10"
                        >
                            {content.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-shrink-0"
                                    style={{
                                        width: "80vw",
                                        height: "560px",
                                        background: "#FFFFFF",
                                        borderRadius: "24px",
                                        padding: "40px",
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                                        display: "flex",
                                        gap: "40px",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* IMAGE */}
                                    <div style={{ flex: "0 0 50%" }}>
                                        <img
                                            src={item.desktopImage}
                                            alt={item.alt}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div style={{
                                        flex: "0 0 50%",
                                        paddingRight: "10px",  // reduced right padding 
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <h2
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                                fontWeight: 700,
                                                fontSize: "32px",
                                                lineHeight: "120%",
                                                color: "#2A2A2A",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            {item.title}
                                        </h2>

                                        {/* Divider Line */}
                                        <div
                                            style={{
                                                width: "550px",
                                                height: "2px",
                                                backgroundColor: "gray",
                                                borderRadius: "2px",
                                                marginBottom: "20px",
                                            }}
                                        />

                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontSize: "19px",
                                                fontWeight: 400,
                                                lineHeight: "130%",
                                                color: "#141414",
                                                paddingRight: "10px", // Also reducing padding here
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Harper;
