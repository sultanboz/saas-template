'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Zap, Building2, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Starter',
    icon: Rocket,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for side projects and early-stage products.',
    features: [
      '5 sections included',
      'Dark mode only',
      'Basic documentation',
      'Community support',
      '1 color theme',
    ],
    cta: 'Download free',
    ctaHref: '#',
    highlighted: false,
  },
  {
    name: 'Pro',
    icon: Zap,
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: 'Everything you need to launch a serious SaaS product.',
    features: [
      'All 15+ sections',
      'Dark + Light mode',
      'Full documentation',
      'Priority support (48h)',
      '5 color themes',
      'Figma source file',
      'Framer Motion animations',
      'Terminal component',
    ],
    cta: 'Get Pro',
    ctaHref: '#',
    highlighted: true,
  },
  {
    name: 'Agency',
    icon: Building2,
    monthlyPrice: 79,
    yearlyPrice: 59,
    description: 'Extended license for client work and agencies.',
    features: [
      'Everything in Pro',
      'Extended license',
      'Unlimited client use',
      '1-on-1 support',
      'Custom color themes',
      'Early access to new sections',
    ],
    cta: 'Contact us',
    ctaHref: 'mailto:hello@nexlayer.dev',
    highlighted: false,
  },
]

const cardVariant = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const ref    = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[900px] h-[500px] rounded-full
                      bg-brand-500/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          border border-surface-800 bg-surface-900/80 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs text-surface-400 font-medium">Simple pricing</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-surface-50">
            One purchase,{' '}
            <span className="text-gradient">lifetime access</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            No subscriptions. No recurring fees. Pay once, use forever.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full
                          bg-surface-900 border border-surface-800">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                !isYearly
                  ? 'bg-surface-700 text-surface-50 shadow-sm'
                  : 'text-surface-400 hover:text-surface-300'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2',
                isYearly
                  ? 'bg-surface-700 text-surface-50 shadow-sm'
                  : 'text-surface-400 hover:text-surface-300'
              )}
            >
              Yearly
              <span className="text-xs bg-brand-500/20 text-brand-400
                               px-1.5 py-0.5 rounded-full font-semibold">
                -35%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const Icon  = plan.icon

            return (
              <motion.div
                key={plan.name}
                variants={cardVariant}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i}
                className={cn(
                  'relative rounded-2xl border p-7 flex flex-col',
                  'transition-all duration-300',
                  plan.highlighted
                    ? 'border-brand-500/40 bg-surface-900 shadow-2xl shadow-brand-500/8 md:scale-[1.03] md:-mt-2 md:-mb-2'
                    : 'border-surface-800 bg-surface-900/40 hover:border-surface-700 hover:bg-surface-900/60'
                )}
              >
                {/* Top glow line for highlighted */}
                {plan.highlighted && (
                  <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl
                                  bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
                )}

                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1 rounded-full bg-brand-500 text-surface-950
                                    text-xs font-semibold shadow-lg shadow-brand-500/30">
                      Most popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={cn(
                    'w-9 h-9 rounded-xl flex items-center justify-center',
                    'transition-transform duration-300 group-hover:scale-110',
                    plan.highlighted ? 'bg-brand-500/15' : 'bg-surface-800'
                  )}>
                    <Icon
                      size={17}
                      className={plan.highlighted ? 'text-brand-400' : 'text-surface-400'}
                    />
                  </div>
                  <span className="font-display font-semibold text-surface-50">
                    {plan.name}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1.5">
                    <motion.span
                      key={`${plan.name}-${price}`}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-display font-bold text-4xl text-surface-50"
                    >
                      {price === 0 ? 'Free' : `$${price}`}
                    </motion.span>
                    {price > 0 && (
                      <span className="text-surface-500 text-sm">
                        {isYearly ? '/ year' : '/ once'}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-surface-500 mt-1.5 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={cn(
                    'w-full py-2.5 rounded-xl text-sm font-semibold text-center mb-6',
                    'transition-all duration-200',
                    plan.highlighted
                      ? 'bg-brand-500 text-surface-950 hover:bg-brand-400 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5'
                      : 'border border-surface-700 text-surface-300 hover:border-surface-600 hover:text-surface-100 hover:bg-surface-800/50'
                  )}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="flex flex-col gap-3 mt-auto">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={14}
                        className={cn(
                          'flex-shrink-0 mt-0.5',
                          plan.highlighted ? 'text-brand-400' : 'text-surface-600'
                        )}
                      />
                      <span className="text-surface-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-surface-600 mt-8"
        >
          All plans include lifetime updates. No refunds after download.{' '}
          <a href="#faq" className="text-surface-400 hover:text-surface-300
                                   underline underline-offset-2 transition-colors">
            Questions? See FAQ →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
