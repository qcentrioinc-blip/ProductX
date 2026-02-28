import { useState, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H3, P } from '../../../styles/Typography';

const productionSites = [
    'USA', 'Switzerland', 'UK', 'Singapore', 'India', 'Australia'
];

interface Location {
    id: string;
    name: string;
    position: { top: string; left: string };
    description: string;
}

const locations: Location[] = [
    {
        id: 'usa',
        name: 'USA (Head Quarter)',
        position: { top: '38%', left: '22%' },
        description: '405 State Hwy 121, Suite A250 Lewisville, Texas 75067'
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        position: { top: '30%', left: '51%' },
        description: '15 Chemin de Grande Canal, 1208, Geneva Switzerland'
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        position: { top: '38%', left: '55%' },
        description: '200 Brook Drive Green Park Reading RG2 6UB United Kingdom'
    },
    {
        id: 'singapore',
        name: 'Singapore',
        position: { top: '60%', left: '85%' },
        description: '1 Raffles Place, #34-04, One Raffles Place, Singapore - 048616'
    },
    {
        id: 'india',
        name: 'India',
        position: { top: '55%', left: '72%' },
        description: 'Unit # 504D, 5th Floor, 126(P), PSR Prime Tower, Gachibowli, Hyderabad, Telangana 500032'
    },
    {
        id: 'australia',
        name: 'Australia',
        position: { top: '75%', left: '90%' },
        description: "Level 10.20 Martin Place Sydney, NSW, 2000"
    }
];

