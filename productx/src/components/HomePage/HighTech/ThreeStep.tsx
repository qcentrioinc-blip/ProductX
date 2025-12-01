const ThreeStep = () => {
  const steps = [
    {
      number: "1",
      title: "Duis aute irure dolor in reprehenderit",
      description:
        "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.",
      bgColor: "bg-black",
    },
    {
      number: "2",
      title: "Duis aute irure dolor in reprehenderit",
      description:
        "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.",
      bgColor: "bg-black",
    },
    {
      number: "3",
      title: "Duis aute irure dolor in reprehenderit",
      description:
        "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.",
      bgColor: "bg-black",
    },
  ];

  return (
    <div className="relative w-full bg-black">
      {/* ================= MOBILE + TABLET (NEW) ================= */}
      {/* Header */}
      <div className="w-full bg-black pt-16 pb-6 px-4 sm:px-6 lg:px-0 block lg:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(26px, 5vw, 32px)",
              color: "#F5F5F5",
            }}
          >
            Sed ut perspiciatis
          </h2>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "clamp(22px, 4.5vw, 30px)",
              lineHeight: "110%",
              color: "#F99526",
              whiteSpace: "normal",
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>
        </div>
      </div>

      {/* Steps - mobile / tablet, stacked, non-sticky */}
      <div className="block lg:hidden">
        {steps.map((step, index) => (
          <section
            key={index}
            className="w-full bg-black py-12 sm:py-16 px-4 sm:px-6 border-b border-white/5 last:border-b-0"
          >
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              {/* Number */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #a855f7 0%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "clamp(80px, 20vw, 160px)",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h4
                className="text-white"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 4.2vw, 22px)",
                  lineHeight: "120%",
                }}
              >
                {step.title}
              </h4>

              {/* Description */}
              <p
                className="text-white"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "clamp(15px, 3.8vw, 18px)",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                {step.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* ================= DESKTOP LAYOUT (ORIGINAL, UNCHANGED) ================= */}
      {/* HEADER */}
      <div className="w-full bg-black px-4 sm:px-6 lg:px-6 hidden lg:block">
        <div className="max-w-8xl mx-10 text-center">
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: "42px",
              color: "#F5F5F5",
            }}
          >
            Sed ut perspiciatis
          </h2>

          <h3
            className=""
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "40px",
              lineHeight: "100%",
              color: "#F99526",
              whiteSpace: "nowrap",
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>
        </div>
      </div>

      {/* STICKY SECTIONS - DESKTOP ONLY */}
      <div className="hidden lg:block">
        {steps.map((step, index) => (
          <div
            key={index}
            className={` ${step.bgColor} sticky top-0 flex items-center h-screen`}
            style={{ zIndex: index + 1 }}
          >
            <div className="max-w-8xl mx-10 w-full px-6">
              {/* ---------- ORIGINAL RESPONSIVE LAYOUT (DESKTOP) ---------- */}
              <div
                className="
                  flex 
                  flex-col 
                  md:flex-col 
                  lg:flex-row 
                  items-center 
                  justify-between 
                  gap-10 
                  relative
                "
              >
                {/* LEFT TITLE */}
                <div className="w-full lg:w-[280px] text-left lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
                  <h4
                    className="text-white"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "110%",
                    }}
                  >
                    {step.title}
                  </h4>
                </div>

                {/* CENTER NUMBER */}
                <div className="flex justify-center w-full">
                  <div
                    className="font-bold"
                    style={{
                      background:
                        "linear-gradient(180deg, #a855f7 0%, #d97706 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "260px",
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* RIGHT DESCRIPTION */}
                <div className="w-full lg:w-[420px] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "22px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeStep;
