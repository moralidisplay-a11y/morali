import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import { getCategoryBySlug, getProductsByCategory, categories } from '@/lib/catalog'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) return {}
  return {
    title: `${cat.name} | MORALI`,
    description: cat.longDesc,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) notFound()

  const prods = getProductsByCategory(params.slug)

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: '60vh', minHeight: '420px' }}>
          <img src={cat.heroImg} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(4,4,4,0.88) 0%, rgba(4,4,4,0.4) 60%, rgba(4,4,4,0.1) 100%)' }} />
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-14">
              <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Link href="/" className="hover:text-white transition-colors">בית</Link>
                <span>/</span>
                <Link href="/categories" className="hover:text-white transition-colors">קטגוריות</Link>
                <span>/</span>
                <span className="text-white">{cat.name}</span>
              </nav>
              <div className="text-xs font-bold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
                {cat.nameEn}
              </div>
              <h1 className="text-white font-black leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
                {cat.name}
              </h1>
              <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{cat.count}+ מוצרים</p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-14" style={{ background: 'var(--muted)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{cat.longDesc}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {cat.tags.map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'white', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {prods.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {prods.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group rounded-2xl overflow-hidden"
                    style={{ border: '1px solid var(--border)', transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: '220px' }}>
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105"
                        style={{ transition: 'transform 0.6s ease' }}
                      />
                      {p.badge && (
                        <div className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'var(--accent)', color: 'white', letterSpacing: '0.08em' }}>
                          {p.badge}
                        </div>
                      )}
                      {!p.inStock && (
                        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                          <span className="text-white text-sm font-bold bg-black/60 px-3 py-1.5 rounded-full">אזל המלאי</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="text-[10px] font-bold tracking-wider uppercase mb-1.5" style={{ color: 'var(--text-muted)' }}>{p.code}</div>
                      <h3 className="font-bold text-base leading-tight mb-2" style={{ color: 'var(--foreground)' }}>{p.name}</h3>
                      <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-black text-sm" style={{ color: 'var(--accent)' }}>{p.price}</span>
                        <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>פרטים ←</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg" style={{ color: 'var(--text-muted)' }}>המוצרים בקטגוריה זו יתווספו בקרוב.</p>
                <a href="https://wa.me/972500000000" className="btn-gold mt-6 inline-flex">
                  שאלו אותנו
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Bottom nav */}
        <section className="py-16" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
            <Link href="/categories" className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60" style={{ color: 'var(--accent)' }}>
              <ArrowLeft className="w-4 h-4 rotate-180" />
              כל הקטגוריות
            </Link>
            <div className="flex items-center gap-4">
              <a href="tel:050-1234567" className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60" style={{ color: 'var(--foreground)' }}>
                <Phone className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                050-1234567
              </a>
              <Link href="/quote" className="btn-gold">
                בקשת הצעת מחיר
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
