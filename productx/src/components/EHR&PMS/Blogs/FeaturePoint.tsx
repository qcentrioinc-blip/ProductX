import React from 'react';
import { H1, H2, H3, P } from '../../../styles/Typography';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

const MOCK_FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Sed ut perspiciatis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    id: 2,
    title: 'Sed ut perspiciatis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    id: 3,
    title: 'Sed ut perspiciatis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
];

const FeaturePointProps: React.FC<FeatureItem> = ({ title, description }) => (
  <div className="flex flex-col py-4 border-b border-gray-100 last:border-b-0">
    {/* Icon Circle */}
    <div className="mb-2">
      <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 shadow-inner flex items-center justify-center" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col">
      <H3 className="text-[#166D48] mb-0 leading-tight">{title}</H3>
      <P className=" leading-snug mt-1">{description}</P>
    </div>
  </div>
);

const FeaturePoint: React.FC = () => {
  return (
    <div className="relative h-auto p-6 sm:p-10 lg:p-20 bg-amber-50 overflow-visible z-10">
      {/* Decorative Shape - Slightly Above the Section */}
      <img
        src="/EHR-PMS/Blogs/shape1.png"
        alt="decorative shape"
        className="
          absolute
          -top-[9%]      
          right-[-15%]      
          opacity-100 
          pointer-events-none
          select-none
          object-contain
          rotate-[-90deg]
          sm:rotate-[-85deg]
          md:rotate-[-88deg]
          lg:rotate-[-90.86deg]
          z-5
          w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px]
          max-w-none
        "
        style={{
          transformOrigin: 'center',
          zIndex: 0,
        }}
      />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Title Section */}
        <div className="mb-10 lg:mb-16">
          <H1 className="text-[#166D48] leading-snug">Sed ut perspiciatis Unde</H1>
          <H2 className="text-[#166D48] mt-2">spiciatis spiciatis</H2>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col sm:flex-row sm:space-x-16 sm:items-stretch items-start">
          {/* LEFT SECTION: Image */}
          <div className="sm:w-1/2 w-full mb-10 sm:mb-0">
            <img
              src="/EHR-PMS/Careers/img6.png"
              alt="A smiling woman working at a computer station"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  'https://placehold.co/600x600/cccccc/333333?text=Fallback+Image';
              }}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>

          {/* RIGHT SECTION: Features */}
          <div className="sm:w-1/2 w-full flex flex-col justify-between">
            {MOCK_FEATURES.map((item) => (
              <FeaturePointProps
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePoint;
