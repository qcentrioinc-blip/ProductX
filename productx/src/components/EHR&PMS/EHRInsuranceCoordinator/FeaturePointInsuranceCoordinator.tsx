import React from 'react';
import { H2, H3, P } from '../../../styles/Typography';

// Define the structure for a single feature item
interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon:string;
}

// Mock data for the features
const MOCK_FEATURES: FeatureItem[] = [
  { 
    id: 1, 
    title: ' Reduce Claim Denials', 
    description: 'Automated coding and built-in error checks drastically lower claim rejection rates, protecting your practice’s earned revenue. ' ,
    icon: '/EHR-PMS/InsuranceCoordinator/icon1.svg',
  },
  { 
    id: 2, 
    title: 'Accelerate Reimbursement Cycles ', 
    description: 'Faster electronic submissions and real-time tracking of payer responses lead to significantly shorter days in accounts receivable. ' , 
    icon: '/EHR-PMS/InsuranceCoordinator/icon2.svg',
  },
  { 
    id: 3, 
    title: ' Lower Administrative Costs ', 
    description: 'Eliminate manual data entry and status chasing, allowing your team to manage more claims with greater efficiency.' ,
    icon: '/EHR-PMS/InsuranceCoordinator/icon3.svg',
  },
];

// --- Sub-Component for each Feature Point ---

const FeaturePointInsuranceCoordinatorProps: React.FC<FeatureItem> = ({ title, description, icon }) => (
  // Changed to a vertical flex container (flex-col) to stack elements
  <div className="flex flex-col py-4 last:border-b-0">
    
    {/* Circle Placeholder - Now at the top */}
    <div className="mb-2">
<div className="w-14 h-14 rounded-full shadow-inner flex items-center justify-center">
  <img
    src={icon}
    alt={title}
    loading="lazy"
    className="w-7 h-7 object-contain"
  />
</div>
    </div>

    {/* Text Content Section - Stacked Layout (below the icon) */}
    <div className="flex flex-col"> 
      <H3 className=" text-[#008280] mt-4 mb-2 leading-tight">
        {title}
      </H3>
      <P className="  leading-snug mt-1 xl:max-w-xl" >
        {description}
      </P>
    </div>
  </div>
);

// --- Main Application Component ---

const FeaturePointInsuranceCoordinator: React.FC = () => {
  // Placeholder image URL

  return (
    <div className="h-auto  bg-[#F9F9F9] py-10">
      
      {/* Content Wrapper */}
      <div className="max-w-8xl mx-20">
        
        {/* Title Section */}
        <div className="mb-10 lg:mb-16 ">
          <H2 className=" text-[#008280] leading-snug">
          Drive Tangible Revenue Cycle Improvements 
          </H2>
           
        </div>
        
        {/* Main Content Layout:
          - Mobile (default): Image stacks above features (flex-col).
          - Tablet (sm) & Desktop (lg): Switches to side-by-side (sm:flex-row) and ensures heights match (sm:items-stretch).
        */}
<div className="flex flex-col xl:flex-row xl:space-x-16 xl:items-stretch items-start">
          
          {/* LEFT SECTION: Image Container */}
<div className="xl:w-1/2 w-full mb-10 xl:mb-0">
            <img 
              src="/EHR-PMS/Careers/img6.png"
              alt="A smiling woman working at a computer station"
              // Fallback image source in case the placeholder fails
             
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300"
              style={{ aspectRatio: '1 / 1' }} 
            />
          </div>
          
          {/* RIGHT SECTION: Features List - Now set to match height and have a tight design */}
<div className="xl:w-1/2 w-full flex flex-col justify-between">
            {MOCK_FEATURES.map(item => (
              <FeaturePointInsuranceCoordinatorProps 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description} icon={''}              />
            ))}
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default FeaturePointInsuranceCoordinator;
