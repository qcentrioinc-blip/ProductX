import { useEffect, useRef, useState } from "react"
import { H2, P } from "../../../styles/Typography"

const stepsData = [
  {
    id: 1,
    title: "ACH Automated Clearing House Processing",
    para1: "ACH module handles high-volume payment processing with cheque scanner integration and X9 standards. Supports inbound and outbound transactions with multiple batches and configurable intervals for automated clearing.",
    para2: " Configurable intervals for automated clearing. Rotate and view cheque images at different angles to minimize fraud. Rejection options available with supervisor approval.",
    keywords: ["High Volume", "Multiple Batches"],
    image: "/step1.webp",
  },
  {
    id: 2,
    title: " NACHA National Automated Clearing Association ",
    para1: "NACHA module supports low-value deferred and instant fund transfers with net settlement. Enables single transfers, bulk transactions, and mandate management for recurring payments across various use cases.",
    para2: " Handles recurring payments across various use cases. Settled in deferred time enabling institutions to manage liquidity. Available 24/7 with low turnaround time.",
     keywords: ["Deferred Settlement", "Instant Transfers"],
    image: "/step2.webp",
  },
  {
    id: 3,
    title: "RTGS Real Time Gross Settlement ",
    para1: "RTGS module facilitates high-value fund transfers using SWIFT message formats. Supports outbound credit, outbound returns, inbound credit, and inbound returns with settlement to bank and central bank accounts.",
    para2: "Settlement to bank own accounts and central bank accounts. Enables cashless and paperless transactions. Risk mitigated with automated processing and maker-checker controls.",
     keywords: ["High Value", "Gross Settlement"],
    image: "/step3.webp",
  },
  {
    id: 4,
    title: "Anti Money Laundering Integration",
    para1: "AML module integrates with Sherlock for comprehensive transaction screening. Supports standard and institution-specific lists with real-time and batch checks. Configurable limits for transaction amount and count",
    para2: "Configurable independent limits for transaction amount and count. Cross-reference beneficiary for inward and outward transactions. Complete AML compliance coverage.",
    keywords: ["Real-time Checks"," Batch Checks"],
    image: "/step4.webp",
  },
]

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index + 1)
          }
        },
        { threshold: 0.6 }
      )

      observer.observe(ref)
    })
  }, [])

  const active = stepsData[activeStep - 1]

  return (
  <section className="w-full bg-white relative">

    {/* SCROLL AREA (4 steps) */}
    <div className="h-[400vh] relative">

      {/* STICKY CONTENT */}
      <div className="sticky top-0  h-[90vh] lg:h-[85vh] xl:h-screen flex  items-start xl:items-center">

        <div className="max-w-7xl mx-auto px-6 xl:px-0 w-full">

          <div className="grid xl:grid-cols-[1fr_2fr] xl:gap-20 pt-10 items-center">

            {/* LEFT IMAGE PANEL */}
            <div className="bg-[#D9D9D9] rounded-2xl h-[300px] lg:h-[600px] overflow-hidden">
              <img
                src={active.image}
                alt="step"
                className="w-full h-full xl:w-[300px] object-cover transition-all duration-500"
              />
            </div>

            {/* RIGHT CONTENT WRAPPER */}
            <div className="relative flex items-center">

              {/* STEPPER (ON BORDER) */}
              <div className="absolute xl:-left-8 xl:top-16 -left-4 top-18 h-full flex flex-col items-center">

                
                {stepsData.map((step, i) => (
                  <div key={step.id} className="flex flex-col items-center  z-10">

                    <div
                      className={`xl:w-18 xl:h-18 h-12 w-12  rounded-full flex font-bricolage text-[32px] items-center justify-center font-semibold transition-all
                      ${
                        activeStep === step.id
                          ? "bg-[#2B68C3] text-white scale-110"
                          : "border-4 border-[#2B68C3] bg-white text-[#2B68C3]"
                      }`}
                    >
                      {step.id}
                    </div>

                    {i !== stepsData.length - 1 && (
                      <div className="h-12" />
                    )}
                  </div>
                ))}
              </div>

              {/* TEXT PANEL */}
              <div className="w-full h-[480px]  pl-10 mt-10 xl:mt-0 xl:pl-20 lg:h-[450px] xl:h-[550px] bg-[#F6F6F6] border-l-4 border-black py-4  flex flex-col justify-start">

                <H2 className="text-3xl lg:text-4xl font-bold my-4 leading-snug">
                  {active.title}
                </H2>

                <P className="mb-6 max-w-xl leading-normal">
                  {active.para1}
                </P>

                <P className="mb-6 max-w-xl leading-normal">
                  {active.para2}
                </P>

             <div className="flex gap-4 flex-wrap">
  {active.keywords.map((word, i) => (
    <span
      key={i}
      className={`px-10 py-3 rounded-full font-bricolage text-[18px] md:text-[24px]  ${
        i === 0
          ? "bg-[#2B68C3] text-white"
          : "bg-gray-200 text-[#2B68C3]"
      }`}
    >
      {word}
    </span>
  ))}
</div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TRIGGERS */}
      <div className="absolute top-0 left-0 w-full">
        {stepsData.map((_, i) => (
          <div
            key={i}
            ref={(el) => {refs.current[i] = el}}
            className=" h-[60vh] xl:h-screen"
          />
        ))}
      </div>

    </div>
  </section>
)
}

export default Steps