import {  H2EHR, P } from "../../../styles/Typography";

const Brief = () => {
  return (
    <section className="w-full  py-12 md:pb-16 lg:pb-20  ">
      <div className="max-w-7xl  px-4 xl:mx-auto justify-between items-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-36 items-center">
          
          <div className="space-y-4">
                <H2EHR
                className="text-[#008280]  leading-tight"
               
                                >
              Tools Designed for Clinical Excellence
                </H2EHR>
          </div>
 
          <div className="space-y-4  ">
            <P className="  text-black    xl:px-14  leading-normal">
          Unified Clinicapp provides the essential tools you need every day: intelligent documentation, integrated decision support, and seamless workflow management all in one place.   
            </P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;