import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

export const metadata = {
  title: 'מרכז ידע | MORALI — Retail Environments',
  description: 'מדריכים, טיפים ותובנות לתכנון חנות שמוכרת יותר',
}

const articles = [
  {
    slug: 'customer-path',
    tag: 'תכנון מסחרי',
    title: 'איך מסלול לקוח נכון מגדיל מכירות',
    excerpt: 'מסלול הלקוח בחנות הוא אחד הגורמים המשפיעים ביותר על שיעורי רכישה. כך בונים אותו נכון.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85',
    read: '5 דקות',
  },
  {
    slug: 'shelving-vs-slatwall',
    tag: 'בחירת מתקנים',
    title: 'מדפים לעומת קירות מחורצים — מה מתאים לחנות שלך',
    excerpt: 'השוואה מקצועית בין שיטות התצוגה הנפוצות ביותר בקמעונאות ישראלית.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    read: '4 דקות',
  },
  {
    slug: 'common-mistakes',
    tag: 'הגדלת מכירות',
    title: '5 טעויות נפוצות בעיצוב חנות שמרחיקות לקוחות',
    excerpt: 'מניסיוננו בהקמת מאות חנויות — הטעויות שחוזרות על עצמן ואיך להימנע מהן.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85',
    read: '6 דקות',
  },
  {
    slug: 'lighting-display',
    tag: 'תאורה ועיצוב',
    title: 'תאורה נכונה — הנשק הסודי של חנויות מצליחות',
    excerpt: 'תאורה משפיעה על תחושת היוקרה, על זמן השהייה של הלקוח ועל החלטות הקנייה.',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=85',
    read: '4 דקות',
  },
  {
    slug: 'window-display',
    tag: 'ויטרינה',
    title: 'איך לבנות ויטרינה שמושכת לקוחות מהרחוב',
    excerpt: 'הויטרינה היא הפרסומת החינמית הכי טובה שיש. כל מה שצריך לדעת כדי לנצל אותה נכון.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85',
    read: '5 דקות',
  },
  {
    slug: 'mannequin-styling',
    tag: 'בובות ראווה',
    title: 'איך להלביש בובות ראווה כדי למכור יותר',
    excerpt: 'בובת ראווה מסטיילת נכון יכולה להכפיל את מכירות הפריט שהיא מציגה. המדריך המלא.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85',
    read: '3 דקות',
  },
]

export default function KnowledgePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="py-20 lg:py-28" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>מרכז ידע</div>
            <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              תכנון חנות<br /><span style={{ color: 'var(--accent)' }}>שמוכרת יותר</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', maxWidth: '440px', lineHeight: 1.75 }}>
              מדריכים, השוואות ותובנות מהשטח — הכל בחינם.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/knowledge/${a.slug}`}
                  className="group rounded-3xl overflow-hidden"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <div className="overflow-hidden" style={{ height: '220px' }}>
                    <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105" style={{ transition: 'transform 0.7s ease' }} />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>{a.tag}</span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.read} קריאה</span>
                    </div>
                    <h2 className="font-black text-lg leading-snug mb-3" style={{ color: 'var(--foreground)' }}>{a.title}</h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{a.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: 'var(--accent)' }}>
                      קראו עוד <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
