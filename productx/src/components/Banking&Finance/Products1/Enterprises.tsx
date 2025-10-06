import { motion } from "framer-motion";
import Image2 from "/Image2.jpg";
import Image3 from "/Image3.jpg";
import { H2, P, H3 } from "../../../styles/Typography";
const Enterprises = () => {
  return (
    <section className="bg-black  h-full w-screen text-white py-10  px-4 md:px-8">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <H2>Itaque earum rerum hic tenetur a sapiente delectus</H2>


        <P>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit.
        </P>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1  w-8xl md:grid-cols-2 lg:grid-cols-3 gap-6  mx-10">
        {/* First tall card */}
        <div className="bg-white  text-black rounded-lg p-4 flex flex-col  md:row-span-2">
          <div>
            <H3 >
              Banks werf erdcd sedrtg werft
            </H3>
            <P >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </P>
          </div>

          <motion.img
            src={Image2}
            alt="Enterprise 1"
            className="mt-2 rounded-md object-cover w-full h-96 md:h-[500px] "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        {/* Middle normal cards */}
        {[2, 3].map((i, index) => (
          <div
            key={i}
            className="bg-white text-black rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <H3>
                Banks werf erdcd sedrtg werft
              </H3>
              <P >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </P>
            </div>

            <motion.img
              src={Image3}
              alt={`Enterprise ${i}`}
              className="mt-6 rounded-md object-cover w-full h-40 md:h-48"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.2, // stagger effect
              }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
        ))}

        {/* Wide bottom card */}
        <div className="bg-white text-black rounded-lg p-6 flex flex-col justify-between md:col-span-2 lg:col-span-2">
          <div>
            <H3>
              Banks werf erdcd sedrtg werft
            </H3>
            <P>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </P>
          </div>

          <motion.img
            src={Image3}
            alt="Enterprise 4"
            className="mt-6 rounded-md object-cover w-full h-40 md:h-64"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>


    </section>
  );
};

export default Enterprises;
