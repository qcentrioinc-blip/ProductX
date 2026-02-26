import { ArrowRight } from "lucide-react";

import { H2, H3, P } from "../../../styles/Typography";

const products = [
  {
    id: 1,
    title: "KYC and CDD",
    link: "/industries/banking-and-finance/products/kyc",
    description:
      "Digitizes and standardizes customer onboarding with automated risk assessment and screening.",
    image: "/ProductKYC.webp",
    imageAlt: "Woman with laptop and credit card",

    // Hard-coded layout control
    imageWidth: "w-[46%]",
    imageHeight: "h-auto",
    imagePosition: "right-[-16px] bottom-[0px]",
  },
  {
    id: 2,
    title: "Conciliare",
    description:
      "Automates complex financial reconciliation with high matching rates and straight-through processing.",
    image: "/Conciliare.webp",
    imageAlt: "Man using mobile phone for payments",
    link: "/industries/banking-and-finance/products/conciliare",
    imageWidth: "w-[60%]",
    imageHeight: "h-auto",
    imagePosition: "right-[-95px] bottom-[0px]",
  },
];

export default function TwoProducts() {
  return (
    <section className="max-w-7xl  mx-auto xl:mx-18 bg-white  py-4 xl:py-12 px-4 sm:px-8 lg:px-16 xl:px-0">
      
      <H2 className="text-[#2B68C3] leading-tight">
        Banking and finance Products
      </H2>
      <H2 className=" text-[#666666] leading-tight">Built For Scale</H2>



      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 py-8 xl:mt-10 overflow-visible">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-xl bg-white overflow-visible
            shadow-[0_10px_30px_rgba(0,0,0,0.06),0_1px_10px_rgba(0,0,0,0.20)]
            flex items-center  "
          >
            {/* TEXT */}
          <div className="relative z-20 p-10 w-full xl:w-[60%]">

  <div className="relative mb-4">
    <H3 className="text-2xl font-semibold">
      {product.title}
    </H3>

    {/* Arrow */}
    <a
  href={product.link}
  className="
    absolute 
    top-1/2 
    -translate-y-1/2
    xl:right-[-50px] 
    lg:right-[85px]
    right-[0px]   
    w-12 h-12
    flex items-center justify-center
    rounded-full bg-white
    shadow-[0_8px_20px_rgba(0,0,0,0.08)]
    transition-all duration-300
    hover:scale-110
  "
>
  <ArrowRight className="w-6 h-6 text-[#2B68C3]" />
</a>
  </div>

  <P className="leading-relaxed">
    {product.description}
  </P>

</div>

            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.imageAlt}
              className={`
                absolute hidden xl:block
                pointer-events-none select-none
                object-contain
                ${product.imageWidth}
                ${product.imageHeight}
                ${product.imagePosition}
              `}
            />
          </div>
        ))}
      </div>
    </section>
  );
}