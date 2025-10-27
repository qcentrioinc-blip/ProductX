import Image1 from "/AML/image74.png";
import { H3,H4, P } from "../../../styles/Typography";

const Banks = () => {
  return (
  <div className="relative w-full min-h-screen pt-12 py-20 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
  {/* Background image layer with low opacity */}
  <div className="absolute inset-0 bg-[url('/UpscaleImage.png')] bg-cover bg-center bg-no-repeat opacity-40"></div>

  {/* Main content above the background */}
  <div className="relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      
      {/* Left section */}
      <div className="lg:sticky sm:mb-10 md:mb-0 lg:top-20 lg:pt-24 self-start h-fit">
        <div className="bg-white border-2 h-full lg:w-96 sm:mb-10 lg:mb-0 border-gray-200 shadow-lg rounded-md overflow-hidden p-6">
          <img
            src={Image1}
            alt="Profile"
            className="w-full h-52 object-cover rounded-md"
          />
          <div className="lg:mt-10 mt-4">
            <H3 className="font-semibold">Duis aute irure dolor in</H3>
            <P className="mt-4 text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </P>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex lg:pt-24 flex-col gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white mt-4 shadow rounded-lg p-6 border-gray-200 border-2"
          >
            <H4 className="mb-6 lg:mb-10 font-semibold">Banks</H4>
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
</div>

  );
};

export default Banks;
