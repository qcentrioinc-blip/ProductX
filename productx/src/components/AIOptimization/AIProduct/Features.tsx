import { motion } from "framer-motion";
import { H2 } from "../../../styles/Typography";

const features = [
  {
    title: "Digital Cam",
    description: "Empower students with personalised services.",
    image: "/AIProduct/Feature.png",
    points: [
      "Automate workflows and eliminate manual tasks",
      "Ease onboarding and reduce the administrative burden",
      "Connected community from admission to alumni network",
      "Integrate siloed systems with SIS and optimize campus interactions",
    ],
  },
  {
    title: "Digital Cam",
    description: "Empower students with personalised services.",
    image: "/AIProduct/Feature.png",
    points: [
      "Automate workflows and eliminate manual tasks",
      "Ease onboarding and reduce the administrative burden",
      "Connected community from admission to alumni network",
      "Integrate siloed systems with SIS and optimize campus interactions",
    ],
  },
];

export default function FeatureCards() {
return (
    <section className="w-full bg-black py-16">
      <div className="lg:mx-10 grid max-w-8xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="xl:flex-row flex flex-col gap-10">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-[250px] flex-shrink-0 rounded-sm object-cover"
              />

              {/* Title and Description */}
              <div className="space-y-2">
                <H2 className="inline-block border-b-4 border-[#5551FF]   text-xl font-semibold text-white">
                  {item.title}
                </H2>
                <p className="mt-2 text-[28px] font-quicksand text-sm text-[#F5F5F5]">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bullet Points Below */}
            <ul className="space-y-2 text-sm items-center text-[#F5F5F5]">
              {item.points.map((point, i) => (
                <li key={i} className="flex  items-center font-quicksand lg:text-lg ">
                  <span className=" h-1.5 w-1.5  mx-2 rounded-full bg-[#F5F5F5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
