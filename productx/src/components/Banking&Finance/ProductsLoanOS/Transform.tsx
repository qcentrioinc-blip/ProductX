 
import { H2, H4, P } from '../../../styles/Typography'

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

const features = [
  {
    id: 1,
    title: 'eVerification and OCR ',
    description:
      ' Built-in OCR reads standard documents with AI learning and mismatch detection capabilities',
  },
  {
    id: 2,
    title: 'Corporate Loan Screening',
    description:
      'Analyzes CMA data for ratio analysis, funds flow, and highlights observed deviations',
  },
]

const Transform = () => {
  return (
    <section className="w-full bg-white px-4 pb-6 sm:px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-10 xl::gap-16">

        {/* Left — Image Placeholder */}
        <div className="w-full xl:w-1/2 flex-shrink-0">
          <div className="w-full h-[400px]  xl:h-[600px] rounded-2xl bg-gray-200" />
        </div>

        {/* Right — Content */}
        <div className="w-full xl:w-1/2 flex flex-col gap-6">

          {/* Heading */}
          <H2 className="text-3xl sm:text-4xl font-extrabold  leading-tight">
            Verification, Corporate Screening, and Approval Workflows
          </H2>

          {/* Subtitle */}
          <P className=" text-sm sm:text-base leading-relaxed">
           System enables eVerification of documents, screens corporate loans with CMA data analysis, and routes applications through configurable approval matrix with multiple levels.
          </P>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col gap-4 p-5 rounded-2xl border border-[#D9D9D9] bg-[#F8F8F8] hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#2B68C3] flex items-center justify-center flex-shrink-0">
                  <HourglassIcon />
                </div>

                {/* Text */}
                <div>
                  <H4 className="text-base font-bold  mb-2 leading-snug">
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
    </section>
  )
}

export default Transform