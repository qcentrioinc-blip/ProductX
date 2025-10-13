// import { ContactUs } from '../../../styles/Button';
import { H1, P, H4 } from '../../../styles/Typography';
import bg_img from '/ProductPage9/bg_img.png'; 
import img1 from '/ProductPage9/img1.png';

const featureItems = [
  'Duis aute irure dolor in',
  'Duis aute aute irure dolor in',
  'Duis aute irure dolor in',
  'Duis aute irure dolor in',
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#EB1F52] flex-shrink-0 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ImgTextSec = () => (
  <div className="relative w-full h-auto flex justify-center items-center overflow-hidden py-16 px-4">
    <img
      src={bg_img}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
      onError={(e) => { 
        const target = e.target as HTMLImageElement;
        if (target) {
          target.onerror = null;
          target.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
          target.className = "absolute inset-0 w-full h-full object-cover opacity-0 z-0";
        }
      }}
    />
    {/* Optional dark overlay for effect */}
    {/* <div className="absolute inset-0 w-full h-full bg-black opacity-10 z-10 pointer-events-none"></div> */}
    
    {/* Card container -- sits above background */}
    <section
      // min-h-[785px] REMOVED to allow card to scale with content, max-w is 1378px as requested.
      className="relative z-20 w-full max-w-[1378px] px-6 py-10 rounded-xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.17)] flex flex-col space-y-4"
    >
      {/* Top header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <H1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-[#EB1F52]">Sed ut perspi</span>
            <span className="text-gray-700"> ciatis Sed ut</span>
          </H1>
          <P className="text-gray-700 mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore&nbsp;
            Duis aute irure dolor in
          </P>
        </div>
        <button className="mt-8 md:mt-0 px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-all duration-200 min-w-[150px] flex items-center justify-center">
          CONTACT US
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* <ContactUs>CONTACT US</ContactUs> */}
      </div>
      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8 border-t border-gray-200 pt-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">
            <span className="text-[#EB1F52]">Sed ut perspi</span>
            <span className="text-gray-700"> ciatis Sed ut</span>
          </h4>
          {/* Card feature image: replace with actual path if needed */}
          <img
            src={img1}
            alt="Feature"
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
        <div className="lg:col-span-2 mt-10">
          <p className="text-gray-700 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit olor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehen
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-9 mb-9">
            {featureItems.map((item, idx) => (
              <div key={item + idx} className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Details rows */}
      <div className="space-y-6">
        {[1, 2].map((_, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 border-t border-gray-200 pt-6">
            <H4 className="md:col-span-1 text-lg font-semibold">
              <span className="text-[#EB1F52]">Sed ut perspi</span>
              <span className="text-gray-700"> ciatis Sed ut</span>
            </H4>
            <P className="md:col-span-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </P>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ImgTextSec;
