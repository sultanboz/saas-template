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
    version: '2.0.0',
    date:    'March 2026',
    type:    'major',
    title:   'Premium v3 variant & gallery',
    changes: [
      { type: 'added',    text: 'v3 Premium homepage — gradient hero, services grid, how-it-works' },
      { type: 'added',    text: 'GallerySection — filterable image grid with masonry layout'       },
      { type: 'added',    text: 'PortfolioSection — 6-project showcase with hover overlays'        },
      { type: 'added',    text: 'VideoDemoSection — YouTube/Vimeo embed placeholder'               },
      { type: 'added',    text: 'AppDownloadSection — App Store & Play Store CTAs'                 },
      { type: 'added',    text: 'TimelineSection — product roadmap with version milestones'        },
      { type: 'added',    text: 'NewsletterSection — standalone email capture (v3)'                },
      { type: 'added',    text: 'AwardsSection — third-party review badges'                        },
      { type: 'improved', text: 'robots.txt + sitemap.xml auto-generated via Next.js'              },
      { type: 'added',    text: 'API routes for contact form and newsletter subscription'          },
    ],
  },
  {
    version: '1.1.0',
    date:    'January 2026',
    type:    'minor',
    title:   'Visual v2 variant & UI components',
    changes: [
      { type: 'added',    text: 'v2 Visual homepage — dashboard mockup hero'            },
      { type: 'added',    text: 'FeaturesVisual — interactive feature switcher'         },
      { type: 'added',    text: 'TestimonialsVisual — tweet-style testimonials variant' },
      { type: 'added',    text: '13 production-ready UI primitives (Button → Tooltip)'  },
      { type: 'added',    text: 'Navbar mega-dropdown with grouped page list'           },
      { type: 'added',    text: 'Preview Hub — all pages & sections at a glance'        },
      { type: 'improved', text: 'Light / dark mode — full CSS variable system'          },
      { type: 'added',    text: 'Blog index + dynamic article pages (SSG)'              },
      { type: 'added',    text: 'About, Contact, Login, Coming Soon pages'              },
    ],
  },
  {
    version: '1.0.0',
    date:    'November 2025',
    type:    'major',
    title:   'Initial release',
    changes: [
      { type: 'added', text: 'Hero section with typing terminal animation'    },
      { type: 'added', text: 'Bento grid features section (8 features)'       },
      { type: 'added', text: 'Pricing table with monthly / yearly toggle'     },
      { type: 'added', text: 'Testimonials with dual infinite-scroll marquee' },
      { type: 'added', text: 'Integrations logo marquee + install steps'      },
      { type: 'added', text: 'Comparison table vs DIY alternatives'           },
      { type: 'added', text: 'FAQ accordion with 8 questions'                 },
      { type: 'added', text: 'Responsive design — 375 px to 1440 px'         },
      { type: 'added', text: 'Dark mode — full CSS variable design system'    },
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
