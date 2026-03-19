'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ─── Logo SVGs (wordmark style) ──────────────────────────────
function VercelLogo() {
  return (
    <svg viewBox="0 0 4438 1000" fill="currentColor" aria-label="Vercel">
      <path d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2347.81 812.5 2438.44 773.75 2511.25 701.25L2447.81 637.5C2393.75 691.25 2326.88 718.75 2239.38 718.75C2124.38 718.75 2032.81 652.5 2007.19 550H2544.69C2545.63 539.375 2546.25 529.063 2546.25 518.75C2546.25 362.5 2428.13 250 2223.75 250ZM2007.81 471.875C2030 374.375 2113.44 343.75 2223.75 343.75C2333.75 343.75 2402.5 374.375 2423.75 471.875H2007.81ZM2703.75 781.25L2815 531.25L2926.25 781.25H3031.25L2850 375H2780L2598.75 781.25H2703.75ZM1300 781.25V218.75H1406.25V687.5H1675V781.25H1300ZM3281.25 781.25V468.75H3175V781.25H3281.25ZM3228.13 400C3266.56 400 3297.81 369.375 3297.81 331.25C3297.81 293.125 3266.56 262.5 3228.13 262.5C3189.69 262.5 3159.06 293.125 3159.06 331.25C3159.06 369.375 3189.69 400 3228.13 400ZM3553.75 781.25V556.25H3653.13C3728.44 556.25 3775 598.125 3775 668.75C3775 739.375 3728.44 781.25 3653.13 781.25H3553.75ZM3553.75 468.75V218.75H3450V781.25H3653.13C3795 781.25 3881.25 700 3881.25 668.75V556.25C3881.25 437.5 3795 375 3653.13 375H3450V468.75H3553.75ZM4343.75 781.25L4163.44 515.625L4335 375H4212.5L4043.75 515.625V375H3940V781.25H4043.75V618.75L4225 781.25H4343.75ZM1920 200L1107.5 750L295 200L590 0H1625L1920 200Z"/>
    </svg>
  )
}

function StripeLogo() {
  return (
    <svg viewBox="0 0 60 25" fill="currentColor" aria-label="Stripe">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a14.29 14.29 0 0 1-4.56.79c-4.13 0-6.71-2.52-6.71-6.87 0-3.92 2.28-6.87 6.21-6.87 3.73 0 5.87 2.68 5.87 6.55zm-5.88-3.47c-.9 0-1.84.62-1.84 1.98h3.73c0-1.36-.92-1.98-1.89-1.98zm-20.23 7.86V7.93c0-.9-.49-1.45-1.39-1.45s-1.39.55-1.39 1.45v10.74zM26.53 7.93V18.67c0 .9.49 1.45 1.39 1.45s1.39-.55 1.39-1.45V7.93c0-.9-.49-1.45-1.39-1.45s-1.39.55-1.39 1.45zM3.19 13.37c0-2.95 2.38-5.38 5.38-5.38 3 0 5.38 2.43 5.38 5.38 0 2.95-2.38 5.38-5.38 5.38-3 0-5.38-2.43-5.38-5.38zm5.38 2.78c1.53 0 2.78-1.24 2.78-2.78s-1.25-2.78-2.78-2.78S6 11.83 6 13.37s1.24 2.78 2.57 2.78zm8.9-2.78c0-2.95 2.38-5.38 5.38-5.38 1.4 0 2.65.53 3.58 1.39L25.2 11.1a2.78 2.78 0 0 0-2.35-1.11c-1.53 0-2.78 1.25-2.78 2.78s1.25 2.78 2.78 2.78c.88 0 1.66-.4 2.21-1.02l1.22 1.72a5.26 5.26 0 0 1-3.43 1.3c-3 0-5.38-2.43-5.38-5.38z"/>
    </svg>
  )
}

function LinearLogo() {
  return (
    <svg viewBox="0 0 100 20" fill="currentColor" aria-label="Linear">
      <text x="0" y="16" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">Linear</text>
    </svg>
  )
}

function SupabaseLogo() {
  return (
    <svg viewBox="0 0 130 18" fill="currentColor" aria-label="Supabase">
      <text x="0" y="14" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.3">Supabase</text>
    </svg>
  )
}

function ResendLogo() {
  return (
    <svg viewBox="0 0 90 20" fill="currentColor" aria-label="Resend">
      <text x="0" y="16" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">Resend</text>
    </svg>
  )
}

function ClerkLogo() {
  return (
    <svg viewBox="0 0 70 20" fill="currentColor" aria-label="Clerk">
      <text x="0" y="16" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">Clerk</text>
    </svg>
  )
}

function UpstashLogo() {
  return (
    <svg viewBox="0 0 100 20" fill="currentColor" aria-label="Upstash">
      <text x="0" y="16" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">Upstash</text>
    </svg>
  )
}

function PlanetScaleLogo() {
  return (
    <svg viewBox="0 0 140 20" fill="currentColor" aria-label="PlanetScale">
      <text x="0" y="16" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.3">PlanetScale</text>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────

const logos = [
  { name: 'Vercel',      Logo: VercelLogo,      w: 80  },
  { name: 'Stripe',      Logo: StripeLogo,      w: 56  },
  { name: 'Linear',      Logo: LinearLogo,      w: 72  },
  { name: 'Supabase',    Logo: SupabaseLogo,    w: 96  },
  { name: 'Resend',      Logo: ResendLogo,      w: 72  },
  { name: 'Clerk',       Logo: ClerkLogo,       w: 56  },
  { name: 'Upstash',     Logo: UpstashLogo,     w: 80  },
  { name: 'PlanetScale', Logo: PlanetScaleLogo, w: 108 },
]

export function LogoSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 px-4 sm:px-6 border-y border-surface-800/50" ref={ref}>
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold tracking-widest
                     uppercase text-surface-600 mb-10"
        >
          Trusted by teams using
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              className="text-surface-600 hover:text-surface-400 transition-colors duration-200"
              style={{ width: logo.w }}
            >
              <logo.Logo />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
