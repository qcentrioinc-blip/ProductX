import { motion } from "framer-motion";

import { H2, H4, P } from "../../../styles/Typography";
import Image1 from "/Enterprise/Enterprise1.png";
import Image2 from "/Enterprise/Enterprise2.png";

import Image3 from "/Enterprise/Enterprise3.png";

import Image4 from "/Enterprise/Enterprise4.png";

const Enterprises = () => {
  return (
    <section className="bg-[#F5F5F5] h-full w-full text-black py-10 px-4 md:px-8">

      {/* Heading */}
      <div className="max-w-4xl mx-4 lg:mx-10 text-left mb-16">
        <H2>Itaque earum rerum hic
          <br />
          <span className="text-[#2B68C3]">tenetur a sapiente </span>
          delectus</H2>

      </div>

      {/* ------------------------- */}
      {/* DESKTOP GRID */}
      {/* ------------------------- */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">

        {/* Tall Left Card */}
        <div className="bg-white text-black gap-4 rounded-lg p-6 flex flex-col md:row-span-2 border border-gray-500">
          <div >
            <H4 className="pt-0 text-[#2B68C3]">Banks werf erdcd sedrtg werft</H4>
            <P className="pt-4 ">
              Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.
            </P>
          </div>

          <motion.img
            src={Image1}
            alt="Enterprise 1"
            className=" mt-2 rounded-md object-cover w-full lg:h-[520px] xl:h-[650px]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Middle Cards */}
        {[2, 3].map((i, index) => (
          <div key={i} className="bg-white text-black rounded-lg p-6 flex flex-col justify-between border border-gray-500">
            <div>
              <H4 className="pt-0 text-[#2B68C3]">Banks werf erdcd sedrtg werft</H4>
              <P className="pt-4 ">
                Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.
              </P>
            </div>

            <motion.img
              src="/StarLine.svg"
              alt={`Enterprise ${i}`}
              className="mt-6 rounded-md object-cover w-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        ))}

        {/* Bottom Wide Card */}
        <div className="bg-white text-black rounded-lg p-6 flex flex-col justify-between md:col-span-2 lg:col-span-2 border border-gray-500">
          <div>
            <H4 className="pt-0 text-[#2B68C3]">Banks werf erdcd sedrtg werft</H4>
            <P className="pt-4 ">
              Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.
            </P>
          </div>

          <motion.img
            src={Image2}
            alt="Enterprise 4"
            className="mt-6 rounded-md object-cover w-full h-40 md:h-64 lg:h-48 xl:h-64"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* ------------------------- */}
      {/* MOBILE + TABLET SLIDER */}
      {/* ------------------------- */}
      <div className="lg:hidden flex gap-6 overflow-x-auto snap-x h-[500px] snap-mandatory px-4 pb-4">

        {/* Slider Card 1 */}
        <div className="min-w-[80%] bg-white  text-black rounded-lg p-4 snap-center">
          <H4 className="pt-0 text-[#2B68C3]">Banks werf erdcd sedrtg werft</H4>
          <P className="pt-2 ">
            Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.
          </P>
          <img
            src={Image1}
            className="mt-4 rounded-md object-cover w-full h-[350px]"
          />
        </div>

        {/* Slider Card 2 */}
        <div className="min-w-[80%] bg-white text-black rounded-lg p-4 snap-center">
          <H4 className="pt-0 text-[#2B68C3]">Banks werf erdcd sedrtg werft</H4>
          <P className="pt-2 ">
            Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.
          </P>
          <img
            src={Image2}
            className="mt-4 rounded-md object-cover w-full h-[350px]"
          />
        </div>

        {/* Slider Card 3 */}
        <div className="min-w-[80%] bg-white text-black rounded-lg p-4 snap-center">
          <H4 className="pt-0 text-[#2B68C3]">Banks werf erdcd sedrtg werft</H4>
          <P className="pt-2 ">
            Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.
          </P>
          <img
            src={Image3}
            className="mt-4 rounded-md object-cover w-full h-[350px]"
          />
        </div>

        {/* Slider Card 4 */}
        <div className="min-w-[80%] bg-white text-black rounded-lg p-4 snap-center">
          <H4 className="pt-0 text-[#2B68C3]">Banks werf erdcd sedrtg werft</H4>
          <P className="pt-2 ">
            Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.
          </P>
          <img
            src={Image4}
            className="mt-4 rounded-md object-cover w-full h-[350px]"
          />
        </div>
      </div>

    </section>
  );
};

export default Enterprises;
