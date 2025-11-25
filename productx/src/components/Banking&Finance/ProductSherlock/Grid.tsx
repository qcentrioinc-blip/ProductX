import { H2, H4, P } from "../../../styles/Typography";

export default function Sec_Grid() {
  const cards = [
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse, Duis aute irure dolor in reprehenderit in voluptate velit esse",
      shape: "/ProductDetails4/gridShape1.png",
      illustration: "/ProductDetails4/gridShape1.png",
    },
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse, Duis aute irure dolor in reprehenderit in voluptate velit esse",
      shape: "/ProductDetails4/gridShape2.png",
      illustration: "/ProductDetails4/gridShape2.png",
    },
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      shape: "/ProductDetails4/gridShape1.png",
      illustration: "/ProductDetails4/gridShape1.png",
    },
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      shape: "/ProductDetails4/gridShape2.png",
      illustration: "/ProductDetails4/gridShape2.png",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-start bg-white py-10 md:py-16">
      <div className="w-full px-6 xl:px-16">
        <H2 className="text-center mb-10 mt-2">
          Lorem ipsum dolor, consectetur adipis
        </H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-lg bg-[#F5DDA9] p-6 flex items-center shadow"
            >
              {/* LEFT — 1/3 width */}
              <div className="w-1/3 relative flex justify-center items-center">
                {/* Shape behind */}
                <img
                  src={card.shape}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain -z-10"
                />

                {/* Illustration */}
                <img
                  src={card.illustration}
                  alt=""
                  className="w-full h-full object-contain z-10"
                />
              </div>

              {/* RIGHT — 2/3 width */}
              <div className="w-2/3 flex flex-col gap-6 ml-10">
                <H4>{card.title}</H4>
                <P>{card.content}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
