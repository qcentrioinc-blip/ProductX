import { motion } from "framer-motion";
import { H2, H4, P } from "../../../styles/Typography";

import Image1 from "/Enterprise/Enterprise1.webp";
import Image2 from "/Enterprise/Enterprise2.webp";
import Image3 from "/Enterprise/Enterprise3.webp";
import Image4 from "/Enterprise/Enterprise4.webp";

const ENTERPRISES_DATA = [
  {
    id: 1,
    title: " Data Acquisition From Multiple Sources",
    description:
      "Consolidate data from bank statements, Excel, PDFs, CSV, and proprietary reports into a single repository. ",
    image: Image1,
    type: "tall",
  },
  {
    id: 2,
    title: "Data Enrichment And Rule Configuration",
    description:
      "Apply rule-based enrichment to extract attributes and link consolidated transactions for accurate matching. ",
    image: Image2,
    type: "normal",
  },
  {
    id: 3,
    title: "Automated Reconciliation With Matching Rules",
    description:
      "Execute configurable matching rules and sequences to automatically identify matched and unmatched items. ",
    image: Image3,
    type: "normal",
  },
  {
    id: 4,
    title: "Case Management And MIS Reporting ",
    description:
      "Investigate exceptions, force matches, and generate comprehensive reports with full audit trails. Track investigation status and resolution progress through collaborative workflows.",
    image: Image4,
    type: "wide",
  },
];

const Enterprises = () => {
  return (
    <section className="max-w-7xl xl:mx-auto  w-full text-black py-10 px-4 md:px-8 xl:px-0">
      {/* Heading */}
      <div className="max-w-4xl mx-4 lg:mx-10 xl:mx-0 text-left mb-16">
        <H2>
          How Conciliare Works:
          <br />
          <span className="text-[#2B68C3]">From Data to Decision</span>

        </H2>
      </div>

      {/* ============================= */}
      {/* DESKTOP GRID */}
      {/* ============================= */}
      <div className="hidden lg:grid grid-cols-3 gap-6 mx-10 xl:mx-0">
        {ENTERPRISES_DATA.map((card, index) => {
          // Tall Left Card
          if (card.type === "tall") {
            return (
              <div
                key={card.id}
                className="bg-white rounded-lg p-6 flex flex-col border border-gray-500 row-span-2"
              >
                <div>
                  <H4 className="pt-0 text-[#2B68C3]">
                    {card.title}
                  </H4>
                  <P className="pt-4">{card.description}</P>
                </div>

                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="mt-4 rounded-md object-cover w-full lg:h-[520px] xl:h-[650px]"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            );
          }

          // Wide Bottom Card
          if (card.type === "wide") {
            return (
              <div
                key={card.id}
                className="bg-white rounded-lg p-6 flex flex-col justify-between border border-gray-500 col-span-2"
              >
                <div>
                  <H4 className="pt-0 text-[#2B68C3]">
                    {card.title}
                  </H4>
                  <P className="pt-4">{card.description}</P>
                </div>

                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="mt-6 rounded-md object-cover w-full h-40 md:h-64 lg:h-48 xl:h-64"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>
            );
          }

          // Normal Cards
          return (
            <div
              key={card.id}
              className="bg-white rounded-lg p-6 flex flex-col justify-between border border-gray-500"
            >
              <div>
                <H4 className="pt-0 text-[#2B68C3]">
                  {card.title}
                </H4>
                <P className="pt-4">{card.description}</P>
              </div>

              <motion.img
                src={card.image}
                alt={card.title}
                className="mt-4 rounded-md object-cover w-full h-[150px]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          );
        })}
      </div>

      {/* ============================= */}
      {/* MOBILE + TABLET SLIDER */}
      {/* ============================= */}
      <div className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-4">
        {ENTERPRISES_DATA.map((card) => (
          <div
            key={card.id}
            className="min-w-[80%] bg-white rounded-lg p-4 snap-center"
          >
            <H4 className="pt-0 text-[#2B68C3]">
              {card.title}
            </H4>
            <P className="pt-2">{card.description}</P>

            <img
              src={card.image}
              alt={card.title}
              className="mt-4 rounded-md object-cover w-full h-[350px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Enterprises;