import { H2, H3, P } from "../../../styles/Typography";

const products = [
  {
    id: 1,
    title: "KYC and CDD ",
    description:
      "Digitizes and standardizes customer onboarding with automated risk assessment and screening.  ",
    image: "/Product2.png",
    imageAlt: "Woman with laptop and credit card",
  },
  {
    id: 2,
    title: "Conciliare ",
    description:
      "Automates complex financial reconciliation with high matching rates and straight-through processing.  ",
    image: "/Product1.png",
    imageAlt: "Man using mobile phone for payments",
  },
];

export default function TwoProducts() {
  return (
    <section className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-8 lg:px-16 xl:px-0">
      {/* Heading */}
       
        <H2 className="text-[#2B68C3] leading-tight">Banking and finance Products</H2>
        <H2 className="leading-tight"> Built For Scale </H2>
      

      {/*
        The outer wrapper has overflow-visible so images can pop above cards.
        pt-44 gives room for the images that overflow upward.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 py-8 mt-10 overflow-visible">
        {products.map((product) => (
          /*
            Each card is position:relative with overflow-visible
            so the image can escape upward.
          */
     <div
  key={product.id}
  className="relative rounded-xl bg-white overflow-visible
  shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex items-center"
>
  {/* TEXT SIDE */}
  <div className="relative z-20 p-6  w-[100%] xl:w-[55%]">
    <H3 className="leading-snug mb-3 text-2xl font-semibold">
      {product.title}
    </H3>
    <P className=" leading-relaxed">
      {product.description}
    </P>
  </div>

  {/* IMAGE */}
  <img
    src={product.image}
    alt={product.imageAlt}
    className={`
      absolute md:block hidden
      pointer-events-none
      select-none
      
      ${product.id === 1 ? "image-style-1" : "image-style-2"}
    `}
  />
</div>
        ))}
      </div>
    </section>
  );
}