import { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import { ScrollContext } from '../../../context/ScrollContext';
import { H2 } from '../../../styles/Typography';
 
const ContactUS = () => {
  const [selectedOption, setSelectedOption] = useState('Product Enquiry');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    message: ''
  });

  // const scrollContainer = useContext(ScrollContext);
  const targetRef = useRef<HTMLDivElement>(null);
 
  // Framer Motion Scroll Setup
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"]
  });
 
  // Scale animation: 0.90 (when out of view) -> 1 (when in view)
  const scale = useTransform(scrollYProgress, [0, 1], [0.90, 1.09]);
  // Border radius animation: 24px -> 0px
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['24px', '0px']);
 
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothBorderRadius = useSpring(borderRadius, { stiffness: 100, damping: 30 });
 const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      "polygon(0 6%, 100% 0, 100% 100%, 0 100%)"
    ]
);

const smoothClip = useSpring(clipPath, { stiffness: 100, damping: 25 });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, type: selectedOption });
  };
 
  return (
   <div
  ref={targetRef} 
  id="contact"
  className="relative z-30 h-screen pointer-events-auto bg-white overflow-hidden "
>

    
    
      <div className="sticky top-0 flex items-center justify-center h-screen w-full">
 
       
        <motion.div
         style={{
        scale: smoothScale,
        borderRadius: smoothBorderRadius,
        clipPath: smoothClip
    }}
          className="relative h-[95vh] w-full max-w-[1400px] overflow-hidden"
        >
         
          {/* A) BLUE BACKGROUND CONTAINER (Takes full size of the motion.div) */}
          <div className="absolute inset-0 bg-[#2B68C3] h-[78vh] mt-24">
            {/* Yellow Curve Image Overlay */}
            <img  
              src="/ContactSection/yellowCurve.png"
              alt="Background curve graphic"
              className='w-full absolute left-2 top-10 h-[500px] pointer-events-none object-cover'
            />
           
            {/* Text Content */}
            <div className="absolute bottom-24 left-8 md:left-16 lg:left-32 z-10 max-w-2xl">
              <H2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Shaping the Future<br />
                Across B and F.
              </H2>
            </div>
          </div>
 
          {/* B) WHITE FORM CARD (Positioned absolutely over the blue background) */}
          {/* Centered vertically (top-1/2 -translate-y-1/2) and positioned right */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-16 z-30 w-full max-w-[440px] h-4/5  ">
            <div className="bg-white rounded-[32px] p-6 md:p-8 ">
              <form onSubmit={handleSubmit} className="space-y-4">
               
                {/* Form Fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-base transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-base transition-colors"
                    required
                   
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-base transition-colors"
                    required
                  />
                </div>
 
                {/* Option Buttons */}
                <div className="flex flex-wrap gap-3">
                  {['Product Enquiry', 'Partnerships', 'General Support'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedOption(option)}
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                        selectedOption === option
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
 
                {/* Message Field */}
                <div>
                  <textarea
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4} // Increased rows for more height
                    className="w-full px-5 py-3.5 rounded-[24px] border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-base resize-none transition-colors"
                  />
                </div>
 
                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 group"
                  >
                    SUBMIT
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
 
export default ContactUS;