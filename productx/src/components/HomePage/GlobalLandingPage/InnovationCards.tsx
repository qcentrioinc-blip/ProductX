import { H2, H4, P } from "../../../styles/Typography";

export default function InnovationCards() {
  const cards = [
    {
      img: "/Global-Landing-Page/card1.webp",
      badge: "See How We Deliver",
      title: "Outcome-Driven Results for Clear Business Wins",
      desc: "Every engagement begins with clear goals, agreed metrics, and realistic timelines, to drive performance, revenue, and competitive edge.",
    },
    {
      img: "/Global-Landing-Page/card2.webp",
      badge: "Learn About Our Approach",
      title: "People-First Collaboration Aligns Tech with Teams",
      desc: "We engage stakeholders, involve them in decisions, and craft solutions that fit workflows, ease change, and boost adoption.",
    },
    {
      img: "/Global-Landing-Page/card3.webp",
      badge: "Explore Our Services",
      title: "Trusted Reliability in Every System We Build",
      desc: "We deliver secure, stable platforms with proven practices, constant monitoring, and fast response to keep operations safe amid growth.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-8xl mx-10">

        {/* Heading */}
        <H2 className="mb-10 leading-tight">
          Innovation at Qnest Global turns <br className="hidden xl:block" />
          technology change into <br className="hidden xl:block" />
          business value
        </H2>

        {/* ================= MOBILE + TABLET (CAROUSEL) ================= */}
        <div className="xl:hidden">
          <div
            className="
              flex gap-6
              overflow-x-auto
              snap-x snap-mandatory
              pb-4
              -mx-4 px-4
              scrollbar-hide
            "
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="
                  snap-center
                  relative
                  h-[520px]
                  w-[85%]
                  max-w-[360px]
                  flex-shrink-0
                  rounded-xl
                  overflow-hidden
                  shadow-lg
                "
              >
                {/* Image */}
                <img
                  src={card.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  {/* Top */}
                  <div>
                    <span className="inline-block bg-white/20 backdrop-blur border border-white px-4 py-2 rounded-full text-sm mb-4">
                      {card.badge}
                    </span>
                    <H4>{card.title}</H4>
                  </div>

                  {/* Bottom */}
                  <P className="text-white">{card.desc}</P>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP (HOVER ANIMATION) ================= */}
        <div className="hidden xl:grid grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative h-[600px] rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={card.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative h-full p-8 text-white overflow-hidden">
                {/* Badge */}
                <span className="inline-block bg-white/30 backdrop-blur border border-white px-6 py-2 rounded-full">
                  {card.badge}
                </span>

                {/* Title (bottom → slightly top) */}
                <H4
                  className="
                    absolute left-8 right-8
                    bottom-10
                    transition-transform duration-700 ease-out
                    translate-y-0
                    group-hover:-translate-y-[400px]
                  "
                >
                  {card.title}
                </H4>

                {/* Description */}
                <P
                  className="
                    absolute left-8 right-8 bottom-8
                    text-white
                    opacity-0 translate-y-12
                    transition-all duration-600 ease-out delay-150
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  {card.desc}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Utilities */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
