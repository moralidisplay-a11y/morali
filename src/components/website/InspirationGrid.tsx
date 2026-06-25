import Link from 'next/link'

const PHOTOS = [
  { src: '/morali/IMG_4098.jpg', label: 'חנות אופנה', size: 'tall' },
  { src: '/morali/IMG_4104.jpg', label: 'מערכות תלייה', size: 'normal' },
  { src: '/morali/IMG_4132.jpg', label: 'מידוף', size: 'normal' },
  { src: '/morali/IMG_4096.jpg', label: 'בובות ראווה', size: 'tall' },
  { src: '/morali/IMG_4100.jpg', label: 'פריסת חנות', size: 'normal' },
  { src: '/morali/IMG_4120.jpg', label: 'סטנדים', size: 'normal' },
  { src: '/morali/IMG_4133.jpg', label: 'מדפים מקצועיים', size: 'normal' },
  { src: '/morali/IMG_4112.jpg', label: 'קולבים', size: 'normal' },
  { src: '/morali/IMG_4108.jpg', label: 'אביזרי תצוגה', size: 'normal' },
]

export default function InspirationGrid() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--accent)' }}>
              השראה
            </div>
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--primary)', letterSpacing: '-0.03em' }}>
              פרויקטים מהשטח
            </h2>
          </div>
          <Link
            href="/inspiration"
            className="hidden sm:block text-sm font-bold transition-opacity hover:opacity-60"
            style={{ color: 'var(--primary)' }}
          >
            לגלריה המלאה →
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl break-inside-avoid"
              style={{ background: '#f5f5f5' }}
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: p.size === 'tall' ? '320px' : '200px', display: 'block' }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
              >
                <span className="text-white font-bold text-sm">{p.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/inspiration" className="text-sm font-bold" style={{ color: 'var(--primary)' }}>
            לגלריה המלאה →
          </Link>
        </div>
      </div>
    </section>
  )
}
