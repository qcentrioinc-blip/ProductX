import { H1, P } from "../../../styles/Typography";

const CTABanner = () => {
  return (
    <section
      className="
      relative
      w-full 
      h-[60vh]
       xl:h-screen
      flex
      items-start
      bg-cover
 
      overflow-hidden
      "
      style={{
        backgroundImage: "url('/ProductDetailsThree/PagoBanner.webp')",  
      }}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 pt-10 xl:pt-20  w-full">

        {/* Heading */}
        <H1 className="text-white ">
          Consecte <br />
          Con secte adipi
        </H1>

        {/* Glass Card */}
        <div
          className="
          mt-10
          max-w-3xl
          flex
          items-center
          gap-6
          p-10
       rounded-bl-[76px]
       rounded-tr-[76px]
          border border-white/10
          bg-white/10
          backdrop-blur-md
          "
        >
          {/* Circle */}
          <div className="w-14 h-14 bg-[#D9D9D9] rounded-full flex-shrink-0" />

          {/* Text */}
          <P className="text-white/90 text-sm md:text-base leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse,
            Duis aute irure dolor in reprehenderit in voluptate velit esse
          </P>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;