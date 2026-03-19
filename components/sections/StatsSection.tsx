'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    value: 200,
    suffix: '+',
    label: 'Developers shipped',
    description: 'teams and indie hackers',
  },
  {
    value: 98,
    suffix: '',
    label: 'Lighthouse score',
    description: 'performance, a11y, SEO',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Sections included',
    description: 'ready to customize',
  },
  {
    value: 2,
    suffix: 's',
    label: 'Average setup',
    description: 'from clone to running',
  },
]

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number
  suffix: string
  active: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1600
    const steps    = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const itemVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export function StatsSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 px-4 sm:px-6 relative" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">Key metrics</h2>

      {/* Subtle separator */}
      <div className="absolute top-0 inset-x-0 h-px
                      bg-gradient-to-r from-transparent via-surface-800 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px
                        bg-surface-800/50 rounded-2xl overflow-hidden
                        border border-surface-800">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i}
              className="relative bg-surface-950 px-8 py-10 text-center
                         hover:bg-surface-900/50 transition-colors duration-300 group"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 pointer-events-none
                              bg-brand-500/3" />

              <div className="font-display font-bold text-4xl sm:text-5xl text-surface-50 mb-1
                              tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} active={isInView} />
              </div>
              <div className="text-sm font-medium text-surface-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-surface-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
