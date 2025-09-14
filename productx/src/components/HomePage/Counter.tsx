import { useState, useEffect, useRef } from "react";

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
      className={`rounded-lg shadow-md transition-all duration-300 p-6 text-start cursor-pointer border-2 border-gray-200
        ${dark ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"}
      `}
    >
      <h2 className="text-7xl pt-4 font-bold text-blue-500">
        {count}
        {suffix}
      </h2>
      <h3 className="mt-32 font-semibold">{title}</h3>
      <p className="text-sm ">{description}</p>
    </div>
  );
};

const Counter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-bold">Lorem ipsum dolor sit amet consectetur</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Behind every number is a team achieving more — see how high-performing workflows,
          speed, and satisfaction come together.
        </p>
      </div>

      <div className="  w-[1359px] mx-auto  ">
        <div className=" h-[280px] gap-x-2  grid grid-cols-1  mx-auto  md:grid-cols-3">
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
