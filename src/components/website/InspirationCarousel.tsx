'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const tabs = ['הכל', 'ביגוד', 'קוסמטיקה', 'פרחים', 'סופרמרקט', 'ילדים']

const items = [
  { category: 'ביגוד',       label: 'בוטיק אופנה מודרני',      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=90', tall: true },
  { category: 'קוסמטיקה',   label: 'קאונטר טיפוח יוקרתי',     img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=90', tall: false },
  { category: 'פרחים',       label: 'חנות פרחים עם תצוגה',      img: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=700&q=90', tall: false },
  { category: 'סופרמרקט',   label: 'מחלקת טרי מעוצבת',         img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=700&q=90', tall: true },
  { category: 'ביגוד',       label: 'חנות נעליים פרימיום',      img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&q=90', tall: false },
  { category: 'ילדים',       label: 'חנות ילדים צבעונית',       img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=700&q=90', tall: false },
  { category: 'קוסמטיקה',   label: 'ויטרינת טיפוח',            img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&q=90', tall: true },
  { category: 'ביגוד',       label: 'בוטיק פרימיום',            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=90', tall: false },
  { category: 'פרחים',       label: 'גלריית פרחים',             img: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=700&q=90', tall: false },
  { category: 'סופרמרקט',   label: 'מחלקת ירקות ופירות',       img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=90', tall: true },
]

export default function InspirationCarousel() {
  const [active, setActive] = useState('הכל')
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -320 : 320, behavior: 'smooth' })
  }

  const filtered = active === 'הכל' ? items : items.filter(i => i.category === active)

  return (
    <section className="py-24 lg:py-36" style={{ background: 'var(--background)' }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--accent)' }}>השראה</div>
            <h2
              className="font-black leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--primary)', letterSpacing: '-0.03em' }}
            >
              השראה לחנות שלך
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scroll('r')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-100" style={{ border: '1px solid var(--border)' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('l')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-100" style={{ border: '1px solid var(--border)' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs — minimal, no button look */}
        <div className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="shrink-0 px-5 py-2.5 text-sm font-semibold transition-all border-b-2"
              style={{
                borderBottomColor: active === tab ? 'var(--primary)' : 'transparent',
                color: active === tab ? 'var(--primary)' : 'var(--text-muted)',
                background: 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto px-6 lg:px-12"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {filtered.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="group relative rounded-xl overflow-hidden shrink-0 cursor-pointer"
            style={{
              width: '260px',
              height: item.tall ? '380px' : '260px',
              scrollSnapAlign: 'start',
              alignSelf: 'flex-start',
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
            />
            <style>{`.group:hover img { transform: scale(1.07); }`}</style>

            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: 'rgba(0,0,0,0.3)' }} />

            {/* Category chip */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              <span
                className="text-[10px] font-bold px-3 py-1.5 rounded-full"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                {item.category}
              </span>
            </div>

            {/* Label */}
            <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-bold text-white text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
