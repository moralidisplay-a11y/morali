'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  { title: 'רשת ביגוד פרימיום', city: 'תל אביב', type: 'Fashion Retail', detail: '5 סניפים · 280–420 מ״ר כל אחד', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=90', href: '/projects/fashion-store-tel-aviv' },
  { title: 'בוטיק קוסמטיקה', city: 'הרצליה פיתוח', type: 'Beauty & Cosmetics', detail: 'חנות אחת · 90 מ״ר', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&q=90', href: '/projects/beauty-store-herzliya' },
  { title: 'רשת פארמה', city: 'ירושלים', type: 'Pharmacy Chain', detail: '12 סניפים · תקינה אחידה', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1000&q=90', href: '/projects/pharmacy-chain' },
  { title: 'חנות טכנולוגיה', city: 'ראשון לציון', type: 'Tech Retail', detail: '350 מ״ר', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1000&q=90', href: '/projects' },
  { title: 'רשת נעליים', city: 'חיפה', type: 'Footwear Retail', detail: '8 סניפים', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1000&q=90', href: '/projects' },
  { title: 'בוטיק ילדים', city: 'נתניה', type: 'Kids Fashion', detail: '120 מ״ר', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1000&q=90', href: '/projects' },
]

export default function ProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'l' | 'r') => {
    ref.current?.scrollBy({ left: dir === 'l' ? -460 : 460, behavior: 'smooth' })
  }

  return (
    <section className="py-24 lg:py-40" style={{ background: '#080808' }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex items-end justify-between">
        <div>
          <div
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-2"
            style={{ color: 'rgba(199,154,75,0.6)' }}
          >
            <span className="w-6 h-px" style={{ background: 'rgba(199,154,75,0.4)' }} />
            עבודות נבחרות
          </div>
          <h2
            className="font-black text-white leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', letterSpacing: '-0.03em' }}
          >
            פרויקטים<br />
            <em className="font-black" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>שבנינו.</em>
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            חנויות שעיצבנו, ייצרנו והתקנו ברחבי הארץ
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="hidden sm:inline-flex text-xs font-semibold transition-opacity hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            כל הפרויקטים →
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('r')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('l')} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group relative rounded-xl overflow-hidden shrink-0"
            style={{ width: '420px', height: '520px', scrollSnapAlign: 'start' }}
          >
            <img
              src={p.img}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-900"
              style={{ transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
            {/* Hover image scale */}
            <style>{`.group:hover img { transform: scale(1.04); }`}</style>

            {/* Dark gradient */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.0) 80%)' }} />

            {/* Content */}
            <div className="absolute bottom-0 inset-x-0 p-8">
              <div
                className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {p.type}
              </div>
              <h3
                className="font-black text-white leading-tight mb-1"
                style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}
              >
                {p.title}
              </h3>
              <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {p.city} · {p.detail}
              </p>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold py-2.5 px-5 rounded-full transition-all group-hover:bg-white/15"
                style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.7)' }}
              >
                צפה בפרויקט →
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
