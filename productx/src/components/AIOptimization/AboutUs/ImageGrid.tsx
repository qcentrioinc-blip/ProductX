 
import { H2, P } from "../../../styles/Typography";

export default function ImageGrid() {
  return (
    <section className="w-full bg-white py-10 lg:py-20 lg:px-8">
      <div className="max-w-8xl mx-4 md:mx-10 flex flex-col lg:gap-24">

        {/* ROW 1 — TEXT LEFT, IMAGE RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2    items-center">
          
          {/* TEXT */}
          <div>
            <H2 className="  font-semibold text-gray-900">
             Digital Data <br className="lg:block hidden" /> Confluence
            </H2>

            <P className="  mt-4 max-w-xl">
              At Archè, we believe technology must be a driver of sustainability.
              Our approach to AI and cloud computing focuses on:
            </P>

            <ul className="mt-4 space-y-6 font-quicksand  ml-6 list-disc max-w-lg text-black text-[15px] leading-relaxed">
              <li className="">
                <strong>Physical Convergence:</strong> Study the existing architecture &
                Rewamp in accordance with NASS Pune model of Industry 4.0
              </li>
              <li>
                <strong>Time Sensitive Network:</strong> Ensure to implement TSN defined by IEEE
                to enhance the end-to-end communication latencies
              </li>
              <li>
                <strong>Time Sensitive Network:</strong> Ensure to implement TSN defined by IEEE
                to enhance the end-to-end communication latencies
              </li>
              <li>
                <strong>Time Sensitive Network:</strong> Ensure to implement TSN defined by IEEE
                to enhance the end-to-end communication latencies
              </li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="lg:pl-28 lg:pt-0 pt-6">
            <img
              src="/AIAbout/Image2.png"
               
              className="rounded-xl object-cover w-full h-[300px] lg:h-[500px]  "
              alt="Digital Data"
            />
          </div>
        </div>

        {/* ROW 2 — IMAGE LEFT, TEXT RIGHT */}
       <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

  {/* IMAGE */}
  <div className="order-2 lg:order-1 mt-4 sm:mt-0">
    <img
      src="/AIAbout/Image1.png"
      className="rounded-xl object-cover w-full h-[300px] lg:h-[500px]"
      alt="Digital Data"
    />
  </div>

  {/* TEXT */}
  <div className="order-1 lg:order-2 lg:pl-32 pt-6 lg:pt-0">
    <H2 className="font-semibold text-gray-900">
      Digital Data <br className="lg:block hidden" /> Confluence
    </H2>

    <P className="  mt-4 max-w-xl">
      At Archè, we believe technology must be a driver of sustainability.
      Our approach to AI and cloud computing focuses on:
    </P>

    <ul className="mt-4 space-y-6 font-quicksand ml-6 list-disc max-w-lg text-black text-[15px] leading-relaxed">
      <li><strong>Physical Convergence:</strong> Study the existing architecture & Rewamp in accordance with NASS Pune model of Industry 4.0</li>
      <li><strong>Time Sensitive Network:</strong> Ensure to implement TSN defined by IEEE to enhance the end-to-end communication latencies</li>
      <li><strong>Time Sensitive Network:</strong> Ensure to implement TSN defined by IEEE to enhance the end-to-end communication latencies</li>
      <li><strong>Time Sensitive Network:</strong> Ensure to implement TSN defined by IEEE to enhance the end-to-end communication latencies</li>
    </ul>
  </div>

</div>
      </div>
    </section>
  );
}
