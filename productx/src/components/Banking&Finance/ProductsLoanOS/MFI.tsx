import React, { useEffect, useRef, useState } from 'react'
import { H4, P } from '../../../styles/Typography'

const HourglassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-white"
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

const featureCards = [
  {
    title: 'Slow Customer Approval Decisions',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  },
  {
    title: 'Slow Customer Approval Decisions',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  },
]

const FeatureCard = ({
  card,
  visible,
  delay,
}: {
  card: (typeof featureCards)[0]
  visible: boolean
  delay: number
}) => (
  <div
    className={`
      flex flex-col gap-3 p-5 rounded-2xl border border-gray-200 bg-white
      hover:shadow-lg transition-all duration-500
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
      <HourglassIcon />
    </div>
    <H4 className="text-sm font-bold text-gray-900 leading-snug">{card.title}</H4>
    <P className="text-xs text-gray-500 leading-relaxed">{card.desc}</P>
  </div>
)

/* ── SVG Org Chart ── */
const OrgChart = ({ visible }: { visible: boolean }) => {
  const lineStyle = (delay: number) => ({
    fill: 'none' as const,
    stroke: '#1e40af',
    strokeWidth: 2,
    strokeDasharray: 500,
    strokeDashoffset: visible ? 0 : 500,
    transition: `stroke-dashoffset 0.7s ease ${delay}ms`,
  })

  const fadeIn = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 0.4s ease ${delay}ms`,
  })

  return (
    <svg viewBox="0 0 560 490" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

      {/* Outer border */}
      <rect
        x="4" y="4" width="552" height="482"
        rx="24"
        fill="none"
        stroke="#1e40af"
        strokeWidth="2"
        strokeDasharray={visible ? '0' : '2300'}
        strokeDashoffset={visible ? '0' : '2300'}
        style={{ transition: 'stroke-dashoffset 1.6s ease 0.1s' }}
      />

      {/* Bank → Branch L */}
      <path d="M280,82 C280,114 148,114 148,142" style={lineStyle(300)} />
      {/* Bank → Branch M */}
      <path d="M280,82 L280,142" style={lineStyle(360)} />
      {/* Bank → Branch R */}
      <path d="M280,82 C280,114 412,114 412,142" style={lineStyle(420)} />

      {/* Branch L → Center L */}
      <path d="M148,176 C148,210 215,210 215,242" style={lineStyle(520)} />
      {/* Branch M → Center L */}
      <path d="M280,176 C280,210 215,210 215,242" style={lineStyle(560)} />
      {/* Branch M → Center R */}
      <path d="M280,176 C280,210 345,210 345,242" style={lineStyle(600)} />
      {/* Branch R → Center R */}
      <path d="M412,176 C412,210 345,210 345,242" style={lineStyle(640)} />

      {/* Center L → Group L */}
      <path d="M215,276 L215,346" style={lineStyle(740)} />
      {/* Center R → Group R */}
      <path d="M345,276 L345,346" style={lineStyle(780)} />

      {/* Group L → Member L */}
      <path d="M215,380 C215,410 183,410 183,438" style={lineStyle(880)} />
      {/* Group L → Member R */}
      <path d="M215,380 C215,410 247,410 247,438" style={lineStyle(900)} />
      {/* Group R → Member RL */}
      <path d="M345,380 C345,410 313,410 313,438" style={lineStyle(920)} />
      {/* Group R → Member RR */}
      <path d="M345,380 C345,410 377,410 377,438" style={lineStyle(940)} />

      {/* Bank / MFI */}
      <g style={fadeIn(100)}>
        <rect x="168" y="32" width="224" height="52" rx="26" fill="#1e40af" />
        <text x="280" y="64" textAnchor="middle" fill="white" fontSize="22" fontWeight="700" fontFamily="system-ui,sans-serif">Bank / MFI</text>
      </g>

      {/* Branch nodes */}
      {[
        { x: 98, y: 142 },
        { x: 230, y: 142 },
        { x: 362, y: 142 },
      ].map(({ x, y }, i) => (
        <g key={i} style={fadeIn(350 + i * 80)}>
          <rect x={x} y={y} width="100" height="34" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1.5" />
          <text x={x + 50} y={y + 22} textAnchor="middle" fill="#1e3a6e" fontSize="14" fontWeight="600" fontFamily="system-ui,sans-serif">Branch</text>
        </g>
      ))}

      {/* Center nodes */}
      {[
        { x: 165, y: 242 },
        { x: 295, y: 242 },
      ].map(({ x, y }, i) => (
        <g key={i} style={fadeIn(620 + i * 80)}>
          <rect x={x} y={y} width="100" height="34" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <text x={x + 50} y={y + 22} textAnchor="middle" fill="#1e3a6e" fontSize="14" fontWeight="600" fontFamily="system-ui,sans-serif">Center</text>
        </g>
      ))}

      {/* Group nodes */}
      {[
        { x: 165, y: 346 },
        { x: 295, y: 346 },
      ].map(({ x, y }, i) => (
        <g key={i} style={fadeIn(820 + i * 80)}>
          <rect x={x} y={y} width="100" height="34" rx="8" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
          <text x={x + 50} y={y + 22} textAnchor="middle" fill="#1e3a6e" fontSize="14" fontWeight="600" fontFamily="system-ui,sans-serif">Group</text>
        </g>
      ))}

      {/* Member nodes */}
      {[
        { x: 133, y: 438 },
        { x: 197, y: 438 },
        { x: 263, y: 438 },
        { x: 327, y: 438 },
      ].map(({ x, y }, i) => (
        <g key={i} style={fadeIn(980 + i * 60)}>
          <rect x={x} y={y} width="90" height="32" rx="7" fill="white" stroke="#93c5fd" strokeWidth="1.5" />
          <text x={x + 45} y={y + 21} textAnchor="middle" fill="#1e3a6e" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Member</text>
        </g>
      ))}
    </svg>
  )
}

