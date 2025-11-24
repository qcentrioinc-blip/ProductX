import { useState } from "react";
import { H2, H4, P } from "../../../styles/Typography";

const Headquarters = () => {
  const locations = [
    {
      flagUrl: "/AboutUs/India.png",
      country: "India",
      city: "Hyderabad",
      image: "/AboutUs/Building.png",
      address: ["2-8- kjh kjugvs kjdhhcuio", "2-8- kjh kjugvs kjdhhcuio"],
      contact: ["+91 9876543210", "+91 9876543211"],
    },
    {
      flagUrl: "/AboutUs/America.png",
      country: "America",
      city: "Lewisville",
      image: "/AboutUs/Building1.jpg",
      address: ["21 NY Street, Lewisville", "Texas 75057"],
      contact: ["+1 987-654-3210", "+1 987-654-3211"],
    },
    {
      flagUrl: "/AboutUs/Australia.png",
      country: "Australia",
      city: "Sydney",
      image: "/AboutUs/Building2.jpg",
      address: ["45 Wallaby Road", "Sydney NSW 2000"],
      contact: ["+61 234-567-890", "+61 234-567-891"],
    },
    {
      flagUrl: "/AboutUs/Singapore.png",
      country: "Singapore",
      city: "Singapore",
      image: "/AboutUs/Building3.jpg",
      address: ["55 Marina Bay", "Singapore 018989"],
      contact: ["+65 9876-5432", "+65 9876-5433"],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-[#FFEFDD] px-4 md:py-20">
      <div className="max-w-8xl mx-auto">

        {/* ---------------- TOP ---------------- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 md:px-10 mb-10">
          <H2 className="font-bold text-[#0F6B4A] leading-tight">
            Sed ut perspiciatis Unde <br />
            spiciatis spiciatis
          </H2>

          <div className="mt-6 lg:mt-0 max-w-md text-right lg:text-left">
            <P className="text-gray-700 mb-4 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Duis aute irure.
            </P>

            <button
              className="mt-2 flex items-center gap-2 bg-black text-white 
              px-5 py-3 rounded-lg text-sm font-semibold shadow
              hover:bg-gray-900 transition"
            >
              SUBMIT APPLICATION
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10m0 0V7m0 10h10" />
              </svg> */}
            </button>
          </div>
        </div>

        {/* ---------------- MAIN RESPONSIVE CARD ---------------- */}
        <div className="bg-white rounded-2xl mx-4 md:mx-10 shadow-lg py-12 px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* LEFT – COUNTRIES */}
            <div className="w-full lg:w-[22%] space-y-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition 
                    ${active === index ? "bg-[#F0F0F0] shadow-sm" : "hover:bg-gray-50"}
                  `}
                >
                  <div className="w-16 h-12">
                    <img
                      src={location.flagUrl}
                      alt={`${location.country} flag`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <H4 className="font-semibold text-gray-900">{location.country}</H4>
                    <P className="text-gray-600">{location.city}</P>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER – IMAGE */}
            <div className="w-full lg:w-[56%] flex justify-center">
              <img
                src={locations[active].image}
                alt="Modern office building"
                className="w-full h-[300px] md:h-[380px] lg:h-[480px] object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* RIGHT – ADDRESS + CONTACT */}
            <div className="w-full lg:w-[22%] space-y-6 items-end">

              <div className="bg-[#F0F0F0] rounded-xl p-5 shadow-sm">
                <H4 className="font-bold text-gray-900 mb-4 text-lg">Address</H4>
                {locations[active].address.map((line, i) => (
                  <P key={i} className="text-gray-700">{line}</P>
                ))}
              </div>

              <div className="bg-[#F0F0F0] rounded-xl p-5 shadow-sm">
                <H4 className="font-bold text-gray-900 mb-4 text-lg">Contact</H4>
                {locations[active].contact.map((line, i) => (
                  <P key={i} className="text-gray-700">{line}</P>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Headquarters;
