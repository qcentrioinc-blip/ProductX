'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ResourceCard from './ResourceCard';

const FirstPageResource = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filterRef = useRef<HTMLDivElement | null>(null);

  const filters = ['All', 'Blogs', 'Case Studies', 'Newsletter', 'White Papers', 'Events'];
  const additionalFilters = ['All', 'Business', 'Cloud', 'Product', 'Research', 'Company'];

  const allResources = [
    {
      id: 1,
      image: '/AIOptimization/AIResource.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      category: ['Business', 'Cloud'],
      link: '#',
    },
    {
      id: 2,
      image: '/AIOptimization/Resource1.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      category: ['Business', 'Cloud'],
      link: '#',
    },
    {
      id: 3,
      image: '/AIOptimization/Resource2.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      category: ['Business', 'Cloud'],
      link: '#',
    },
    {
      id: 4,
      image: '/AIOptimization/Resource3.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      category: ['Product'],
      link: '#',
    },
    {
      id: 5,
      image: '/AIOptimization/Resource4.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      category: ['Research', 'Business'],
      link: '#',
    },
    {
      id: 6,
      image: '/AIOptimization/Resource5.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      category: ['Cloud', 'Product'],
      link: '#',
    },
    {
      id: 7,
      image: '/AIOptimization/Resource6.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'We are Available on the Google Cloud Marketplace',
      tags: ['FOR BUSINESS', 'CLOUD'],
      category: ['Company', 'Research'],
      link: '#',
    },
  ];

  const heroResource = allResources[0];        // 1 big card
  const smallResources = allResources.slice(1); // 6 small cards

  return (
    <div className="w-full bg-white lg:min-h-screen overflow-hidden">
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
      <div className="relative z-10 w-full pt-24 md:pt-28 lg:pt-0 lg:top-50">
        {/* Header Section */}
        <div
          className="
            relative max-w-8xl
            mx-4 sm:mx-6 lg:mx-10
            px-4 sm:px-6 lg:px-14
          "
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {/* Main Heading */}
            <h1
              className="flex-shrink-0"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 5vw, 68px)',
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
            <div className="relative w-full lg:w-[460px] lg:flex-shrink-0 mt-4 lg:mt-0">
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
            className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 mb-8 sm:mb-10 lg:mb-14"
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
            <div className="flex flex-nowrap gap-4 sm:gap-6 lg:gap-9">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    rounded-lg font-semibold transition-all
                    text-xs sm:text-sm md:text-base
                    px-4 sm:px-5 h-9 sm:h-10 md:h-12
                    min-w-[120px] sm:min-w-[140px] md:min-w-[180px] lg:min-w-[207px]
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
                className="rounded-lg bg-white transition-all flex items-center justify-center h-9 sm:h-10 md:h-12 w-9 sm:w-10 md:w-14 border"
                style={{
                  borderColor: isFilterOpen ? '#5551FF' : '#B6B6B6',
                }}
              >
                <img
                  src="/AIOptimization/SlidersHorizontal.png"
                  alt="Slider"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
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
                    className="absolute right-15 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                    style={{ width: '200px' }}
                  >
                    {additionalFilters.map((category, index) => (
                      <motion.button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 transition-colors text-sm ${selectedCategory === category
                          ? 'bg-[#5551FF]/10 text-[#5551FF] font-semibold'
                          : 'hover:bg-gray-50 text-[#1e293b]'
                          }`}
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: selectedCategory === category ? 600 : 500,
                          borderBottom:
                            index < additionalFilters.length - 1
                              ? '1px solid #f1f1f1'
                              : 'none',
                        }}
                        whileHover={{ backgroundColor: selectedCategory === category ? '#5551FF/10' : '#f9f9f9' }}
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

        {/* Resources Grid - Pass selectedCategory to ResourceCard */}
        {/* Hero big card */}
        <div
          className="
    relative max-w-8xl
    mx-4 sm:mx-6 lg:mx-10
    px-4 sm:px-6 lg:px-8
  "
        >
          <div className="grid grid-cols-1">
            <motion.div
              key={heroResource.id}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-8xl mx-1 sm:mx-3 lg:mx-6"
              style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)' }}
              whileHover={{ y: -6 }}
            >
              <div className="flex flex-col md:flex-row h-full gap-4 sm:gap-6 lg:gap-7">
                {/* Image Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 w-full md:w-[48%] lg:w-[50%] rounded-lg md:rounded-xl">
                  <img
                    src={heroResource.image}
                    alt={heroResource.title}
                    className="w-full h-[220px] sm:h-[260px] lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between py-3 sm:py-4 w-full md:w-[52%] lg:w-[50%]">
                  <div>
                    <p
                      className="mb-2 sm:mb-3 text-[#666666] text-xs sm:text-sm lg:text-xl"
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: 600,
                        lineHeight: '120%',
                      }}
                    >
                      {heroResource.author} - {heroResource.date}
                    </p>

                    <h3
                      className="group-hover:text-[#5551FF] transition-colors mb-3 sm:mb-4 text-lg sm:text-xl lg:text-4xl"
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: 600,
                        lineHeight: '120%',
                        letterSpacing: '0',
                        color: '#141414',
                      }}
                    >
                      {heroResource.title}
                    </h3>

                    <div className="flex flex-wrap mb-4 sm:mb-6 gap-2.5">
                      {heroResource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 rounded-md flex items-center justify-center text-[11px] sm:text-xs md:text-sm"
                          style={{
                            minWidth: '96px',
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

                  <motion.a
                    href={heroResource.link}
                    className="inline-flex items-center gap-2 sm:gap-3 group/link w-fit mt-1 text-sm sm:text-xl lg:text-3xl"
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
                      width="24"
                      height="24"
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
          </div>
        </div>

        {/* 6 small cards */}
        <ResourceCard selectedCategory={selectedCategory} resources={smallResources} />

      </div>
    </div>
  );
};

export default FirstPageResource;