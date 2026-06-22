import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import BeforeAfterSection from '@/components/website/BeforeAfterSection'
import TrustStrip from '@/components/website/TrustStrip'
import ClientLogosMarquee from '@/components/website/ClientLogosMarquee'
import CategoriesCarousel from '@/components/website/CategoriesCarousel'
import ProductsCarousel from '@/components/website/ProductsCarousel'
import ProjectsCarousel from '@/components/website/ProjectsCarousel'
import SolutionsCarousel from '@/components/website/SolutionsCarousel'
import InspirationCarousel from '@/components/website/InspirationCarousel'
import ROICalculatorSection from '@/components/website/ROICalculatorSection'
import AIStorePlannerSection from '@/components/website/AIStorePlannerSection'
import TestimonialsSection from '@/components/website/TestimonialsSection'
import PremiumCTA from '@/components/website/PremiumCTA'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">

        {/* 1 — Hero: full-screen slider */}
        <HeroSection />

        {/* 2 — Before/After: drag slider, strongest conversion section */}
        <BeforeAfterSection />

        {/* 3 — Trust numbers + benefits */}
        <TrustStrip />

        {/* 4 — Client logos marquee */}
        <ClientLogosMarquee />

        {/* 5 — Categories horizontal carousel */}
        <CategoriesCarousel />

        {/* 6 — Featured Products carousel */}
        <ProductsCarousel />

        {/* 7 — Projects showcase: dark, premium */}
        <ProjectsCarousel />

        {/* 8 — Solutions by business type */}
        <SolutionsCarousel />

        {/* 9 — Inspiration gallery with tabs */}
        <InspirationCarousel />

        {/* 10 — ROI Calculator */}
        <ROICalculatorSection />

        {/* 11 — AI Store Planner */}
        <div id="store-planner">
          <AIStorePlannerSection />
        </div>

        {/* 12 — Testimonials */}
        <TestimonialsSection />

        {/* 13 — Final CTA */}
        <PremiumCTA />

      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
