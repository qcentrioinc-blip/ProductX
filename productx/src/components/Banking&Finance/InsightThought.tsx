import { motion } from 'framer-motion';
import { H3 } from '../../styles/Typography';

const cardData = [
  {
    img: "https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024",
    label: "Lorem ipsum",
    heading: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque",
    author: "Author",
    date: "AUGUST 19,2025"
  },
  {
    img: "https://framerusercontent.com/images/MDtFSJaF3MhabVjn223xx2IMk.jpg?scale-down-to=1024",
    label: "Lorem ipsum",
    heading: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque",
    author: "Author",
    date: "AUGUST 19,2025"
  },
  {
    img: "https://framerusercontent.com/images/v1ltoVHr1qjuj63noI3YsrEqSNg.jpg?scale-down-to=1024",
    label: "Lorem ipsum",
    heading: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque",
    author: "Author",
    date: "AUGUST 19,2025"
  }
];

const InsightThought = () => {
  return (
    <div className="bg-[#E7E7E7] py-8 sm:py-12 md:py-16" id="blogs">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 gap-5">
          <H3 className="text-[#2B68C3] text-lg sm:text-2xl md:text-3xl truncate">
            Consecte adipiscing
          </H3>
          <button className="bg-white px-5 py-2 rounded-md text-sm font-medium hover:shadow-md transition-shadow flex items-center gap-2 whitespace-nowrap self-start sm:self-auto">
            VIEW ALL
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                borderLeft: '16px solid #fff',
                borderRight: '16px solid #fff',
                borderTop: '16px solid #fff',

              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={card.img}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="overflow-hidden w-full flex justify-center">
                    <motion.div
                      className="text-white text-lg font-semibold whitespace-nowrap px-1"
                      animate={{ x: [80, -80] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      READ DETAILS • READ DETAILS
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{card.label}</p>
                <h3 className="text-md font-semibold text-gray-900 mb-2 sm:mb-4 leading-relaxed">
                  {card.heading}
                </h3>
                <div className="flex flex-wrap justify-between text-xs sm:text-sm text-gray-600 gap-1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{card.author}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{card.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightThought;
