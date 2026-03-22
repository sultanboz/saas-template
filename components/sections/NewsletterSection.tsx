'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section
      id="newsletter"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-surface-800
                     bg-gradient-to-br from-surface-900 to-surface-950
                     overflow-hidden p-10 sm:p-14 text-center"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br
                          from-brand-500/5 via-transparent to-violet-500/5
                          pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px
                          bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full
                          bg-brand-500/8 blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full
                          bg-violet-500/8 blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-brand-500/12
                            border border-brand-500/20 items-center justify-center mb-6">
              <Mail size={24} className="text-brand-400" />
            </div>

            <h2
              id="newsletter-heading"
              className="font-display text-2xl sm:text-3xl font-bold
                         tracking-tight text-surface-50 mb-3"
            >
              Stay in the loop
            </h2>
            <p className="text-surface-400 text-base mb-8 max-w-lg mx-auto">
              Get product updates, tips, and exclusive offers. No spam — unsubscribe anytime.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-brand-500/15 border border-brand-500/25
                           text-brand-400 font-medium"
              >
                <Check size={18} />
                You&apos;re subscribed! Check your inbox.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-surface-950/80 border-surface-700
                             placeholder:text-surface-500"
                  aria-label="Email address"
                  required
                />
                <Button type="submit" variant="primary" className="sm:w-auto">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
