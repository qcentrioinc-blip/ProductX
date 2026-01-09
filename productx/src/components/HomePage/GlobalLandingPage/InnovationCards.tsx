import { H2, H4, P } from "../../../styles/Typography";

export default function InnovationCards() {
  const cards = [
    {
      img: "/LandingPage/card1.png",
      badge: "See How We Deliver",
      title: "Outcome-Driven Thinking for Measurable, Consistent, and Long-Term Business Results",
      desc: " Every engagement starts with clear goals, agreed success measures, and realistic timelines, so technology investments directly support performance, revenue, and long-term competitive advantage for your organization. ",
    },
    {
      img: "/LandingPage/card2.jpg",
      badge: "Learn About Our Approach",
      title: "  People-First Collaboration That Aligns Technology with Real-World Teams and Processes",
      desc: "We listen to your stakeholders, involve them in key decisions, and design solutions that fit daily work, reduce resistance to change, and support smooth adoption across the organization.   ",
    },
    {
      img: "/LandingPage/card3.jpg",
      badge: "Explore Our Services",
      title: " Reliability You Can Trust in Every System We Design and Manage",
      desc: "We build secure, stable platforms using proven practices, monitor them closely, and respond quickly, so your critical operations continue running safely, even as needs and volumes grow.  ",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-8xl mx-10">

        {/* Heading */}
        <H2 className="mb-10 pb-10 leading-tight text-left">
          Innovation at Qnest Global turns <br className=" xl:block hidden"/> technology change into <br className=" xl:block hidden"/> business value   
        </H2>

        {/* ================= MOBILE / TABLET CAROUSEL ================= */}
        <div className="xl:hidden">
          <div
            className="
              flex gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              pb-4
              -mx-4 px-4
            "
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="
                  snap-center
                  flex-shrink-0
                  relative overflow-hidden rounded-lg shadow-lg
                  bg-black group
                  transition-all duration-500
                  hover:shadow-2xl
                  animate-fadeInUp
                "
                style={{
                  width: "85%",
                  maxWidth: "360px",
                  height: "520px",
                }}
              >
                {/* Background Image */}
                <img
                  src={card.img}
                  alt="Card"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between pt-5 pb-5 pl-6 pr-4">
                  <div className="bg-white/20 backdrop-blur-sm border border-white text-white px-6 py-2 rounded-full w-max text-sm font-medium">
                    {card.badge}
                  </div>

                  <div>
                    <H4 className="text-white leading-snug mb-4">
                      {card.title}
                    </H4>
                    <P className="text-white/90 leading-relaxed">
                      {card.desc}
                    </P>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden xl:grid grid-cols-3 gap-8 justify-center">
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
                maxWidth: "500px",
                height: "600px",
              }}
            >
              <img
                src={card.img}
                alt="Card"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500  "
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

              <div className="relative h-full flex flex-col justify-between pt-5 pb-5 pl-8 pr-4">
                <div className="bg-white/20 backdrop-blur-sm border border-white text-white px-10 py-2 rounded-full max-w-xs text-md font-medium">
                  {card.badge}
                  
                </div>
                <div>
                  <H4 className="text-white   -mt-44 leading-snug ">
                    {card.title}
                  </H4>
                  </div>
                <div>
                 
                  <P className="text-white/90 leading-relaxed">
                    {card.desc}
                  </P>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
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

        /* Hide scrollbar */
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
