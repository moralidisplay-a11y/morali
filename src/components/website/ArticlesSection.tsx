import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

const articles = [
  { id: '1', title: 'איך לתכנן חנות שמוכרת יותר',            category: 'תכנון חנות', readTime: '5 דקות', emoji: '🏪' },
  { id: '2', title: 'איך לבחור מדפים לחנות בגדים',           category: 'מדפים',      readTime: '4 דקות', emoji: '📚' },
  { id: '3', title: 'טעויות נפוצות בעיצוב חנויות',          category: 'עיצוב',      readTime: '6 דקות', emoji: '💡' },
  { id: '4', title: 'כמה עולה להקים חנות מעוצבת',           category: 'מימון',      readTime: '7 דקות', emoji: '💰' },
]

export default function ArticlesSection() {
  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <span className="gold-label">ידע מקצועי</span>
            <h2 className="section-title">מרכז ידע</h2>
          </div>
          <Link href="/articles" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--accent)' }}>
            לכל המאמרים <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/articles/${a.id}`}
              className="group bg-white rounded-2xl border overflow-hidden card-hover"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="h-40 flex items-center justify-center text-5xl"
                style={{ background: 'var(--muted-2)' }}
              >
                {a.emoji}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                  >
                    {a.category}
                  </span>
                  <span className="text-[11px] flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                    <Clock className="w-3 h-3" />{a.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-sm leading-snug group-hover:opacity-70 transition-opacity">{a.title}</h3>
                <div className="mt-3 text-xs font-semibold" style={{ color: 'var(--accent)' }}>לקריאה ←</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
