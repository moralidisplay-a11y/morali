import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const articles = [
  {
    tag: 'תכנון מסחרי',
    title: 'איך מסלול לקוח נכון מגדיל מכירות ב-40%',
    excerpt: 'מסלול הלקוח בחנות הוא אחד הגורמים המשפיעים ביותר על שיעורי רכישה. כך בונים אותו נכון.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    href: '/knowledge/customer-path',
    featured: true,
  },
  {
    tag: 'בחירת מתקנים',
    title: 'מדפים לעומת קירות מחורצים — מה מתאים לחנות שלך',
    excerpt: 'השוואה מקצועית בין שיטות התצוגה הנפוצות ביותר בקמעונאות ישראלית.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    href: '/knowledge/shelving-vs-slatwall',
    featured: false,
  },
  {
    tag: 'הגדלת מכירות',
    title: '5 טעויות נפוצות בעיצוב חנות שמרחיקות לקוחות',
    excerpt: 'מניסיוננו בהקמת אלפי חנויות — הטעויות שחוזרות על עצמן ואיך להימנע מהן.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    href: '/knowledge/common-mistakes',
    featured: false,
  },
]

export default function KnowledgeSection() {
  return (
    <section className="py-24 lg:py-36" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
              <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
              מרכז ידע
            </div>
            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', color: 'var(--foreground)' }}>
              תכנון חנות
              <br />
              שמוכרת יותר
            </h2>
          </div>
          <Link href="/knowledge" className="hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60 shrink-0" style={{ color: 'var(--accent)' }}>
            כל המאמרים <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured */}
          <Link href={articles[0].href} className="group md:col-span-2 flex flex-col overflow-hidden rounded-2xl bg-white" style={{ border: '1px solid var(--border)' }}>
            <div className="relative overflow-hidden" style={{ height: '280px' }}>
              <img src={articles[0].img} alt={articles[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
                {articles[0].tag}
              </span>
              <h3 className="text-xl font-black mb-3 leading-snug" style={{ color: 'var(--foreground)' }}>
                {articles[0].title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                {articles[0].excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>
                קריאה <ArrowLeft className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Side articles */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map(a => (
              <Link key={a.href} href={a.href} className="group flex flex-col overflow-hidden rounded-2xl bg-white flex-1" style={{ border: '1px solid var(--border)' }}>
                <div className="relative overflow-hidden" style={{ height: '160px' }}>
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
                    {a.tag}
                  </span>
                  <h3 className="text-base font-black mb-2 leading-snug" style={{ color: 'var(--foreground)' }}>
                    {a.title}
                  </h3>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold" style={{ color: 'var(--accent)' }}>
                    קריאה <ArrowLeft className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
