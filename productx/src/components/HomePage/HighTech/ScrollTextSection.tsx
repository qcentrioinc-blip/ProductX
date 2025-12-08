'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextSection {
  id: number;
  title: string;
  subtitle?: string;
}

interface ScrollTextSectionProps {
  sections: TextSection[];
}

function ScrollSection({ section, index }: { section: TextSection; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={ref}
      className={`
        flex items-center justify-start
        min-h-[80vh] sm:min-h-screen
        py-16 sm:py-[20vh]
      `}
      style={{
        // first section: no extra top padding so it aligns nicely
        paddingTop: index === 0 ? '0' : undefined,
      }}
    >
      <div className="max-w-4xl w-full">
        {section.subtitle && (
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : -30,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
              // fluid subtitle size: smaller on mobile, grows on desktop
              fontSize: 'clamp(14px, 2.2vw, 20px)', // responsive clamp [web:140][web:144]
              color: '#F99526',
              marginBottom: '16px',
            }}
          >
            {section.subtitle}
          </motion.p>
        )}

        <motion.h1
          className="
            font-semibold uppercase
            leading-[120%]
            tracking-[0px]
          "
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -50,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            background: 'var(--title-dark, #F5F5F5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // fluid title size: good for mobile → large desktop [web:140][web:144]
            fontSize: 'clamp(28px, 5vw, 72px)',
            // allow wrapping on small screens
            whiteSpace: 'nowrap',
          }}
        >
          {section.title}
        </motion.h1>
      </div>
    </div>
  );
}

export default function ScrollTextSection({ sections }: ScrollTextSectionProps) {
  return (
    <div className="relative">
      {sections.map((section, index) => (
        <ScrollSection key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}
