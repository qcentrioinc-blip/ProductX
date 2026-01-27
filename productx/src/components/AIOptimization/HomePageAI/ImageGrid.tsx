import { ArrowRight } from "lucide-react";
import { H2, H3, P } from "../../../styles/Typography";

type Item = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  cta: string;
};

const items: Item[] = [
  {
    title: " Secure Access",
    description:
      " Provide read-only access to billing and configuration metadata. We never access your data, files, databases, or applications.",
    cta: "Get Started",
    image: "/AIProduct/SecureAccess.png",
  },
  {
    title: "AI Analysis",
    description:
      " Our profiling engine analyzes hundreds of measures to identify misconfigurations, waste, and optimization opportunities across your cloud estate.",
    image: "/AIProduct/Analysis.png",
    cta: "Learn More",
    reverse: true,
  },
  {
    title: "Realize Savings",
    description:
      "We provide an assured savings estimate, help implement recommendations, and charge only a percentage of the savings you realize.",
    cta: "See Results",
    image: "/AIProduct/AISaving.png",
  },
];

export default function ImageGrid() {
  return (
    <section className="relative max-w-8xl overflow-hidden">
      {/* Sticky Background */}


      {/* ForegrouInd Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center ">
          <H2 className=" mb-6 text-[#254D70]">
            How CloudDIET Works For You
          </H2>
          <P className="xl:mb-28 mb-10  ">
            A secure, four-step process to guarantee cloud savings.
          </P>
        </div>

        {/* Content */}
        <div className="space-y-20 max-w-7xl xl:mx-auto  mx-10 pb-32">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 gap-x-20"
            >
              {/* Image */}
              <div
                className={`${item.reverse ? "md:order-2" : ""}`}
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    decoding="async"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${item.reverse ? "md:order-1 max-w-md" : "max-w-md"}`}>
                <H3 className="mb-3">{item.title}</H3>
                <P className="mb-4 pt-6 tracking-wide leading-snug">{item.description}</P>
                <div className="flex mt-8 flex-row space-x-2 ">
                  <a href="https://clouddiet.ai/signup" target="_blank">
                    <P className=" font-bold">{item.cta}</P>
                  </a>
                  <span><ArrowRight /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
