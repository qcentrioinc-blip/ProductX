import { H2 } from "../../../styles/Typography";

 
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
    <div className="min-h-screen bg-[#FFEFDD] md:p-12">
      <div className="max-w-7xl h-full mx-auto">
        {/* Header */}
        <H2 className="  md:text-4xl px-10 md:px-2 py-6 md:py-8 lg:text-5xl font-bold text-[#0F6B4A] mb-8 ">
          Sed ut perspiciatis Unde<br />spiciatis spiciatis
        </H2>

        {/* Main Content Container */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Locations */}
            <div className="space-y-16">
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
                    <h3 className="font-semibold text-lg text-gray-900">
                      {location.country}
                    </h3>
                    <p className="text-gray-600">{location.city}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Section - Building Image */}
            <div className="lg:col-span-1">
              <img
                src="/AboutUs/Building.png"
                alt="Modern office building"
                className="w-full   h-96 lg:h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right Section - Address & Contact */}
            <div className="space-y-8 lg:pt-32">
              {/* Address Card */}
              <div className="bg-gray-50 rounded-lg p-8 min-h-[160px]">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Address</h3>
                <div className="space-y-2 text-gray-700">
                  <p>2-8- kjh kjugvs kjdhhcuio</p>
                  <p>2-8- kjh kjugvs kjdhhcuio</p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 rounded-lg p-8 min-h-[160px]">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p>2-8- kjh kjugvs kjdhhcuio</p>
                  <p>2-8- kjh kjugvs kjdhhcuio</p>
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