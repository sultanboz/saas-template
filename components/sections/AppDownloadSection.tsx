'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone } from 'lucide-react'

export function AppDownloadSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="download"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="download-heading"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-surface-800
                     bg-surface-900/80 overflow-hidden p-10 sm:p-16
                     flex flex-col sm:flex-row items-center gap-10 sm:gap-16"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br
                          from-brand-500/5 via-transparent to-violet-500/5
                          pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px
                          bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

          <div className="flex-1 text-center sm:text-left">
            <h2
              id="download-heading"
              className="font-display text-2xl sm:text-3xl font-bold
                         tracking-tight text-surface-50 mb-3"
            >
              Take it with you
            </h2>
            <p className="text-surface-400 text-base mb-6">
              Available on iOS and Android. Sync across all your devices.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                           bg-surface-800 border border-surface-700
                           hover:border-surface-600 hover:bg-surface-800/80
                           transition-all duration-200"
              >
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <span className="text-[10px] block text-surface-500">Download on</span>
                  <span className="text-sm font-semibold text-surface-50">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                           bg-surface-800 border border-surface-700
                           hover:border-surface-600 hover:bg-surface-800/80
                           transition-all duration-200"
              >
                <span className="text-2xl">▶</span>
                <div className="text-left">
                  <span className="text-[10px] block text-surface-500">Get it on</span>
                  <span className="text-sm font-semibold text-surface-50">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-96 rounded-[2.5rem] border-4 border-surface-700
                            bg-surface-950 flex items-center justify-center
                            shadow-2xl shadow-black/50">
              <Smartphone size={64} className="text-surface-600" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
