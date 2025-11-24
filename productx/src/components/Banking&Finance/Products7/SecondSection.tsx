"use client"

export default function SecondSection() {
  return (
    <section className="w-full flex items-center justify-center bg-[#010101]">
      {/* Desktop/Laptop */}
      <div className="hidden lg:flex w-full items-center justify-center">
        <div
          style={{
            width: '1440px',
            height: '310px',
            padding: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '1280px',
              height: '150px',
              display: 'flex',
              gap: '208px',
              alignItems: 'flex-start'
            }}
          >
            <h2
              style={{
                width: '440.40625px',
                height: '148.5px',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '120%',
                color: '#F5F5F5',
                margin: 0
              }}
            >
              Sed ut perspiciatisSed ut perspiciatisSed ut perspiciatis
            </h2>
            <p
              style={{
                width: '613.076171875px',
                height: '150px',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '120%',
                letterSpacing: '50%',
                color: '#CCCCCC',
                margin: 0,
                overflow: 'hidden'
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden w-full px-6 py-12 flex flex-col items-start justify-center">
        <h2
          className="mb-6 text-[32px] font-bold leading-[110%]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            color: '#F5F5F5'
          }}
        >
          Sed ut perspiciatisSed ut perspiciatisSed ut perspiciatis
        </h2>
        <p
          className="text-[16px] leading-[150%]"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            color: '#CCCCCC'
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
      </div>
    </section>
  )
}
