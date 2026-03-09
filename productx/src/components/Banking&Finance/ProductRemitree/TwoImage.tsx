// import React from "react";

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
    title: "Consecte adipiscing werd kuwerd",
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
    <div className="flex flex-col gap-5 xl:gap-6">

        {/* Heading — 64px at xl, scales down responsively */}
        <h2
            className="
        font-semibold leading-[1] tracking-[0] text-[#2B68C3]
        text-[26px]
        sm:text-[34px]
        md:text-[40px]
        lg:text-[52px]
        xl:text-[64px]
      "
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
            {content.title}
        </h2>

        {/* Description — 16px at xl */}
        <p
            className="
        font-normal leading-[1.6] tracking-[0] text-[#141414]
        text-[13px]
        sm:text-[14px]
        lg:text-[15px]
        xl:text-[16px]
      "
            style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
            {content.description}
        </p>

        {/* Checklist — 16px at xl */}
        <div className="flex flex-col gap-3 xl:gap-5 mt-1">
            {content.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span
                        className="
              font-normal leading-[1.5] tracking-[0] text-[#141414]
              text-[13px]
              sm:text-[14px]
              lg:text-[15px]
              xl:text-[16px]
            "
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
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

            {/* ─────────────────────────────────────────────────────
          SECTION 1 — Image LEFT | Text RIGHT
          Desktop: 1440×599px | left: 80px | gap: ~46px
      ───────────────────────────────────────────────────── */}
            <div
                className="
          w-full max-w-[1440px] mx-auto
          px-5
          sm:px-8
          lg:px-14
          xl:px-[80px]
          pt-[35px] pb-[60px]
          xl:pt-[35.55px] xl:pb-[60px]
        "
            >
                <div
                    className="
            flex flex-col md:flex-row
            items-center
            gap-8
            md:gap-8
            lg:gap-10
            xl:gap-[46px]
          "
                >
                    {/* Image Placeholder */}
                    <div
                        className="
              w-full
              md:w-[50%]
              lg:w-[48%]
              aspect-[687/503]
              bg-[#E3E3E3]
              rounded-xl
              md:rounded-[16px]
              xl:rounded-[20px]
              flex-shrink-0
            "
                    />

                    {/* Text — right side */}
                    <div className="w-full md:w-[50%] lg:w-[52%]">
                        <TextBlock />
                    </div>
                </div>
            </div>

            {/* ─────────────────────────────────────────────────────
          SECTION 2 — Text LEFT | Image RIGHT
          Desktop: 1440×573px | left: 82px | gap: 44px
      ───────────────────────────────────────────────────── */}
            <div
                className="
          w-full max-w-[1440px] mx-auto
          px-5
          sm:px-8
          lg:px-14
          xl:px-[82px]
          pt-[33px] pb-[36px]
          xl:pt-[33.55px] xl:pb-[36px]
        "
            >
                <div
                    className="
            flex flex-col-reverse md:flex-row
            items-center
            gap-8
            md:gap-8
            lg:gap-10
            xl:gap-[44px]
          "
                >
                    {/* Text — left side */}
                    <div className="w-full md:w-[45%] lg:w-[43%]">
                        <TextBlock />
                    </div>

                    {/* Image Placeholder */}
                    <div
                        className="
              w-full
              md:w-[55%]
              lg:w-[57%]
              aspect-[687/503]
              bg-[#E3E3E3]
              rounded-xl
              md:rounded-[16px]
              xl:rounded-[20px]
              flex-shrink-0
            "
                    />
                </div>
            </div>

        </div>
    );
};

export default TwoImage;
