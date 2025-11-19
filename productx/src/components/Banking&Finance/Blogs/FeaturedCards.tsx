import {   H2, P } from "../../../styles/Typography";
 
 

export default function FeaturedCards() {

 
  return (
    <>

      <section className="bg-black" >
      

        {/* grid layout for blogs */}

        <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
          <H2 className="font-bold text-white">Consecte adipiscing</H2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Big Card */}
            <div className="col-span-1 lg:col-span-2 bg-white text-black rounded-md overflow-hidden shadow-md flex flex-col h-[80vh]">
              {/* Image Section */}
              <div className="flex-1 bg-gray-300"></div>
              {/* Content Section */}
              <div className="p-4 sm:p-6 relative">
                <P className="text-gray-500">Lorem ipsum</P>
                <P className="mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium
                </P>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Author</span>
                  <span>AUGUST 19, 2025</span>
                </div>
              </div>
            </div>

            {/* Right Column Smaller Cards */}
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white text-black rounded-xl overflow-hidden  flex h-[180px]"
                >
                  <div className="w-1/3 bg-gray-300"></div>
                  <div className="p-4 flex flex-col">
                    <P className=" text-gray-600">Lorem ipsum</P>
                    <P className="text-black">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium
                    </P>
                    <div className="flex  justify-between items-center text-sm text-gray-500">
                      <span>Author</span>
                      <span>AUGUST 19, 2025</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>

     
      
    </>
  );
}

 

