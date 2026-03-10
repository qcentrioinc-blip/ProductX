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
    title: <>Consecte adipisc <br /> ing werd kuwerd</>,
    description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    features: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    ],
};

// ── Reusable Text Block ───────────────────────────────────────
const TextBlock = () => (
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
            {content.title}
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
            {content.description}
        </p>

        {/* Checklist */}
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 mt-1">
            {content.features.map((feat, i) => (
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
                    {/* Image Placeholder */}
                    <div className="
                        w-full flex-shrink-0
                        md:w-[48%] lg:w-[48%] xl:w-[50%]
                        aspect-[687/503]
                        bg-[#E3E3E3]
                        rounded-xl
                        md:rounded-2xl
                        xl:rounded-[20px]
                    " />

                    {/* Text — right */}
                    <div className="w-full md:w-[52%] lg:w-[52%] xl:w-[50%]">
                        <TextBlock />
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
                        <TextBlock />
                    </div>

                    {/* Image Placeholder */}
                    <div className="
                        w-full flex-shrink-0
                        md:w-[48%] lg:w-[48%] xl:w-[50%]
                        aspect-[687/503]
                        bg-[#E3E3E3]
                        rounded-xl
                        md:rounded-2xl
                        xl:rounded-[20px]
                    " />
                </div>
            </div>

        </div>
    );
};

export default TwoImage;
