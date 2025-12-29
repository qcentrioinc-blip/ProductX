"use client"

export default function SecondSection() {
  return (
    <section className="w-full flex items-center justify-center bg-[#010101]">
      {/* Desktop/Laptop */}
      <div className="hidden lg:flex w-full max-w-8xl mx-10 px-10 py-20 items-center justify-center">
        <div className="flex w-full justify-between items-start gap-10 xl:gap-[200px]">
          <h2
            className="font-bold text-[#F5F5F5] m-0 shrink-0 lg:max-w-[420px] xl:max-w-[450px]"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '40px',
              lineHeight: '120%',
              letterSpacing: '0.01em',
            }}
          >
            Sed ut perspiciatis Sed ut perspiciatis Sed ut perspiciatis
          </h2>
          <p
            className="font-normal text-[#CCCCCC] m-0 lg:max-w-[500px] xl:max-w-[615px]"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '20px',
              lineHeight: '120%',
              letterSpacing: '0.05em',
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden w-full px-6 py-12 md:px-16 md:py-20 flex flex-col items-start justify-center">
        <h2
          className="mb-8 md:mb-10 text-[32px] md:text-[40px] font-bold leading-[110%] md:leading-[120%]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            color: '#F5F5F5'
          }}
        >
          Sed ut perspiciatisSed ut perspiciatisSed ut perspiciatis
        </h2>
        <p
          className="text-[16px] md:text-[20px] leading-[150%] md:leading-[120%]"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            color: '#CCCCCC'
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
      </div>
    </section>
  )
}
