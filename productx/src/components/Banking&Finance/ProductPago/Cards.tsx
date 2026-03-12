import { H4, P } from "../../../styles/Typography";

export default function Cards() {
  const cards = [
    {
      title: "Central Hub for Secure Transaction Management ",
      content:
        "The Hub routes all payments securely, monitors regulatory compliance, and ensures high availability with built-in redundancy for uninterrupted operations. ",
      shape: "/ProductDetails4/gridShape1.png",
      illustration: "/ProductDetails4/gridShape1.png",
    },
    {
      title: "User-Facing Cube for Participant Interaction ",
      content:
        "The Cube provides an intuitive interface for users to initiate, monitor, and manage transactions with real-time data and role-based access controls. ",
      shape: "/ProductDetails4/gridShape2.png",
      illustration: "/ProductDetails4/gridShape2.png",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16 xl:py-20">
      <div className="max-w-8xl xl:mx-10 px-4  sm:px-8 lg:px-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10  xl:py-10 xl:gap-14">

          {cards.map((card, i) => (
           <div
  key={i}
  className="bg-white rounded-xl border-2 border-[#666666] shadow-md
             flex flex-col md:flex-col md:items-center  xl:flex-row
             p-6 sm:p-8 md:px-0 md:py-8 py-10 xl:py-20 gap-6 sm:gap-10"
>


              {/* LEFT IMAGE */}
              <div className="relative w-full sm:w-1/3 flex justify-center items-center">
                <img
                  src={card.shape}
                  alt=""
                  className="absolute w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain opacity-40 -z-10"
                />

                <img
                  src={card.illustration}
                  alt=""
                  className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-2/3">
                <H4 >{card.title}</H4>
                <P className="text-sm sm:text-base leading-relaxed">
                  {card.content}
                </P>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
