import { H2, H4, P } from "../../../styles/Typography";

// ─── Rebuilt Pixel-Perfect Icon ────────────────────────────────────────────────
const DataFileIcon = () => (
  <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Document Body */}
    <path d="M4 2C4 0.89543 4.89543 0 6 0H16L24 8V24C24 25.1046 23.1046 26 22 26H6C4.89543 26 4 25.1046 4 24V2Z" fill="#2563EB" />
    {/* Top Right Fold */}
    <path d="M16 0V8H24L16 0Z" fill="#1D4ED8" />
    {/* Internal Bar Chart */}
    <rect x="8" y="14" width="2.5" height="8" rx="0.5" fill="white" />
    <rect x="13" y="10" width="2.5" height="12" rx="0.5" fill="white" />
    <rect x="18" y="16" width="2.5" height="6" rx="0.5" fill="white" />
    {/* Overlapping Database Disks */}
    <ellipse cx="24" cy="22" rx="6" ry="2.5" fill="#2563EB" stroke="white" strokeWidth="1.5" />
    <path d="M18 22V26.5C18 27.8807 20.6863 29 24 29C27.3137 29 30 27.8807 30 26.5V22" fill="#2563EB" stroke="white" strokeWidth="1.5" />
    <ellipse cx="24" cy="26.5" rx="6" ry="2.5" fill="#2563EB" stroke="white" strokeWidth="1.5" />
  </svg>
);

// ─── Feature Card Component ───────────────────────────────────────────────────
const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div
    className="flex flex-1 flex-col rounded-[20px] bg-white p-6 sm:p-8 border border-white h-full"
    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
  >
    <DataFileIcon />
    <H4 className="mt-6 mb-3 text-[18px] sm:text-[20px]">{title}</H4>
    <P className="leading-[1.7] text-[14px] sm:text-[14.5px]">{description}</P>
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const cards = [
  { id: 1, title: "NPA Identification", description: "System identifies NPA records based on IRAC guidelines using various attribute combinations and NPA rules for financial and non-financial cases." },
  { id: 2, title: "Asset Classification", description: "Automatic classification based on asset type and pre-set rules. Excludes KVP, NSC, and insurance-backed loans with sufficient margin." },
  { id: 3, title: "Provisioning Calculation", description: "Provision computation based on secured and unsecured principal amount. Secured principal is security value or outstanding principal whichever is less." },
  { id: 4, title: "Exception Management", description: "Handles asset classification changes, security value changes, additional security updates, additional provisioning updates, and alert maintenance." },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const SamsFive = () => {
  return (
    <div
      className="mx-auto w-full max-w-7xl rounded-none sm:rounded-[24px] px-4 sm:px-8 py-10 sm:py-16 my-4 sm:my-8"
      style={{ backgroundColor: "#E5EDF9" }}
    >
      {/* Header Section */}
      <div className="mb-10 sm:mb-14 text-center px-2">
        <H2 className="mb-4 sm:mb-5 tracking-tight !text-[#111827] text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2]">
          NPA Identification and Classification <br className="hidden sm:block" /> Process Overview
        </H2>
        <P className="mx-auto max-w-[800px] leading-[1.6] sm:leading-[1.7] !text-[#4B5563] text-[14px] sm:text-[16px]">
          The system identifies NPA records based on IRAC guidelines, automates asset classification, and performs provisioning calculations with exception handling capabilities.
        </P>
      </div>

      {/* 3-Column Grid Layout */}
      <div className="mx-auto grid max-w-[1060px] grid-cols-1 md:grid-cols-3 items-stretch gap-6 sm:gap-8">

        {/* Left Column (Renders 2nd on Mobile) */}
        <div className="flex flex-col gap-6 sm:gap-8 order-2 md:order-1">
          {cards.slice(0, 2).map((card) => (
            <FeatureCard key={card.id} title={card.title} description={card.description} />
          ))}
        </div>

        {/* Center Gray Placeholder Block (Renders 1st on Mobile) */}
        <div
          className="w-full rounded-[20px] min-h-[250px] sm:min-h-[300px] md:min-h-full order-1 md:order-2"

        >
          <img src="/SAMS/Npaidentification.webp" className="w-full h-full object-cover" />
        </div>

        {/* Right Column (Renders 3rd on Mobile) */}
        <div className="flex flex-col gap-6 sm:gap-8 order-3 md:order-3">
          {cards.slice(2, 4).map((card) => (
            <FeatureCard key={card.id} title={card.title} description={card.description} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SamsFive;