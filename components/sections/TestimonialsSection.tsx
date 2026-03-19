'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name:   'Alex Chen',
    role:   'Founder @ Papermark',
    avatar: 'AC',
    color:  'bg-violet-500',
    text:   'Saved me 2 weeks of work. The terminal animation alone is worth the price. Deployed to Vercel in under 10 minutes.',
    stars: 5,
  },
  {
    name:   'Sarah Müller',
    role:   'CTO @ Typeform clone',
    avatar: 'SM',
    color:  'bg-blue-500',
    text:   "Finally a Next.js template that doesn't look like every other SaaS site. Dark mode is pixel perfect.",
    stars: 5,
  },
  {
    name:   'James Wright',
    role:   'Indie hacker',
    avatar: 'JW',
    color:  'bg-amber-500',
    text:   'The code quality is exceptional. TypeScript everywhere, clean components, easy to extend. Bought the Agency license.',
    stars: 5,
  },
  {
    name:   'Priya Nair',
    role:   'Designer @ Linear-clone',
    avatar: 'PN',
    color:  'bg-rose-500',
    text:   "As a designer I'm picky about typography and spacing. This template nails it. Syne + DM Sans pairing is chef's kiss.",
    stars: 5,
  },
  {
    name:   'Marco Rossi',
    role:   'Solo SaaS builder',
    avatar: 'MR',
    color:  'bg-emerald-500',
    text:   'Lighthouse 98 out of the box. My investors were impressed with how polished the landing looked on day one.',
    stars: 5,
  },
  {
    name:   'Yuki Tanaka',
    role:   'Dev @ AI startup',
    avatar: 'YT',
    color:  'bg-cyan-500',
    text:   'The pricing section toggle is so smooth. Customers actually notice these details. Great investment.',
    stars: 5,
  },
  {
    name:   'David Park',
    role:   'Founder @ DevTools Inc',
    avatar: 'DP',
    color:  'bg-orange-500',
    text:   'Converted 3 client projects with this. The extended license pays for itself after the first gig.',
    stars: 5,
  },
  {
    name:   'Lena Fischer',
    role:   'Product @ B2B SaaS',
    avatar: 'LF',
    color:  'bg-pink-500',
    text:   'Documentation is thorough and well-written. Customized the brand colors in 15 minutes flat.',
    stars: 5,
  },
]

function TestimonialCard({ name, role, avatar, color, text, stars }: typeof testimonials[0]) {
  return (
    <div className="flex-shrink-0 w-72 rounded-2xl border border-surface-800/80
                    bg-surface-900/50 p-5 mx-2
                    hover:border-surface-700 hover:bg-surface-900
                    transition-all duration-300 group">
      {/* Stars */}
      <div className="flex gap-1 mb-3" aria-label={`${stars} out of 5 stars`} role="img">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={`star-${i}`} size={11} className="text-brand-400 fill-brand-400" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-surface-300 leading-relaxed mb-5
                    group-hover:text-surface-200 transition-colors duration-200">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center',
          'text-[10px] font-semibold text-white flex-shrink-0',
          color
        )}>
          {avatar}
        </div>
        <div>
          <div className="text-sm font-medium text-surface-100">{name}</div>
          <div className="text-xs text-surface-500 mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)

  return (
    <section id="testimonials" className="py-28 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        border border-surface-800 bg-surface-900/80 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-xs text-surface-400 font-medium">200+ happy developers</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-surface-50">
          Developers{' '}
          <span className="text-gradient">love it</span>
        </h2>
        <p className="text-surface-400 text-lg max-w-xl mx-auto leading-relaxed">
          From indie hackers to funded startups — see what people are saying.
        </p>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4" aria-hidden="true">
        <div className="absolute left-0 inset-y-0 w-28 z-10
                        bg-gradient-to-r from-surface-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 z-10
                        bg-gradient-to-l from-surface-950 to-transparent pointer-events-none" />
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]"
             style={{ animationDuration: '32s' }}>
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative" aria-hidden="true">
        <div className="absolute left-0 inset-y-0 w-28 z-10
                        bg-gradient-to-r from-surface-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 z-10
                        bg-gradient-to-l from-surface-950 to-transparent pointer-events-none" />
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]"
             style={{ animationDirection: 'reverse', animationDuration: '28s' }}>
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Screen-reader accessible list (visually hidden) */}
      <ul className="sr-only">
        {testimonials.map(t => (
          <li key={t.name}>
            <blockquote>
              <p>{t.text}</p>
              <footer>{t.name}, {t.role}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  )
}
