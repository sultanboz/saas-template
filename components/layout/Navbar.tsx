'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/ThemeProvider'

// ─── Variant switcher ────────────────────────────────────
function VariantSwitcher() {
  const pathname = usePathname()
  const isVisual = pathname === '/v2'

  // Only show on the two homepage variants
  if (pathname !== '/' && pathname !== '/v2') return null

  return (
    <div className="flex items-center gap-1 p-0.5 rounded-lg bg-surface-900 border border-surface-800">
      <a
        href="/"
        className={cn(
          'px-2.5 py-1 text-[11px] font-medium rounded-md transition-all duration-200',
          !isVisual
            ? 'bg-surface-700 text-surface-100 shadow-sm'
            : 'text-surface-500 hover:text-surface-300'
        )}
      >
        Classic
      </a>
      <a
        href="/v2"
        className={cn(
          'px-2.5 py-1 text-[11px] font-medium rounded-md transition-all duration-200',
          isVisual
            ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30'
            : 'text-surface-500 hover:text-surface-300'
        )}
      >
        Visual
      </a>
    </div>
  )
}

const navLinks = [
  { label: 'Features',    href: '/#features'     },
  { label: 'Pricing',     href: '/#pricing'       },
  { label: 'Blog',        href: '/blog'           },
  { label: 'Changelog',   href: '/#changelog'     },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme }      = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
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

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm text-surface-400 hover:text-surface-50
                           rounded-md hover:bg-surface-800/60 transition-all duration-150
                           font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <VariantSwitcher />
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-lg flex items-center justify-center
                       text-surface-500 hover:text-surface-200
                       hover:bg-surface-800/70 transition-all duration-200"
          >
            {theme === 'dark'
              ? <Sun size={15} />
              : <Moon size={15} />
            }
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
            <div className="pt-3 mt-2 border-t border-surface-800 flex flex-col gap-2">
              <div className="flex justify-center">
                <VariantSwitcher />
              </div>
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
