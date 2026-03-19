import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page not found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-950 flex flex-col items-center justify-center
                    px-4 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[400px] rounded-full
                      bg-brand-500/4 blur-[120px] pointer-events-none" />

      <div className="relative text-center max-w-md">

        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-12 group">
          <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center
                          group-hover:scale-110 transition-transform">
            <Zap size={16} className="text-surface-950 fill-surface-950" />
          </div>
          <span className="font-display font-bold text-xl text-surface-50">NexLayer</span>
        </Link>

        {/* 404 */}
        <div className="font-display font-bold text-[8rem] leading-none
                        text-surface-800 select-none mb-2">
          404
        </div>

        <h1 className="font-display text-2xl font-bold text-surface-100 mb-3">
          Page not found
        </h1>
        <p className="text-surface-500 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                       bg-brand-500 text-surface-950 font-semibold text-sm
                       hover:bg-brand-400 transition-all duration-200
                       shadow-lg shadow-brand-500/30 hover:-translate-y-0.5"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                       border border-surface-800 text-surface-300 text-sm
                       hover:border-surface-700 hover:text-surface-100 transition-all duration-200"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </div>
  )
}
