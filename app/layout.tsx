import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

// ─── Fonts ───────────────────────────────────────────────
const syne = Syne({
  subsets:  ['latin'],
  variable: '--font-display',
  weight:   ['400', '500', '600', '700', '800'],
  display:  'swap',
  preload:  true,
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  variable: '--font-body',
  weight:   ['300', '400', '500', '600'],
  display:  'swap',
  preload:  true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  variable: '--font-mono',
  weight:   ['400', '500'],
  display:  'swap',
  preload:  false,
})

// ─── Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'https://nexlayer.io'
  ),
  title: {
    default:  'NexLayer — Next.js SaaS Landing Template',
    template: '%s | NexLayer',
  },
  description:
    'Production-ready Next.js 15 landing page template for AI tools and developer products. Dark mode, Framer Motion, TypeScript, Tailwind CSS.',
  keywords: [
    'SaaS', 'landing page', 'Next.js', 'template',
    'AI tool', 'developer', 'TypeScript', 'Tailwind CSS', 'dark mode',
  ],
  authors:  [{ name: 'NexLayer' }],
  openGraph: {
    type:     'website',
    locale:   'en_US',
    siteName: 'NexLayer',
    title:    'NexLayer — Next.js SaaS Landing Template',
    description:
      'Production-ready Next.js 15 landing page template. Dark mode, Framer Motion, TypeScript, Tailwind.',
  },
  twitter: {
    card:  'summary_large_image',
    title: 'NexLayer — Next.js SaaS Landing Template',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={[
          syne.variable,
          dmSans.variable,
          jetbrainsMono.variable,
          'font-body antialiased',
          'bg-surface-950 text-surface-50',
          'bg-noise',
        ].join(' ')}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
