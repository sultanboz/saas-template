'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
}

export function HeroGradient() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 pt-24 pb-20 overflow-hidden">
      {/* Background — mesh gradient */}
      <div className="absolute inset-0 bg-surface-950">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -10%, rgba(34,197,94,0.25), transparent),
              radial-gradient(ellipse 60% 40% at 90% 40%, rgba(99,102,241,0.12), transparent),
              radial-gradient(ellipse 50% 30% at 10% 80%, rgba(34,197,94,0.08), transparent)
            `,
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-70" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6"
        >
          <Badge variant="brand" dot>New — v3 template variant</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     font-bold tracking-tight text-surface-50 mb-6
                     leading-[1.08]"
        >
          Build your product
          <br />
          <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-emerald-400
                          bg-clip-text text-transparent">
            with confidence
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-surface-400 max-w-2xl mb-10
                     leading-relaxed"
        >
          A complete design system with gradient hero, services, portfolio,
          video demo, timeline, and more — crafted for ThemeForest.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg
                       bg-brand-500 text-surface-950 font-medium
                       hover:bg-brand-400 transition-all duration-200
                       shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40
                       hover:-translate-y-0.5"
          >
            Start building
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                       border border-surface-700 text-surface-300 font-medium
                       hover:border-surface-600 hover:text-surface-50
                       hover:bg-surface-800/50 transition-all duration-200
                       group"
          >
            <span className="w-10 h-10 rounded-full bg-surface-800 flex items-center
                            justify-center group-hover:bg-brand-500/20 transition-colors">
              <Play size={16} className="text-brand-400 ml-0.5" fill="currentColor" />
            </span>
            Watch demo
          </button>
        </motion.div>

        {/* Trust line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-14 flex items-center gap-6 text-sm text-surface-500"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-surface-950
                           bg-surface-700 flex items-center justify-center
                           text-xs font-semibold text-surface-300"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span>
            Trusted by <strong className="text-surface-300">2,400+</strong> teams worldwide
          </span>
        </motion.div>
      </div>
    </section>
  )
}
