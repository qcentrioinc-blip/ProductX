import { useState, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H3, P } from '../../../styles/Typography';

const productionSites = [
    'Alto Adige, Italia',
    'Telfs, Austria',
    'Vienna, Austria',
    'Tamil Nadu, India',
    'Gilly-sur-Isère, Francia',
    'Lacedonia, Italia'
];

interface Location {
    id: string;
    name: string;
    position: { top: string; left: string };
    description: string;
}

const locations: Location[] = [
    {
        id: 'alto-adige',
        name: 'Alto Adige',
        position: { top: '55%', left: '43.67%' },
        description: 'Sede centrale a Vipiteno e uffici a Bolzano. Ricerca e Sviluppo, Product Care, Vendite, Project Management e Customer Service.'
    },
    {
        id: 'telfs',
        name: 'Telfs, Austria',
        position: { top: '46.5%', left: '43.1%' },
        description: 'Ricerca e sviluppo, produzione di componenti principali, generatori, mozzi e telai. Sede del Centro Prove LEITWIND.'
    },
    {
        id: 'vienna',
        name: 'Vienna, Austria',
        position: { top: '40%', left: '60%' },
        description: 'Filiale austriaca con uffici di ricerca e sviluppo. Monitoraggio.'
    },
    {
        id: 'gilly',
        name: 'Gilly-sur-Isère, Francia',
        position: { top: '50%', left: '35%' },
        description: 'Produzione di turbine eoliche (generatori, mozzi e telai) da parte della società associata POMA.'
    },
    {
        id: 'india',
        name: 'Tamil Nadu, India',
        position: { top: '91.3%', left: '92.4%' },
        description: 'Produzione di generatori, mozzi, telai e pale.'
    },
    {
        id: 'lacedonia',
        name: 'Lacedonia, Italia',
        position: { top: '50%', left: '50%' },
        description: "Centro di assistenza e manutenzione per l'area del Sud Italia. Stoccaggio dei materiali, produzione di nuovi pezzi, rigenerazione e assemblaggio dei pezzi."
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
        <div ref={sectionRef} className="relative w-full h-[800px] md:h-[1000px] overflow-hidden bg-white font-sans">

            {/* Background Map Image */}
            <div
                className="absolute inset-0"
                style={{ backgroundImage: 'url(/mappa.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

            <div className="relative z-10 h-full flex flex-col">

                {/* Header */}
                <div className="p-6 md:p-10 lg:p-16 max-w-2xl">
                    <H3
                        className="text-3xl sm:text-5xl md:text-[64px] uppercase text-[#002DB4] leading-tight mb-4 md:mb-6"
                    >
                        LEITWIND NEL MONDO ON TWO NEL MONDO ON TWO
                    </H3>
                    <P className="text-md sm:text-xl md:text-xl text-gray-800 leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        Gestiamo una catena di fornitura internazionale e contiamo oltre 400 turbine eoliche installate in tutto il mondo.  turbine eoliche installate in tutto il mondo.  turbine eoliche installate in tutto il mondo.  turbine eoliche installate in tutto i
                    </P>
                </div>

                {/* Map Dots */}
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

                {/* ✅ LEFT CARD — scroll-linked upward animation */}
                <motion.div
                    style={{ y: cardY, opacity: cardOpacity }}
                    className="absolute left-4 right-4 md:left-12 md:right-auto top-[30%] md:top-[35%] z-30 bg-[#2B68C3] rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 w-auto md:w-[420px] lg:w-[480px] border-[15px] border-white"
                >
                    <div className="flex flex-col space-y-8 md:space-y-16">

                        {/* Section 1 */}
                        <div className="flex items-start gap-4 md:gap-8 justify-between">
                            <div
                                className="text-5xl md:text-7xl font-medium text-white leading-none shrink-0"
                                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                            >
                                6
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="text-sm md:text-base font-extrabold text-white mb-1 md:mb-2 uppercase tracking-widest"
                                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                                >
                                    SEDI PRODUTTIVE
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
                        <div className="flex items-start gap-4 md:gap-10">
                            <div
                                className="text-5xl md:text-7xl font-medium text-white leading-none shrink-0"
                                style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                            >
                                400+
                            </div>
                            <div className="flex flex-col pt-3">
                                <div
                                    className="text-base font-extrabold text-white uppercase tracking-widest"
                                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                                >
                                    INSTALLAZIONI
                                </div>
                                <div className="text-sm text-white mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
                                    in tutto il mondo
                                </div>
                            </div>
                        </div>

                        {/* Link */}
                        <a href="#" className="text-white text-base md:text-lg font-semibold flex items-center group" style={{ fontFamily: 'Barlow, sans-serif' }}>
                            Tutte le referenze
                            {/* <img
                                src="https://www.leitwind.com/wp-content/themes/leitwind/img/arrow_green.svg"
                                alt="arrow"
                                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                            /> */}
                            <ArrowRight size={18} strokeWidth={2} className="md:w-5 md:h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT CARD */}
                {selectedLocation && (
                    <div
                        className="absolute left-4 right-4 bottom-4 md:left-auto md:bottom-auto md:right-12 md:top-[35%] z-40 md:z-30 flex flex-col gap-2 md:gap-3 w-auto md:w-[340px] lg:w-[380px]"
                        style={{ animation: 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                        <div className="flex justify-end">
                            <button
                                onClick={() => setSelectedLocation(null)}
                                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                <X size={18} strokeWidth={2} className="md:w-5 md:h-5" />
                            </button>
                        </div>
                        <div className="bg-[#2B68C3] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-bold shadow-xl w-full" style={{ fontFamily: 'Barlow, sans-serif' }}>
                            {selectedLocation.name}
                        </div>
                        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8">
                            <p className="text-sm md:text-base text-gray-800 leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
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
