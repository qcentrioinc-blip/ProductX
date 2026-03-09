const Check = ({ className = "", size = 24, style }: { className?: string; size?: number; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><path d="M20 6 9 17l-5-5" /></svg>
);
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { useRef } from "react";


const HWD = () => {
  const location = useLocation();
  const path = location.pathname;

  // Horizontal scroll refs & hooks (same pattern as Process.tsx)
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const isEHR = path.startsWith("/industries/ehr-and-pms");
  // const isBanking = path.startsWith("/industries/banking-and-finance");
  const isHighTech = path.startsWith("/industries/high-tech");
  const isAI = location.pathname === "/industries/cloud-finops-ai";
  const isConciliare = path.startsWith("/industries/banking-and-finance/products/conciliare");
  const isKYC = path.startsWith("/industries/banking-and-finance/products/kyc");

  const COLORS = {
    ehr: {
      topBg: "#F5F5F5",
      bottomBg: "#FFFFFF",
      headingColor: "#008280",
      textcolor: "#141414",
      CheckColor: "#008280"


    },
    banking: {
      topBg: "#F5F5F5",
      bottomBg: "#FFFFFF",
      headingColor: "#2B68C3",
      textcolor: "#000000",
      CheckColor: "#254D70"
    },
    hightech: {
      topBg: "#141414",
      bottomBg: "#E7D6FF",
      headingColor: "#5B3FD1",
      textcolor: "#CCCCCC",
      CheckColor: "#A80040"
    },
    ai: {
      topBg: "#FFFFFF",
      bottomBg: "#F5F5F5",
      headingColor: "#254D70",
      textcolor: "#141414",
      CheckColor: "#254D70"

    }
  };
  const HEADING_CONTENT = {
    ai: {
      eyebrow: "Your Success",
      title: "Real-World Use Cases",
      description:
        "See how organizations use CloudDIET and AI-driven FinOps to reduce cloud spend, improve governance, and retain savings long term."
    },

    conciliare: {
      eyebrow: " ",
      title: " Common Reconciliation Use Cases",
      description:
        ""
    },
    kyc: {
      eyebrow: " ",
      title: "Real-world use cases",
      description:
        ""
    },
    banking: {
      eyebrow: " ",
      title: " Common Reconciliation Use Cases",
      description:
        "Discover how banks and financial institutions modernize operations, reduce risk, and optimize costs through cloud and data transformation."
    },
    ehr: {
      eyebrow: " ",
      title: "Practice Use Cases",
      description:
        " See how Unified Clinicapp adapts to different clinical and operational needs to support your specific practice goals."
    },
    hightech: {
      eyebrow: " ",
      title: "Real-World Use Cases",
      description:
        "Explore how high-tech companies scale faster, control cloud spend, and optimize complex multi-cloud environments."
    }
  };

  const CARD_CONTENT = {
    ai: [
      {
        title: "Major Azure Cost Reduction",
        image: "/AIOptimization/Saving.svg",
        description:
          "A mature cloud team saved millions annually through advanced optimization and reserved instance strategies.",
        points: [
          "Identified $1.6M in savings via optimized Azure Reserved Instance purchases.",
          "Found an additional $3.8M through unique CloudDIET profiling and engineering insights.",
          "Recommended moving Azure Functions from Dedicated plan to Elastic Premium for scalability. ",
          "Disabled Defender for Storage on backup accounts, eliminating unnecessary high transaction costs. ",
          "Implemented 3-year Synapse RIs, achieving an 81% blended discount on runtime costs. ",
        ],
      },

      {
        title: " Retain Savings Long-Term",
        image: "/AIOptimization/PriceTag.svg",
        description:
          " CloudDIET helped a tech firm maintain 8x ROI with continuous optimization and secure profiling.",
        points: [

          "Used read-only access to analyze billing metadata and resource configurations only. ",
          "Targeted 60-70% savings in under six weeks using effort-based categorization. ",
          "Leveraged AI to identify unused messaging buses and unlinked integration accounts. ",
          "Optimized licensing and commercial terms across IaaS and PaaS service deployments.",
          "Ensured full customer control and zero access to sensitive data or workloads. ",
        ],
      },
      {
        title: "Multi-Cloud Waste Elimination",
        image: "/AIOptimization/Cloud.svg",
        description:
          "An enterprise reduced cloud waste by 30% without compromising project outcomes or performance.",
        points: [
          "Profiled hundreds of resource configurations across AWS, Azure, and Google Cloud. ",
          "Identified and corrected over-provisioned App Services and misconfigured scale-out rules.",
          "Optimized Cosmos DB from expensive multi-master to cost-effective read replicas. ",
          "Recommended tier changes for Azure Files from Hot to Transaction Optimized. ",
          "Provided ongoing AI-driven measures to retain 80-90% of savings long-term.",
        ],
      },
    ],

    conciliare: [
      {
        title: "Bank Account Reconciliation",
        image: "/icon1.svg",
        description:
          "Automate matching between internal ledgers and bank statements across multiple accounts and currencies. ",
        points: [
          "Match bank statement transactions against general ledger entries ",
          "Reconcile multiple ledgers mapped to single bank accounts ",
          "Identify discrepancies between opening and closing balances ",
          "Handle high-volume transaction matching with parallel processing ",
          "Generate exception reports for unmatched items with ageing analysis ",
        ],
      },
      {
        title: "NOSTRO Message Reconciliation",
        image: "/icon2.svg",
        description:
          "Reconcile SWIFT messages with core banking system transactions for accurate cross-border settlement. ",
        points: [
          "Match SWIFT MT103, 202, 940, and 950 messages against system references ",
          "Identify messages sent without source system references ",
          "Detect duplicate messages sent with same reference numbers ",
          "Validate critical field values including BIC, Field 20, and Field 21 ",
          "Escalate pending mismatches to concerned authorities automatically ",
        ],
      },
      {
        title: "Payment Channel Reconciliation",
        image: "/icon3.svg",
        description:
          "Match transactions across payment gateways, POS systems, merchant accounts, and settlement files. ",
        points: [
          "Reconcile POS and gateway transactions against settlement reports .",
          "Match collections and disbursements across multiple channels ",
          "Identify revenue leakage from unidentified discrepancies ",
          "Link consolidated settlement entries to detailed transaction sets .",
          "Reduce customer complaints from delayed or incorrect matching ",
        ],
      },
    ],

    kyc: [
      {
        title: "Digital KYC transformation",
        image: "/icon1.svg",
        description:
          "Implemented across 64 branches with over 620 users processing retail and corporate customers.",
        points: [
          "Full lifecycle coverage from onboarding to trigger events ",
          "Integration with front-end, screening, and core systems ",
          "Approximately 85% straight-through processing achieved ",
          "Significant automation with minimal manual intervention ",
          "Used by analysts, compliance officers, and approvers ",
        ],
      },
      {
        title: " Enterprise due diligence",
        image: "/icon2.svg",
        description:
          "Coverage primarily for non-individual entities with complex ownership structures.",
        points: [
          "Screening and case management integration throughout .",
          "Roles across analyst, MLRO, and compliance approvers ",
          "Automated risk assessment based on configured rules ",
          "Periodic and trigger event reviews system-managed ",
          "Consistent execution across all entity types ",
        ],
      },
      {
        title: "Commodity trading compliance",
        image: "/icon3.svg",
        description:
          "Coverage for private limited companies, firms, and other entity types.",
        points: [
          " Integration with front-end system for data capture .",

          "Connected to leading screening engine providers .",

          "Implemented as Software as a Service model .",

          "Roles across frontline, compliance, and approvers .",

          "Automated data capture reduces manual effort .",
        ],
      },
    ],

    banking: [
      {
        title: "Digital KYC transformation",
        image: "/AIOptimization/Saving.svg",
        description:
          "Implemented across 64 branches with over 620 users processing retail and corporate customers.",
        points: [
          "Full lifecycle coverage from onboarding to trigger events ",
          "Integration with front-end, screening, and core systems .",
          "Approximately 85% straight-through processing achieved ",
          "Significant automation with minimal manual intervention ",
          "Used by analysts, compliance officers, and approvers ",
        ],
      },
      {
        title: "Enterprise due diligence",
        image: "/AIOptimization/pricetag.svg",
        description:
          " Coverage primarily for non-individual entities with complex ownership structures. ",
        points: [
          "Screening and case management integration throughout",
          "Roles across analyst, MLRO, and compliance approvers ",
          "Automated risk assessment based on configured rules ",
          "Periodic and trigger event reviews system-managed ",
          "Consistent execution across all entity types ",
        ],
      },
      {
        title: "Commodity trading compliance",
        image: "/AIOptimization/Cloud.svg",
        description:
          " Coverage for private limited companies, firms, and other entity types.",
        points: [
          "Access across UAE and India locations seamlessly ",
          "End client types include varied corporate structures ",
          "Beneficial ownership identification fully automated ",
          "Policy configuration adapts to local requirements ",
          "System-driven execution ensures consistent outcomes ",
        ],
      },
    ],
    ehr: [
      {
        title: "Unified Primary Care Clinic",
        image: "/EHRIcons/Treatment.svg",
        description:
          "Manage everything from patient visits to billing efficiently with one unified, easy-to-use platform.",
        points: [
          "Streamline digital intake and patient self-check-in.",
          "Document visits quickly with customizable SOAP templates.",
          "Submit claims and track payments from the same system. ",
          "Offer telehealth visits and a patient portal easily. ",
          "View practice performance with unified financial dashboards. ",
        ],
      },
      {
        title: " Multi-Specialty Medical Group",
        image: "/EHRIcons/Team.svg",
        description:
          "Support diverse specialties with tailored workflows while maintaining centralized operations and billing.",
        points: [
          "Use specialty-specific note templates for accurate documentation. ",
          "Coordinate complex scheduling across providers and locations. ",
          "Integrate lab orders and view results seamlessly in charts. ",
          "Manage authorizations and track referrals within patient records. ",
          "Generate consolidated financial reports for the entire group. ",
        ],
      },
      {
        title: "Streamlined Billing Service",
        image: "/EHRIcons/Dollar.svg",
        description:
          "Handle client billing with greater transparency, accuracy, and efficiency using integrated tools.",
        points: [
          "Access clean claims data directly from clinical documentation",
          "Monitor the entire claim lifecycle on a single dashboard. ",
          "Track remittance advice and payment status in real time. .",
          "Resolve denials faster with linked clinical and billing data. ",
          "Provide clients with clear, customizable financial performance reports. ",
        ],
      },
    ],
  };



  // CARDS
  let cards;
  if (isConciliare) cards = CARD_CONTENT.conciliare;
  else if (isKYC) cards = CARD_CONTENT.kyc;
  else if (isAI) cards = CARD_CONTENT.ai;
  else if (isEHR) cards = CARD_CONTENT.ehr;
  else cards = CARD_CONTENT.banking;

  // HEADING
  let headingContent;
  if (isConciliare) headingContent = HEADING_CONTENT.conciliare;
  else if (isKYC) headingContent = HEADING_CONTENT.kyc;
  else if (isAI) headingContent = HEADING_CONTENT.ai;
  else if (isEHR) headingContent = HEADING_CONTENT.ehr;
  else if (isHighTech) headingContent = HEADING_CONTENT.hightech;
  else headingContent = HEADING_CONTENT.banking;

  // PALETTE
  let palette;
  if (isConciliare || isKYC) palette = COLORS.banking;
  else if (isEHR) palette = COLORS.ehr;
  else if (isHighTech) palette = COLORS.hightech;
  else if (isAI) palette = COLORS.ai;
  else palette = COLORS.banking;
  const { topBg, bottomBg, headingColor, textcolor, CheckColor } = palette;

  const bottomTextColor = isAI ? "#254D70" : textcolor;
  const headingFontClass = isEHR ? "font-bricolageEHR" : "font-bricolage";





  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  const CardContent = ({ title, description, points, image }: { title: string; description: string; points: string[]; image: string }) => (
    <section>
      {/* Top Section */}
      <div
        className="py-6 px-4 pb-12 md:p-8 min-h-[220px] xl:min-h-[250px]"
        style={{ backgroundColor: topBg }}
      >

        <div className="w-14 h-14 rounded-full mb-2 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-2"
          />
        </div>



        <h3
          className={`${headingFontClass} mb-4 text-[16px]  whitespace-wrap md:text-[20px] lg:text-[24px] font-bold`}
          style={{ color: headingColor }}
        >
          {title}
        </h3>

        <p className="balance-text font-quicksand" style={{ color: textcolor }}>
          {description}
        </p>

      </div>

      {/* Bottom Section */}
      <div
        className="pl-6 pr-10 py-10"
        style={{ backgroundColor: bottomBg }}
      >
        <ul className="space-y-4">
          {points.map((item, idx) => (
            <li key={idx} className="flex font-quicksand items-center gap-4">
              <Check size={25} style={{ color: CheckColor }} />
              <p style={{ color: bottomTextColor }}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <>
      {/* ===== MOBILE: Horizontal scroll on vertical scroll (same pattern as Process.tsx) ===== */}
      <div className="block md:hidden">
        <div
          ref={containerRef}
          className="relative h-[200vh]"
        >
          {/* Sticky container */}
          <div className="sticky top-13 xl:top-0 h-screen flex flex-col justify-center overflow-hidden w-full shadow-md">
            {/* Header */}
            <div className="px-4 pt-6 pb-4">
              <h2
                className={`text-[#2A2A2A] ${headingFontClass} text-[24px] leading-none`}
              >
                {headingContent.title}
              </h2>
            </div>

            {/* Horizontal scroll section */}
            <div className="flex-1 flex items-start overflow-hidden w-full pt-4">
              <motion.div
                style={{ x }}
                className="flex gap-6 pl-4"
              >
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className="relative rounded-md overflow-hidden shadow-lg flex-shrink-0 w-[85vw] min-h-[420px]"
                    style={{ backgroundColor: bottomBg }}
                  >
                    <CardContent {...card} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP/TABLET: Original grid layout ===== */}
      <div className="hidden md:block">
        <div className="w-full relative shadow-md flex flex-col items-center py-10 md:py-8 px-4 sm:px-6 md:px-10">
          <div className="max-w-7xl w-full">

            {/* HEADINGS */}
            <div className="flex flex-col space-y-4 sm:space-y-6 mb-6">
              <h2
                className={`text-[#2A2A2A] ${headingFontClass}
       text-[24px] md:text-[32px] lg:text-[48px] leading-none`}
              >
                {headingContent.title}
              </h2>
              <p className="max-w-3xl text-base md:text-lg font-quicksand xl:text-xl text-[#555555]">
                {/* {headingContent.description} */}
              </p>
            </div>

            {/* CARDS — DESKTOP GRID */}
            <div
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory xl:overflow-visible xl:grid xl:grid-cols-3 sm:gap-14 pb-4 scrollbar-hide"
            >
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-md overflow-hidden shadow-lg snap-center flex-shrink-0
                   w-[85%] md:w-[50%] xl:w-auto min-h-[420px] xl:min-h-[600px]"
                  style={{ backgroundColor: bottomBg }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <CardContent {...card} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default HWD;