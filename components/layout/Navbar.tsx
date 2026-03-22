'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  Menu, X, Zap, Sun, Moon, ChevronDown,
  LayoutTemplate, Sparkles, Layers, BookOpen, Info,
  Mail, Timer, LogIn, Blocks, Eye, Columns2, Rows3,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/ThemeProvider'

// ─── All pages (for banner + dropdown) ───────────────────
const PAGE_GROUPS = [
  {
    label: 'Homepages',
    pages: [
      { label: 'Classic',      href: '/',               icon: LayoutTemplate, desc: 'Terminal, bento grid'     },
      { label: 'Visual',       href: '/v2',             icon: Sparkles,       desc: 'Mockup, feature switcher' },
      { label: 'Premium (v3)', href: '/v3',             icon: Layers,         desc: 'Services, portfolio, timeline' },
    ],
  },
  {
    label: 'Marketing',
    pages: [
      { label: 'Blog',         href: '/blog',           icon: BookOpen, desc: 'Posts & articles'    },
      { label: 'About',        href: '/about',          icon: Info,     desc: 'Team & mission'      },
      { label: 'Contact',      href: '/contact',        icon: Mail,     desc: 'Get in touch'        },
      { label: 'Coming Soon',  href: '/coming-soon',    icon: Timer,    desc: 'Waitlist page'       },
      { label: 'Login',        href: '/login',          icon: LogIn,    desc: 'Auth page'           },
    ],
  },
  {
    label: 'Developer',
    pages: [
      { label: 'Components',   href: '/components',         icon: Blocks,   desc: 'UI component showcase' },
      { label: 'Preview Hub',  href: '/preview',            icon: Eye,      desc: 'All pages at a glance' },
      { label: 'Sections',     href: '/preview/sections',   icon: Rows3,    desc: 'Section variants'      },
      { label: 'Layouts',      href: '/preview/layouts',    icon: Columns2, desc: 'Navbar & footer'       },
    ],
  },
]

// Flat list used in the banner strip
const ALL_PAGES = PAGE_GROUPS.flatMap(g => g.pages)

