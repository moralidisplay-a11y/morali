'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const categories = [
  { id: 'fashion', label: 'ביגוד', icon: '👗' },
  { id: 'flowers', label: 'פרחים', icon: '🌸' },
  { id: 'pharmacy', label: 'פארם', icon: '💊' },
  { id: 'cosmetics', label: 'קוסמטיקה', icon: '💄' },
  { id: 'phones', label: 'טלפונים', icon: '📱' },
]

const images: Record<string, { before: string; after: string; beforeLabel: string; afterLabel: string }> = {
  fashion: {
    before: 'https://images.unsplash.com/photo-1604014237744-2e0d16f2e0c4?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    beforeLabel: 'חנות לא מאורגנת, ללא תצוגה',
    afterLabel: 'חנות מעוצבת עם סטנדים ותאורה',
  },
  flowers: {
    before: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=900&q=80',
    beforeLabel: 'תצוגה בסיסית ללא עיצוב',
    afterLabel: 'חנות פרחים עם מדפים ויטרינות',
  },
  pharmacy: {
    before: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=900&q=80',
    beforeLabel: 'מדפים מיושנים וצפופים',
    afterLabel: 'פארמה מאורגנת עם מדפים מקצועיים',
  },
  cosmetics: {
    before: 'https://images.unsplash.com/photo-1527799820374-87591a16f725?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
    beforeLabel: 'מוצרים ללא תצוגה מסודרת',
    afterLabel: 'ויטרינות קוסמטיקה יוקרתיות',
  },
  phones: {
    before: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80',
    after: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=80',
    beforeLabel: 'פריסה בסיסית ללא חוויה',
    afterLabel: 'חנות טק עם שולחנות חוויה',
  },
}

export default function BeforeAfterSection() {
  const [activeCategory, setActiveCategory] = useState('fashion')
  const [sliderPos, setSliderPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const imgs = images[activeCategory]

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(95, Math.max(5, x)))
  }

  return (
    <section className="py-20 lg:py-32" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="gold-label justify-center">טרנספורמציה</span>
          <h2 className="section-title mt-2">
            ראו את ההבדל שעיצוב נכון עושה
          </h2>
          <p className="section-subtitle mt-4 mx-auto">
            לא מוכרים מדפים — יוצרים חנות שנראית נכון ומוכרת יותר.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setSliderPos(50) }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeCategory === cat.id ? 'var(--primary)' : 'var(--muted)',
                color: activeCategory === cat.id ? 'white' : 'var(--foreground)',
                boxShadow: activeCategory === cat.id ? '0 4px 16px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden cursor-col-resize select-none"
          style={{ height: 'min(520px, 60vw)', boxShadow: '0 24px 80px rgba(0,0,0,0.15)' }}
          onMouseDown={() => setDragging(true)}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onMouseMove={(e) => dragging && updatePos(e.clientX)}
          onTouchMove={(e) => updatePos(e.touches[0].clientX)}
        >
          {/* Before */}
          <div className="absolute inset-0">
            <img
              key={`before-${activeCategory}`}
              src={imgs.before}
              alt="לפני"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
            {/* Before label */}
            <div
              className="absolute bottom-6 right-6 px-4 py-2 rounded-xl text-sm font-bold text-white"
              style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)' }}
            >
              לפני — {imgs.beforeLabel}
            </div>
          </div>

          {/* After — clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              key={`after-${activeCategory}`}
              src={imgs.after}
              alt="אחרי"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.1)' }} />
            {/* After label */}
            <div
              className="absolute bottom-6 left-6 px-4 py-2 rounded-xl text-sm font-bold text-white"
              style={{ background: 'var(--accent)', backdropFilter: 'blur(8px)' }}
            >
              אחרי — {imgs.afterLabel}
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 z-10 pointer-events-none"
            style={{ left: `${sliderPos}%`, background: 'white', transform: 'translateX(-50%)' }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 z-20 flex items-center justify-center -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${sliderPos}%` }}
          >
            <div
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shadow-2xl select-none"
              style={{ background: 'var(--accent)' }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Instruction hint */}
          <div
            className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-semibold text-white pointer-events-none"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
          >
            גררו להשוואה
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            רוצים לראות מה מוראלי יכולים לעשות לחנות שלכם?
          </p>
          <Link href="/projects" className="btn-gold">
            לצפייה בפרויקטים אמיתיים
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
