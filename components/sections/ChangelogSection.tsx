'use client'

import { motion } from 'framer-motion'

interface ChangelogEntry {
  version: string
  date: string
  type: 'major' | 'minor' | 'patch'
  title: string
  changes: { type: 'added' | 'improved' | 'fixed'; text: string }[]
}

const changelog: ChangelogEntry[] = [
  {
    version: '1.0.0',
    date:    'March 15, 2025',
    type:    'major',
    title:   'Initial release',
    changes: [
      { type: 'added',    text: 'Hero section with terminal animation'     },
      { type: 'added',    text: 'Bento grid features section'              },
      { type: 'added',    text: 'Pricing table with monthly/yearly toggle' },
      { type: 'added',    text: 'Testimonials with infinite scroll'        },
      { type: 'added',    text: 'Integrations logo marquee'                },
      { type: 'added',    text: 'FAQ accordion'                            },
      { type: 'added',    text: 'Dark mode — full CSS variables system'    },
      { type: 'added',    text: 'Responsive design — 375px to 1440px'      },
    ],
  },
  {
    version: '1.1.0',
    date:    'Coming soon',
    type:    'minor',
    title:   'Framer Motion animations',
    changes: [
      { type: 'added',    text: 'Scroll-triggered reveal animations'  },
      { type: 'added',    text: 'Page transition effects'             },
      { type: 'improved', text: 'Hero section entrance animation'     },
      { type: 'added',    text: 'Floating label form components'      },
    ],
  },
  {
    version: '1.2.0',
    date:    'Planned',
    type:    'minor',
    title:   'Additional sections',
    changes: [
      { type: 'added', text: 'Waitlist / early access section'      },
      { type: 'added', text: 'Comparison table (vs competitors)'    },
      { type: 'added', text: 'Blog index + article layout'          },
      { type: 'added', text: 'Light mode refinements'               },
    ],
  },
]

const typeColors = {
  added:    'text-brand-400  bg-brand-500/10',
  improved: 'text-blue-400   bg-blue-500/10',
  fixed:    'text-amber-400  bg-amber-500/10',
} as const

const versionColors = {
  major: 'bg-brand-500  text-surface-950',
  minor: 'bg-blue-500   text-white',
  patch: 'bg-surface-700 text-surface-300',
} as const

const vp = { once: true, margin: '-80px' } as const

export function ChangelogSection() {
  return (
    <section id="changelog" className="py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          border border-surface-800 bg-surface-900/80 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs text-surface-400 font-medium">Always improving</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Changelog</span>
          </h2>
          <p className="text-surface-400 text-lg leading-relaxed">
            Every update, every improvement — documented.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-surface-800" />

          <div className="flex flex-col gap-10">
            {changelog.map((entry, i) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12,
                }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full
                                 border-2 border-surface-950
                                 transition-all duration-300
                                 ${i === 0
                                   ? 'bg-brand-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                                   : 'bg-surface-800'}`}
                />

                {/* Header row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-md
                                    ${versionColors[entry.type]}`}>
                    v{entry.version}
                  </span>
                  <span className="text-xs text-surface-600">{entry.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-surface-100 mb-4">
                  {entry.title}
                </h3>

                {/* Changes */}
                <ul className="flex flex-col gap-2.5">
                  {entry.changes.map((change) => (
                    <li key={change.text} className="flex items-start gap-2.5">
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded
                                        uppercase tracking-widest flex-shrink-0 mt-0.5
                                        ${typeColors[change.type]}`}>
                        {change.type}
                      </span>
                      <span className="text-sm text-surface-400 leading-relaxed">
                        {change.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
