import { H2, H3, H4, P,  } from "../../../styles/Typography";
 
type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image:string;
};
 
type FeaturesEHRProps = {
  content: {
    cardTitle: string;
    cardDescription: string;
    heading: string;
   
    features: FeatureItem[];
 
  };
};
 
const FeaturesEHR = ({content}:FeaturesEHRProps) => {
 
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl xl:mx-10 ">
        {/* Main Container with Border */}
        <div className="border-2 border-[#166D48] rounded-3xl p-6 md:p-10 lg:p-10 xl:p-12">
         
          {/* Top Section - Card and Heading */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 mb-12">
           
            {/* Left Card with Curved Corner */}
            <div className="relative w-full lg:w-auto lg:flex-shrink-0">
              <div className="relative  w-full ">
               
                  <img src="/Physician/TealRect.webp" alt="ehr and pms" className="xl:h-66"/>
                {/* Arrow icon in the curved corner */}
                <div className="absolute top-2 right-2 w-28 h-28   rounded-full  flex items-center justify-center  hover:scale-110 transition-transform duration-300">
                  <img src="/Physician/CircleArrow.svg" alt="arrow"/>
                </div>
 
                {/* Card Content */}
                <div className="p-2 absolute top-8 z-10 md:p-6">
                 <H3 className="text-white mb-10 inline-block border-b-2 border-white pb-2">
  {content.cardTitle}
</H3>
 
                 <P className="text-white leading-relaxed">
  {content.cardDescription}
</P>
 
                </div>
              </div>
            </div>
 
            {/* Right Heading */}
            <div className="flex-1 text-left xl:text-right">
              <H2 className="text-[#008280] leading-tight whitespace-pre-line">
  {content.heading}
</H2>
 
            </div>
          </div>
 
          {/* Bottom Section - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
           {content.features.map((feature) => (
 
              <div key={feature.id} className="flex flex-col">
                {/* Icon Circle */}
                <img className="w-12 h-12 md:w-16 md:h-16 overflow-visible   mb-4  " src={feature.image}/>
                
                {/* Title */}
                <H4  className="  mb-2">
                  {feature.title}
                </H4    >
               
                {/* Description */}
                <P className=" text-sm leading-relaxed">
                  {feature.description}
                </P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default FeaturesEHR;
 