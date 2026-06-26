import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import CategoryGrid from '@/components/website/CategoryGrid'
import ShopByIndustry from '@/components/website/ShopByIndustry'
import ProductRail from '@/components/website/ProductRail'
import EditorialBanner from '@/components/website/EditorialBanner'
import CollectionsSection from '@/components/website/CollectionsSection'
import FeaturedProject from '@/components/website/FeaturedProject'
import InspirationGrid from '@/components/website/InspirationGrid'
import ClientLogosMarquee from '@/components/website/ClientLogosMarquee'
import TestimonialsStrip from '@/components/website/TestimonialsStrip'
import PremiumCTA from '@/components/website/PremiumCTA'
import { getProductsByCategory } from '@/lib/data'

export default async function HomePage() {
  const [hanging, shelving, stands, mannequins, hangers] = await Promise.all([
    getProductsByCategory('hanging'),
    getProductsByCategory('shelving'),
    getProductsByCategory('stands'),
    getProductsByCategory('mannequins'),
    getProductsByCategory('hangers'),
  ])

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">

        {/* 1 — Hero: cinematic full-screen */}
        <HeroSection />

        {/* 2 — Shop by Industry: 8 icons */}
        <ShopByIndustry />

        {/* 3 — Category Grid: Pinterest asymmetric */}
        <CategoryGrid />

        {/* 4 — Rail: Hanging */}
        <ProductRail title="מוצרים מבוקשים — מערכות תלייה" categorySlug="hanging" products={hanging} />

        {/* 5 — Editorial Banner: open a store */}
        <EditorialBanner
          eyebrow="פותחים חנות?"
          headline={`אנחנו נתכנן\nלכם את הכל.`}
          sub="מתכנון הפריסה, דרך בחירת המתקנים ועד ההתקנה — אנחנו עושים הכל תחת קורת גג אחת."
          cta="קבלו ייעוץ חינם"
          href="https://wa.me/972505559491?text=שלום, אשמח לקבל ייעוץ לפתיחת חנות"
          variant="dark"
        />

        {/* 6 — Collections: ready-made per business type */}
        <CollectionsSection />

        {/* 7 — Rail: Shelving */}
        <ProductRail title="מידוף מקצועי לחנויות" categorySlug="shelving" products={shelving} />

        {/* 8 — Featured Project: magazine spread */}
        <FeaturedProject />

        {/* 9 — Rail: Mannequins */}
        <ProductRail title="בובות ראווה" categorySlug="mannequins" products={mannequins} accentColor="#C79A4B" />

        {/* 10 — Editorial Banner: light */}
        <EditorialBanner
          eyebrow="30 שנה בתחום"
          headline="ניסיון שאין עליו ויכוח."
          sub="מאז 1993 אנחנו מציידים חנויות ברחבי ישראל — מחנויות עצמאיות ועד רשתות גדולות."
          cta="קראו עלינו"
          href="/categories"
          variant="light"
        />

        {/* 11 — Inspiration Gallery: masonry, no cards */}
        <InspirationGrid />

        {/* 12 — Rail: Hangers */}
        <ProductRail title="קולבים ואביזרים" categorySlug="hangers" products={hangers} />

        {/* 13 — Rail: Stands */}
        <ProductRail title="סטנדים ומחזיקים" categorySlug="stands" products={stands} />

        {/* 14 — Client logos */}
        <ClientLogosMarquee />

        {/* 15 — Testimonials */}
        <TestimonialsStrip />

        {/* 16 — Final CTA */}
        <PremiumCTA />

      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