export default function Map() {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(locations[0]);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const cardY = useTransform(scrollYProgress, [0, 1], [250, -50]);
    const cardOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <div
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-white font-sans
                        h-auto md:h-[1000px]"
        >
            {/* Background Map */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/worldmap.webp)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
            />

            <div className="relative z-10 h-full flex flex-col">

                {/* ── Header ── */}
                <div className="p-4 sm:p-6 md:p-10 lg:p-16 max-w-2xl">
                    <H3
                        className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl uppercase text-[#002DB4] leading-tight mb-3 md:mb-6"
                    >
                        Our Global Presence Across Six Strategic Manufacturing Locations
                    </H3>
                    <P
                        className="text-sm sm:text-base md:text-xl text-gray-800 leading-relaxed"
                        style={{ fontFamily: 'Quicksand, sans-serif' }}
                    >
                        With production facilities across Europe and Asia, we maintain an
                        international supply chain to serve customers efficiently. Six
                        operational hubs ensure reliable delivery and local support worldwide.
                    </P>
                </div>

                {/* ── Map Dots — hidden on mobile, visible md+ ── */}
                <div className="hidden md:block">
                    {locations.map((location) => (
                        <button
                            key={location.id}
                            className="absolute z-20 cursor-pointer transition-transform duration-200 hover:scale-110"
                            style={{
                                top: location.position.top,
                                left: location.position.left,
                                transform: 'translate(-50%, -50%)'
                            }}
                            onClick={() => setSelectedLocation(location)}
                        >
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-8 h-8 md:w-12 md:h-12 bg-[#0066A1] rounded-full opacity-20 animate-ping" />
                                <div className="absolute w-5 h-5 md:w-8 md:h-8 bg-[#0066A1] rounded-full opacity-40" />
                                <div className="relative w-3.5 h-3.5 md:w-5 md:h-5 bg-[#0066A1] rounded-full border-2 border-white shadow-md flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#6CB52D] rounded-full" />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* MOBILE left card — static, in normal flow */}
                <div className="block md:hidden px-4 pb-4">
                    <div className="bg-[#2B68C3] rounded-2xl shadow-2xl p-6 w-full border-[12px] border-white">
                        <div className="flex flex-col space-y-6">

                            {/* Section 1 */}
                            <div className="flex items-start gap-4 justify-between">
                                <div
                                    className="text-3xl font-medium text-white leading-none shrink-0"
                                    style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                                >
                                    6
                                </div>
                                <div className="flex flex-col">
                                    <div
                                        className="text-xs font-extrabold text-white mb-1 uppercase tracking-widest"
                                        style={{ fontFamily: 'Quicksand, sans-serif' }}
                                    >
                                        Manufacturing Sites
                                    </div>
                                    <div className="space-y-0.5">
                                        {productionSites.map((site, index) => (
                                            <div
                                                key={index}
                                                className="text-xs text-white"
                                                style={{ fontFamily: 'Barlow, sans-serif' }}
                                            >
                                                {site}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="flex items-start gap-6">
                                <div
                                    className="text-3xl font-medium text-white leading-none shrink-0"
                                    style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                                >
                                    400+
                                </div>
                                <div className="flex flex-col pt-2">
                                    <div
                                        className="text-sm font-extrabold text-white uppercase tracking-widest"
                                        style={{ fontFamily: 'Quicksand, sans-serif' }}
                                    >
                                        Turbines
                                    </div>
                                    <div className="text-xs text-white mt-0.5" style={{ fontFamily: 'Barlow, sans-serif' }}>
                                        Installed Globally
                                    </div>
                                </div>
                            </div>

                            {/* Link */}
                            <a
                                href="#"
                                className="text-white text-sm font-semibold flex items-center group"
                                style={{ fontFamily: 'Barlow, sans-serif' }}
                            >
                                View All References
                                <ArrowRight size={16} strokeWidth={2} className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* MOBILE right card — static, below left card */}
                {selectedLocation && (
                    <div className="block md:hidden px-4 pb-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <div
                                    className="bg-[#2B68C3] text-white px-4 py-2 rounded-full text-sm font-bold flex-1 mr-2"
                                    style={{ fontFamily: 'Barlow, sans-serif' }}
                                >
                                    {selectedLocation.name}
                                </div>
                                <button
                                    onClick={() => setSelectedLocation(null)}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700"
                                >
                                    <X size={16} strokeWidth={2} />
                                </button>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-4">
                                <p className="text-sm text-gray-800 leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
                                    {selectedLocation.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── DESKTOP LEFT CARD — md+ only, scroll animation ── */}
                <motion.div
                    style={{ y: cardY, opacity: cardOpacity }}
                    className="hidden md:block absolute left-12 top-[35%] z-30 bg-[#2B68C3] rounded-3xl shadow-2xl p-10 lg:p-12 w-[420px] lg:w-[480px] border-[15px] border-white"
                >
                    <div className="flex flex-col space-y-16">

                        {/* Section 1 */}
                        <div className="flex items-start gap-8 justify-between">
                            <div
                                className="text-5xl font-medium text-white leading-none shrink-0"
                                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                            >
                                6
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="text-base font-extrabold text-white mb-2 uppercase tracking-widest"
                                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                                >
                                    Manufacturing Sites
                                </div>
                                <div className="space-y-1">
                                    {productionSites.map((site, index) => (
                                        <div key={index} className="text-sm text-white" style={{ fontFamily: 'Barlow, sans-serif' }}>
                                            {site}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="flex items-start gap-10">
                            <div
                                className="text-5xl font-medium text-white leading-none shrink-0"
                                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                            >
                                400+
                            </div>
                            <div className="flex flex-col pt-3">
                                <div
                                    className="text-base font-extrabold text-white uppercase tracking-widest"
                                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                                >
                                    Turbines
                                </div>
                                <div className="text-sm text-white mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
                                    Installed Globally
                                </div>
                            </div>
                        </div>

                        {/* Link */}
                        <a href="#" className="text-white text-lg font-semibold flex items-center group" style={{ fontFamily: 'Barlow, sans-serif' }}>
                            View All References
                            <ArrowRight size={18} strokeWidth={2} className="ml-2 md:w-5 md:h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* ── DESKTOP RIGHT CARD — md+ only ── */}
                {selectedLocation && (
                    <div
                        className="hidden md:flex absolute right-12 top-[25%] z-30 flex-col gap-3 w-[340px] lg:w-[380px]"
                        style={{ animation: 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                        <div className="flex justify-end">
                            <button
                                onClick={() => setSelectedLocation(null)}
                                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                <X size={18} strokeWidth={2} />
                            </button>
                        </div>
                        <div className="bg-[#2B68C3] text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl w-full" style={{ fontFamily: 'Barlow, sans-serif' }}>
                            {selectedLocation.name}
                        </div>
                        <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
                            <p className="text-base text-gray-800 leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
                                {selectedLocation.description}
                            </p>
                        </div>
                    </div>
                )}

            </div>

            <style>{`
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateY(-50%) translateX(100px); }
                    to   { opacity: 1; transform: translateY(-50%) translateX(0); }
                }
                @keyframes ping {
                    75%, 100% { transform: scale(2); opacity: 0; }
                }
            `}</style>
        </div>
    );
}
