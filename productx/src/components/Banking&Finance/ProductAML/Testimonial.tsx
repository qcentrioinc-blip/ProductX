import { useState, useEffect } from 'react';
import { H2,H3,P } from '../../../styles/Typography';
export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 2,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 3,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 4,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 5,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 6,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 7,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className=" bg-white py-20 px-2">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <H2>
            Lorem ipsum dolor, consectetur adipis
          </H2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative overflow-hidden mb-10">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{
              transform: `translateX(-${currentIndex * 28}%)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-1"
                style={{ width: 'calc(33.333% - 11px)' }}
              >
                <div className="bg-gray-200 rounded-lg  p-6 h-[200px] w-[400px]">
                  {/* Avatar */}
                  <div className="flex justify-start mb-4">
                 
                      <div className="w-10 h-10 rounded-full bg-white"></div>
                    
                  </div>

                  {/* Name */}
                  <H3 className=" mb-2">
                    {testimonial.name}
                  </H3>

                  {/* Text */}
                  <P className=" leading-relaxed">
                    {testimonial.text}
                  </P>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}