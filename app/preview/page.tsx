import {
  FileText, Layout, Grid3X3, Layers, Zap, CheckCircle,
  ExternalLink, ArrowRight, Monitor, Smartphone, Tablet,
  Code2, Palette, Type, Box, Navigation, AlignJustify,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────
interface PageItem {
  title:    string
  desc:     string
  href:     string
  badge:    string
  badgeColor: string
  blocks:   { h: number; color: string; w?: string }[][]
}

interface SectionItem {
  title: string
  desc:  string
  href:  string
  tag:   string
  preview: React.ReactNode
}

interface VariantItem {
  title: string
  desc:  string
  href:  string
  preview: React.ReactNode
}

// ─── Page thumbnail blocks (wireframe style) ─────────────
function PageCard({ page }: { page: PageItem }) {
  return (
    <a
      href={page.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-surface-800
                 bg-surface-900/40 overflow-hidden
                 hover:border-brand-500/40 hover:bg-surface-900
                 transition-all duration-300"
    >
      {/* Wireframe thumbnail */}
      <div className="relative bg-surface-950 border-b border-surface-800 p-4 h-[160px]
                      overflow-hidden">
        {/* Nav bar */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="h-2 w-12 rounded-full bg-surface-700" />
          <div className="flex gap-1.5">
            <div className="h-1.5 w-6 rounded-full bg-surface-800" />
            <div className="h-1.5 w-6 rounded-full bg-surface-800" />
            <div className="h-1.5 w-6 rounded-full bg-surface-800" />
          </div>
          <div className="h-5 w-14 rounded-md bg-brand-500/30" />
        </div>
        {/* Content blocks */}
        <div className="flex flex-col gap-1.5">
          {page.blocks.map((row, ri) => (
            <div key={ri} className="flex gap-1.5">
              {row.map((block, bi) => (
                <div
                  key={bi}
                  className={`rounded-md flex-shrink-0 ${block.color}`}
                  style={{
                    height: `${block.h}px`,
                    width:  block.w ?? '100%',
                    flex:   block.w ? 'none' : 1,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-500/5 opacity-0
                        group-hover:opacity-100 transition-opacity duration-300
                        flex items-center justify-center">
          <div className="flex items-center gap-2 bg-surface-900/90 border border-surface-700
                          rounded-full px-3 py-1.5 text-xs font-medium text-surface-200">
            <ExternalLink size={11} />
            Open preview
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-surface-100">{page.title}</span>
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${page.badgeColor}`}>
            {page.badge}
          </span>
        </div>
        <p className="text-xs text-surface-500 leading-relaxed">{page.desc}</p>
      </div>
    </a>
  )
}

// ─── Section card ────────────────────────────────────────
function SectionCard({ s }: { s: SectionItem }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-surface-800
                 bg-surface-900/40 overflow-hidden
                 hover:border-brand-500/40 hover:bg-surface-900
                 transition-all duration-300"
    >
      {/* Preview area */}
      <div className="relative bg-surface-950 border-b border-surface-800 h-28
                      overflow-hidden p-3 flex items-center justify-center">
        {s.preview}
        <div className="absolute inset-0 bg-brand-500/5 opacity-0
                        group-hover:opacity-100 transition-opacity duration-300
                        flex items-center justify-center">
          <ExternalLink size={14} className="text-brand-400" />
        </div>
      </div>
      {/* Info */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-xs font-semibold text-surface-200">{s.title}</span>
          <span className="text-[9px] font-medium text-surface-600 bg-surface-800
                           px-1.5 py-0.5 rounded-full">{s.tag}</span>
        </div>
        <p className="text-[11px] text-surface-500 leading-relaxed">{s.desc}</p>
      </div>
    </a>
  )
}

// ─── Layout variant card ──────────────────────────────────
function VariantCard({ v }: { v: VariantItem }) {
  return (
    <a
      href={v.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-surface-800
                 bg-surface-900/40 overflow-hidden
                 hover:border-brand-500/40 hover:bg-surface-900
                 transition-all duration-300"
    >
      <div className="relative bg-surface-950 border-b border-surface-800 h-20
                      overflow-hidden flex items-center justify-center p-4">
        {v.preview}
        <div className="absolute inset-0 bg-brand-500/5 opacity-0
                        group-hover:opacity-100 transition-opacity duration-300
                        flex items-center justify-center">
          <ExternalLink size={12} className="text-brand-400" />
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs font-semibold text-surface-200 mb-0.5">{v.title}</p>
        <p className="text-[11px] text-surface-500">{v.desc}</p>
      </div>
    </a>
  )
}

// ─── Preview row separator ────────────────────────────────
function SectionTitle({
  icon: Icon,
  title,
  desc,
  count,
}: {
  icon: React.ElementType
  title: string
  desc?: string
  count?: number
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
          <Icon size={16} className="text-brand-400" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-surface-100">{title}</h2>
          {desc && <p className="text-xs text-surface-500 mt-0.5">{desc}</p>}
        </div>
      </div>
      {count !== undefined && (
        <span className="text-xs font-semibold text-brand-400 bg-brand-500/10
                         px-2.5 py-1 rounded-full border border-brand-500/20">
          {count} total
        </span>
      )}
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────
const pages: PageItem[] = [
  {
    title:      'Homepage — Classic',
    desc:       'Terminal animation, bento grid, conversion funnel. Hero → Pricing → CTA.',
    href:       '/',
    badge:      'Variant A',
    badgeColor: 'bg-brand-500/15 text-brand-400',
    blocks: [
      [{ h: 28, color: 'bg-surface-700' }],
      [{ h: 8,  color: 'bg-brand-500/40', w: '40%' }, { h: 8, color: 'bg-surface-800', w: '30%' }],
      [{ h: 18, color: 'bg-surface-800' }],
      [{ h: 10, color: 'bg-surface-800', w: '30%' }, { h: 10, color: 'bg-surface-800', w: '30%' }, { h: 10, color: 'bg-surface-800', w: '30%' }],
      [{ h: 14, color: 'bg-surface-800' }],
    ],
  },
  {
    title:      'Homepage — Visual',
    desc:       'Dashboard mockup, floating chips, feature switcher, Twitter-style testimonials.',
    href:       '/v2',
    badge:      'Variant B',
    badgeColor: 'bg-violet-500/15 text-violet-400',
    blocks: [
      [{ h: 12, color: 'bg-surface-700', w: '48%' }, { h: 12, color: 'bg-violet-500/20', w: '48%' }],
      [{ h: 8,  color: 'bg-brand-500/40', w: '40%' }, { h: 8, color: 'bg-surface-800', w: '30%' }],
      [{ h: 18, color: 'bg-surface-800', w: '35%' }, { h: 18, color: 'bg-violet-500/10', w: '60%' }],
      [{ h: 10, color: 'bg-surface-800', w: '30%' }, { h: 10, color: 'bg-surface-800', w: '30%' }, { h: 10, color: 'bg-surface-800', w: '30%' }],
    ],
  },
  {
    title:      'Homepage — Premium (v3)',
    desc:       'Gradient hero, services, portfolio, video demo, timeline, newsletter, awards.',
    href:       '/v3',
    badge:      'Variant C',
    badgeColor: 'bg-cyan-500/15 text-cyan-400',
    blocks: [
      [{ h: 32, color: 'bg-gradient-to-b from-brand-500/20 to-transparent' }],
      [{ h: 6,  color: 'bg-surface-700', w: '25%' }, { h: 6, color: 'bg-surface-700', w: '25%' }, { h: 6, color: 'bg-surface-700', w: '25%' }],
      [{ h: 14, color: 'bg-surface-800', w: '31%' }, { h: 14, color: 'bg-surface-800', w: '31%' }, { h: 14, color: 'bg-surface-800', w: '31%' }],
      [{ h: 20, color: 'bg-surface-800' }],
      [{ h: 10, color: 'bg-surface-800', w: '48%' }, { h: 10, color: 'bg-surface-800', w: '48%' }],
    ],
  },
  {
    title:      'Component Library',
    desc:       'All UI components: buttons, inputs, cards, modals and more.',
    href:       '/components',
    badge:      'UI',
    badgeColor: 'bg-violet-500/15 text-violet-400',
    blocks: [
      [{ h: 10, color: 'bg-brand-500/30', w: '20%' }, { h: 10, color: 'bg-surface-700', w: '20%' }, { h: 10, color: 'bg-surface-800', w: '20%' }],
      [{ h: 18, color: 'bg-surface-800' }],
      [{ h: 8,  color: 'bg-surface-800', w: '48%' }, { h: 8, color: 'bg-surface-800', w: '48%' }],
      [{ h: 10, color: 'bg-surface-800' }],
      [{ h: 14, color: 'bg-surface-800' }],
    ],
  },
  {
    title:      'Blog',
    desc:       'Featured post + article grid with category filtering.',
    href:       '/blog',
    badge:      'Content',
    badgeColor: 'bg-blue-500/15 text-blue-400',
    blocks: [
      [{ h: 22, color: 'bg-surface-700' }],
      [{ h: 16, color: 'bg-surface-800', w: '31%' }, { h: 16, color: 'bg-surface-800', w: '31%' }, { h: 16, color: 'bg-surface-800', w: '31%' }],
      [{ h: 10, color: 'bg-surface-800' }],
    ],
  },
  {
    title:      'Blog Post',
    desc:       'Full article layout with metadata, content, and author block.',
    href:       '/blog/why-nextjs-15-is-perfect-for-saas',
    badge:      'Content',
    badgeColor: 'bg-blue-500/15 text-blue-400',
    blocks: [
      [{ h: 22, color: 'bg-surface-700', w: '65%' }, { h: 22, color: 'bg-surface-800', w: '30%' }],
      [{ h: 8,  color: 'bg-surface-800', w: '65%' }],
      [{ h: 8,  color: 'bg-surface-800', w: '55%' }],
      [{ h: 8,  color: 'bg-surface-800', w: '60%' }],
      [{ h: 8,  color: 'bg-surface-800', w: '50%' }],
    ],
  },
  {
    title:      'About',
    desc:       'Team grid, company values, stats and culture section.',
    href:       '/about',
    badge:      'Marketing',
    badgeColor: 'bg-amber-500/15 text-amber-400',
    blocks: [
      [{ h: 20, color: 'bg-surface-700' }],
      [{ h: 10, color: 'bg-surface-800', w: '23%' }, { h: 10, color: 'bg-surface-800', w: '23%' }, { h: 10, color: 'bg-surface-800', w: '23%' }, { h: 10, color: 'bg-surface-800', w: '23%' }],
      [{ h: 14, color: 'bg-surface-800' }],
    ],
  },
  {
    title:      'Contact',
    desc:       'Two-column: contact form + channels and FAQ link.',
    href:       '/contact',
    badge:      'Utility',
    badgeColor: 'bg-cyan-500/15 text-cyan-400',
    blocks: [
      [{ h: 16, color: 'bg-surface-700' }],
      [{ h: 36, color: 'bg-surface-800', w: '62%' }, { h: 36, color: 'bg-surface-800', w: '34%' }],
    ],
  },
  {
    title:      'Coming Soon',
    desc:       'Full-screen countdown timer + email waitlist form.',
    href:       '/coming-soon',
    badge:      'Utility',
    badgeColor: 'bg-cyan-500/15 text-cyan-400',
    blocks: [
      [{ h: 50, color: 'bg-surface-800' }],
      [{ h: 8,  color: 'bg-brand-500/30', w: '50%' }],
    ],
  },
  {
    title:      'Sign In',
    desc:       'Auth page: email/password + OAuth providers (GitHub, Google).',
    href:       '/login',
    badge:      'Auth',
    badgeColor: 'bg-rose-500/15 text-rose-400',
    blocks: [
      [{ h: 52, color: 'bg-surface-800', w: '60%' }],
      [{ h: 8,  color: 'bg-brand-500/30', w: '50%' }],
    ],
  },
]

// ─── Section previews (mini wireframes) ──────────────────
const WireBlocks = ({ rows }: { rows: { w: string; h: number; c: string }[][] }) => (
  <div className="w-full flex flex-col gap-1">
    {rows.map((row, ri) => (
      <div key={ri} className="flex gap-1">
        {row.map((b, bi) => (
          <div key={bi} className={`rounded ${b.c} flex-shrink-0`}
               style={{ width: b.w, height: `${b.h}px`, flex: b.w === 'auto' ? 1 : 'none' }} />
        ))}
      </div>
    ))}
  </div>
)

const sections: SectionItem[] = [
  {
    title: 'Hero (Split)',
    desc:  'Terminal animation, gradient badge, dual CTA buttons',
    href:  '/#hero',
    tag:   'Above fold',
    preview: <WireBlocks rows={[
      [{ w: '50%', h: 10, c: 'bg-surface-700' }, { w: 'auto', h: 10, c: 'bg-surface-800' }],
      [{ w: '40%', h: 6, c: 'bg-surface-700' }, { w: 'auto', h: 6, c: 'bg-surface-800' }],
      [{ w: '30%', h: 5, c: 'bg-brand-500/40' }, { w: '25%', h: 5, c: 'bg-surface-700' }, { w: 'auto', h: 5, c: 'bg-surface-800' }],
    ]} />,
  },
  {
    title: 'Hero (Centered)',
    desc:  'Centered layout, gradient headline, avatar social proof',
    href:  '/preview/sections',
    tag:   'Variant',
    preview: <WireBlocks rows={[
      [{ w: '60%', h: 10, c: 'bg-surface-700' }],
      [{ w: '80%', h: 6, c: 'bg-surface-800' }],
      [{ w: '30%', h: 5, c: 'bg-brand-500/40' }, { w: '25%', h: 5, c: 'bg-surface-700' }],
    ]} />,
  },
  {
    title: 'Stats',
    desc:  'CountUp animation triggered on scroll',
    href:  '/#stats',
    tag:   'Credibility',
    preview: <WireBlocks rows={[
      [{ w: 'auto', h: 14, c: 'bg-surface-800' }, { w: 'auto', h: 14, c: 'bg-surface-800' }, { w: 'auto', h: 14, c: 'bg-surface-800' }, { w: 'auto', h: 14, c: 'bg-surface-800' }],
    ]} />,
  },
  {
    title: 'Dashboard Preview',
    desc:  'Browser chrome + full CSS app mockup',
    href:  '/#dashboard',
    tag:   'Product',
    preview: <WireBlocks rows={[
      [{ w: '100%', h: 5, c: 'bg-surface-700' }],
      [{ w: '22%', h: 28, c: 'bg-surface-800' }, { w: 'auto', h: 28, c: 'bg-surface-700/50' }],
    ]} />,
  },
  {
    title: 'Features (Bento)',
    desc:  'Asymmetric bento grid with mini visuals',
    href:  '/#features',
    tag:   'Features',
    preview: <WireBlocks rows={[
      [{ w: '55%', h: 22, c: 'bg-surface-800' }, { w: 'auto', h: 22, c: 'bg-surface-700' }],
      [{ w: '30%', h: 16, c: 'bg-surface-700' }, { w: '30%', h: 16, c: 'bg-surface-800' }, { w: 'auto', h: 16, c: 'bg-surface-800' }],
    ]} />,
  },
  {
    title: 'Testimonials',
    desc:  'Dual-row infinite scroll marquee, pause on hover',
    href:  '/#testimonials',
    tag:   'Social proof',
    preview: <WireBlocks rows={[
      [{ w: 'auto', h: 12, c: 'bg-surface-800' }, { w: 'auto', h: 12, c: 'bg-surface-800' }, { w: 'auto', h: 12, c: 'bg-surface-800' }],
      [{ w: 'auto', h: 12, c: 'bg-surface-700' }, { w: 'auto', h: 12, c: 'bg-surface-700' }, { w: 'auto', h: 12, c: 'bg-surface-700' }],
    ]} />,
  },
  {
    title: 'Integrations',
    desc:  'Logo marquee + 3-step install guide',
    href:  '/#integrations',
    tag:   'Stack',
    preview: <WireBlocks rows={[
      [{ w: 'auto', h: 8, c: 'bg-surface-800' }, { w: 'auto', h: 8, c: 'bg-surface-800' }, { w: 'auto', h: 8, c: 'bg-surface-800' }, { w: 'auto', h: 8, c: 'bg-surface-800' }],
      [{ w: 'auto', h: 12, c: 'bg-surface-700' }, { w: 'auto', h: 12, c: 'bg-surface-700' }, { w: 'auto', h: 12, c: 'bg-surface-700' }],
    ]} />,
  },
  {
    title: 'Comparison Table',
    desc:  'Feature matrix: Scratch vs Other vs NexLayer',
    href:  '/#comparison',
    tag:   'Conversion',
    preview: <WireBlocks rows={[
      [{ w: '40%', h: 6, c: 'bg-surface-800' }, { w: 'auto', h: 6, c: 'bg-surface-700' }, { w: 'auto', h: 6, c: 'bg-surface-700' }, { w: 'auto', h: 6, c: 'bg-brand-500/30' }],
      [{ w: '40%', h: 5, c: 'bg-surface-800' }, { w: 'auto', h: 5, c: 'bg-surface-700' }, { w: 'auto', h: 5, c: 'bg-surface-700' }, { w: 'auto', h: 5, c: 'bg-brand-500/20' }],
      [{ w: '40%', h: 5, c: 'bg-surface-800' }, { w: 'auto', h: 5, c: 'bg-surface-700' }, { w: 'auto', h: 5, c: 'bg-surface-700' }, { w: 'auto', h: 5, c: 'bg-brand-500/20' }],
    ]} />,
  },
  {
    title: 'Pricing',
    desc:  'Monthly/yearly toggle, 3-tier cards, popular highlight',
    href:  '/#pricing',
    tag:   'Conversion',
    preview: <WireBlocks rows={[
      [{ w: 'auto', h: 28, c: 'bg-surface-800' }, { w: 'auto', h: 28, c: 'bg-brand-500/20' }, { w: 'auto', h: 28, c: 'bg-surface-800' }],
    ]} />,
  },
  {
    title: 'Waitlist',
    desc:  'Email capture with animated success state',
    href:  '/#waitlist',
    tag:   'Capture',
    preview: <WireBlocks rows={[
      [{ w: '70%', h: 36, c: 'bg-surface-800' }],
      [{ w: '50%', h: 6, c: 'bg-brand-500/30' }],
    ]} />,
  },
  {
    title: 'Changelog',
    desc:  'Timeline layout with version badges and change types',
    href:  '/#changelog',
    tag:   'Transparency',
    preview: <WireBlocks rows={[
      [{ w: '8px', h: 36, c: 'bg-surface-700' }, { w: 'auto', h: 36, c: 'bg-surface-800' }],
    ]} />,
  },
  {
    title: 'FAQ Accordion',
    desc:  'Animated expand/collapse with ARIA attributes',
    href:  '/#faq',
    tag:   'Objection',
    preview: <WireBlocks rows={[
      [{ w: '100%', h: 8, c: 'bg-surface-800' }],
      [{ w: '100%', h: 8, c: 'bg-surface-700' }],
      [{ w: '100%', h: 8, c: 'bg-surface-800' }],
      [{ w: '100%', h: 8, c: 'bg-surface-800' }],
    ]} />,
  },
  {
    title: 'CTA',
    desc:  'Full-width closing section with glow effect',
    href:  '/#cta',
    tag:   'Close',
    preview: <WireBlocks rows={[
      [{ w: '100%', h: 44, c: 'bg-brand-500/10' }],
    ]} />,
  },
  {
    title: 'Team',
    desc:  '4-column cards with social links, Framer Motion stagger',
    href:  '/about',
    tag:   'Marketing',
    preview: <WireBlocks rows={[
      [{ w: 'auto', h: 28, c: 'bg-surface-800' }, { w: 'auto', h: 28, c: 'bg-surface-800' }, { w: 'auto', h: 28, c: 'bg-surface-800' }, { w: 'auto', h: 28, c: 'bg-surface-800' }],
    ]} />,
  },
  {
    title: 'Logo Cloud',
    desc:  'Animated logo row with fade-in stagger',
    href:  '/preview/sections',
    tag:   'Social proof',
    preview: <WireBlocks rows={[
      [{ w: 'auto', h: 6, c: 'bg-surface-700' }, { w: 'auto', h: 6, c: 'bg-surface-700' }, { w: 'auto', h: 6, c: 'bg-surface-700' }, { w: 'auto', h: 6, c: 'bg-surface-700' }, { w: 'auto', h: 6, c: 'bg-surface-700' }],
    ]} />,
  },
]

// ─── Layout variants ─────────────────────────────────────
const navVariants: VariantItem[] = [
  {
    title:   'Navbar — Full',
    desc:    'Logo · Nav links · Theme toggle · Sign in · CTA',
    href:    '/',
    preview: (
      <div className="w-full flex items-center justify-between px-2 py-1.5
                      border border-surface-700 rounded-lg bg-surface-900">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-brand-500/60" />
          <div className="w-10 h-2 rounded-full bg-surface-700" />
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-1.5 rounded-full bg-surface-700" />
          <div className="w-6 h-1.5 rounded-full bg-surface-700" />
          <div className="w-6 h-1.5 rounded-full bg-surface-700" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-surface-700" />
          <div className="w-8 h-1.5 rounded-full bg-surface-700" />
          <div className="w-10 h-4 rounded-md bg-brand-500/50" />
        </div>
      </div>
    ),
  },
  {
    title:   'NavbarMegaMenu',
    desc:    'Hover mega dropdowns — Product & Resources',
    href:    '/preview/layouts',
    preview: (
      <div className="w-full flex flex-col gap-1.5">
        <div className="flex items-center justify-between px-2 py-1.5
                        border border-surface-700 rounded-t-lg bg-surface-900">
          <div className="w-10 h-2 rounded-full bg-surface-700" />
          <div className="flex gap-1.5">
            <div className="w-8 h-2 rounded-sm bg-surface-600" />
            <div className="w-8 h-2 rounded-sm bg-surface-700" />
          </div>
          <div className="w-10 h-4 rounded-md bg-brand-500/50" />
        </div>
        <div className="ml-4 flex gap-2 px-2 py-1.5 border border-surface-700
                        rounded-b-lg bg-surface-900/80 w-40">
          <div className="flex flex-col gap-1 flex-1">
            <div className="w-full h-1.5 rounded-full bg-surface-700" />
            <div className="w-full h-1.5 rounded-full bg-surface-700" />
            <div className="w-3/4 h-1.5 rounded-full bg-surface-700" />
          </div>
          <div className="w-10 border-l border-surface-700 pl-1.5 flex flex-col gap-1">
            <div className="w-full h-1.5 rounded-full bg-brand-500/30" />
            <div className="w-full h-1.5 rounded-full bg-surface-800" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title:   'NavbarMinimal',
    desc:    'Logo + theme toggle + single CTA only',
    href:    '/preview/layouts',
    preview: (
      <div className="w-full flex items-center justify-between px-2 py-1.5
                      border border-surface-700 rounded-lg bg-surface-900">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-brand-500/60" />
          <div className="w-10 h-2 rounded-full bg-surface-700" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-surface-700" />
          <div className="w-10 h-4 rounded-md bg-brand-500/50" />
        </div>
      </div>
    ),
  },
]

const footerVariants: VariantItem[] = [
  {
    title:   'Footer — Full',
    desc:    'Brand + newsletter · 3 link columns · social',
    href:    '/',
    preview: (
      <div className="w-full flex flex-col gap-1.5">
        <div className="grid grid-cols-4 gap-1.5">
          <div className="flex flex-col gap-1 col-span-2">
            <div className="w-12 h-2 rounded-full bg-surface-700" />
            <div className="w-full h-1.5 rounded-full bg-surface-800" />
            <div className="w-3/4 h-1.5 rounded-full bg-surface-800" />
            <div className="flex gap-1 mt-1">
              <div className="flex-1 h-4 rounded bg-surface-800" />
              <div className="w-5 h-4 rounded bg-brand-500/40" />
            </div>
          </div>
          {[0,1,2].map(i => (
            <div key={i} className="flex flex-col gap-1">
              <div className="w-8 h-1.5 rounded-full bg-surface-700" />
              <div className="w-full h-1 rounded-full bg-surface-800" />
              <div className="w-full h-1 rounded-full bg-surface-800" />
              <div className="w-3/4 h-1 rounded-full bg-surface-800" />
            </div>
          ))}
        </div>
        <div className="mt-1 pt-1 border-t border-surface-800 flex justify-between">
          <div className="w-24 h-1.5 rounded-full bg-surface-800" />
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded bg-surface-700" />
            <div className="w-3 h-3 rounded bg-surface-700" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title:   'FooterMinimal',
    desc:    'Single centered row — logo · links · social · copyright',
    href:    '/preview/layouts',
    preview: (
      <div className="w-full flex items-center justify-between px-2 py-2
                      border-t border-surface-700">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-brand-500/50" />
          <div className="w-8 h-1.5 rounded-full bg-surface-700" />
        </div>
        <div className="flex gap-2">
          {[0,1,2,3].map(i => (
            <div key={i} className="w-6 h-1.5 rounded-full bg-surface-800" />
          ))}
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded bg-surface-700" />
          <div className="w-3 h-3 rounded bg-surface-700" />
          <div className="w-12 h-1.5 rounded-full bg-surface-800" />
        </div>
      </div>
    ),
  },
]

// ─── Stack badges ─────────────────────────────────────────
const stack = [
  { label: 'Next.js 15',        color: 'bg-surface-800 text-surface-300' },
  { label: 'React 19',          color: 'bg-surface-800 text-surface-300' },
  { label: 'TypeScript',        color: 'bg-blue-500/15 text-blue-400'    },
  { label: 'Tailwind CSS 3.4',  color: 'bg-cyan-500/15 text-cyan-400'   },
  { label: 'Framer Motion 11',  color: 'bg-violet-500/15 text-violet-400'},
  { label: 'App Router',        color: 'bg-surface-800 text-surface-300' },
  { label: 'CSS Variables',     color: 'bg-surface-800 text-surface-300' },
  { label: 'Dark + Light mode', color: 'bg-amber-500/15 text-amber-400' },
  { label: 'Lucide Icons',      color: 'bg-surface-800 text-surface-300' },
  { label: 'next/font',         color: 'bg-surface-800 text-surface-300' },
]

// ─── Page ────────────────────────────────────────────────
export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-surface-950">

      {/* ── Top bar ── */}
      <div className="sticky top-0 z-50 bg-surface-950/90 backdrop-blur-xl
                      border-b border-surface-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center">
                <Zap size={12} className="text-surface-950 fill-surface-950" />
              </div>
              <span className="font-display font-bold text-sm text-surface-50">NexLayer</span>
            </div>
            <span className="text-surface-800">·</span>
            <span className="text-xs text-surface-500">ThemeForest Live Preview</span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full
                             bg-brand-500/15 text-brand-400 border border-brand-500/20">
              v1.0
            </span>
          </div>
          <a
            href="/#pricing"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                       bg-brand-500 text-surface-950 text-xs font-semibold
                       hover:bg-brand-400 transition-colors"
          >
            Purchase <ArrowRight size={11} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* ── Hero ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full
                                 bg-brand-500/15 text-brand-400 uppercase tracking-widest">
                  Next.js 15 Template
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-surface-50 mb-3">
                NexLayer
              </h1>
              <p className="text-lg text-surface-400 max-w-lg leading-relaxed">
                Production-ready SaaS landing page template built for AI tools
                and developer products. Dark &amp; light mode, Framer Motion
                animations, TypeScript throughout.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {[
                { value: '9',   label: 'Pages'      },
                { value: '15',  label: 'Sections'   },
                { value: '13',  label: 'Components' },
                { value: '5',   label: 'Layouts'    },
              ].map(s => (
                <div key={s.label}
                     className="w-28 py-3 rounded-xl border border-surface-800
                                bg-surface-900/50 text-center">
                  <div className="text-2xl font-bold font-display text-surface-50">{s.value}</div>
                  <div className="text-xs text-surface-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack badges */}
          <div className="flex flex-wrap gap-2">
            {stack.map(s => (
              <span key={s.label}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${s.color}`}>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Key features ── */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: Monitor,
              title: 'Dark & Light mode',
              desc:  'CSS variable-based theme system. Instant toggle, no flicker, persisted to localStorage.',
            },
            {
              icon: Smartphone,
              title: 'Pixel perfect responsive',
              desc:  'Every section tested from 375px to 1440px. Mobile-first Tailwind utilities throughout.',
            },
            {
              icon: Code2,
              title: 'TypeScript throughout',
              desc:  'Strict types on every component, prop, and utility. Zero `any` — IDE autocomplete works perfectly.',
            },
            {
              icon: Palette,
              title: 'Design system',
              desc:  'Surface color scale, brand tokens, typography scale — all via CSS custom properties.',
            },
            {
              icon: Tablet,
              title: 'Framer Motion',
              desc:  'Scroll-triggered reveal animations on every section. Respects prefers-reduced-motion.',
            },
            {
              icon: Type,
              title: 'Premium typography',
              desc:  'Syne Display + DM Sans body + JetBrains Mono. Self-hosted via next/font. Display: swap.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title}
                 className="flex gap-3 p-5 rounded-xl border border-surface-800
                            bg-surface-900/40 hover:border-surface-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center
                              justify-center flex-shrink-0">
                <Icon size={15} className="text-brand-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-surface-200 mb-1">{title}</div>
                <div className="text-xs text-surface-500 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Pages ── */}
        <div className="mb-16">
          <SectionTitle
            icon={FileText}
            title="Pages"
            desc="Click any card to open the live preview in a new tab"
            count={pages.length}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {pages.map(p => <PageCard key={p.title} page={p} />)}
          </div>
        </div>

        {/* ── Sections ── */}
        <div className="mb-16">
          <SectionTitle
            icon={Layout}
            title="Sections"
            desc="All reusable sections — drop into any page"
            count={sections.length}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {sections.map(s => <SectionCard key={s.title} s={s} />)}
          </div>
        </div>

        {/* ── Layout variants ── */}
        <div className="mb-16">
          <SectionTitle
            icon={Navigation}
            title="Navigation variants"
            desc="3 navbar styles — full, mega menu, and minimal"
            count={3}
          />
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {navVariants.map(v => <VariantCard key={v.title} v={v} />)}
          </div>

          <SectionTitle
            icon={AlignJustify}
            title="Footer variants"
            desc="Full 5-column newsletter footer and compact minimal version"
            count={2}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {footerVariants.map(v => <VariantCard key={v.title} v={v} />)}
          </div>
        </div>

        {/* ── UI Components ── */}
        <div className="mb-16">
          <SectionTitle
            icon={Box}
            title="UI Component library"
            desc="13 fully typed, accessible, theme-aware components"
            count={13}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            {[
              { name: 'Button',    variants: '5 variants · 4 sizes'        },
              { name: 'Badge',     variants: '8 colors · dot indicator'    },
              { name: 'Card',      variants: '4 variants · 4 padding sizes'},
              { name: 'Input',     variants: 'label · hint · error · prefix/suffix' },
              { name: 'Textarea',  variants: 'char counter · max chars'    },
              { name: 'Select',    variants: 'native + custom chevron'     },
              { name: 'Switch',    variants: '2 sizes · label · hint'      },
              { name: 'Checkbox',  variants: 'checked · indeterminate'     },
              { name: 'Avatar',    variants: '5 sizes · 8 colors · group'  },
              { name: 'Progress',  variants: '5 colors · 3 sizes · animated'},
              { name: 'Tabs',      variants: 'line · pill · card'          },
              { name: 'Tooltip',   variants: '4 placements · delay prop'   },
              { name: 'Skeleton',  variants: 'card · text · avatar presets'},
            ].map(c => (
              <div key={c.name}
                   className="p-4 rounded-xl border border-surface-800 bg-surface-900/40
                              hover:border-surface-700 transition-colors">
                <div className="text-sm font-semibold text-surface-200 mb-1">{c.name}</div>
                <div className="text-[11px] text-surface-500 leading-relaxed">{c.variants}</div>
              </div>
            ))}
          </div>
          <a
            href="/components"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                       border border-surface-700 text-sm font-medium text-surface-300
                       hover:border-brand-500/40 hover:text-surface-100 transition-all"
          >
            <Grid3X3 size={14} />
            Open full component library
            <ArrowRight size={13} />
          </a>
        </div>

        {/* ── Included files ── */}
        <div className="mb-16">
          <SectionTitle
            icon={Layers}
            title="What's included"
            desc="Everything in the download package"
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { check: true,  text: 'Full Next.js 15 source code (TypeScript)'    },
              { check: true,  text: '8 pages, 15 sections, 13 UI components'      },
              { check: true,  text: '3 navbar variants + 2 footer variants'       },
              { check: true,  text: 'Dark & light mode with CSS variable system'  },
              { check: true,  text: 'Framer Motion scroll animations throughout'  },
              { check: true,  text: 'Tailwind CSS 3.4 + custom design tokens'     },
              { check: true,  text: 'WCAG 2.1 accessible (aria, keyboard nav)'    },
              { check: true,  text: 'Mobile responsive 375px → 1440px'           },
              { check: true,  text: 'Blog system with static generation'          },
              { check: true,  text: 'Full documentation & setup guide'           },
              { check: true,  text: 'Lifetime updates included'                  },
              { check: true,  text: 'Figma source file (Pro & Agency plans)'     },
            ].map(({ check, text }) => (
              <div key={text} className="flex items-start gap-2.5">
                <CheckCircle size={14}
                             className={`flex-shrink-0 mt-0.5 ${check ? 'text-brand-400' : 'text-surface-700'}`} />
                <span className="text-sm text-surface-400">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5
                        p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/8
                          via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl font-display font-bold text-surface-50 mb-3">
              Ready to ship faster?
            </h2>
            <p className="text-surface-400 mb-6 max-w-md mx-auto">
              One-time purchase. Lifetime updates. All source code included.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
                         bg-brand-500 text-surface-950 font-semibold
                         hover:bg-brand-400 transition-all duration-200
                         shadow-lg shadow-brand-500/25 hover:-translate-y-0.5"
            >
              View pricing <ArrowRight size={15} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-800/60 mt-16 py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center
                        justify-between gap-4 text-xs text-surface-600">
          <span>NexLayer — Next.js 15 SaaS Template</span>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-surface-300 transition-colors">
              Live demo
            </a>
            <a href="/components" className="hover:text-surface-300 transition-colors">
              Components
            </a>
            <a href="/blog" className="hover:text-surface-300 transition-colors">
              Blog
            </a>
          </div>
          <span>© 2025 NexLayer. All rights reserved.</span>
        </div>
      </div>

    </div>
  )
}
