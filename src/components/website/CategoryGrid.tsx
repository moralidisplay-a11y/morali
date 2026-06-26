'use client'

import Link from 'next/link'

const CATS = [
  { slug: 'shelving', name: 'מידוף לחנויות', nameEn: 'Store Shelving', count: '32+', img: '/morali/IMG_4132.jpg', span: 'col-span-2 row-span-2', h: '480px' },
  { slug: 'hanging', name: 'מערכות תלייה', nameEn: 'Hanging Systems', count: '24+', img: '/morali/IMG_4104.jpg', span: 'col-span-1 row-span-1', h: '230px' },
  { slug: 'mannequins', name: 'בובות ראווה', nameEn: 'Mannequins', count: '18+', img: '/morali/IMG_4096.jpg', span: 'col-span-1 row-span-1', h: '230px' },
  { slug: 'slatwall', name: 'קירות מחורצים', nameEn: 'Slatwall', count: '45+', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=85', span: 'col-span-1 row-span-1', h: '230px' },
  { slug: 'stands', name: 'סטנדים', nameEn: 'Stands', count: '28+', img: '/morali/IMG_4120.jpg', span: 'col-span-2 row-span-1', h: '230px' },
  { slug: 'hangers', name: 'קולבים ואביזרים', nameEn: 'Hangers', count: '120+', img: '/morali/IMG_4112.jpg', span: 'col-span-1 row-span-1', h: '230px' },
]

export default function CategoryGrid() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#faf9f7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="gold-label">קטגוריות מוצרים</div>
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--primary)', letterSpacing: '-0.035em' }}>
              כל מה שהחנות שלכם צריכה
            </h2>
          </div>
          <Link href="/categories" className="hidden sm:flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-50" style={{ color: 'var(--primary)' }}>
            כל הקטגוריות →
          </Link>
        </div>

        {/* Desktop: Pinterest asymmetric */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-3" style={{ height: '500px' }}>
          {CATS.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className={`group relative overflow-hidden rounded-2xl ${c.span}`}
              style={{ background: '#111', minHeight: '230px' }}
            >
              <img
                src={c.img}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ opacity: 0.78 }}
              />
              <div className="absolute inset-0 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.05) 60%)' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.12)' }} />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-1" style={{ color: 'rgba(199,154,75,0.8)' }}>{c.count} מוצרים · {c.nameEn}</div>
                <h3 className="font-black text-white leading-tight transition-colors group-hover:text-amber-100" style={{ fontSize: c.span.includes('col-span-2') ? '1.4rem' : '1rem' }}>
                  {c.name}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0" style={{ color: 'var(--accent)' }}>
                  צפה בקטגוריה
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: 2-col grid */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {CATS.map((c, i) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2' : ''}`}
              style={{ height: i === 0 ? '260px' : '180px', background: '#111' }}
            >
              <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ opacity: 0.78 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="text-[9px] font-bold tracking-widest uppercase mb-1" style={{ color: 'rgba(199,154,75,0.7)' }}>{c.count} מוצרים</div>
                <h3 className="font-black text-white text-sm">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 text-center lg:hidden">
          <Link href="/categories" className="text-sm font-bold" style={{ color: 'var(--primary)' }}>כל הקטגוריות →</Link>
        </div>
      </div>
    </section>
  )
}
