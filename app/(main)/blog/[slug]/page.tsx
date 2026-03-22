import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import { posts, getPost, formatDate } from '@/lib/blog'
import type { Metadata } from 'next'
import { FooterMinimal } from '@/components/layout/FooterMinimal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

const categoryColor: Record<string, string> = {
  Engineering: 'text-blue-400 bg-blue-500/10',
  Design:      'text-violet-400 bg-violet-500/10',
  Growth:      'text-amber-400 bg-amber-500/10',
  Product:     'text-cyan-400 bg-cyan-500/10',
}

const avatarColors = ['bg-violet-500', 'bg-blue-500', 'bg-amber-500', 'bg-rose-500', 'bg-emerald-500']

function renderContent(markdown: string) {
  const lines = markdown.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd()

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="font-display text-2xl font-bold text-surface-50
                                    mt-10 mb-4 tracking-tight">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('```')) {
      // Collect code block
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <div key={key++} className="my-6 rounded-xl border border-surface-800 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-surface-900
                          border-b border-surface-800">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
          </div>
          <pre className="p-5 bg-surface-950 overflow-x-auto">
            <code className="text-sm text-surface-300 font-mono leading-relaxed">
              {codeLines.join('\n')}
            </code>
          </pre>
        </div>
      )
    } else if (line.startsWith('- ')) {
      // Collect list
      const items: string[] = [line.slice(2)]
      while (i + 1 < lines.length && lines[i + 1].startsWith('- ')) {
        i++
        items.push(lines[i].slice(2))
      }
      elements.push(
        <ul key={key++} className="my-4 space-y-2">
          {items.map((item, j) => {
            // Handle **bold**: text format
            const parts = item.split(/\*\*(.*?)\*\*/g)
            return (
              <li key={j} className="flex items-start gap-2.5 text-surface-400">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                <span>
                  {parts.map((p, k) => k % 2 === 1
                    ? <strong key={k} className="text-surface-200 font-semibold">{p}</strong>
                    : p
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      )
    } else if (line.startsWith('1. ')) {
      // Collect ordered list
      const items: string[] = [line.replace(/^\d+\. /, '')]
      while (i + 1 < lines.length && /^\d+\. /.test(lines[i + 1])) {
        i++
        items.push(lines[i].replace(/^\d+\. /, ''))
      }
      elements.push(
        <ol key={key++} className="my-4 space-y-2">
          {items.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g)
            return (
              <li key={j} className="flex items-start gap-3 text-surface-400">
                <span className="mt-0.5 font-mono text-xs text-brand-500 font-bold
                                 flex-shrink-0 w-4">{j + 1}.</span>
                <span>
                  {parts.map((p, k) => k % 2 === 1
                    ? <strong key={k} className="text-surface-200 font-semibold">{p}</strong>
                    : p
                  )}
                </span>
              </li>
            )
          })}
        </ol>
      )
    } else if (line.trim() === '') {
      // skip blank lines (handled by spacing on elements)
    } else {
      // Paragraph — handle inline **bold** and `code`
      const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g)
      elements.push(
        <p key={key++} className="text-surface-400 leading-[1.85] my-4">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-surface-100 font-semibold">{part.slice(2, -2)}</strong>
            }
            if (part.startsWith('`') && part.endsWith('`')) {
              return (
                <code key={j} className="px-1.5 py-0.5 rounded-md bg-surface-800
                                         text-brand-300 font-mono text-[0.875em]">
                  {part.slice(1, -1)}
                </code>
              )
            }
            return part
          })}
        </p>
      )
    }
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const relatedPosts = posts.filter(p => p.slug !== slug).slice(0, 3)
  const avatarColorMap: Record<string, string> = {
    JW: 'bg-violet-500', PN: 'bg-blue-500',
    AC: 'bg-amber-500',  MR: 'bg-rose-500',
    SM: 'bg-emerald-500',
  }

  return (
    <>
    <div id="main-content" className="min-h-screen bg-surface-950">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-16">

        {/* Post header */}
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-surface-500
                                        hover:text-surface-300 transition-colors mb-6">
            <ArrowLeft size={13} />
            Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full
                             ${categoryColor[post.category]}`}>
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-surface-600">
              <Clock size={11} />
              {post.readTime}
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold
                         text-surface-50 tracking-tight leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-surface-400 text-lg leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Author + date */}
          <div className="flex items-center gap-3 pt-6 border-t border-surface-800">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center
                            font-bold text-sm text-white
                            ${avatarColorMap[post.author.avatar] ?? 'bg-surface-700'}`}>
              {post.author.avatar}
            </div>
            <div>
              <div className="text-sm font-medium text-surface-200">{post.author.name}</div>
              <div className="text-xs text-surface-600">
                {post.author.role} · {formatDate(post.date)}
              </div>
            </div>
          </div>
        </div>

        {/* Post content */}
        <article>
          {renderContent(post.content)}
        </article>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-surface-800 to-transparent my-16" />

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="font-display font-bold text-xl text-surface-100 mb-6">
              More articles
            </h2>
            <div className="space-y-4">
              {relatedPosts.map((related, i) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-surface-800
                             hover:border-surface-700 hover:bg-surface-900/50 transition-all duration-200"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center
                                  text-[11px] font-bold text-white flex-shrink-0
                                  ${avatarColors[i % avatarColors.length]}`}>
                    {related.author.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-surface-200
                                    group-hover:text-brand-300 transition-colors">
                      {related.title}
                    </div>
                    <div className="text-xs text-surface-600 mt-0.5">{related.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
    <FooterMinimal />
    </>
  )
}
