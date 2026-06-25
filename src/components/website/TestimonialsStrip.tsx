const TESTIMONIALS = [
  {
    name: 'יוסי כהן',
    business: 'בוטיק מודה, תל אביב',
    text: 'מורלי ייעצה לנו את כל פריסת החנות. שלושה שבועות מהחתימה עד שהכל היה מוכן. המוצרים מעולים.',
    stars: 5,
  },
  {
    name: 'מיכל לוי',
    business: 'רשת בגדים, 6 סניפים',
    text: 'כבר 8 שנים שאנחנו עובדים עם מורלי. כל פתיחת סניף חדש — מורלי מלווה אותנו מתחילתה ועד סופה.',
    stars: 5,
  },
  {
    name: 'אבי נחום',
    business: 'בית מרקחת, ראשון לציון',
    text: 'המדפים שהזמנו החזיקו מעמד כבר 5 שנים בלי שום בעיה. שירות לאחר מכירה מצוין.',
    stars: 5,
  },
  {
    name: 'שרה אברהם',
    business: 'חנות מתנות, ירושלים',
    text: 'הגיעו עם תכנית מדויקת לחנות שלי. הצעת המחיר הייתה הוגנת וההתקנה הייתה מקצועית.',
    stars: 5,
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ color: 'var(--accent)', fontSize: '14px' }}>★</span>
      ))}
    </div>
  )
}

export default function TestimonialsStrip() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--muted, #f8f7f5)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--accent)' }}>לקוחות</div>
          <h2 className="font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--primary)', letterSpacing: '-0.03em' }}>
            1,200+ חנויות שבחרו במורלי
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white"
              style={{ border: '1px solid var(--border)' }}
            >
              <Stars n={t.stars} />
              <p className="mt-4 mb-5 text-sm leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-black text-sm" style={{ color: 'var(--primary)' }}>{t.name}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.business}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
