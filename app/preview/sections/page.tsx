import { ArrowLeft, ExternalLink } from 'lucide-react'
import { HeroAlt }     from '@/components/sections/HeroAlt'
import { LogoSection } from '@/components/sections/LogoSection'

export default function SectionsPreviewPage() {
  return (
    <div className="min-h-screen bg-surface-950 text-surface-50">

      {/* ── Top bar ─────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 border-b border-surface-800/70
                      bg-surface-950/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/preview"
              className="flex items-center gap-1.5 text-sm text-surface-400
                         hover:text-surface-100 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Preview Hub
            </a>
            <span className="text-surface-700">·</span>
            <span className="text-sm text-surface-300 font-medium">Section Variants</span>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-surface-400
                       hover:text-surface-200 transition-colors"
          >
            View template <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* ── Page heading ────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        border border-surface-800 bg-surface-900/80 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          <span className="text-xs text-surface-400 font-medium">2 section variants</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-surface-50 mb-3">
          Extra Section Variants
        </h1>
        <p className="text-surface-400 text-base max-w-2xl leading-relaxed mb-10">
          Drop-in section alternatives — a centered Hero variant and an animated Logo Cloud.
          Swap them in for any page in the template.
        </p>
      </div>

      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-display font-bold text-sm uppercase tracking-widest text-surface-500">
            Hero — Centered variant
          </span>
          <div className="flex-1 h-px bg-surface-800" />
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full
                           bg-brand-500/15 text-brand-400 border border-brand-500/20">
            HeroAlt
          </span>
        </div>
        <p className="text-xs text-surface-600 mb-0">
          File: <code className="font-mono text-surface-500">components/sections/HeroAlt.tsx</code>
          &nbsp;·&nbsp;Centered layout, gradient headline, AvatarGroup + star rating social proof, modal-less demo CTA
        </p>
      </div>

      {/* ── HeroAlt live render ──────────────────────────────── */}
      <HeroAlt />

      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-display font-bold text-sm uppercase tracking-widest text-surface-500">
            Logo Cloud
          </span>
          <div className="flex-1 h-px bg-surface-800" />
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full
                           bg-brand-500/15 text-brand-400 border border-brand-500/20">
            LogoSection
          </span>
        </div>
        <p className="text-xs text-surface-600 mb-0">
          File: <code className="font-mono text-surface-500">components/sections/LogoSection.tsx</code>
          &nbsp;·&nbsp;8 partner logos with fade-in stagger on scroll — use as a &ldquo;trusted by&rdquo; section
        </p>
      </div>

      {/* ── LogoSection live render ──────────────────────────── */}
      <LogoSection />

      {/* ── Back CTA ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 pt-4">
        <div className="border-t border-surface-800/60 pt-8 text-center">
          <a
            href="/preview"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                       border border-surface-800 bg-surface-900/60
                       text-sm text-surface-300 hover:text-surface-50
                       hover:border-surface-700 hover:bg-surface-900
                       transition-all duration-200"
          >
            <ArrowLeft size={14} />
            Back to Preview Hub
          </a>
        </div>
      </div>
    </div>
  )
}
