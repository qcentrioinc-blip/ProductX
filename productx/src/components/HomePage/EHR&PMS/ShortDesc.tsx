const ShortDesc = () => {
  return (
    <div
      className="
        w-full 
        flex items-center justify-center 
        overflow-hidden 
        px-4 sm:px-6 lg:px-8 
        py-8 sm:py-10 lg:py-16 
        relative
        bg-[#EDE4CA]
        min-h-[600px]
      "
    >
      {/* Content Container */}
      <div
        className="
          relative z-10 
          w-full 
          max-w-8xl mx-10 
          flex flex-col gap-8
        "
      >
        {/* Title with Gradient - responsive */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
            font-semibold
            leading-[1.1]
            bg-gradient-to-r from-[#166D48] to-[#F99526]
            bg-clip-text text-transparent
            m-0
          "
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        >
          Sed ut perspiciatis Unde Seduo ut perspiciatis
        </h1>

        {/* Description Paragraph 1 - responsive */}
        <p
          className="
            text-sm sm:text-base lg:text-lg
            leading-relaxed
            text-[#141414]
            m-0
          "
          style={{
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          <br />
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. occaecat cupidatat non.
        </p>

        {/* Description Paragraph 2 - responsive */}
        <p
          className="
            text-sm sm:text-base lg:text-lg
            leading-relaxed
            text-[#141414]
            m-0
          "
          style={{
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          <br />
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. occaecat cupidatat non.
        </p>

        {/* Contact Us Button as Link - responsive */}
        <a
          href="/industries/ehr-and-pms/contactus"
          className="
            inline-flex items-center justify-center 
            gap-2 
            w-full sm:w-auto
            max-w-[185px] min-w-[160px] h-12
            rounded-lg 
            bg-[#141414] 
            text-white 
            text-sm font-semibold
            transition-colors duration-300
            hover:bg-[#2A2A2A]
          "
          style={{
            fontFamily: "'Arial', sans-serif",
          }}
        >
          CONTACT US
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </a>
      </div>

      {/* Wave Bottom Image - right side, responsive width */}
      <div
        className="
          absolute 
          right-0 
          top-40 sm:top-44 md:top-16 lg:top-10 
          pointer-events-none
          w-2/2 sm:w-3/5 lg:w-1/2
          opacity-60
        "
      >
        <img
          src="/EHRandPMS/WaveBottom.png"
          alt=""
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
};

export default ShortDesc;
