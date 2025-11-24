import React from 'react';
import { H2, H3, P } from '../../../styles/Typography';

// Define the structure for a single feature item
interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

// Mock data for the features
const MOCK_FEATURES: FeatureItem[] = [
  { 
    id: 1, 
    title: 'Sed ut perspiciatis', 
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' 
  },
  { 
    id: 2, 
    title: 'Sed ut perspiciatis', 
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' 
  },
  { 
    id: 3, 
    title: 'Sed ut perspiciatis', 
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' 
  },
];

// --- Sub-Component for each Feature Point ---

const FeaturePointProps: React.FC<FeatureItem> = ({ title, description }) => (
  // Changed to a vertical flex container (flex-col) to stack elements
  <div className="flex flex-col py-4 last:border-b-0">
    
    {/* Circle Placeholder - Now at the top */}
    <div className="mb-2">
      <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 shadow-inner flex items-center justify-center">
        {/* Optional: Add an Icon or number here */}
      </div>
    </div>

    {/* Text Content Section - Stacked Layout (below the icon) */}
    <div className="flex flex-col"> 
      <H3 className=" text-[#166D48] mt-4 mb-2 leading-tight">
        {title}
      </H3>
      <P className="  leading-snug mt-1 xl:max-w-xl" >
        {description}
      </P>
    </div>
  </div>
);

// --- Main Application Component ---

const FeaturePoint: React.FC = () => {
  // Placeholder image URL

  return (
    <div className="h-auto  bg-[#EDE4CA] py-20">
      
      {/* Content Wrapper */}
      <div className="max-w-8xl mx-20">
        
        {/* Title Section */}
        <div className="mb-10 lg:mb-16 ">
          <H2 className=" text-[#166D48] leading-snug">
            Sed ut perspiciatis Unde
          </H2>
          <H2 className=" text-[#166D48] mt-2">
            spiciatis spiciatis
          </H2>
        </div>
        
        {/* Main Content Layout:
          - Mobile (default): Image stacks above features (flex-col).
          - Tablet (sm) & Desktop (lg): Switches to side-by-side (sm:flex-row) and ensures heights match (sm:items-stretch).
        */}
        <div className="flex flex-col sm:flex-row sm:space-x-16 sm:items-stretch items-start">
          
          {/* LEFT SECTION: Image Container */}
          <div className="sm:w-1/2 w-full mb-10 sm:mb-0">
            <img 
              src="/EHR-PMS/Careers/img6.png"
              alt="A smiling woman working at a computer station"
              // Fallback image source in case the placeholder fails
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x600/cccccc/333333?text=Fallback+Image";
              }}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300"
              style={{ aspectRatio: '1 / 1' }} 
            />
          </div>
          
          {/* RIGHT SECTION: Features List - Now set to match height and have a tight design */}
          <div className="sm:w-1/2 w-full flex flex-col justify-between">
            {MOCK_FEATURES.map(item => (
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
