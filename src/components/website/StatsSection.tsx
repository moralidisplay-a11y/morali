const stats = [
  { value: '10,000+', label: 'עסקים בחרו בנו' },
  { value: '8,500+', label: 'פרויקטים הושלמו' },
  { value: '15+', label: 'שנות ניסיון' },
  { value: '100%', label: 'משלוחים לכל הארץ' },
]

export default function StatsSection() {
  return (
    <section className="py-10 lg:py-14" style={{ background: 'var(--primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-x-reverse" style={{ '--tw-divide-color': 'rgba(255,255,255,0.08)' } as React.CSSProperties}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:px-10">
              <div
                className="font-black mb-1"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--accent)', lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
