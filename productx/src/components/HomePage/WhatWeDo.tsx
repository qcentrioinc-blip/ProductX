import img1 from '/WhatWeDo/img1.jpg';
import img2 from '/WhatWeDo/img2.jpg';
import img3 from '/WhatWeDo/img3.jpg';
import img4 from '/WhatWeDo/img4.png';

const WhatWeDo = () => {
   return (
      <div className="min-h-screen bg-black text-white px-4 lg:px-0">
         <div className="max-w-[1360px] mx-auto py-12 lg:py-20">
            {/* Headings, Icons */}
            <div className="flex flex-col">
               {/* Headings */}
               <div className="w-full max-w-[424px] flex flex-col mb-8 lg:mb-12">
                  <h2 className="text-lg sm:text-xl lg:text-[24px] font-bricolage font-semibold">
                     <span className="inline-block w-6 sm:w-8 h-[3px] sm:h-[4px] bg-white mb-1 rounded-full"></span>
                     Quis autem
                  </h2>
                  <h1 className="font-bricolage text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight">
                     Shaping the Future Across Every Sector.
                  </h1>
               </div>

               {/* Icons and Para */}
               <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 mb-12 lg:mb-16">
                  {/* Images Grid */}
                  <div className="w-full lg:w-[648px] grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                     <img 
                        src={img1} 
                        alt="Image 1" 
                        className="w-full h-auto object-cover rounded-lg aspect-square sm:aspect-[4/3]"
                     />
                     <img 
                        src={img2} 
                        alt="Image 2" 
                        className="w-full h-auto object-cover rounded-lg aspect-square sm:aspect-[4/3]"
                     />
                     <img 
                        src={img3} 
                        alt="Image 3" 
                        className="w-full h-auto object-cover rounded-lg aspect-square sm:aspect-[4/3] col-span-2 sm:col-span-1"
                     />
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-[569px] lg:ml-[143px] space-y-4 lg:space-y-6 font-Quicksand">
                     <p className="text-sm sm:text-base leading-relaxed text-justify">
                        We design and deliver products that simplify complexity and create
                        real impact across industries. From Environment, Health & Safety
                        (EHS) and Project Management Systems (PMS) to cutting-edge High-Tech
                        solutions,
                     </p>
                     <p className="text-sm sm:text-base leading-relaxed text-justify">
                        We help organizations operate smarter, safer, and faster. Our
                        strength lies in building adaptable platforms that don't just solve
                        today's challenges but prepare businesses for tomorrow's
                        opportunities.
                     </p>
                  </div>
               </div>
            </div>

            {/* Large Image */}
            <div className="w-full aspect-[16/9] lg:aspect-[1360/560] rounded-lg overflow-hidden">
               <img 
                  src={img4} 
                  alt="Table-Conference-image"
                  className="h-full w-full object-cover" 
               />
            </div>
         </div>
      </div>
   );
};

export default WhatWeDo;
