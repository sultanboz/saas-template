'use client'

import { motion } from 'framer-motion'
import { Heart, Repeat2, MessageCircle, Bookmark } from 'lucide-react'

// ─── Tweet data ──────────────────────────────────────────
const TWEETS = [
  {
    name:    'Alex Chen',
    handle:  '@alexchen_dev',
    avatar:  'AC',
    color:   'bg-violet-500',
    verified: true,
    text:    'Saved me 2 weeks of work. The terminal animation alone is worth the price. Deployed to Vercel in under 10 minutes. If you\'re building a SaaS landing page, just get NexLayer.',
    time:    '9:14 AM · Mar 12, 2026',
    likes:   284,
    reposts: 47,
    replies: 31,
  },
  {
    name:    'Sarah Müller',
    handle:  '@sarahm_product',
    avatar:  'SM',
    color:   'bg-blue-500',
    verified: false,
    text:    'Finally a Next.js template that doesn\'t look like every other SaaS site. Dark mode is pixel perfect. Syne + DM Sans pairing is chef\'s kiss 🤌',
    time:    '2:48 PM · Mar 10, 2026',
    likes:   192,
    reposts: 28,
    replies: 19,
  },
  {
    name:    'James Wright',
    handle:  '@jwright_indie',
    avatar:  'JW',
    color:   'bg-amber-500',
    verified: false,
    text:    'The code quality is exceptional. TypeScript everywhere, clean components, easy to extend. Bought the Agency license. Already used it on 3 client projects this month.',
    time:    '11:22 AM · Mar 8, 2026',
    likes:   341,
    reposts: 62,
    replies: 45,
  },
  {
    name:    'Priya Nair',
    handle:  '@priya_designs',
    avatar:  'PN',
    color:   'bg-rose-500',
    verified: true,
    text:    'As a designer who codes, I\'m extremely picky about spacing. This template nails it. The bento grid section alone would take me days to build from scratch.',
    time:    '7:05 PM · Mar 6, 2026',
    likes:   156,
    reposts: 22,
    replies: 14,
  },
  {
    name:    'Marco Rossi',
    handle:  '@marcobuilds',
    avatar:  'MR',
    color:   'bg-emerald-500',
    verified: false,
    text:    'Lighthouse 98 out of the box. My investors were impressed with how polished the landing looked on day one. Worth every penny for the time saved.',
    time:    '4:33 PM · Mar 5, 2026',
    likes:   218,
    reposts: 35,
    replies: 27,
  },
  {
    name:    'Yuki Tanaka',
    handle:  '@yukitanaka_ai',
    avatar:  'YT',
    color:   'bg-cyan-500',
    verified: true,
    text:    'The pricing section toggle is so smooth. Customers actually notice these details and it builds trust. Conversion rate went up 14% after switching to this template.',
    time:    '1:17 PM · Mar 3, 2026',
    likes:   407,
    reposts: 81,
    replies: 56,
  },
  {
    name:    'David Park',
    handle:  '@davidpark_vc',
    avatar:  'DP',
    color:   'bg-orange-500',
    verified: true,
    text:    'I\'ve recommended NexLayer to every founder in our portfolio building a developer product. The design quality signals "serious team" without spending months on it.',
    time:    '10:50 AM · Mar 1, 2026',
    likes:   523,
    reposts: 94,
    replies: 68,
  },
  {
    name:    'Lena Fischer',
    handle:  '@lenaf_eng',
    avatar:  'LF',
    color:   'bg-pink-500',
    verified: false,
    text:    'Customized brand colors in 15 minutes. The CSS variables system is clean. Just update tailwind.config.ts and everything updates globally. No hunting for hardcoded hex values.',
    time:    '3:29 PM · Feb 28, 2026',
    likes:   174,
    reposts: 31,
    replies: 22,
  },
]

// ─── Twitter X logo ──────────────────────────────────────
function XLogo({ size = 12 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// ─── Verified badge ──────────────────────────────────────
function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} className="text-blue-400 fill-current flex-shrink-0">
      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.26 3.91.8c.66 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.91.2 3.92-.81s1.26-2.52.8-3.91C21.37 14.67 22.25 13.43 22.25 12zm-13.5 4.5l-3.75-3.75 1.06-1.06 2.69 2.69 6.44-6.44 1.06 1.06-7.5 7.5z" />
    </svg>
  )
}

