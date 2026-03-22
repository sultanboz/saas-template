'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ZoomIn, ArrowUpRight } from 'lucide-react'

const items = [
  {
    id: 1,
    title: 'Brand identity system',
    category: 'Branding',
    desc: 'Full visual language including logo, typography, and colour palette.',
    gradient: 'from-brand-500/40 to-violet-600/30',
    size: 'tall',
  },
  {
    id: 2,
    title: 'Mobile app UI',
    category: 'Product',
    desc: 'Clean interface designed for speed and accessibility.',
    gradient: 'from-cyan-500/30 to-teal-600/20',
    size: 'normal',
  },
  {
    id: 3,
    title: 'Campaign photography',
    category: 'Photography',
    desc: 'High-impact visuals for the spring product launch.',
    gradient: 'from-amber-500/30 to-orange-600/20',
    size: 'wide',
  },
  {
    id: 4,
    title: 'Dashboard redesign',
    category: 'Product',
    desc: 'Data-rich layout with intuitive navigation patterns.',
    gradient: 'from-rose-500/30 to-pink-600/20',
    size: 'normal',
  },
  {
    id: 5,
    title: 'Office & culture',
    category: 'Behind the scenes',
    desc: 'A glimpse into how we work and the team behind the product.',
    gradient: 'from-emerald-500/30 to-green-600/20',
    size: 'normal',
  },
  {
    id: 6,
    title: 'Packaging design',
    category: 'Branding',
    desc: 'Sustainable unboxing experience with premium materials.',
    gradient: 'from-violet-500/30 to-purple-600/20',
    size: 'tall',
  },
  {
    id: 7,
    title: 'Event highlights',
    category: 'Photography',
    desc: 'Key moments from our annual product conference.',
    gradient: 'from-sky-500/30 to-blue-600/20',
    size: 'wide',
  },
  {
    id: 8,
    title: 'Illustration set',
    category: 'Branding',
    desc: 'Custom icon library and scene illustrations for marketing.',
    gradient: 'from-fuchsia-500/30 to-pink-600/20',
    size: 'normal',
  },
]

const FILTERS = ['All', 'Product', 'Branding', 'Photography', 'Behind the scenes']

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
}

export function GallerySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? items : items.filter((item) => item.category === active)

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <h2
              id="gallery-heading"
              className="font-display text-3xl sm:text-4xl font-bold
                         tracking-tight text-surface-50 mb-2"
            >
              Visual gallery
            </h2>
            <p className="text-surface-400 text-lg max-w-md">
              Showcase your product, work, or brand story through images.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium
                       text-brand-400 hover:text-brand-300 transition-colors w-fit"
          >
            View full gallery
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Filter gallery by category"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={[
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                active === filter
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-surface-900 border border-surface-800 text-surface-400 hover:text-surface-200 hover:border-surface-700',
              ].join(' ')}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[180px] gap-4">
          {filtered.map((item, i) => (
            <motion.article
              key={`${active}-${item.id}`}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              custom={i}
              className={[
                'group relative rounded-2xl overflow-hidden border border-surface-800',
                'bg-surface-900/60 cursor-pointer',
                'hover:border-surface-600 transition-colors duration-300',
                item.size === 'tall' ? 'row-span-2' : '',
                item.size === 'wide' ? 'col-span-2' : '',
              ].join(' ')}
            >
              {/* Gradient placeholder — replace with next/image */}
              <div
                className={[
                  'absolute inset-0 bg-gradient-to-br',
                  item.gradient,
                  'transition-transform duration-500 group-hover:scale-105',
                ].join(' ')}
              />

              {/* Grid texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),' +
                    'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)',
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-surface-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-xs font-medium text-brand-400 mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-semibold text-surface-50 text-base leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-surface-400 text-xs leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-950/60 backdrop-blur-sm border border-surface-700 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200">
                <ZoomIn size={14} className="text-surface-300" />
              </div>

              {/* Category pill */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-surface-950/60 backdrop-blur-sm border border-surface-800 text-surface-400 group-hover:opacity-0 transition-opacity duration-200">
                {item.category}
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-20 text-surface-500 text-sm">
            No items in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}
