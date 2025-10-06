import Sec1_img from '/Sec-1-img.jpg';
import { H1 } from '../../styles/Typography';
import CallToAction from '../HomePage/CallToAction';
import Footer from '../Footer/Footer';
import AlphabetSec from './AlphabetSec';

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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> 

      {/* Text content */}
      <div className="relative z-10 flex items-center h-full px-8 sm:px-16 md:px-24">
        <H1 className="text-white max-w-2xl">
          Sed ut perspiciatis unde <br /> omnis iste natus
        </H1>
      </div>
    </section>
    
    <AlphabetSec />
    <CallToAction />
    <Footer />
    </>
  );
};

export default Glossary;
