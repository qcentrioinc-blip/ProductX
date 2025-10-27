import { useState, useEffect, useRef } from "react";
import { H2, H3, P } from "../../../styles/Typography";
 
const CounterCard = ({
  number,
  suffix = "",
  title,
  description,
  dark,
}: {
  number: number;
  suffix?: string;
  title: string;
  description: string;
  dark?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
 
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);
 
    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(counter);
      } else {
        if (number % 1 !== 0) {
          setCount(parseFloat(start.toFixed(1)));
        } else {
          setCount(Math.floor(start));
        }
      }
    }, 16);
 
    return () => clearInterval(counter);
  }, [isVisible, number]);
 
  return (
    <div
      ref={ref}
      className={`rounded-lg shadow-md transition-all duration-300 p-4 sm:p-6 text-start cursor-pointer border-2 border-gray-200
        ${dark ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"}
      `}
    >
      {/* <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-2 sm:pt-4 font-bold text-blue-500">
        {count}
        {suffix}
      </h2> */}
      
      <H2 className="text-blue-500 pt-2 sm:pt-4"> 
        {count}
        {suffix}
      </H2>
      {/* <h3 className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 font-semibold text-sm sm:text-base">{title}</h3> */}
      <H3 className=" mt-8 sm:mt-10 md:mt-12 lg:mt-20 ">
        {title}
      </H3>
      {/* <p className="text-xs sm:text-sm">{description}</p> */}
      <P >
        {description}
      </P>
    </div>
  );
};
 
const Counter = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 px-4 ">
        {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Lorem ipsum dolor sit amet consectetur</h2> */}
        <H2>
          Lorem ipsum dolor sit amet consectetur
        </H2>
        {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Behind every number is a team achieving more — see how high-performing workflows,
          speed, and satisfaction come together.
        </p> */}
        <P className="text-black">
          Behind every number is a team achieving more — see how high-performing workflows,
          speed, and satisfaction come together.
        </P>
      </div>
      <div className="w-full max-w-9xl   mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-2 lg:gap-2 min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
          <CounterCard
            number={120}
            suffix="K+"
            title="Tasks Managed Weekly"
            description="Thousands of workflows run every single week."
            dark
          />
          <CounterCard
            number={98}
            suffix="%+"
            title="Task Completion Rate"
            description="Tasks are completed faster, with fewer delays."
            dark
          />
          <CounterCard
            number={4.9}
            title="User Satisfaction Score"
            description="Praised for speed, clarity, and collaboration."
            dark
          />
        </div>
      </div>
    </section>
  );
};
 
export default Counter;