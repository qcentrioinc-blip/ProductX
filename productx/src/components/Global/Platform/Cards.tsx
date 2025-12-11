import { useEffect, useRef, useState } from 'react';
import { H1, H2,   P } from '../../../styles/Typography';

const Cards = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollStart = rect.top;
      const scrollRange = viewportHeight;
      const progress = Math.max(0, Math.min(1, 1 - scrollStart / scrollRange));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center bg-black py-20 -mt-14 px-6 lg:px-12"
    >
      <div className="w-full max-w-8xl lg:mx-10 lg:px-10">
        {/* Header */}
        <div className="text-left my-16">
          <H1 className="mb-2 ">
            <span className="text-[#F5F5F5]">Lorem ipsum dolor ,
            <br/>
             consectetur adipis conse 
             </span>
          </H1>
        </div>

       {[
            {
              id: 1,
              title: "Lorem ipsum dolor, consectetur adipis  ",
              text: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehe nderit in voluptate velit ",
              bg: "bg-blue-50",
              img: "Image 1",
            },
            {
              id: 2,
              title: "Lorem ipsum dolor, consectetur adipis ",
              text: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehe nderit in voluptate velit ",
              bg: "bg-blue-50",
              img: "Image 2",
            },
            {
              id: 3,
              title: "Lorem ipsum dolor, consectetur adipis ",
              text: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure dolor in reprehe nderit in voluptate velit ",
              bg: "bg-blue-50",
              img: "Image 3",
            },
          ].map((card ) => (
            <div
              key={card.id}
              className={`sticky top-28 ${card.bg} border mb-10 border-blue-200 rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10 transition-all duration-700 h-[480px] sm:h-[550px] md:h-[600px]`}
              style={{ transform: `translateY(${scrollProgress * 50}px)` }}
            >
              {/* Text Section */}
              <div className="w-full lg:w-[50%] flex flex-col justify-center text-left">
                <H2  className="   sm:text-2xl font-semibold text-gray-800 mb-4 leading-snug">
                  {card.title}
                </H2  >
                <P className="text-gray-600 pr-4 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </P>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-[50%] h-64 sm:h-72 md:h-[500px] bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-base">
                {card.img}
              </div>
            </div>
          ))}
        </div>
      </div>

      
     
  );
};

export default Cards;