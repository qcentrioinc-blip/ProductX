import { H3, P } from "../../../styles/Typography";

const features = [
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
];

const Cards = () => {
  return (
    <section className="relative w-full bg-[#F5DDA9] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Shape Image (Hidden on mobile) */}
      <div className="hidden md:flex absolute inset-0 justify-center items-center mt-20 z-10">
        <img
          src="/ProductPage9/img2.png"
          alt="decorative shape"
          className="w-[90%] h-full object-cover top-1/2 left-1/2 pointer-events-none"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target) {
              target.onerror = null;
              target.src = "https://placehold.co/1000x800/F5DDA9/999999?text=Shape+Fallback";
            }
          }}
        />
      </div>

      {/* Content (Cards) */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white p-6 sm:p-7 md:p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 relative
                w-full
                max-w-[550px] sm:max-w-[500px] md:max-w-[530px] lg:max-w-[560px] xl:max-w-[580px]
                h-[360px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[440px]
                flex flex-col justify-between
              "
            >
              {/* Text Section */}
              <div>
                <H3 className="text-gray-900 mb-3 text-base sm:text-lg md:text-xl">
                  {item.title}
                </H3>
                <P className="text-gray-700 mb-5 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </P>
              </div>

              {/* Placeholder Rectangle */}
              <div className="w-full h-[55%] bg-[#E9E9E9] rounded-sm mt-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
