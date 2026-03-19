export interface BlogPost {
  slug:        string
  title:       string
  description: string
  date:        string
  readTime:    string
  category:    'Engineering' | 'Design' | 'Growth' | 'Product'
  author: {
    name:   string
    avatar: string
    role:   string
  }
  content: string
}

export const posts: BlogPost[] = [
  {
    slug:        'why-nextjs-15-is-perfect-for-saas',
    title:       'Why Next.js 15 is the perfect foundation for your SaaS',
    description: 'An in-depth look at how Next.js 15 App Router, Server Components, and static generation combine to create the ideal SaaS landing page stack.',
    date:        '2025-03-10',
    readTime:    '6 min read',
    category:    'Engineering',
    author: {
      name:   'James Wright',
      avatar: 'JW',
      role:   'Senior Engineer',
    },
    content: `
## The case for Next.js 15

When you're building a SaaS landing page, you have one job: convert visitors into customers. Every millisecond of load time, every layout shift, every broken meta tag is a leak in your conversion funnel.

Next.js 15 solves these problems elegantly with its App Router architecture, which ships zero JavaScript for static pages by default.

## Server Components change everything

The biggest paradigm shift in Next.js 15 is Server Components. Components that don't need interactivity are rendered once on the server and sent as pure HTML. Your pricing table, feature grid, testimonials, changelog — all of it can be server-rendered.

\`\`\`tsx
// This component ships ZERO JavaScript to the client
export function PricingSection() {
  const plans = getPricingData() // server-side, no fetch needed
  return (
    <section>
      {plans.map(plan => <PlanCard key={plan.id} plan={plan} />)}
    </section>
  )
}
\`\`\`

The result? Lighthouse scores above 95 with no optimization effort.

## The App Router mental model

The App Router treats your app as a tree of layouts and pages. A single root layout wraps everything — fonts, global styles, providers. Individual pages can opt into client-side hydration only where needed.

For a landing page, this means:
- **Static hero** → rendered at build time
- **Pricing toggle** → minimal client component
- **Testimonials marquee** → CSS animation, no JS

## What this means for your stack

NexLayer is built on these principles. The template achieves a 98 Lighthouse performance score because we've made deliberate decisions about what runs on the server and what runs on the client.
    `,
  },
  {
    slug:        'dark-mode-design-system',
    title:       'Building a dark mode design system with CSS variables',
    description: 'How to create a maintainable, flicker-free dark mode system using CSS custom properties — the same approach used by Linear and Vercel.',
    date:        '2025-03-05',
    readTime:    '8 min read',
    category:    'Design',
    author: {
      name:   'Priya Nair',
      avatar: 'PN',
      role:   'Design Engineer',
    },
    content: `
## The problem with most dark mode implementations

Most dark mode tutorials suggest maintaining two sets of color classes: \`text-gray-900 dark:text-white\`. This approach has a fundamental flaw — you have to remember to apply both classes everywhere. Miss one, and you have a broken UI.

## CSS variables: the Linear approach

Linear's design system uses a single layer of CSS custom properties. The \`dark\` class on the \`<html>\` element swaps the variable values. Components only reference the variables, never raw colors.

\`\`\`css
:root {
  --bg-primary: #ffffff;
  --text-primary: #09090b;
}

.dark {
  --bg-primary: #09090b;
  --text-primary: #fafafa;
}

/* Components reference only variables */
.card {
  background: var(--bg-primary);
  color: var(--text-primary);
}
\`\`\`

## Preventing the flash of wrong theme

The classic dark mode bug: on page load, you briefly see the light theme before JavaScript kicks in and adds the dark class. Fix this by reading localStorage in a blocking script before the first paint:

\`\`\`html
<script>
  const theme = localStorage.getItem('theme') ?? 'dark'
  document.documentElement.classList.add(theme)
</script>
\`\`\`

In Next.js, place this in your root layout's \`<head>\` using \`next/script\` with \`strategy="beforeInteractive"\`.

## The NexLayer approach

NexLayer ships with \`dark\` mode as the default (it's what AI tool buyers expect). The ThemeProvider component handles toggling, persistence, and respects \`prefers-color-scheme\` on first visit.
    `,
  },
  {
    slug:        'framer-motion-scroll-animations',
    title:       'Scroll-triggered animations with Framer Motion and useInView',
    description: 'A practical guide to adding high-performance scroll animations to your Next.js app using Framer Motion — without hurting your Lighthouse score.',
    date:        '2025-02-28',
    readTime:    '5 min read',
    category:    'Engineering',
    author: {
      name:   'Alex Chen',
      avatar: 'AC',
      role:   'Frontend Engineer',
    },
    content: `
## Why scroll animations matter for conversion

Scroll animations serve a purpose beyond aesthetics: they direct attention. A section that slides into view as you scroll signals "this is new information worth reading." Used subtly, they increase time on page and content absorption.

## The useInView hook

Framer Motion's \`useInView\` hook returns a boolean that becomes \`true\` when an element enters the viewport. Combined with \`motion.div\` variants, it creates clean scroll-triggered animations:

\`\`\`tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  },
}

export function AnimatedSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      Content appears here
    </motion.div>
  )
}
\`\`\`

## Staggered children

The real power comes from staggering multiple children using a container variant:

\`\`\`tsx
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  },
}
\`\`\`

## Performance considerations

- Use \`once: true\` to avoid re-animating on scroll up
- Avoid animating \`width\`, \`height\`, or \`layout\` properties — they trigger reflows
- Stick to \`opacity\`, \`transform\` (translate, scale, rotate)
- Respect \`prefers-reduced-motion\` with Framer's \`MotionConfig\`
    `,
  },
  {
    slug:        'saas-landing-page-conversion-anatomy',
    title:       'The anatomy of a high-converting SaaS landing page',
    description: 'A breakdown of every section in a SaaS landing page, why it exists, and what makes it convert — backed by real-world data from 200+ SaaS products.',
    date:        '2025-02-20',
    readTime:    '10 min read',
    category:    'Growth',
    author: {
      name:   'Marco Rossi',
      avatar: 'MR',
      role:   'Growth Lead',
    },
    content: `
## Why most SaaS landing pages fail

The #1 mistake SaaS founders make with their landing page: they describe what the product *is* instead of what the customer *gets*. Your hero section should answer one question in 5 words: "What will my life look like after buying this?"

## The section order matters

Every section in a converting SaaS landing page follows a specific psychological sequence:

1. **Hero** — The promise. Captures attention, states the outcome.
2. **Social proof / stats** — Builds immediate credibility.
3. **Product preview** — Shows, doesn't tell. Reduces imagination tax.
4. **Features** — Justifies the promise with specifics.
5. **Testimonials** — Third-party validation at the moment of consideration.
6. **Integrations** — Removes the "will it fit my stack?" objection.
7. **Comparison** — Addresses the "why not build it myself?" objection.
8. **Pricing** — The ask, de-risked by everything above.
9. **FAQ** — Handles final objections before the buy.
10. **CTA** — The close.

## The hero section formula

The best-converting hero sections follow this formula:

- **Headline**: Outcome-focused, specific, < 10 words
- **Subheadline**: How you deliver the outcome, for whom
- **Social proof**: Number + type of happy users (not "Join 1000+ users")
- **Primary CTA**: Action verb + specific benefit ("Get the template")
- **Secondary CTA**: Lower commitment option ("See live demo")

## Pricing page psychology

The "Most popular" badge on the middle plan is not decoration — it's a cognitive anchor. Without it, customers default to the cheapest option. With it, they compare against the middle plan, making Pro feel like the obvious choice.

The yearly toggle with a "-35%" badge uses loss aversion: "I'm leaving money on the table by picking monthly."
    `,
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
