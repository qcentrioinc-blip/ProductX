import {   H4, P } from "../../../styles/Typography";
 
export default function Cards() {
  const cards = [
   
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse, Duis aute irure dolor in reprehenderit in voluptate velit esse",
      shape: "/ProductDetails4/gridShape1.png",
      illustration: "/ProductDetails4/gridShape1.png",
    },
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse, Duis aute irure dolor in reprehenderit in voluptate velit esse",
      shape: "/ProductDetails4/gridShape2.png",
      illustration: "/ProductDetails4/gridShape2.png",
    },
  ];
 
  return (
    <section className="w-full flex flex-col items-center justify-start bg-white py-10 md:py-16">
      <div className="w-full py-20 px-6 xl:px-16">
     
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-lg py-14 px-10  bg-[#F5DDA9] flex items-center shadow"
            >
              {/* LEFT — 1/3 width */}
              <div className="w-1/3 relative flex justify-between items-center">
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
              <div className="w-2/3 flex flex-col gap-6 mx-10">
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