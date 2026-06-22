'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'

const solutions = [
  { label: 'חנויות בגדים', desc: 'רלסים, בובות ראווה, מידוף ופתרונות מלאים', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80' },
  { label: 'חנויות נעליים', desc: 'מדפי תצוגה, אריזות ופתרונות ספציפיים לנעליים', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&q=80' },
  { label: 'חנויות ילדים', desc: 'עיצוב צבעוני, מדפים בגובה ילדים, תצוגה מושכת', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=700&q=80' },
  { label: 'קוסמטיקה', desc: 'ויטרינות מוארות, מדפי אקריליק, תצוגה יוקרתית', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=80' },
  { label: 'סופרמרקטים', desc: 'מדפי מתכת, עגלות, תצוגות מחלקה מלאות', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=700&q=80' },
  { label: 'חנויות פרחים', desc: 'מדפי רשת, ויטרינות קירור, תצוגה רומנטית', img: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=700&q=80' },
  { label: 'פארם ובריאות', desc: 'ויטרינות מוגנות, מדפי סדר, תאורה מקצועית', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=700&q=80' },
  { label: 'תכשיטים', desc: 'ויטרינות זכוכית, תאורה ממוקדת, אבטחה בסטייל', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=80' },
]

export default function SolutionsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--accent)' }}>לפי עסק</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--primary)' }}>פתרונות לפי סוג עסק</h2>
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
          {solutions.map((s) => (
            <Link
              key={s.label}
              href="/solutions"
              className="group relative rounded-2xl overflow-hidden shrink-0 flex flex-col"
              style={{ width: '300px', height: '340px', scrollSnapAlign: 'start' }}
            >
              <img src={s.img} alt={s.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)' }} />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-black text-white text-lg mb-1">{s.label}</h3>
                <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                  פתרונות לעסק שלכם
                  <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
