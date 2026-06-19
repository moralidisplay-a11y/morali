const cases = [
  {
    index: '01',
    type: 'רשת ביגוד',
    location: 'תל אביב',
    size: '5 סניפים · 280–420 מ״ר',
    industry: 'Fashion Retail',
    goal: 'שדרוג מערכות תצוגה בכל הרשת תוך שמירה על זהות אחידה בין הסניפים.',
    approach: 'מיפוי מלא של כל סניף, תכנון פריסה חדשה שמתאימה לשטח הייחודי של כל מיקום, בחירת מתקנים אחידים עם אפשרות גמישות מקומית.',
    execution: 'ייצור מרוכז, התקנה שלב-שלב בסניפים פעילים עם הפרעה מינימלית לפעילות.',
    outcome: 'כל 5 הסניפים הושלמו בפרק זמן של 6 שבועות. המותג קיבל עקביות ויזואלית מלאה לראשונה.',
  },
  {
    index: '02',
    type: 'פארמה רשת ארצית',
    location: 'ירושלים, חיפה, באר שבע ועוד',
    size: '12 סניפים · תקינה מאוחדת',
    industry: 'Pharmacy Chain',
    goal: 'יצירת חוויה אחידה בכל נקודות המכירה של הרשת לאחר מיזוג עם רשת אחרת.',
    approach: 'פיתוח מפרט תצוגה אחיד שמתאים לשני סוגי הסניפים הקיימים, כולל מידוף, שילוט, ודלפקי שירות.',
    execution: 'גל פריסה ראשון ב-4 סניפים פיילוט, אישור הנהלה, ואז פריסה מלאה תוך 8 שבועות.',
    outcome: 'אחידות ויזואלית מלאה. הנהלת הרשת דיווחה על שיפור בחוויית הלקוח בסקרים פנימיים.',
  },
  {
    index: '03',
    type: 'בוטיק תכשיטים',
    location: 'הרצליה פיתוח',
    size: 'חנות בודדת · 75 מ״ר',
    industry: 'Jewelry & Luxury',
    goal: 'עיצוב סביבת תצוגה שתשקף את רמת המחיר של המוצרים ותיצור חוויה יוקרתית.',
    approach: 'ויטרינות תצוגה בהתאמה אישית מלאה, תאורת LED ייעודית לתכשיטים, פריסה שמנחה את הלקוח דרך קולקציות שונות.',
    execution: 'ייצור ב-6 שבועות, התקנה בסוף שבוע אחד לפני פתיחה מחדש.',
    outcome: 'החנות פתחה מחדש עם תור ביום הראשון. הבעלים פתח סניף שני תוך שנה.',
  },
]

export default function ClientStoriesSection() {
  return (
    <section className="py-24 lg:py-40" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
            <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
            תיקי עבודות
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--foreground)' }}>
            פרויקטים שביצענו
          </h2>
        </div>

        <div className="space-y-0">
          {cases.map((c) => (
            <div
              key={c.index}
              className="py-14 lg:py-20"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {/* Top row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
                <div className="lg:col-span-1">
                  <span className="font-black" style={{ fontSize: '2rem', color: 'rgba(0,0,0,0.1)', lineHeight: 1 }}>{c.index}</span>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--accent)' }}>{c.industry}</div>
                  <h3 className="text-2xl font-black mb-1" style={{ color: 'var(--foreground)' }}>{c.type}</h3>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{c.location}</div>
                  <div className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{c.size}</div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: '540px' }}>{c.goal}</p>
                </div>
              </div>

              {/* Detail row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:mr-[8.333%]">
                <div>
                  <div className="text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgba(0,0,0,0.3)' }}>גישה</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>{c.approach}</p>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgba(0,0,0,0.3)' }}>ביצוע</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>{c.execution}</p>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgba(0,0,0,0.3)' }}>תוצאה</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
