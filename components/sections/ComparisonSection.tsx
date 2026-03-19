'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'

type CellValue = true | false | null | string

const rows: { feature: string; scratch: CellValue; other: CellValue; nexlayer: CellValue }[] = [
  { feature: 'Setup time',               scratch: '4–8 weeks', other: '2–5 days',  nexlayer: '< 2 hours'   },
  { feature: 'Next.js 15 App Router',    scratch: true,        other: null,         nexlayer: true           },
  { feature: 'Dark mode system',         scratch: null,        other: null,         nexlayer: true           },
  { feature: 'TypeScript throughout',    scratch: null,        other: null,         nexlayer: true           },
  { feature: 'Framer Motion animations', scratch: null,        other: false,        nexlayer: true           },
  { feature: 'Terminal animation',       scratch: null,        other: false,        nexlayer: true           },
  { feature: 'Bento grid layout',        scratch: null,        other: false,        nexlayer: true           },
  { feature: 'Pricing toggle (yr/mo)',   scratch: null,        other: null,         nexlayer: true           },
  { feature: 'Blog + changelog pages',   scratch: null,        other: null,         nexlayer: true           },
  { feature: 'Figma source file',        scratch: false,       other: null,         nexlayer: true           },
  { feature: 'Lifetime updates',         scratch: false,       other: null,         nexlayer: true           },
  { feature: 'Priority support',         scratch: false,       other: false,        nexlayer: true           },
]

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center
                         ${highlight ? 'bg-brand-500/20' : 'bg-surface-800'}`}>
          <Check size={11} className={highlight ? 'text-brand-400' : 'text-surface-400'} />
        </div>
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-surface-900">
          <X size={11} className="text-surface-700" />
        </div>
      </div>
    )
  }
  if (value === null) {
    return (
      <div className="flex justify-center">
        <Minus size={14} className="text-surface-700" />
      </div>
    )
  }
  return (
    <div className={`text-center text-xs font-medium
                     ${highlight ? 'text-brand-400' : 'text-surface-400'}`}>
      {value}
    </div>
  )
}

export function ComparisonSection() {
  return (
    <section className="py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

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
            <span className="text-xs text-surface-400 font-medium">Why NexLayer</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold
                         tracking-tight mb-4 text-surface-50">
            Stop reinventing{' '}
            <span className="text-gradient">the wheel</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-xl mx-auto leading-relaxed">
            See how NexLayer compares to building from scratch or using
            a generic multipurpose template.
          </p>
        </motion.div>

        {/* Table — overflow-x-auto for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl border border-surface-800 overflow-hidden"
        >
          {/* Top glow on NexLayer column */}
          <div className="absolute top-0 right-[0%] w-1/3 h-px
                          bg-gradient-to-l from-transparent via-brand-500/50 to-transparent" />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px]" aria-label="NexLayer comparison table">
              <thead>
                <tr className="border-b border-surface-800">
                  <th scope="col" className="p-4 bg-surface-900/30 text-left">
                    <span className="sr-only">Feature</span>
                  </th>
                  {[
                    { name: 'From scratch', sub: 'Building yourself', highlight: false },
                    { name: 'Other templates', sub: 'Generic multipurpose', highlight: false },
                    { name: 'NexLayer', sub: 'This template', highlight: true },
                  ].map((col) => (
                    <th
                      key={col.name}
                      scope="col"
                      className={`p-4 text-center border-l border-surface-800
                                  ${col.highlight ? 'bg-brand-500/5' : 'bg-surface-900/30'}`}
                    >
                      <div className={`text-sm font-semibold mb-0.5
                                       ${col.highlight ? 'text-brand-400' : 'text-surface-200'}`}>
                        {col.name}
                      </div>
                      <div className="text-xs text-surface-600 font-normal">{col.sub}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-surface-800/60 last:border-0
                               hover:bg-surface-900/20 transition-colors duration-150
                               ${i % 2 === 0 ? '' : 'bg-surface-950/30'}`}
                  >
                    <td className="px-4 py-3 text-sm text-surface-400">{row.feature}</td>
                    <td className="px-4 py-3 border-l border-surface-800/60">
                      <Cell value={row.scratch} />
                    </td>
                    <td className="px-4 py-3 border-l border-surface-800/60">
                      <Cell value={row.other} />
                    </td>
                    <td className="px-4 py-3 border-l border-surface-800/60 bg-brand-500/3">
                      <Cell value={row.nexlayer} highlight />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
