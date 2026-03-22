'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce platform',
    category: 'Web App',
    desc: 'High-performance storefront with real-time inventory and checkout.',
    gradient: 'from-brand-500/20 to-emerald-500/10',
  },
  {
    title: 'Analytics dashboard',
    category: 'SaaS',
    desc: 'Real-time data visualization with custom widgets and export.',
    gradient: 'from-violet-500/20 to-purple-500/10',
  },
  {
    title: 'Mobile banking',
    category: 'Fintech',
    desc: 'Secure banking app with biometric auth and instant transfers.',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'Learning platform',
    category: 'EdTech',
    desc: 'Interactive courses with video, quizzes, and progress tracking.',
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
  {
    title: 'Health & fitness',
    category: 'Wellness',
    desc: 'Workout plans, meal tracking, and wearable integrations.',
    gradient: 'from-rose-500/20 to-pink-500/10',
  },
  {
    title: 'Travel booking',
    category: 'Travel',
    desc: 'Multi-destination search with dynamic pricing and availability.',
    gradient: 'from-teal-500/20 to-cyan-500/10',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
}

export function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="portfolio"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between
                     gap-4 mb-12"
        >
          <div>
            <h2
              id="portfolio-heading"
              className="font-display text-3xl sm:text-4xl font-bold
                         tracking-tight text-surface-50 mb-2"
            >
              Featured work
            </h2>
            <p className="text-surface-400 text-lg">
              Projects built with our platform across industries.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-400
                       hover:text-brand-300 transition-colors w-fit"
          >
            View all projects
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i}
              className="group relative rounded-2xl border border-surface-800
                         bg-surface-900/50 overflow-hidden
                         hover:border-surface-700 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative p-6">
                <span className="text-xs font-medium text-brand-400 mb-3 block">
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-lg text-surface-50 mb-2
                               group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-surface-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium
                             text-surface-400 hover:text-brand-400 transition-colors"
                >
                  <ExternalLink size={14} />
                  Case study
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
