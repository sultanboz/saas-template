'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  LayoutDashboard,
  Code2,
  Shield,
  Zap,
  BarChart3,
  Globe,
} from 'lucide-react'

const services = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard & Analytics',
    desc: 'Real-time insights and customizable widgets for your business metrics.',
  },
  {
    icon: Code2,
    title: 'Developer APIs',
    desc: 'RESTful and GraphQL APIs with comprehensive documentation.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Enterprise-grade security with SOC 2 and GDPR compliance.',
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Workflow automation with triggers, actions, and integrations.',
  },
  {
    icon: BarChart3,
    title: 'Reporting',
    desc: 'Generate beautiful reports and export to PDF or Excel.',
  },
  {
    icon: Globe,
    title: 'Multi-Region',
    desc: 'Deploy globally with automatic failover and CDN.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
}

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl font-bold
                       tracking-tight text-surface-50 mb-4"
          >
            Everything you need
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            From analytics to automation — all the tools to scale your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                variants={cardVariant}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i}
                className="group p-6 rounded-2xl border border-surface-800
                           bg-surface-900/50 hover:border-surface-700
                           hover:bg-surface-900 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20
                             flex items-center justify-center mb-4
                             group-hover:bg-brand-500/15 group-hover:border-brand-500/30
                             transition-colors"
                >
                  <Icon size={22} className="text-brand-400" />
                </div>
                <h3 className="font-display font-semibold text-lg text-surface-50 mb-2">
                  {service.title}
                </h3>
                <p className="text-surface-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
