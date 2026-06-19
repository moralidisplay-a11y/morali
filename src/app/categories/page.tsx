import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import { categories } from '@/lib/catalog'

export const metadata = {
  title: 'קטגוריות | MORALI — Retail Environments',
  description: 'מערכות תלייה, בובות ראווה, מידוף, קירות מחורצים ועוד — כל פתרונות התצוגה לחנות שלכם',
}

export default function CategoriesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>
              קטלוג מוצרים
            </div>
            <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              הכל לסביבת<br />
              <span style={{ color: 'var(--accent)' }}>התצוגה שלכם</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', maxWidth: '480px', lineHeight: 1.75 }}>
              {categories.length} קטגוריות, מאות מוצרים. כל מה שצריך כדי לבנות חנות שמוכרת.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="group relative overflow-hidden rounded-3xl"
                  style={{ border: '1px solid var(--border)' }}
                >
                  {/* Image */}
                  <div className="overflow-hidden" style={{ height: '260px' }}>
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                      style={{ transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', transition: 'opacity 0.4s ease' }}
                  />

                  {/* Content */}
                  <div className="p-7" style={{ background: 'white' }}>
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="font-black text-xl leading-tight" style={{ color: 'var(--foreground)' }}>{cat.name}</h2>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 mr-2" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>
                        {cat.count}+ מוצרים
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{cat.desc}</p>
                    <div className="flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-3" style={{ color: 'var(--accent)' }}>
                      צפו בקטגוריה
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: 'var(--muted)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>לא מצאתם מה שחיפשתם?</p>
            <h2 className="section-title mb-5">אנחנו מייצרים גם בהתאמה אישית</h2>
            <p className="section-subtitle mb-10">מוצרים מיוחדים, מידות שלא קיימות בקטלוג, גוונים לפי בחירה — דברו איתנו.</p>
            <a href="https://wa.me/972500000000" className="btn-gold">
              שלחו פרטים
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
