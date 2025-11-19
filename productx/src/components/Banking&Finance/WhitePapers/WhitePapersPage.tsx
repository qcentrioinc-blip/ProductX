import { ScrollProvider } from "../../../context/ScrollContext";
import ContactUS from "../Products2/ContactUS";
import NewOneFooter from "../Products2/NewOneFooter";
import Blogs from "./BlogsSec";
import TitleSec from "./TitleSec";

const WhitePapersPAge = () => {
  return (
    <>
    <ScrollProvider>
    <TitleSec/>
    <Blogs/>
    <ContactUS/>
    <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
          {/* <NewFooter /> */}
          <NewOneFooter/>
        </div>
      </div>
    </ScrollProvider>  
    </>
  );
};

export default WhitePapersPAge;
