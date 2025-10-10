import { useState, useContext, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';

const ContactUS = () => {
  const [selectedOption, setSelectedOption] = useState('Product Enquiry');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    message: ''
  });

  const scrollContainer = useContext(ScrollContext);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,  // The ContactUS section element
    container: scrollContainer ?? undefined,  // Ensure container is undefined if null
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.90, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['24px', '0px']);

  // Add smooth spring transition
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothBorderRadius = useSpring(borderRadius, { stiffness: 100, damping: 30 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, type: selectedOption });
  };

  return (
    <div ref={targetRef} className='relative bg-[#f9fafc] h-[110vh]' style={{ pointerEvents: 'all' }}>
      <div className="sticky top-0 flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale: smoothScale,
            borderRadius: smoothBorderRadius
          }}
          className="relative h-[105vh] w-full overflow-hidden"
        >
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: `url('/Products/Products2/FormBackground.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-16 z-10 w-full max-w-xl px-4">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  {['Product Enquiry', 'Partnerships', 'General Support'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedOption(option)}
                      className={`px-5 py-3 rounded-full text-base font-medium transition-all ${
                        selectedOption === option
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div>
                  <textarea
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-6 py-4 rounded-3xl border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg resize-none transition-colors"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-all flex items-center gap-2 group"
                  >
                    SUBMIT
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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


// {/* Mobile and Tablet Layout */}
//             <div className="block lg:hidden relative min-h-screen">
//                 {/* Background image section - Top portion */}
//                 <div 
//                     className="absolute inset-0 h-[45vh] sm:h-[50vh]"
//                     style={{
//                         backgroundImage: `url('/Products/Products2/FormBackground.png')`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat'
//                     }}
//                 >
//                     {/* Optional: Add overlay for better text readability */}
//                     <div className="absolute inset-0 bg-black/20"></div>
                    
//                 </div>

//                 {/* White form container with negative margin to overlap */}
//                 <div className="relative pt-[35vh] sm:pt-[40vh] px-4 sm:px-6 pb-12 z-20">
//                     <div className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 shadow-2xl max-w-2xl mx-auto">
//                         <form onSubmit={handleSubmit} className="space-y-8">
//                             {/* Name Input */}
//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Name"
//                                     value={formData.name}
//                                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border-2 border-gray-200 focus:border-gray-400 focus:outline-none text-sm sm:text-base transition-colors bg-gray-50"
//                                     required
//                                 />
//                             </div>

//                             {/* Email Input */}
//                             <div>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your mail"
//                                     value={formData.email}
//                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                     className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border-2 border-gray-200 focus:border-gray-400 focus:outline-none text-sm sm:text-base transition-colors bg-gray-50"
//                                     required
//                                 />
//                             </div>

//                             {/* Query Input */}
//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="What are you looking for?"
//                                     value={formData.query}
//                                     onChange={(e) => setFormData({ ...formData, query: e.target.value })}
//                                     className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border-2 border-gray-200 focus:border-gray-400 focus:outline-none text-sm sm:text-base transition-colors bg-gray-50"
//                                     required
//                                 />
//                             </div>

//                             {/* Option Buttons */}
//                             <div className="flex flex-wrap gap-2 sm:gap-3">
//                                 {['Product Enquiry', 'Partnerships', 'General Support'].map((option) => (
//                                     <button
//                                         key={option}
//                                         type="button"
//                                         onClick={() => setSelectedOption(option)}
//                                         className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
//                                             selectedOption === option
//                                                 ? 'bg-black text-white'
//                                                 : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                                         }`}
//                                     >
//                                         {option}
//                                     </button>
//                                 ))}
//                             </div>

//                             {/* Message Textarea */}
//                             <div>
//                                 <textarea
//                                     placeholder="Message (Optional)"
//                                     value={formData.message}
//                                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                     rows={3}
//                                     className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-3xl border-2 border-gray-200 focus:border-gray-400 focus:outline-none text-sm sm:text-base resize-none transition-colors bg-gray-50"
//                                 />
//                             </div>

//                             {/* Submit Button */}
//                             <div className="pt-2">
//                                 <button
//                                     type="submit"
//                                     className="w-full bg-black text-white px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-900 transition-all flex items-center justify-center gap-2 group"
//                                 >
//                                     SUBMIT
//                                     <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
