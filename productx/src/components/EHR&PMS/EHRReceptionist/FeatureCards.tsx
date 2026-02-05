import { H2, H4, P } from "../../../styles/Typography";
 
const FeatureCards = () => {
  return (
    <section className="bg-white pb-16">
      <div className="max-w-8xl mx-10 px-4 sm:px-6 lg:px-4">
       
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <H2 className="text-[#007976] mb-4">Sed ut perspiciatis</H2>
          <P className="text-gray-600 text-sm">
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, su
          </P>
        </div>
 
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          {/* Card 1 - Left */}
          <div className="flex flex-col rounded-[2rem] overflow-hidden bg-[#F2F2F2]">
            <div className="p-8 pb-10">
              <div className="text-[#007976] text-4xl mb-6">＋</div>
              <H4 className="mb-3 text-black">Duis aute irure</H4>
              <P className="text-gray-600 leading-relaxed">
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
              </P>
            </div>
            {/* Image Section */}
            <div className="mt-auto h-72">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
 
          {/* Card 2 - Center (Highlighted with Teal Image) */}
          <div className="flex flex-col rounded-[2rem] overflow-hidden bg-[#F2F2F2] relative">
            {/* Arrow icon in top right corner */}
            <div className="absolute top-2 right-2 w-28 h-28 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 z-10">
              <img src="/Physician/CircleArrow.svg" alt="arrow"/>
            </div>
 
            {/* Teal Rectangle Image with text overlay */}
            <div className="relative p-8 pb-10">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-t-[2rem] overflow-hidden">
                <img
                  src="/Physician/TealRect.webp"
                  alt="Teal Background"
                  className="w-full h-full object-cover"
                />
              </div>
 
              {/* Text Content on top of image */}
              <div className="relative z-10">
                <div className="text-white text-4xl mb-6">＋</div>
                <H4 className="text-xl mb-3 text-white">Duis aute irure</H4>
                <P className="text-teal-50 leading-relaxed">
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
                </P>
              </div>
            </div>
           
            {/* Bottom Image Section */}
            <div className="mt-auto h-72">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                alt="Feature Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
 
          {/* Card 3 - Right */}
          <div className="flex flex-col rounded-[2rem] overflow-hidden bg-[#F2F2F2]">
            <div className="p-8 pb-10">
              <div className="text-[#007976] text-4xl mb-6">＋</div>
              <H4 className="font-bold text-xl mb-3 text-black">Duis aute irure</H4>
              <P className="text-xs text-gray-600 leading-relaxed">
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
              </P>
            </div>
            {/* Image Section */}
            <div className="mt-auto h-72">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default FeatureCards;