// ─── Top banner strip ─────────────────────────────────────
function BannerStrip({
  pathname,
  onDismiss,
}: {
  pathname: string
  onDismiss: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Keep active link visible — scroll into view when pathname changes
  useEffect(() => {
    if (!pathname || !scrollRef.current) return
    const active = scrollRef.current.querySelector<HTMLAnchorElement>(`a[href="${pathname}"]`)
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [pathname])

  return (
    <div className="h-9 border-b border-surface-800/60 bg-surface-950/80 backdrop-blur-xl
                    flex items-center">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 flex items-center gap-3">

        {/* Label */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider hidden sm:block">
            Template Preview
          </span>
        </div>

        <div className="w-px h-3 bg-surface-800 flex-shrink-0 hidden sm:block" />

        {/* Scrollable page links */}
        <div ref={scrollRef} className="flex-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-center gap-0.5 min-w-max">
            {ALL_PAGES.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium',
                  'whitespace-nowrap transition-all duration-150',
                  pathname === href
                    ? 'bg-brand-500/15 text-brand-400 border border-brand-500/25'
                    : 'text-surface-500 hover:text-surface-200 hover:bg-surface-800/60'
                )}
              >
                <Icon size={10} className="flex-shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Dismiss */}
        <button
          onClick={onDismiss}
          aria-label="Dismiss preview bar"
          className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center
                     text-surface-600 hover:text-surface-300 hover:bg-surface-800
                     transition-colors"
        >
          <X size={11} />
        </button>
      </div>
    </div>
  )
}

// ─── Desktop pages dropdown ───────────────────────────────
function PagesDropdown({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref             = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className={cn(
          'flex items-center gap-1 px-3 py-1.5 text-sm rounded-md transition-all duration-150 font-medium',
          open
            ? 'text-surface-50 bg-surface-800/60'
            : 'text-surface-400 hover:text-surface-50 hover:bg-surface-800/60'
        )}
      >
        Pages
        <ChevronDown size={13} className={cn('transition-transform duration-200', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px]
                        rounded-2xl border border-surface-800 bg-surface-950/96 backdrop-blur-2xl
                        shadow-2xl shadow-black/50 p-4 grid grid-cols-3 gap-4 z-[300]">
          {PAGE_GROUPS.map((group) => (
            <div key={group.label}>
              <div className="text-[10px] font-semibold text-surface-600 uppercase tracking-wider mb-2 px-1">
                {group.label}
              </div>
              <ul className="space-y-0.5">
                {group.pages.map(({ label, href, icon: Icon, desc }) => {
                  const isActive = pathname === href
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        className={cn(
                          'flex items-start gap-2.5 px-2 py-2 rounded-xl transition-all duration-150 group',
                          isActive
                            ? 'bg-brand-500/10 border border-brand-500/20'
                            : 'hover:bg-surface-800/60'
                        )}
                      >
                        <div className={cn(
                          'w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5',
                          isActive
                            ? 'bg-brand-500/20 text-brand-400'
                            : 'bg-surface-800 text-surface-500 group-hover:text-surface-300'
                        )}>
                          <Icon size={12} />
                        </div>
                        <div className="min-w-0">
                          <div className={cn(
                            'text-xs font-medium leading-tight',
                            isActive ? 'text-brand-400' : 'text-surface-200 group-hover:text-surface-50'
                          )}>
                            {label}
                          </div>
                          <div className="text-[10px] text-surface-600 mt-0.5 leading-tight">
                            {desc}
                          </div>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Mobile pages accordion ───────────────────────────────
function MobilePagesSection({
  pathname,
  onClose,
}: {
  pathname: string
  onClose: () => void
}) {
  const [expanded, setExpanded] = useState<string | null>('Homepages')

  return (
    <div className="border-t border-surface-800/60 pt-3 mt-1 space-y-1">
      {PAGE_GROUPS.map((group) => (
        <div key={group.label}>
          <button
            onClick={() => setExpanded(expanded === group.label ? null : group.label)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold
                       text-surface-600 uppercase tracking-wider rounded-md hover:bg-surface-800/40
                       transition-colors"
          >
            {group.label}
            <ChevronDown
              size={12}
              className={cn('transition-transform duration-200', expanded === group.label && 'rotate-180')}
            />
          </button>
          {expanded === group.label && (
            <div className="pl-2 mt-0.5 space-y-0.5">
              {group.pages.map(({ label, href, icon: Icon }) => {
                const isActive = pathname === href
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors',
                      isActive
                        ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                        : 'text-surface-400 hover:text-surface-50 hover:bg-surface-800'
                    )}
                  >
                    <Icon size={14} className={isActive ? 'text-brand-400' : 'text-surface-600'} />
                    {label}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Nav section links ────────────────────────────────────
const navLinks = [
  { label: 'Features',  href: '/#features'  },
  { label: 'Pricing',   href: '/#pricing'   },
  { label: 'Blog',      href: '/blog'        },
  { label: 'Changelog', href: '/#changelog' },
]

// ─── Navbar ───────────────────────────────────────────────
export function Navbar() {
  const pathname                        = usePathname()
  const [scrolled,    setScrolled]      = useState(false)
  const [mobileOpen,  setMobileOpen]    = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(false)
  const { theme, toggleTheme }          = useTheme()

  // Preview pages don't use <Navbar> at all, so no pathname check needed
  const showBanner = !bannerDismissed

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-[200]">

      {/* ── Template preview banner ── */}
      {showBanner && (
        <BannerStrip pathname={pathname ?? ''} onDismiss={() => setBannerDismissed(true)} />
      )}

      {/* ── Main nav ── */}
      <div
        className={cn(
          'transition-all duration-300',
          scrolled
            ? 'bg-surface-950/88 backdrop-blur-2xl border-b border-surface-800/70 shadow-sm shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-200
                            shadow-md shadow-brand-500/30">
              <Zap size={14} className="text-surface-950 fill-surface-950" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-surface-50">
              NexLayer
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-surface-400 hover:text-surface-50
                             rounded-md hover:bg-surface-800/60 transition-all duration-150 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <PagesDropdown pathname={pathname ?? ''} />
            </li>
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-lg flex items-center justify-center
                         text-surface-500 hover:text-surface-200
                         hover:bg-surface-800/70 transition-all duration-200"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a
              href="/login"
              className="text-sm text-surface-400 hover:text-surface-100 transition-colors px-2"
            >
              Sign in
            </a>
            <a
              href="/#pricing"
              className="px-4 py-2 text-sm font-semibold rounded-lg
                         bg-brand-500 text-surface-950
                         hover:bg-brand-400 transition-all duration-200
                         shadow-lg shadow-brand-500/20 hover:-translate-y-0.5"
            >
              Get started
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-lg flex items-center justify-center
                         text-surface-500 hover:text-surface-200 hover:bg-surface-800"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-surface-400 hover:text-surface-50
                         hover:bg-surface-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-950/96 backdrop-blur-2xl border-b border-surface-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-surface-400 hover:text-surface-50
                           rounded-md hover:bg-surface-800 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}

            <MobilePagesSection pathname={pathname ?? ''} onClose={() => setMobileOpen(false)} />

            <div className="pt-3 mt-1 border-t border-surface-800 flex flex-col gap-2">
              <a href="/login" className="px-3 py-2.5 text-sm text-surface-400 text-center">
                Sign in
              </a>
              <a
                href="/#pricing"
                className="px-4 py-2.5 text-sm font-semibold text-center rounded-lg
                           bg-brand-500 text-surface-950 hover:bg-brand-400 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
