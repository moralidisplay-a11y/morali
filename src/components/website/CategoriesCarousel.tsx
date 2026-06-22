'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const cats = [
  { name: 'רלסים ומערכות תלייה', href: '/categories/hanging', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=90' },
  { name: 'בובות ראווה', href: '/categories/mannequins', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=90' },
  { name: 'מידוף לחנויות', href: '/categories/shelving', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=700&q=90' },
  { name: 'קירות מחורצים', href: '/categories/slatwall', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=700&q=90' },
  { name: 'דלפקים וויטרינות', href: '/categories/counters', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=90' },
  { name: 'קולבים ואביזרים', href: '/categories/hangers', img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=700&q=90' },
  { name: 'סטנדים ומחזיקים', href: '/categories/stands', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=700&q=90' },
  { name: 'סלסלות ועגלות', href: '/categories/hanging', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=700&q=90' },
]

export default function CategoriesCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -280 : 280, behavior: 'smooth' })
  }

  return (
    <section className="py-24 lg:py-36" style={{ background: 'var(--background)' }}>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 flex items-end justify-between">
        <div>
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            קטגוריות
          </div>
          <h2
            className="font-black leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--primary)', letterSpacing: '-0.03em' }}
          >
            כל מה שהחנות
            <br />שלכם צריכה.
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll('r')}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
            style={{ border: '1px solid var(--border)' }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('l')}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
            style={{ border: '1px solid var(--border)' }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full-width carousel — no side padding */}
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto px-6 lg:px-12"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {cats.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="group relative overflow-hidden shrink-0 rounded-xl"
            style={{ width: '240px', height: '340px', scrollSnapAlign: 'start' }}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)', transformOrigin: 'center' }}
            />
            {/* Overlay — barely visible, deepens on hover */}
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 55%)' }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'rgba(0,0,0,0.15)' }}
            />

            {/* Scale image on hover */}
            <style>{`
              .group:hover img { transform: scale(1.06); }
            `}</style>

            <div className="absolute bottom-0 inset-x-0 p-5">
              <h3 className="font-black text-white text-sm leading-tight mb-1.5">{cat.name}</h3>
              <div
                className="text-xs font-semibold transition-all duration-300 group-hover:translate-x-1"
                style={{ color: 'rgba(199,154,75,0.9)' }}
              >
                לצפייה →
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
