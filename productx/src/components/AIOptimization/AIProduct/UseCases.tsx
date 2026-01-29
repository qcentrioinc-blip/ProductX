'use client';

import { useState } from 'react';
import { H2,  } from '../../../styles/Typography';

const TABS = [
  {
    id: 1,
    label: 'Customer Example 1 - GLOBAL REAL ESTATE FIRM',
    image: '/RealEstate.svg', // Replace with your actual image path
    alt: 'Global Real Estate Firm cost optimization visualization'
  },
  {
    id: 2,
    label: 'Customer Example 2 - AUSTRALIAN MINING COMPANY',
    image: '/DigitalMarketing.svg', // Replace with your actual image path
    alt: 'Australian Mining Company optimization metrics'
  },
  {
    id: 3,
    label: 'Customer Example 3 - DIGITAL MARKETING FIRM',
    image: '/Mining.svg', // Replace with your actual image path
    alt: 'Digital Marketing Firm cloud spend analysis'
  },
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Get current active tab data
  const currentTab = TABS.find(tab => tab.id === activeTab);

  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <H2 className="text-[#254D70] mb-10">
          Lorem ipsum dolor, consectetur adipis
        </H2>

        {/* TABS */}
     {/* TABS */}
<div className="sticky top-16 z-30 bg-[#F5F5F5] py-4">
  <div className="flex flex-wrap justify-center gap-3">
    {TABS.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`px-4 py-4 rounded-xl border text-sm sm:text-base font-quicksand transition-all duration-300
          ${
            activeTab === tab.id
              ? 'bg-[#254D70] text-white border-[#254D70] shadow-lg'
              : 'bg-white text-[#254D70] border-[#254D70] hover:shadow-md'
          }`}
        aria-label={`View ${tab.label}`}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>


        {/* IMAGE CONTENT CARD */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Container - Ensures proper fit */}
          <div className="w-full">
            <img
              src={currentTab?.image}
              alt={currentTab?.alt}
              className="w-full h-auto object-contain max-h-[800px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* COMMENTED OUT: Original Tab Content */}
        {/*
        <div className="bg-[#f6f6f6] relative rounded-xl shadow-md p-6 sm:p-8">

          {activeTab === 1 && (
            <div className="space-y-8">

              <div className="relative mt-6">

                <div className="flex justify-between px-10">
                  {['Visualization', 'Utilization', 'Configuration', 'Commercial', 'Engineering'].map(
                    (item) => (
                      <div
                        key={item}
                        className="px-10 py-2 border border-gray-300 font-quicksand bg-white rounded-sm
                                   font-light text-[#254D70] shadow-md text-lg"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                <svg
                  className="absolute left-0 top-[48px] w-full h-32 pointer-events-none"
                  viewBox="0 0 1000 140"
                  preserveAspectRatio="none"
                >
                  <line x1="160" y1="0" x2="160" y2="40" stroke="#000" strokeWidth="1" />
                  <line x1="340" y1="0" x2="340" y2="40" stroke="#000" strokeWidth="1" />
                  <line x1="160" y1="40" x2="340" y2="40" stroke="#000" strokeWidth="1" />
                  <line x1="560" y1="0" x2="560" y2="40" stroke="#000" strokeWidth="1" />
                  <line x1="820" y1="0" x2="820" y2="40" stroke="#000" strokeWidth="1" />
                  <line x1="560" y1="40" x2="820" y2="40" stroke="#000" strokeWidth="1" />
                </svg>

                <div className="flex justify-between px-10 mt-12 text-xs text-gray-700">
                  <div className="w-[220px] text-center">
                    $1.6m Annually via<br />Reserved Instances
                  </div>
                  <div className="w-[260px] text-center">
                    $3.8m Annually via unique<br />CloudDIET optimizations
                  </div>
                </div>

              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">

                <div className="bg-white rounded-lg p-4 shadow-sm w-full max-w-[360px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#254D70]" />
                    <P className="font-semibold text-sm">App Services (47%)</P>
                  </div>
                  <div className="flex items-center gap-3 mt-2 bg-[#F1F1F1] rounded-md px-3 py-2">
                    <span className="px-4 py-1.5 rounded-md border border-gray-300 bg-white
                                   text-[#254D70] font-semibold text-sm shadow-sm">
                      $1,132,800
                    </span>
                    <span className="text-gray-500 text-sm">$2,124,000</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm w-full max-w-[360px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#254D70]" />
                    <P className="font-semibold text-sm">Databricks (29%)</P>
                  </div>
                  <div className="flex items-center gap-3 mt-2 bg-[#F1F1F1] rounded-md px-3 py-2">
                    <span className="px-4 py-1.5 rounded-md border border-gray-300 bg-white
                                   text-[#254D70] font-semibold text-sm shadow-sm">
                      $876,500
                    </span>
                    <span className="text-gray-500 text-sm">$1,680,000</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm w-full max-w-[360px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#254D70]" />
                    <P className="font-semibold text-sm">Storage (35%)</P>
                  </div>
                  <div className="flex items-center gap-3 mt-2 bg-[#F1F1F1] rounded-md px-3 py-2">
                    <span className="px-4 py-1.5 rounded-md border border-gray-300 bg-white
                                   text-[#254D70] font-semibold text-sm shadow-sm">
                      $790,000
                    </span>
                    <span className="text-gray-500 text-sm">$1,160,000</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm w-full max-w-[360px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#254D70]" />
                    <P className="font-semibold text-sm">Cosmos DB (39%)</P>
                  </div>
                  <div className="flex items-center gap-3 mt-2 bg-[#F1F1F1] rounded-md px-3 py-2">
                    <span className="px-4 py-1.5 rounded-md border border-gray-300 bg-white
                                   text-[#254D70] font-semibold text-sm shadow-sm">
                      $790,000
                    </span>
                    <span className="text-gray-500 text-sm">$1,160,000</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm w-full max-w-[360px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#254D70]" />
                    <P className="font-semibold text-sm">Azure SQL (29%)</P>
                  </div>
                  <div className="flex items-center gap-3 mt-2 bg-[#F1F1F1] rounded-md px-3 py-2">
                    <span className="px-4 py-1.5 rounded-md border border-gray-300 bg-white
                                   text-[#254D70] font-semibold text-sm shadow-sm">
                      $560,000
                    </span>
                    <span className="text-gray-500 text-sm">$668,000</span>
                  </div>
                </div>

              </div>

              <div className='relative'>
                <div className="bg-white max-w-3xl rounded-lg p-6 text-sm flex gap-6 h-full">

                  <div className="flex flex-col gap-1 text-gray-700">
                    <P>$1.6m Annually via Reserved Instances</P>
                    <P>$3.8m CloudDIET optimizations</P>
                    <P>2.4m savings were immediate</P>
                  </div>

                  <div className="w-px bg-gray-300" />

                  <div className="flex flex-col gap-1 text-gray-700">
                    <P>10M Annual Spend</P>
                    <P>Mature teams including cloud ops team</P>
                    <P>Templated environments, CI/CD</P>
                  </div>

                </div>

                <div className="flex absolute z-10 -right-10 bottom-32 h-full">
                  <img
                    src="/AIOptimization/Usecase11.png"
                    alt="Building illustration"
                    className="h-72 w-auto object-contain"
                  />
                </div>
              </div>

            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-8">

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-2/3 overflow-x-auto">
                  <img
                    src="/UseCases/australian-mining-graph.png"
                    alt="Australian mining optimization"
                    className="w-full object-contain"
                  />
                </div>

                <div className="w-full lg:w-1/3 bg-[#F0F3F6] rounded-lg p-4">
                  <P className="text-lg font-semibold text-[#254D70]">
                    24% lower total spend
                  </P>
                  <P className="text-sm mt-2 text-[#141414]">
                    Most impact achieved through SQL optimization and commercial restructuring,
                    delivering measurable savings within weeks.
                  </P>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-8">

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3 overflow-x-auto">
                  <img
                    src="/AIOptimization/UseCase11.png"
                    alt="Digital marketing optimization"
                    className="w-full object-contain"
                  />
                </div>

                <div className="w-full lg:w-1/3 bg-[#F0F3F6] rounded-lg p-4 text-sm">
                  <P className="font-semibold mb-2">Estimated Annual Cloud Spend</P>
                  <ul className="space-y-1">
                    <li>$1,460,000</li>
                    <li>CloudDIET Savings: $415,000</li>
                    <li>Net ROI: 655%</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        */}

      </div>
    </section>
  );
};

export default UseCases;