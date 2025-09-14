import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Cadence completely changed how I work. I get more done in less time without feeling overwhelmed.",
    name: "Emily R.",
    title: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c647?w=40&h=40&fit=crop&crop=face"
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

  
  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  const cardWidth = 448; 
  const gap = 24;
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
    const timer = setTimeout(() => {
      setIsAnimating(false);
      
      // Reset to actual positions for infinite loop
      if (currentIndex >= testimonials.length + 1) {
        setCurrentIndex(1);
      } else if (currentIndex <= 0) {
        setCurrentIndex(testimonials.length);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);

  const translateX = -currentIndex * totalCardWidth + 50;

  return (

    <div className="w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
      <div className="w-full">
        <h2 className='text-center text-5xl pb-6'>
          What Clients Say
        </h2>
        
        <div className="relative w-full">
          {/* Left Chevron */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              borderWidth: '0.5px',
              padding: '8px',
              left: '21px'
            }}
          >
            <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
            
            {/* right chevron */}
            <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
            style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                borderWidth: '0.5px',
                padding: '8px',
                right: '21px'
            }}
            >
            <img 
                src="/Chevron.png" 
                alt="Next" 
                className="w-4 h-4 object-contain"
            />
            </button>

          {/* Carousel Container */}
          <div 
            className="overflow-hidden w-full relative"
            style={{
              height: '200px',
            }}
          >
            {/* Fade gradients on edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${translateX}px)`,
                gap: '24px'
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 bg-black text-white rounded-lg"
                  style={{
                    width: '448px',
                    height: '200px',
                    borderRadius: '16px',
                    paddingTop: '24px',
                    paddingRight: '32px',
                    paddingBottom: '24px',
                    paddingLeft: '32px'
                  }}
                >
                  {/* Text area */}
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;