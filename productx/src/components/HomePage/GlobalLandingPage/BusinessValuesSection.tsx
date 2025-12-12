import { H2, H3, P } from "../../../styles/Typography";

export default function BusinessValuesSection() {
  const items = [
    {
      img: "/LandingPage/shape1.jpg",
      title: "Innovation First",
      desc: "We embrace challenges as opportunities to create smarter and more efficient systems.",
    },
    {
      img: "/LandingPage/shape2.jpg",
      title: "Customer at Heart",
      desc: "Technology should be accessible, intelligent, and purposeful. We strive to empower organizations.",
    },
    {
      img: "/LandingPage/shape3.jpg",
      title: "Trust & Transparency",
      desc: "We design with tomorrow in mind, ensuring adaptability and long-term sustainability.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-8xl mx-10 text-left">

        {/* Section Heading */}
        <H2 className="mb-16 leading-tight">
          Safe. Flexible. Built for business.
        </H2>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-left text-left 
                animate-fadeInUp
                opacity-0
                animation-delay
                hover:scale-[1.02] transition-all duration-300
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon / Illustration */}
              <img
                src={item.img}
                alt={item.title}
                className="w-42 h-42 object-contain mb-6 transition-all duration-300 group-hover:scale-110"
              />

              {/* Title */}
              <H3 className="mb-3">
                {item.title}
              </H3>

              {/* Description */}
              <P className=" max-w-sm leading-relaxed">
                {item.desc}
              </P>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in Up Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
}