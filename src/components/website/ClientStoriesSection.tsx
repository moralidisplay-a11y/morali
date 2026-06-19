const stories = [
  {
    client: 'רשת ביגוד | 5 סניפים | תל אביב',
    challenge: 'חנויות עם תנועה גבוהה אך שיעורי המרה נמוכים. לקוחות נכנסים, מסתכלים, ויוצאים מבלי לקנות.',
    solution: 'תכנון מחדש של מסלול הלקוח, החלפת כל מערכות התצוגה, הוספת אזורי הדגשה אסטרטגיים ותאורת מוצר ממוקדת.',
    result: 'עלייה של 74% במכירות תוך 60 יום מהפתיחה מחדש.',
    metric: '+74%',
    metricLabel: 'עלייה במכירות',
  },
  {
    client: 'רשת פארמה | 12 סניפים | ארצי',
    challenge: 'פריסה לא אחידה בין הסניפים שיצרה חוויה מבלבלת ללקוחות ופגעה במוניטין הרשת.',
    solution: 'תקינה אחידה לכל 12 הסניפים: פריסת מדפים, שילוט, תאורה, ודלפקי שירות — ביצוע תוך 8 שבועות.',
    result: 'שביעות רצון לקוחות עלתה ב-58%. 3 סניפים חדשים נפתחו עם אותה תקינה.',
    metric: '+58%',
    metricLabel: 'שביעות רצון',
  },
  {
    client: 'בוטיק תכשיטים | הרצליה פיתוח',
    challenge: 'חנות קטנה שלא הצליחה לבטא את רמת המחיר של המוצרים דרך עיצוב החלל.',
    solution: 'ויטרינות תצוגה בהתאמה אישית, תאורת LED ייעודית לתכשיטים, ופריסה שיוצרת תחושת בוטיק יוקרתי.',
    result: 'המחיר הממוצע לעסקה עלה ב-41%. הלקוחות מצלמים ומפנים אחרים.',
    metric: '+41%',
    metricLabel: 'עלייה בערך עסקה',
  },
]

export default function ClientStoriesSection() {
  return (
    <section className="py-24 lg:py-36" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-5 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
            <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
            סיפורי לקוחות
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', color: 'var(--foreground)' }}>
            תוצאות שמדברות
            <br />
            בשפה עסקית
          </h2>
        </div>

        <div className="space-y-0">
          {stories.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-12 lg:py-16"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {/* Metric */}
              <div className="lg:col-span-2 mb-6 lg:mb-0 flex items-start">
                <div>
                  <div
                    className="font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--accent)' }}
                  >
                    {s.metric}
                  </div>
                  <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                    {s.metricLabel}
                  </div>
                </div>
              </div>

              {/* Client */}
              <div className="lg:col-span-3 mb-6 lg:mb-0">
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>לקוח</div>
                <div className="text-base font-bold" style={{ color: 'var(--foreground)' }}>{s.client}</div>
              </div>

              {/* Challenge → Solution → Result */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>האתגר</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>{s.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>הפתרון</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>{s.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>התוצאה</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>{s.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
