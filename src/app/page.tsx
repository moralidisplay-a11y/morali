import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import CategoryGrid from '@/components/website/CategoryGrid'
import ProductRail from '@/components/website/ProductRail'
import IndustryBanner from '@/components/website/IndustryBanner'
import InspirationGrid from '@/components/website/InspirationGrid'
import TestimonialsStrip from '@/components/website/TestimonialsStrip'
import ClientLogosMarquee from '@/components/website/ClientLogosMarquee'
import PremiumCTA from '@/components/website/PremiumCTA'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">

        {/* 1 — Hero: cinematic, search bar, category chips */}
        <HeroSection />

        {/* 2 — Categories: editorial grid */}
        <CategoryGrid />

        {/* 3 — Product rail: most popular / hanging */}
        <ProductRail title="מוצרים מבוקשים — מערכות תלייה" categorySlug="hanging" />

        {/* 4 — Product rail: shelving */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <ProductRail title="מידוף לחנויות" categorySlug="shelving" />
        </div>

        {/* 5 — Industry banner + CTA (dark) */}
        <IndustryBanner />

        {/* 6 — Product rail: stands */}
        <ProductRail title="סטנדים ומחזיקים" categorySlug="stands" />

        {/* 7 — Product rail: mannequins */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <ProductRail title="בובות ראווה" categorySlug="mannequins" />
        </div>

        {/* 8 — Product rail: hangers */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <ProductRail title="קולבים ואביזרים" categorySlug="hangers" />
        </div>

        {/* 9 — Inspiration masonry gallery */}
        <InspirationGrid />

        {/* 10 — Client logos marquee */}
        <ClientLogosMarquee />

        {/* 11 — Testimonials */}
        <TestimonialsStrip />

        {/* 12 — Final CTA */}
        <PremiumCTA />

      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
