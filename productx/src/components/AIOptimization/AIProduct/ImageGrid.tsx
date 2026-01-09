import { ArrowRight } from "lucide-react";
import { H2, H3, P } from "../../../styles/Typography";
import { motion } from "framer-motion";
 
import { easeOut } from "framer-motion";

 

type Item = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

const items: Item[] = [
  {
    title: "Simple Booking",
    description:
      "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
    image: "/ImageAI.png",
  },
  {
    title: "Simple Booking",
    description:
      "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
    image: "/ImageAI.png",
    reverse: true,
  },
  {
    title: "Simple Booking",
    description:
      "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
    image: "/ImageAI.png",
  },
];

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut
    },
  },
};

export default function ImageGrid() {
  return (
   <section className="relative max-w-8xl overflow-hidden">
  {/* Sticky Background */}
  

  {/* Foreground Content */}
  <div className="relative z-10">
    {/* Header */}
    <div className="flex flex-col items-center justify-center text-center ">
      <H2 className=" mb-6 text-[#020059]">
        Lorem ipsum dolor sit amet Lorem
      </H2>
      <P className="xl:mb-28  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum 
      </P>
    </div>

    {/* Content */}
    <div className="space-y-20 max-w-7xl mx-auto pb-32">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 gap-x-20"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`${item.reverse ? "md:order-2" : ""}`}
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className={`${item.reverse ? "md:order-1 max-w-md" : "max-w-md"}`}>
            <H3 className="mb-3">{item.title}</H3>
            <P className="mb-4 pt-6 tracking-wide leading-snug">{item.description}</P>
              <div className="flex mt-8 flex-row space-x-2 ">
            <P className=" font-bold">Discover More</P>
             <span><ArrowRight/></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
