import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { posts, formatDate } from '@/lib/blog'
import type { Metadata } from 'next'
import { FooterMinimal } from '@/components/layout/FooterMinimal'

export const metadata: Metadata = {
  title: 'Blog — Engineering, design & growth insights',
  description: 'Articles on Next.js, SaaS design, conversion optimization, and developer experience.',
}

const categoryColor: Record<string, string> = {
  Engineering: 'text-blue-400 bg-blue-500/10',
  Design:      'text-violet-400 bg-violet-500/10',
  Growth:      'text-amber-400 bg-amber-500/10',
  Product:     'text-cyan-400 bg-cyan-500/10',
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
    <div id="main-content" className="min-h-screen bg-surface-950">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">

        {/* Page header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          border border-surface-800 bg-surface-900/80 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs text-surface-400 font-medium">From the team</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold
                         tracking-tight text-surface-50 mb-4">
            The NexLayer Blog
          </h1>
          <p className="text-surface-400 text-lg max-w-xl leading-relaxed">
            Engineering deep-dives, design patterns, and growth tactics
            for indie hackers and SaaS founders.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-2xl border border-surface-800 bg-surface-900/40
                     hover:border-surface-700 hover:bg-surface-900
                     transition-all duration-300 mb-8 overflow-hidden"
        >
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full
                               ${categoryColor[featured.category]}`}>
                {featured.category}
              </span>
              <span className="text-xs text-surface-600">Featured</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-50
                           group-hover:text-brand-300 transition-colors duration-200 mb-3">
              {featured.title}
            </h2>
            <p className="text-surface-400 text-base leading-relaxed mb-6 max-w-2xl">
              {featured.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center
                                justify-center text-[11px] font-bold text-white">
                  {featured.author.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-surface-200">{featured.author.name}</div>
                  <div className="text-xs text-surface-600">
                    {formatDate(featured.date)} · {featured.readTime}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-brand-400
                              group-hover:text-brand-300 transition-colors">
                Read article
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map((post, i) => {
            const avatarColors = ['bg-blue-500', 'bg-amber-500', 'bg-rose-500', 'bg-emerald-500']
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-surface-800
                           bg-surface-900/40 hover:border-surface-700 hover:bg-surface-900
                           transition-all duration-300 overflow-hidden p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full
                                   ${categoryColor[post.category]}`}>
                    {post.category}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base text-surface-100
                               group-hover:text-brand-300 transition-colors duration-200 mb-2
                               leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-5 flex-1">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4
                                border-t border-surface-800/60">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center
                                    text-[10px] font-bold text-white ${avatarColors[i]}`}>
                      {post.author.avatar}
                    </div>
                    <span className="text-xs text-surface-500">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-surface-600">
                    <Clock size={11} />
                    {post.readTime}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
    <FooterMinimal />
    </>
  )
}
