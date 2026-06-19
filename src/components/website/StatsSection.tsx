const stats = [
  { value: '500+', label: 'פרויקטים הושלמו' },
  { value: '300+', label: 'לקוחות מרוצים' },
  { value: '15+', label: 'שנות ניסיון' },
  { value: '98%', label: 'שביעות רצון לקוחות' },
]

export default function StatsSection() {
  return (
    <section className="py-12" style={{ background: 'var(--primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-1" style={{ color: 'var(--accent)' }}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
