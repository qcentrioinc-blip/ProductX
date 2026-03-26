import { useEffect, useRef, useState } from 'react'
import { H2, H3, P } from '../../../styles/Typography'

const HourglassIcon = ({ light = false }: { light?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke={light ? '#1e3a6e' : 'white'}
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

const cards = [
  {
    id: 1,
    variant: 'dark',       // dark navy background
    iconBg: 'blue',        // blue icon circle
    title: 'Slow Customer Approval',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    showBadge: false,
  },
  {
    id: 2,
    variant: 'light',      // light blue background
    iconBg: 'dark',        // dark icon circle
    title: 'Slow Customer Approval',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    showBadge: true,       // "S" badge on this card
  },
  {
    id: 3,
    variant: 'dark',
    iconBg: 'blue',
    title: 'Slow Customer Approval',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    showBadge: false,
  },
  {
    id: 4,
    variant: 'light',
    iconBg: 'dark',
    title: 'Slow Customer Approval',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    showBadge: false,
  },
]

const Card = ({
  card,
  index,
  visible,
}: {
  card: (typeof cards)[0]
  index: number
  visible: boolean
}) => {
  const isDark = card.variant === 'dark'
  const isBlueIcon = card.iconBg === 'blue'

  return (
    <div
      className={`
        relative flex flex-col justify-between rounded-2xl p-6 h-100
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDark ? 'bg-[#1e3a6e] text-white' : 'bg-[#dbeafe] text-[#143D79]'}
        hover:-translate-y-2 hover:shadow-2xl
      `}
      style={{ transitionDelay: visible ? `${index * 120}ms` : '0ms' }}
    >
      {/* Icon */}
      <div
        className={`
          w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0
          ${isBlueIcon ? 'bg-blue-500' : 'bg-gray-900'}
        `}
      >
        <HourglassIcon light={false} />
      </div>

       

      {/* Text */}
      <div className="mt-auto pt-6">
        <H3 className={`text-xl font-bold leading-snug mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          {card.title}
        </H3>
        <P className={`text-sm leading-relaxed ${isDark ? 'text-[#CCCCCC]' : 'text-[#141414]'}`}>
          {card.description}
        </P>
      </div>
    </div>
  )
}

const Automate = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 py-6 sm:px-6 md:py-10 lg:px-8 xl:px-0"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <H2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mx-auto">
            Ready to Automate Your NPA Management
          </H2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Automate