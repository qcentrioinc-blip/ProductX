import { useParams } from "react-router-dom";
import { H1 } from "../../../styles/Typography";

const CONTENT: Record<string, { title: string; buttonLabel: string; bgImage?: string }> = {
  "banks": {
    title: "Banking solutions built for modern institutions.",
    buttonLabel: "Explore Products",
    bgImage: "/BuiltFor/bg_img.jpg"
  },
  "credit-union": {
    title: "Banking solutions built for credit unions",
    buttonLabel: "Explore Products",
    bgImage: "/BuiltFor/bg_img.jpg"
  },
  "financial-unions": {
    title: "Enterprise banking solutions for financial institutions",
    buttonLabel: "Discover Platform",
    bgImage: "/BuiltFor/bg_img.jpg"
  }
};

export default function TitleSecBnF() {
  const { builtForType } = useParams<{ builtForType: string }>();

  // Default to banks if type not found (or handle generic case)
  const content = CONTENT[builtForType || "banks"] || CONTENT["banks"];

  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('${content.bgImage}')` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-10 ">

          <div className="w-full md:w-[60%] space-y-6">
            <H1 className="text-white leading-tight">
              {content.title}
            </H1>

            <button className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg flex items-center gap-2 text-gray-900 shadow-lg hover:bg-white transition">
              <span className="text-sm font-semibold">{content.buttonLabel}</span>
              {/* Inline ArrowUpRight SVG */}
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
      </div>
    </section>
  );
}