/* ── Mobile vertical hierarchy ── */
const MobileHierarchy = ({ visible }: { visible: boolean }) => {
  const levels = [
    { label: 'Bank / MFI', cls: 'bg-[#1e40af] text-white rounded-full px-10' },
    { label: 'Branch', cls: 'bg-white border border-blue-300 text-[#1e3a6e] rounded-lg px-8' },
    { label: 'Center', cls: 'bg-slate-200 border border-slate-400 text-[#1e3a6e] rounded-lg px-8' },
    { label: 'Group', cls: 'bg-blue-200 border border-blue-400 text-[#1e3a6e] rounded-lg px-8' },
    { label: 'Member', cls: 'bg-white border border-blue-300 text-[#1e3a6e] rounded-lg px-8' },
  ]
  return (
    <div className="flex flex-col items-center gap-0">
      {levels.map((l, i) => (
        <React.Fragment key={l.label}>
          <div
            className={`py-2.5 font-semibold text-sm ${l.cls} transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {l.label}
          </div>
          {i < levels.length - 1 && (
            <div
              className={`w-0.5 h-5 bg-blue-400 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 120 + 60}ms` }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

const MFI = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="w-full bg-[#dbeafe] px-4 py-14 sm:px-6 lg:px-8 x:px-0">
      <div className="max-w-7xl mx-auto">

        {/* ── Desktop: all inside one bg container ── */}
        <div className="hidden lg:block">
          <div className="relative rounded-3xl px-8  ">
            <div className="grid grid-cols-[220px_1fr_220px] gap-6 items-end min-h-[500px]">

              {/* Left feature card */}
              <div className="flex items-center justify-center h-full">
                <FeatureCard card={featureCards[0]} visible={visible} delay={900} />
              </div>

              {/* Org chart — takes remaining center space */}
              <div>
                <OrgChart visible={visible} />
              </div>

              {/* Right feature card */}
              <div className="flex items-center justify-center h-full">
                <FeatureCard card={featureCards[1]} visible={visible} delay={1000} />
              </div>

            </div>
          </div>
        </div>

        {/* ── Mobile / tablet ── */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="w-full rounded-3xl bg-[#dbeafe] p-6 flex justify-center">
            <div className="w-full max-w-xs">
              <MobileHierarchy visible={visible} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureCards.map((card, i) => (
              <FeatureCard key={i} card={card} visible={visible} delay={600 + i * 150} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default MFI