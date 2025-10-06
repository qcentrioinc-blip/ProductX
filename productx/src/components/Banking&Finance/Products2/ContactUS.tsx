// import { useState } from 'react';
// import { ArrowUpRight } from 'lucide-react';

// const ContactUS = () => {
//     const [selectedOption, setSelectedOption] = useState('Product Enquiry');
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         query: '',
//         message: ''
//     });

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log('Form submitted:', { ...formData, type: selectedOption });
//     };

//     return (
//         <div className='bg-black p-12 md:p-16 lg:p-24'>
//             <div className="relative h-[85vh] overflow-visible">
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         backgroundImage: `url('/Products/Products2/FormBackground.png')`,
//                         backgroundSize: 'cover', // --- CHANGED: Now the image will cover the entire div
//                         backgroundPosition: 'center',
//                         // --- REMOVED: backgroundRepeat: 'no-repeat',
//                     }}
//                 ></div>

//                 {/* 3. Form container is now absolutely positioned to the right */}
//                 <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 z-10 w-full max-w-xl">
//                     <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             {/* Name Input */}
//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Name"
//                                     value={formData.name}
//                                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg transition-colors"
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
//                                     className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg transition-colors"
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
//                                     className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg transition-colors"
//                                     required
//                                 />
//                             </div>

//                             {/* Option Buttons */}
//                             <div className="flex flex-wrap gap-4">
//                                 {['Product Enquiry', 'Partnerships', 'General Support'].map((option) => (
//                                     <button
//                                         key={option}
//                                         type="button"
//                                         onClick={() => setSelectedOption(option)}
//                                         className={`px-5 py-3 rounded-full text-base font-medium transition-all ${selectedOption === option
//                                             ? 'bg-black text-white'
//                                             : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                                             }`}
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
//                                     rows={4}
//                                     className="w-full px-6 py-4 rounded-3xl border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-lg resize-none transition-colors"
//                                 />
//                             </div>

//                             {/* Submit Button */}
//                             <div>
//                                 <button
//                                     type="submit"
//                                     className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-all flex items-center gap-2 group"
//                                 >
//                                     SUBMIT
//                                     <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactUS;


import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContactUS = () => {
    const [selectedOption, setSelectedOption] = useState('Product Enquiry');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { ...formData, type: selectedOption });
    };

    return (
        <div className='bg-black p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-24'>
            <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:h-[85vh] overflow-visible">
                {/* Background Image - Hidden on mobile, visible on tablet+ */}
                <div
                    className="absolute inset-0 hidden sm:block"
                    style={{
                        backgroundImage: `url('/Products/Products2/FormBackground.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Form container - Responsive positioning */}
                <div className="relative sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-4 md:right-6 lg:right-8 xl:right-16 z-10 w-full sm:max-w-sm md:max-w-md lg:max-w-xl">
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-sm sm:text-base md:text-lg transition-colors"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your mail"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-sm sm:text-base md:text-lg transition-colors"
                                    required
                                />
                            </div>

                            {/* Query Input */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    value={formData.query}
                                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-sm sm:text-base md:text-lg transition-colors"
                                    required
                                />
                            </div>

                            {/* Option Buttons */}
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 md:gap-4">
                                {['Product Enquiry', 'Partnerships', 'General Support'].map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => setSelectedOption(option)}
                                        className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all w-full sm:w-auto ${
                                            selectedOption === option
                                                ? 'bg-black text-white'
                                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <textarea
                                    placeholder="Message (Optional)"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-2xl sm:rounded-3xl border-2 border-gray-300 focus:border-pink-700 focus:outline-none text-sm sm:text-base md:text-lg resize-none transition-colors"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-black text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-900 transition-all flex items-center justify-center gap-2 group"
                                >
                                    SUBMIT
                                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUS;

