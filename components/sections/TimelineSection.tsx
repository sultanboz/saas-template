'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const milestones = [
  { quarter: 'Q1 2025', title: 'Launch', desc: 'Public beta with core features.' },
  { quarter: 'Q2 2025', title: 'Integrations', desc: '50+ native integrations.' },
  { quarter: 'Q3 2025', title: 'Enterprise', desc: 'SSO, audit logs, compliance.' },
  { quarter: 'Q4 2025', title: 'Scale', desc: 'Multi-region, 99.99% uptime.' },
]

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="roadmap"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="timeline-heading"
            className="font-display text-3xl sm:text-4xl font-bold
                       tracking-tight text-surface-50 mb-4"
          >
            Product roadmap
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Our commitment to building the best product for you.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px
                       bg-gradient-to-b from-brand-500/50 via-surface-700 to-transparent
                       hidden sm:block"
          />

          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.quarter}
                variants={itemVariant}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i}
                className="relative flex gap-6 sm:gap-8 items-start"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-500/15
                             border-2 border-brand-500/40 flex items-center justify-center
                             relative z-10"
                >
                  <CheckCircle2 size={20} className="text-brand-400" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                    {milestone.quarter}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-surface-50 mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-surface-500 text-sm leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
