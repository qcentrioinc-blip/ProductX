const ThirdCards = () => {
  return (
    <div
      className="
        w-full flex flex-col items-center justify-center
        bg-white
        px-5 sm:px-10
        py-4 sm:py-6 xl:py-8
        min-h-auto xl:min-h-auto
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
          Complete Cross-Border Remittance Platform
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
          REMITREE is an advanced middleware solution that facilitates seamless cross-border remittance transactions. It acts as an intermediary between core banking systems and the Swift Alliance Gateway, enabling efficient bi-directional message handling with full compliance to MT and MX standards.
        </p>

      </div>
    </div>
  );
};

export default ThirdCards;
