import Link from 'next/link'

export default function FeaturedProject() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="gold-label mb-2">פרויקט מומלץ</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Image — magazine spread */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ height: 'clamp(320px, 50vw, 580px)', background: '#f0ece6' }}
            >
              <img
                src="/morali/IMG_4098.jpg"
                alt="פרויקט חנות אופנה"
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-black"
                style={{ background: 'rgba(255,255,255,0.95)', color: 'var(--primary)', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                פרויקט 2024
              </div>
            </div>
            {/* Floating small image */}
            <div
              className="absolute -bottom-6 -left-6 hidden lg:block overflow-hidden rounded-2xl shadow-2xl"
              style={{ width: '180px', height: '140px', border: '4px solid white' }}
            >
              <img src="/morali/IMG_4100.jpg" alt="פרטים" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 lg:pr-4">
            <div className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--text-muted)' }}>
              חנות אופנה · תל אביב
            </div>
            <h2
              className="font-black leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--primary)', letterSpacing: '-0.035em' }}
            >
              כשהמתקנים הנכונים משנים הכל
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)', maxWidth: '36ch' }}>
              לקוח פנה אלינו עם חנות אופנה ריקה. תוך 3 ימים הכנסנו מתקנים, רלסים, בובות ראווה ומידוף — והחנות הפכה למרחב מכירה מרשים.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { n: '3', l: 'ימי התקנה' },
                { n: '40+', l: 'מתקנים' },
                { n: '120%', l: 'עלייה במכירות' },
              ].map(s => (
                <div key={s.n} className="text-center p-4 rounded-2xl" style={{ background: '#f8f7f5', border: '1px solid var(--border)' }}>
                  <div className="font-black text-xl mb-1" style={{ color: 'var(--accent)', letterSpacing: '-0.03em' }}>{s.n}</div>
                  <div className="text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>{s.l}</div>
                </div>
              ))}
            </div>

            <Link href="/categories" className="btn-gold" style={{ padding: '14px 32px', borderRadius: '999px' }}>
              צפו בעוד פרויקטים
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
