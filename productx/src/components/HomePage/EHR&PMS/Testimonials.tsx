interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  // todo: remove mock functionality
  const defaultTestimonials: Testimonial[] = [
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa asdrftguh",
      author: "Brian Patton",
      role: "Duis aut"
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa wsedrfgt",
      author: "Brian Patton",
      role: "Duis aut"
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa werfftgh",
      author: "Brian Patton",
      role: "Duis aut"
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa sdfg",
      author: "Brian Patton",
      role: "Duis aut"
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa sdf",
      author: "Brian Patton",
      role: "Duis aut"
    }
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <div className="w-full bg-[#f5f5f5] py-16" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl font-semibold text-center mb-12"
          style={{ color: 'hsl(142, 76%, 36%)' }}
          data-testid="text-heading"
        >
          Sed ut persp iciatis Unde Se
        </h2>
        
        <div className="relative">
          <div 
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            data-testid="testimonials-container"
          >
            {displayTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[300px] bg-card rounded-xl p-12 shadow-2xl"
                data-testid={`card-testimonial-${index}`}
              >
                <p 
                  className="text-foreground text-sm leading-relaxed mb-8"
                  data-testid={`text-quote-${index}`}
                >
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-[#d9d9d9] flex-shrink-0"
                    data-testid={`img-avatar-${index}`}
                  />
                  <div>
                    <div 
                      className="font-semibold text-foreground text-base"
                      data-testid={`text-author-${index}`}
                    >
                      {testimonial.author}
                    </div>
                    <div 
                      className="text-muted-foreground text-sm"
                      data-testid={`text-role-${index}`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
