import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { H1, H3 } from "../../../styles/Typography";
import { ArrowRight } from "lucide-react";
// import { HoverExpandImage } from "../../HomePage/AIOptimization/HoverExpandImage";

const TABS = [
  {
    id: "tab1",
    title: "Single Transfers",
    description:
      "Process single transfer transactions for customers and non-customers. Supports credit transfers with complete validation and secure processing.",
    desc: "Service both account holders and walk-in customers for one-time payments. Ideal for person-to-person transfers and occasional payouts. ",
    image: "/Physician/IC.webp",
  },
  {
    id: "tab2",
    title: "Bulk Transfers",
    description:
      " Handle bulk transactions for subsidies, dividends, salary, pension, utility bills, loan collections, and mutual fund investments. ",
    desc: "Upload batch files with standardized Excel format. System processes high volumes efficiently with configurable intervals and multiple batch support. ",
    image: "/EHR-PMS/Physician/img.webp",
  },
  {
    id: "tab3",
    title: "Inbound Processing",
    description:
      "Manage inbound NACHA transactions with automated reconciliation. Supports deferred settlement for better liquidity management across institutions. ",
    desc: "Receive and process incoming credit transfers from various sources. System matches transactions and updates settlement positions for complete tracking. ",
    image: "/EHR-PMS/Physician/img.webp",
  },
];

const AccordionPago = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const leftRef = useRef<HTMLUListElement | null>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!leftRef.current) return;
    const observer = new ResizeObserver(() => {
      setLeftHeight(leftRef.current!.offsetHeight);
    });
    observer.observe(leftRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTab = (i: number) => {
    if (!sectionRef.current) return;
    const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
    const fraction = TABS.length > 1 ? i / (TABS.length - 1) : 0;
    const target = sectionRef.current.offsetTop + fraction * totalScrollable;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      const index = Math.min(
        TABS.length - 1,
        Math.max(0, Math.round(progress * (TABS.length - 1)))
      );

      if (index !== activeIndexRef.current) {
        activeIndexRef.current = index;
        setActiveIndex(index);
        setActiveTab(TABS[index]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ height: `${TABS.length * 100}vh` }}
      className="relative  "
    >
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-[90vh]  dark:bg-black lg:[70vh] xl:h-[110vh] overflow-hidden bg-white flex flex-col">

        {/* HEADING */}
        <div className=" max-w-full  mx-auto pt-10 pb-10 text-center px-6">
          <H1>NACHA Payment <br className="hidden xl:block"/>Processing Capabilities</H1>
        </div>

        {/* GRID */}
        <div className="flex-1 overflow-hidden xl:mx-auto max-w-7xl w-full xl:px-0 px-4 pb-10">
          <div className="grid grid-cols-1 xl:grid-cols-[35%_65%] gap-14 items-start h-full">

            {/* LEFT TABS */}
            <motion.ul
              ref={leftRef}
              layout
              className="space-y-0 xl:space-y-6"
            >
              {TABS.map((tab, index) => {
                const isActive = activeTab.id === tab.id;

                return (
                  <li
                    key={tab.id}
                    className="rounded-xl  min-h-[100px] xl:min-h-[100px]"
                  >
                    <button
                      type="button"
                      onClick={() => scrollToTab(index)}
                      className="w-full text-left cursor-pointer rounded-xl p-4 transition-colors hover:dark:bg-transparent hover:bg-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1">

                          {/* MOBILE IMAGE — above title, only when active, hidden on lg+ */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                key={`mobile-img-${tab.id}`}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="xl:hidden mb-4 w-full rounded-xl overflow-hidden  bg-gray-200"
                                style={{ minHeight: 180 }}
                              >
                                {/* <HoverExpandImage
                                  src={tab.image}
                                  alt="Clinical feature preview"
                                  className="w-full object-contain border border-gray-200 shadow-lg"
                                /> */}
                                {/* Placeholder — remove when HoverExpandImage is uncommented */}
                                <div className="w-full h-44 bg-gray-200  rounded-xl" />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* TITLE */}
                          <div className="flex items-center gap-2">
                            <H3
                              className={`font-semibold leading-tight transition ${
                                isActive ? "text-[#2B68C3]" : "text-black dark:text-white"
                              }`}
                            >
                              {tab.title}
                            </H3>

                            <motion.span
                              animate={{ x: isActive ? 4 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`transition ${
                                isActive ? "text-[#2B68C3] " : "text-gray-600 "
                              }`}
                            >
                              <ArrowRight />
                            </motion.span>
                          </div>

                          {/* SMOOTH DESCRIPTION */}
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.p
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="mt-3 text-md font-quicksand text-[18px] dark:text-white text-[#141414] max-w-2xl overflow-hidden"
                              >
                                {tab.description}
                                {tab.desc && <p className="mt-2 text-[18px]  dark:text-white font-quicksand">{tab.desc}</p>}
                              </motion.p>
                            )}
                          </AnimatePresence>

                        </div>
                      </div>
                    </button>

                    {index !== TABS.length - 1 && (
                      <hr className="mt-4 h-px w-full text-gray-400" />
                    )}
                  </li>
                );
              })}
            </motion.ul>

            {/* RIGHT IMAGE — desktop only */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                className="relative hidden xl:block bg-gray-200 w-full overflow-hidden rounded-xl"
                style={{ height: leftHeight ?? "auto" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* <HoverExpandImage
                  src={activeTab.image}
                  alt="Clinical feature preview"
                  className="h-full w-full bg-gray-100 object-contain"
                /> */}
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AccordionPago;