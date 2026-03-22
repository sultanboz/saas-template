# NexLayer — Next.js 15 SaaS Landing Page Template

A production-ready landing page template for AI tools, developer products, and SaaS applications. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

**Live Demo:** [localhost:3000](http://localhost:3000)
**Preview Hub:** [localhost:3000/preview](http://localhost:3000/preview)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (optional — not required for the UI)
cp .env.example .env.local

# 3. Start dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

**Build for production:**
```bash
npm run build
npm run start
```

---

## What's Included

### Pages (9 routes)
| Route | Description |
|---|---|
| `/` | Full landing page — 12 sections (Classic) |
| `/v2` | Visual variant — dashboard mockup, feature switcher |
| `/v3` | Premium variant — services, portfolio, video, timeline |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Blog post detail (4 sample posts) |
| `/about` | Team page with 6 members + values |
| `/contact` | Contact form with subject select |
| `/login` | Sign in / Sign up page (OAuth + email) |
| `/coming-soon` | Live countdown + email capture |
| `/components` | Full UI component showcase |

### Sections (15 components)
| Component | File | Description |
|---|---|---|
| HeroSection | `components/sections/HeroSection.tsx` | Split layout, terminal animation, CTA |
| HeroAlt | `components/sections/HeroAlt.tsx` | Centered variant, avatar social proof |
| HeroGradient | `components/sections/HeroGradient.tsx` | Gradient mesh hero (v3) |
| StatsSection | `components/sections/StatsSection.tsx` | CountUp animation on scroll |
| ServicesSection | `components/sections/ServicesSection.tsx` | Service cards grid (v3) |
| HowItWorksSection | `components/sections/HowItWorksSection.tsx` | Step-by-step flow (v3) |
| PortfolioSection | `components/sections/PortfolioSection.tsx` | Project showcase grid (v3) |
| VideoDemoSection | `components/sections/VideoDemoSection.tsx` | Video embed placeholder (v3) |
| AppDownloadSection | `components/sections/AppDownloadSection.tsx` | App Store / Play Store (v3) |
| TimelineSection | `components/sections/TimelineSection.tsx` | Roadmap timeline (v3) |
| NewsletterSection | `components/sections/NewsletterSection.tsx` | Newsletter signup (v3) |
| AwardsSection | `components/sections/AwardsSection.tsx` | Awards & certifications (v3) |
| DashboardPreviewSection | `components/sections/DashboardPreviewSection.tsx` | Browser chrome + CSS mockup |
| FeaturesSection | `components/sections/FeaturesSection.tsx` | Asymmetric bento grid |
| TestimonialsSection | `components/sections/TestimonialsSection.tsx` | Dual infinite-scroll marquee |
| IntegrationsSection | `components/sections/IntegrationsSection.tsx` | Logo marquee + install steps |
| ComparisonSection | `components/sections/ComparisonSection.tsx` | Feature matrix table |
| PricingSection | `components/sections/PricingSection.tsx` | Monthly/yearly toggle, 3-tier |
| WaitlistSection | `components/sections/WaitlistSection.tsx` | Email capture + success animation |
| ChangelogSection | `components/sections/ChangelogSection.tsx` | Timeline with version badges |
| FaqSection | `components/sections/FaqSection.tsx` | Animated accordion |
| CtaSection | `components/sections/CtaSection.tsx` | Full-width close with glow |
| TeamSection | `components/sections/TeamSection.tsx` | 4-col grid with social links |
| LogoSection | `components/sections/LogoSection.tsx` | Animated logo cloud |

### Layout Variants (5 components)
| Component | File | Use case |
|---|---|---|
| Navbar | `components/layout/Navbar.tsx` | Full nav — logo · links · CTA |
| NavbarMegaMenu | `components/layout/NavbarMegaMenu.tsx` | Hover mega dropdown menus |
| NavbarMinimal | `components/layout/NavbarMinimal.tsx` | Logo + CTA only (login, coming-soon) |
| Footer | `components/layout/Footer.tsx` | 5-col layout with newsletter |
| FooterMinimal | `components/layout/FooterMinimal.tsx` | Single-row centered footer |

### UI Components (13 primitives)
`Button` · `Badge` · `Card` · `Input` · `Textarea` · `Select` · `Switch` · `Checkbox` · `Avatar` · `AvatarGroup` · `Progress` · `Tabs` · `Skeleton` · `Tooltip`

---

## Customization

### Brand Color
Edit `tailwind.config.ts` → `colors.brand`. Default: `#22c55e` (green).

### Typography
Three font variables set in `app/layout.tsx`:
- `--font-display` → Syne (headings)
- `--font-body` → DM Sans (body text)
- `--font-mono` → JetBrains Mono (code blocks)

Replace the `next/font/google` imports to use different fonts.

### Dark / Light Mode
Default is dark mode. Toggle via `ThemeProvider` (`components/ThemeProvider.tsx`).
CSS variables for both modes are defined in `app/globals.css`.

### Replace Placeholder Content
1. **Logo / company name** — Search for `NexLayer` across all files
2. **Pricing** — Edit `PricingSection.tsx`
3. **Blog posts** — Edit `lib/blog.ts`
4. **Team** — Edit `app/about/page.tsx`
5. **Social links** — Edit `components/layout/Footer.tsx` and `FooterMinimal.tsx`
6. **GitHub URL** — Replace `https://github.com` in Footer and NavbarMegaMenu

### Connect a Backend
The following forms simulate submission with `setTimeout`. Replace with your API:

| Form | File | Integration points |
|---|---|---|
| Waitlist email | `WaitlistSection.tsx` | Resend, Mailchimp, ConvertKit |
| Footer newsletter | `Footer.tsx` | Same as above |
| Contact form | `app/contact/page.tsx` | Resend, Nodemailer, Formspree |
| Login / OAuth | `app/login/page.tsx` | Clerk, NextAuth, Supabase Auth |

See `.env.example` for required environment variables.

---

## Project Structure

```
saas-template/
├── app/
│   ├── layout.tsx              ← Root layout, fonts, metadata, ThemeProvider
│   ├── page.tsx                ← Homepage (composes 12 sections)
│   ├── v2/page.tsx             ← Visual variant
│   ├── v3/page.tsx             ← Premium variant (services, portfolio, etc.)
│   ├── globals.css             ← CSS variables, utility classes, animations
│   ├── icon.tsx                ← Favicon (auto-generated)
│   ├── opengraph-image.tsx     ← OG image (auto-generated)
│   ├── about/page.tsx          ← Team + values page
│   ├── blog/page.tsx           ← Blog listing
│   ├── blog/[slug]/page.tsx    ← Blog post
│   ├── coming-soon/page.tsx    ← Countdown + waitlist
│   ├── components/page.tsx     ← UI component showcase
│   ├── contact/page.tsx        ← Contact form
│   ├── login/page.tsx          ← Auth page
│   └── preview/                ← ThemeForest demo hub
│       ├── page.tsx
│       ├── layouts/page.tsx    ← All navbar/footer variants live
│       └── sections/page.tsx   ← HeroAlt + LogoSection live
│
├── components/
│   ├── layout/                 ← Navbar, NavbarMegaMenu, NavbarMinimal, Footer, FooterMinimal
│   ├── sections/               ← 20+ landing page sections
│   ├── ui/                     ← 13 primitive UI components
│   └── ThemeProvider.tsx       ← Dark/light mode context
│
├── lib/
│   ├── blog.ts                 ← Blog post data
│   └── utils.ts                ← cn() helper (clsx + tailwind-merge)
│
├── public/images/              ← Static assets (add your images here)
├── .env.example                ← Environment variables template
├── tailwind.config.ts          ← Tailwind theme (colors, animations, keyframes)
├── next.config.js              ← Image optimization, security headers
└── LICENSE                     ← ThemeForest license
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.5 | Framework, App Router, SSR |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling, design tokens |
| Framer Motion | 11 | Scroll animations, transitions |
| Lucide React | Latest | Icon library |
| clsx + tailwind-merge | Latest | Conditional class merging |

---

## License

**ThemeForest Regular License** — Single end product.
**ThemeForest Extended License** — Multiple end users / SaaS products.

See `LICENSE` for full terms.
