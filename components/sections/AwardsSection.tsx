'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const awards = [
  { name: 'Product Hunt', badge: 'Top 5', year: '2025' },
  { name: 'G2', badge: 'Leader', year: '2025' },
  { name: 'Capterra', badge: '4.9/5', year: '2025' },
  { name: 'Gartner', badge: 'Cool Vendor', year: '2024' },
]

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
}

export function AwardsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="awards"
      className="py-20 px-4 sm:px-6"
      aria-labelledby="awards-heading"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="awards-heading"
            className="font-display text-2xl sm:text-3xl font-bold
                       tracking-tight text-surface-50 mb-2"
          >
            Recognized by industry leaders
          </h2>
          <p className="text-surface-500 text-sm">
            Awards and ratings from trusted review platforms.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.name}
              variants={itemVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i}
              className="group flex items-center gap-4 px-6 py-4 rounded-2xl
                         border border-surface-800 bg-surface-900/50
                         hover:border-surface-700 hover:bg-surface-900
                         transition-all duration-300 min-w-[180px]"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-800 flex items-center
                             justify-center font-display font-bold text-surface-400
                             text-sm group-hover:text-brand-400 transition-colors">
                {award.name.slice(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-surface-50 text-sm">
                  {award.badge}
                </div>
                <div className="text-xs text-surface-500">{award.name} · {award.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
