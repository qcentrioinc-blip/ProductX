"use client";

import { useEffect, useRef, useState } from "react";
import { H2, H4 } from "../../../styles/Typography";

const tabs = ["Duis aute", "Duis jhgfgb aute", "Duis jhgfgb aute"];

const tabImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80",
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
];

const tabData = [
  {
    items: [
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <circle cx="20" cy="20" r="18" stroke="#3B82F6" strokeWidth="2" />
            <path d="M20 10v10l6 4" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M14 26l3-3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        heading: "Clock In & Access",
        para: "Log in once as an Admin to immediately see your clinic's live status, appointments, and pending tasks on the main dashboard. Log in once as an Admin to immediately see your clinic's live status, appointments,",
      },
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <rect x="6" y="8" width="28" height="24" rx="3" stroke="#3B82F6" strokeWidth="2" />
            <path d="M6 14h28" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="13" cy="22" r="2" fill="#3B82F6" />
            <circle cx="20" cy="22" r="2" fill="#3B82F6" />
            <circle cx="27" cy="22" r="2" fill="#3B82F6" />
          </svg>
        ),
        heading: "Manage Appointments",
        para: "Log in once as an Admin to immediately see your clinic's live status, appointments, and pending tasks on the main dashboard. Log in once as an Admin to immediately see your clinic's live status, appointments,",
      },
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <path d="M20 6L8 12v10c0 7 5.5 12 12 14 6.5-2 12-7 12-14V12L20 6z" stroke="#3B82F6" strokeWidth="2" />
            <path d="M15 20l3.5 3.5L26 16" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        heading: "Secure Records",
        para: "Log in once as an Admin to immediately see your clinic's live status, appointments, and pending tasks on the main dashboard. Log in once as an Admin to immediately see your clinic's live status, appointments,",
      },
    ],
  },
  {
    items: [
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <path d="M10 30 Q20 8 30 30" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="20" r="3" fill="#3B82F6" />
            <path d="M8 30h24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        heading: "Performance Analytics",
        para: "Track revenue, patient volume, staff utilization, and outcome metrics on interactive dashboards. Turn raw clinic data into clear, actionable insights that drive smarter decisions daily.",
      },
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <circle cx="20" cy="14" r="6" stroke="#3B82F6" strokeWidth="2" />
            <path d="M8 34c0-6.627 5.373-10 12-10s12 3.373 12 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            <path d="M28 12l2 2 4-4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        heading: "Staff Management",
        para: "Assign roles, track attendance, and manage shift schedules from one unified panel. HR tools integrate with payroll providers so your admin burden shrinks while team visibility grows.",
      },
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <rect x="8" y="10" width="24" height="20" rx="2" stroke="#3B82F6" strokeWidth="2" />
            <path d="M8 16h24" stroke="#3B82F6" strokeWidth="2" />
            <path d="M14 24h12M14 28h8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        heading: "Billing & Invoicing",
        para: "Generate and send invoices instantly with insurance claim integrations. Automated follow-ups reduce outstanding balances while detailed financial reports keep your clinic's cash flow healthy.",
      },
    ],
  },
  {
    items: [
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <path d="M12 20h4l3-8 4 16 3-8h4" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        heading: "Patient Monitoring",
        para: "Connect wearable devices and remote monitoring tools to track vital signs between visits. Alerts notify care teams instantly when readings fall outside safe ranges for faster interventions.",
      },
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <circle cx="20" cy="20" r="12" stroke="#3B82F6" strokeWidth="2" />
            <path d="M20 14v6l4 4" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ),
        heading: "Wait Time Reduction",
        para: "Smart queue management and digital check-in slash lobby wait times. Patients receive live status updates on their phones so they stay informed and your front desk stays calm.",
      },
      {
        icon: (
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <path d="M10 28 C10 18 30 18 30 28" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="20" cy="14" r="5" stroke="#3B82F6" strokeWidth="2" />
            <path d="M16 34h8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 28v6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        heading: "Telehealth Integration",
        para: "Launch secure video consultations directly from the platform without third-party apps. Offer patients convenient remote care while keeping all notes and prescriptions in one unified record.",
      },
    ],
  },
];

