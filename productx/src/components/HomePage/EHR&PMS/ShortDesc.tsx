import { ContactUs } from "../../../styles/Button";
import { H2, P } from "../../../styles/Typography";

const ShortDesc = () => {
  return (
    <section
      className="
        w-full 
        bg-[#EEFDD9]
        py-50
         md:py-16
        px-4 sm:px-6 lg:px-20
        overflow-hidden
      "
    >
      {/* Content Wrapper */}
      <div
        className="
          w-full
          max-w-8xl
          mx-auto
          flex
          flex-col
         py-88
          
          gap-8
        "
      >
        {/* Title */}
        <H2
          className="
            
            leading-[1.1]
            bg-gradient-to-r from-[#166D48] to-[#F99526]
            bg-clip-text text-transparent
          "
                  >
          Sed ut perspiciatis Unde Seduo ut 
        </H2>

        {/* Description 1 */}
        <P
          className="
            leading-relaxed
            text-[#141414]
          "
        
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          <br />
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. occaecat cupidatat non.
        </P>

        {/* Description 2 */}
        <P
          className="
            leading-relaxed
            text-[#141414]
          "
          
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          <br />
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. occaecat cupidatat non.
        </P>

        {/* Contact Button */}
       
          
          <ContactUs>BOOK A FREE DEMO</ContactUs>
      
      </div>
    </section>
  );
};

export default ShortDesc;
