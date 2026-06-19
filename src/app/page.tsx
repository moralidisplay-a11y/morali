import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'

import HeroSection from '@/components/website/HeroSection'
import FeaturedProjectsSection from '@/components/website/FeaturedProjectsSection'
import ProcessSection from '@/components/website/ProcessSection'
import CategoriesSection from '@/components/website/CategoriesSection'
import KnowledgeSection from '@/components/website/KnowledgeSection'
import ClientStoriesSection from '@/components/website/ClientStoriesSection'
import PremiumCTA from '@/components/website/PremiumCTA'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <HeroSection />
        <FeaturedProjectsSection />
        <ProcessSection />
        <CategoriesSection />
        <ClientStoriesSection />
        <KnowledgeSection />
        <PremiumCTA />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