// ─── Mobile view ─────────────────────────────────────────────────────────────
function MobileView() {
  const tabsRef = useRef<HTMLDivElement>(null);
 const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
  const container = tabsRef.current;
  if (!container) return;

  const activeEl = container.children[activeTab] as HTMLElement;
  if (!activeEl) return;

  activeEl.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}, [activeTab]);

 
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(index);
          }
        },
        { threshold: 0.4 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="lg:hidden flex flex-col pb-10 ">

      {/* ✅ STICKY TABS */}
      <div className="sticky top-12 z-20 bg-[#0f172a] py-4">
     <div
  ref={tabsRef}
  className="flex gap-3 overflow-x-auto no-scrollbar"
>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() =>
                sectionRefs.current[i]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className={`flex-shrink-0 px-5 font-quicksand text-[18px] py-2.5 rounded-full text-sm font-medium border whitespace-nowrap transition ${
                activeTab === i
                  ? "bg-[#2B68C3] text-white border-[#2B68C3]"
                  : "text-gray-300 border-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ VERTICAL SCROLL CONTENT */}
      <div className="flex flex-col gap-16 mt-6">
        {tabData.map((tab, tabIndex) => (
          <div
            key={tabIndex}
            ref={(el) => {sectionRefs.current[tabIndex] = el}}
            className="min-h-[70vh] flex flex-col gap-6"
          >
            {/* IMAGE */}
            <div className="h-[240px] rounded-2xl overflow-hidden">
              <img
                src={tabImages[tabIndex]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ITEMS */}
            {tab.items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                  {item.icon}
                </div>

                <H4 className="text-white font-semibold">
                  {item.heading}
                </H4>

                <p className="text-[#CCCCCC] text-[16px] leading-relaxed">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop sticky-scroll view (unchanged) ──────────────────────────────────
function DesktopView() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { top, height } = scrollRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / (height - windowHeight)));
      if (progress < 0.33) setActiveTab(0);
      else if (progress < 0.66) setActiveTab(1);
      else setActiveTab(2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentData = tabData[activeTab];

  return (
    <div
      ref={scrollRef}
      style={{ height: "300vh" }}
      className="relative hidden lg:block"
    >
      <div className="sticky top-20 h-screen flex items-start">
        <div className="w-full flex flex-row gap-10 lg:gap-16">

          {/* Left: Image */}
          <div className="w-full lg:w-[30%] flex-shrink-0">
            <div
              className="relative rounded-3xl overflow-hidden bg-gray-200 shadow-2xl"
              style={{ height: "640px" }}
            >
              <img
                key={activeTab}
                src={tabImages[activeTab]}
                alt="Clinic insight"
                className="w-full h-full object-cover opacity-90"
                style={{ animation: "fadeIn 0.6s ease forwards" }}
              />
            </div>
          </div>

          {/* Right: Tabs + content */}
          <div className="w-full lg:w-[62%] flex flex-col">
            <div className="flex flex-wrap gap-3 mb-8">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-12 py-3 font-quicksand text-[22px] rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeTab === i
                      ? "bg-[#2B68C3] text-white border-[#666666]"
                      : "bg-transparent text-gray-300 border-[#FAFAFA] hover:border-blue-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {currentData.items.map((item, idx) => (
                <div
                  key={`${activeTab}-${idx}`}
                  className="flex flex-col gap-1"
                  style={{
                    opacity: 0,
                    transform: "translateY(16px)",
                    animation: `slideUp 0.45s ease ${idx * 0.1}s forwards`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-500/10">
                    {item.icon}
                  </div>
                  <H4 className="text-white text-lg font-semibold leading-snug mt-1">
                    {item.heading}
                  </H4>
                  <p className="text-[#CCCCCC] font-quicksand text-[18px] leading-relaxed max-w-4xl">
                    {item.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function Gain() {
  return (
    <section className="bg-[#0f172a] px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto xl:px-0">

        {/* H2 — always scrolls normally */}
        <H2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold pt-10 pb-6 leading-tight max-w-3xl">
          Gain Instant Operational Insight
        </H2>

        {/* Mobile / tablet */}
        <MobileView />

        {/* Desktop sticky scroll */}
        <DesktopView />

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 0.9; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}