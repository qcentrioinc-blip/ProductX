import { H2, H4, P } from "../../../styles/Typography";

const cards = [
  {
    title: "We onboard users",
    desc: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
    img: "/AIProduct/Onboard1.png",
  },
  {
    title: "We onboard users",
    desc: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
    img: "/AIProduct/Onboard2.png",
  },
  {
    title: "We onboard users",
    desc: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
    img: "/AIProduct/Onboard3.png",
  },
];

export default function OnboardingSec() {
  return (
    <section
  
>

      <div  id="benefits" className="relative max-w-8xl pt-20 lg:px-10 mx-6 lg:mx-10"
      >
        {/* Heading */}
        <H2 className=" mb-8 lg:mb-18  text-left xl:text-center font-semibold text-[#020059]">
          Lorem ipsum dolor sit amet Lorem
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
    md:pb-6 md:-mx-6 md:px-6
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
      <div className=" lg:h-80 overflow-hidden">
        <img
          src={card.img}
          alt={card.title}
          className="
            h-[300px] w-full p-6 lg:p-10 object-cover
            sm:h-[320px] lg:h-[350px]
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="relative p-6 lg:px-10 lg:py-8">
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
