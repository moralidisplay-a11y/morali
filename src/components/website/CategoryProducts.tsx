'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { MessageCircle, SlidersHorizontal, X } from 'lucide-react'
import type { Product } from '@/lib/catalog'

type Props = { products: Product[]; categoryName: string }

const SORT_OPTIONS = [
  { value: 'default', label: 'מיון: ברירת מחדל' },
  { value: 'name', label: 'לפי שם א-ת' },
  { value: 'instock', label: 'במלאי קודם' },
]

export default function CategoryProducts({ products, categoryName }: Props) {
  const [sort, setSort] = useState('default')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]
    if (inStockOnly) list = list.filter(p => p.inStock)
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'he'))
    if (sort === 'instock') list.sort((a, b) => (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0))
    return list
  }, [products, sort, inStockOnly])

  return (
    <section className="py-10 lg:py-16" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold" style={{ color: 'var(--primary)' }}>
              {filtered.length} מוצרים
            </span>
            {inStockOnly && (
              <button
                onClick={() => setInStockOnly(false)}
                className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: '#f0f7f0', color: '#1a7a1a', border: '1px solid #c8e6c8' }}
              >
                במלאי בלבד <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* In stock toggle */}
            <button
              onClick={() => setInStockOnly(v => !v)}
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all"
              style={{
                background: inStockOnly ? 'var(--primary)' : 'var(--muted)',
                color: inStockOnly ? 'white' : 'var(--foreground)',
                border: '1px solid var(--border)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              במלאי בלבד
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-sm font-semibold px-4 py-2 rounded-full outline-none cursor-pointer"
              style={{ background: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {filtered.map(p => (
              <div
                key={p.slug}
                className="group rounded-2xl overflow-hidden bg-white transition-all duration-300"
                style={{ border: '1px solid var(--border)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ''; (e.currentTarget as HTMLElement).style.transform = '' }}
              >
                <Link href={`/products/${p.slug}`} className="block">
                  <div className="relative overflow-hidden" style={{ height: '210px', background: '#f5f5f5' }}>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.badge && (
                      <div className="absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-full" style={{ background: 'var(--accent)', color: 'white' }}>
                        {p.badge}
                      </div>
                    )}
                    {!p.inStock && (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                        <span className="text-white text-xs font-bold bg-black/60 px-3 py-1.5 rounded-full">אזל המלאי</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--text-muted)' }}>{p.code}</div>
                    <h3 className="font-black text-sm leading-tight mb-2" style={{ color: 'var(--primary)' }}>{p.name}</h3>
                    <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                    <div className="font-black text-sm" style={{ color: 'var(--accent)' }}>{p.price}</div>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <a
                    href={`https://wa.me/972501234567?text=שלום, אני מתעניין ב: ${p.name} (${p.code})`}
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80"
                    style={{ background: '#f0f7f0', color: '#1a7a1a', border: '1px solid #c8e6c8' }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    בקש הצעת מחיר
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-lg font-semibold mb-2" style={{ color: 'var(--primary)' }}>לא נמצאו מוצרים</p>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>נסו לשנות את הפילטרים</p>
            <button onClick={() => { setInStockOnly(false); setSort('default') }} className="btn-gold">
              אפס פילטרים
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
