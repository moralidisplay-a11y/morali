import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import StatsSection from '@/components/website/StatsSection'
import TrustStrip from '@/components/website/TrustStrip'
import AIStorePlannerSection from '@/components/website/AIStorePlannerSection'
import CategoriesSection from '@/components/website/CategoriesSection'
import FeaturedProducts from '@/components/website/FeaturedProducts'
import FeaturedProjectsSection from '@/components/website/FeaturedProjectsSection'
import SolutionsByType from '@/components/website/SolutionsByType'
import InspirationCenter from '@/components/website/InspirationCenter'
import TestimonialsSection from '@/components/website/TestimonialsSection'
import ProjectsMap from '@/components/website/ProjectsMap'
import PremiumCTA from '@/components/website/PremiumCTA'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. Hero — full screen, impactful */}
        <HeroSection />
        {/* 2. Stats — dark strip with numbers */}
        <StatsSection />
        {/* 3. Trust/Benefits bar */}
        <TrustStrip />
        {/* 4. AI Store Planner */}
        <AIStorePlannerSection />
        {/* 5. Categories grid */}
        <CategoriesSection />
        {/* 6. Featured Products */}
        <FeaturedProducts />
        {/* 7. Featured Projects — dark premium */}
        <FeaturedProjectsSection />
        {/* 8. Solutions by business type */}
        <SolutionsByType />
        {/* 9. Inspiration center */}
        <InspirationCenter />
        {/* 10. Testimonials */}
        <TestimonialsSection />
        {/* 11. Projects map — dark */}
        <ProjectsMap />
        {/* 12. CTA */}
        <PremiumCTA />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
