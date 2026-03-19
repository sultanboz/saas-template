'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart3, Users, Rocket, CreditCard, Palette,
  TrendingUp, ArrowUpRight, Activity,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Panel mock UIs ──────────────────────────────────────

function AnalyticsPanel() {
  const bars = [55, 72, 61, 88, 74, 95, 83, 100, 91, 78, 87, 96]
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Page views',   value: '128,420', change: '+18%', Icon: TrendingUp },
          { label: 'Unique users', value: '42,810',  change: '+11%', Icon: Users      },
        ].map(({ label, value, change, Icon }) => (
          <div key={label} className="rounded-xl border border-surface-800/60 bg-surface-900/60 p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-surface-600">{label}</span>
              <Icon size={11} className="text-surface-600" />
            </div>
            <div className="font-mono font-bold text-lg text-surface-100">{value}</div>
            <div className="text-[9px] text-brand-400 mt-0.5">{change} this month</div>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-xl border border-surface-800/60 bg-surface-900/60 p-4">
        <div className="flex items-end gap-1 h-full">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full rounded-t-sm ${
                  h === 100 ? 'bg-brand-500' : 'bg-brand-500/30'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CollaborationPanel() {
  const members = [
    { initials: 'AC', color: 'bg-violet-500', name: 'Alex Chen',   role: 'Owner',   status: 'online'  },
    { initials: 'SM', color: 'bg-blue-500',   name: 'Sarah M.',    role: 'Editor',  status: 'online'  },
    { initials: 'JW', color: 'bg-amber-500',  name: 'James W.',    role: 'Viewer',  status: 'away'    },
    { initials: 'PN', color: 'bg-rose-500',   name: 'Priya Nair',  role: 'Editor',  status: 'offline' },
  ]
  const activity = [
    { text: 'Alex edited HeroSection', time: '2m ago' },
    { text: 'Sarah merged PR #42',     time: '8m ago' },
    { text: 'Deploy to production',    time: '15m ago' },
  ]
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="rounded-xl border border-surface-800/60 bg-surface-900/60 p-4">
        <div className="text-[10px] text-surface-600 mb-3 uppercase tracking-wider">Team members</div>
        <div className="space-y-2.5">
          {members.map((m) => (
            <div key={m.initials} className="flex items-center gap-2.5">
              <div className="relative flex-shrink-0">
                <div className={`w-7 h-7 rounded-full ${m.color} flex items-center justify-center text-[10px] text-white font-semibold`}>
                  {m.initials}
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-surface-900 ${
                  m.status === 'online' ? 'bg-brand-500'
                  : m.status === 'away' ? 'bg-amber-500'
                  : 'bg-surface-700'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-surface-200 font-medium">{m.name}</div>
                <div className="text-[9px] text-surface-600">{m.role}</div>
              </div>
              <div className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                m.role === 'Owner' ? 'bg-brand-500/15 text-brand-400' : 'bg-surface-800 text-surface-500'
              }`}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 rounded-xl border border-surface-800/60 bg-surface-900/60 p-4">
        <div className="text-[10px] text-surface-600 mb-3 uppercase tracking-wider">Recent activity</div>
        <div className="space-y-3">
          {activity.map((a, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-brand-500/60 mt-1.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-surface-400 leading-relaxed">{a.text}</div>
                <div className="text-[9px] text-surface-600 mt-0.5">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DeployPanel() {
  const steps = [
    { label: 'Build',       status: 'done',    time: '12s'  },
    { label: 'Test suite',  status: 'done',    time: '28s'  },
    { label: 'Preview URL', status: 'done',    time: '3s'   },
    { label: 'Production',  status: 'running', time: '...'  },
    { label: 'Notify team', status: 'queued',  time: null   },
  ]
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="rounded-xl border border-surface-800/60 bg-surface-900/60 p-4 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[11px] font-semibold text-surface-300">Deployment #142</div>
          <div className="flex items-center gap-1.5 text-[9px] text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            In progress
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-3 bottom-3 w-px bg-surface-800" />
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 pl-1">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                  step.status === 'done'    ? 'bg-brand-500/20 text-brand-400 border border-brand-500/40'
                  : step.status === 'running' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/40'
                  : 'bg-surface-800/60 text-surface-600 border border-surface-700/40'
                }`}>
                  {step.status === 'done' ? (
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : step.status === 'running' ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-[11px] font-medium ${
                    step.status === 'queued' ? 'text-surface-600' : 'text-surface-300'
                  }`}>{step.label}</div>
                </div>
                {step.time && (
                  <div className="text-[9px] font-mono text-surface-600">{step.time}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Avg deploy', value: '43s'  },
          { label: 'Uptime',     value: '99.9%' },
          { label: 'Regions',    value: '12'   },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-surface-800/60 bg-surface-900/60 px-3 py-2.5 text-center">
            <div className="font-mono font-bold text-sm text-surface-100">{s.value}</div>
            <div className="text-[9px] text-surface-600 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BillingPanel() {
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="rounded-xl border border-brand-500/25 bg-brand-500/5 p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-[10px] text-surface-600 mb-1">Current plan</div>
            <div className="font-display font-bold text-lg text-surface-100">Pro</div>
          </div>
          <div className="text-[10px] px-2 py-1 rounded-full bg-brand-500/15 text-brand-400 border border-brand-500/25">
            Active
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-3xl text-surface-50">$99</span>
          <span className="text-[11px] text-surface-500">/month</span>
        </div>
        <div className="mt-3 w-full h-1 rounded-full bg-surface-800">
          <div className="h-full w-[68%] rounded-full bg-brand-500" />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[9px] text-surface-600">6,800 / 10,000 API calls</span>
          <span className="text-[9px] text-brand-400">68%</span>
        </div>
      </div>
      <div className="flex-1 rounded-xl border border-surface-800/60 bg-surface-900/60 p-4">
        <div className="text-[10px] text-surface-600 mb-3 uppercase tracking-wider">Recent invoices</div>
        <div className="space-y-2">
          {[
            { date: 'Mar 2026', amount: '$99.00', status: 'Paid' },
            { date: 'Feb 2026', amount: '$99.00', status: 'Paid' },
            { date: 'Jan 2026', amount: '$79.00', status: 'Paid' },
          ].map((inv) => (
            <div key={inv.date} className="flex items-center justify-between py-1.5 px-2
                             rounded-lg bg-surface-900/40 border border-surface-800/40">
              <div>
                <div className="text-[10px] text-surface-300">{inv.date}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-brand-500/15 text-brand-400">
                  {inv.status}
                </span>
                <span className="text-[10px] font-mono text-surface-300">{inv.amount}</span>
                <ArrowUpRight size={10} className="text-surface-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BrandingPanel() {
  const themes = [
    { name: 'Green',  accent: '#22c55e', surface: '#09090b' },
    { name: 'Blue',   accent: '#3b82f6', surface: '#09090b' },
    { name: 'Violet', accent: '#8b5cf6', surface: '#09090b' },
    { name: 'Rose',   accent: '#f43f5e', surface: '#09090b' },
  ]
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="rounded-xl border border-surface-800/60 bg-surface-900/60 p-4">
        <div className="text-[10px] text-surface-600 mb-3 uppercase tracking-wider">Color themes</div>
        <div className="grid grid-cols-2 gap-2">
          {themes.map((t, i) => (
            <div key={t.name}
              className={`rounded-xl p-3 border cursor-pointer transition-all ${
                i === 0
                  ? 'border-brand-500/40 bg-brand-500/8'
                  : 'border-surface-800/60 hover:border-surface-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: t.accent }} />
                <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: t.surface, border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <div className="text-[9px] text-surface-400">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 rounded-xl border border-surface-800/60 bg-surface-900/60 p-4">
        <div className="text-[10px] text-surface-600 mb-3 uppercase tracking-wider">Typography</div>
        <div className="space-y-2.5">
          {[
            { label: 'Display', font: 'Syne',            sample: 'Aa', size: 'text-2xl font-bold' },
            { label: 'Body',    font: 'DM Sans',          sample: 'Aa', size: 'text-base' },
            { label: 'Mono',    font: 'JetBrains Mono',   sample: 'Aa', size: 'text-sm font-mono' },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3 py-1.5 px-2.5
                             rounded-lg bg-surface-800/40 border border-surface-800/60">
              <div className={`text-surface-300 w-10 ${t.size}`}>{t.sample}</div>
              <div>
                <div className="text-[10px] text-surface-300 font-medium">{t.font}</div>
                <div className="text-[9px] text-surface-600">{t.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Features data ───────────────────────────────────────
const FEATURES = [
  {
    id:     'analytics',
    Icon:   BarChart3,
    color:  'text-brand-400',
    bg:     'bg-brand-500/12',
    title:  'Live Analytics',
    desc:   'Real-time dashboards with beautiful charts. Track users, revenue, and churn at a glance.',
    Panel:  AnalyticsPanel,
  },
  {
    id:    'collab',
    Icon:  Users,
    color: 'text-blue-400',
    bg:    'bg-blue-500/12',
    title: 'Team Collaboration',
    desc:  'Invite teammates, assign roles, and see real-time activity across your whole organization.',
    Panel: CollaborationPanel,
  },
  {
    id:    'deploy',
    Icon:  Rocket,
    color: 'text-violet-400',
    bg:    'bg-violet-500/12',
    title: 'Instant Deploy',
    desc:  'Push to production in under a minute. Automatic previews, rollbacks, and multi-region edge.',
    Panel: DeployPanel,
  },
  {
    id:    'billing',
    Icon:  CreditCard,
    color: 'text-amber-400',
    bg:    'bg-amber-500/12',
    title: 'Billing & Subscriptions',
    desc:  'Stripe-powered billing built in. Plans, invoices, usage limits — all managed from one place.',
    Panel: BillingPanel,
  },
  {
    id:    'branding',
    Icon:  Palette,
    color: 'text-rose-400',
    bg:    'bg-rose-500/12',
    title: 'Custom Branding',
    desc:  'Swap colors, fonts, and logos in minutes. CSS variables-driven theming with zero bloat.',
    Panel: BrandingPanel,
  },
]

// ─── Panel transition variants ───────────────────────────
const panelVariants = {
  enter: { opacity: 0, x: 16, scale: 0.98 },
  center: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, x: -16, scale: 0.98,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Section badge ───────────────────────────────────────
function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    border border-surface-800 bg-surface-900/80 mb-5">
      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
      <span className="text-xs text-surface-400 font-medium">{text}</span>
    </div>
  )
}

// ─── FeaturesVisual ──────────────────────────────────────
export function FeaturesVisual() {
  const [active, setActive] = useState(0)

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % FEATURES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const ActivePanel = FEATURES[active].Panel

  return (
    <section id="features" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <SectionBadge text="Everything included" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-surface-50">
            Built different,{' '}
            <span className="text-gradient">by design</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-xl mx-auto leading-relaxed">
            Not another multipurpose template. Built specifically for AI tools
            and developer products — every section has a reason.
          </p>
        </motion.div>

        {/* Feature switcher */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-[380px_1fr] gap-6 items-start"
        >
          {/* Left: feature list */}
          <div className="space-y-1.5">
            {FEATURES.map(({ id, Icon, color, bg, title, desc }, i) => (
              <button
                key={id}
                onClick={() => setActive(i)}
                className={cn(
                  'w-full text-left rounded-2xl border px-5 py-4 transition-all duration-300 group',
                  active === i
                    ? 'border-brand-500/30 bg-surface-900 shadow-lg shadow-brand-500/6'
                    : 'border-surface-800/60 bg-surface-900/20 hover:border-surface-700 hover:bg-surface-900/50'
                )}
              >
                <div className="flex items-start gap-3.5">
                  {/* Icon */}
                  <div className={cn(
                    'w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300',
                    bg,
                    active === i ? 'scale-110' : 'group-hover:scale-105'
                  )}>
                    <Icon size={16} className={color} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className={cn(
                      'font-display font-semibold text-sm mb-1 tracking-tight transition-colors',
                      active === i ? 'text-surface-50' : 'text-surface-300'
                    )}>
                      {title}
                    </div>
                    <div className={cn(
                      'text-xs leading-relaxed transition-all duration-300',
                      active === i ? 'text-surface-400 max-h-20 opacity-100' : 'text-surface-600 max-h-0 opacity-0 overflow-hidden'
                    )}>
                      {desc}
                    </div>
                  </div>

                  {/* Active indicator */}
                  <div className={cn(
                    'w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-all duration-300',
                    active === i ? 'bg-brand-500' : 'bg-transparent'
                  )} />
                </div>

                {/* Progress bar (auto-advance indicator) */}
                {active === i && (
                  <div className="mt-3 h-px bg-surface-800 rounded-full overflow-hidden">
                    <motion.div
                      key={`progress-${i}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: 'linear' }}
                      className="h-full bg-brand-500/60 rounded-full"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right: animated panel */}
          <div className="always-dark rounded-2xl border border-surface-700/50 bg-surface-950
                          p-5 shadow-2xl shadow-black/40 overflow-hidden"
               style={{ minHeight: '440px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="h-full"
                style={{ minHeight: '400px' }}
              >
                <ActivePanel />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
