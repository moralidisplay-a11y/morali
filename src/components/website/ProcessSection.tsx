const steps = [
  {
    num: '01',
    title: 'אפיון החנות',
    body: 'מיפוי מלא של הצרכים העסקיים, קהל היעד, מסלול הלקוח, ואתגרי התצוגה הקיימים. לא מוכרים פתרון לפני שמבינים את הבעיה.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80',
  },
  {
    num: '02',
    title: 'תכנון מסחרי',
    body: 'עיצוב פריסת החנות, מסלול לקוח, תאורה, ואזורי הדגשה — הכל מחושב כדי למקסם זמן שהייה ושיעורי המרה.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
  {
    num: '03',
    title: 'בחירת מתקנים',
    body: 'בחירת מערכות תצוגה, מדפים, ויטרינות ומתקנים המתאימים לתחום, לשטח, ולאסתטיקה של המותג.',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=700&q=80',
  },
  {
    num: '04',
    title: 'ייצור והתאמה',
    body: 'ייצור המתקנים לפי המידות והמפרט המדויק, כולל התאמות צבע, גימור, וחומרים לפי הדרישה.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
  },
  {
    num: '05',
    title: 'התקנה מלאה',
    body: 'צוות טכני מיומן מבצע התקנה מלאה עם לוח זמנים מדויק, מינימום הפרעה לפעילות, ומסירה מוכנה לפתיחה.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-36" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-xl mb-20">
          <div
            className="inline-flex items-center gap-2 mb-5 text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
            תהליך העבודה
          </div>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', color: 'var(--foreground)' }}
          >
            מהרעיון
            <br />
            לחנות שפועלת
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Text side */}
              <div
                className={`py-12 lg:py-16 flex items-center ${i % 2 === 0 ? 'lg:pr-0 lg:pl-16' : 'lg:order-2 lg:pr-16 lg:pl-0'}`}
              >
                <div>
                  <span
                    className="font-black mb-4 block"
                    style={{ fontSize: '4rem', lineHeight: 1, color: 'rgba(0,0,0,0.07)', letterSpacing: '-0.03em' }}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-black mb-4" style={{ color: 'var(--foreground)' }}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: '420px' }}>
                    {step.body}
                  </p>
                </div>
              </div>

              {/* Image side */}
              <div
                className={`relative overflow-hidden ${i % 2 === 0 ? '' : 'lg:order-1'}`}
                style={{ height: '320px' }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(0,0,0,0.08)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
