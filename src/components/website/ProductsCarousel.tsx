'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { products } from '@/lib/catalog'

export default function ProductsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const [liked, setLiked] = useState<Set<string>>(new Set())

  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -280 : 280, behavior: 'smooth' })
  }

  const featured = products.slice(0, 12)

  return (
    <section className="py-24 lg:py-36" style={{ background: 'var(--muted)' }}>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 flex items-end justify-between">
        <div>
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            מוצרים
          </div>
          <h2
            className="font-black leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--primary)', letterSpacing: '-0.03em' }}
          >
            מוצרים מומלצים
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="hidden sm:inline-flex text-sm font-semibold transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            כל המוצרים →
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scroll('r')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-200" style={{ border: '1px solid var(--border)' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('l')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-200" style={{ border: '1px solid var(--border)' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {featured.map((p) => (
          <div
            key={p.slug}
            className="group shrink-0 flex flex-col"
            style={{ width: '230px', scrollSnapAlign: 'start' }}
          >
            {/* Image — no card border, clean float */}
            <div className="relative overflow-hidden rounded-xl mb-4" style={{ height: '280px', background: '#f5f5f5' }}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {p.badge && (
                <div
                  className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase"
                  style={{ background: p.badge === 'חדש' ? 'var(--primary)' : 'var(--accent)' }}
                >
                  {p.badge}
                </div>
              )}
              <button
                onClick={() => setLiked(prev => {
                  const n = new Set(prev)
                  n.has(p.slug) ? n.delete(p.slug) : n.add(p.slug)
                  return n
                })}
                className="absolute top-3 left-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
              >
                <Heart
                  className="w-4 h-4 transition-colors"
                  style={{ color: liked.has(p.slug) ? '#ef4444' : 'var(--text-muted)', fill: liked.has(p.slug) ? '#ef4444' : 'none' }}
                />
              </button>
            </div>

            {/* Info — no box */}
            <div className="flex-1 flex flex-col">
              <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                {p.categorySlug}
              </div>
              <div className="font-bold text-sm leading-tight mb-2" style={{ color: 'var(--foreground)' }}>
                {p.name}
              </div>
              <div className="font-black text-lg mb-3" style={{ color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                {p.price}
              </div>
              <Link
                href={`/quote?product=${p.slug}`}
                className="mt-auto text-center text-xs font-bold py-2.5 rounded-xl transition-all hover:bg-black hover:text-white"
                style={{ background: 'var(--primary)', color: 'white' }}
              >
                הצעת מחיר
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
