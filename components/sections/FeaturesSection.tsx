'use client'

import { motion } from 'framer-motion'
import {
  Zap, Shield, Code2, Palette, BarChart3,
  Globe, Lock, RefreshCw
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Animation variants ──────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075, delayChildren: 0.1 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Mini visuals for some cards ────────────────────────
function PerfBars() {
  const bars = [
    { label: 'Performance', value: 98, color: 'bg-brand-500' },
    { label: 'Accessibility', value: 100, color: 'bg-brand-400' },
    { label: 'Best Practices', value: 100, color: 'bg-brand-300' },
    { label: 'SEO', value: 100, color: 'bg-brand-200' },
  ]
  return (
    <div className="mt-5 space-y-2.5">
      {bars.map((b) => (
        <div key={b.label} className="flex items-center gap-3">
          <div className="flex-1 h-1.5 rounded-full bg-surface-800 overflow-hidden">
            <div
              className={`h-full rounded-full ${b.color} transition-all duration-1000`}
              style={{ width: `${b.value}%` }}
            />
          </div>
          <div className="flex items-baseline gap-1 w-16 justify-end">
            <span className="text-[11px] font-mono font-bold text-brand-400">{b.value}</span>
            <span className="text-[9px] text-surface-600">/100</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function CodeSnippet() {
  return (
    <div className="always-dark mt-5 rounded-lg bg-surface-950 border border-surface-800 p-3 font-mono text-[11px] leading-5">
      <div><span className="text-purple-400">interface</span> <span className="text-blue-300">ButtonProps</span> <span className="text-surface-400">{'{'}</span></div>
      <div className="pl-3">
        <span className="text-surface-300">variant</span>
        <span className="text-surface-600">:</span>{' '}
        <span className="text-amber-300">&apos;primary&apos; | &apos;ghost&apos;</span>
      </div>
      <div className="pl-3">
        <span className="text-surface-300">size</span>
        <span className="text-surface-600">?:</span>{' '}
        <span className="text-amber-300">&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;</span>
      </div>
      <div><span className="text-surface-400">{'}'}</span></div>
    </div>
  )
}

function ThemeSwatches() {
  return (
    <div className="mt-5 flex items-center gap-2">
      <div className="flex gap-1.5">
        {['#09090b','#18181b','#27272a','#3f3f46'].map(c => (
          <div key={c} className="w-6 h-6 rounded-md border border-surface-700/50"
               style={{ background: c }} />
        ))}
      </div>
      <div className="w-px h-5 bg-surface-800" />
      <div className="flex gap-1.5">
        {['#fafafa','#f4f4f5','#e4e4e7','#d4d4d8'].map(c => (
          <div key={c} className="w-6 h-6 rounded-md border border-surface-300/20"
               style={{ background: c }} />
        ))}
      </div>
    </div>
  )
}

// ─── Feature card ────────────────────────────────────────
interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
  accent?: boolean
  className?: string
  visual?: React.ReactNode
  iconColor?: string
  iconBg?: string
}

function FeatureCard({
  icon: Icon, title, description, accent, className, visual,
  iconColor = 'text-surface-400',
  iconBg    = 'bg-surface-800',
}: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariant}
      className={cn(
        'relative group rounded-2xl border p-6 overflow-hidden',
        'transition-all duration-300',
        'hover:-translate-y-1',
        accent
          ? 'border-brand-500/25 bg-surface-900 hover:border-brand-500/45 hover:shadow-2xl hover:shadow-brand-500/8'
          : 'border-surface-800 bg-surface-900/40 hover:border-surface-700 hover:bg-surface-900/70 hover:shadow-xl hover:shadow-black/20',
        className
      )}
    >
      {/* Subtle inner glow on hover */}
      <div className={cn(
        'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
        'transition-opacity duration-500 pointer-events-none',
        accent
          ? 'bg-gradient-to-br from-brand-500/6 via-transparent to-transparent'
          : 'bg-gradient-to-br from-white/[0.02] via-transparent to-transparent'
      )} />

      {/* Shimmer on accent card */}
      {accent && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                        transition-opacity duration-700 pointer-events-none shimmer" />
      )}

      {/* Icon */}
      <div className={cn(
        'w-10 h-10 rounded-xl flex items-center justify-center mb-4',
        'transition-all duration-300 group-hover:scale-110',
        iconBg
      )}>
        <Icon size={19} className={iconColor} />
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-[0.9375rem] text-surface-50 mb-1.5 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-surface-500 leading-relaxed">{description}</p>

      {/* Optional visual */}
      {visual}
    </motion.div>
  )
}

// ─── Section heading badge ───────────────────────────────
function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    border border-surface-800 bg-surface-900/80 mb-5">
      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
      <span className="text-xs text-surface-400 font-medium">{text}</span>
    </div>
  )
}

// ─── FeaturesSection ────────────────────────────────────
export function FeaturesSection() {
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
          <h2 className="font-display text-4xl sm:text-5xl font-bold
                         tracking-tight mb-4 text-surface-50">
            Built different,{' '}
            <span className="text-gradient">by design</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-xl mx-auto leading-relaxed">
            Not another multipurpose template. Built specifically for AI tools
            and developer products — every section has a reason.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Row 1 — large accent card + TypeScript card */}
          <FeatureCard
            icon={Zap}
            title="Blazing fast"
            description="Built on Next.js 15 App Router with static generation. Lighthouse scores above 95 out of the box."
            accent
            iconColor="text-brand-400"
            iconBg="bg-brand-500/15"
            className="lg:col-span-2"
            visual={<PerfBars />}
          />
          <FeatureCard
            icon={Code2}
            title="Clean TypeScript"
            description="Every component fully typed. Props-based customization, no hacks."
            iconColor="text-blue-400"
            iconBg="bg-blue-500/12"
            visual={<CodeSnippet />}
          />

          {/* Row 2 */}
          <FeatureCard
            icon={Palette}
            title="Dark & Light mode"
            description="CSS variables-driven theming. Switch with one class — no JS library needed."
            iconColor="text-violet-400"
            iconBg="bg-violet-500/12"
            visual={<ThemeSwatches />}
          />
          <FeatureCard
            icon={Shield}
            title="Security first"
            description="No bloat, no tracking scripts. Privacy-friendly and GDPR-ready structure."
            iconColor="text-amber-400"
            iconBg="bg-amber-500/12"
          />
          <FeatureCard
            icon={BarChart3}
            title="Conversion optimized"
            description="Every section placement backed by SaaS landing page best practices."
            iconColor="text-rose-400"
            iconBg="bg-rose-500/12"
          />

          {/* Row 3 */}
          <FeatureCard
            icon={Globe}
            title="SEO ready"
            description="Metadata API, Open Graph, structured data, sitemap — all configured."
            iconColor="text-cyan-400"
            iconBg="bg-cyan-500/12"
          />
          <FeatureCard
            icon={Lock}
            title="Auth-ready structure"
            description="Folder structure compatible with NextAuth, Clerk, or Supabase Auth."
            iconColor="text-indigo-400"
            iconBg="bg-indigo-500/12"
          />
          <FeatureCard
            icon={RefreshCw}
            title="Lifetime updates"
            description="Buy once, get all future updates. New sections added every month."
            iconColor="text-emerald-400"
            iconBg="bg-emerald-500/12"
          />
        </motion.div>
      </div>
    </section>
  )
}
