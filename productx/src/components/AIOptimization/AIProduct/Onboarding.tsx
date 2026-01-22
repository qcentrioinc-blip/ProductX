import { H2, H4, P } from "../../../styles/Typography";

const cards = [
  {
    title: " Potential Savings",
    desc: " Instantly view potential savings categorized by implementation effort, easy, medium, and hard. Target 60–70% savings within six weeks. ",
     video: "/Video/1.mp4",
  },
  {
    title: " Cost Transparency",
    desc: "Gain deeper cost insights than native tools. Break down spending by environment, division, service, and resource configuration.",
    video: "/Video/2.1.mp4",
  },
  {
    title: " Savings Plans",
    desc: " Make informed decisions with what-if analyses for Reserved Instances and Savings Plans. Optimize commitments for maximum long-term value.",
     video: "/Video/3.mp4",
  },
];

export default function Onboarding() {
  return (
    <section
  
>

      <div  id="benefits" className="relative max-w-8xl pt-20 lg:px-10 mx-6 lg:mx-10"
      >
        {/* Heading */}
        <H2 className=" mb-8 lg:mb-18  max-w-4xl mx-auto text-left xl:text-center font-semibold text-[#254D70]">
          Cloud Optimization Features That  Deliver Results 
        </H2>

        {/* WHITE CONTAINER */}
        <div className="rounded-3xl   ">
        
          {/* Cards */}
<div
  className="
    grid grid-cols-1 gap-8
    sm:grid-cols-2
    xl:grid-cols-3

    md:flex md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory
      md:-mx-6 md:px-6
    xl:overflow-visible xl:snap-none lg:px-0 lg:mx-0
  "
>
  {cards.map((card, i) => (
    <div
      key={i}
      className="
        group relative overflow-hidden rounded-lg bg-white
        border-2 border-slate-100
        transition-all duration-500 ease-out transform-gpu
        hover:scale-[1.03]
        hover:shadow-[0_20px_60px_rgba(10,15,60,0.45)]
      
        md:min-w-[55%] md:snap-center  
        xl:min-w-0
      " 
    >
      {/* Image */}
      <div className="  overflow-hidden">
        <video
  src={card.video}
  className="
       w-full  object-contain
   
    transition-transform duration-700 ease-out
    group-hover:scale-110
  "
  autoPlay
  
  muted
 
  preload="metadata"
/>

      </div>

      {/* Content */}
      <div className="relative p-6 lg:px-10 ">
        <H4 className="mb-2 text-lg font-semibold text-slate-900">
          {card.title}
        </H4>
        <P className="leading-relaxed text-black">
          {card.desc}
        </P>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
