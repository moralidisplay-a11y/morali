import Link from 'next/link'

const INDUSTRIES = [
  { icon: '👗', label: 'חנויות בגדים', href: '/categories/hanging', bg: '#FFF5F5' },
  { icon: '💄', label: 'קוסמטיקה', href: '/categories/shelving', bg: '#FFF5EE' },
  { icon: '🛒', label: 'סופרמרקט', href: '/categories/shelving', bg: '#F0FFF4' },
  { icon: '💍', label: 'תכשיטים', href: '/categories/counters', bg: '#FFFFF0' },
  { icon: '🎁', label: 'חנויות מתנות', href: '/categories/stands', bg: '#FFF0FF' },
  { icon: '💊', label: 'בית מרקחת', href: '/categories/shelving', bg: '#F0F8FF' },
  { icon: '👟', label: 'נעליים', href: '/categories/stands', bg: '#FFF8F0' },
  { icon: '📚', label: 'ספרים וניירות', href: '/categories/shelving', bg: '#F5F5FF' },
]

export default function ShopByIndustry() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-14">
          <div className="gold-label justify-center mb-3">לפי ענף</div>
          <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--primary)', letterSpacing: '-0.035em' }}>
            פתרונות לכל סוג עסק
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)', maxWidth: '36ch', margin: '12px auto 0' }}>
            בחרו את הענף שלכם וגלו את הפתרונות המתאימים ביותר
          </p>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.label}
              href={ind.href}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: ind.bg, border: '1px solid transparent' }}
            >
              <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                {ind.icon}
              </div>
              <span className="text-xs font-bold text-center leading-tight" style={{ color: 'var(--primary)' }}>
                {ind.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
