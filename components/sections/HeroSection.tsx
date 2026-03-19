'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Terminal } from 'lucide-react'

// ─── Terminal lines ──────────────────────────────────────
const TERMINAL_LINES = [
  { type: 'cmd',     text: 'npx create-nexlayer my-saas-app',   prefix: '❯' },
  { type: 'info',    text: 'Resolving packages from registry...'              },
  { type: 'info',    text: 'Installing 42 dependencies...'                    },
  { type: 'success', text: '✓  Dependencies installed   (2.1s)'              },
  { type: 'success', text: '✓  Stripe webhooks configured'                   },
  { type: 'success', text: '✓  Auth providers initialized'                   },
  { type: 'ready',   text: '⚡ Ready on http://localhost:3000'               },
]

// ─── Terminal component ──────────────────────────────────
function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [typedText,    setTypedText]    = useState('')
  const [isTyping,     setIsTyping]     = useState(true)
  const [isComplete,   setIsComplete]   = useState(false)

  const lineIntervalRef   = useRef<ReturnType<typeof setInterval>  | undefined>(undefined)
  const restartTimeoutRef = useRef<ReturnType<typeof setTimeout>   | undefined>(undefined)

  useEffect(() => {
    const firstLine = TERMINAL_LINES[0].text
    let charIndex = 0
    setIsComplete(false)

    const typeInterval = setInterval(() => {
      if (charIndex < firstLine.length) {
        setTypedText(firstLine.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        let lineIndex = 1
        lineIntervalRef.current = setInterval(() => {
          if (lineIndex < TERMINAL_LINES.length) {
            setVisibleLines(lineIndex)
            lineIndex++
            if (lineIndex === TERMINAL_LINES.length) setIsComplete(true)
          } else {
            clearInterval(lineIntervalRef.current)
            restartTimeoutRef.current = setTimeout(() => {
              setVisibleLines(0)
              setTypedText('')
              setIsTyping(true)
              setIsComplete(false)
            }, 4500)
          }
        }, 340)
      }
    }, 38)

    return () => {
      clearInterval(typeInterval)
      clearInterval(lineIntervalRef.current)
      clearTimeout(restartTimeoutRef.current)
    }
  }, [isTyping])

  return (
    <div className="relative rounded-2xl border border-surface-800 bg-surface-950
                    shadow-2xl shadow-black/70 overflow-hidden">

      {/* Scan line */}
      {isComplete && (
        <div className="absolute inset-x-0 h-12 bg-gradient-to-b
                        from-brand-500/6 to-transparent pointer-events-none animate-scan" />
      )}

      {/* Top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r
                      from-transparent via-brand-500/30 to-transparent" />

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3
                      border-b border-surface-800/70 bg-surface-900/40">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md
                          bg-surface-800/50 border border-surface-700/40">
            <Terminal size={10} className="text-surface-600" />
            <span className="text-[11px] text-surface-500 font-mono tracking-wide">
              ~/my-saas-app
            </span>
          </div>
        </div>
        <div className="w-14" />
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-[12.5px] leading-6 min-h-[210px] space-y-1">
        {/* Typed command line */}
        <div className="flex items-center gap-2">
          <span className="text-brand-500 select-none font-bold">❯</span>
          <span className="text-surface-100">{typedText}</span>
          {isTyping && (
            <span className="w-[6px] h-[15px] bg-brand-400 inline-block
                             animate-pulse rounded-[2px] ml-px" />
          )}
        </div>

        {/* Output lines */}
        {TERMINAL_LINES.slice(1).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {line.type === 'info' && (
              <span className="text-surface-600">
                <span className="mr-2 opacity-40">│</span>
                {line.text}
              </span>
            )}
            {line.type === 'success' && (
              <span className="text-brand-500/90">{line.text}</span>
            )}
            {line.type === 'ready' && (
              <span className="text-brand-400 font-semibold">{line.text}</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Status bar */}
      <div className="px-4 py-2 border-t border-surface-800/50 bg-surface-900/20
                      flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700
                           ${isComplete
                             ? 'bg-brand-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]'
                             : 'bg-surface-700'}`}
          />
          <span className="text-[10px] text-surface-600 font-mono">
            {isComplete ? 'process exited 0' : 'running...'}
          </span>
        </div>
        <span className="text-[10px] text-surface-700 font-mono">node v20.11.0</span>
      </div>
    </div>
  )
}

// ─── Animation variants ──────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

// ─── HeroSection ────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-glow-brand" />

      {/* Ambient orbs */}
      <div className="absolute -top-32 left-1/3 w-[560px] h-[560px] rounded-full
                      bg-brand-500/5 blur-[150px] pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full
                      bg-violet-500/4 blur-[130px] pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[400px] rounded-full
                      bg-brand-500/3 blur-[180px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20
                      grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Left: copy */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-7
                       border border-brand-500/22 bg-brand-500/6
                       shadow-inner shadow-brand-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full
                               rounded-full bg-brand-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            <span className="text-xs text-brand-400 font-medium tracking-wide">
              v1.0 — Now live on ThemeForest
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="font-display text-5xl sm:text-6xl lg:text-[4.5rem]
                       font-bold leading-[1.04] tracking-tight mb-5 text-surface-50"
          >
            Ship your{' '}
            <span className="text-gradient text-glow">SaaS</span>
            <br />
            in days,{' '}
            <span className="text-surface-500">not months.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.18}
            className="text-[1.0625rem] text-surface-400 leading-[1.8] mb-8 max-w-[490px]"
          >
            Production-ready Next.js landing page template built for AI tools
            and developer products. Dark mode, Framer Motion, Stripe-ready.
          </motion.p>

          {/* Feature list */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.26}
            className="flex flex-col gap-2.5 mb-9"
          >
            {[
              'Next.js 15 + TypeScript + Tailwind CSS',
              'Dark mode + responsive out of the box',
              'Terminal animation, bento grid, pricing table',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-surface-400">
                <CheckCircle size={14} className="text-brand-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.34}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                         bg-brand-500 text-surface-950 font-semibold text-sm
                         hover:bg-brand-400 transition-all duration-200
                         shadow-lg shadow-brand-500/30
                         hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5"
            >
              Get the template
              <ArrowRight size={15}
                className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                         border border-surface-800 text-surface-300 text-sm font-medium
                         hover:border-surface-700 hover:text-surface-100
                         hover:bg-surface-900/60 transition-all duration-200"
            >
              See features
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.42}
            className="mt-9 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[
                ['bg-violet-500',  'A'],
                ['bg-blue-500',    'B'],
                ['bg-amber-500',   'C'],
                ['bg-rose-500',    'D'],
                ['bg-emerald-500', 'E'],
              ].map(([color, letter], i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${color} border-2 border-surface-950
                              flex items-center justify-center text-[10px] text-white font-semibold`}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-sm text-surface-500">
              <span className="text-surface-200 font-medium">200+ developers</span>
              {' '}already shipping with this template
            </p>
          </motion.div>
        </div>

        {/* Right: terminal — always dark regardless of theme */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="always-dark">
            <TerminalWindow />
          </div>

          {/* Stats */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {[
              { value: '< 2s', label: 'Setup time',      accent: false },
              { value: '98',   label: 'Lighthouse score', accent: true  },
              { value: '15+',  label: 'Sections',         accent: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl border px-3 py-3 text-center
                            transition-colors duration-200 hover:border-surface-700
                            ${stat.accent
                              ? 'border-brand-500/20 bg-brand-500/5'
                              : 'border-surface-800 bg-surface-900/30'}`}
              >
                <div className={`font-display font-bold text-xl mb-0.5
                                 ${stat.accent ? 'text-brand-400' : 'text-surface-100'}`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-surface-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

