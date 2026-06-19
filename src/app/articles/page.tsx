import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const articles = [
  {
    slug: 'how-to-plan-retail-display',
    title: 'איך מתכננים סביבת תצוגה לחנות חדשה',
    category: 'תכנון',
    date: 'ינואר 2025',
    read: '5 דקות קריאה',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85',
    excerpt: 'מסלול הלקוח, זרימת ניווט, ואזורי דגש — כל מה שצריך לדעת לפני שמזמינים מדף אחד.',
  },
  {
    slug: 'mannequins-guide',
    title: 'המדריך לבחירת בובות ראווה: מה שאף ספק לא יגיד לכם',
    category: 'מדריכים',
    date: 'דצמבר 2024',
    read: '7 דקות קריאה',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85',
    excerpt: 'אבסטרקט מול ריאליסטי, פיברגלס מול פוליאוריתן — המדריך המלא לבחירה נכונה לפי סגנון החנות.',
  },
  {
    slug: 'slatwall-vs-shelving',
    title: 'סלאטוול או מדפים קלאסיים? ההשוואה שתחסוך לכם כסף',
    category: 'השוואות',
    date: 'נובמבר 2024',
    read: '4 דקות קריאה',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=85',
    excerpt: 'שני פתרונות, שני מחירים, שתי רמות גמישות — מה מתאים לאיזה סוג חנות.',
  },
]

export const metadata = {
  title: 'בלוג | MORALI — Retail Environments',
  description: 'מאמרים, מדריכים וטיפים לתכנון סביבת מכירה',
}

export default function ArticlesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="py-20 lg:py-28" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>בלוג ותוכן</div>
            <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              ידע<br /><span style={{ color: 'var(--accent)' }}>מהשטח</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', maxWidth: '440px', lineHeight: 1.75 }}>
              מדריכים, טיפים ותובנות מעולם עיצוב סביבות קמעונאות.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <article key={a.slug} className="group rounded-3xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                  <div className="overflow-hidden" style={{ height: '240px' }}>
                    <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105" style={{ transition: 'transform 0.7s ease' }} />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>{a.category}</span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.date} · {a.read}</span>
                    </div>
                    <h2 className="font-black text-lg leading-snug mb-3" style={{ color: 'var(--foreground)' }}>{a.title}</h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{a.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: 'var(--accent)' }}>
                      קראו עוד <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
