import { Zap } from 'lucide-react'
import { GithubIcon, XIcon } from '@/components/icons/BrandIcons'

export function FooterMinimal() {
  return (
    <footer className="border-t border-surface-800/60 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-md bg-brand-500 flex items-center justify-center
                          group-hover:scale-110 transition-transform">
            <Zap size={12} className="text-surface-950 fill-surface-950" />
          </div>
          <span className="font-display font-bold text-surface-50 text-sm">NexLayer</span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {[
            { label: 'Features',  href: '/#features' },
            { label: 'Pricing',   href: '/#pricing'  },
            { label: 'Blog',      href: '/blog'       },
            { label: 'Terms',     href: '#'           },
            { label: 'Privacy',   href: '#'           },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-surface-500 hover:text-surface-200 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social + copy */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub"
             className="text-surface-600 hover:text-surface-300 transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href="#" aria-label="X (Twitter)"
             className="text-surface-600 hover:text-surface-300 transition-colors">
            <XIcon size={16} />
          </a>
          <span className="text-sm text-surface-600">© 2025 NexLayer</span>
        </div>
      </div>
    </footer>
  )
}
