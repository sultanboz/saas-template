'use client'

import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Navbar }          from '@/components/layout/Navbar'
import { NavbarMegaMenu }  from '@/components/layout/NavbarMegaMenu'
import { NavbarMinimal }   from '@/components/layout/NavbarMinimal'
import { Footer }          from '@/components/layout/Footer'
import { FooterMinimal }   from '@/components/layout/FooterMinimal'

// ─── Section wrapper ──────────────────────────────────────
function DemoSection({
  title,
  desc,
  badge,
  children,
  dark = true,
}: {
  title: string
  desc: string
  badge?: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <div className="mb-16">
      {/* Label row */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4 px-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="font-display font-bold text-xl text-surface-50">{title}</h2>
            {badge && (
              <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full
                               bg-brand-500/15 text-brand-400 border border-brand-500/20">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-surface-400">{desc}</p>
        </div>
      </div>

      {/* Preview frame */}
      <div className={`relative rounded-2xl border border-surface-800 overflow-hidden
                       ${dark ? 'bg-surface-950' : 'bg-white'}`}>
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-surface-800/60
                        bg-surface-900/60">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-4 h-5 rounded-md bg-surface-800/80
                          flex items-center justify-center">
            <span className="text-[10px] text-surface-500 font-mono">nexlayer.app</span>
          </div>
        </div>
        {/* Component render */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function LayoutsPreviewPage() {
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
            <span className="text-sm text-surface-300 font-medium">Layout Variants</span>
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

      {/* ── Page content ────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          border border-surface-800 bg-surface-900/80 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            <span className="text-xs text-surface-400 font-medium">5 layout components</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-surface-50 mb-3">
            Navigation &amp; Footer Variants
          </h1>
          <p className="text-surface-400 text-base max-w-2xl leading-relaxed">
            Three navbar variants and two footer variants — each optimised for different pages
            and use-cases. Drop in whichever fits the page, or use multiple across different routes.
          </p>
        </div>

        {/* ─── Navbars ──────────────────────────────────────── */}
        <div className="mb-4">
          <h2 className="font-display font-bold text-sm uppercase tracking-widest
                         text-surface-500 mb-8">
            Navbar variants
          </h2>
        </div>

        <DemoSection
          title="Navbar"
          desc="Full-featured navigation: logo · five links · theme toggle · Sign in · CTA button."
          badge="Used on /"
        >
          {/* Render inside a relative container to contain position:fixed */}
          <div className="relative h-16 overflow-hidden">
            <div className="absolute inset-0">
              <Navbar />
            </div>
          </div>
        </DemoSection>

        <DemoSection
          title="NavbarMegaMenu"
          desc="Hover/keyboard-activated mega dropdowns for Product and Resources — keyboard navigable (Enter / Space / Escape)."
          badge="Drop-in replacement"
        >
          <div className="relative h-16 overflow-visible">
            <div className="absolute inset-x-0 top-0">
              <NavbarMegaMenu />
            </div>
          </div>
        </DemoSection>

        <DemoSection
          title="NavbarMinimal"
          desc="Logo + theme toggle + single CTA only — ideal for /login, /coming-soon, and distraction-free landing variants."
          badge="Used on /login · /coming-soon"
        >
          <div className="relative h-16 overflow-hidden">
            <div className="absolute inset-0">
              <NavbarMinimal />
            </div>
          </div>
        </DemoSection>

        {/* ─── Footers ──────────────────────────────────────── */}
        <div className="mb-4 mt-4">
          <h2 className="font-display font-bold text-sm uppercase tracking-widest
                         text-surface-500 mb-8">
            Footer variants
          </h2>
        </div>

        <DemoSection
          title="Footer"
          desc="Five-column layout: brand column with newsletter subscription + three link columns + bottom bar with social icons."
          badge="Used on /"
        >
          <Footer />
        </DemoSection>

        <DemoSection
          title="FooterMinimal"
          desc="Single centered row — logo · nav links · social icons · copyright. For pages that need a clean close."
          badge="Used on /blog · /about"
        >
          <FooterMinimal />
        </DemoSection>

        {/* ─── Back CTA ─────────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-surface-800/60 text-center">
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
