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
        minHeight: 'auto', // CHANGED: from minHeight 928px to auto
        margin: '0 auto',
        background: '#FFFFFF',
        padding: '30px 20px' // CHANGED: reduced from 50px to 30px
      }}
    >
      {/* DESKTOP VERSION - Content Box */}
      <div
        className="desktop-content flex flex-col"
        style={{
          width: '100%',
          maxWidth: '1360px',
          minHeight: 'auto', // CHANGED: from 878px to auto
          background: 'transparent'
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-6"> {/* CHANGED: reduced from mb-8 to mb-6 */}
          <h1
            className="main-title"
            style={{
              maxWidth: '1058.76px',
              width: '100%',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(28px, 4vw, 48px)', // CHANGED: min from 32px to 28px
              lineHeight: '100%',
              textAlign: 'center',
              margin: '0 auto 16px' // CHANGED: reduced from 24px to 16px
            }}
          >
            <span style={{ color: '#2B68C3' }}>Duis aute irure dolor in</span>{' '}
            <span style={{ color: '#666666' }}>reprehenderit in Duis</span>
          </h1>

          <p
            className="main-description"
            style={{
              maxWidth: '921.58px',
              width: '100%',
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.5vw, 16px)', // CHANGED: min from 14px to 13px
              lineHeight: '140%',
              textAlign: 'center',
              color: '#141414',
              margin: '0 auto 24px', // CHANGED: reduced from 32px to 24px
              padding: '0 20px'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
        </div>

        {/* Tab Section */}
        <div
          className="tab-section"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px' // CHANGED: reduced from 32px to 24px
          }}
        >
          {/* All Tabs */}
          <div
            className="tabs-container"
            style={{
              maxWidth: '658px',
              width: '100%',
              display: 'flex',
              gap: '19px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
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
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
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
              width: '100%',
              minHeight: 'auto', // CHANGED: from 560px to auto
              borderRadius: '8px',
              background: '#F5F5F5',
              position: 'relative',
              padding: '20px' // CHANGED: reduced from 24px to 20px
            }}
          >
            <div className="content-wrapper" style={{
              display: 'flex',
              gap: '32px', // CHANGED: reduced from 48px to 32px
              flexWrap: 'wrap',
              alignItems: 'flex-start'
            }}>
              
              {/* Left Image */}
              <div
                className="left-image"
                style={{
                  flex: '1 1 350px', // CHANGED: min from 400px to 350px
                  minWidth: '280px', // CHANGED: from 300px to 280px
                  maxWidth: '530px',
                  height: 'auto',
                  aspectRatio: '530/512',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: '#D9D9D9'
                }}
              >
                <img
                  src="/Products/Table.png"
                  alt="Table"
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
                  flex: '1 1 350px', // CHANGED: min from 400px to 350px
                  minWidth: '280px', // CHANGED: from 300px to 280px
                  maxWidth: '750px'
                }}
              >
                <h2
                  className="content-title"
                  style={{
                    width: '100%',
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 3vw, 32px)', // CHANGED: min from 24px to 22px
                    lineHeight: '120%',
                    color: '#666666',
                    marginBottom: '12px' // CHANGED: reduced from 16px to 12px
                  }}
                >
                  Consecte adipiscing werdasec ku quorti wer
                </h2>

                <p
                  className="content-description"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 'clamp(12px, 1.3vw, 14px)', // CHANGED: min from 13px to 12px
                    fontWeight: 400,
                    color: '#333333',
                    lineHeight: '140%',
                    marginBottom: '20px' // CHANGED: reduced from 24px to 20px
                  }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                </p>

                {/* Check Items */}
                <div className="check-items" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}> {/* CHANGED: gap from 12px to 10px */}
                  {[1, 2, 3].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check size={18} style={{ color: '#000000', flexShrink: 0, marginTop: '2px' }} /> {/* CHANGED: size from 20 to 18 */}
                      <p
                        style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontSize: 'clamp(12px, 1.3vw, 14px)',
                          color: '#2A2A2A',
                          lineHeight: '140%'
                        }}
                      >
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div
                  className="bottom-stats"
                  style={{
                    width: '100%',
                    display: 'flex',
                    gap: '24px', // CHANGED: reduced from 35px to 24px
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Left Half - 80% */}
                  <div
                    style={{
                      flex: '1 1 180px', // CHANGED: min from 200px to 180px
                      minWidth: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px' // CHANGED: reduced from 16px to 12px
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: 'clamp(11px, 1.2vw, 14px)', // CHANGED: min from 12px to 11px
                        fontWeight: 400,
                        color: '#141414',
                        lineHeight: '140%'
                      }}
                    >
                      Sed ac faucibus lectus. Ut sed eros vel sapien tristique
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}> {/* CHANGED: gap from 20px to 16px */}
                      <img src="/Products/Arrow.png" alt="Arrow" className="w-14 h-7 object-fill" style={{ maxWidth: '60px' }} /> {/* CHANGED: maxWidth from 80px to 60px */}
                      <h3
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontSize: 'clamp(42px, 6vw, 86px)', // CHANGED: min from 48px to 42px
                          fontWeight: 200,
                          color: '#666666',
                          lineHeight: '1'
                        }}
                      >
                        80%
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: '2px',
                      minHeight: '80px', // CHANGED: from 100px to 80px
                      background: '#C6C6C6',
                      alignSelf: 'stretch'
                    }}
                  />

                  {/* Right Half - 10X */}
                  <div
                    style={{
                      flex: '1 1 180px', // CHANGED: min from 200px to 180px
                      minWidth: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px' // CHANGED: reduced from 16px to 12px
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: 'clamp(11px, 1.2vw, 14px)', // CHANGED: min from 12px to 11px
                        fontWeight: 400,
                        color: '#141414',
                        lineHeight: '140%'
                      }}
                    >
                      Sed ac faucibus lectus. Ut sed eros vel sapien tristique
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src="/Products/Arrow.png" alt="Arrow" className="w-14 h-7 object-fill" style={{ maxWidth: '60px' }} /> {/* CHANGED: maxWidth from 80px to 60px */}
                      <h3
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontSize: 'clamp(42px, 6vw, 86px)', // CHANGED: min from 48px to 42px
                          fontWeight: 200,
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
          .building-section {
            padding: 50px 20px !important;
          }
        }

        /* iPad Air specific (820px width) - ADDED */
        @media (min-width: 820px) and (max-width: 1023px) {
          .building-section {
            padding: 20px 20px !important;
            min-height: auto !important;
          }
          
          .tab-content {
            padding: 16px !important;
          }
          
          .tab-content .content-wrapper {
            gap: 24px !important;
          }
          
          .bottom-stats {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          .bottom-stats > div:nth-child(2) {
            width: 100% !important;
            height: 2px !important;
            min-height: 2px !important;
          }
        }

        /* iPad Mini specific (768px width) - ADDED */
        @media (min-width: 768px) and (max-width: 819px) {
          .building-section {
            padding: 16px 16px !important;
            min-height: auto !important;
          }
          
          .tab-content {
            padding: 14px !important;
          }
          
          .tab-content .content-wrapper {
            gap: 20px !important;
          }
          
          .bottom-stats {
            flex-direction: column !important;
            gap: 12px !important;
          }
          
          .bottom-stats > div:nth-child(2) {
            width: 100% !important;
            height: 2px !important;
            min-height: 2px !important;
          }
          
          .main-title {
            margin-bottom: 12px !important;
          }
          
          .main-description {
            margin-bottom: 20px !important;
          }
        }

        /* Mobile/Tablet - below lg (below 1024px) */
        @media (max-width: 1023px) {
          .building-section {
            height: auto !important;
            min-height: auto !important;
            padding: 16px 0 !important;
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
        
        /* Prevent horizontal overflow */
        .building-section * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Building
