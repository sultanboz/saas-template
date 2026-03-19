'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, DollarSign, Zap, Activity, Users, CreditCard, Bell } from 'lucide-react'

// ─── Mock dashboard inside browser frame ────────────────
function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-surface-700/60 bg-surface-950 shadow-2xl shadow-black/60 overflow-hidden">

      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-surface-800/80 bg-surface-900/60">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-surface-800/60 border border-surface-700/40 w-52">
            <div className="w-2 h-2 rounded-full bg-brand-500/60 flex-shrink-0" />
            <span className="text-[10px] text-surface-500 font-mono tracking-wide truncate">
              app.nexlayer.com/dashboard
            </span>
          </div>
        </div>
        <div className="w-14" />
      </div>

      {/* Dashboard layout */}
      <div className="flex" style={{ height: '320px' }}>

        {/* Sidebar */}
        <div className="w-12 border-r border-surface-800/50 bg-surface-900/40 flex flex-col items-center py-4 gap-3 flex-shrink-0">
          {[
            { Icon: Activity, active: true  },
            { Icon: Users,    active: false },
            { Icon: CreditCard, active: false },
            { Icon: Bell,     active: false },
          ].map(({ Icon, active }, i) => (
            <div
              key={i}
              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                active
                  ? 'bg-brand-500/20 text-brand-400'
                  : 'text-surface-600'
              }`}
            >
              <Icon size={13} />
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-1 p-4 overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-2.5 w-28 rounded-md bg-surface-700/50" />
            <div className="flex gap-1.5">
              <div className="h-5 w-14 rounded-md bg-brand-500/20 border border-brand-500/30" />
              <div className="h-5 w-14 rounded-md bg-surface-800/60" />
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: 'Revenue', value: '$24.8k', change: '+12%', color: 'text-brand-400' },
              { label: 'Users',   value: '4,821',  change: '+8%',  color: 'text-brand-400' },
              { label: 'Churn',   value: '1.2%',   change: '-0.3%', color: 'text-brand-400' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-surface-800/60 bg-surface-900/60 p-2.5">
                <div className="text-[9px] text-surface-600 mb-1">{m.label}</div>
                <div className="font-mono font-bold text-[13px] text-surface-100">{m.value}</div>
                <div className={`text-[9px] mt-0.5 ${m.color}`}>{m.change}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-surface-800/60 bg-surface-900/60 p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="h-2.5 w-20 rounded bg-surface-700/50" />
              <div className="flex gap-1">
                {['1W', '1M', '3M'].map((t, i) => (
                  <div key={t} className={`text-[8px] px-1.5 py-0.5 rounded ${
                    i === 1 ? 'bg-brand-500/20 text-brand-400' : 'text-surface-600'
                  }`}>{t}</div>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 200 52" className="w-full h-12" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hv-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#22c55e" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0"   />
                </linearGradient>
              </defs>
              <polygon
                points="0,52 0,44 25,38 50,32 75,24 100,18 125,13 150,9 175,5 200,2 200,52"
                fill="url(#hv-grad)"
              />
              <polyline
                points="0,44 25,38 50,32 75,24 100,18 125,13 150,9 175,5 200,2"
                fill="none" stroke="#22c55e" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Table rows */}
          <div className="space-y-1.5">
            {[
              { name: 'Pro Plan',  amount: '$99',  badge: 'paid',    badgeColor: 'bg-brand-500/15 text-brand-400' },
              { name: 'Team Plan', amount: '$299', badge: 'pending', badgeColor: 'bg-amber-500/15 text-amber-400' },
            ].map((row) => (
              <div key={row.name}
                className="flex items-center justify-between py-1.5 px-2 rounded-lg
                           bg-surface-900/40 border border-surface-800/40"
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-md bg-surface-800/80" />
                  <span className="text-[10px] text-surface-400">{row.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${row.badgeColor}`}>
                    {row.badge}
                  </span>
                  <span className="text-[10px] font-mono text-surface-300">{row.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r
                      from-transparent via-brand-500/40 to-transparent" />
    </div>
  )
}

