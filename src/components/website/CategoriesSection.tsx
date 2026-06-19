import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const cats = [
  { name: 'מערכות תלייה', desc: 'פתרונות תלייה לחנויות ביגוד ואביזרים', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', href: '/categories/hanging' },
  { name: 'בובות ראווה', desc: 'בובות ראווה לכל סוגי הביגוד', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80', href: '/categories/mannequins' },
  { name: 'מידוף לחנויות', desc: 'מדפים מקצועיים לכל שימוש קמעונאי', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&q=80', href: '/categories/shelving' },
  { name: 'קירות מחורצים', desc: 'מערכות קיר גמישות לכל חנות', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=80', href: '/categories/slatwall' },
  { name: 'דלפקים', desc: 'דלפקי קופה, שירות ותצוגה', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', href: '/categories/counters' },
  { name: 'קולבים ואביזרים', desc: 'קולבים, ווים, ואביזרי תצוגה', img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=800&q=80', href: '/categories/hangers' },
]

export default function CategoriesSection() {
  return (
    <section className="py-24 lg:py-36" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
              <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
              קטלוג מוצרים
            </div>
            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', color: 'var(--foreground)' }}>
              מה אנחנו מספקים
            </h2>
          </div>
          <Link href="/categories" className="hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60 shrink-0" style={{ color: 'var(--accent)' }}>
            כל הקטגוריות <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Row 1: 2-wide + 2-normal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <Link href={cats[0].href} className="group relative overflow-hidden rounded-2xl col-span-2" style={{ height: '320px' }}>
            <img src={cats[0].img} alt={cats[0].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
            <div className="absolute bottom-0 p-7">
              <h3 className="text-xl font-black text-white mb-1">{cats[0].name}</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{cats[0].desc}</p>
            </div>
          </Link>
          {[cats[1], cats[2]].map(cat => (
            <Link key={cat.name} href={cat.href} className="group relative overflow-hidden rounded-2xl" style={{ height: '320px' }}>
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-black text-white mb-1">{cat.name}</h3>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: 2-normal + 2-wide */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[cats[3], cats[4]].map(cat => (
            <Link key={cat.name} href={cat.href} className="group relative overflow-hidden rounded-2xl" style={{ height: '260px' }}>
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-black text-white mb-1">{cat.name}</h3>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
          <Link href={cats[5].href} className="group relative overflow-hidden rounded-2xl col-span-2" style={{ height: '260px' }}>
            <img src={cats[5].img} alt={cats[5].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
            <div className="absolute bottom-0 p-7">
              <h3 className="text-xl font-black text-white mb-1">{cats[5].name}</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{cats[5].desc}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
