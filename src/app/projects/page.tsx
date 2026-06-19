import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const projects = [
  {
    slug: 'fashion-store-tel-aviv',
    title: 'רשת ביגוד פרימיום',
    type: 'Fashion Retail',
    location: 'תל אביב',
    size: '5 סניפים · 280–420 מ״ר',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85',
    desc: 'שדרוג מערכות התצוגה בכל רשת של 5 סניפים תוך יצירת עקביות ויזואלית מלאה.',
  },
  {
    slug: 'beauty-store-herzliya',
    title: 'בוטיק קוסמטיקה',
    type: 'Beauty & Cosmetics',
    location: 'הרצליה פיתוח',
    size: 'חנות בודדת · 90 מ״ר',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=85',
    desc: 'עיצוב סביבת תצוגה יוקרתית שמשקפת את רמת המוצרים ומייצרת חוויית קנייה בלתי נשכחת.',
  },
  {
    slug: 'pharmacy-chain',
    title: 'רשת פארמה ארצית',
    type: 'Pharmacy Chain',
    location: 'ירושלים · חיפה · באר שבע ועוד',
    size: '12 סניפים · תקינה מאוחדת',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=900&q=85',
    desc: 'פריסה ב-12 סניפים עם תקינה אחידה תוך 8 שבועות, לאחר מיזוג שתי רשתות.',
  },
]

export const metadata = {
  title: 'פרויקטים | MORALI — Retail Environments',
  description: 'פרויקטי סביבות מכירה שביצענו — רשתות ביגוד, בוטיקים, פארמה ועוד',
}

export default function ProjectsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>
              תיק עבודות
            </div>
            <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              פרויקטים<br />
              <span style={{ color: 'var(--accent)' }}>שביצענו</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', maxWidth: '460px', lineHeight: 1.75 }}>
              כל פרויקט מתחיל בהקשבה ומסתיים בחנות שנראית ומוכרת טוב יותר.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {projects.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className={`group relative overflow-hidden rounded-3xl ${i === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}`}
                  style={{ height: i === 0 ? '520px' : '340px' }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105"
                    style={{ transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--accent)' }}>{p.type}</div>
                    <h2 className="text-white font-black leading-tight mb-2" style={{ fontSize: i === 0 ? '1.8rem' : '1.3rem' }}>{p.title}</h2>
                    <p className="text-sm mb-4 max-w-sm" style={{ color: 'rgba(255,255,255,0.6)', display: i === 0 ? 'block' : 'none' }}>{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.location} · {p.year}</span>
                      <span className="flex items-center gap-1.5 text-xs font-bold transition-all duration-300 group-hover:gap-3" style={{ color: 'var(--accent)' }}>
                        לפרויקט
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Second row: remaining cards */}
              {projects.slice(1).map((p) => (
                <Link
                  key={`${p.slug}-row2`}
                  href={`/projects/${p.slug}`}
                  className="group relative overflow-hidden rounded-3xl lg:hidden"
                  style={{ height: '300px' }}
                >
                  {/* Already shown above on desktop — only visible on mobile */}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: 'var(--muted)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>הפרויקט הבא</div>
            <h2 className="section-title mb-5">יכול להיות שלכם</h2>
            <p className="section-subtitle mb-10">מתכננים שדרוג לחנות או פתיחת סניף חדש? נשמח לשמוע.</p>
            <a href="https://wa.me/972500000000" className="btn-gold">
              דברו איתנו
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
