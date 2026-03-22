'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserPlus, Settings, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign up',
    desc: 'Create your account in under 2 minutes. No credit card required.',
  },
  {
    icon: Settings,
    title: 'Configure',
    desc: 'Connect your tools, set up integrations, and customize your workspace.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Go live instantly. We handle infrastructure, scaling, and uptime.',
  },
  {
    icon: CheckCircle,
    title: 'Scale',
    desc: 'Grow without limits. Add team members, upgrade plans, or expand regions.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  }),
}

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="how-heading"
    >
      <div className="absolute top-0 inset-x-0 h-px
                      bg-gradient-to-r from-transparent via-surface-800 to-transparent" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="how-heading"
            className="font-display text-3xl sm:text-4xl font-bold
                       tracking-tight text-surface-50 mb-4"
          >
            How it works
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Get started in four simple steps. No technical expertise needed.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Connection line (desktop) */}
          <div
            className="absolute top-12 left-0 right-0 hidden lg:block
                       h-px bg-gradient-to-r from-transparent via-surface-700 to-transparent"
            style={{ top: '3rem' }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariant}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full
                                  bg-brand-500 text-surface-950 text-sm font-bold mb-4
                                  border-2 border-surface-950 relative z-10">
                    {i + 1}
                  </div>
                  <div
                    className="w-16 h-16 rounded-2xl bg-surface-800 border border-surface-700
                               flex items-center justify-center mb-5
                               group-hover:border-brand-500/30 group-hover:bg-brand-500/5
                               transition-all duration-300"
                  >
                    <Icon size={26} className="text-brand-400" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-surface-50 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-surface-500 text-sm leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
