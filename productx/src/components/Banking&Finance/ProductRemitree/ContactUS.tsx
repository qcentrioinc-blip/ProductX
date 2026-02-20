import { useState, useRef, useEffect } from 'react';

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { H2 } from '../../../styles/Typography';
 

const OPTIONS = ['Product Enquiry', 'Partnerships', 'General Support'];

const ContactUS = () => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: [] as string[],
    message: '',
  });
  const isEmailValid = isValidEmail(formData.email);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.02]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['24px', '0px']);
  const clipPath = useTransform(scrollYProgress, [0, 1], [
    'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
  ]);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothBorderRadius = useSpring(borderRadius, { stiffness: 100, damping: 30 });
  const smoothClip = useSpring(clipPath, { stiffness: 100, damping: 25 });

 const handleSubmit = () => {
  if (!isEmailValid) {
    setToast({ message: 'Please enter a valid email address.', type: 'error' });
    setTimeout(() => setToast(null), 3500);
    return;
  }
  // your submit logic here
  setToast({ message: 'Successfully submitted! We\'ll be in touch soon.', type: 'success' });
  setTimeout(() => setToast(null), 3500);
  setFormData({ name: '', email: '', query: [], message: '' });
};

  return (
   // In ContactUS.tsx — root div
<div
  ref={targetRef}
  className="relative z-30    pointer-events-auto bg-white"  
  
  id='ContactUs'
>
      {/* TOAST NOTIFICATION */}
{toast && (
  <div
    className={`
      fixed bottom-20 right-6 z-[9999] bg-white flex items-center gap-3
      px-5 py-4  bg-white opacity-100 rounded-2xl font-quicksand text-black shadow-[0_8px_32px_rgba(0,0,0,0.18)]
      transition-all duration-500 ease-out
      ${toast.type === 'success'
        ? 'bg-white border-l-4 border-green-500'
        : 'bg-white border-l-4 border-red-500'
      }
    `}
    style={{ minWidth: '300px' }}
  >
    {/* Icon */}
    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
      ${toast.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
      {toast.type === 'success' ? (
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </div>
    {/* Message */}
    <div className="flex-1">
      <p className={`text-sm font-semibold font-quicksand
        ${toast.type === 'success' ? 'text-green-700' : 'text-red-600'}`}>
        {toast.type === 'success' ? 'Success!' : 'Invalid Email'}
      </p>
      <p className="text-md text-black font-quicksand mt-0.5">{toast.message}</p>
    </div>
    {/* Close */}
    <button onClick={() => setToast(null)} className="text-gray-300 hover:text-gray-500 ml-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
)}
       {/* DESKTOP LAYOUT */}
        <motion.div
          style={{
            scale: smoothScale,
            borderRadius: smoothBorderRadius,
            
          }}
           className="overflow-visible hidden bg-white xl:block"
           
        >
<div className="hidden xl:block relative w-full  overflow-visible">

  {/* Full width blue background */}
  <div className="absolute top-0 left-0 w-full h-[75vh] pt-10 bg-[#2B68C3]">
    
    <img
      src="/ContactSection/yellowCurve.png"
      alt="curve"
      className="absolute  left-18  -top-9 w-[1440px]  h-[555px] inset-0  object-fit pointer-events-none"
    />

    <div className="max-w-[1400px] mx-auto h-full flex items-center px-20">
      <H2 className="text-white text-5xl font-bold leading-tight max-w-xl">
        Ready to transform
        <br />
        your banking operations
      </H2>
    </div>
  </div>

  {/* Centered Form Wrapper */}
  {/* Form Wrapper */}
{/* Form Wrapper */}
<div className="relative z-20 w-full max-w-[1400px] mx-auto px-20 pt-[15vh]">
  {/*  ^^^ pt-[15vh] pushes the form anchor point down INTO the blue bg */}

  <div className="flex justify-end">
    <div className="w-[480px] -mt-[20vh]">
      {/* ^^^ -mt-[30vh] pulls the card UP so top ~15vh overflows above blue */}

      <div className="bg-white h-[650px] rounded-[20px] px-12 py-20 shadow-[-10px_-30px_80px_rgba(0,0,0,0.12),_20px_40px_80px_rgba(0,0,0,0.15)]">

        <div className="space-y-10">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3.5 rounded-full font-quicksand placeholder-black border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
            />

            <input
  type="email"
  placeholder="Enter your mail"
  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
  className={`w-full px-5 py-3.5 rounded-full font-quicksand placeholder-black border-2 
    focus:outline-none transition-colors duration-300
    ${isEmailValid 
      ? 'border-[#2B68C3] focus:border-[#2B68C3]' 
      : 'border-gray-200 focus:border-blue-500'
    }`}
/>
 <div ref={dropdownRef} className="relative">
                    <div
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-sm  truncate">
                        {formData.query.length > 0
                          ? formData.query.join(', ')
                          : 'What are you looking for?'}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform flex-shrink-0 ${showDropdown ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {showDropdown && (
                      <div className="absolute mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-lg z-20 p-3 space-y-2">
                        {OPTIONS.map((option) => {
                          const checked = formData.query.includes(option);
                          return (
                            <label key={option} className="flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    query: checked ? prev.query.filter((o) => o !== option) : [...prev.query, option],
                                  }))
                                }
                                className="accent-black w-4 h-4"
                              />
                              <span className="text-sm text-gray-800">{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>
            <textarea
              placeholder="Message (Optional)"
              rows={4}
              className="w-full px-5 py-3.5 placeholder-black font-quicksand rounded-[24px] border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
            />

            <button
  onClick={handleSubmit}
  disabled={!isEmailValid && formData.email.length > 0}
  className={`
    px-8 py-3.5 rounded-full font-semibold  font-quicksand flex items-center gap-2 group
    transition-all duration-300 ease-in-out
    ${isEmailValid
      ? 'bg-[#2B68C3] text-white  shadow-[0_4px_20px_rgba(43,104,195,0.4)]'
      : 'bg-black text-white  '
    }
  `}
>
  SUBMIT
  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>
          </div>

        </div>

      </div>

    </div>
  </div>

</div>
</motion.div>

     
        <motion.div
          style={{
            scale: smoothScale,
            borderRadius: smoothBorderRadius,
            clipPath: smoothClip,
          }}
          className="relative w-full max-w-[1400px] mx-auto  "
        >
          {/* MOBILE LAYOUT */}
          <div className="xl:hidden flex flex-col min-h-full relative">
            {/* Blue Header Section with Curve */}
         <div className="relative bg-[#2B68C3] h-[52vh] pt-12 px-6 overflow-hidden">
              {/* Yellow Curve - SVG */}
              <img
                src="/ContactSection/yellowCurve.png"
                alt="Background curve graphic"
         className="absolute top-10 left-0 lg:top-20 w-[100%] h-[200px]  lg:h-[380px] -rotate-20 lg:-rotate-10 object-fit pointer-events-none"
              />

              {/* Heading */}
              <div className="relative ml-6 mt-24 md:mt-32 md:ml-20 lg:mt-52 lg:ml-24 z-10 pt-8">
                <H2 className="text-white text-3xl font-bold leading-tight">
                Ready to transform 
                  <br />
                  your banking operations
                </H2>
              </div>
            </div>

            {/* Form Card - Overlapping */}
            <div className="relative -mt-48 pr-6 pl-8  pb-10">
             <div className="bg-white rounded-[28px] md:rounded-[20px] p-6 md:p-14 lg:p-16 shadow-[0px_20px_60px_rgba(0,0,0,0.12),_-20px_0px_40px_rgba(0,0,0,0.06),_20px_0px_40px_rgba(0,0,0,0.06)]">
                <div className="space-y-5 pt-16">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 font-quicksand placeholder-black border-gray-200 focus:border-blue-500 focus:outline-none text-sm"
                  />

                  {/* Email */}
               
            <input
  type="email"
  placeholder="Enter your mail"
  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
  className={`w-full px-5 py-3.5 rounded-lg font-quicksand  placeholder-black border-2 
    focus:outline-none transition-colors duration-300
    ${isEmailValid 
      ? 'border-[#2B68C3] focus:border-[#2B68C3]' 
      : 'border-gray-200 focus:border-blue-500'
    }`}
/>

                  {/* MULTI-SELECT DROPDOWN */}
                  <div ref={dropdownRef} className="relative">
                    <div
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-sm  truncate">
                        {formData.query.length > 0
                          ? formData.query.join(', ')
                          : 'What are you looking for?'}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform flex-shrink-0 ${showDropdown ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {showDropdown && (
                      <div className="absolute mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-lg z-20 p-3 space-y-2">
                        {OPTIONS.map((option) => {
                          const checked = formData.query.includes(option);
                          return (
                            <label key={option} className="flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    query: checked ? prev.query.filter((o) => o !== option) : [...prev.query, option],
                                  }))
                                }
                                className="accent-black w-4 h-4"
                              />
                              <span className="text-sm text-gray-800">{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full  font-quicksand placeholder-black px-5 py-3.5 rounded-3xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none text-sm"
                  />

                <button
  onClick={handleSubmit}
  disabled={!isEmailValid && formData.email.length > 0}
  className={`
    px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 group
    transition-all duration-300 ease-in-out
    ${isEmailValid
      ? 'bg-[#2B68C3] text-white hover:bg-blue-700 shadow-[0_4px_20px_rgba(43,104,195,0.4)]'
      : 'bg-black text-white hover:bg-gray-800'
    }
  `}
>
  SUBMIT
  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>
                </div>
              </div>
            </div>
          </div>

        
        </motion.div>

     
    </div>
  );
};

export default ContactUS;