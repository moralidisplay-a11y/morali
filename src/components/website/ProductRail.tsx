'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { products } from '@/lib/catalog'

type Props = {
  title: string
  categorySlug: string
  accentColor?: string
}

export default function ProductRail({ title, categorySlug, accentColor = 'var(--accent)' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const items = products.filter(p => p.categorySlug === categorySlug).slice(0, 10)
  if (items.length === 0) return null

  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -280 : 280, behavior: 'smooth' })
  }

  return (
    <section className="py-12 lg:py-16" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-black text-xl lg:text-2xl" style={{ color: 'var(--primary)', letterSpacing: '-0.025em' }}>
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`/categories/${categorySlug}`}
            className="hidden sm:block text-xs font-bold transition-opacity hover:opacity-60"
            style={{ color: accentColor }}
          >
            כל המוצרים →
          </Link>
          <div className="flex gap-1.5">
            <button
              onClick={() => scroll('r')}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
              style={{ border: '1px solid var(--border)' }}
              aria-label="גלול ימין"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scroll('l')}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
              style={{ border: '1px solid var(--border)' }}
              aria-label="גלול שמאל"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-2"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {items.map(p => (
          <div
            key={p.slug}
            className="group shrink-0 rounded-2xl overflow-hidden bg-white"
            style={{
              width: '220px',
              scrollSnapAlign: 'start',
              border: '1px solid var(--border)',
              transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
          >
            <Link href={`/products/${p.slug}`} className="block">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '210px', background: '#f5f5f5' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.badge && (
                  <div
                    className="absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    {p.badge}
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="p-4">
                <div className="text-[10px] font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--text-muted)' }}>
                  {p.code}
                </div>
                <h3 className="font-black text-sm leading-tight mb-2" style={{ color: 'var(--primary)' }}>
                  {p.name}
                </h3>
                <div className="font-bold text-sm" style={{ color: accentColor }}>
                  {p.price}
                </div>
              </div>
            </Link>
            {/* WhatsApp CTA */}
            <div className="px-4 pb-4">
              <a
                href={`https://wa.me/972505559491?text=שלום, אני מתעניין ב: ${p.name}`}
                className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80"
                style={{ background: '#f0f7f0', color: '#1a7a1a', border: '1px solid #c8e6c8' }}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                בקש הצעת מחיר
              </a>
            </div>
          </div>
        ))}

        {/* "View all" card */}
        <Link
          href={`/categories/${categorySlug}`}
          className="shrink-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3 transition-all hover:bg-gray-50"
          style={{
            width: '180px',
            scrollSnapAlign: 'start',
            border: '1.5px dashed var(--border)',
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
            style={{ background: 'var(--muted)', color: 'var(--primary)' }}
          >
            →
          </div>
          <span className="text-sm font-bold" style={{ color: 'var(--primary)' }}>
            כל המוצרים
          </span>
        </Link>
      </div>
    </section>
  )
}
