import Link from 'next/link'

const COLLECTIONS = [
  {
    id: 'fashion',
    title: 'פתיחת חנות בגדים',
    desc: 'מחזיקים, רלסים, בובות ראווה, דלפק קופה — כל מה שצריך לחנות אופנה מוצלחת.',
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=90',
    count: '18 מוצרים',
    href: '/categories/hanging',
    accent: '#C79A4B',
  },
  {
    id: 'pharmacy',
    title: 'פתיחת בית מרקחת',
    desc: 'מדפי קיר מודולריים, מחשוף מוצרים, דלפק שירות ועמדות תצוגה.',
    img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=90',
    count: '22 מוצרים',
    href: '/categories/shelving',
    accent: '#4B9AC7',
  },
  {
    id: 'jewelry',
    title: 'פתיחת חנות תכשיטים',
    desc: 'ויטרינות זכוכית, דלפקי תצוגה, עמדות תאורה ואביזרי חנות יוקרתיים.',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=90',
    count: '14 מוצרים',
    href: '/categories/counters',
    accent: '#C7A04B',
  },
]

export default function CollectionsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#f8f7f5' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="gold-label">קולקציות</div>
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--primary)', letterSpacing: '-0.035em' }}>
              פתרונות מוכנים לסוג העסק שלכם
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              href={col.href}
              className="group relative overflow-hidden rounded-3xl block"
              style={{ background: '#111' }}
            >
              <div className="relative overflow-hidden" style={{ height: '340px' }}>
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ opacity: 0.7 }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 55%)' }} />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-7">
                <div className="inline-flex items-center gap-2 text-[9px] font-black tracking-[0.3em] uppercase mb-3 px-2.5 py-1 rounded-full" style={{ background: col.accent + '25', color: col.accent, border: `1px solid ${col.accent}40` }}>
                  {col.count}
                </div>
                <h3 className="font-black text-white mb-2 transition-colors group-hover:text-amber-100" style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                  {col.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '28ch' }}>
                  {col.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-bold transition-all duration-300 translate-x-0 group-hover:-translate-x-1" style={{ color: col.accent }}>
                  צפה בקולקציה ←
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
