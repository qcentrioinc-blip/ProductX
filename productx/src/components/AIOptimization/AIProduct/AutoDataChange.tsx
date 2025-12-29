import { useState, useEffect, useRef } from 'react';
import { H2,  H4  } from '../../../styles/Typography';

const AutoDataChange = () => {
  const [activeTab, setActiveTab] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const tabs = [
    'Duis aute irure',
    'Duis aute irure',
    'Duis aute irure',
    'Duis aute irure',
    'Duis aute irure'
  ];

  const images = [
    '/AIProduct/Onboard2.png',
    '/AIProduct/DuisImage.png',
    '/AIProduct/ProductImage1.png',
    '/AIProduct/Feature.png',
    '/AIProduct/Onboard1.png'
  ];

  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum ',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;

      const stickySection = stickyRef.current;
      const rect = stickySection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if sticky section is in view
      const stickyStart = rect.top <= 0;
      const stickyEnd = rect.bottom <= windowHeight;

      if (stickyStart && !stickyEnd) {
        // We're in the sticky zone
        const scrollProgress = Math.abs(rect.top);
        const totalScroll = rect.height - windowHeight;
        const progress = Math.min(scrollProgress / totalScroll, 1);
        
        // Calculate which tab should be active based on scroll progress
        const newActiveTab = Math.min(Math.floor(progress * tabs.length), tabs.length - 1);
        setActiveTab(newActiveTab);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs.length]);

  // Calculate the height needed for smooth scrolling through all tabs
  const scrollHeight = `${100 * tabs.length}vh`;
// const MobileStickyAutoData = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const totalItems = tabs.length;

//   useEffect(() => {
//     const onScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       const progress = Math.min(
//         Math.max(-rect.top / (rect.height - viewportHeight), 0),
//         1
//       );

//       const index = Math.floor(progress * totalItems);
//       setActiveIndex(Math.min(index, totalItems - 1));
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   });



//   return (
//     <div
//       ref={containerRef}
//       style={{ height: `${totalItems * 100}vh` }}
//       className="relative"
    
//     >
//       <div className="sticky top-0 pt-10 flex items-center">
//         <div className="w-full px-6 space-y-4">
          
//           {/* IMAGE */}
//           <div className="overflow-hidden  ">
//             <img
//               key={activeIndex}
//               src={images[activeIndex]}
//               alt=""
//               className="
//                 w-full h-[260px] object-cover
//                 transition-all duration-700
//                 translate-x-10 opacity-0 pt-10
//                 animate-slideInRight
//               "
//             />
//           </div>

//           {/* TAB */}
//           <H4
//             key={`tab-${activeIndex}`}
//             className="
//               bg-[#5551FF] text-white
//               p-5 rounded-xl text-center
//               transition-all duration-700
//               -translate-x-10 opacity-0
//               animate-slideInLeft
//             "
//           >
//             {tabs[activeIndex]}
//           </H4>

//           {/* GREEN BOX */}
//           <div
//             key={`para-${activeIndex}`}
//             className="
//               bg-emerald-500 rounded-2xl p-6
//               transition-all duration-700 delay-100
//               -translate-x-10 opacity-0
//               animate-slideInLeft
//             "
//           >
//             <p className="text-white leading-relaxed">
//               {paragraphs[activeIndex]}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const MobileStickyAutoData = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = tabs.length;

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / (rect.height - viewportHeight), 0),
        1
      );

      const index = Math.floor(progress * totalItems);
      setActiveIndex(Math.min(index, totalItems - 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  },);
  
  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${totalItems * 100}vh` }}
    >
      <div className="sticky top-20 h-[65vh] flex  ">
        <div className="w-full mt-10 px-5 space-y-5">

          {/* PURPLE TAB */}
          <H4
            key={`tab-${activeIndex}`}
            className="
              bg-[#5551FF] text-white
              py-4 px-5 rounded-xl text-center
              text-base font-semibold
              animate-slideInLeft
            "
          >
            {tabs[activeIndex]}
          </H4>

          {/* IMAGE CARD */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              key={`img-${activeIndex}`}
              src={images[activeIndex]}
              alt=""
              className="
                w-full h-[220px] object-cover
                animate-slideInRight
              "
            />
          </div>

          {/* GREEN CONTENT CARD */}
          <div
            key={`para-${activeIndex}`}
            className="
              bg-emerald-500 rounded-2xl p-5
              animate-slideInLeft
            "
          >
            <p className="text-white text-sm leading-relaxed">
              {paragraphs[activeIndex]}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

  return (
    <div className="w-full max-w-8xl pt-48 lg:pt-64 lg:pb-36  " >
      {/* Header - Not part of sticky scroll */}
      <div className=" text-left  lg:mx-0  mx-6 lg:text-center      ">
        <H2 className="  font-bold text-[#020059] mb-4">
          Lorem ipsum dolor sit amet Lorem
        </H2>
        <p className="text-[#2A2A2A] text-quicksand text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
        </p>
      </div>
      
      <div className="block md:hidden">
  <MobileStickyAutoData />
</div>
      {/* Sticky Scroll Section */}
      <div ref={stickyRef} style={{ height: scrollHeight }} className="relative hidden md:block" >
        <div className="sticky top-0 h-auto flex items-center  pt-10  overflow-hidden">
          <div className="w-full max-w-[1400px] mx-auto px-8">
            {/* Main Content */}
            <div className="flex gap-8 items-start pt-10">
              {/* Left Sidebar - Tabs (20%) */}
              <div className=' w-[30%] lg:w-[20%] '>
              <div className="flex-shrink-0 space-y-6">
                {tabs.map((tab, index) => (
                  <H4
                    key={index}
                    className={`    p-4 lg:p-6 text-center rounded-xl transition-all duration-500 ${
                      index === activeTab
                        ? 'bg-[#5551FF] text-white shadow-lg scale-105'
                        : index < activeTab
                        ? 'bg-transparent text-[#141414]'
                        : 'bg-transparent text-[#141414]'
                    }`}
                  >
                    {tab}
                  </H4>
                ))}
              </div>
</div>
              {/* Right Content - Image (80%) */}
              <div className=" w-[70%] lg:w-[80%] pl-10 pt-1 flex-shrink-0">
                <div className="  overflow-hidden">
                  <img 
                    src={images[activeTab]} 
                    alt={`Content ${activeTab + 1}`}
                    className="w-full  h-[350px] lg:h-[500px] object-cover rounded-xl transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Green Banner */}
            <div className="mt-4 bg-emerald-500 rounded-2xl p-6 shadow-xl transition-all duration-700">
              <p className="text-white text-center text-[18px] font-quicksand tracking-wider leading-relaxed">
                {paragraphs[activeTab]}
              </p >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoDataChange;