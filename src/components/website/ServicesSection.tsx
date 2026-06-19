import { UserCheck, Wrench, Zap, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: UserCheck,
    title: 'שירות אישי',
    desc: 'ליווי צמוד מהפגישה הראשונה ועד לפתיחת החנות. מנהל פרויקט אישי לכל לקוח.',
    stat: '97%',
    statLabel: 'שביעות רצון לקוחות',
  },
  {
    icon: Wrench,
    title: 'פתרונות בהתאמה אישית',
    desc: 'עיצוב, ייצור, אספקה והתקנה — הכל תחת קורת גג אחת. לא תיאום בין ספקים שונים.',
    stat: '100%',
    statLabel: 'ניהול פנים-ארגוני',
  },
  {
    icon: Zap,
    title: 'מלאי זמין מיידי',
    desc: 'מחסן של 3,000 מ״ר עם אלפי פריטים. אספקה תוך 48–72 שעות לכל רחבי הארץ.',
    stat: '48h',
    statLabel: 'זמן אספקה ממוצע',
  },
  {
    icon: Globe,
    title: 'יבוא וייצור עצמי',
    desc: 'ייצור ויבוא ישיר מיצרנים בינלאומיים. איכות אירופאית ואסיאתית במחיר תחרותי.',
    stat: '15+',
    statLabel: 'שנות ניסיון בייבוא',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="reveal">
            <span className="gold-label">למה מוראלי</span>
            <h2 className="section-title mt-2">
              למה עסקים בוחרים
              <span className="block" style={{ color: 'var(--accent)' }}>ב-MORALI?</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="hidden lg:flex items-center gap-1.5 text-sm font-semibold reveal"
            style={{ color: 'var(--accent)' }}
          >
            קראו עוד עלינו <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, stat, statLabel }, i) => (
            <div
              key={title}
              className="group relative bg-white rounded-3xl p-7 border card-hover overflow-hidden reveal"
              style={{ borderColor: 'var(--border)', animationDelay: `${i * 0.1}s`, transitionDelay: `${i * 0.08}s` }}
            >
              {/* Gold corner accent */}
              <div
                className="absolute top-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top left, rgba(199,154,75,0.12), transparent)' }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--accent-bg)' }}
              >
                <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              </div>

              {/* Stat */}
              <div className="mb-4">
                <div className="font-black text-3xl" style={{ color: 'var(--primary)' }}>{stat}</div>
                <div className="text-xs font-semibold uppercase tracking-wide mt-0.5" style={{ color: 'var(--accent)' }}>{statLabel}</div>
              </div>

              {/* Text */}
              <div className="font-bold text-base mb-2">{title}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</div>

              {/* Bottom gold line on hover */}
              <div
                className="absolute bottom-0 right-0 h-0.5 transition-all duration-500 group-hover:w-full w-0"
                style={{ background: 'linear-gradient(to left, var(--accent), transparent)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
