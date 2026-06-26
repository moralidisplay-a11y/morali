import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import BrandNumbers from '@/components/website/BrandNumbers'
import CategoryShowcase from '@/components/website/CategoryShowcase'
import WhoIsItFor from '@/components/website/WhoIsItFor'
import ProcessTimeline from '@/components/website/ProcessTimeline'
import ProjectsShowcase from '@/components/website/ProjectsShowcase'
import InspirationGrid from '@/components/website/InspirationGrid'
import TrustSection from '@/components/website/TrustSection'
import FinalCTA from '@/components/website/FinalCTA'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">

        {/* 1 — Cinematic Hero */}
        <HeroSection />

        {/* 2 — Brand numbers (dark) */}
        <BrandNumbers />

        {/* 3 — Category showcase: full-width sections */}
        <CategoryShowcase />

        {/* 4 — Who is it for (dark) */}
        <WhoIsItFor />

        {/* 5 — Process timeline */}
        <ProcessTimeline />

        {/* 6 — Projects case studies */}
        <ProjectsShowcase />

        {/* 7 — Trust & testimonials */}
        <TrustSection />

        {/* 8 — Inspiration gallery */}
        <InspirationGrid />

        {/* 9 — Final CTA */}
        <FinalCTA />

      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
