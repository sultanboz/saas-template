'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard, Users, CreditCard, Activity,
  Bell, Search, Settings, ChevronUp, ArrowRight,
} from 'lucide-react'

// ─── Mini chart data ─────────────────────────────────────
const chartPoints = [30, 45, 28, 60, 52, 75, 68, 90, 82, 95, 88, 100]

function MiniChart() {
  const max = Math.max(...chartPoints)
  const h   = 52
  const w   = 200

  const points = chartPoints.map((v, i) => {
    const x = (i / (chartPoints.length - 1)) * w
    const y = h - (v / max) * h
    return `${x},${y}`
  }).join(' ')

  const area = `0,${h} ${points} ${w},${h}`

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-14"
      preserveAspectRatio="none"
      role="img"
      aria-label="Revenue growth chart showing upward trend over 12 months"
    >
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#22c55e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0"   />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#chartGrad)" />
      <polyline
        points={points}
        fill="none"
        stroke="#22c55e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Dashboard mockup ─────────────────────────────────────
function DashboardMockup() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview',   active: true  },
    { icon: Users,           label: 'Customers',  active: false },
    { icon: CreditCard,      label: 'Billing',    active: false },
    { icon: Activity,        label: 'Analytics',  active: false },
    { icon: Settings,        label: 'Settings',   active: false },
  ]

  const tableRows = [
    { name: 'Alex Chen',    plan: 'Pro',     mrr: '$29',  status: 'active'   },
    { name: 'Sarah Müller', plan: 'Agency',  mrr: '$79',  status: 'active'   },
    { name: 'James Wright', plan: 'Starter', mrr: '$0',   status: 'trial'    },
    { name: 'Priya Nair',   plan: 'Pro',     mrr: '$29',  status: 'active'   },
    { name: 'Marco Rossi',  plan: 'Agency',  mrr: '$79',  status: 'churned'  },
  ]

  const statusColor: Record<string, string> = {
    active:  'text-brand-400 bg-brand-500/10',
    trial:   'text-blue-400 bg-blue-500/10',
    churned: 'text-red-400 bg-red-500/10',
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-surface-800
                    bg-surface-950 text-[11px] font-sans">

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5
                      border-b border-surface-800/80 bg-surface-900/30">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-brand-500 flex items-center justify-center">
            <Activity size={10} className="text-surface-950" />
          </div>
          <span className="text-surface-300 font-semibold text-xs">NexLayer Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md
                          bg-surface-800/70 border border-surface-700/50">
            <Search size={9} className="text-surface-500" />
            <span className="text-surface-600">Search...</span>
          </div>
          <Bell size={13} className="text-surface-500" />
          <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center
                          justify-center text-[9px] text-white font-semibold">A</div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-32 border-r border-surface-800/80 bg-surface-900/20 py-3 flex-shrink-0">
          <div className="px-3 mb-4">
            <span className="text-[9px] uppercase tracking-wider text-surface-700 font-medium">
              Main menu
            </span>
          </div>
          {navItems.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-3 py-1.5 mx-1.5 rounded-md mb-0.5
                         transition-colors ${
                           active
                             ? 'bg-brand-500/12 text-brand-400'
                             : 'text-surface-500 hover:text-surface-300'
                         }`}
            >
              <Icon size={11} />
              <span className="text-[10px] font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: 'MRR',        value: '$4,820', change: '+12.5%', up: true  },
              { label: 'Customers',  value: '142',    change: '+8.3%',  up: true  },
              { label: 'Churn',      value: '2.1%',   change: '-0.4%',  up: false },
            ].map((s) => (
              <div key={s.label}
                   className="rounded-lg border border-surface-800 bg-surface-900/50 p-2.5">
                <div className="text-surface-600 mb-1">{s.label}</div>
                <div className="font-display font-bold text-sm text-surface-100 mb-0.5">
                  {s.value}
                </div>
                <div className={`flex items-center gap-0.5 text-[9px] font-medium
                                 ${s.up ? 'text-brand-400' : 'text-red-400'}`}>
                  <ChevronUp size={8} className={s.up ? '' : 'rotate-180'} />
                  {s.change} vs last month
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-surface-800 bg-surface-900/30 p-3 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-surface-400 font-medium text-[10px]">Revenue</span>
              <span className="text-brand-400 font-mono text-[10px]">Last 12 months</span>
            </div>
            <MiniChart />
          </div>

          {/* Table */}
          <div className="rounded-lg border border-surface-800 overflow-hidden">
            <div className="px-3 py-2 border-b border-surface-800/80 bg-surface-900/20
                            flex items-center justify-between">
              <span className="text-surface-400 font-medium text-[10px]">Recent customers</span>
              <span className="text-brand-400 flex items-center gap-0.5 text-[9px]">
                View all <ArrowRight size={8} />
              </span>
            </div>
            <table className="w-full" aria-label="Recent customers">
              <thead className="sr-only">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Plan</th>
                  <th scope="col">MRR</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.name}
                      className="border-b border-surface-800/50 last:border-0
                                 hover:bg-surface-800/20 transition-colors">
                    <td className="px-3 py-1.5 text-surface-300">{row.name}</td>
                    <td className="px-2 py-1.5 text-surface-600">{row.plan}</td>
                    <td className="px-2 py-1.5 text-surface-300 font-mono">{row.mrr}</td>
                    <td className="px-2 py-1.5">
                      <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium
                                        ${statusColor[row.status]}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────
export function DashboardPreviewSection() {
  return (
    <section className="py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

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
            <span className="text-xs text-surface-400 font-medium">Built for real products</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold
                         tracking-tight mb-4 text-surface-50">
            Looks great{' '}
            <span className="text-gradient">out of the box</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-xl mx-auto leading-relaxed">
            Every component is production-ready. Swap in your data,
            update the copy, ship in hours.
          </p>
        </motion.div>

        {/* Browser chrome + mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow underneath */}
          <div className="absolute -bottom-16 inset-x-1/4 h-40 rounded-full
                          bg-brand-500/10 blur-[60px] pointer-events-none" />

          {/* Browser chrome */}
          <div className="relative rounded-2xl border border-surface-800 overflow-hidden
                          shadow-2xl shadow-black/60">

            {/* Browser bar */}
            <div className="flex items-center gap-3 px-4 py-3
                            bg-surface-900 border-b border-surface-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/70" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]/70" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1 rounded-md
                                bg-surface-800/60 border border-surface-700/40
                                max-w-xs w-full">
                  <div className="w-2 h-2 rounded-full bg-brand-500/60 flex-shrink-0" />
                  <span className="text-xs text-surface-500 font-mono truncate">
                    app.nexlayer.io/dashboard
                  </span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Dashboard content — always dark, scrollable on mobile */}
          <div className="always-dark overflow-x-auto">
            <div className="min-w-[560px]">
              <DashboardMockup />
            </div>
          </div>
          </div>
        </motion.div>

        {/* Feature callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          {[
            {
              label: 'Pixel perfect',
              desc:  'Every detail designed at 1x, looks sharp on retina displays.',
            },
            {
              label: 'Copy & customize',
              desc:  'Update text, colors, and data through a single config file.',
            },
            {
              label: 'Always consistent',
              desc:  'Design tokens ensure visual harmony across all components.',
            },
          ].map((item) => (
            <div key={item.label}
                 className="text-center px-4 py-5 rounded-xl border border-surface-800/60
                            bg-surface-900/30 hover:border-surface-700 transition-colors">
              <div className="text-sm font-semibold text-surface-200 mb-1">{item.label}</div>
              <div className="text-xs text-surface-500 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
