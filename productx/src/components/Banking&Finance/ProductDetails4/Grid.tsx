import { H2, H3, P } from "../../../styles/Typography";

export default function Sec_Grid() {
  const cards = [
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse, Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    },
    {
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-start bg-white py-3 md:py-6">
      <div className="w-full max-w-[1280px] mx-auto px-2 xs:px-1">
        <H2 className="text-center mb-10 mt-2">
          Lorem ipsum dolor, consectetur adipis
        </H2>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-lg bg-pink-100 p-3 xs:p-2 sm:p-5 md:p-6 flex flex-col justify-between shadow"
            >
              <H3 className="text-base xs:text-sm sm:text-lg font-semibold mb-2 sm:mb-3 mt-13 ml-5">
                {card.title}
              </H3>
              <P className="text-xs xs:text-[11px] sm:text-base mb-15 ml-5">
                {card.content}
              </P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
