import React, { useState } from 'react';
import { H2, P } from '../../../styles/Typography';

interface TabContent {
  headline: string;
  paragraph: string;
  image: string;
}

const tabContents: TabContent[] = [
  {
    headline: 'Lorem ipsum dolor ,\nconsect adipis ipsum',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ProductDetails(COS)/img4.png',
  },
  {
    headline: 'Praesent commodo ,\ncursus magn consectetur',
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/ProductDetails(COS)/img5.jpg',
  },
  {
    headline: 'Curabitur blandit ,\ntempus porttitor',
    paragraph:
      'Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    image: '/ProductDetails(COS)/img6.jpg',
  },
  {
    headline: 'Integer posuere ,\nerat a ante venenatis',
    paragraph:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    image: '/ProductDetails(COS)/img7.jpg',
  },
  {
    headline: 'Etiam porta sem ,\nmalesuada magna',
    paragraph:
      'Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    image: '/ProductDetails(COS)/img8.jpg',
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
    <section className="max-w-7xl mx-auto p-6">
      {/* Tabs Navigation */}
      <div className="md:w-1/2 mt-10">
        <nav aria-label="Product features" className="mb-10">
          <ul
            role="tablist"
            className="flex justify-start gap-10 border-b border-gray-300 pb-2"
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
                className={`cursor-pointer text-3xl transition-colors duration-200
                  ${activeIndex === index
                    ? 'text-[#C8072C] font-semibold'
                    : 'text-gray-400 hover:text-gray-600 font-normal'}`}
              >
                {String(index + 1).padStart(2, '0')}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <H2 className="text-3xl font-bold whitespace-pre-line mb-6 leading-tight">
            {tabContents[activeIndex].headline}
          </H2>
          <P className="text-gray-700 leading-relaxed">
            {tabContents[activeIndex].paragraph}
          </P>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={tabContents[activeIndex].image}
            alt={`Product feature ${activeIndex + 1}`}
            className="max-w-full h-auto rounded-md shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default ResponsiveTabs;
