import { useState } from 'react';
import { P, H4, H3 } from '../../../styles/Typography';
import img1 from '/ProductPage9/img1.png';
import { ContactUs } from '../../../styles/Button';

const featureItems = [
  'Duis aute irure dolor in',
  'Duis aute aute irure dolor in',
  'Duis aute irure dolor in',
  'Duis aute irure dolor in',
];

const accordionData = [
  {
    title: { part1: 'Sed ut perspi', part2: ' ciatis Sed ut' },
    imageSrc: img1,
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit olor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehen',
    features: featureItems,
  },
  {
    title: { part1: 'Aperiam eaque', part2: ' ipsa quae ablo' },
    imageSrc: img1,
    paragraph:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    features: ['Feature 5', 'Feature 6', 'Feature 7', 'Feature 8'],
  },
  {
    title: { part1: 'Sed ut perspi', part2: ' ciatis Sed ut' },
    imageSrc: img1,
    paragraph:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit olor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehen',
    features: featureItems,
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#2B68C3] flex-shrink-0 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ImgTextSec = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative w-full h-auto flex justify-center items-center overflow-hidden py-20 lg:py-26 px-10 xl:px-30 bg-[#D4D4D4] ">
      <section className="relative z-10 w-full max-w-[1378px] px-6 py-10 rounded-md bg-[#FFFFFF] shadow-[0_2px_24px_rgba(0,0,0,0.17)] flex flex-col space-y-4">

        {/* Top header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <H3>
              <span className="text-[#2B68C3]">Sed ut perspi</span>
              <span className="text-[#666666]"> ciatis Sed ut</span>
            </H3>
            <P className="mt-4 font-bold max-w-[390px] xl:max-w-[450px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore Duis aute irure dolor in
            </P>
          </div>

          <ContactUs className="mt-8 md:mt-0 min-w-[150px] flex items-center justify-center">
            CONTACT US
            
          </ContactUs>
        </div>

        {/* Accordion */}
        <div className="space-y-0.5">
          {accordionData.map((data, index) => (
            <div key={`item-${index}`} className="group">

              {/* TITLE + INACTIVE DESCRIPTION */}
              <div
                className={`
                  grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 py-6 
                  cursor-pointer transition-all duration-300
                  ${index === openIndex ? 'bg-[#FFFFFF]' : 'hover:bg-[#FFFFFF]'}
                  } 
                `}
                onClick={() => setOpenIndex(index)}
              >
                {/* Title (left) */}
                <H4 className="md:col-span-1 text-lg font-semibold flex items-center">
                  <svg
                    className={`w-4 h-4 mr-3 transition-transform duration-300 flex-shrink-0 ${
                      index === openIndex ? 'rotate-90 text-[#2B68C3]' : 'text-gray-400'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <span className="text-[#2B68C3]">{data.title.part1}</span>
                    <span className="text-[#666666]">{data.title.part2}</span>
                  </div>
                </H4>

                {/* RIGHT SIDE — SHORT DESCRIPTION FOR INACTIVE ONLY */}
                {index !== openIndex && (
                  <P className="md:col-span-2 text-[#141414]  leading-snug">
                    {data.paragraph}
                  </P>
                )}
              </div>

              {/* ACTIVE CONTENT */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  index === openIndex ? 'max-h-[1000px] opacity-100 pt-8 pb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8">
                  <div>
                    <img
                      src={data.imageSrc}
                      alt={`Feature ${index + 1}`}
                      className="rounded-lg w-full h-40 md:h-48 object-cover shadow"
                      onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target) {
                        target.onerror = null;
                        target.src = 'https://placehold.co/600x400/333333/ffffff?text=Feature+Image';
                      }
                    }}

                    />
                  </div>

                  <div className="lg:col-span-2">
                    <P className=" mb-4">{data.paragraph}</P>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-5 mb-0">
                      {data.features.map((item, idx) => (
                        <div key={item + idx} className="flex items-start">
                          <CheckIcon />
                          <span className="text-[#141414]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < accordionData.length - 1 && <div className="w-full h-px bg-black opacity-10 mt-2" />}
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default ImgTextSec;