// ─── Tweet card ──────────────────────────────────────────
interface TweetProps {
  name: string
  handle: string
  avatar: string
  color: string
  verified: boolean
  text: string
  time: string
  likes: number
  reposts: number
  replies: number
}

function TweetCard({ name, handle, avatar, color, verified, text, time, likes, reposts, replies }: TweetProps) {
  const formatNum = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)

  return (
    <div className="rounded-2xl border border-surface-800/70 bg-surface-900/50 p-5
                    hover:border-surface-700 hover:bg-surface-900 transition-all duration-300 group">

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center
                           text-[11px] text-white font-semibold flex-shrink-0`}>
            {avatar}
          </div>
          {/* Name + handle */}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-surface-100 leading-tight">
                {name}
              </span>
              {verified && <VerifiedBadge />}
            </div>
            <div className="text-xs text-surface-500 mt-0.5">{handle}</div>
          </div>
        </div>

        {/* X logo */}
        <div className="text-surface-600 group-hover:text-surface-400 transition-colors">
          <XLogo size={14} />
        </div>
      </div>

      {/* Tweet text */}
      <p className="text-sm text-surface-300 leading-relaxed mb-4">
        {text}
      </p>

      {/* Timestamp */}
      <div className="text-[11px] text-surface-600 mb-3 pb-3 border-b border-surface-800/60">
        {time}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <button aria-label={`Like — ${formatNum(likes)} likes`} className="flex items-center gap-1.5 text-surface-600 hover:text-rose-400 transition-colors group/btn">
          <Heart size={13} className="group-hover/btn:fill-rose-400 transition-all" />
          <span className="text-[11px]" aria-hidden="true">{formatNum(likes)}</span>
        </button>
        <button aria-label={`Repost — ${formatNum(reposts)} reposts`} className="flex items-center gap-1.5 text-surface-600 hover:text-brand-400 transition-colors">
          <Repeat2 size={13} />
          <span className="text-[11px]" aria-hidden="true">{formatNum(reposts)}</span>
        </button>
        <button aria-label={`Reply — ${formatNum(replies)} replies`} className="flex items-center gap-1.5 text-surface-600 hover:text-blue-400 transition-colors">
          <MessageCircle size={13} />
          <span className="text-[11px]" aria-hidden="true">{formatNum(replies)}</span>
        </button>
        <button aria-label="Bookmark" className="ml-auto text-surface-600 hover:text-surface-400 transition-colors">
          <Bookmark size={13} />
        </button>
      </div>
    </div>
  )
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

// ─── Animation variants ──────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── TestimonialsVisual ──────────────────────────────────
export function TestimonialsVisual() {
  // Split into 3 columns for masonry feel
  const col1 = [TWEETS[0], TWEETS[3], TWEETS[6]]
  const col2 = [TWEETS[1], TWEETS[4], TWEETS[7]]
  const col3 = [TWEETS[2], TWEETS[5]]

  return (
    <section className="py-28 px-4 sm:px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-glow-brand-center opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <SectionBadge text="Social proof" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-surface-50">
            Loved by{' '}
            <span className="text-gradient">developers</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-md mx-auto leading-relaxed">
            Don't take our word for it — here's what founders and engineers are saying.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start"
        >
          {/* Column 1 */}
          <div className="space-y-4">
            {col1.map((tweet) => (
              <motion.div key={tweet.handle} variants={cardVariant}>
                <TweetCard {...tweet} />
              </motion.div>
            ))}
          </div>

          {/* Column 2 — offset slightly on desktop */}
          <div className="space-y-4 lg:mt-8">
            {col2.map((tweet) => (
              <motion.div key={tweet.handle} variants={cardVariant}>
                <TweetCard {...tweet} />
              </motion.div>
            ))}
          </div>

          {/* Column 3 — hidden on sm, visible from lg */}
          <div className="hidden lg:block space-y-4 lg:mt-4">
            {col3.map((tweet) => (
              <motion.div key={tweet.handle} variants={cardVariant}>
                <TweetCard {...tweet} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {[
            { value: '200+', label: 'Happy customers' },
            { value: '4.9',  label: 'Average rating'  },
            { value: '98%',  label: 'Would recommend' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl text-surface-50 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-surface-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
