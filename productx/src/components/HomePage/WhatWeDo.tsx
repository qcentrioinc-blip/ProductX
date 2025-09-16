import img1 from '/WhatWeDo/img1.jpg';
import img2 from '/WhatWeDo/img2.jpg';
import img3 from '/WhatWeDo/img3.jpg';
import img4 from '/WhatWeDo/img4.png';
const WhatWeDo = () => {
   return(
       // main
<div className="w-screen  h-[1242px] bg-black text-white ">           {/* Two Part Division */}
<div className="w-[1360px] mx-auto">
               {/* Headings, Icons */}
<div className="flex  flex-col">
                   {/* Headings */}
<div className="w-[424px] h-[158px] flex flex-col mt-[80px]">
<h2 className="text-[24px] font-bricolage font-semibold ">
<span className="inline-block w-8 h-[4px] bg-white mb-0 rounded-full"></span>
                           Quis autem                            
</h2>
<h1 className="font-bricolage text-[40px] font-bold">
                           Shaping the Future Across Every Sector.
</h1>
</div>
                   {/* icons and para */}
<div className="flex h-[236px]  flex-1 ">
<div className="w-[648px]  grid grid-cols-3 gap-4 mt-20">
<img src={img1} alt="Image 1" />
<img src={img2} alt="Image 2" />
<img src={img3} alt="Image 3" />
</div>

<div className="mt-20 w-[569px] ml-30 space-y-6 mb-24 font-Quicksand text-justify">                          
<p>
                                We design and deliver products that simplify complexity and create
                               real impact across industries. From Environment, Health & Safety
                               (EHS) and Project Management Systems (PMS) to cutting-edge High-Tech
                               solutions,
</p>
<p>
                               We help organizations operate smarter, safer, and faster. Our
                               strength lies in building adaptable platforms that don’t just solve
                               today’s challenges but prepare businesses for tomorrow’s
                               opportunities.
</p>
</div>
</div>
</div>
               {/* Large-Image */}
<div className=' h-[560px] w-[1360px]'>
<img src={img4} alt="Table-Conference-image"
                   className='h-full w-full'/>
</div>
</div>
</div>
   );
};
export default WhatWeDo;