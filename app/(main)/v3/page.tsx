import { Footer }               from '@/components/layout/Footer'
import { HeroGradient }         from '@/components/sections/HeroGradient'
import { LogoSection }          from '@/components/sections/LogoSection'
import { ServicesSection }      from '@/components/sections/ServicesSection'
import { HowItWorksSection }    from '@/components/sections/HowItWorksSection'
import { PortfolioSection }     from '@/components/sections/PortfolioSection'
import { GallerySection }       from '@/components/sections/GallerySection'
import { VideoDemoSection }     from '@/components/sections/VideoDemoSection'
import { AppDownloadSection }   from '@/components/sections/AppDownloadSection'
import { TimelineSection }      from '@/components/sections/TimelineSection'
import { NewsletterSection }    from '@/components/sections/NewsletterSection'
import { AwardsSection }        from '@/components/sections/AwardsSection'
import { PricingSection }       from '@/components/sections/PricingSection'
import { FaqSection }           from '@/components/sections/FaqSection'
import { CtaSection }           from '@/components/sections/CtaSection'

export const metadata = {
  title: 'NexLayer — v3 Premium Variant',
  description: 'Premium homepage variant with gradient hero, services, portfolio, video demo, timeline, newsletter, and app download — built for ThemeForest.',
}

export default function HomeV3Page() {
  return (
    <>
      <main id="main-content">
        {/* 1. Gradient hero — v3 exclusive */}
        <HeroGradient />

        {/* 2. Trusted by logos */}
        <LogoSection />

        {/* 3. Services grid — v3 exclusive */}
        <ServicesSection />

        {/* 4. How it works — v3 exclusive */}
        <HowItWorksSection />

        {/* 5. Portfolio / project showcase — v3 exclusive */}
        <PortfolioSection />

        {/* 6. Visual gallery — product & portfolio images */}
        <GallerySection />

        {/* 7. Video demo — v3 exclusive */}
        <VideoDemoSection />

        {/* 8. App download — v3 exclusive */}
        <AppDownloadSection />

        {/* 9. Roadmap / timeline — v3 exclusive */}
        <TimelineSection />

        {/* 10. Newsletter — v3 exclusive (different from WaitlistSection) */}
        <NewsletterSection />

        {/* 11. Awards & certifications — v3 exclusive */}
        <AwardsSection />

        {/* 12. Pricing — shared but essential */}
        <PricingSection />

        {/* 13. FAQ */}
        <FaqSection />

        {/* 14. CTA close */}
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
