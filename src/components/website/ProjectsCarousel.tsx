'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'

const projects = [
  { title: 'רשת ביגוד פרימיום', city: 'תל אביב', type: 'Fashion Retail', detail: '5 סניפים · 280–420 מ״ר', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85', href: '/projects/fashion-store-tel-aviv' },
  { title: 'בוטיק קוסמטיקה', city: 'הרצליה פיתוח', type: 'Beauty & Cosmetics', detail: 'חנות אחת · 90 מ״ר', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=85', href: '/projects/beauty-store-herzliya' },
  { title: 'רשת פארמה', city: 'ירושלים', type: 'Pharmacy Chain', detail: '12 סניפים', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&q=85', href: '/projects/pharmacy-chain' },
  { title: 'חנות טכנולוגיה', city: 'ראשון לציון', type: 'Tech Retail', detail: '350 מ״ר', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=85', href: '/projects' },
  { title: 'רשת נעליים', city: 'חיפה', type: 'Footwear', detail: '8 סניפים', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=85', href: '/projects' },
  { title: 'בוטיק ילדים', city: 'נתניה', type: 'Kids Fashion', detail: '120 מ״ר', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=85', href: '/projects' },
]

export default function ProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -400 : 400, behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-24" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-2" style={{ color: 'rgba(199,154,75,0.7)' }}>
              <span className="w-5 h-px" style={{ background: 'rgba(199,154,75,0.5)' }} />
              עבודות נבחרות
            </div>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>פרויקטים נבחרים</h2>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>חנויות שעיצבנו, ייצרנו והתקנו ברחבי הארץ</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('r')} className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: 'white' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('l')} className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: 'white' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex gap-5 overflow-x-auto pb-2"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative rounded-2xl overflow-hidden shrink-0"
              style={{ width: '360px', height: '420px', scrollSnapAlign: 'start' }}
            >
              <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%)' }} />
              <div className="absolute bottom-0 inset-x-0 p-7">
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: 'var(--accent)' }}>{p.type}</div>
                <h3 className="font-black text-white text-xl mb-1">{p.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.city} · {p.detail}</p>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all group-hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
                >
                  צפה בפרויקט
                  <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3 rounded-full transition-all hover:bg-white/10" style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>
            לכל הפרויקטים
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  )
}
