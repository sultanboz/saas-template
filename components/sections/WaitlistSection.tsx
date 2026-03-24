'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Mail } from 'lucide-react'
import { Input }  from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const avatars = [
  'bg-violet-500', 'bg-blue-500', 'bg-amber-500',
  'bg-rose-500',   'bg-emerald-500',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

const vp = { once: true, margin: '-80px' } as const

export function WaitlistSection() {
  const [email,  setEmail]  = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      if (!res.ok) { setStatus('error'); return }
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="py-28 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-surface-800 bg-surface-900/60
                     overflow-hidden p-8 sm:p-10 text-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-glow-brand-center opacity-60 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px
                          bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

          {/* Icon */}
          <div className="inline-flex w-12 h-12 rounded-2xl bg-brand-500/12
                          items-center justify-center mb-6 border border-brand-500/20">
            <Mail size={20} className="text-brand-400" />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl font-bold
                       tracking-tight mb-3 text-surface-50"
          >
            Stay in the loop
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-surface-400 mb-8 leading-relaxed"
          >
            Get notified when new sections and features drop.
            No spam — only meaningful updates.
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center gap-3 py-3.5 px-5
                             rounded-xl bg-brand-500/10 border border-brand-500/25"
                >
                  <CheckCircle size={18} className="text-brand-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-brand-300">
                    You&apos;re on the list — we&apos;ll be in touch!
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  className="flex gap-2"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Input
                    type="email"
                    aria-label="Email address"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setStatus('idle') }}
                    error={status === 'error' ? 'Please enter a valid email address.' : undefined}
                    className="flex-1"
                    required
                    autoComplete="email"
                  />
                  <Button
                    type="submit"
                    size="md"
                    disabled={status === 'loading'}
                    className="flex-shrink-0 whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      <span className="w-4 h-4 rounded-full border-2 border-surface-950
                                       border-t-transparent animate-spin" />
                    ) : (
                      <>
                        Join waitlist
                        <ArrowRight size={14} />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2">
              {avatars.map((color, i) => (
                <div key={color}
                     className={`w-6 h-6 rounded-full ${color} border-2 border-surface-900
                                 flex items-center justify-center text-[8px] text-white font-bold`}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-xs text-surface-500">
              <span className="text-surface-300 font-medium">247 developers</span>
              {' '}already on the list
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
