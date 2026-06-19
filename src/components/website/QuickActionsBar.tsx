import Link from 'next/link'

const actions = [
  { emoji: '🧠', label: 'תכנון חנות AI',    href: '#ai-planner',    desc: 'קבל רעיון ראשוני תוך שניות' },
  { emoji: '📍', label: 'פרויקטים בארץ',    href: '/projects',      desc: 'ראה מה בנינו ברחבי ישראל' },
  { emoji: '📦', label: 'קטלוג מוצרים',     href: '/products',      desc: 'עיין בכל מגוון המוצרים' },
  { emoji: '🎨', label: 'גלריית השראה',     href: '/inspiration',   desc: 'רעיונות לעיצוב החנות' },
  { emoji: '💬', label: 'ייעוץ מקצועי',     href: '/contact',       desc: 'דבר עם מומחה שלנו חינם' },
]

export default function QuickActionsBar() {
  return (
    <section className="py-10" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {actions.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="card-hover group bg-white rounded-2xl p-5 border flex flex-col items-center text-center gap-2"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="text-3xl w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: 'var(--muted)' }}
              >
                {a.emoji}
              </div>
              <div className="font-bold text-sm">{a.label}</div>
              <div className="text-xs leading-tight" style={{ color: 'var(--text-muted)' }}>{a.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
