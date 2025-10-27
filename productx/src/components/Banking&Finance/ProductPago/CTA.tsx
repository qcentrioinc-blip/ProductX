import { H1, H2,P } from "../../../styles/Typography"

const CTA = () => {
  return (
     <div className="h-full w-full ">
     
  
      <section className="px-4 sm:px-6 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-32">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-full text-sm">
                Duis aute
              </span>
              <H1>
                Lorem ipsum
              </H1>
              <H2 className="  whitespace-nowrap">
                dolor ,consecte
              </H2>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-6 lg:gap-x-8 lg:gap-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0" />
                  <div className="flex-1 ">
                    <P className="leading-tight">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                    </P>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        </section>
      </div>
  )
}

export default CTA
