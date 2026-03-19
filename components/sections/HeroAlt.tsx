'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Badge }  from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { AvatarGroup } from '@/components/ui/Avatar'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 24 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export function HeroAlt() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center
                        overflow-hidden px-4 sm:px-6 py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[700px] rounded-full
                      bg-brand-500/8 blur-[160px] pointer-events-none" />

      {/* Content — centered */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">

        {/* Pill badge */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <Badge variant="brand" dot>v2.0 just shipped — read the changelog</Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl font-display font-bold
                     text-surface-50 leading-[1.05] tracking-tight mb-6"
        >
          Launch your SaaS<br />
          <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
            in days, not months.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-surface-400 leading-relaxed max-w-xl
                     mx-auto mb-10"
        >
          NexLayer is a Next.js 15 template with 15+ sections, Framer Motion
          animations, dark/light mode, and every component you need — pre-built
          and ready to ship.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center
                                                  justify-center gap-3 mb-14">
          <Button size="lg">
            Get NexLayer <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="secondary">
            View components
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AvatarGroup
            size="sm"
            max={5}
            avatars={[
              { fallback: 'Alex',  color: 'violet'  },
              { fallback: 'Sam',   color: 'blue'    },
              { fallback: 'Jo',    color: 'emerald' },
              { fallback: 'Kim',   color: 'amber'   },
              { fallback: 'Mx',    color: 'rose'    },
              { fallback: 'Pat',   color: 'cyan'    },
            ]}
          />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm text-surface-400">
              <span className="text-surface-200 font-medium">2,400+</span> developers love it
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
