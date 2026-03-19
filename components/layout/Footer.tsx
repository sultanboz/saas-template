'use client'

import { useState } from 'react'
import { Zap, Github, Twitter, ArrowRight, CheckCircle } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features',    href: '/#features'     },
    { label: 'Pricing',     href: '/#pricing'       },
    { label: 'Changelog',   href: '/#changelog'     },
    { label: 'Roadmap',     href: '/#changelog'     },
  ],
  Resources: [
    { label: 'Documentation', href: '/components'                          },
    { label: 'Components',    href: '/components'                          },
    { label: 'Blog',          href: '/blog'                                },
    { label: 'GitHub',        href: 'https://github.com'                   },
  ],
  Legal: [
    { label: 'License',  href: 'https://themeforest.net/licenses/standard' },
    { label: 'Privacy',  href: '/'                                         },
    { label: 'Terms',    href: '/'                                         },
    { label: 'Refunds',  href: 'https://themeforest.net/page/buyer_faq'   },
  ],
}

export function Footer() {
  const [email,   setEmail]   = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) return
    // Simulate API
    await new Promise(r => setTimeout(r, 800))
    setSuccess(true)
  }

  return (
    <footer className="border-t border-surface-800/60 pt-16 pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Upper grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand + newsletter */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
                <Zap size={14} className="text-surface-950 fill-surface-950" />
              </div>
              <span className="font-display font-bold text-surface-50">NexLayer</span>
            </div>
            <p className="text-sm text-surface-500 leading-relaxed mb-6 max-w-xs">
              The production-ready Next.js landing page template built
              for AI tools and developer products.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-medium text-surface-400 mb-3 uppercase tracking-wider">
                Stay updated
              </p>
              {success ? (
                <div className="flex items-center gap-2 text-sm text-brand-400">
                  <CheckCircle size={15} />
                  <span>You&apos;re subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                    className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm
                               bg-surface-900 border border-surface-800
                               text-surface-100 placeholder:text-surface-600
                               focus:outline-none focus:border-brand-500/50
                               focus:ring-2 focus:ring-brand-500/10
                               hover:border-surface-700 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-brand-500 text-surface-950
                               hover:bg-brand-400 transition-colors flex-shrink-0"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-4">
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-surface-500 hover:text-surface-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between
                        gap-4 pt-8 border-t border-surface-800/60">
          <p className="text-sm text-surface-600 text-center sm:text-left">
            © 2025 NexLayer. Made with Next.js 15 &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com"
               target="_blank"
               rel="noopener noreferrer"
               className="text-surface-600 hover:text-surface-300 transition-colors"
               aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://twitter.com"
               target="_blank"
               rel="noopener noreferrer"
               className="text-surface-600 hover:text-surface-300 transition-colors"
               aria-label="Twitter">
              <Twitter size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
