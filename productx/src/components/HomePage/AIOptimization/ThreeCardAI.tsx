import {  H4, P } from "../../../styles/Typography";
 
const features = [
    {
        title: "Deep Cloud Expertise",
        description:
            "Built by cloud engineers with decades of experience across AWS, Azure, and GCP. We understand Azure’s complexity so you don’t have to.",
            image:"/AIOptimization/Star.svg",
    },
    {
        title: "Advanced Savings Insights",
        description:
            "Move beyond basic FinOps. Our AI identifies hidden inefficiencies, from SKU optimizations to unused capacity and licensing waste.",
             image:"/AIOptimization/Wallet.svg",
    },
    {
        title: "Performance-Based Pricing",
        description:
            "You only pay a percentage of the savings we deliver. Most customers see ROI within the first month of use.",
             image:"/AIOptimization/price.svg",
    },
];
 
const ThreeCardAI = () => {
    return (
        <section className="w-full bg-[#F5F5F5] dark:bg-black py-16 px-[40px] md:px-[60px] xl:px-[160px]">
            {/* Section Title */}
           <div className="">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.map((item, index) => (
      <div
        key={index}
        className="
          bg-white
          dark:bg-slate-950
          dark:border-gray-500
          min-h-full py-4
          
          
          rounded-tl-[2rem]
          shadow-lg
          flex flex-col gap-6
          transition-all duration-300
        "
      >
        {/* Circle Icon */}
        <div className="flex justify-center items-center pt-10">
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12"
          />
        </div>

        {/* Title */}
        <H4
          className="text-white bg-[#00AA72] py-6 px-6 dark:text-[#00AA72]"
          style={{
            
            
          }}
        >
          {item.title}
        </H4>

        {/* Description */}
        <P
          className="flex-1 px-4"
          style={{
         
          }}
        >
          {item.description}
        </P>
      </div>
    ))}
  </div>
</div>
        </section>
    );
};
 
export default ThreeCardAI;