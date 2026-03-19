'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const integrations = [
  { name: 'Stripe',      color: '#6772E5', abbr: 'ST' },
  { name: 'Vercel',      color: '#ffffff', abbr: 'VC' },
  { name: 'Supabase',    color: '#3ECF8E', abbr: 'SB' },
  { name: 'OpenAI',      color: '#74AA9C', abbr: 'OA' },
  { name: 'GitHub',      color: '#ffffff', abbr: 'GH' },
  { name: 'PlanetScale', color: '#F5D76E', abbr: 'PS' },
  { name: 'Resend',      color: '#ffffff', abbr: 'RS' },
  { name: 'Clerk',       color: '#6C47FF', abbr: 'CL' },
  { name: 'Prisma',      color: '#5A67D8', abbr: 'PR' },
  { name: 'Railway',     color: '#B044BF', abbr: 'RW' },
  { name: 'PostHog',     color: '#F9BD2B', abbr: 'PH' },
  { name: 'Cloudflare',  color: '#F38020', abbr: 'CF' },
]

const steps = [
  { step: '01', title: 'Install dependencies', code: 'npm install'         },
  { step: '02', title: 'Add your env vars',    code: 'cp .env.example .env' },
  { step: '03', title: 'Deploy to Vercel',     code: 'vercel --prod'        },
]

function IntegrationBadge({ name, color, abbr }: typeof integrations[0]) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 mx-2
                    rounded-xl border border-surface-800/80 bg-surface-900/50
                    hover:border-surface-700 hover:bg-surface-900
                    transition-all duration-200 cursor-default select-none">
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center
                   text-[9px] font-mono font-bold"
        style={{ background: `${color}1a`, color }}
      >
        {abbr}
      </div>
      <span className="text-sm text-surface-300 font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

const stepVariant = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-28 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        border border-surface-800 bg-surface-900/80 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-xs text-surface-400 font-medium">Plug & play</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-surface-50">
          Works with your{' '}
          <span className="text-gradient">entire stack</span>
        </h2>
        <p className="text-surface-400 text-lg max-w-xl mx-auto leading-relaxed">
          Pre-configured folder structure compatible with every major SaaS tool.
          Drop in your keys and ship.
        </p>
      </motion.div>

      {/* Screen-reader accessible integration list */}
      <ul className="sr-only">
        {integrations.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 inset-y-0 w-28 z-10
                        bg-gradient-to-r from-surface-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 z-10
                        bg-gradient-to-l from-surface-950 to-transparent pointer-events-none" />
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]"
             aria-hidden="true"
             style={{ animationDuration: '22s' }}>
          {[...integrations, ...integrations].map((item, i) => (
            <IntegrationBadge key={`${item.name}-${i}`} {...item} />
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              variants={stepVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={i}
              className="rounded-2xl border border-surface-800 bg-surface-900/40 p-5
                         hover:border-surface-700 hover:bg-surface-900/70
                         transition-all duration-300 group"
            >
              <div className="text-xs font-mono text-brand-500 font-semibold mb-3 tracking-widest">
                {item.step}
              </div>
              <div className="font-medium text-surface-100 mb-3 text-sm">{item.title}</div>
              <div className="font-mono text-[12px] text-surface-400 bg-surface-950
                              rounded-lg px-3 py-2.5 border border-surface-800
                              group-hover:border-surface-700 transition-colors">
                <span className="text-brand-600 select-none mr-1">$</span>
                {item.code}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
