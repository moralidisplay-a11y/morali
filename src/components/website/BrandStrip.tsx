export default function BrandStrip() {
  return (
    <section className="py-16 lg:py-24" style={{ background: 'white', borderBottom: '1px solid #f0ede8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Statement */}
          <div>
            <p className="font-black leading-none mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', color: '#0a0a0a', letterSpacing: '-0.04em' }}>
              מצייד חנויות<br />
              <span style={{ color: '#c79a4b' }}>מאז 1993.</span>
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#888', maxWidth: '38ch' }}>
              מגוון של מעל 1,000 פתרונות תצוגה לחנויות אופנה, סופרמרקטים, בתי מרקחת וחנויות מתנות — כל מה שצריך להפוך חנות ריקה לחנות עובדת.
            </p>
          </div>

          {/* Numbers */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { n: '30+', l: 'שנות ניסיון' },
              { n: '1,200+', l: 'חנויות לקוחות' },
              { n: '1,000+', l: 'פריטים במלאי' },
            ].map(s => (
              <div key={s.n}>
                <div className="font-black leading-none mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#0a0a0a', letterSpacing: '-0.04em' }}>
                  {s.n}
                </div>
                <div className="text-xs font-medium" style={{ color: '#aaa' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
