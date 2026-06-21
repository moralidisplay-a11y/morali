import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const types = [
  { label: 'חנויות בגדים', href: '/solutions', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
  { label: 'חנויות נעליים', href: '/solutions', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80' },
  { label: 'חנויות ילדים', href: '/solutions', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80' },
  { label: 'קוסמטיקה', href: '/solutions', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80' },
  { label: 'סופרמרקטים', href: '/solutions', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80' },
  { label: 'חנויות פרחים', href: '/solutions', img: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=600&q=80' },
]

export default function SolutionsByType() {
  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--accent)' }} />
              לפי סוג עסק
            </div>
            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--primary)' }}>
              פתרונות לכל<br />
              <span style={{ color: 'var(--accent)' }}>סוג חנות</span>
            </h2>
          </div>
          <Link href="/solutions" className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60 shrink-0" style={{ color: 'var(--text-muted)' }}>
            כל הפתרונות
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {types.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="group relative overflow-hidden rounded-2xl"
              style={{ height: '200px' }}
            >
              <img
                src={t.img}
                alt={t.label}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)', transition: 'background 0.4s' }}
              />
              <div className="absolute inset-0 flex items-end p-5 group-hover:bg-black/10 transition-colors">
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-white text-base">{t.label}</span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{ background: 'rgba(199,154,75,0)', border: '1.5px solid rgba(199,154,75,0.5)' }}
                  >
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180 text-white opacity-70" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
