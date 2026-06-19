import { Users, MessageCircle, Award, Truck } from 'lucide-react'

const items = [
  { icon: Users,         title: '10,000+ עסקים בחרו בנו',    desc: 'ניסיון שמייצר תוצאות' },
  { icon: MessageCircle, title: 'ייעוץ מקצועי חינם',         desc: 'ליווי אישי בכל שלב' },
  { icon: Award,         title: 'איכות ללא פשרות',           desc: 'מוצרים ברמה הגבוהה ביותר' },
  { icon: Truck,         title: 'משלוחים לכל הארץ',          desc: 'מהיר, בטוח ומקצועי' },
]

export default function TrustStrip() {
  return (
    <section className="border-b" style={{ background: 'var(--background)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-x-reverse" style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}>
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 py-6 px-6 first:pr-0">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'var(--accent-bg)' }}
              >
                <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">{title}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
