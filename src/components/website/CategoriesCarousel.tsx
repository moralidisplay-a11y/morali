'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const cats = [
  { name: 'רלסים ומערכות תלייה', href: '/categories/hanging', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'בובות ראווה', href: '/categories/mannequins', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80' },
  { name: 'מידוף לחנויות', href: '/categories/shelving', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80' },
  { name: 'קירות מחורצים', href: '/categories/slatwall', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80' },
  { name: 'דלפקים וויטרינות', href: '/categories/counters', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
  { name: 'קולבים ואביזרים', href: '/categories/hangers', img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=600&q=80' },
  { name: 'סטנדים ומחזיקים', href: '/categories/stands', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80' },
  { name: 'סלסלות ועגלות', href: '/categories/hanging', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80' },
]

export default function CategoriesCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -300 : 300, behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--accent)' }}>
              קטגוריות
            </div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--primary)' }}>
              קטגוריות מובילות
            </h2>
          </div>

          {/* Arrows desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('r')}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:border-black"
              style={{ border: '1.5px solid var(--border)' }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('l')}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:border-black"
              style={{ border: '1.5px solid var(--border)' }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cats.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative overflow-hidden rounded-xl shrink-0"
              style={{ width: '200px', height: '260px', scrollSnapAlign: 'start' }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="font-bold text-white text-sm leading-tight mb-1">{cat.name}</div>
                <div className="text-xs" style={{ color: 'var(--accent)' }}>לצפייה ←</div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
