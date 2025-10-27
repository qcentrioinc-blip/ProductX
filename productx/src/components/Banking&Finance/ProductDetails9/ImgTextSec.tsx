// import { useState } from 'react';
// import { P, H4, H2 } from '../../../styles/Typography';
// import bg_img from '/ProductPage9/bg_img.png'; 
// import img1 from '/ProductPage9/img1.png';

// const featureItems = [
//   'Duis aute irure dolor in',
//   'Duis aute aute irure dolor in',
//   'Duis aute irure dolor in',
//   'Duis aute irure dolor in',
// ];

// const accordionData = [
//   {
//     title: { part1: 'Sed ut perspi', part2: ' ciatis Sed ut' },
//     imageSrc: img1,
//     paragraph:
//       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit olor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehen',
//     features: featureItems,
//   },
//   {
//     title: { part1: 'Aperiam eaque', part2: ' ipsa quae ab illo' },
//     imageSrc: img1, 
//     paragraph:
//       'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     features: ['Feature 5', 'Feature 6', 'Feature 7', 'Feature 8'],
//   },
//   {
//     title: { part1: 'Sed ut perspi', part2: ' ciatis Sed ut' },
//     imageSrc: img1,
//     paragraph:
//       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit olor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehen',
//     features: featureItems,
//   },
// ];

// const CheckIcon = () => (
//   <svg className="w-5 h-5 text-[#EB1F52] flex-shrink-0 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
//     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//   </svg>
// );

// const ImgTextSec = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <div 
//       className="relative w-full h-auto flex justify-center items-center overflow-hidden py-16 px-4" 
//       style={{ backgroundImage: `url(${bg_img})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}
//     >
//       {/* Card container -- sits above background */}
//       <section
//         className="relative z-20 w-full max-w-[1378px] px-6 py-10 rounded-xl bg-[#E5E5E5] shadow-[0_2px_24px_rgba(0,0,0,0.17)] flex flex-col space-y-4"
//       >
//         {/* Top header (Static part) */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//           <div>
//             <H2>
//               <span className="text-[#A80040]">Sed ut perspi</span>
//               <span className="text-[#666666]"> ciatis Sed ut</span>
//             </H2>
//             <P className="mt-4 font-bold">
//               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  <br/> dolore
//               Duis aute irure dolor in
//             </P>
//           </div>
//           <button className="mt-8 md:mt-0 px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-all duration-200 min-w-[150px] flex items-center justify-center">
//             CONTACT US
//             <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Accordion */}
//         <div className="space-y-0.5">
//           {accordionData.map((data, index) => (
//             <div key={`item-${index}`} className="group">
//               <div 
//                 className={`
//                   grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 pt-6 
//                   cursor-pointer transition-all duration-300
//                   ${index === openIndex ? 'bg-[#E5E5E5]' : 'hover:bg-[#E5E5E5]'}
//                   ${index > 0 ? 'border-t border-gray-200' : ''} 
//                 `}
//                 onClick={() => setOpenIndex(index)}
//               >
//                 <H4 className="md:col-span-1 text-lg font-semibold flex items-center">
//                   <svg 
//                     className={`w-4 h-4 mr-3 transition-transform duration-300 flex-shrink-0 ${index === openIndex ? 'rotate-90 text-[#EB1F52]' : 'text-gray-400'}`} 
//                     fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//                   </svg>
//                   <div>
//                     <span className="text-[#A80040]">{data.title.part1}</span>
//                     <span className="text-[#666666]">{data.title.part2}</span>
//                   </div>
//                 </H4>
//               </div>

//               {/* Accordion content */}
//               <div
//                 className={`transition-all duration-500 ease-in-out overflow-hidden
//                 ${index === openIndex ? 'max-h-[1000px] opacity-100 pt-8 pb-4' : 'max-h-0 opacity-0'}`}
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8">
//                   <div>
//                     <img
//                       src={data.imageSrc}
//                       alt={`Feature ${index + 1}`}
//                       className="rounded-lg w-full h-40 md:h-48 object-cover shadow"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         if (target) {
//                           target.onerror = null;
//                           target.src = "https://placehold.co/600x400/333333/ffffff?text=Feature+Image";
//                         }
//                       }}
//                     />
//                   </div>

//                   <div className="lg:col-span-2">
//                     <p className="text-gray-700 mb-4">{data.paragraph}</p>
//                     <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-5 mb-0">
//                       {data.features.map((item, idx) => (
//                         <div key={item + idx} className="flex items-start">
//                           <CheckIcon />
//                           <span className="text-gray-700">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {index < accordionData.length - 1 && (
//                 <div className="w-full h-px bg-black opacity-10 mt-2" />
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImgTextSec;


// Secoond Code.

import { useState } from 'react';
import { P, H4, H2 } from '../../../styles/Typography';
import bg_img from '/ProductPage9/bg_img.png'; 
import img1 from '/ProductPage9/img1.png';

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
    title: { part1: 'Aperiam eaque', part2: ' ipsa quae ab illo' },
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
  <svg className="w-5 h-5 text-[#EB1F52] flex-shrink-0 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ImgTextSec = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative w-full h-auto flex justify-center items-center overflow-hidden py-16 px-4">
      {/* Background image that scrolls normally */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll', // 🔥 changed from fixed to scroll
        }}
      />

      {/* Card container -- sits above background */}
      <section
        className="relative z-10 w-full max-w-[1378px] px-6 py-10 rounded-xl bg-[#E5E5E5] shadow-[0_2px_24px_rgba(0,0,0,0.17)] flex flex-col space-y-4"
      >
        {/* Top header (Static part) */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <H2>
              <span className="text-[#A80040]">Sed ut perspi</span>
              <span className="text-[#666666]"> ciatis Sed ut</span>
            </H2>
            <P className="mt-4 font-bold">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  <br/> dolore
              Duis aute irure dolor in
            </P>
          </div>
          <button className="mt-8 md:mt-0 px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-all duration-200 min-w-[150px] flex items-center justify-center">
            CONTACT US
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-0.5">
          {accordionData.map((data, index) => (
            <div key={`item-${index}`} className="group">
              <div 
                className={`
                  grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 pt-6 
                  cursor-pointer transition-all duration-300
                  ${index === openIndex ? 'bg-[#E5E5E5]' : 'hover:bg-[#E5E5E5]'}
                  ${index > 0 ? 'border-t border-gray-200' : ''} 
                `}
                onClick={() => setOpenIndex(index)}
              >
                <H4 className="md:col-span-1 text-lg font-semibold flex items-center">
                  <svg 
                    className={`w-4 h-4 mr-3 transition-transform duration-300 flex-shrink-0 ${index === openIndex ? 'rotate-90 text-[#EB1F52]' : 'text-gray-400'}`} 
                    fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="text-[#A80040]">{data.title.part1}</span>
                    <span className="text-[#666666]">{data.title.part2}</span>
                  </div>
                </H4>
              </div>

              {/* Accordion content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden
                ${index === openIndex ? 'max-h-[1000px] opacity-100 pt-8 pb-4' : 'max-h-0 opacity-0'}`}
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
                          target.src = "https://placehold.co/600x400/333333/ffffff?text=Feature+Image";
                        }
                      }}
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-gray-700 mb-4">{data.paragraph}</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-5 mb-0">
                      {data.features.map((item, idx) => (
                        <div key={item + idx} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < accordionData.length - 1 && (
                <div className="w-full h-px bg-black opacity-10 mt-2" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImgTextSec;
