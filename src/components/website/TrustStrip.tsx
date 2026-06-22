const items = [
  { value: '10,000+', label: 'עסקים', sub: 'בחרו ב-MORALI' },
  { value: '8,500+', label: 'פרויקטים', sub: 'הושלמו בהצלחה' },
  { value: '15+', label: 'שנות', sub: 'ניסיון בשטח' },
  { value: '100%', label: 'כיסוי', sub: 'משלוחים לכל הארץ' },
]

export default function TrustStrip() {
  return (
    <section style={{ background: 'var(--background)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-x-reverse" style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}>
          {items.map((item) => (
            <div key={item.label} className="py-10 lg:py-16 px-8 lg:px-12 text-center">
              <div
                className="font-black leading-none mb-2"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: 'var(--primary)', letterSpacing: '-0.04em' }}
              >
                {item.value}
              </div>
              <div className="font-black text-sm uppercase tracking-widest mb-1" style={{ color: 'var(--primary)' }}>
                {item.label}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
