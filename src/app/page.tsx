import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import BrandStrip from '@/components/website/BrandStrip'
import CategoryGrid from '@/components/website/CategoryGrid'
import EditorialProducts from '@/components/website/EditorialProducts'
import ProjectsShowcase from '@/components/website/ProjectsShowcase'
import InspirationGrid from '@/components/website/InspirationGrid'
import ClientLogosMarquee from '@/components/website/ClientLogosMarquee'
import FinalCTA from '@/components/website/FinalCTA'

import { getProductsByCategory } from '@/lib/data'

export default async function HomePage() {
  const [hanging, shelving, mannequins] = await Promise.all([
    getProductsByCategory('hanging'),
    getProductsByCategory('shelving'),
    getProductsByCategory('mannequins'),
  ])

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">

        {/* 1 — Hero */}
        <HeroSection />

        {/* 2 — Brand statement: white, confident, no cards */}
        <BrandStrip />

        {/* 3 — Categories: editorial asymmetric grid */}
        <CategoryGrid />

        {/* 4 — Editorial: מערכות תלייה */}
        <EditorialProducts
          title="מערכות תלייה"
          subtitle="מוטות, זרועות ומתלים מקצועיים לחנויות ביגוד ואופנה — פתרונות גמישים לכל מרחב."
          categorySlug="hanging"
          categoryLabel="Hanging Systems"
          products={hanging}
        />

        {/* 5 — Projects case studies */}
        <ProjectsShowcase />

        {/* 6 — Editorial: מידוף (flipped layout) */}
        <EditorialProducts
          title="מידוף לחנויות"
          subtitle="מדפי קיר, מדפי עמידה ומערכות מודולריות לסופרמרקטים, פארמה ועוד."
          categorySlug="shelving"
          categoryLabel="Store Shelving"
          products={shelving}
          flipped
        />

        {/* 7 — Editorial: בובות ראווה */}
        <div style={{ borderTop: '1px solid #f0ede8' }}>
          <EditorialProducts
            title="בובות ראווה"
            subtitle="אוסף רחב של בובות מלאות, חצי גוף וידיים — לכל סגנון חנות."
            categorySlug="mannequins"
            categoryLabel="Mannequins"
            products={mannequins}
          />
        </div>

        {/* 8 — Inspiration gallery */}
        <InspirationGrid />

        {/* 9 — Logos */}
        <ClientLogosMarquee />

        {/* 10 — Final CTA */}
        <FinalCTA />

      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
