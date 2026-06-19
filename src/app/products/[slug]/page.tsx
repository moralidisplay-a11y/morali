import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Phone, Check, Package } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import { getProductBySlug, getCategoryBySlug, getProductsByCategory, products } from '@/lib/catalog'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug)
  if (!p) return {}
  return { title: `${p.name} | MORALI`, description: p.desc }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug)
  if (!p) notFound()

  const cat = getCategoryBySlug(p.categorySlug)
  const related = getProductsByCategory(p.categorySlug).filter(r => r.slug !== p.slug).slice(0, 3)

  const waMessage = encodeURIComponent(`שלום, אני מעוניין/ת במוצר: ${p.name} (${p.code}). אשמח לפרטים נוספים.`)

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Breadcrumb */}
        <div style={{ background: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
            <nav className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              <Link href="/" className="hover:text-black transition-colors">בית</Link>
              <span>/</span>
              <Link href="/categories" className="hover:text-black transition-colors">קטגוריות</Link>
              <span>/</span>
              {cat && <Link href={`/categories/${cat.slug}`} className="hover:text-black transition-colors">{cat.name}</Link>}
              <span>/</span>
              <span style={{ color: 'var(--foreground)' }}>{p.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-16 lg:py-24" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Images */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl" style={{ height: '520px', background: 'var(--muted)' }}>
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                </div>
                {p.images.length > 1 && (
                  <div className="flex gap-3 mt-3">
                    {p.images.slice(1).map((img, i) => (
                      <div key={i} className="overflow-hidden rounded-xl" style={{ height: '120px', width: '140px', background: 'var(--muted)' }}>
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--text-muted)' }}>{p.code}</div>

                {p.badge && (
                  <div className="inline-block mb-4 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'var(--accent)', color: 'white' }}>
                    {p.badge}
                  </div>
                )}

                <h1 className="font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--foreground)' }}>
                  {p.name}
                </h1>

                <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{p.desc}</p>

                <div className="text-2xl font-black mb-8" style={{ color: 'var(--accent)' }}>{p.price}</div>

                {/* Stock */}
                <div className="flex items-center gap-2 mb-8">
                  <div className={`w-2 h-2 rounded-full ${p.inStock ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                    {p.inStock ? 'במלאי' : 'אזל — ניתן להזמין'}
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 mb-10">
                  <a
                    href={`https://wa.me/972500000000?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full justify-center"
                    style={{ padding: '14px 24px', fontSize: '0.95rem' }}
                  >
                    שלחו פרטים לייעוץ
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                  <Link href="/quote" className="btn-outline w-full justify-center">
                    בקשת הצעת מחיר
                  </Link>
                </div>

                {/* Sizes */}
                {p.sizes.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--text-muted)' }}>מידות זמינות</div>
                    <div className="flex flex-wrap gap-2">
                      {p.sizes.map((s) => (
                        <span key={s} className="text-sm px-3 py-1.5 rounded-lg font-semibold" style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Materials */}
                {p.materials.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--text-muted)' }}>חומרים</div>
                    <div className="flex flex-wrap gap-2">
                      {p.materials.map((m) => (
                        <span key={m} className="text-sm px-3 py-1.5 rounded-lg font-medium" style={{ background: 'var(--muted)', color: 'var(--foreground)' }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {p.features.length > 0 && (
                  <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="text-xs font-bold tracking-wider uppercase mb-4" style={{ color: 'var(--text-muted)' }}>מאפיינים</div>
                    <ul className="space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                          <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-20" style={{ background: 'var(--muted)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>מוצרים קשורים</h2>
                {cat && (
                  <Link href={`/categories/${cat.slug}`} className="text-sm font-semibold transition-opacity hover:opacity-60 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                    כל {cat.name} <ArrowLeft className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link key={r.slug} href={`/products/${r.slug}`} className="group rounded-2xl overflow-hidden bg-white" style={{ border: '1px solid var(--border)' }}>
                    <div className="overflow-hidden" style={{ height: '200px' }}>
                      <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105" style={{ transition: 'transform 0.6s ease' }} />
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--text-muted)' }}>{r.code}</div>
                      <h3 className="font-bold text-sm leading-snug mb-1" style={{ color: 'var(--foreground)' }}>{r.name}</h3>
                      <div className="font-black text-sm" style={{ color: 'var(--accent)' }}>{r.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-black text-xl mb-1" style={{ color: 'var(--foreground)' }}>מעוניינים בכמויות גדולות?</div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>דברו איתנו — יש הנחות לרשתות ולהזמנות גדולות.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:050-1234567" className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl" style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}>
                <Phone className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                050-1234567
              </a>
              <Link href="/quote" className="btn-gold">
                הצעת מחיר
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
