const ThirdCards = () => {
  return (
    <div
      className="
        w-full flex flex-col items-center justify-center
        bg-white
        px-5 sm:px-10
        py-12 sm:py-16 xl:py-[60px]
        min-h-[240px] xl:min-h-[320px]
      "
    >
      <div className="flex flex-col items-center w-full max-w-[900px] gap-5 xl:gap-6">

        {/* ── Title ── */}
        <h1
          className="
            text-center
            font-['Bricolage_Grotesque']
            font-semibold
            leading-none
            tracking-normal
            text-[#2B68C3]
            text-[26px]
            sm:text-[34px]
            md:text-[40px]
            lg:text-[44px]
            xl:text-[64px]
          "
        >
          Lorem ipsum dolor sit amet
        </h1>

        {/* ── Description ── */}
        <p
          className="
            text-center
            font-['Quicksand']
            font-normal
            leading-[1.7]
            tracking-normal
            text-[#333333]
            text-[13px]
            sm:text-[14px]
            lg:text-[15px]
            xl:text-[16px]
            max-w-[600px] xl:max-w-[700px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip .magna aliqua. Ut enim
        </p>

      </div>
    </div>
  );
};

export default ThirdCards;
