import { Footer }                  from '@/components/layout/Footer'
import { HeroSection }             from '@/components/sections/HeroSection'
import { StatsSection }            from '@/components/sections/StatsSection'
import { DashboardPreviewSection } from '@/components/sections/DashboardPreviewSection'
import { FeaturesSection }         from '@/components/sections/FeaturesSection'
import { TestimonialsSection }     from '@/components/sections/TestimonialsSection'
import { IntegrationsSection }     from '@/components/sections/IntegrationsSection'
import { ComparisonSection }       from '@/components/sections/ComparisonSection'
import { PricingSection }          from '@/components/sections/PricingSection'
import { WaitlistSection }         from '@/components/sections/WaitlistSection'
import { ChangelogSection }        from '@/components/sections/ChangelogSection'
import { FaqSection }              from '@/components/sections/FaqSection'
import { CtaSection }              from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        {/* 1. First impression */}
        <HeroSection />

        {/* 2. Instant credibility */}
        <StatsSection />

        {/* 3. Show, don't tell */}
        <DashboardPreviewSection />

        {/* 4. What's inside */}
        <FeaturesSection />

        {/* 5. Third-party validation */}
        <TestimonialsSection />

        {/* 6. Stack compatibility */}
        <IntegrationsSection />

        {/* 7. Kill the "why not DIY?" objection */}
        <ComparisonSection />

        {/* 8. The ask */}
        <PricingSection />

        {/* 9. Capture future buyers */}
        <WaitlistSection />

        {/* 10. Transparency */}
        <ChangelogSection />

        {/* 11. Handle last objections */}
        <FaqSection />

        {/* 12. The close */}
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
