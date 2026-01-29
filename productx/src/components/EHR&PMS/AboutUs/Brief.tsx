import {  H2, P } from "../../../styles/Typography";

const Brief = () => {
  return (
    <section className="w-full  py-12 md:py-16 lg:py-20  ">
      <div className="max-8xl  px-6 xl:mx-10 justify-between items-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-12 items-center">
          
          <div className="space-y-4">
                <H2
                className="text-[#008280]  leading-tight"
               
                                >
                Sed ut perspiciatis <br className="xl:block  hidden"/>Seduo ut perspiciatis
                </H2>
          </div>
 
          <div className="space-y-4  xl:pr-10">
            <P className="  text-black    xl:px-14  leading-normal">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  
            </P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;