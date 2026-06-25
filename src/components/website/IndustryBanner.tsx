import Link from 'next/link'

const INDUSTRIES = [
  {
    slug: 'fashion',
    name: 'חנויות אופנה',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=85',
  },
  {
    slug: 'pharmacy',
    name: 'בתי מרקחת',
    img: '/morali/IMG_4133.jpg',
  },
  {
    slug: 'supermarket',
    name: 'סופרמרקטים',
    img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=85',
  },
  {
    slug: 'gifts',
    name: 'חנויות מתנות',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&q=85',
  },
]

export default function IndustryBanner() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#0c0c0c' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.35em] uppercase mb-3" style={{ color: 'rgba(199,154,75,0.8)' }}>
            לפי סוג עסק
          </div>
          <h2 className="font-black text-white leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
            פתרון לכל סוג חנות
          </h2>
          <p className="mt-4 mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '40ch', lineHeight: 1.7, fontSize: '0.95rem' }}>
            מספקים מתקני תצוגה מותאמים לכל ענף — מחנויות אופנה ועד סופרמרקטים.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {INDUSTRIES.map(ind => (
            <Link
              key={ind.slug}
              href={`/solutions/${ind.slug}`}
              className="group relative rounded-2xl overflow-hidden"
              style={{ height: '220px', background: '#1a1a1a' }}
            >
              <img
                src={ind.img}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ opacity: 0.55 }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="font-black text-white text-sm">{ind.name}</h3>
                <div className="text-[11px] font-semibold mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'rgba(199,154,75,0.9)' }}>
                  ראה פתרונות →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, rgba(199,154,75,0.15) 0%, rgba(199,154,75,0.05) 100%)', border: '1px solid rgba(199,154,75,0.2)' }}
        >
          <div>
            <h3 className="font-black text-white text-2xl mb-2" style={{ letterSpacing: '-0.025em' }}>
              פותחים חנות חדשה?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              אנחנו מתכננים ומספקים את כל פתרונות התצוגה במקום אחד.
              <br />
              תכנון חינם, אספקה מהירה, התקנה מקצועית.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/972505559491"
              className="btn-gold whitespace-nowrap"
              style={{ fontSize: '0.875rem', padding: '13px 28px', borderRadius: '999px' }}
            >
              קבלו הצעת מחיר
            </a>
            <Link
              href="/categories"
              className="whitespace-nowrap px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
            >
              עיון בקטלוג
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
