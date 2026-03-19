'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const vp = { once: true, margin: '-80px' } as const

export function CtaSection() {
  return (
    <section className="py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-brand-500/18
                     bg-surface-900 overflow-hidden p-10 sm:p-16 text-center"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br
                          from-brand-500/6 via-transparent to-violet-500/3
                          pointer-events-none" />
          <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

          {/* Top border glow */}
          <div className="absolute top-0 inset-x-0 h-px
                          bg-gradient-to-r from-transparent via-brand-500/55 to-transparent" />

          {/* Ambient orbs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full
                          bg-brand-500/5 blur-[80px] pointer-events-none animate-float" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full
                          bg-violet-500/5 blur-[80px] pointer-events-none animate-float-delayed" />

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-14 h-14 rounded-2xl bg-brand-500/12
                       items-center justify-center mb-7 border border-brand-500/20
                       shadow-lg shadow-brand-500/10"
          >
            <Zap size={24} className="text-brand-400 fill-brand-400/40" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl font-bold
                       tracking-tight mb-4 text-surface-50"
          >
            Ready to ship{' '}
            <span className="text-gradient text-glow">faster?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-surface-400 text-lg max-w-xl mx-auto mb-9 leading-relaxed"
          >
            Stop spending weeks on your landing page.
            Get the template, customize in hours, ship today.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-brand-500 text-surface-950 font-semibold
                         hover:bg-brand-400 transition-all duration-200
                         shadow-xl shadow-brand-500/30
                         hover:shadow-2xl hover:shadow-brand-500/45 hover:-translate-y-0.5"
            >
              Get NexLayer
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         border border-surface-700 text-surface-300 font-medium
                         hover:border-surface-600 hover:text-surface-50
                         hover:bg-surface-800/50 transition-all duration-200"
            >
              See live demo
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="mt-7 text-sm text-surface-600"
          >
            One-time purchase · Lifetime updates · No subscription
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
