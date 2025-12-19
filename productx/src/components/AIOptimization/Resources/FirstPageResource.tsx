'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import ResourceCard from './ResourceCard';

const FirstPageResource = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      category: ['Business', 'Cloud', 'Events'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 2,
      image: '/AIOptimization/Resource1.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'AI in Finance: A Comprehensive Guide',
      tags: ['WHITE PAPERS', 'FINANCE'],
      category: ['White Papers', 'Finance'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 3,
      image: '/AIOptimization/Resource2.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'Customer Success Story: Retail Giant',
      tags: ['CASE STUDIES', 'RETAIL'],
      category: ['Case Studies', 'Business'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 4,
      image: '/AIOptimization/Resource3.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'Product Update: version 2.0 release',
      tags: ['NEWSLETTER', 'PRODUCT'],
      category: ['Newsletter', 'Product'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 5,
      image: '/AIOptimization/Resource4.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'The Rise of Generative AI',
      tags: ['BLOGS', 'AI'],
      category: ['Blogs', 'Research'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 6,
      image: '/AIOptimization/Resource5.png',
      author: 'Qnest Team',
      date: '13 Nov 2025',
      title: 'Cloud Security Best Practices',
      tags: ['WHITE PAPERS', 'CLOUD'],
      category: ['White Papers', 'Cloud'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 8,
      image: '/AIOptimization/Resource4.png',
      author: 'Qnest Team',
      date: '10 Nov 2025',
      title: 'Top AI Trends to Watch in 2026',
      tags: ['BLOGS', 'AI'],
      category: ['Blogs', 'Research'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 9,
      image: '/AIOptimization/Resource2.png',
      author: 'Qnest Team',
      date: '08 Nov 2025',
      title: 'Case Study: Optimizing Cloud Costs by 30%',
      tags: ['CASE STUDIES', 'CLOUD'],
      category: ['Case Studies', 'Cloud'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 10,
      image: '/AIOptimization/Resource5.png',
      author: 'Qnest Team',
      date: '05 Nov 2025',
      title: 'Monthly Newsletter: November Issue',
      tags: ['NEWSLETTER', 'UPDATE'],
      category: ['Newsletter', 'Company'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 11,
      image: '/AIOptimization/Resource1.png',
      author: 'Qnest Team',
      date: '01 Nov 2025',
      title: 'White Paper: The Future of Quantum Computing',
      tags: ['WHITE PAPERS', 'RESEARCH'],
      category: ['White Papers', 'Research'],
      link: '/industries/ai-optimization/resource-detail',
    },
    {
      id: 12,
      image: '/AIOptimization/Resource3.png',
      author: 'Qnest Team',
      date: '28 Oct 2025',
      title: 'Global Tech Summit 2025 Highlights',
      tags: ['EVENTS', 'TECH'],
      category: ['Events', 'Company'],
      link: '/industries/ai-optimization/resource-detail',
    },
  ];

  // Combine all filters for unified selection
  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
  };

  // Filter Logic
  const filteredResources = allResources.filter((resource) => {
    const matchesSearch =
      searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeFilter === 'All' ||
      resource.category.includes(activeFilter) ||
      resource.tags.includes(activeFilter);

    return matchesSearch && matchesCategory;
  });

  const heroResource = filteredResources.length > 0 ? filteredResources[0] : null;
  const smallResources = filteredResources.slice(1);

  return (
    <div className="w-full bg-white 2xl:min-h-screen">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url('/AIOptimization/AIResourceBack.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
        }}
      />
      <style>{`
        @media (min-width: 1024px) and (max-width: 1535px) {
          /* Hide Desktop Navbar container */
          nav.hidden.lg\\:flex.absolute.z-\\[60\\] {
            display: none !important;
          }
          /* Hide Desktop Links in Top Bar */
          div.hidden.lg\\:flex.items-center.gap-6 {
            display: none !important;
          }
          /* Show Mobile Menu Button */
          button.lg\\:hidden.flex.flex-col.justify-center {
            display: flex !important;
          }
           /* Ensure Mobile Sidebar is capable of showing */
          div.lg\\:hidden.fixed.top-0.right-0.h-full.z-\\[200\\] {
            display: flex !important;
          }
          
          /* Force H1 title to be smaller on iPad Pro to match Air/Mini */
          h1[style] {
             font-size: 42px !important; 
             line-height: 1.2 !important;
          }
          
          /* Adjust spacing if needed */
          .pt-24.md\\:pt-28 {
            padding-top: 7rem !important; /* Ensure consistent top padding */
          }
        }
      `}</style>

      {/* Content Container */}
      <div className="relative z-10 w-full pt-24 md:pt-28 2xl:pt-0 2xl:top-50">
        {/* Header Section */}
        <div
          className="
            relative max-w-8xl
            mx-4 sm:mx-6 2xl:mx-10
            px-4 sm:px-6 2xl:px-14
          "
        >
          <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between gap-6 sm:gap-8 mb-4">
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
            <div className="relative w-full 2xl:w-[460px] 2xl:flex-shrink-0 mt-4 2xl:mt-0">
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
        </div>

        {/* Sticky Filters row */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md pt-4 pb-2 mb-8 sm:mb-10 2xl:mb-14 shadow-sm transition-all duration-300">
          <div className="max-w-8xl mx-auto px-8 sm:px-12 xl:px-24">
            <div
              className="flex items-center gap-3 sm:gap-4 overflow-x-auto"
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
              <div className="flex flex-nowrap gap-4 sm:gap-6 lg:gap-9 py-2">
                {filters.map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`
                      rounded-lg font-semibold transition-all
                      text-xs sm:text-sm md:text-base
                      px-4 sm:px-5 h-9 sm:h-10 md:h-12
                      min-w-[120px] sm:min-w-[140px] md:min-w-[180px] 2xl:min-w-[207px]
                      ${activeFilter === filter
                        ? 'text-white bg-[#5551FF] border border-transparent shadow-md'
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
              <div className="flex-shrink-0 ml-auto pl-2" ref={filterRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="rounded-lg bg-white transition-all flex items-center justify-center h-9 sm:h-10 md:h-12 w-9 sm:w-10 md:w-14 border hover:bg-gray-50"
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
                      className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                      style={{ width: '200px' }}
                    >
                      {additionalFilters.map((category, index) => (
                        <motion.button
                          key={category}
                          onClick={() => {
                            handleFilterChange(category);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 transition-colors text-sm ${activeFilter === category
                            ? 'bg-[#5551FF]/10 text-[#5551FF] font-semibold'
                            : 'hover:bg-gray-50 text-[#1e293b]'
                            }`}
                          style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: activeFilter === category ? 600 : 500,
                            borderBottom:
                              index < additionalFilters.length - 1
                                ? '1px solid #f1f1f1'
                                : 'none',
                          }}
                          whileHover={{ backgroundColor: activeFilter === category ? '#5551FF/10' : '#f9f9f9' }}
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
        </div>


        {/* Resources Grid - Pass selectedCategory to ResourceCard */}
        {/* Hero big card */}
        <div
          className="
        relative max-w-8xl
        mx-4 sm:mx-6 2xl:mx-10
        px-4 sm:px-6 2xl:px-8
        "
        >
          {heroResource ? (
            <div className="grid grid-cols-1">
              <motion.div
                key={heroResource.id}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-8xl mx-1 sm:mx-3 2xl:mx-6"
                style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)' }}
                whileHover={{ y: -6 }}
              >
                <div className="flex flex-col md:flex-row h-full gap-4 sm:gap-6 lg:gap-7">
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 w-full md:w-[48%] 2xl:w-[50%] rounded-lg md:rounded-xl">
                    <img
                      src={heroResource.image}
                      alt={heroResource.title}
                      className="w-full h-[220px] sm:h-[260px] xl:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between py-3 sm:py-4 w-full md:w-[52%] 2xl:w-[50%]">
                    <div>
                      <p
                        className="mb-2 sm:mb-3 text-[#666666] text-xs sm:text-sm 2xl:text-xl"
                        style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                        }}
                      >
                        {heroResource.author} - {heroResource.date}
                      </p>

                      <h3
                        className="group-hover:text-[#5551FF] transition-colors mb-3 sm:mb-4 text-lg sm:text-xl 2xl:text-4xl"
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

                    <a
                      href={heroResource.link}
                      className="inline-flex items-center gap-2 sm:gap-3 group/link w-fit mt-1 text-sm sm:text-xl 2xl:text-3xl"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 600,
                        lineHeight: '120%',
                        letterSpacing: '0',
                        color: '#5551FF',
                      }}
                    >
                      <motion.span whileHover={{ x: 6 }} className="inline-flex items-center gap-2 sm:gap-3">
                        REAL FULL ARTICLE
                        <svg
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
                        </svg>
                      </motion.span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500">No resources found matching your criteria.</div>
          )}
        </div>

        {/* 6 small cards */}
        {
          smallResources.length > 0 && (
            <ResourceCard selectedCategory={activeFilter} resources={smallResources} />
          )
        }

      </div>
    </div>
  );
};

export default FirstPageResource;