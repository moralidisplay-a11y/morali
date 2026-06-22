import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import TrustStrip from '@/components/website/TrustStrip'
import CategoriesCarousel from '@/components/website/CategoriesCarousel'
import ProductsCarousel from '@/components/website/ProductsCarousel'
import SolutionsCarousel from '@/components/website/SolutionsCarousel'
import ProjectsCarousel from '@/components/website/ProjectsCarousel'
import InspirationCarousel from '@/components/website/InspirationCarousel'
import AIStorePlannerSection from '@/components/website/AIStorePlannerSection'
import TestimonialsSection from '@/components/website/TestimonialsSection'
import PremiumCTA from '@/components/website/PremiumCTA'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <HeroSection />
        <TrustStrip />
        <CategoriesCarousel />
        <ProductsCarousel />
        <ProjectsCarousel />
        <SolutionsCarousel />
        <InspirationCarousel />
        <AIStorePlannerSection />
        <TestimonialsSection />
        <PremiumCTA />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
