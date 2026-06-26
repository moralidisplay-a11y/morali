'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, SlidersHorizontal } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import { products, categories } from '@/lib/catalog'

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  )
}

function ProductsContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) setQuery(q)
  }, [searchParams])

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.categorySlug === activeCategory
    const matchQ = !query || p.name.includes(query) || p.desc.includes(query) || p.code.includes(query)
    return matchCat && matchQ
  })

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
              קטלוג מוצרים
            </div>
            <h1 className="text-white font-black leading-[1.06] mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
              כל המוצרים
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: '440px', lineHeight: 1.7 }}>
              {products.length} מוצרים בקטלוג. ניתן לסנן לפי קטגוריה או לחפש לפי שם.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-[65px] z-40 py-4" style={{ background: 'white', borderBottom: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="חיפוש מוצר..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="w-full pr-10 pl-4 py-2.5 text-sm rounded-xl"
                  style={{ border: '1.5px solid var(--border)', background: 'var(--muted)', outline: 'none', color: 'var(--foreground)' }}
                />
              </div>

              {/* Category tabs */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={() => setActiveCategory('all')}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: activeCategory === 'all' ? 'var(--primary)' : 'var(--muted)',
                    color: activeCategory === 'all' ? 'white' : 'var(--text-muted)',
                  }}
                >
                  הכל
                </button>
                {categories.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => setActiveCategory(c.slug)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                    style={{
                      background: activeCategory === c.slug ? 'var(--primary)' : 'var(--muted)',
                      color: activeCategory === c.slug ? 'white' : 'var(--text-muted)',
                    }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 lg:py-24" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <SlidersHorizontal className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--border)' }} />
                <p className="text-lg" style={{ color: 'var(--text-muted)' }}>לא נמצאו מוצרים. נסו לשנות את הסינון.</p>
              </div>
            ) : (
              <>
                <div className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
                  מציג <strong style={{ color: 'var(--foreground)' }}>{filtered.length}</strong> מוצרים
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filtered.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="group rounded-2xl overflow-hidden"
                      style={{ border: '1px solid var(--border)' }}
                    >
                      <div className="relative overflow-hidden" style={{ height: '220px' }}>
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105"
                          style={{ transition: 'transform 0.6s ease' }}
                        />
                        {p.badge && (
                          <div className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'var(--accent)', color: 'white' }}>
                            {p.badge}
                          </div>
                        )}
                        {!p.inStock && (
                          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                            <span className="text-white text-sm font-bold bg-black/60 px-3 py-1.5 rounded-full">אזל המלאי</span>
                          </div>
                        )}
                      </div>
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
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
