# Changelog

All notable changes to **NexLayer** are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [2.0.0] — March 2026

### Added
- **v3 Premium homepage** — gradient mesh hero, ServicesSection, HowItWorksSection
- **GallerySection** — filterable masonry image grid (product / branding / photography categories)
- **PortfolioSection** — 6-project showcase with category labels and hover overlays
- **VideoDemoSection** — YouTube / Vimeo embed placeholder with play button
- **AppDownloadSection** — App Store & Google Play CTAs
- **TimelineSection** — product roadmap with version milestones
- **NewsletterSection** — standalone email capture block (v3 exclusive)
- **AwardsSection** — third-party review & rating badges
- `app/robots.ts` — auto-generated `robots.txt` via Next.js Metadata API
- `app/sitemap.ts` — auto-generated `sitemap.xml` (static + blog routes)
- `app/api/contact/route.ts` — REST endpoint for contact form submissions
- `app/api/newsletter/route.ts` — REST endpoint for newsletter subscriptions
- `metadataBase` in root layout — fixes OG/Twitter image URLs in production

### Improved
- Navbar banner strip scrolls active page link into view on route change
- Build output: 0 errors, 0 warnings

---

## [1.1.0] — January 2026

### Added
- **v2 Visual homepage** — `DashboardPreviewSection` hero with CSS mockup
- **FeaturesVisual** — interactive feature switcher with animated live panels
- **TestimonialsVisual** — tweet-style testimonials grid variant
- **13 UI primitives** — Button, Badge, Card, Input, Textarea, Select, Switch,
  Checkbox, Avatar (+ AvatarGroup), Progress, Tabs, Skeleton, Tooltip
- **Navbar** — mega dropdown with grouped page navigation, mobile accordion
- **Preview Hub** (`/preview`) — all pages and sections at a glance
- **Blog** — `/blog` index + `/blog/[slug]` dynamic pages (SSG via `generateStaticParams`)
- **About** page — team grid + company values
- **Contact** page — validated form with subject dropdown + sidebar info
- **Login** page — email/password + OAuth (GitHub, Google) template
- **Coming Soon** page — live countdown timer + email capture
- `ThemeProvider` — persistent dark / light mode via `localStorage` + CSS class

### Improved
- Dark / light mode — full CSS variable design token system
- All sections respond to light mode via `.dark:` Tailwind variants
- `next.config.js` — security headers, AVIF/WebP image formats, static asset caching

---

## [1.0.0] — November 2025

### Added
- **HeroSection** — split layout with typing terminal animation + CTA
- **StatsSection** — CountUp animation on scroll (4 key metrics)
- **FeaturesSection** — asymmetric bento grid (8 features)
- **TestimonialsSection** — dual infinite-scroll marquee (8 testimonials)
- **IntegrationsSection** — logo marquee + one-line install steps
- **ComparisonSection** — feature comparison table vs DIY
- **PricingSection** — 3-tier pricing (Starter / Pro / Agency) + monthly / yearly toggle
- **WaitlistSection** — email capture with success animation
- **ChangelogSection** — release timeline with version badges
- **FaqSection** — animated accordion (8 questions)
- **CtaSection** — full-width gradient close with glow
- **Footer** — 5-column layout with newsletter signup + social links
- **FooterMinimal** — single-row centered footer
- **NavbarMinimal** — logo + CTA only (login, coming-soon pages)
- **LogoSection** — animated logo cloud with fade-in stagger
- **HeroAlt** — centered hero variant with AvatarGroup + star rating
- Dark mode default — Tailwind CSS class strategy
- Responsive — tested 375 px → 1440 px
- TypeScript strict mode throughout
- Framer Motion scroll-triggered animations on all sections
- `next/font` — Syne (display), DM Sans (body), JetBrains Mono (code)
