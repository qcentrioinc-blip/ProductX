import { H2 } from "../../../styles/Typography";

// ── Check Icon ────────────────────────────────────────────────
const CheckIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-[2px] flex-shrink-0"
    >
        <path
            d="M4 10.5L8.5 15L16 6"
            stroke="#2B68C3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// ── Shared Content ────────────────────────────────────────────
const content = {
    title1: <>Outward Remittance Processing <br /> Challenges Solved</>,
    description1:
        "Banks face difficulties in manual message creation, compliance screening, and transmission of cross-border payments. REMITREE automates these processes for efficiency and accuracy.",
    features1: [
        "Manual message creation causes delays and errors",
        "Compliance screening requires multiple system checks",
        "Transmission failures due to format validation issues",
    ],

    title2: <>Inward Remittance Processing <br /> Challenges Solved</>,
    description2:
        "Financial institutions struggle with matching incoming payments, manual reconciliation, and delayed crediting. REMITREE automates identification and posting to core systems.",
    features2: [
        "Manual matching of payments with NOSTRO accounts",
        "Delayed crediting affects customer satisfaction",
        "Reconciliation errors from manual data entry",
    ],
};

// ── Reusable Text Block ───────────────────────────────────────
const TextBlock = ({ title, description, features }: { title: React.ReactNode, description: string, features: string[] }) => (
    <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">

        {/* Heading */}
        <H2 className="
            font-['Bricolage_Grotesque'] font-semibold
            leading-none tracking-normal text-[#2B68C3]
            text-[24px]
            sm:text-[30px]
            md:text-[34px]
            lg:text-[44px]
            xl:text-[62px]
        ">
            {title}
        </H2>

        {/* Description */}
        <p className="
            font-['Quicksand'] font-normal
            leading-[1.6] tracking-normal text-[#141414]
            text-[13px]
            sm:text-[14px]
            md:text-[14px]
            lg:text-[15px]
            xl:text-[16px]
        ">
            {description}
        </p>

        {/* Checklist */}
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 mt-1">
            {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="
                        font-['Quicksand'] font-normal
                        leading-[1.5] tracking-normal text-[#141414]
                        text-[13px]
                        sm:text-[14px]
                        lg:text-[15px]
                        xl:text-[16px]
                    ">
                        {feat}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

// ── Main Component ────────────────────────────────────────────
const TwoImage = () => {
    return (
        <div className="w-full bg-white overflow-hidden">

            {/* ── SECTION 1 — Image LEFT | Text RIGHT ── */}
            <div className="
                w-full max-w-8xl mx-auto
                px-5
                sm:px-2
                md:px-10
                lg:px-14
                xl:px-16
                pt-8   pb-8
                sm:pt-10 sm:pb-10
                md:pt-10 md:pb-12
                lg:pt-12 lg:pb-14
                xl:pt-14 xl:pb-16
            ">
                <div className="
                    flex flex-col md:flex-row
                    items-center
                    gap-8
                    md:gap-8
                    lg:gap-10
                    xl:gap-12
                ">
                    {/* Image Placeholder 1 */}
                    <div className="
                        w-full flex-shrink-0 relative overflow-hidden
                        md:w-[48%] lg:w-[48%] xl:w-[50%]
                        aspect-[687/503]
                        rounded-xl
                        md:rounded-2xl
                        xl:rounded-[20px]
                    ">
                        <img
                            src="/Remitree/outward.webp"
                            alt="Outward Remittance Process"
                            className="w-full h-full object-fit"
                        />
                    </div>

                    {/* Text — right */}
                    <div className="w-full md:w-[52%] lg:w-[52%] xl:w-[50%]">
                        <TextBlock
                            title={content.title1}
                            description={content.description1}
                            features={content.features1}
                        />
                    </div>
                </div>
            </div>

            {/* ── SECTION 2 — Text LEFT | Image RIGHT ── */}
            <div className="
                w-full max-w-[1440px] mx-auto
                px-5
                sm:px-8
                md:px-10
                lg:px-14
                xl:px-20
                pt-8   pb-10
                sm:pt-10 sm:pb-12
                md:pt-10 md:pb-12
                lg:pt-12 lg:pb-14
                xl:pt-14 xl:pb-16
            ">
                <div className="
                    flex flex-col-reverse md:flex-row
                    items-center
                    gap-8
                    md:gap-8
                    lg:gap-10
                    xl:gap-12
                ">
                    {/* Text — left */}
                    <div className="w-full md:w-[52%] lg:w-[52%] xl:w-[50%]">
                        <TextBlock
                            title={content.title2}
                            description={content.description2}
                            features={content.features2}
                        />
                    </div>

                    {/* Image Placeholder 2 */}
                    <div className="
                        w-full flex-shrink-0 relative overflow-hidden
                        md:w-[48%] lg:w-[48%] xl:w-[50%]
                        aspect-[687/503]
                        rounded-xl
                        md:rounded-2xl
                        xl:rounded-[20px]
                    ">
                        <img
                            src="/Remitree/inward.webp"
                            alt="Inward Remittance Process"
                            className="w-full h-full object-fit"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TwoImage;
