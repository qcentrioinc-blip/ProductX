"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { P } from "../../../styles/Typography"

type FilterKey =
  | "Bank Setup  "
  | "Parameterization  "
  | "User Management    "
  | "Account Operations  "
  | "Regulatory Compliance "

interface TabContentData {
  title: string
  description: string
  checkItems: string[]
  image: string
  imageAlt: string
  stats: {
    left: { label: string; icon:string }
    right: { label: string; icon: string}
  }
}

const tabContent: Record<FilterKey, TabContentData> = {
  "Bank Setup  ": {
    title: "Complete Bank Configuration and Branch Management ",
    description:
      "Establish foundational banking information, create unlimited branches, and manage multi-currency operations from a centralized interface. ",
    checkItems: [
      "Define bank details, holidays, and office accounts across all branches ",
      "Configure general ledger structures for streamlined financial management ",
      "Set up currency parameters for seamless multi-currency transaction handling ",
    ],
    image: "/ProductBankfair/f1.webp",
    imageAlt: "Table",
    stats: {
      left: { icon: "/ProductBankfair/f1i1.svg", label: "Centralize branch management with unified holiday calendars and office account configurations "},
      right: { icon: "/ProductBankfair/f1i2.svg", label: "Support multi-currency operations through flexible currency setup and exchange rate management "},
    },
  },
  "Parameterization  ": {
    title: "Flexible Product and Transaction Configuration Tools ",
    description:
      "Create and modify financial products, transaction types, and charge structures without coding or vendor support. ",
    checkItems: [
      "Design savings accounts, fixed deposits, and installment loans with custom rules ",
      "Configure amount-based and transaction-based charges with historical versioning ",
      "Set up collateral types and exception handling rules for compliance ",
    ],
    image: "/ProductBankfair/f2.webp",
    imageAlt: "Analytics Dashboard",
    stats: {
      left: { icon: "/ProductBankfair/f2i1.svg", label: " Modify banking rules and product configurations without vendor involvement or coding ", },
      right: { icon: "/ProductBankfair/f2i2.svg", label: "Maintain historical versions of charges and policies for complete audit transparency " },
    },
  },
  "User Management    ": {
    title: "Role-Based Access Control with Detailed Privileges",
    description:
      "Define user roles with specific permissions to ensure secure and appropriate system access across your organization.",
    checkItems: [
      "Create roles with privileges attached to menus and specific transactions ",
      "Assign read-only, write-only, or both access types based on responsibilities ",
      "Control access down to individual transaction types and product levels ",
    ],
    image: "/ProductBankfair/f3.webp",
    imageAlt: "Compliance Overview",
    stats: {
      left: { icon: "/ProductBankfair/f3i1.svg", label: "Enforce least-privilege access with granular permissions down to transaction levels "},
      right: { icon: "/ProductBankfair/f3i2.svg", label: "Simplify user administration through role-based groupings and privilege templates " },
    },
  },
  "Account Operations  ": {
    title: "Comprehensive Account and Member Lifecycle Management ",
    description:
      "Handle member onboarding, account modifications, teller transactions, and service requests through unified workflows. ",
    checkItems: [
      "Streamlined process for creating new customer records and managing accounts ",
      "Support for share issuance, modification, redemption, and lien noting ",
      "Teller denomination tracking for accurate cash tally and reconciliation ",
    ],
    image: "/ProductBankfair/f4.webp",
    imageAlt: "Risk Management",
    stats: {
      left: { icon: "/ProductBankfair/f4i1.svg", label: "Accelerate customer onboarding with streamlined data capture and verification workflows ",},
      right: { icon: "/ProductBankfair/f4i2.svg", label: "Ensure accurate cash management through teller denomination tracking and reconciliation "},
    },
  },
  "Regulatory Compliance ": {
    title: "Automated Compliance and Transparent Reporting ",
    description:
"Ensure regulatory adherence with automated checks, audit trails, and extensive reporting capabilities across all operations. ",
    checkItems: [
      "Generate detailed reports, including logs, audits, and transaction histories ",
      "Maintain complete transparency with comprehensive audit trails ",
      "Automate regulatory checks during onboarding and account management ",
    ],
    image: "/ProductBankfair/f5.webp",
    imageAlt: "Risk Management",
    stats: {
      left: { icon: "/ProductBankfair/f5i1.svg", label: "Stay audit-ready with comprehensive logs of all user actions and system events "},
      right: { icon: "/ProductBankfair/f5i2.svg", label: "Automate regulatory reporting to meet central bank and authority requirements "},
    },
  },
}

