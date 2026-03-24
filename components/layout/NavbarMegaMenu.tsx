'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Zap, Sun, Moon, ChevronDown,
         LayoutDashboard, Puzzle, RefreshCw, BookOpen,
         Layers, FileText, Code2, BarChart3,
         ArrowRight, Zap as ZapIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/ThemeProvider'

// ─── Mega menu data ──────────────────────────────────────
const menus = {
  Product: {
    featured: {
      title: 'NexLayer Pro',
      desc:  'All 15+ sections, Figma file, priority support.',
      href:  '/#pricing',
    },
    items: [
      { icon: LayoutDashboard, label: 'Dashboard Preview',  desc: 'See it in action',        href: '/#dashboard'    },
      { icon: LayoutDashboard, label: 'Features',            desc: 'Everything included',     href: '/#features'     },
      { icon: Puzzle,          label: 'Integrations',        desc: '12 tools pre-configured', href: '/#integrations' },
      { icon: BarChart3,       label: 'Pricing',             desc: 'One-time purchase',       href: '/#pricing'      },
      { icon: RefreshCw,       label: 'Changelog',           desc: "What's new",              href: '/#changelog'    },
    ],
  },
  Resources: {
    featured: {
      title: 'Component Library',
      desc:  'Every UI component documented with code examples.',
      href:  '/components',
    },
    items: [
      { icon: BookOpen, label: 'Documentation',  desc: 'Setup & customization guide', href: '/components' },
      { icon: Layers,   label: 'Components',     desc: 'UI component showcase',       href: '/components' },
      { icon: FileText, label: 'Blog',           desc: 'Engineering & design',        href: '/blog'       },
      { icon: Code2,    label: 'GitHub',         desc: 'Source code',                 href: 'https://github.com' },
    ],
  },
}

type MenuKey = keyof typeof menus

