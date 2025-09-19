import { useState, useEffect } from 'react';
import { H2 } from '../../styles/Typography';

const testimonials = [
  {
    id: 1,
    text: "Cadence completely changed how I work. I get more done in less time without feeling overwhelmed.",
    name: "Emily R.",
    title: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 2,
    text: "Cadence helped me bring my solo SaaS idea to life in record time. The structure is clean, the flow is intuitive, and the messaging just works.",
    name: "Mina K.",
    title: "Founder at Taskpilot",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 3,
    text: "The workflow automation features saved me countless hours every week. It's like having a personal assistant.",
    name: "David L.",
    title: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 4,
    text: "I've tried many productivity tools, but Cadence is the first one that actually stuck. The interface is beautiful and intuitive.",
    name: "Sarah M.",
    title: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 5,
    text: "Cadence transformed our team's collaboration. Projects that used to take weeks now get done in days.",
    name: "James T.",
    title: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 6,
    text: "I've tried many productivity tools, but Cadence is the first one that actually stuck. The interface is beautiful and intuitive.",
    name: "Sarah M.",
    title: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardWidth = 448;
  const mobileCardWidth = 370;
  const gap = 24;
  const mobileGap = 16;
  
  // Get responsive values based on screen size
  const getResponsiveValues = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return {
        cardWidth: mobileCardWidth,
        gap: mobileGap,
        visibleCards: 1
      };
    }
    return {
      cardWidth: cardWidth,
      gap: gap,
      visibleCards: 3
    };
  };

  const { cardWidth: currentCardWidth, gap: currentGap, visibleCards } = getResponsiveValues();
  const totalCardWidth = currentCardWidth + currentGap;
  const maxIndex = testimonials.length - visibleCards;

  const nextSlide = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const translateX = -currentIndex * totalCardWidth;

  return (
    <div className="w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 sm:py-12 md:py-16">
      <div className="w-full px-4 sm:px-6">
        {/* <h2 className='text-center text-3xl sm:text-4xl md:text-5xl pb-4 sm:pb-6 font-bold'>
      <div className="w-full">
        <h2 className='text-center text-3xl sm:text-4xl md:text-5xl pb-4 sm:pb-6 font-bold'>
          What Clients Say
        </h2> */}
        <H2 className='text-center pb-4 sm:pb-6 text-black'>
          What Clients Say
        </H2>


        <div className="relative w-full flex justify-center">

         <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-l from-transparent via-white/60  to-white z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-32   bg-gradient-to-r from-transparent via-white/60  to-white z-10 pointer-events-none"></div>

   


          {/* Left Chevron */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0 || isAnimating}
            className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '16px',
              borderWidth: '0.5px',
              padding: '6px',
              left: '8px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right chevron */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex || isAnimating}
            className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '16px',
              borderWidth: '0.5px',
              padding: '6px',
              right: '8px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Desktop Carousel Container - Shows 3 cards */}
          <div
            className="hidden md:block overflow-hidden  relative"
            style={{
              width: `${3 * cardWidth + 2 * gap}px`,
              height: '200px',
            }}
          >

       
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${translateX}px)`,
                gap: `${gap}px`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 bg-black text-white rounded-lg"
                  style={{
                    width: `${cardWidth}px`,
                    height: '200px',
                    borderRadius: '16px',
                    paddingTop: '24px',
                    paddingRight: '32px',
                    paddingBottom: '24px',
                    paddingLeft: '32px'
                  }}
                >
                  <div
                    className="flex flex-col justify-between h-full"
                    style={{
                      width: '383px',
                      height: '144px',
                      gap: '56px'
                    }}
                  >
                    <p className="text-white text-lg leading-relaxed flex-1">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Container - Shows 1 card */}
          <div
            className="md:hidden overflow-hidden relative w-full max-w-sm"
            style={{
              height: '240px',
            }}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${translateX}px)`,
                gap: `${mobileGap}px`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 bg-black text-white rounded-lg mx-2"
                  style={{
                    width: `${mobileCardWidth}px`,
                    height: '220px',
                    borderRadius: '12px',
                    padding: '20px'
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-white text-sm sm:text-base leading-relaxed flex-1 mb-4">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-white font-semibold text-xs sm:text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-300 text-xs sm:text-sm">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Pagination Dots */}
          <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-black w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                } ${isAnimating ? "cursor-not-allowed" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
