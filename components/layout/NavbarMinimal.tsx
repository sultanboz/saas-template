'use client'

import { useState, useEffect } from 'react'
import { Zap, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/ThemeProvider'

export function NavbarMinimal() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme }  = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-surface-950/88 backdrop-blur-2xl border-b border-surface-800/70 shadow-sm'
        : 'bg-transparent'
    )}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center
                          group-hover:scale-110 transition-transform shadow-md shadow-brand-500/30">
            <Zap size={14} className="text-surface-950 fill-surface-950" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-surface-50">
            NexLayer
          </span>
        </a>

        {/* Right: theme + CTA */}
        <div className="flex items-center gap-3">
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
            href="/#pricing"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-brand-500 text-surface-950
                       hover:bg-brand-400 transition-all duration-200
                       shadow-lg shadow-brand-500/20 hover:-translate-y-0.5"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  )
}
