'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

export function VideoDemoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="demo"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="demo-heading"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="demo-heading"
            className="font-display text-3xl sm:text-4xl font-bold
                       tracking-tight text-surface-50 mb-4"
          >
            See it in action
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Watch a 2-minute walkthrough of the product and key features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-surface-800
                     bg-surface-900 shadow-2xl shadow-black/40"
        >
          {/* Video placeholder — replace with actual video embed */}
          <div
            className="aspect-video bg-surface-950 flex items-center justify-center
                       relative cursor-pointer group"
            onClick={() => setPlaying(!playing)}
          >
            {/* Placeholder gradient */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: `
                  linear-gradient(135deg, rgba(34,197,94,0.15) 0%, transparent 50%),
                  linear-gradient(225deg, rgba(99,102,241,0.1) 0%, transparent 50%)
                `,
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {!playing ? (
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-20 h-20 rounded-full bg-brand-500/90 flex items-center
                             justify-center shadow-lg shadow-brand-500/40
                             group-hover:scale-110 group-hover:bg-brand-400
                             transition-all duration-300"
                >
                  <Play size={32} className="text-surface-950 fill-surface-950 ml-1" />
                </div>
                <span className="text-surface-300 font-medium">Play demo video</span>
              </div>
            ) : (
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-surface-500 text-sm">
                  Replace with your video embed (YouTube, Vimeo, etc.)
                </div>
              </div>
            )}
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t
                          from-black/80 to-transparent flex items-center gap-3">
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-6 rounded-sm bg-surface-600"
                  style={{ opacity: 0.3 + Math.random() * 0.5 }}
                />
              ))}
            </div>
            <span className="text-xs text-surface-500">2:34</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
