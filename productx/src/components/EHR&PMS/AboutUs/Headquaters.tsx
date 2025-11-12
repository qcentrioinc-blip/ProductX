import { H2, H4,P } from "../../../styles/Typography";

 
const Headquarters = () => {
  const locations = [
    {
      flagUrl: '/AboutUs/India.png',
      country: 'India',
      city: 'Hyderabad'
    },
    {
      flagUrl: '/AboutUs/America.png',    
      country: 'America',
      city: 'Lewisville'
    },
    {
      flagUrl: '/AboutUs/Australia.png',
      country: 'Australia',
      city: 'Hyderabad'
    },
    {
      flagUrl: '/AboutUs/Singapore.png',
      country: 'Singapore',
      city: 'Hyderabad'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFEFDD] px-4 md:py-12">
      <div className="max-w-8xl h-full mx-10">
        {/* Header */}
        <H2 className="    px-10 md:px-2 py-6 md:py-8  font-bold text-[#0F6B4A] mb-8 ">
          Sed ut perspiciatis Unde<br />spiciatis spiciatis
        </H2>

        {/* Main Content Container */}
        <div className="bg-white rounded-2xl mx-10 shadow-lg  py-16 px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Locations */}
            <div className="space-y-24">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 h-12 flex-shrink-0">
                    <img 
                      src={location.flagUrl} 
                      alt={`${location.country} flag`}
                      className="w-full h-full object-cover rounded shadow-sm"
                    />
                  </div>
                  <div>
                    <H4 className="font-semibold text-lg text-gray-900">
                      {location.country}
                    </H4>
                    <P className="text-gray-600">{location.city}</P>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Section - Building Image */}
            <div className=" ">
              <img
                src="/AboutUs/Building.png"
                alt="Modern office building"
                className="w-ful  h-96 lg:h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right Section - Address & Contact */}
            <div className="space-y-8 lg:mt-40">
              {/* Address Card */}
              <div className="bg-gray-50  w-[300px] rounded-lg p-8 h-[150px]">
                <H4 className="font-bold text-xl text-gray-900 mb-4">Address</H4>
                <div className="space-y-2 text-gray-700">
                  <P>2-8- kjh kjugvs kjdhhcuio</P>
                  <P>2-8- kjh kjugvs kjdhhcuio</P>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 w-[300px] rounded-lg p-8 h-[150px]">
                <H4 className="font-bold text-xl text-gray-900 mb-4">Contact</H4>
                <div className="space-y-2 text-gray-700">
                  <P>2-8- kjh kjugvs kjdhhcuio</P>
                  <P>2-8- kjh kjugvs kjdhhcuio</P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headquarters;