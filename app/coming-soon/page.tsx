'use client'

import { useState, useEffect } from 'react'
import { Zap, ArrowRight, CheckCircle, Twitter, Github } from 'lucide-react'

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      days:    Math.floor(diff / 86_400_000),
      hours:   Math.floor((diff % 86_400_000) / 3_600_000),
      minutes: Math.floor((diff % 3_600_000)  / 60_000),
      seconds: Math.floor((diff % 60_000)     / 1_000),
    }
  }
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

const LAUNCH_DATE = new Date('2026-04-01T00:00:00Z')

type Status = 'idle' | 'loading' | 'done'

export default function ComingSoonPage() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE)
  const [email,  setEmail]  = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 900))
    setStatus('done')
  }

  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center px-4">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] rounded-full
                        bg-brand-500/6 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center
                          shadow-lg shadow-brand-500/30">
            <Zap size={18} className="text-surface-950 fill-surface-950" />
          </div>
          <span className="font-display font-bold text-xl text-surface-50">NexLayer</span>
        </div>

        {/* Headline */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
            Launching soon
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-surface-50
                       leading-tight mb-5">
          Something great<br />is on its way.
        </h1>
        <p className="text-lg text-surface-400 leading-relaxed mb-12">
          We&apos;re putting the final touches on NexLayer. Leave your email and
          you&apos;ll be the first to know when we launch.
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { value: days,    label: 'Days'    },
            { value: hours,   label: 'Hours'   },
            { value: minutes, label: 'Minutes' },
            { value: seconds, label: 'Seconds' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl border border-surface-800 bg-surface-900
                              flex items-center justify-center
                              text-2xl font-bold font-mono text-surface-50
                              tabular-nums">
                {String(value).padStart(2, '0')}
              </div>
              <span className="text-xs text-surface-600 mt-2">{label}</span>
            </div>
          ))}
        </div>

        {/* Email form */}
        {status === 'done' ? (
          <div className="flex items-center justify-center gap-2 text-brand-400 font-medium">
            <CheckCircle size={18} />
            <span>You&apos;re on the list! We&apos;ll be in touch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit}
                className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 min-w-0 px-4 py-2.5 rounded-xl text-sm
                         bg-surface-900 border border-surface-800
                         text-surface-100 placeholder:text-surface-600
                         focus:outline-none focus:border-brand-500/50
                         focus:ring-2 focus:ring-brand-500/10
                         hover:border-surface-700 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2.5 rounded-xl bg-brand-500 text-surface-950
                         font-semibold text-sm flex items-center gap-1.5
                         hover:bg-brand-400 transition-all duration-200
                         disabled:opacity-60 shadow-lg shadow-brand-500/20
                         hover:-translate-y-0.5"
            >
              {status === 'loading' ? '…' : (
                <><span>Notify me</span><ArrowRight size={14} /></>
              )}
            </button>
          </form>
        )}

        {/* Social */}
        <div className="flex items-center justify-center gap-6 mt-12 pt-8
                        border-t border-surface-800/60">
          {[
            { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
            { icon: Github,  label: 'GitHub',  href: 'https://github.com' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-surface-500
                         hover:text-surface-200 transition-colors"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
