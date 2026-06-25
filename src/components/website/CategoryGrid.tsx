'use client'

import Link from 'next/link'

const CATS = [
  {
    slug: 'shelving',
    name: 'מידוף לחנויות',
    desc: '32 מוצרים',
    img: '/morali/IMG_4132.jpg',
    size: 'large',
  },
  {
    slug: 'hanging',
    name: 'מערכות תלייה',
    desc: '24 מוצרים',
    img: '/morali/IMG_4104.jpg',
    size: 'small',
  },
  {
    slug: 'mannequins',
    name: 'בובות ראווה',
    desc: '18 מוצרים',
    img: '/morali/IMG_4096.jpg',
    size: 'small',
  },
  {
    slug: 'slatwall',
    name: 'קירות מחורצים',
    desc: '45 מוצרים',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=85',
    size: 'medium',
  },
  {
    slug: 'counters',
    name: 'דלפקים וויטרינות',
    desc: '16 מוצרים',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85',
    size: 'medium',
  },
  {
    slug: 'stands',
    name: 'סטנדים ומחזיקים',
    desc: '28 מוצרים',
    img: '/morali/IMG_4120.jpg',
    size: 'medium',
  },
  {
    slug: 'hangers',
    name: 'קולבים ואביזרים',
    desc: '120+ מוצרים',
    img: '/morali/IMG_4112.jpg',
    size: 'medium',
  },
]

function CatCard({ cat, style }: { cat: typeof CATS[0]; style?: React.CSSProperties }) {
  return (
    <Link
      href={`/categories/${cat.slug}`}
      className="group relative overflow-hidden rounded-2xl block"
      style={{ ...style, background: '#111' }}
    >
      <img
        src={cat.img}
        alt={cat.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ opacity: 0.75 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 55%)' }}
      />
      <div className="absolute bottom-0 inset-x-0 p-5">
        <div className="text-[10px] font-bold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(199,154,75,0.8)' }}>
          {cat.desc}
        </div>
        <h3 className="font-black text-white text-base leading-tight group-hover:text-amber-200 transition-colors">
          {cat.name}
        </h3>
        <div className="mt-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
          צפה בקטגוריה →
        </div>
      </div>
    </Link>
  )
}

export default function CategoryGrid() {
  const [large, ...rest] = CATS
  const [sm1, sm2, ...mids] = rest

  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--accent)' }}>קטגוריות</div>
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--primary)', letterSpacing: '-0.03em' }}>
              כל מה שהחנות שלכם צריכה
            </h2>
          </div>
          <Link
            href="/categories"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-60"
            style={{ color: 'var(--primary)' }}
          >
            כל הקטגוריות →
          </Link>
        </div>

        {/* Top row: large + 2 small */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          <CatCard cat={large} style={{ height: '380px', gridColumn: '1 / span 1', gridRow: '1' }} />
          <div className="flex flex-col gap-3 lg:col-span-1 col-span-1">
            <CatCard cat={sm1} style={{ height: '182px' }} />
            <CatCard cat={sm2} style={{ height: '182px' }} />
          </div>
          {/* Desktop: show one more in a 3rd column */}
          <div className="hidden lg:block">
            <CatCard cat={mids[0]} style={{ height: '380px' }} />
          </div>
        </div>

        {/* Bottom row: remaining */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {mids.slice(1).map(c => (
            <CatCard key={c.slug} cat={c} style={{ height: '200px' }} />
          ))}
          {/* Mobile: show the one skipped above */}
          <div className="lg:hidden">
            <CatCard cat={mids[0]} style={{ height: '200px' }} />
          </div>
        </div>

        <div className="mt-5 sm:hidden text-center">
          <Link href="/categories" className="text-sm font-bold" style={{ color: 'var(--primary)' }}>
            כל הקטגוריות →
          </Link>
        </div>
      </div>
    </section>
  )
}
