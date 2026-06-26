const PHOTOS = [
  { src: '/morali/IMG_4098.jpg', h: 380 },
  { src: '/morali/IMG_4104.jpg', h: 260 },
  { src: '/morali/IMG_4132.jpg', h: 260 },
  { src: '/morali/IMG_4096.jpg', h: 380 },
  { src: '/morali/IMG_4100.jpg', h: 300 },
  { src: '/morali/IMG_4120.jpg', h: 300 },
  { src: '/morali/IMG_4133.jpg', h: 260 },
  { src: '/morali/IMG_4112.jpg', h: 340 },
  { src: '/morali/IMG_4108.jpg', h: 260 },
]

export default function InspirationGrid() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'white' }}>

      {/* Header inside max-width */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] font-black tracking-[0.35em] uppercase mb-3" style={{ color: '#c79a4b' }}>
              גלריית השראה
            </div>
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', color: '#0a0a0a', letterSpacing: '-0.04em' }}>
              חנויות שציידנו
            </h2>
          </div>
          <p className="hidden sm:block text-sm" style={{ color: '#999', maxWidth: '28ch', textAlign: 'right' }}>
            כל תמונה היא חנות אמיתית.<br />ייתכן שהחנות הבאה היא שלכם.
          </p>
        </div>
      </div>

      {/* Full-bleed masonry */}
      <div className="px-3 lg:px-6">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden mb-3 break-inside-avoid"
              style={{ borderRadius: '16px', background: '#f0ede8' }}
            >
              <img
                src={p.src}
                alt=""
                className="w-full object-cover block transition-transform duration-700 group-hover:scale-105"
                style={{ height: `${p.h}px` }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'rgba(0,0,0,0.1)' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-12 text-center">
        <a
          href="https://wa.me/972505559491?text=שלום, אני מעוניין לדון בפרויקט חנות חדשה"
          className="inline-flex items-center gap-2 text-sm font-bold pb-1"
          style={{ color: '#0a0a0a', borderBottom: '1.5px solid #0a0a0a' }}
        >
          שוחח איתנו על הפרויקט שלך →
        </a>
      </div>
    </section>
  )
}
