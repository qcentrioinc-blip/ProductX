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
      className="short-nav-container flex items-center justify-center"
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '80px',
        margin: '0 auto',
        background: '#FFFFFF'
      }}
    >
      {/* DESKTOP VERSION - Topics Container */}
      <div
        className="desktop-nav flex items-center"
        style={{
          width: '1280px',
          height: '52px',
          justifyContent: 'space-between'
        }}
      >
        {/* Topics Box */}
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
              className="nav-link"
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

      {/* MOBILE/TABLET VERSION - Horizontal Scroll */}
      <div className="mobile-nav flex items-center justify-start w-full h-full px-4 sm:px-6">
        <div className="overflow-x-auto scrollbar-hide w-full">
          <div className="flex gap-4 sm:gap-6 min-w-max py-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="whitespace-nowrap transition-colors duration-300"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  color: '#2A2A2A',
                  textDecoration: 'none',
                  fontWeight: 400
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#2B68C3'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#2A2A2A'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Desktop Only - lg and above (1024px+) */
        @media (min-width: 1024px) {
          .mobile-nav {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
        }

        /* Mobile/Tablet - below lg (below 1024px) */
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
          
          .short-nav-container {
            height: 70px !important;
          }
        }

        /* Tablet - Medium screens */
        @media (min-width: 640px) and (max-width: 1023px) {
          .mobile-nav a {
            font-size: 15px !important;
          }
        }

        /* Mobile - Small screens */
        @media (max-width: 639px) {
          .mobile-nav a {
            font-size: 13px !important;
          }
          
          .short-nav-container {
            height: 60px !important;
          }
        }

        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ShortNav;
