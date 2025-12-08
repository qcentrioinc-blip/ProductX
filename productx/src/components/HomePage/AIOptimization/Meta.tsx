const Meta = () => {
  return (
    <section className="relative w-full min-h-[auto] sm:min-h-[auto] lg:min-h-screen bg-[#3A3028] text-white overflow-hidden px-4 sm:px-6 pt-14 sm:pt-20 pb-10 sm:pb-16 lg:py-24">
      <div className="max-w-8xl mx-0 sm:mx-4 lg:mx-10 px-1 sm:px-4 lg:px-6">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 space-y-6">
          
          {/* Title (Desktop untouched) */}
          <h1
            className="text-center text-[36px] sm:text-[48px] lg:text-[64px]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            <span style={{ color: "#0AC276" }}>AI For</span>{" "}
            <span style={{ color: "#F5F5F5" }}>Cloud</span>
          </h1>

          {/* Description */}
          <p
            className="max-w-3xl mx-auto text-center sm:text-left px-0 sm:px-2 text-[16px] sm:text-[20px] lg:text-[24px]"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 500,
              lineHeight: "120%",
              color: "#CCCCCC",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
            sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,
          </p>
        </div>

        {/* ================= INFINITY LOOP ================= */}
        <div className="relative w-full max-w-8xl mx-auto mt-10 sm:mt-14 lg:mt-20">

          <div className="relative w-full aspect-[16/12] sm:aspect-[16/9] flex items-center justify-center lg:bottom-10 lg:right-20">

            {/* Infinity Image */}
            <img
              src="/AIOptimization/Meta.png"
              alt="Infinity Loop"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* ========== RESPONSIVE LABELS ========== */}
            {/* These positions scale only on smaller screens */}

            {/* TOP LEFT */}
            <div
              className="absolute text-[12px] sm:text-[16px] lg:text-[22px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                color: "#CCCCCC",
                top: "18%",
                left: "7%",
              }}
            >
              Lorem ipsum
            </div>

            {/* TOP RIGHT */}
            <div
              className="absolute text-[12px] sm:text-[16px] lg:text-[22px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                color: "#CCCCCC",
                top: "18%",
                right: "7%",
              }}
            >
              Lorem ipsum
            </div>

            {/* MIDDLE LEFT */}
            <div
              className="absolute text-[12px] sm:text-[16px] lg:text-[22px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                color: "#CCCCCC",
                top: "50%",
                left: "4%",
                transform: "translateY(-50%)",
              }}
            >
              Lorem ipsum
            </div>

            {/* MIDDLE RIGHT */}
            <div
              className="absolute text-[12px] sm:text-[16px] lg:text-[22px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                color: "#CCCCCC",
                top: "50%",
                right: "2%",
                transform: "translateY(-50%)",
              }}
            >
              Lorem ipsum
            </div>

            {/* BOTTOM LEFT */}
            <div
              className="absolute text-[12px] sm:text-[16px] lg:text-[22px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                color: "#CCCCCC",
                bottom: "18%",
                left: "7%",
              }}
            >
              Lorem ipsum
            </div>

            {/* BOTTOM RIGHT */}
            <div
              className="absolute text-[12px] sm:text-[16px] lg:text-[22px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                color: "#CCCCCC",
                bottom: "18%",
                right: "7%",
              }}
            >
              Lorem ipsum
            </div>

            {/* CENTER LOGO */}
            <div
              className="absolute text-[12px] sm:text-[14px] lg:text-[16px] font-semibold bg-[#3A3028] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2.5 rounded-md"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#FFFFFF",
                top: "45%",
                left: "51%",
                transform: "translate(-50%, -50%)",
              }}
            >
              LOGO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meta;
