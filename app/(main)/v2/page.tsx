import { Footer }                  from '@/components/layout/Footer'
import { HeroVisual }              from '@/components/sections/HeroVisual'
import { StatsSection }            from '@/components/sections/StatsSection'
import { FeaturesVisual }          from '@/components/sections/FeaturesVisual'
import { TestimonialsVisual }      from '@/components/sections/TestimonialsVisual'
import { IntegrationsSection }     from '@/components/sections/IntegrationsSection'
import { ComparisonSection }       from '@/components/sections/ComparisonSection'
import { PricingSection }          from '@/components/sections/PricingSection'
import { WaitlistSection }         from '@/components/sections/WaitlistSection'
import { FaqSection }              from '@/components/sections/FaqSection'
import { CtaSection }              from '@/components/sections/CtaSection'

export const metadata = {
  title: 'NexLayer — Visual Variant',
  description: 'Visual homepage variant with dashboard mockup, feature switcher, and tweet-style testimonials.',
}

export default function HomeVisualPage() {
  return (
    <>
      <main id="main-content">
        {/* 1. First impression — dashboard mockup + floating chips */}
        <HeroVisual />

        {/* 2. Instant credibility */}
        <StatsSection />

        {/* 3. Interactive feature switcher with live panels */}
        <FeaturesVisual />

        {/* 4. Tweet-style social proof */}
        <TestimonialsVisual />

        {/* 5. Stack compatibility */}
        <IntegrationsSection />

        {/* 6. Kill the "why not DIY?" objection */}
        <ComparisonSection />

        {/* 7. The ask */}
        <PricingSection />

        {/* 8. Capture future buyers */}
        <WaitlistSection />

        {/* 9. Handle last objections */}
        <FaqSection />

        {/* 10. The close */}
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
