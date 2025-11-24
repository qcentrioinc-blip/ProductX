"use client"

import { useState } from "react"
import { Check } from "lucide-react"

type FilterKey = "Duis aute" | "Duis jhgfgb aute" | "Duis aute sdfgh" | "kihg Duis aute"

const Building = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Duis aute")
  const filters: FilterKey[] = ["Duis aute", "Duis jhgfgb aute", "Duis aute sdfgh", "kihg Duis aute"]

  return (
    <div 
      className="building-section relative flex items-center justify-center"
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '928px',
        margin: '0 auto',
        background: '#FFFFFF'
      }}
    >
      {/* DESKTOP VERSION - Content Box */}
      <div
        className="desktop-content absolute flex flex-col"
        style={{
          width: '1360px',
          height: '878px',
          top: '50px',
          background: 'transparent'
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1
            className="main-title"
            style={{
              width: '1058.76px',
              height: '58px',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              textAlign: 'center',
              margin: '0 auto 24px'
            }}
          >
            <span style={{ color: '#2B68C3' }}>Duis aute irure dolor in</span>{' '}
            <span style={{ color: '#666666' }}>reprehenderit in Duis</span>
          </h1>

          <p
            className="main-description"
            style={{
              width: '921.58px',
              height: '40px',
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '100%',
              textAlign: 'center',
              color: '#141414',
              margin: '0 auto 32px',
              overflow: 'hidden'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
        </div>

        {/* Tab Section */}
        <div
          className="tab-section"
          style={{
            width: '1360px',
            height: '632px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          {/* All Tabs */}
          <div
            className="tabs-container"
            style={{
              width: '658px',
              height: '40px',
              display: 'flex',
              gap: '19px',
              margin: '0 auto'
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-200"
                style={{
                  padding: '8px 20px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 500,
                  background: activeFilter === filter ? '#FFE5E5' : '#FFFFFF',
                  color: activeFilter === filter ? '#2A2A2A' : '#666666',
                  border: '1px solid #E0E0E0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className="tab-content"
            style={{
              width: '1360px',
              height: '560px',
              borderRadius: '8px',
              background: '#F5F5F5',
              position: 'relative'
            }}
          >
            {/* Left Image */}
            <div
              className="left-image"
              style={{
                position: 'absolute',
                width: '530px',
                height: '512px',
                top: '24px',
                left: '24px',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#D9D9D9'
              }}
            >
              <img
                src="/Building.jpg"
                alt="Building"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Right Content */}
            <div
              className="right-content"
              style={{
                position: 'absolute',
                top: '40px',
                left: '578px',
                width: '750px'
              }}
            >
              <h2
                className="content-title"
                style={{
                  width: '750px',
                  height: '38px',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '100%',
                  color: '#666666',
                  marginBottom: '16px'
                }}
              >
                Consecte adipiscing werdasec ku quorti wer
              </h2>

              <p
                className="content-description"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#333333',
                  lineHeight: '140%',
                  marginBottom: '24px',
                  maxWidth: '700px'
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              </p>

              {/* Check Items */}
              <div className="check-items" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[1, 2, 3].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <Check size={20} style={{ color: '#000000', flexShrink: 0, marginTop: '2px' }} />
                    <p
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: '14px',
                        color: '#2A2A2A',
                        lineHeight: '140%'
                      }}
                    >
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div
              className="bottom-stats"
              style={{
                position: 'absolute',
                width: '691px',
                height: '210px',
                bottom: '24px',
                left: '583.26px',
                display: 'flex',
                gap: '24px'
              }}
            >
              {/* Left Half - 80% */}
              <div
                style={{
                  width: '305px',
                  height: '210px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                <p
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#141414',
                    lineHeight: '140%'
                  }}
                >
                  Sed ac faucibus lectus. Ut sed eros vel sapien tristique
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg
                    width="60"
                    height="39"
                    viewBox="0 0 60 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M2 36.5C12.5 31 18 20 25.5 13C33 6 38 8.5 42.5 2.5M42.5 2.5L36 1M42.5 2.5L41.5 9"
                      stroke="#A80040"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: '96px',
                      fontWeight: 500,
                      color: '#666666',
                      lineHeight: '1'
                    }}
                  >
                    80%
                  </h3>
                </div>
              </div>

              {/* Right Half - 10X */}
              <div
                style={{
                  width: '284px',
                  height: '210px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <p
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#141414',
                    lineHeight: '140%'
                  }}
                >
                  Sed ac faucibus lectus. Ut sed eros vel sapien tristique
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg
                    width="60"
                    height="39"
                    viewBox="0 0 60 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M2 36.5C12.5 31 18 20 25.5 13C33 6 38 8.5 42.5 2.5M42.5 2.5L36 1M42.5 2.5L41.5 9"
                      stroke="#A80040"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: '96px',
                      fontWeight: 500,
                      color: '#666666',
                      lineHeight: '1'
                    }}
                  >
                    10X
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE/TABLET VERSION */}
      <div className="mobile-content absolute inset-0 bg-white p-6 overflow-y-auto">
        <div className="text-center mb-6">
          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '28px',
              lineHeight: '110%'
            }}
          >
            <span style={{ color: '#2B68C3' }}>Duis aute irure dolor in</span>{' '}
            <span style={{ color: '#666666' }}>reprehenderit</span>
          </h1>
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '14px',
              color: '#141414',
              lineHeight: '150%'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="overflow-x-auto scrollbar-hide mb-6">
          <div className="flex gap-3 min-w-max pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  background: activeFilter === filter ? '#FFE5E5' : '#FFFFFF',
                  color: activeFilter === filter ? '#2A2A2A' : '#666666',
                  border: '1px solid #E0E0E0'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Content Card */}
        <div className="bg-[#F5F5F5] rounded-lg p-4 space-y-4">
          <img
            src="/Building.jpg"
            alt="Building"
            className="w-full h-48 object-cover rounded-lg"
          />
          
          <h2
            className="font-bold"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '22px',
              color: '#666666',
              lineHeight: '120%'
            }}
          >
            Consecte adipiscing werdasec ku quorti wer
          </h2>
          
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '14px',
              color: '#333',
              lineHeight: '150%'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          {/* Check Items */}
          <div className="space-y-3 mt-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Check size={18} className="text-black flex-shrink-0 mt-0.5" />
                <p
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '13px',
                    color: '#2A2A2A',
                    lineHeight: '140%'
                  }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate
                </p>
              </div>
            ))}
          </div>

          {/* Stats - Mobile Version */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-2">
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '12px',
                  color: '#141414',
                  lineHeight: '140%'
                }}
              >
                Sed ac faucibus lectus
              </p>
              <div className="flex items-center gap-2">
                <svg width="30" height="20" viewBox="0 0 60 39" fill="none">
                  <path
                    d="M2 36.5C12.5 31 18 20 25.5 13C33 6 38 8.5 42.5 2.5M42.5 2.5L36 1M42.5 2.5L41.5 9"
                    stroke="#A80040"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '48px',
                    fontWeight: 500,
                    color: '#666666',
                    lineHeight: '1'
                  }}
                >
                  80%
                </h3>
              </div>
            </div>

            <div className="space-y-2">
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '12px',
                  color: '#141414',
                  lineHeight: '140%'
                }}
              >
                Sed ac faucibus lectus
              </p>
              <div className="flex items-center gap-2">
                <svg width="30" height="20" viewBox="0 0 60 39" fill="none">
                  <path
                    d="M2 36.5C12.5 31 18 20 25.5 13C33 6 38 8.5 42.5 2.5M42.5 2.5L36 1M42.5 2.5L41.5 9"
                    stroke="#A80040"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '48px',
                    fontWeight: 500,
                    color: '#666666',
                    lineHeight: '1'
                  }}
                >
                  10X
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Desktop Only - lg and above (1024px+) */
        @media (min-width: 1024px) {
          .mobile-content {
            display: none !important;
          }
          .desktop-content {
            display: flex !important;
          }
        }

        /* Mobile/Tablet - below lg (below 1024px) */
        @media (max-width: 1023px) {
          .building-section {
            height: auto !important;
            min-height: 100vh !important;
            padding: 20px 0 !important;
          }
          
          .desktop-content {
            display: none !important;
          }
          
          .mobile-content {
            display: block !important;
            position: relative !important;
          }
        }

        /* Tablet - Medium screens */
        @media (min-width: 640px) and (max-width: 1023px) {
          .mobile-content h1 {
            font-size: 36px !important;
          }
          
          .mobile-content h2 {
            font-size: 26px !important;
          }
          
          .mobile-content p {
            font-size: 15px !important;
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
  )
}

export default Building
