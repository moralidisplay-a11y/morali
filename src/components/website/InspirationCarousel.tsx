'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const tabs = ['הכל', 'ביגוד', 'קוסמטיקה', 'פרחים', 'סופרמרקט', 'ילדים']

const items = [
  { category: 'ביגוד', label: 'בוטיק אופנה מודרני', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
  { category: 'קוסמטיקה', label: 'קאונטר טיפוח יוקרתי', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80' },
  { category: 'פרחים', label: 'חנות פרחים עם תצוגה', img: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=600&q=80' },
  { category: 'סופרמרקט', label: 'מחלקת טרי מעוצבת', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80' },
  { category: 'ביגוד', label: 'חנות נעליים פרימיום', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80' },
  { category: 'ילדים', label: 'חנות ילדים צבעונית', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80' },
  { category: 'קוסמטיקה', label: 'ויטרינת טיפוח', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80' },
  { category: 'ביגוד', label: 'בוטיק בגדי ים', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
]

export default function InspirationCarousel() {
  const [active, setActive] = useState('הכל')
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -340 : 340, behavior: 'smooth' })
  }

  const filtered = active === 'הכל' ? items : items.filter(i => i.category === active)

  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--accent)' }}>השראה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--primary)' }}>השראה לחנות שלך</h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('r')} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:border-black" style={{ border: '1.5px solid var(--border)' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('l')} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:border-black" style={{ border: '1.5px solid var(--border)' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: active === tab ? 'var(--primary)' : 'white',
                color: active === tab ? 'white' : 'var(--text-muted)',
                border: `1.5px solid ${active === tab ? 'var(--primary)' : 'var(--border)'}`,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filtered.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="group relative rounded-2xl overflow-hidden shrink-0 cursor-pointer"
              style={{ width: '280px', height: '340px', scrollSnapAlign: 'start' }}
            >
              <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(0,0,0,0.35)' }} />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div
                  className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-2"
                  style={{ background: 'rgba(199,154,75,0.9)', color: 'white' }}
                >
                  {item.category}
                </div>
                <div className="font-bold text-white text-sm">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
