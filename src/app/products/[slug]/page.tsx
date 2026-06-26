import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileNav from '@/components/layout/MobileNav'
import ProductGallery from '@/components/website/ProductGallery'
import { getProductBySlug, getCategoryData, getProductsByCategory } from '@/lib/data'
import { Check, MessageCircle, Phone, ChevronRight } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = await getProductBySlug(slug)
  if (!p) return {}
  return {
    title: `${p.name} | MORALI`,
    description: p.desc,
    openGraph: { title: `${p.name} | MORALI`, description: p.desc, images: [p.img] },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = await getProductBySlug(slug)
  if (!p) notFound()

  const cat = await getCategoryData(p.categorySlug)
  const related = (await getProductsByCategory(p.categorySlug)).filter(r => r.slug !== p.slug).slice(0, 4)
  const waMsg = encodeURIComponent(`שלום, אני מעוניין/ת במוצר: ${p.name} (${p.code}). אשמח לפרטים נוספים.`)

  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-16 md:pb-0">

        {/* Breadcrumb */}
        <div style={{ background: '#f8f7f5', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
            <nav className="flex items-center gap-2 text-xs flex-wrap" style={{ color: 'var(--text-muted)' }}>
              <Link href="/" className="hover:text-black transition-colors">בית</Link>
              <ChevronRight className="w-3 h-3 opacity-40" />
              <Link href="/categories" className="hover:text-black transition-colors">קטגוריות</Link>
              <ChevronRight className="w-3 h-3 opacity-40" />
              {cat && <Link href={`/categories/${cat.slug}`} className="hover:text-black transition-colors">{cat.name}</Link>}
              <ChevronRight className="w-3 h-3 opacity-40" />
              <span style={{ color: 'var(--foreground)' }}>{p.name}</span>
            </nav>
          </div>
        </div>

        {/* Product */}
        <section className="py-12 lg:py-20" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* Gallery — client component with zoom + thumbnails */}
              <div className="lg:col-span-7">
                <ProductGallery images={p.images.length > 0 ? p.images : [p.img]} name={p.name} />
              </div>

              {/* Info */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--text-muted)' }}>
                  {p.code}
                </div>

                {p.badge && (
                  <div className="inline-block mb-3 text-xs font-black px-3 py-1.5 rounded-full" style={{ background: 'var(--accent)', color: 'white' }}>
                    {p.badge}
                  </div>
                )}

                <h1 className="font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
                  {p.name}
                </h1>

                <p className="leading-relaxed mb-6 text-base" style={{ color: 'var(--text-muted)' }}>
                  {p.desc}
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-black" style={{ color: 'var(--accent)' }}>{p.price}</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>לא כולל מע"מ</span>
                </div>

                {/* Stock */}
                <div className="flex items-center gap-2 mb-8 p-3 rounded-xl" style={{ background: p.inStock ? '#f0f7f0' : '#f5f5f5', border: `1px solid ${p.inStock ? '#c8e6c8' : 'var(--border)'}` }}>
                  <div className={`w-2.5 h-2.5 rounded-full ${p.inStock ? 'bg-green-500' : 'bg-gray-400'}`} />
                  <span className="text-sm font-semibold" style={{ color: p.inStock ? '#1a7a1a' : 'var(--text-muted)' }}>
                    {p.inStock ? 'במלאי — אספקה מהירה' : 'אזל — ניתן להזמין בהזמנה מיוחדת'}
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 mb-8">
                  <a
                    href={`https://wa.me/972505559491?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 py-4 rounded-2xl font-black text-white transition-all hover:opacity-90 active:scale-95"
                    style={{ background: '#1a9e1a', fontSize: '1rem' }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    בקש הצעת מחיר ב-WhatsApp
                  </a>
                  <a
                    href="tel:050-555-9491"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all hover:bg-gray-50"
                    style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}
                  >
                    <Phone className="w-4 h-4" />
                    050-555-9491 — התקשרו אלינו
                  </a>
                </div>

                {/* Features */}
                {p.features.length > 0 && (
                  <div className="mb-8">
                    <div className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--text-muted)' }}>מאפיינים</div>
                    <div className="space-y-2">
                      {p.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--foreground)' }}>
                          <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specs table */}
                {(p.sizes.length > 0 || p.materials.length > 0) && (
                  <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                    <div className="px-5 py-3" style={{ background: '#f8f7f5', borderBottom: '1px solid var(--border)' }}>
                      <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>מפרט טכני</span>
                    </div>
                    <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
                      {p.sizes.length > 0 && (
                        <div className="flex items-start justify-between px-5 py-3 gap-4">
                          <span className="text-xs font-semibold shrink-0" style={{ color: 'var(--text-muted)' }}>מידות</span>
                          <span className="text-xs text-left" style={{ color: 'var(--foreground)' }}>{p.sizes.join(' · ')}</span>
                        </div>
                      )}
                      {p.materials.length > 0 && (
                        <div className="flex items-start justify-between px-5 py-3 gap-4">
                          <span className="text-xs font-semibold shrink-0" style={{ color: 'var(--text-muted)' }}>חומרים</span>
                          <span className="text-xs text-left" style={{ color: 'var(--foreground)' }}>{p.materials.join(' · ')}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between px-5 py-3">
                        <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>קוד מוצר</span>
                        <code className="text-xs font-bold" style={{ color: 'var(--foreground)' }}>{p.code}</code>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="py-16" style={{ background: '#f8f7f5', borderTop: '1px solid var(--border)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-black text-xl" style={{ color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                  מוצרים משלימים
                </h2>
                {cat && (
                  <Link href={`/categories/${cat.slug}`} className="text-sm font-bold transition-opacity hover:opacity-60" style={{ color: 'var(--accent)' }}>
                    כל {cat.name} →
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    href={`/products/${r.slug}`}
                    className="group rounded-2xl overflow-hidden bg-white transition-all hover:shadow-md"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    <div className="overflow-hidden" style={{ height: '180px', background: '#f5f5f5' }}>
                      <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--text-muted)' }}>{r.code}</div>
                      <h3 className="font-black text-sm leading-tight mb-1" style={{ color: 'var(--primary)' }}>{r.name}</h3>
                      <div className="font-black text-sm" style={{ color: 'var(--accent)' }}>{r.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
      <FloatingButtons />
      <MobileNav />
    </>
  )
}