// ─── Floating chip ───────────────────────────────────────
function Chip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-10 ${className}`}
    >
      {children}
    </motion.div>
  )
}

function ChipCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl
                    bg-surface-900/95 border border-surface-700/70
                    shadow-xl shadow-black/50 backdrop-blur-sm">
      {children}
    </div>
  )
}

// ─── Animation variants ──────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

// ─── HeroVisual ──────────────────────────────────────────
export function HeroVisual() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -50])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-glow-brand" />
      <div className="absolute -top-32 left-1/3 w-[560px] h-[560px] rounded-full
                      bg-brand-500/5 blur-[150px] pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full
                      bg-violet-500/4 blur-[130px] pointer-events-none animate-float-delayed" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20
                      grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-7
                       border border-brand-500/22 bg-brand-500/6 shadow-inner shadow-brand-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            <span className="text-xs text-brand-400 font-medium tracking-wide">
              v1.0 — Now live on ThemeForest
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.08}
            className="font-display text-5xl sm:text-6xl lg:text-[4.5rem]
                       font-bold leading-[1.04] tracking-tight mb-5 text-surface-50"
          >
            Ship your{' '}
            <span className="text-gradient text-glow">SaaS</span>
            <br />
            in days,{' '}
            <span className="text-surface-500">not months.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.18}
            className="text-[1.0625rem] text-surface-400 leading-[1.8] mb-8 max-w-[490px]"
          >
            Production-ready Next.js landing page template built for AI tools
            and developer products. Dark mode, Framer Motion, Stripe-ready.
          </motion.p>

          <motion.ul
            variants={fadeUp} initial="hidden" animate="visible" custom={0.26}
            className="flex flex-col gap-2.5 mb-9"
          >
            {[
              'Next.js 15 + TypeScript + Tailwind CSS',
              'Dark mode + responsive out of the box',
              'Terminal animation, bento grid, pricing table',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-surface-400">
                <CheckCircle size={14} className="text-brand-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.34}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                         bg-brand-500 text-surface-950 font-semibold text-sm
                         hover:bg-brand-400 transition-all duration-200
                         shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40
                         hover:-translate-y-0.5"
            >
              Get the template
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                         border border-surface-800 text-surface-300 text-sm font-medium
                         hover:border-surface-700 hover:text-surface-100
                         hover:bg-surface-900/60 transition-all duration-200"
            >
              See features
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.42}
            className="mt-9 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[
                ['bg-violet-500',  'A'],
                ['bg-blue-500',    'B'],
                ['bg-amber-500',   'C'],
                ['bg-rose-500',    'D'],
                ['bg-emerald-500', 'E'],
              ].map(([color, letter], i) => (
                <div key={i}
                  className={`w-7 h-7 rounded-full ${color} border-2 border-surface-950
                              flex items-center justify-center text-[10px] text-white font-semibold`}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-sm text-surface-500">
              <span className="text-surface-200 font-medium">200+ developers</span>
              {' '}already shipping with this template
            </p>
          </motion.div>
        </div>

        {/* Right: visual mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ y }}
          className="relative"
        >
          {/* Chip: payment received */}
          <Chip delay={0.6} className="-top-5 -right-2 sm:-right-6 animate-float">
            <ChipCard>
              <div className="w-6 h-6 rounded-lg bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                <DollarSign size={11} className="text-brand-400" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-surface-100 leading-tight">
                  Payment received
                </div>
                <div className="text-[9px] text-brand-400 font-mono">+$420.00</div>
              </div>
            </ChipCard>
          </Chip>

          {/* Chip: users today */}
          <Chip delay={0.75} className="-bottom-5 -left-2 sm:-left-6 animate-float-delayed">
            <ChipCard>
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500" />
              </span>
              <div>
                <div className="text-[10px] font-semibold text-surface-100 leading-tight">
                  +47 users today
                </div>
                <div className="text-[9px] text-surface-500">↑ 12% from yesterday</div>
              </div>
            </ChipCard>
          </Chip>

          {/* Chip: deploy successful */}
          <Chip delay={0.9} className="bottom-24 -right-2 sm:-right-7 animate-float-slow">
            <ChipCard>
              <div className="w-6 h-6 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                <Zap size={11} className="text-violet-400" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-surface-100 leading-tight">
                  Deploy successful
                </div>
                <div className="text-[9px] text-surface-500">Production · 2s ago</div>
              </div>
            </ChipCard>
          </Chip>

          {/* Dashboard mockup */}
          <div className="always-dark">
            <DashboardMockup />
          </div>

          {/* Bottom stats */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {[
              { value: '< 2s', label: 'Setup time',       accent: false },
              { value: '98',   label: 'Lighthouse score', accent: true  },
              { value: '15+',  label: 'Sections',          accent: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl border px-3 py-3 text-center
                            transition-colors duration-200 hover:border-surface-700
                            ${stat.accent
                              ? 'border-brand-500/20 bg-brand-500/5'
                              : 'border-surface-800 bg-surface-900/30'}`}
              >
                <div className={`font-display font-bold text-xl mb-0.5
                                 ${stat.accent ? 'text-brand-400' : 'text-surface-100'}`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-surface-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
