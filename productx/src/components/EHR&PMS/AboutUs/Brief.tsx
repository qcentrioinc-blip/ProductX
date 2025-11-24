import { P } from "../../../styles/Typography";

const Brief = () => {
  return (
    <section className="w-full bg-[#fce2c6] py-12 md:py-16 lg:py-20 px-4  ">
      <div className="max-8xl mx-4 lg:mx-10 justify-between items-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="space-y-4">
                <h2 
                className="text-3xl font-bricolage md:text-4xl lg:text-5xl  leading-tight"
                style={{
                    background: 'linear-gradient(90deg, #28B87B 0%, #F99526 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}
                                >
                Sed ut perspiciatis Unde <br/>Seduo ut perspiciatis
                </h2>
          </div>
 
          <div className="space-y-4 lg:pr-10">
            <P className="  text-black lg:px-14  leading-normal">
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            </P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;