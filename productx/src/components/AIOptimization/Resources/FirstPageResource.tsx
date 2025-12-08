'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FirstPageResource = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);

  const filters = ['All', 'Blogs', 'Case Studies', 'Newsletter', 'White Papers', 'Events'];
  const additionalFilters = ['Business', 'Cloud', 'Product', 'Research', 'Company'];

  const resources = [
    {
      id: 1,
      image: '/AIOptimization/AIResource.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      link: '#',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden mt-20">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url('/AIOptimization/AIResourceBack.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="max-w-8xl mx-10 px-4 sm:px-8 lg:px-14 pt-16 lg:pt-24 pb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10 lg:mb-12">
            {/* Main Heading */}
            <h1
              className="flex-shrink-0"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 68px)',
                lineHeight: '110%',
                letterSpacing: '-0.01em',
                color: '#000B58',
              }}
            >
              The{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: '#5B52F9',
                  textDecorationThickness: '4px',
                  textUnderlineOffset: '8px',
                }}
              >
                Q
              </span>
              nest Resources
            </h1>

            {/* Search Bar */}
            <div className="relative w-full lg:w-[460px] lg:flex-shrink-0">
              <input
                type="text"
                placeholder="Search posts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 rounded-xl border-2 border-gray-200/80 bg-white text-gray-700 text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B52F9]/20 focus:border-[#5B52F9] transition-all shadow-sm"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 500,
                }}
              />
              <button className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Filters row — single row with horizontal scroll on small screens */}
          <div
            className="flex items-center gap-4 overflow-x-auto pb-2 mb-10 lg:mb-14"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Filter buttons */}
            <div className="flex flex-nowrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    rounded-lg font-semibold transition-all
                    text-xs sm:text-sm md:text-base
                    px-4 sm:px-5 h-10 sm:h-11 md:h-12
                    min-w-[130px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[210px]
                    ${activeFilter === filter
                      ? 'text-white bg-[#5551FF] border border-transparent'
                      : 'bg-white text-[#1e293b] hover:text-[#5551FF] border border-[#B6B6B6]'
                    }
                  `}
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Filter Settings Icon */}
            <div className="flex-shrink-0" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="rounded-lg bg-white transition-all flex items-center justify-center h-10 sm:h-11 md:h-12 w-10 sm:w-12 md:w-14 border"
                style={{
                  borderColor: isFilterOpen ? '#5551FF' : '#B6B6B6',
                }}
              >
                <img
                  src="/AIOptimization/SlidersHorizontal.png"
                  alt="Slider"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                    style={{ width: '200px' }}
                  >
                    {additionalFilters.map((category, index) => (
                      <motion.button
                        key={category}
                        onClick={() => {
                          setActiveFilter(category);
                          setIsFilterOpen(false);
                        }}
                        className="w-full text-left px-5 py-3 hover:bg-gray-50 transition-colors text-sm"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 500,
                          color: '#1e293b',
                          borderBottom:
                            index < additionalFilters.length - 1
                              ? '1px solid #f1f1f1'
                              : 'none',
                        }}
                        whileHover={{ backgroundColor: '#f9f9f9' }}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="max-w-8xl mx-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {resources.map((resource) => (
              <motion.div
                key={resource.id}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-8xl mx-6"
                style={{
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
                }}
                whileHover={{ y: -6 }}
              >
                <div className="flex flex-col md:flex-row h-full gap-4 sm:gap-6 lg:gap-7">
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 w-full md:w-[48%] lg:w-[50%] rounded-lg md:rounded-xl">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-[220px] sm:h-[260px] md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between py-3 sm:py-4 w-full md:w-[52%] lg:w-[50%]">
                    <div>
                      {/* Meta Info */}
                      <p
                        className="mb-3 sm:mb-4 text-[#666666] text-sm sm:text-lg lg:text-xl"
                        style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                        }}
                      >
                        {resource.author} - {resource.date}
                      </p>

                      {/* Title */}
                      <h3
                        className="group-hover:text-[#5551FF] transition-colors mb-4 text-lg sm:text-xl lg:text-4xl"
                        style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          letterSpacing: '0',
                          color: '#141414',
                        }}
                      >
                        {resource.title}
                      </h3>

                      {/* Tags */}
                      <div className="flex flex-wrap mb-6 sm:mb-8 gap-2.5">
                        {resource.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 rounded-md flex items-center justify-center text-xs sm:text-sm"
                            style={{
                              minWidth: '110px',
                              backgroundColor: index === 0 ? '#D7FFEE' : '#D7F0FF',
                              fontFamily: "'Quicksand', sans-serif",
                              fontWeight: 600,
                              lineHeight: '100%',
                              color: '#666666',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read Link */}
                    <motion.a
                      href={resource.link}
                      className="inline-flex items-center gap-3 group/link w-fit mt-1 text-base sm:text-xl lg:text-3xl"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 600,
                        lineHeight: '120%',
                        letterSpacing: '0',
                        color: '#5551FF',
                      }}
                      whileHover={{ x: 6 }}
                    >
                      REAL FULL ARTICLE
                      <motion.svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover/link:translate-x-2 transition-transform"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </motion.svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPageResource;
