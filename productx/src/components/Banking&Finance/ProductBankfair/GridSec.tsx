import { H1, H4, P } from "../../../styles/Typography";

const GridSec = () => {
  return (
    <section className="w-full pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading Row */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">

          <H1>
            How Bankfair Powers<br />
            <span className="text-[#2B68C3]">Banking Operations </span> 
          </H1>

          <P className="max-w-xl">
            Configure parameters once and let the system automate processes across branches. Bankfair's architecture ensures consistency, compliance, and efficiency at every step. 

 
          </P>

        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-8">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">

            {/* Small Card */}
<div className="relative bg-[#E7F1FF] rounded-2xl p-4 xl:p-6 overflow-hidden border border-gray-300 min-h-[200px] md:min-h-[300px] lg:min-h-[350px]">
              <H4 className="mb-4">
                Configure Banking <br /> Rules and Products 
              </H4>

              <P className="max-w-xs">
                Set up branches, currencies, charges, and financial products through parameterization. Define transaction types, interest calculations, and approval workflows without writing code. 
              </P>

              {/* Gradient Shape */}
              <div className="absolute bottom-0 right-0 w-60 h-35 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-tl-[120px]" />

            </div>

            {/* Large Card */}
{/* Large Card */}
<div className="relative bg-[#F2F2F2] rounded-2xl p-4 xl:p-6 border border-gray-300 flex items-center gap-6 md:gap-10 min-h-[200px] md:min-h-[300px] lg:min-h-[350px]">

  {/* Left Image */}
  <img
    src="/Img2.webp"
    className="w-30 md:w-80 xl:w-100 rounded-xl"
    alt=""
  />

  <div className="max-w-sm">
    <H4 className="mb-3">
      Automate Daily <br /> Banking Operations 
    </H4>

    <P>
      System executes configured rules for account management, teller transactions, and regulatory reporting. Processes run automatically with role-based access controls and audit trails. 
    </P>
  </div>

</div>

          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">

            {/* Large Card */}
<div className="relative bg-[#FFFFFF] rounded-2xl p-4 xl:p-6 border border-gray-300 flex items-center gap-6 md:gap-10 min-h-[200px] md:min-h-[300px] lg:min-h-[350px]">

  <div className="max-w-sm">
    <H4 className="mb-4">
      Manage Customer Lifecycle <br /> End-to-End 
    </H4>

    <P>
      Handle member onboarding, account modifications, lien noting, and service requests through a unified interface. Customer data flows seamlessly across all banking modules. 

 
    </P>
  </div>

  {/* Right Image */}
  <img
    src="/Img3.webp"
    className="w-28 md:w-72 xl:w-96 rounded-xl"
    alt=""
  />

</div>

            {/* Small Card */}
<div className="bg-[#FFEEDA] rounded-2xl p-4 xl:p-6 border border-gray-300 min-h-[200px] md:min-h-[300px] lg:min-h-[350px]">
              <H4 className="mb-4">
                Generate Reports <br /> and Ensure Compliance
              </H4>

              <P className="max-w-xs">
                he system automatically produces regulatory reports, audit logs, and transaction statements. Real-time dashboards provide visibility into branch performance and operational metrics. 
              </P>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GridSec;