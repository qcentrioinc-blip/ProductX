const NewsLetter = () => {
  const items = [
    "Consecte",
    "Adipiscing",
    "Adipiscing",
    "Consecte",
    "Consecte",
    "Consecte"
  ];

  return (
    // Overall Section
    <div
      className="relative w-full flex items-center justify-center bg-[#FAFAFA]"
      style={{
        maxWidth: '1440px',
        height: '517px',
        margin: '0 auto'
      }}
    >
      {/* Desktop layout */}
      <div
        className="absolute flex flex-col lg:flex hidden"
        style={{
          width: '1046px',
          height: '357px',
          top: '80px',
          left: '197px',
          gap: '90px'
        }}
      >
        <h1
          style={{
            width: '1046px',
            height: '107px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '120%',
            textAlign: 'center'
          }}
        >
          <span style={{ color: '#2B68C3' }}>Subscribe to our newsletter</span>
          <br />
          <span style={{ color: '#2B68C3' }}>to </span>
          <span style={{ color: '#141414' }}>stay in touch with the latest.</span>
        </h1>

        <div className="flex justify-between items-end" style={{ width: '1046px' }}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              style={{
                gap: '20px'
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  background: '#D9D9D9',
                  borderRadius: '50%'
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  background: '#2B68C3',
                  borderRadius: '50%'
                }}
              />
              <p
                style={{
                  width: '139.35px',
                  height: '31px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '24px',
                  color: 'black',
                  textAlign: 'center'
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '60px',
            right: '60px',
            height: '2px',
            background: '#2B68C3',
            zIndex: 0
          }}
        />
      </div>

      {/* Mobile/Tablet responsive version */}
      <div className="lg:hidden w-full h-full flex flex-col items-center justify-center p-6">
        <h1
          className="font-bold text-center mb-8"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '32px',
            color: '#2B68C3',
            lineHeight: '120%'
          }}
        >
          Subscribe to our newsletter to stay in touch with the latest.
        </h1>
        <div className="overflow-x-auto scrollbar-hide w-full">
          <div className="flex gap-12 min-w-max px-4 pb-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 bg-gray-300 rounded-full" />
                <div className="w-3 h-3 rounded-full" style={{ background: '#2B68C3' }} />
                <p
                  className="text-base font-bold text-center whitespace-nowrap"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: '#2B68C3'
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollbar Hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default NewsLetter;
