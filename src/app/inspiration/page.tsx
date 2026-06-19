import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const images = [
  { img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85', label: 'חנות ביגוד', span: 'col-span-2 row-span-2' },
  { img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=85', label: 'בוטיק' },
  { img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=85', label: 'קוסמטיקה' },
  { img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=85', label: 'פארמה' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', label: 'תלייה' },
  { img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=85', label: 'מדפים' },
  { img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85', label: 'דלפק', span: 'col-span-2' },
  { img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=85', label: 'ויטרינה' },
  { img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=600&q=85', label: 'אביזרים' },
]

export const metadata = {
  title: 'השראה | MORALI — Retail Environments',
  description: 'גלריית השראה לעיצוב חנויות וסביבות מכירה',
}

export default function InspirationPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="py-20 lg:py-28" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>גלריה</div>
            <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              <span style={{ color: 'var(--accent)' }}>השראה</span><br />לחנות שלכם
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', maxWidth: '440px', lineHeight: 1.75 }}>
              רעיונות, פתרונות, ועיצובים מהשטח.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
              {images.map((item, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-2xl ${item.span ?? ''}`}>
                  <img
                    src={item.img}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105"
                    style={{ transition: 'transform 0.7s ease' }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', transition: 'opacity 0.4s ease' }}>
                    <span className="text-white text-sm font-bold">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: 'var(--muted)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="section-title mb-5">אוהבים את מה שראיתם?</h2>
            <p className="section-subtitle mb-10">נשמח לתכנן משהו דומה — ובהתאמה מלאה לחנות שלכם.</p>
            <Link href="/quote" className="btn-gold">
              קבלו הצעת מחיר
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
