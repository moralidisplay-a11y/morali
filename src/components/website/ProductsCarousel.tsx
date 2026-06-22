'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { products } from '@/lib/catalog'

export default function ProductsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -320 : 320, behavior: 'smooth' })
  }

  const featured = products.slice(0, 10)

  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--accent)' }}>מוצרים</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--primary)' }}>מוצרים מומלצים</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scroll('r')} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:border-black" style={{ border: '1.5px solid var(--border)' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('l')} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:border-black" style={{ border: '1.5px solid var(--border)' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featured.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-2xl overflow-hidden shrink-0 group"
              style={{ width: '220px', scrollSnapAlign: 'start', border: '1px solid var(--border)' }}
            >
              <div className="relative overflow-hidden" style={{ height: '220px', background: 'var(--muted)' }}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {p.badge && (
                  <div
                    className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: p.badge === 'חדש' ? '#1a1a1a' : 'var(--accent)' }}
                  >
                    {p.badge}
                  </div>
                )}
                <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Heart className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                </button>
              </div>
              <div className="p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>{p.categorySlug}</div>
                <div className="font-bold text-sm leading-tight mb-2" style={{ color: 'var(--foreground)' }}>{p.name}</div>
                <div className="font-black text-base mb-3" style={{ color: 'var(--primary)' }}>{p.price}</div>
                <Link
                  href={`/quote?product=${p.slug}`}
                  className="block text-center text-xs font-bold py-2.5 rounded-xl transition-colors"
                  style={{ background: 'var(--primary)', color: 'white' }}
                >
                  הצעת מחיר
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="btn-gold" style={{ padding: '12px 32px' }}>
            לכל המוצרים
          </Link>
        </div>

      </div>
    </section>
  )
}
