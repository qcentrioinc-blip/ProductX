import { H2, H4, P } from '../../../styles/Typography';


interface Testimonial {
  company: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    company: "ShareChat",
    logo: "/AIProduct/ShareChat.png",
    quote:
      " CloudDIET identified over $3.8M in annual optimizations beyond our Reserved Instances. Their engineering approach is a game-changer for cloud financial management.",
    name: "David Chen ",
    role: "Director of Cloud Operations",
     
  },
  {
    company: "ShareChat",
    logo: "/AIProduct/ShareChat.png",
    quote:
      "The platform's deep profiling caught misconfigurations our internal team missed. We achieved 30% savings without impacting performance. Highly recommended.",
    name: " Sarah Mitchell",
    role: "VP of Engineering",
     
  },
  {
    company: "ShareChat",
    logo: "/AIProduct/ShareChat.png",
    quote:
      "Their read-only, no-data-access model gave us confidence. The pay-for-performance pricing meant we only paid after seeing real results. ",
    name: "Marc Johnson",
    role: "CTO",
   
  },
];
interface MobileTestimonialSliderProps {
  testimonials: Testimonial[];
}

// const testimonials = [
//   {
//     company: "ShareChat",
//     logo: "/AIProduct/ShareChat.png",
//     quote: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.We onboard users from",
//     name: "ABCDEF",
//     role: "Director of Cloud Platform"
//   },
//   {
//     company: "ShareChat",
//     logo: "/AIProduct/ShareChat.png",
//     quote: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.We onboard users from",
//     name: "ABCDEF",
//     role: "Director of Cloud Platform"
//   },
//   {
//     company: "ShareChat",
//     logo: "/AIProduct/ShareChat.png",
//     quote: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.We onboard users from",
//     name: "ABCDEF",
//     role: "Director of Cloud Platform"
//   }
// ];
import { useState, useEffect } from 'react';
function MobileTestimonialSlider({
  testimonials,
}: MobileTestimonialSliderProps) {
 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500); // auto-slide speed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
         aria-live="polite"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="min-w-full   flex justify-center"
          >
            <div className="relative py-14 w-full max-w-md">
              {/* White Card */}
              <div className="bg-white md:h-[450px] rounded-lg p-8 pb-20 shadow-md text-center">
                {/* Quote Icon */}
                <div className="flex mt-10 justify-center mb-8">
                  <img
                    src="/AIProduct/Quotes.png"
                    alt="Quote"
                    className="w-14 h-10"
                  />
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="h-12 object-contain"
                  />
                </div>

                {/* Quote */}
                <P className="text-[#2A2A2A] leading-relaxed">
                  {testimonial.quote}
                </P>
              </div>

              {/* Avatar */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-28">
                <div className="w-20 h-20 rounded-full bg-gray-300 shadow-lg" />
              </div>

              {/* Name & Role */}
              <div className="mt-14 text-center text-white">
                <H4 className="font-bold mb-1">
                  {testimonial.name}
                </H4>
                <P className="text-sm  text-white font-quicksand">
               {testimonial.role}
                </P>
                <P>{testimonial.company}</P>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 ">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default function Testimonial() {
  return (
    <section className="w-full bg-gradient-to-br from-[#3532fd] via-[#4f49f8] to-[#7e7aef] py-16 px-6">
      <div className="max-w-8xl lg:mx-10">
        {/* Title */}
        <H2 className="text-white font-bold  xl:text-center text-left mb-12">
         Massive Savings 
        </H2>

        {/* Testimonial Cards */}
        <div className=" hidden xl:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 ">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="relative pb-12">
              {/* White Card */}
              <div className="bg-white rounded-lg  h-[70vh]  lg:h-[85vh] w-[29vw] p-8 pb-20 shadow-sm flex flex-col  text-center">
                {/* Stylish Green Quote Marks */}
                <div className="relative mb-6 items-center flex justify-center"> 
                  <img  src="/AIProduct/Quotes.png" alt="Quote Mark" className="  my-12 left-0 w-16 h-12"/>
                </div>

                {/* Company Logo and Name */}
                <div className="flex flex-col items-center gap-3 mb-10">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company} 
                    className="h-14 object-contain" 
                  />
                </div>

                {/* Quote Text */}
                <P className="text-[#2A2A2A] leading-relaxed   tracking-wider px-6">
                  {testimonial.quote}
                </P>
              </div>

              {/* Overlapping Circle Avatar - attached to bottom of card */}
              <div className="absolute left-1/2 -translate-x-1/2   transform -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-gray-300 shadow-lg"></div>
              </div>

              {/* Name and Role (positioned below the circle) */}
              <div className="text-center mt-16  text-white">
                <H4 className="font-bold mb-2">{testimonial.name}</H4>
                <p className="text-lg font-quicksand">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="block xl:hidden overflow-hidden relative">
  <MobileTestimonialSlider testimonials={testimonials} />
</div>

      </div>
      
    </section>
  );
}

