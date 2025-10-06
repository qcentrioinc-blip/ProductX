import { H1,P } from "../../../styles/Typography";
import Image1 from "/ProductDetailsThree/image67.png"
const HeroSection = () => {
  return (
    <section className="relative w-screen bg-white pt-32 pb-10 px-4 text-center">
      {/* Text Content */}
      <div className="max-w-3xl mx-auto">
        <H1 className=" text-gray-900">
          Lorem ipsum dolor , <br /> consectetur adipiscing elit
        </H1>
        <P className=" text-gray-600 mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit.
        </P>
        <button className="mt-2 px-6 py-2 bg-black text-white rounded-md ">
          BOOK A DEMO 
        </button>
      </div>

       <div className="relative max-w-8xl mx-auto mt-6 flex justify-center items-center">
             
                <img
                    src={Image1}
                    alt="Left"
                    className="w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-lg lg:h-80  rounded-lg shadow-md absolute left-1/2 -translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
                />

              
                <img
                    src={Image1}
                    alt="Center"
                    className="w-36 h-36 sm:w-52 sm:h-52 md:w-80  md:h-64 lg:w-2xl lg:h-96 rounded-lg shadow-2xl relative z-10"
                />

               
                <img
                    src={Image1}
                    alt="Right"
                    className="w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-lg lg:h-80 rounded-lg shadow-md absolute right-1/2 translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
                />
        </div>


    </section>
  );
};

export default HeroSection;
