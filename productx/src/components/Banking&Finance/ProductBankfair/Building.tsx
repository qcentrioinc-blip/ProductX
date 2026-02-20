"use client"

import { useState } from "react"
import { Check } from "lucide-react"

type FilterKey = "Duis aute" | "Duis jhgfgb aute" | "Duis aute sdfgh" | "kihg Duis aute" | "Duis latest"

interface TabContentData {
  title: string
  description: string
  checkItems: string[]
  image: string
  imageAlt: string
  stats: {
    left: { label: string; value: string }
    right: { label: string; value: string }
  }
}

const tabContent: Record<FilterKey, TabContentData> = {
  "Duis aute": {
    title: "Consecte adipiscing werdasec ku quorti wer",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    checkItems: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt",
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip",
    ],
    image: "/Products/Table.png",
    imageAlt: "Table",
    stats: {
      left: { label: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique", value: "80%" },
      right: { label: "Sed ac faucibus lectus. Ut sed eros vel sapien tristique", value: "10X" },
    },
  },
  "Duis jhgfgb aute": {
    title: "Praesent vitae eros at lorem facilisis tincidunt",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    checkItems: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur",
    ],
    image: "/Products/Table.png",
    imageAlt: "Analytics Dashboard",
    stats: {
      left: { label: "Improved processing speed across all operations", value: "95%" },
      right: { label: "Faster customer onboarding experience", value: "5X" },
    },
  },
  "Duis aute sdfgh": {
    title: "Aliquam erat volutpat integer malesuada nunc",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate",
    checkItems: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus",
    ],
    image: "/Products/Table.png",
    imageAlt: "Compliance Overview",
    stats: {
      left: { label: "Reduction in compliance audit preparation time", value: "70%" },
      right: { label: "Increase in regulatory adherence score", value: "3X" },
    },
  },
  "kihg Duis aute": {
    title: "Vestibulum ante ipsum primis in faucibus orci",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quis autem vel eum iure reprehenderit",
    checkItems: [
      "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore",
    ],
    image: "/Products/Table.png",
    imageAlt: "Risk Management",
    stats: {
      left: { label: "Decrease in fraudulent transaction detection time", value: "60%" },
      right: { label: "More accurate risk assessment predictions", value: "8X" },
    },
  },
  "Duis latest": {
    title: "Duis aute irure dolor in reprehenderit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    checkItems: [
      "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore",
    ],
    image: "/Products/Table.png",
    imageAlt: "Risk Management",
    stats: {
      left: { label: "Decrease in fraudulent transaction detection time", value: "60%" },
      right: { label: "More accurate risk assessment predictions", value: "8X" },
    },
  },
}

const Building = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Duis aute")
  const filters: FilterKey[] = ["Duis aute", "Duis jhgfgb aute", "Duis aute sdfgh", "kihg Duis aute", "Duis latest"]
  const currentContent = tabContent[activeFilter]

  return (
    <div className="w-full bg-white py-6 px-3.5 sm:py-8 sm:px-4 md:py-9 md:px-5 xl:py-[50px] xl:px-5">

      <div className="text-center max-w-[1360px] mx-auto mb-6 xl:mb-8">

        {/* Title: scales 24→30→38→44→72px across breakpoints */}
        <h1
          className="font-bold leading-none max-w-[1058px] mx-auto mb-2.5 xl:mb-4
                     text-[24px] sm:text-[30px] md:text-[38px] lg:text-[44px] xl:text-[72px]"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          <span style={{ color: '#2B68C3' }}>Duis aute irure dolor in</span>{' '}
          <span style={{ color: '#666666' }}>reprehenderit in Duis</span>
        </h1>

        {/* Description: scales 12→13→14→16px */}
        <p
          className="font-normal text-[#141414] leading-[140%] max-w-[921px] mx-auto
                     px-1 sm:px-2 xl:px-5
                     text-[12px] sm:text-[13px] md:text-sm xl:text-base"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
      </div>

      {/* ── Tabs ──
          Mobile/Tablet: horizontally scrollable (min-w-max keeps all on one line)
          Desktop (xl): centered, wrapped, max-width 658px
      */}
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
                rounded-full font-medium whitespace-nowrap transition-all border border-[#E0E0E0] cursor-pointer
                px-3 py-1.5 text-[11px]
                sm:px-4 sm:py-2 sm:text-xs lg:text-sm lg:px-8 lg:py-4
                xl:px-8 xl:py-4 xl:text-sm
                ${activeFilter === filter ? 'bg-[#2B68C3] text-white' : 'bg-white text-[#666666]'}
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
              className="font-bold text-[#666666] m-0 leading-none
                         text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[32px]"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {currentContent.title}
            </h2>

            {/* Description: 12→13→14→16px */}
            <p
              className="font-normal text-[#141414] m-0 leading-[150%] xl:leading-none
                         text-[12px] sm:text-[13px] md:text-sm xl:text-base"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {currentContent.description}
            </p>

            {/* Check Items */}
            <div className="flex flex-col gap-3 sm:gap-3.5 xl:gap-6">
              {currentContent.checkItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check
                    size={18}
                    style={{ color: '#000000', flexShrink: 0, marginTop: '2px' }}
                  />
                  <p
                    className="text-[#2A2A2A] leading-[140%] m-0
                               text-[12px] sm:text-[13px] xl:text-sm"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {item}
                  </p>
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

              {/* Label: 11→13→14→15→18px */}
              <p
                className="font-normal text-[#141414] leading-[140%] xl:leading-none m-0
                           xl:w-[252px]
                           text-[11px] sm:text-[13px] md:text-sm lg:text-[15px] xl:text-lg"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {currentContent.stats.left.label}
              </p>

              {/* Arrow + Value */}
              <div className="flex items-center gap-2 xl:gap-3">
                <img
                  src="/TrendUp.svg"
                  alt="Trend Up"
                  className="w-7 sm:w-9 md:w-10 lg:w-12 xl:w-[60px] h-auto object-contain shrink-0"
                />
                {/* Value: 34→42→48→52→64px */}
                <h3
                  className="font-medium text-[#666666] leading-none m-0
                             text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[64px]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {currentContent.stats.left.value}
                </h3>
              </div>
            </div>

            {/* Divider — self-stretch auto-matches column height */}
            <div className="w-px bg-[#C6C6C6] shrink-0 self-stretch" />

            {/* Right Stat */}
            <div className="flex-1 xl:w-[305px] flex flex-col items-start
                            gap-2.5 sm:gap-3.5 xl:gap-6">

              {/* Label: 11→13→14→15→18px */}
              <p
                className="font-normal text-[#141414] leading-[140%] xl:leading-none m-0
                           xl:w-[252px]
                           text-[11px] sm:text-[13px] md:text-sm lg:text-[15px] xl:text-lg"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {currentContent.stats.right.label}
              </p>

              {/* Arrow + Value */}
              <div className="flex items-center gap-2 xl:gap-3">
                <img
                  src="/TrendUp.svg"
                  alt="Trend Up"
                  className="w-7 sm:w-9 md:w-10 lg:w-12 xl:w-[60px] h-auto object-contain shrink-0"
                />
                {/* Value: 34→42→48→52→64px */}
                <h3
                  className="font-medium text-[#666666] leading-none m-0
                             text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[64px]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {currentContent.stats.right.value}
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Building
