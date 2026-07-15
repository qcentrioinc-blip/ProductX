import { P } from "../../../styles/Typography";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../ThemeContext";

/* ================= TYPES ================= */

type Card = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

type SectionContent = {
  intro: {
    title: string | ReactNode;
    desc: string;
  };
  cards: Card[];
};

type Theme = {
  darkBg: string,
  darkHeadingColor: string,
  sectionBg: string;
  headingColor: string;
  paraColor: string;
  darkcardGradient?: string;
  cardGradient: string;
  circleColor: string;
};

/* ================= THEMES (UNCHANGED) ================= */

const themes: Record<string, Theme> = {
  "/industries/banking-and-finance/built-for": {
    sectionBg: "#FFF",
    headingColor: "#000",

    paraColor: "#4A4A4A",
    cardGradient: "#fafafa",
    circleColor: "#E0E0E0",
    darkBg: "#000000",
    darkHeadingColor: "#ffffff",
    darkcardGradient: "#0f172b ",
  },
  "/industries/ehr-and-pms/built-for": {
    sectionBg: "#ffffff",
    headingColor: "#008280",
    paraColor: "#2A2A2A",
    cardGradient: "linear-gradient(135deg, #F2F2FF, #F2F2FF)",
    circleColor: "#FFFFFF",
    darkBg: "#141414",
    darkHeadingColor: "#FFCA28",
    darkcardGradient: "#0b4f4a",
  },
  "/industries/high-tech/built-for": {
    sectionBg: "#5C5C5C",
    headingColor: "#000000",
    paraColor: "#000000",
    cardGradient: "linear-gradient(135deg, #FFFFFF, #FFFFFF)",
    circleColor: "#D9D9D9",
    darkBg: "#000000",
    darkHeadingColor: "#60a5fa",
    darkcardGradient: "#5B7C99",
  },
  "/industries/cloud-finops-ai/built-for": {
    darkBg: "#000000",
    darkHeadingColor: "#60a5fa",
    sectionBg: "#FFFFFF",
    headingColor: "#254D70",
    paraColor: "#141414",
    cardGradient: "linear-gradient(135deg, #EAE9FF, #EAE9FF)",
    circleColor: "#FFFFFF",
    darkcardGradient: "",
  },
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, SectionContent>> = {
  "banking-and-finance": {
    banks: {
      intro: {
        title: "Real-World Impact",
        desc: "Practical applications of our solutions solving daily operational challenges for banking teams.",
      },
      cards: [
        { id: 1, title: "Faster Onboarding", desc: "Digitize KYC to reduce customer account setup time significantly.", image: "/BuiltForBnf/time-fast.svg" },
        { id: 2, title: "Automated Compliance", desc: " Screen transactions against watch lists without manual effort.", image: "/BuiltForBnf/compliance.svg" },
        { id: 3, title: "Seamless Payments", desc: "Process cross-border remittances with straight-through efficiency.", image: "/BuiltForBnf/wallet-money.svg" },
        { id: 4, title: "Risk Monitoring", desc: "Detect potential NPAs early using predictive analytics.", image: "/BuiltForBnf/risk-alt.svg" },
        { id: 5, title: "Accurate Reconciliation", desc: "Match high-volume transactions automatically across systems.", image: "/BuiltForBnf/digital-banking.svg" },
      ],
    },
    "credit-union": {
      intro: {
        title: "Real-World Impact",
        desc: "Practical ways our solutions help credit unions serve members better every day.",
      },
      cards: [
        { id: 1, title: "Member Onboarding", desc: " Open new accounts digitally with automated KYC verification.", image: "/BuiltForBnf/dial-med.svg" },
        { id: 2, title: "Loan Processing", desc: "Approve member loans faster using digital applications and eVerification.", image: "/BuiltForBnf/handshake-deal.svg" },
        { id: 3, title: "League Payments", desc: "Route transactions through your league seamlessly to central networks.", image: "/BuiltForBnf/payment-pos.svg" },
        { id: 4, title: "Daily Reconciliation", desc: "Match member transactions automatically across multiple systems.", image: "/BuiltForBnf/daily-calendar.svg" },
        { id: 5, title: "Regulatory Reporting", desc: "Generate compliance reports without manual data gathering.", image: "/BuiltForBnf/assept-document.svg" },
      ],
    },
    "financial-unions": {
      intro: {
        title: "Real-World Impact",
        desc: "Practical applications solving complex challenges across your entire financial operations.",
      },
      cards: [
        { id: 1, title: "Multi-Entity Management", desc: "Configure unlimited branches with centralized control and oversight.", image: "/BuiltForBnf/dial-med.svg" },
        { id: 2, title: "Cross-Border Payments", desc: "Process international remittances with full SWIFT and AML compliance.", image: "/BuiltForBnf/wallet-money.svg" },
        { id: 3, title: "Asset Liability Management", desc: "Forecast liquidity and manage interest rate risk proactively.", image: "/BuiltForBnf/balance-scale.svg" },
        { id: 4, title: "NPA Tracking", desc: "Identify stressed assets early using automated IRAC guidelines.", image: "/BuiltForBnf/risk.svg" },
        { id: 5, title: "Enterprise Reconciliation", desc: "Match millions of transactions across disparate systems automatically.", image: "/BuiltForBnf/assept-document.svg" },
      ],
    },
  },
  "cloud-finops-ai": {
    enterprises: {
      intro: {
        title: "Real Scenarios",
        desc: "CloudDIET enables enterprise IT teams to identify, analyze, and fix any Azure waste quickly and efficiently across complex multi-subscription environments. ",
      },
      cards: [
        { id: 1, title: "VM Rightsizing", desc: "CloudDIET finds oversized VMs across subscriptions to cut compute costs.", image: "/BuiltFor/Scissor.svg" },
        { id: 2, title: "Storage Optimization", desc: "Identifies unused storage and wrong tiers draining your Azure budget. ", image: "/BuiltFor/data.svg" },
        { id: 3, title: "SKU Changes", desc: "Spots bad SKUs and plans costing extra in PaaS services. ", image: "/BuiltFor/Budget.svg" },
        { id: 4, title: "License Savings", desc: "Recommends better reservations and discounts for database workloads..", image: "/BuiltFor/Discount.svg" },
        { id: 5, title: "Usage Fixes", desc: "Reveals low-utilization resources wasting money across environments. ", image: "/BuiltFor/Teamwork.svg" },
      ],
    },

    "saas-application-providers": {
      intro: {
        title: "SaaS Scenarios ",
        desc: "CloudDIET enables SaaS teams to scale their apps efficiently and reliably without wasteful Azure spending or any performance compromises across workloads.  ",
      },
      cards: [
        { id: 1, title: "App Scaling", desc: " CloudDIET converts Azure Functions from fixed costly plans to flexible usage-based pricing automatically. ", image: "/BuiltFor/Window.svg" },
        { id: 2, title: "Event Optimization", desc: "CloudDIET automatically spots unused accounts and broken triggers wasting money every single day.", image: "/BuiltFor/optimization.svg" },
        { id: 3, title: "Registry Cleanup", desc: "CloudDIET finds unused container registries automatically after CI/CD deployments complete. ", image: "/BuiltFor/clean-up.svg" },
        { id: 4, title: "Integration Savings", desc: "CloudDIET automatically spots unused accounts and broken triggers wasting money every single day..", image: "/BuiltFor/integration.svg" },
        { id: 5, title: "Multi-Region Fixs", desc: "CloudDIET optimizes App Services across multiple regions for global apps efficiently and reliably.", image: "/BuiltFor/speedometer.svg" },
      ],
    },

    "regulated-large-enterprise": {
      intro: {
        title: "Enterprise Scenarios ",
        desc: "CloudDIET fixes Azure waste in multi-region setups for safe enterprise scaling. ",
      },
      cards: [
        { id: 1, title: "Cosmos Overprovision", desc: "Switches costly multi-master Cosmos DB to read replicas where writes stay low.", image: "/BuiltFor/Database.svg" },
        { id: 2, title: " RI Waste", desc: "Finds unused reserved instances across regions and replaces with active ones. ", image: "/BuiltFor/Recycle2.svg" },
        { id: 3, title: "App Services", desc: "Rightsizes Elastic App Service plans stuck in dedicated compute without auto-scale.", image: "/BuiltFor/Money2.svg" },
        { id: 4, title: "Synapse Savings", desc: " Applies 3-year reserved instances to Synapse workloads, cutting the untime costs by 81%.", image: "/BuiltFor/Add.svg" },
        { id: 5, title: " Storage Defender", desc: "Disables expensive Defender for Storage on backup accounts with high transactions. ", image: "/BuiltFor/CloudCompute.svg" },
      ],
    },
  },
  "ehr-and-pms": {
    "long-term-care": {
      intro: {
        title: (
          <>
            Scenarios <br /> We Enable
          </>
        ),
        desc: "See how Unified Clinicapp solves daily challenges in your long-term care facility.",
      },
      cards: [
        { id: 1, title: "MDS Submission", desc: "Complete and submit accurate Minimum Data Set reports seamlessly.", image: "/BuiltFor/analytics.png" },
        { id: 2, title: "Interdisciplinary Coordination", desc: "Coordinate care plans across nurses, therapists, and dietary staff instantly.", image: "/BuiltFor/team.png" },
        { id: 3, title: "Medication Administration", desc: "Manage and document medication schedules with a unified MAR.", image: "/BuiltFor/database-management.png" },
        { id: 4, title: "Family Engagement", desc: "Provide families secure portal access to updates and documents.", image: "/BuiltFor/house-hands.png" },
        { id: 5, title: "Complex Billing", desc: "Accurately process Medicare, Medicaid, and private payor claims together.", image: "/BuiltFor/file-invoice.png" },
      ],
    },
    "home-healthcare": {
      intro: {
        title: (
          <>
            Scenarios <br /> We Enable
          </>
        ),
        desc: "See how Unified Clinicapp connects your field clinicians, office, and patients seamlessly.",
      },
      cards: [
        { id: 1, title: "Mobile Documentation", desc: "Clinicians chart visits, vitals, and notes directly on mobile devices.", image: "/BuiltFor/mobile-hand.png" },
        { id: 2, title: "Real-Time Scheduling", desc: "Coordinate caregiver visits, routes, and patient assignments from anywhere.", image: "/BuiltFor/calendar-clock.png" },
        { id: 3, title: "Family Portal", desc: "Provide families secure access to care plans and visit updates.", image: "/BuiltFor/team.png" },
        { id: 4, title: "Visit-Based Billing", desc: "Accurately capture and submit charges per completed in-home visit.", image: "/BuiltFor/marker.png" },
        { id: 5, title: "Compliance Tracking", desc: "Document and report on care plan adherence and outcomes.", image: "/BuiltFor/file-invoice.png" },
      ],
    },
    "clinics-and-hospitals": {
      intro: {
        title: (
          <>
            Scenarios <br /> We Enable
          </>
        ),
        desc: "See how we streamline complex workflows across your hospital or clinic network.",
      },
      cards: [
        { id: 1, title: "Multi-Department Scheduling", desc: "Coordinate appointments, surgeries, and provider time across all locations seamlessly.", image: "/BuiltFor/analytics.png" },
        { id: 2, title: "Unified Patient Records", desc: "Access complete clinical history and documents from any department instantly.", image: "/BuiltFor/member-list.png" },
        { id: 3, title: "Coordinated Care Handoffs", desc: "Manage safe patient transitions from ED to inpatient to outpatient care.", image: "/BuiltFor/database-management.png" },
        { id: 4, title: "Integrated Lab Management", desc: "Order, track, and view results directly within the patient's unified timeline.", image: "/BuiltFor/house-hands.png" },
        { id: 5, title: "Enterprise Revenue Cycle", desc: "Manage high-volume billing, claims, and financial reporting from one dashboard.", image: "/BuiltFor/money-transfer.png" },
      ],
    },
  },
};

/* ================= COMPONENT ================= */

export default function FiveCardGradientSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { pathname } = useLocation();
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  const basePath = pathname.split("/").slice(0, 4).join("/");

  const active =
    themes[basePath] ||
    themes["/industries/banking-and-finance/built-for"];


  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const sectionContent =
    CONTENT[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!sectionContent) return null;

  const contentCards = sectionContent.cards;

  /* ================= CAROUSEL LOGIC ================= */

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByOne = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    if (!card) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -card.offsetWidth - 24 : card.offsetWidth + 24,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    setActiveIndex(
      Math.round((scrollLeft / maxScroll) * (contentCards.length - 1))
    );
  };

  useEffect(() => {
    const timer = setInterval(() => scrollByOne("right"), 4000);
    return () => clearInterval(timer);
  }, []);

  /* ================= RENDER (UNCHANGED UI) ================= */

  return (
    <section
      className="w-full py-10   xl:py-16"
      style={{ backgroundColor: isDark ? (active.darkBg ?? "#0f172a") : active.sectionBg }}
    >


      <div className="max-w-8xl mx-10 xl:px-10">

        {/* ---------- MOBILE / TABLET INTRO ---------- */}
        <div className="mb-8 lg:hidden">
          <h2 style={{ color: active.headingColor }} className={`mb-4 text-[32px] md:text-[48px] lg:text-[72px]  ${industry === "ehr-and-pms" ? "font-bricolageEHR" : "font-bricolage"}`}>
            {sectionContent.intro.title}
          </h2>
          <P style={{ color: active.paraColor }} className="max-w-md">
            {sectionContent.intro.desc}
          </P>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-y-8 gap-x-4">

          {/* ---------- DESKTOP INTRO (UNCHANGED) ---------- */}
          <div className="hidden lg:block col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="">
              <h2 style={{
                color: isDark
                  ? active.darkHeadingColor ?? active.headingColor
                  : active.headingColor,
              }} className={`mb-4 text-[32px] md:text-[48px] lg:text-[72px]  ${industry === "ehr-and-pms" ? "font-bricolageEHR" : "font-bricolage"}
                style={{ color: active.headingColor }}`}
              >
                {sectionContent.intro.title}
              </h2>

              <P style={{ color: active.paraColor }} className="max-w-md">
                {sectionContent.intro.desc}
              </P>
            </div>
          </div>

          {/* ---------- CAROUSEL (MOBILE / TABLET / iPad Pro) ---------- */}
          <div className="relative col-span-1 sm:col-span-2 xl:hidden">
            <button
              onClick={() => scrollByOne("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scrollByOne("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronRight />
            </button>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {contentCards.map((card) => (
                <div
                  key={card.id}
                  style={{ background: isDark ? (active.darkcardGradient ?? active.cardGradient) : active.cardGradient }}
                  className="
                    snap-center flex-shrink-0 w-[95%] md:w-[55%] mx-auto
                    relative rounded-xl p-8 border border-gray-100
                    shadow-sm hover:shadow-xl hover:shadow-black/5
                    transform transition-all duration-500 ease-out hover:-translate-y-2
                  "
                >
                  <div
                    className="w-20 h-20 rounded-full mb-6"

                  >
                    <img src={card.image} alt={card.title} className="w-full h-full object-contain p-4" />
                  </div>
                  <h4 className="mb-4 text-[16px] md:text-[20px] lg:text-[24px]" style={{
                    color: isDark
                      ? active.darkHeadingColor ?? active.headingColor
                      : active.headingColor,
                  }}>
                    {card.title}
                  </h4>
                  <P style={{ color: active.paraColor }}>
                    {card.desc}
                  </P>
                </div>
              ))}
            </div>

            {/* ---------- DOTS ---------- */}
            <div className="flex justify-center gap-2 mt-4">
              {contentCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    scrollByOne(i > activeIndex ? "right" : "left")
                  }
                  className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === i
                    ? "bg-black scale-125"
                    : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* ---------- DESKTOP CARDS (UNCHANGED) ---------- */}
          {contentCards.map((card) => (
            <div
              key={card.id}
              style={{ background: isDark ? (active.darkcardGradient ?? active.cardGradient) : active.cardGradient }}
              className="
                hidden xl:block relative rounded-xl p-8 border border-gray-100
                shadow-sm hover:shadow-xl hover:shadow-black/5
                transform transition-all duration-500 ease-out hover:-translate-y-2
                w-[95%] mx-auto
              "
            >
              <div
                className="w-20 h-20 rounded-full mb-6">
                <img src={card.image} alt={card.title} className="w-full h-full object-contain p-4" />
              </div>
              <h4 style={{
                color: isDark
                  ? active.darkHeadingColor ?? active.headingColor
                  : active.headingColor,
              }} className="mb-4 text-[16px] md:text-[20px] lg:text-[24px]">
                {card.title}
              </h4>
              <P style={{ color: active.paraColor }} className="xl:max-w-xs">
                {card.desc}
              </P>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
