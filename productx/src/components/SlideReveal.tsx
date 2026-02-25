import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Users,
  Globe,
  Sliders,
  RefreshCcw,
  CheckCircle,
} from "lucide-react";
import { H2, H4, P } from "../styles/Typography";

export default function SlideReveal() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);

  return (
    <>
      {/* SCROLL SECTION */}
      <section ref={sectionRef} className="relative h-[280vh] bg-white">
        <div className="sticky top-10 h-[98vh] md:h-[75vh] xl:h-[90vh] overflow-hidden overflow-y-auto">
          
          {/* BACK CONTENT */}
          <div className="absolute inset-0 bg-[#efefef] px-6 md:px-12 lg:px-16 py-10 lg:py-20 z-0">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16 xl:h-full xl:items-center">
              {/* 
                 CHANGES MADE FOR TABLETS:
                 1. Grid: 'md:grid-cols-2' forces 2 columns earlier on tablets.
                 2. Height/Centering: Moved 'h-full' and 'items-center' to 'xl:'.
                    On tablets, content now starts from the top (with padding) instead of 
                    floating in the middle of empty vertical space.
                 3. Gap: 'md:gap-12' is tighter than 'xl:gap-16', reducing horizontal whitespace.
              */}

              {/* LEFT TEXT */}
              <div className="flex flex-col justify-center">
                <H2 className=" mb-4 lg:mb-6 leading-snug">
                  Il{" "}
                  <span className="text-[#2B68C3] font-semibold">
                    verde
                  </span>{" "}
                  è la missione di <br /> LEITWIND. lorem ipsum
                </H2>

                <P className=" leading-relaxed mb-8 lg:mb-10 max-w-lg">
                  LEITWIND è specializzata nella progettazione,
                  costruzione ed installazione di turbine eoliche
                  Onshore di classe Megawatt (250 – 3.000 kW),
                  progettate specificamente per singole installazioni,
                  progetti di repowering e per progetti di autoconsumo
                  di comunità locali e piccole/medie imprese,
                  con l'obiettivo di ridurre il costo dell'energia
                  per il consumatore finale.
                </P>

                <button className="group border border-[#2B68C3] text-[#2B68C3] font-bricolage px-6 py-3 md:px-8 md:py-4 rounded-full font-medium flex items-center gap-3 hover:bg-[#2B68C3] hover:text-white transition-all duration-300 text-sm md:text-base w-fit">
                  Scopri di più su LEITWIND
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>
              </div>

              {/* RIGHT CARDS */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                {[
                  {
                    icon: <Heart size={23} />,
                    title: "Italianità",
                    text: "Unico produttore italiano di turbine eoliche Onshore di classe Megawatt.",
                  },
                  {
                    icon: <Users size={23} />,
                    title: "Partner fiducia",
                    text: "Facciamo parte del Gruppo High Technology Industries (HTI).",
                  },
                  {
                    icon: <Globe size={23} />,
                    title: "Nel Mondo",
                    text: "Oltre 400 turbine installate in tutto il mondo.",
                  },
                  {
                    icon: <Sliders size={23} />,
                    title: "Personalizzazione",
                    text: "Progetti personalizzati grazie al nostro design modulare.",
                  },
                  {
                    icon: <RefreshCcw size={23} />,
                    title: "Idea alla gestione",
                    text: "Seguiamo il cliente dal primo contatto al completamento.",
                  },
                  {
                    icon: <CheckCircle size={23} />,
                    title: "Certificazioni",
                    text: "Eccellenza riconosciuta da enti internazionali.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#e6e6e6] rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    <div className="text-[#2B68C3] mb-2 lg:mb-3">
                      {item.icon}
                    </div>
                    <H4 className=" mb-1 lg:mb-2 ">
                      {item.title}
                    </H4>
                    <P className=" ">
                      {item.text}
                    </P>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* FRONT IMAGE (SLIDES LEFT SLOWLY) */}
          <motion.div
            style={{ x }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <img
              src="/Img1.webp" // replace
              alt="Wind Energy"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>
    </>
  );
}