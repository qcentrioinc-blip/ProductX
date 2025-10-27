import { H1 } from '../../../styles/Typography';
import Sec1_img from '/Sec-1-img.jpg';

const Glossary = () => {
  return (
    <>
    
    <section className="relative w-full h-screen">
      {/* Background image with dark overlay */}
      <img
        src={Sec1_img}
        alt="Section Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div> 

      {/* Text content */}
      <div className="relative z-10 flex items-center h-full px-8 sm:px-16 md:px-24">
        <H1 className="text-white max-w-2xl">
          Sed ut perspiciatis unde omnis iste natus
        </H1>
      </div>
    </section>
    </>
  );
};

export default Glossary;
