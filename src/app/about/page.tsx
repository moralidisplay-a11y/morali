import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

export const metadata = {
  title: 'אודות | MORALI — Retail Environments',
  description: 'הסיפור שלנו — מי אנחנו, מה מניע אותנו, ואיך אנחנו עובדים',
}

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=85"
            alt="MORALI"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(4,4,4,0.88) 0%, rgba(4,4,4,0.4) 60%, rgba(4,4,4,0.1) 100%)' }} />
          <div className="relative z-10 min-h-[60vh] flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16 pt-24">
              <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>אודות MORALI</div>
              <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
                לא מוכרים מדפים.<br />
                <span style={{ color: 'var(--accent)' }}>בונים חנויות.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>הסיפור שלנו</div>
                <h2 className="section-title mb-0">מה שמניע אותנו</h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 space-y-5" style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '1.05rem' }}>
                <p>
                  MORALI נוסדה מתוך תסכול — לראות חנויות עם מוצרים מעולים שפשוט לא נמכרים כי סביבת התצוגה לא עובדת עבורן.
                </p>
                <p>
                  אנחנו מאמינים שכל חנות יכולה להיראות טוב יותר ולמכור יותר — לא עם תקציב עצום, אלא עם תכנון נכון, מתקנים מתאימים, וביצוע מקצועי.
                </p>
                <p>
                  מתכננים, מייצרים ומתקינים בישראל. שירות ארצי, לרשתות ולחנויות בודדות כאחד.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--muted)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="section-title mb-14 text-center">איך אנחנו עובדים</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'הקשבה', desc: 'כל פרויקט מתחיל בהבנת הצרכים — מסלול הלקוח, סוג הסחורה, ומה לא עבד עד היום.' },
                { num: '02', title: 'תכנון', desc: 'הצעה ויזואלית עם תוכנית פריסה, רשימת מתקנים, ולוח זמנים — לפני שמזמינים כלום.' },
                { num: '03', title: 'ביצוע', desc: 'ייצור, אספקה, והתקנה — הכל מאותה גברת. אין ספקים שלישיים שמכניסים בלבול.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="bg-white rounded-3xl p-8" style={{ border: '1px solid var(--border)' }}>
                  <div className="font-black text-4xl mb-4" style={{ color: 'var(--accent)', opacity: 0.4, lineHeight: 1 }}>{num}</div>
                  <h3 className="font-black text-xl mb-3" style={{ color: 'var(--foreground)' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-white font-black mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              מתכננים חנות? נשמח לשמוע.
            </h2>
            <a href="https://wa.me/972505559491" className="btn-gold">
              שיחת WhatsApp
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
