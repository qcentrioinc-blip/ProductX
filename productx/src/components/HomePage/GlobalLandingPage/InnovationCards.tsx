import { H2, H4, P } from "../../../styles/Typography";

export default function InnovationCards() {
  const cards = [
    {
      img: "/LandingPage/card1.png",
      badge: "AI Solutions",
      title: "Transform your vision into an outstanding experience.",
      desc: "We help organizations adopt intelligent and accessible AI systems.",
    },
    {
      img: "/LandingPage/card2.jpg",
      badge: "Digital Strategy",
      title: "Empower your business with future-ready technology.",
      desc: "Our team enables seamless digital transformation to stay competitive.",
    },
    {
      img: "/LandingPage/card3.jpg",
      badge: "Innovation Lab",
      title: "Build the products that shape tomorrow.",
      desc: "We collaborate with companies to create scalable, impactful solutions.",
    },
  ];

  return (
    <section className="w-full h-full py-16 px-6 bg-white">
      <div className="max-w-8xl mx-10 text-center">

        {/* Heading */}
        <H2 className=" mb-10 leading-tight text-left">
          Innovation is the ability to see <br /> change as an opportunity
        </H2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className="
                relative overflow-hidden rounded-lg shadow-lg
                bg-black group 
                transition-all duration-500
                 hover:shadow-2xl
                animate-fadeInUp
              "
              style={{
                width: "100%",
                maxWidth: "405px",
                height: "536.558px",
              }}
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt="Card"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

              {/* Card Content */}
              <div className="relative h-full flex flex-col justify-between pt-5 pb-5 pl-8 pr-4">

                {/* Badge */}
                <div className="bg-white/20 backdrop-blur-sm border border-white text-white px-10 py-2 rounded-full w-max text-md font-medium">
                  {card.badge}
                </div>

                {/* Title & Description */}
                <div>
                  <H4 className="text-white text-left leading-snug mb-4">
                    {card.title}
                  </H4>

                  <P className="text-white/90 text-left leading-relaxed">
                    {card.desc}
                  </P>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
