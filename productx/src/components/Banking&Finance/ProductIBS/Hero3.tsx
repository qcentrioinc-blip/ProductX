const Hero3 = () => {
  return (
    <section className="w-full mt-10 xl:mt-0">
      <div className="w-full overflow-hidden relative">

        {/* Hero Image */}
        <img
          src="/ProductIBS/HERO.webp"
          alt="section image"
          className="w-full h-auto object-cover"
        />

        {/* Rotating SVG Icon */}
        <img
          src="/ProductIBS/icon13.svg"
          alt="rotating icon"
          className="
            absolute
            bottom-2 right-33
            md:bottom-4 md:right-65
            lg:bottom-6 lg:right-100
            xl:bottom-6 xl:right-120
            w-[30px]
            sm:w-[50px]
            md:w-[60px]
            lg:w-[80px]
            xl:w-[100px]
            animate-spin-slow
          "
        />

      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

    </section>
  );
};

export default Hero3;