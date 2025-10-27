import { H1, H2 } from "../../styles/Typography";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface TestimonialItem {
  title: string;
  text: string;
}

const testimonials: TestimonialItem[] = [
  {
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-white text-black py-20 px-6 md:px-16">
      <H1 className="mb-10 lg:mb-20">Sed ut perspiciatis</H1>

      <div className="grid px-10 gap-10 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <AnimatedCard key={index} item={item} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

interface AnimatedCardProps {
  item: TestimonialItem;
  delay: number;
}

const AnimatedCard = ({ item, delay }: AnimatedCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      className="text-center md:text-left"
    >
      <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto md:mx-0 mb-4"></div>
      <H2 className="mb-4 lg:mb-8">{item.title}</H2>
      <p className="text-gray-600 text-sm leading-normal">{item.text}</p>
    </motion.div>
  );
};

export default Testimonial;
