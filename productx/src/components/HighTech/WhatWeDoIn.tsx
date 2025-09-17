import { useState } from "react";
import sampleImg from "/Image2.jpg"; 

const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      id: 1,
      title: "Banks",
      content:
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.",
      
    },
    {
      id: 2,
      title: "Credit Unions",
      content:
        "Our collaborative spirit extends to our clients, consultants, and the communities we serve.",
    },
    {
      id: 3,
      title: "NBFCs",
      content:
        "Working together fosters innovation and leads to the most successful and holistic solutions.",
    },
  ];

  return (
    <div className="bg-black text-white w-screen h-full py-20 flex flex-col">
    
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 pt-10">
        <h3 className="text-xl font-semibold mb-2">Who is it for</h3>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Sed ut perspiciatis unde omnis
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl">
          Advanced Loan Solutions Beyond Traditional Banking
        </p>
        <hr className="border-gray-700 mt-6" />
      </div>

    
      <div className="flex flex-1 flex-col md:flex-row w-full max-w-[1360px] mx-auto mt-10 px-6 md:px-12 gap-6">
    
        <div className="w-full md:w-3/5 h-[400px] md:h-[500px]">
          <img
            src={sampleImg}
            alt="Who we serve"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-2/5 flex flex-col justify-center">
          {accordionData.map((item, index) => (
            <div
              key={item.id}
              className={`border-b border-gray-700 p-4 cursor-pointer ${
                openIndex === index ? "bg-gray-900" : ""
              }`}
              onClick={() => setOpenIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h4
                  className={`text-2xl font-bold ${
                    openIndex === index ? "text-white" : "text-gray-400"
                  }`}
                >
                  {String(item.id).padStart(2, "0")}
                </h4>
                <p
                  className={`text-lg font-semibold ${
                    openIndex === index ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.title}
                </p>
              </div>
              {openIndex === index && (
                <p className="text-gray-400 mt-4 text-sm md:text-base">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoIn;
