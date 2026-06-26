const PHOTOS = [
  { src: '/morali/IMG_4098.jpg', h: 360 },
  { src: '/morali/IMG_4104.jpg', h: 240 },
  { src: '/morali/IMG_4132.jpg', h: 240 },
  { src: '/morali/IMG_4096.jpg', h: 360 },
  { src: '/morali/IMG_4100.jpg', h: 280 },
  { src: '/morali/IMG_4120.jpg', h: 280 },
  { src: '/morali/IMG_4133.jpg', h: 240 },
  { src: '/morali/IMG_4112.jpg', h: 320 },
  { src: '/morali/IMG_4108.jpg', h: 240 },
]

export default function InspirationGrid() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#f8f7f5' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-12">
          <div className="gold-label justify-center mb-3">גלריית השראה</div>
          <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--primary)', letterSpacing: '-0.035em' }}>
            פרויקטים מהשטח
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)', maxWidth: '36ch', margin: '10px auto 0' }}>
            כל תמונה היא חנות אמיתית שציידנו — ייתכן שהחנות הבאה היא שלכם
          </p>
        </div>

        {/* Masonry — no cards, just images */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl mb-3 break-inside-avoid"
              style={{ background: '#e8e4de' }}
            >
              <img
                src={p.src}
                alt={`השראה ${i + 1}`}
                className="w-full object-cover block transition-transform duration-700 group-hover:scale-105"
                style={{ height: `${p.h}px` }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'rgba(0,0,0,0.18)' }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/972505559491?text=שלום, אני מעוניין לדון בפרויקט חנות חדשה"
            className="btn-gold"
            style={{ padding: '14px 36px', borderRadius: '999px' }}
          >
            שוחח איתנו על הפרויקט שלך
          </a>
        </div>
      </div>
    </section>
  )
}
