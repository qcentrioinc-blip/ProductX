import { useState, useEffect, useRef } from 'react';
import { H2, P } from '../../../styles/Typography';
import { useLocation } from "react-router-dom";
const testimonials = [
  {
    id: 1,
    text: "Cadence completely changed how I work. I get more done in less time without feeling overwhelmed.",
    name: "Emily R.",
    title: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 2,
    text: "Cadence helped me bring my solo SaaS idea to life in record time. The structure is clean, the flow is intuitive, and the messaging just works.",
    name: "Mina K.",
    title: "Founder at Taskpilot",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 3,
    text: "The workflow automation features saved me countless hours every week. It's like having a personal assistant.",
    name: "David L.",
    title: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 4,
    text: "I've tried many productivity tools, but Cadence is the first one that actually stuck. The interface is beautiful and intuitive.",
    name: "Sarah M.",
    title: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 5,
    text: "Cadence transformed our team's collaboration. Projects that used to take weeks now get done in days.",
    name: "James T.",
    title: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face%22%22"
  },
  {
    id: 6,
    text: "The best part about Cadence is how customizable it is. I tailored it to fit my exact workflow and it works like a charm.",
    name: "James A.",
    title: "Managing Director",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face%22%22" 
  }
];
 
const Testimonial = () => {
  const location = useLocation();
const isBankingPage = location.pathname === "/industries/banking-and-finance";

const cardBg = isBankingPage ? "#ACCAEF" : "#000"; 
const textColor = isBankingPage ? "#000" : "#fff";


  const [currentIndex, setCurrentIndex] = useState(1); // start at first real slide
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(448);
  const [gap, setGap] = useState(24);
  // const [gradientWidth, setGradientWidth] = useState(72);
  const trackRef = useRef<HTMLDivElement>(null);
 
  const clonedSlides = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];
 
  const updateResponsive = () => {
    if (window.innerWidth < 640) {
      setVisibleCards(1);
      setCardWidth(window.innerWidth - 32); // full width minus padding
      setGap(16);
      // setGradientWidth(28);
    } else if (window.innerWidth < 1024) {
      setVisibleCards(2);
      setCardWidth((window.innerWidth - 64 - 20) / 2); // two cards minus total padding & gap
      setGap(20);
      // setGradientWidth(38);
    } else {
      setVisibleCards(3);
      setCardWidth((window.innerWidth - 96 - 48) / 3); // three cards minus total padding & gaps
      setGap(24);
      // setGradientWidth(50);
    }
  };
 
  useEffect(() => {
    updateResponsive();
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, []);
 
  const totalCardWidth = cardWidth + gap;
 
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev + 1);
  };
 
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev - 1);
  };
 
  useEffect(() => {
    if (!isAnimating) return;
 
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (currentIndex === clonedSlides.length - 1) {
        setCurrentIndex(1);
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(${-totalCardWidth * 1}px)`;
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = 'transform 0.3s ease-in-out';
        }
      } else if (currentIndex === 0) {
        setCurrentIndex(clonedSlides.length - 2);
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(${-totalCardWidth * (clonedSlides.length - 2)}px)`;
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = 'transform 0.3s ease-in-out';
        }
      }
    }, 300);
 
    return () => clearTimeout(timer);
  }, [currentIndex, totalCardWidth, clonedSlides.length, isAnimating]);
 
  const translateX = -currentIndex * totalCardWidth;
 
  return (
    <div className="w-full relative py-8 sm:py-12 md:py-16">
      <div className="w-full px-4 sm:px-6">
        <H2 className='text-center pb-4 sm:pb-8 text-black'>Sed ut perspiciatis unde</H2>
        <div className="relative w-full flex justify-center items-center">
          {/* Left Gradient */}
          {/* <div className="absolute left-0 top-0 h-full w-10 bg-linear-to-l from-transparent via-white/50 to-white z-10 pointer-events-none"
          style={{ width: `${gradientWidth}px` }}
          ></div> */}
          {/* Right Gradient */}
          {/* <div className="absolute right-0 top-0 h-full w-10 bg-linear-to-r from-transparent via-white/50 to-white z-10 pointer-events-none"
          style={{ width: `${gradientWidth}px` }}
          ></div> */}
          {/* Left Chevron */}
          <button
  onClick={prevSlide}
  disabled={isAnimating}
  className="absolute top-1/2 transform -translate-y-1/2 z-20 
             rounded-full flex items-center justify-start 
             shadow-md hover:shadow-lg transition-shadow 
             border border-gray-400 bg-[#F5F5F5]"
  style={{
    width: "44px",
    height: "44px",
    left: "0px",
    padding: "6px",
  }}
>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-black"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>


          {/* Right Chevron */}
          <button
  onClick={nextSlide}
  disabled={isAnimating}
  className="absolute top-1/2 transform -translate-y-1/2 z-20 
             rounded-full flex items-center justify-end 
             shadow-md hover:shadow-lg transition-shadow 
             border border-gray-400 bg-[#F5F5F5]"
  style={{
    width: "44px",
    height: "44px",
    right: "0px",
    padding: "6px",
  }}
>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-black"
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>


          {/* Carousel Track */}
          <div className="overflow-hidden w-full" style={{ maxWidth: `${visibleCards * cardWidth + (visibleCards - 1) * gap}px` }}>
            <div
              ref={trackRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${translateX}px)`, gap: `${gap}px` }}
            >
              {clonedSlides.map((testimonial, idx) => (
                <div key={idx} className="flex shrink-0 bg-[#ACCAEF]  rounded-lg" style={{
                  width: `${cardWidth}px`,
                  height: '200px',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  backgroundColor: cardBg,
                  color: textColor,
                }}>
                  <div className="flex flex-col justify-between h-full">
                    <P  style={{ color: textColor }} className="  text-lg leading-relaxed flex-1">"{testimonial.text}"</P>
                    <div className="flex items-center gap-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover"/>
                      <div>
                         <div style={{ color: textColor }} className="text-sm">{testimonial.name}</div>
                        <div style={{ color: textColor }} className="text-sm">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};
 
export default Testimonial;
