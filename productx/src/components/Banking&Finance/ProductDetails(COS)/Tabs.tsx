import React, { useState } from 'react';
import { H2, P } from '../../../styles/Typography';

interface TabContent {
  headline: string;
  paragraph: string;
  image: string;
}

const tabContents: TabContent[] = [
  {
    headline: 'Lorem ipsum dolor ,consect adipis ipsum',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img4.png',
  },
  {
    headline: 'Praesent commodo ,cursus magn consectetur',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img5.jpg',
  },
  {
    headline: 'Curabitur blandit ,tempus porttitor',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img6.jpg',
  },
  {
    headline: 'Integer posuere ,erat a ante venenatis',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img4.png',
  },
  {
    headline: 'Etiam porta sem ,malesuada magna',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img5.jpg',
  },
];

const ResponsiveTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveIndex((prev) => (prev === 0 ? tabContents.length - 1 : prev - 1));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveIndex((prev) => (prev === tabContents.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className=" py-10 bg-white overflow-hidden">
      <div className='max-w-7xl mx-auto'>
      {/* Tabs Navigation */}
      <div className="md:w-1/2 mt-10">
        <nav aria-label="Product features" className="mb-10">
          <ul
            role="tablist"
            className="flex justify-between gap-10 border-b border-gray-700 pb-2"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {tabContents.map((_, index) => (
              <li
                key={index}
                role="tab"
                aria-selected={activeIndex === index}
                tabIndex={0}
                aria-controls={`tab-panel-${index}`}
                id={`tab-${index}`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                className={`cursor-pointer text-3xl md:text-3xl xl:text-5xl transition-colors duration-200
                  ${activeIndex === index
                    ? 'text-black font-semibold'
                    : 'text-gray-400 hover:text-gray-600 font-normal'}`}
              >
                {String(index + 1).padStart(2, '0')}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 relative">

        {/* Text Content */}
        <div className="md:w-1/2 z-10 mb-20">
          <H2 className="text-3xl text-black font-bold whitespace-pre-line mb-6 leading-tight">
            {tabContents[activeIndex].headline}
          </H2>
          <P className="text-gray-700 leading-relaxed">
            {tabContents[activeIndex].paragraph}
          </P>
        </div>

        {/* Image + Shape */}
        <div className="md:w-1/2 flex justify-center relative">

          {/* Decorative shape behind image */}
          {/* <img
            src="/ProductDetails(COS)/shape.png"
            alt=""
            aria-hidden="true"
            className="
              absolute 
              top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              w-[100%] 
              max-w-none
              opacity-100
            "
          /> */}

          {/* Main image (15% smaller) */}
          <img
            src={tabContents[activeIndex].image}
            alt={`Product feature ${activeIndex + 1}`}
            className="
              relative z-10 
              w-[85%] 
              sm:w-[80%] 
              md:w-[85%] 
              lg:w-[85%]
              h-auto 
              rounded-md 
              shadow-sm
            "
          />
        </div>
      </div>

      </div>
    </section>
  );
};

export default ResponsiveTabs;
