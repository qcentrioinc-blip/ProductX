const ShortNav = () => {
  const navItems = [
    "Overview",
    "Benefits",
    "Use Cases",
    "Our Process",
    "Blogs"
  ];

  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '80px',
        margin: '0 auto',
        background: '#FFFFFF'
      }}
    >
      {/* DESKTOP VERSION - lg and above (1024px+) */}
      <div
        className="hidden lg:flex items-center"
        style={{
          width: '1280px',
          height: '52px',
          justifyContent: 'space-between'
        }}
      >
        <div
          className="flex items-center"
          style={{
            width: '499px',
            height: '52px',
            gap: '36px'
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                height: '20px',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#2A2A2A',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#2B68C3'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#2A2A2A'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE/TABLET VERSION - below lg (below 1024px) */}
      <div className="lg:hidden flex items-center justify-start w-full h-full px-4 sm:px-6 overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide w-full">
          <div className="flex gap-6 sm:gap-8 min-w-max py-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="whitespace-nowrap transition-colors duration-300 hover:text-[#2B68C3]"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: '#2A2A2A',
                  textDecoration: 'none'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Tablet - Medium screens */
        @media (min-width: 640px) and (max-width: 1023px) {
          .lg\\:hidden a {
            font-size: 15px !important;
          }
        }

        /* Mobile - Small screens */
        @media (max-width: 639px) {
          .lg\\:hidden a {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ShortNav;
