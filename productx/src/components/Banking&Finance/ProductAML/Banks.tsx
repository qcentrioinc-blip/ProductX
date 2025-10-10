import Image1 from "/AML/image73.png";
import { H3, P } from "../../../styles/Typography";

const Banks = () => {
  return (
   <div className="w-full bg-gray-700 min-h-screen pb-20  px-6 sm:px-12 md:px-16  lg:px-20 xl:px-28 relative z-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Sticky Image Card */}
        <div className="lg:sticky lg:top-24 lg:pt-24 self-start h-fit">
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <img
              src={Image1}
              alt="Profile"
              className="w-full h-60 object-cover rounded-md"
            />
            <div className="mt-4">
              <H3 className="text-lg font-semibold">
                Duis aute irure dolor in
              </H3>
              <P className="mt-2 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </P>
            </div>
          </div>
        </div>

        {/* Right Scrollable Section */}
        <div className="flex lg:pt-24 flex-col gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white shadow rounded-lg p-6 border"
            >
              <h4 className="text-xl font-semibold">Banks</h4>
              <P className="mt-2 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa Excepteur sint occaecat
                cupidatat non proident, sunt in culpa
              </P>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banks;
