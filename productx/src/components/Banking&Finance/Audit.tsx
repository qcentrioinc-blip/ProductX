import { H2, H3 ,P} from "../../styles/Typography";
 
 
const Audit = () => {
  const auditItems = [
    {
      id: 1,
      title: 'Audit',
      description: "Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap."
    },
    {
      id: 2,
      title: 'Audit',
      description: "Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap."
    },
    {
      id: 3,
      title: 'Audit',
      description: "Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap."
    }
  ];
 
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="  mx-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <H2 className=" font-bold leading-tight">
            <span className="text-[#2B68C3]">Lorem ipsum dolor sit amet,</span>
            <br />
            <span className="text-[#666666]">consectetur adipiscing elit</span>
          </H2>
        </div>
 
        {/* Main Image with minimal padding */}
        <div className="mb-8 md:mb-8 -mx-2 sm:-mx-3">
          <img
            src="/Audit.png"
            alt="Team collaboration"
            className="w-full md:h-[500px] h-[300px] rounded-lg object-cover"
          />
        </div>
 
        {/* Audit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {auditItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col"
            >
              {/* Title */}
              <H3 className=" font-bold text-[#2B68C3] mb-3 md:mb-4">
                {item.title}
              </H3>
 
              {/* Description */}
              <P className="  text-[#666666] leading-tight">
                {item.description}
              </P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Audit;