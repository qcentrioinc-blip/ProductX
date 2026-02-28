import { useParams } from "react-router-dom";

const CONTENT: Record<string, { title: string; buttonLabel: string; bgImage?: string }> = {
  "banks": {
    title: "Banking solutions built for modern institutions.",
    buttonLabel: "EXPLORE PRODUCTS",
    bgImage: "/BuiltForBnf/bnklanding.webp"
  },
  "credit-union": {
    title: "Banking solutions built for credit unions",
    buttonLabel: "EXPLORE PRODUCTS",
    bgImage: "/BuiltForBnf/credit-union.webp"
  },
  "financial-unions": {
    title: "Enterprise banking solutions for financial institutions",
    buttonLabel: "DISCOVER PLATFORM",
    bgImage: "/BuiltForBnf/financial-union.webp"
  }
};

export default function TitleSecBnF() {
  const { builtForType } = useParams<{ builtForType: string }>();

  // Default to banks if type not found (or handle generic case)
  const content = CONTENT[builtForType || "banks"] || CONTENT["banks"];

  return (
    <section className="w-full bg-white relative overflow-hidden flex flex-col xl:block min-h-[650px] lg:min-h-[750px] xl:min-h-[830px]">
      {/* LEFT CONTENT */}
      <div
        className="flex flex-col z-10 px-6 pt-20 lg:pt-40 pb-16 xl:p-0 xl:absolute"
        style={{
          gap: "24px",
        }}
      >
        {/* Desktop Wrapper helps match the Figma constraints while mobile stays fluid */}
        <div className="xl:absolute xl:top-[309.5px] xl:left-[80px] xl:w-[687px] flex flex-col gap-[24px]">
          <h1
            className="text-[#2B68C3] m-0 p-0 font-bricolage"
            style={{
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "100%",
            }}
          >
            {content.title}
          </h1>

          <button
            onClick={() => {
              const el = document.getElementById("contact-us");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center font-bold text-black border border-black hover:bg-black hover:text-white transition-colors duration-300"
            style={{
              width: "240px",
              height: "48px",
              gap: "8px",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
              fontFamily: "'quicksand', sans-serif"
            }}
          >
            <span className="uppercase whitespace-nowrap">{content.buttonLabel}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="w-full xl:w-full xl:absolute z-0 xl:right-0"
        style={{
          top: "clamp(0px, 141.5px, 120px)",
        }}
      >
        <div className="w-full h-full xl:absolute xl:right-0 xl:w-full xl:max-w-3xl xl:h-[700px]">
          <img
            src={content.bgImage}
            alt={content.title}
            className="w-full h-full object-cover rounded-t-3xl xl:rounded-none object-center"
          />
        </div>
      </div>
    </section>
  );
}
