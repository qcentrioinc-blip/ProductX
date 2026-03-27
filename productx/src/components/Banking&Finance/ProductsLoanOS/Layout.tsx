 
import { H2, H4, P } from '../../../styles/Typography'

const features = [
  {
    id: 1,
    title: ' Group Lending Management',
    description:
      ' Supports joint liability groups and self-help groups with center meetings and bulk collection features ',
  },
  {
    id: 2,
    title: 'Collection and Recovery',
    description:
      'Routes outstanding cases to agents with Google Maps integration and legal case tracking',
  },
  {
    id: 3,
    title: 'Dropout Management ',
    description:
      'Logs potential customers who drop out and pushes data to relationship managers ',
  },
]

const HourglassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
  </svg>
)

const Layout = () => {
  return (
    <div className="  bg-white px-6 py-10  xl:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 xl:gap-20">

        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <H2 className="  leading-tight">
           Capabilities Beyond Loan Origination 
          </H2>

          {/* Image Placeholder */}
          <div className="w-full rounded-2xl bg-[#D9D9D9] h-[300px] lg:h-[400px] xl:h-[350px]" />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex  space-y-2 xl:space-y-4 flex-col gap-4 lg:pt-2 relative">

         
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center max-w-xl gap-10 p-6 rounded-2xl border border-[#D9D9D9] shadow-sm bg-[#F8F8F8] hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full  bg-[#2B68C3] flex items-center justify-center">
                <HourglassIcon />
              </div>

              {/* Text */}
              <div>
                <H4 className="text-base font-bold   mb-1">
                  {feature.title}
                </H4>
                <P className="  leading-relaxed">
                  {feature.description}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout