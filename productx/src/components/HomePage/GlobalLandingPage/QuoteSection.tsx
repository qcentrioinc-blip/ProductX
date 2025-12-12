import { H2, H4, P } from "../../../styles/Typography";

export default function QuoteSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] lg:h-[120vh] overflow-hidden py-20">
      
      {/* Background Image */}
      <img
        src="/LandingPage/building1.png" 
        alt="Buildings"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/1 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-8xl mx-10 px-6 flex flex-col ">
        
        {/* Big Purple Heading */}
        <H2 className="
         leading-tight 
          text-[#8338EC] max-w-6xl mb-8
          animate-fadeInUp
        ">
          Technology should be accessible, 
          intelligent, and purposeful empowering 
          organizations to make smarter 
          decisions
        </H2>

        {/* Author */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <H4 className="text-lg">RAO</H4>
          <P className="text-sm mt-2">CEO and Founder QNEST</P>
        </div>
      </div>

      {/* Fade-in Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
