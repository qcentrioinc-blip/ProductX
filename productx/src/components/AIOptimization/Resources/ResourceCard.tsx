'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Resource {
  id: number;
  image: string;
  author: string;
  date: string;
  title: string;
  tags: string[];
  category: string[];
  link: string;
}

interface ResourceCardProps {
  selectedCategory?: string;
  resources?: Resource[];
}

const ResourceCard = ({ selectedCategory = 'All', resources = [] }: ResourceCardProps) => {
  // Filter resources based on selectedCategory prop
  const filteredResources =
    selectedCategory === 'All'
      ? resources
      : resources.filter((resource) => resource.category.includes(selectedCategory));

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-8xl mx-4 sm:mx-6 lg:mx-12">
        <AnimatePresence mode="wait">
          {filteredResources.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-8 xl:gap-10"
            >
              {filteredResources.slice(0, 6).map((resource) => (
                <motion.div
                  key={resource.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="
                    group bg-white overflow-hidden
                    hover:shadow-lg transition-all duration-300
                    w-full max-w-[420px] mx-auto
                  "
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden mb-5 sm:mb-6"
                    style={{
                      width: '100%',
                      borderRadius: '12px',
                    }}
                  >
                    <div className="h-[180px] sm:h-[220px] lg:h-[240px]">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Meta Info */}
                    <p
                      className="mb-3 sm:mb-4 text-[#666666]"
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '120%',
                      }}
                    >
                      {resource.author} - {resource.date}
                    </p>

                    {/* Title */}
                    <h3
                      className="
                        group-hover:text-[#5551FF] transition-colors mb-4
                        text-[18px] sm:text-[20px] lg:text-[24px]"
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: 600,
                        lineHeight: '120%',
                        letterSpacing: '0',
                        color: '#141414',
                        marginBottom: '20px',
                      }}
                    >
                      {resource.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap mb-6 sm:mb-8 gap-2.5">
                      {resource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 rounded-md flex items-center justify-center"
                          style={{
                            minWidth: '110px',
                            backgroundColor: index === 0 ? '#D7FFEE' : '#D7F0FF',
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 600,
                            fontSize: '11px',
                            lineHeight: '100%',
                            color: '#666666',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read Link */}
                    <motion.a
                      href={resource.link}
                      className="inline-flex items-center gap-3 group/link w-fit mt-1"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '120%',
                        letterSpacing: '0',
                        color: '#5551FF',
                      }}
                      whileHover={{ x: 6 }}
                    >
                      REAL FULL ARTICLE
                      <motion.svg
                        width="32"
                        height="32"
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
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResourceCard;
