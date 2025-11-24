import { H2, P } from "../../../styles/Typography";

const Brief = () => {
  return (
    <section className="w-full bg-[#fce2c6] py-12 md:py-16 lg:py-20 px-4  ">
      <div className="max-8xl mx-4 lg:mx-10 justify-between items-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="space-y-4">
                <H2>
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #28B87B 0%, #F99526 100%)",
    }}
  >
    Sed ut perspiciatis unde
  </span>
</H2>

<H2 className="mt-1">
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #28B87B 0%, #F99526 100%)",
    }}
  >
    Sedvo ut perspiciatis
  </span>
</H2>

          </div>
 
          <div className="space-y-4">
            <P className="  text-black lg:px-14  leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brief;