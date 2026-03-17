const ThirdCards = () => {
  return (
    <section className="w-full bg-white py-6 xl:py-10">
      <div className="max-w-8xl mx-auto xl:mx-18 px-4 sm:px-8 lg:px-10 xl:px-0">
        {/* Two Column Layout like Intro.tsx */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h1
              className="
                text-left
                font-['Bricolage_Grotesque']
                font-semibold
                leading-tight
                tracking-normal
                text-[#2B68C3]
                text-[26px]
                sm:text-[34px]
                md:text-[40px]
                lg:text-[44px]
                xl:text-[64px]
                mb-6
              "
            >
              Complete Cross-Border Remittance Platform
            </h1>

            <p
              className="
                text-left
                font-['Quicksand']
                font-normal
                leading-[1.7]
                tracking-normal
                text-[#141414]
                text-[13px]
                sm:text-[14px]
                lg:text-[15px]
                xl:text-[16px]
              "
            >
              REMITREE is an advanced middleware solution that facilitates seamless cross-border remittance transactions. It acts as an intermediary between core banking systems and the Swift Alliance Gateway, enabling efficient bi-directional message handling with full compliance to MT and MX standards.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col w-full relative xl:top-2">
            {[
              { label: 'Outward remittance\nautomation', img: '/Remitree/out.svg' },
              { label: 'Inward remittance\nprocessing', img: '/Remitree/in.svg' }
            ].map((stat, i, arr) => (
              <div 
                key={i} 
                className={`flex items-center gap-4 xl:gap-5 py-5 xl:py-8 ${
                  i !== arr.length - 1 ? 'border-b-[1.5px] border-[#a5bbd5]' : ''
                }`}
              >
                <div className="
                  rounded-full bg-[#2B68C3] flex-shrink-0
                  flex items-center justify-center
                  w-10 h-10
                  xl:w-14 xl:h-14
                ">
                  <img src={stat.img} alt="icon" className="w-5 h-5 xl:w-7 xl:h-7 object-contain" />
                </div>
                <span className="
                  font-['Quicksand'] font-medium
                  leading-[1.3] whitespace-pre-line text-[#141414]
                  text-[15px]
                  xl:text-[18px]
                  2xl:text-[20px]
                ">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThirdCards;
