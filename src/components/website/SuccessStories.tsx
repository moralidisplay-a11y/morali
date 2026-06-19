import { Star, TrendingUp } from 'lucide-react'

const stories = [
  {
    name: 'דוד כהן',
    role: 'בעל רשת ביגוד, 5 סניפים',
    beforeMetric: '80 לקוחות/יום',
    afterMetric: '140 לקוחות/יום',
    growth: '+75%',
    text: 'מוראלי שינו לנו לגמרי את הגישה לתצוגה. כבר בחודש הראשון ראינו קפיצה בתנועה.',
    rating: 5,
    emoji: '👗',
  },
  {
    name: 'מיכל לוי',
    role: 'מנהלת תפעול, רשת פארמים',
    beforeMetric: 'מכירות 45K/חודש',
    afterMetric: 'מכירות 72K/חודש',
    growth: '+60%',
    text: 'פרויקט של 12 סניפים — אפס בעיות, לוח זמנים מדויק, תוצאות מעל הציפיות.',
    rating: 5,
    emoji: '💊',
  },
  {
    name: 'יוסי אברהם',
    role: 'בעל חנות תכשיטים',
    beforeMetric: 'המרה 2.1%',
    afterMetric: 'המרה 5.8%',
    growth: '+176%',
    text: 'הויטרינות שעיצבו לי הן произведение אמנות. הלקוחות עוצרים ומצלמים.',
    rating: 5,
    emoji: '💍',
  },
]

export default function SuccessStories() {
  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="gold-label">סיפורי הצלחה</span>
          <h2 className="section-title">מה הלקוחות שלנו אומרים</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-children reveal">
          {stories.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl border overflow-hidden card-hover" style={{ borderColor: 'var(--border)' }}>
              {/* Before / After bar */}
              <div className="grid grid-cols-2 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="p-4 border-l text-center" style={{ borderColor: 'var(--border)' }}>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>לפני</div>
                  <div className="font-bold text-sm">{s.beforeMetric}</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>אחרי</div>
                  <div className="font-bold text-sm">{s.afterMetric}</div>
                </div>
              </div>

              <div className="p-5">
                {/* Growth badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="flex items-center gap-1 text-sm font-black px-3 py-1 rounded-full"
                    style={{ background: '#dcfce7', color: '#16a34a' }}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    {s.growth}
                  </div>
                  <div className="text-3xl">{s.emoji}</div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: s.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--accent)' }} />
                  ))}
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                  "{s.text}"
                </p>

                <div className="border-t pt-3" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-bold text-sm">{s.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