const Features = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Bank Setup  ")

  const filters: FilterKey[] = [
    "Bank Setup  ",
    "Parameterization  ",
    "User Management    ",
    "Account Operations  ",
    "Regulatory Compliance ",
  ]

  const currentContent = tabContent[activeFilter]

  return (
    <div className="w-full bg-white px-3.5 sm:px-4 md:px-5 pt-4">

      {/* Everything below remains EXACTLY the same as your original code */}

      {/* Title Section */}
      <div className="text-center max-w-[1360px] mx-auto mb-6 xl:mb-8">
        <h1
          className=" max-w-[1058px] mx-auto mb-2.5 xl:mb-4
                     text-[24px] md:text-[32px] lg:text-[48px]

      font-bricolage
        leading-[120%]"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          <span style={{ color: '#2B68C3' }}>Powerful Features Designed for </span>{' '}
          <span style={{ color: '#141414' }}>Comprehensive Banking Operations  </span>
        </h1>

        <p
          className="font-normal text-[#141414] leading-[140%] max-w-[750px] mx-auto
                     px-1 sm:px-2 xl:px-5
                     text-[12px] sm:text-[13px] md:text-sm xl:text-base"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Bankfair combines parameterization, automation, and security to streamline core banking and loan management for financial institutions of all sizes. 
          </p>
      </div>

      {/* Tabs */}
      <div
        className="overflow-x-auto mb-6 [&::-webkit-scrollbar]:hidden"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' } as React.CSSProperties}
      >
        <div className="flex gap-[19px] pb-1.5 xl:pb-0
                        min-w-max lg:min-w-0 xl:min-w-0
                        lg:flex-wrap lg:justify-center lg:max-w-7xl lg:mx-auto xl:flex-wrap xl:justify-center xl:max-w-7xl xl:mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-full font-medium whitespace-nowrap transition-all border border-[#8b8888] cursor-pointer
                px-3 py-1.5 text-[11px]
                sm:px-4 sm:py-2 sm:text-xs lg:text-sm lg:px-8 lg:py-4
                xl:px-8 xl:py-4 xl:text-sm
                ${activeFilter === filter ? 'bg-[#2B68C3] text-white' : 'bg-white text-[#141414]'}
              `}
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto
                      flex flex-col xl:flex-row
                      gap-4 sm:gap-5 xl:gap-6
                      items-start
                      p-2.5 sm:p-3 md:p-4 xl:p-6">

        <div className="
          w-full xl:w-[530px] xl:min-w-[530px] xl:shrink-0
          h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[512px]
          rounded-[4px] overflow-hidden bg-[#D9D9D9]
        ">
          <img
            src={currentContent.image}
            alt={currentContent.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Right Column ── */}
        <div className="w-full xl:w-[750px] xl:min-h-[512px] flex flex-col">

          {/* Top: Title + Desc + Checks */}
          <div className="flex flex-col gap-4 xl:gap-6">

            {/* Title: 20→22→24→26→32px */}
            <h2
              className="font-bold text-[#141414] m-0 leading-none
                         text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[32px]"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {currentContent.title}
            </h2>

            {/* Description: 12→13→14→16px */}
            <P
              className="font-normal text-[#141414] m-0 leading-[150%]
                         "
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {currentContent.description}
            </P>

            {/* Check Items */}
            <div className="flex flex-col gap-3 sm:gap-3.5 xl:gap-6">
              {currentContent.checkItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check
                    size={18}
                    style={{ color: '#000000', flexShrink: 0, marginTop: '2px' }}
                  />
                  <P
                    className="text-[#2A2A2A] leading-[140%] m-0
                               "
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {item}
                  </P>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom Stats ──
              Always side by side (left stat | divider | right stat)
              marginTop scales: 20→24→28→32→56px
          */}
          <div className="
            flex flex-row items-start
            gap-3 sm:gap-4 xl:gap-6
            mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-[56px]
            w-full xl:w-[691px]
          ">

            {/* Left Stat */}
            <div className="flex-1 xl:w-[305px] flex flex-col items-start
                            gap-2.5 sm:gap-3.5 xl:gap-6">

              {/* Arrow + Value */}
              <div className="flex items-center gap-2 xl:gap-3">
                <img
  src={currentContent.stats.left.icon}
  alt=""
  className="w-7 sm:w-9 md:w-10 lg:w-12  h-auto object-contain shrink-0"
/>
                
              </div>                

              {/* Label: 11→13→14→15→18px */}
              <P
                className="font-normal text-[#141414] leading-[140%]  m-0
                           xl:w-[290px]
                           "
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {currentContent.stats.left.label}
              </P>

              
            </div>

            {/* Divider — self-stretch auto-matches column height */}
            <div className="w-px bg-[#C6C6C6] shrink-0 self-stretch" />

            {/* Right Stat */}
            <div className="flex-1 xl:w-[305px] flex flex-col items-start
                            gap-2.5 sm:gap-3.5 xl:gap-6">
              {/* Arrow + Value */}
              <div className="flex items-center gap-2 xl:gap-3">
                <img
  src={currentContent.stats.right.icon}
  alt=""
  className="w-7 sm:w-9 md:w-10 lg:w-12  h-auto object-contain shrink-0"
/>
                
              </div>                  

              {/* Label: 11→13→14→15→18px */}
              <P
                className="font-normal text-[#141414] leading-[140%] m-0
                           xl:w-[290px]
                           "
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {currentContent.stats.right.label}
              </P>

              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
