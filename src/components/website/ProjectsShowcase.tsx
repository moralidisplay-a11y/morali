import Link from 'next/link'

const PROJECTS = [
  {
    name: 'חנות אופנה — תל אביב',
    industry: 'ביגוד ואופנה',
    products: 'מוטות תלייה · בובות ראווה · קירות מחורצים',
    img: '/morali/IMG_4104.jpg',
    size: 'large',
  },
  {
    name: 'רשת פארמה — סניפים ברחבי הארץ',
    industry: 'בית מרקחת',
    products: 'מדפי מרשם · ויטרינות · דלפקי שירות',
    img: '/morali/IMG_4132.jpg',
    size: 'small',
  },
  {
    name: 'חנות מתנות — קניון הזהב',
    industry: 'מתנות ועיצוב',
    products: 'סטנדים · קולבים · מחזיקי מוצרים',
    img: '/morali/IMG_4120.jpg',
    size: 'small',
  },
]

export default function ProjectsShowcase() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#f8f7f5' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-[10px] font-black tracking-[0.35em] uppercase mb-3" style={{ color: '#c79a4b' }}>
              פרויקטים שביצענו
            </div>
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', color: '#0a0a0a', letterSpacing: '-0.04em' }}>
              חנויות שציידנו
            </h2>
          </div>
          <Link href="/categories" className="hidden sm:block text-sm font-bold pb-1" style={{ color: '#0a0a0a', borderBottom: '1.5px solid #0a0a0a' }}>
            כל הפרויקטים →
          </Link>
        </div>

        {/* Layout: one large + two small */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Large */}
          <div className="group lg:col-span-7 relative overflow-hidden rounded-3xl" style={{ height: '500px', background: '#111' }}>
            <img
              src={PROJECTS[0].img}
              alt={PROJECTS[0].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ opacity: 0.8 }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)' }} />
            <div className="absolute bottom-0 inset-x-0 p-8">
              <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(199,154,75,0.8)' }}>
                {PROJECTS[0].industry}
              </div>
              <h3 className="font-black text-white text-xl mb-2" style={{ letterSpacing: '-0.02em' }}>
                {PROJECTS[0].name}
              </h3>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{PROJECTS[0].products}</p>
            </div>
          </div>

          {/* Two small stacked */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {PROJECTS.slice(1).map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-3xl flex-1" style={{ minHeight: '240px', background: '#111' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ opacity: 0.75 }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)' }} />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-1.5" style={{ color: 'rgba(199,154,75,0.8)' }}>
                    {p.industry}
                  </div>
                  <h3 className="font-black text-white text-base mb-1" style={{ letterSpacing: '-0.02em' }}>
                    {p.name}
                  </h3>
                  <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center lg:hidden">
          <Link href="/categories" className="text-sm font-bold" style={{ color: '#0a0a0a' }}>כל הפרויקטים →</Link>
        </div>
      </div>
    </section>
  )
}