function MegaMenu({ menuKey, id }: { menuKey: MenuKey; id?: string }) {
  const data = menus[menuKey]
  return (
    <div id={id} role="region" aria-label={`${menuKey} menu`}
         className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] z-50">
      {/* Arrow */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3
                      rotate-45 bg-surface-900 border-l border-t border-surface-800" />

      <div className="rounded-2xl border border-surface-800 bg-surface-900
                      shadow-2xl shadow-black/40 overflow-hidden">
        <div className="grid grid-cols-[1fr_200px]">
          {/* Left: items */}
          <div className="p-4 grid grid-cols-1 gap-1">
            {data.items.map(({ icon: Icon, label, desc, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-3 px-3 py-2.5 rounded-xl
                           hover:bg-surface-800/60 transition-all duration-150 group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-800 flex items-center justify-center
                                flex-shrink-0 group-hover:bg-surface-700 transition-colors">
                  <Icon size={14} className="text-surface-400 group-hover:text-surface-200" />
                </div>
                <div>
                  <div className="text-sm font-medium text-surface-200
                                  group-hover:text-surface-50 transition-colors">
                    {label}
                  </div>
                  <div className="text-xs text-surface-600 mt-0.5">{desc}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: featured */}
          <div className="border-l border-surface-800 bg-brand-500/4 p-5
                          flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-semibold text-brand-500
                              uppercase tracking-wider mb-3">
                Featured
              </div>
              <div className="font-semibold text-surface-100 text-sm mb-1.5">
                {data.featured.title}
              </div>
              <div className="text-xs text-surface-500 leading-relaxed mb-4">
                {data.featured.desc}
              </div>
            </div>
            <a
              href={data.featured.href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold
                         text-brand-400 hover:text-brand-300 transition-colors group"
            >
              Learn more
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── NavbarMegaMenu ──────────────────────────────────────
export function NavbarMegaMenu() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [activeMenu,  setActiveMenu]  = useState<MenuKey | null>(null)
  const { theme, toggleTheme }        = useTheme()
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function enterMenu(key: MenuKey) {
    clearTimeout(leaveTimer.current)
    setActiveMenu(key)
  }
  function leaveMenu() {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 120)
  }
  function toggleMenu(key: MenuKey) {
    clearTimeout(leaveTimer.current)
    setActiveMenu(prev => (prev === key ? null : key))
  }
  function handleKeyDown(e: React.KeyboardEvent, key: MenuKey) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleMenu(key)
    } else if (e.key === 'Escape') {
      setActiveMenu(null)
    }
  }

  useEffect(() => () => clearTimeout(leaveTimer.current), [])

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-surface-950/88 backdrop-blur-2xl border-b border-surface-800/70 shadow-sm'
        : 'bg-transparent'
    )}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center
                          group-hover:scale-110 transition-transform shadow-md shadow-brand-500/30">
            <Zap size={14} className="text-surface-950 fill-surface-950" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-surface-50">
            NexLayer
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {(Object.keys(menus) as MenuKey[]).map(key => (
            <li
              key={key}
              className="relative"
              onMouseEnter={() => enterMenu(key)}
              onMouseLeave={leaveMenu}
            >
              <button
                aria-expanded={activeMenu === key}
                aria-haspopup="true"
                aria-controls={`menu-${key}`}
                onClick={() => toggleMenu(key)}
                onKeyDown={(e) => handleKeyDown(e, key)}
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md',
                  'transition-all duration-150',
                  activeMenu === key
                    ? 'text-surface-50 bg-surface-800/60'
                    : 'text-surface-400 hover:text-surface-50 hover:bg-surface-800/60'
                )}
              >
                {key}
                <ChevronDown
                  size={13}
                  aria-hidden="true"
                  className={cn(
                    'transition-transform duration-200',
                    activeMenu === key ? 'rotate-180' : ''
                  )}
                />
              </button>
              {activeMenu === key && <MegaMenu menuKey={key} id={`menu-${key}`} />}
            </li>
          ))}

          {[
            { label: 'Pricing', href: '/#pricing' },
            { label: 'Blog',    href: '/blog'      },
            { label: 'About',   href: '/about'     },
          ].map(link => (
            <li key={link.href}>
              <a href={link.href}
                 className="px-3 py-1.5 text-sm font-medium text-surface-400
                            hover:text-surface-50 hover:bg-surface-800/60
                            rounded-md transition-all duration-150">
                {link.label}
              </a>
            </li>
          ))}
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
          <a href="/login"
             className="text-sm text-surface-400 hover:text-surface-100 transition-colors px-2">
            Sign in
          </a>
          <a href="/#pricing"
             className="px-4 py-2 text-sm font-semibold rounded-lg bg-brand-500 text-surface-950
                        hover:bg-brand-400 transition-all duration-200
                        shadow-lg shadow-brand-500/20 hover:-translate-y-0.5">
            Get started
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme"
                  className="w-8 h-8 rounded-lg flex items-center justify-center
                             text-surface-500 hover:text-surface-200 hover:bg-surface-800">
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
                  className="p-2 rounded-md text-surface-400 hover:text-surface-50 hover:bg-surface-800">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-950/96 backdrop-blur-2xl border-b border-surface-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {[
              { label: 'Features',    href: '/#features'  },
              { label: 'Pricing',     href: '/#pricing'    },
              { label: 'Components',  href: '/components'  },
              { label: 'Blog',        href: '/blog'        },
              { label: 'About',       href: '/about'       },
              { label: 'Changelog',   href: '/#changelog'  },
            ].map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                 className="px-3 py-2.5 text-sm text-surface-400 hover:text-surface-50
                            rounded-md hover:bg-surface-800 transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-surface-800 flex flex-col gap-2">
              <a href="/login" className="px-3 py-2.5 text-sm text-surface-400 text-center">
                Sign in
              </a>
              <a href="/#pricing"
                 className="px-4 py-2.5 text-sm font-semibold text-center rounded-lg
                            bg-brand-500 text-surface-950 hover:bg-brand-400 transition-colors">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
