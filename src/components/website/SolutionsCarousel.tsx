'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const solutions = [
  { label: 'חנויות בגדים', desc: 'רלסים, בובות ראווה ופתרונות תצוגה מלאים', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=90' },
  { label: 'חנויות נעליים', desc: 'מדפי תצוגה ייעודיים וסידור חכם', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=90' },
  { label: 'חנויות ילדים', desc: 'עיצוב צבעוני, מדפים בגובה מותאם', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=90' },
  { label: 'קוסמטיקה', desc: 'ויטרינות מוארות ומדפי אקריליק יוקרתיים', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=90' },
  { label: 'סופרמרקטים', desc: 'מדפי מתכת, עגלות וסידור מחלקות', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=90' },
  { label: 'חנויות פרחים', desc: 'מדפי רשת, ויטרינות קירור ותצוגה', img: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=800&q=90' },
  { label: 'פארם ובריאות', desc: 'מדפי סדר, ויטרינות מוגנות ותאורה', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&q=90' },
  { label: 'תכשיטים', desc: 'ויטרינות זכוכית ותאורה ממוקדת', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=90' },
]

export default function SolutionsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <section className="py-24 lg:py-36" style={{ background: 'var(--muted)' }}>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 flex items-end justify-between">
        <div>
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--accent)' }}>לפי סוג עסק</div>
          <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--primary)', letterSpacing: '-0.03em' }}>
            פתרון לכל
            <br />סוג חנות.
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button onClick={() => scroll('r')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-200" style={{ border: '1px solid var(--border)' }}>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button onClick={() => scroll('l')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-gray-200" style={{ border: '1px solid var(--border)' }}>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {solutions.map((s) => (
          <Link
            key={s.label}
            href="/solutions"
            className="group relative rounded-xl overflow-hidden shrink-0"
            style={{ width: '300px', height: '380px', scrollSnapAlign: 'start' }}
          >
            <img
              src={s.img}
              alt={s.label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
            />
            <style>{`.group:hover img { transform: scale(1.06); }`}</style>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />

            <div className="absolute bottom-0 inset-x-0 p-6">
              <h3 className="font-black text-white leading-tight mb-1.5" style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}>
                {s.label}
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {s.desc}
              </p>
              <div
                className="text-xs font-bold transition-all duration-300 group-hover:gap-2 flex items-center gap-1"
                style={{ color: 'var(--accent)' }}
              >
                לפתרונות לעסק שלכם →
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
