import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'
import CategoryProducts from '@/components/website/CategoryProducts'
import { getCategoryData, getProductsByCategory } from '@/lib/data'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = await getCategoryData(slug)
  if (!cat) return {}
  return {
    title: `${cat.name} | MORALI — מתקני תצוגה מקצועיים`,
    description: cat.longDesc,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = await getCategoryData(slug)
  if (!cat) notFound()
  const prods = await getProductsByCategory(slug)

  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-16 md:pb-0">

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: '52vh', minHeight: '340px', background: '#0a0a0a' }}>
          <img src={cat.heroImg} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.55 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.72) 100%)' }} />
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-12">
              <nav className="flex items-center gap-2 text-xs mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Link href="/" className="hover:text-white transition-colors">בית</Link>
                <span>/</span>
                <Link href="/categories" className="hover:text-white transition-colors">קטגוריות</Link>
                <span>/</span>
                <span className="text-white">{cat.name}</span>
              </nav>
              <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--accent)' }}>
                {cat.nameEn}
              </div>
              <h1 className="text-white font-black leading-tight mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', letterSpacing: '-0.03em' }}>
                {cat.name}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                {prods.length > 0 ? prods.length : cat.count}+ מוצרים{cat.desc ? ` · ${cat.desc}` : ''}
              </p>
            </div>
          </div>
        </section>

        {/* SEO strip */}
        <div style={{ background: '#f8f7f5', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
              {cat.longDesc}
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              {cat.tags.map(t => (
                <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-white" style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Products + client-side filters */}
        <CategoryProducts products={prods} categoryName={cat.name} />

        {/* CTA */}
        <section className="py-16" style={{ background: '#0c0c0c' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-black text-white text-2xl mb-3" style={{ letterSpacing: '-0.02em' }}>
              לא מצאתם מה שחיפשתם?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
              יש לנו אלפי פריטים נוספים — צרו קשר ונמצא יחד את הפתרון המתאים.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://wa.me/972505559491"
                className="btn-gold"
                style={{ padding: '13px 32px', borderRadius: '999px' }}
              >
                שלחו הודעה ב-WhatsApp
              </a>
              <Link
                href="/categories"
                className="px-8 py-3.5 rounded-full text-sm font-bold"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
              >
                כל הקטגוריות
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
