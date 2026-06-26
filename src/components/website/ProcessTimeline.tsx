'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'פנייה ראשונית',
    desc: 'יוצרים איתנו קשר בטלפון, WhatsApp או באתר. מספרים לנו על החנות, הגודל והצרכים שלכם.',
    icon: '💬',
  },
  {
    num: '02',
    title: 'ייעוץ והצעת מחיר',
    desc: 'המומחים שלנו מנתחים את הצרכים ומכינים הצעת מחיר מפורטת עם פתרונות מותאמים אישית.',
    icon: '📋',
  },
  {
    num: '03',
    title: 'הזמנה וייצור',
    desc: 'לאחר אישור הצעה — אנחנו מכינים את הסחורה, מארגנים את ההזמנה ומדווחים על סטטוס.',
    icon: '⚙️',
  },
  {
    num: '04',
    title: 'אספקה ועמידה בלו"ז',
    desc: 'מספקים לחנות שלכם בלוחות זמנים מוסכמים. מלווים עד לרצפת המכירה.',
    icon: '🚚',
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#faf9f7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-[10px] font-black tracking-[0.55em] uppercase mb-4" style={{ color: '#c79a4b' }}>
            איך עובד התהליך
          </div>
          <div className="flex items-end justify-between">
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#0a0a0a', letterSpacing: '-0.04em', maxWidth: '14ch' }}>
              מפנייה ראשונה לחנות מוכנה
            </h2>
            <p className="hidden lg:block text-sm" style={{ color: '#999', maxWidth: '28ch', textAlign: 'right' }}>
              תהליך פשוט וברור,<br />ללא הפתעות.
            </p>
          </div>
        </motion.div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">

          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-8 right-[calc(12.5%-1px)] left-[calc(12.5%-1px)] h-px" style={{ background: 'linear-gradient(to left, transparent, #e8e4dd, #e8e4dd, transparent)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex lg:flex-col items-start lg:items-start gap-5 lg:gap-0"
              >
                {/* Number circle */}
                <div className="relative shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-black text-sm lg:mb-6"
                    style={{ background: i === 0 ? '#c79a4b' : '#0a0a0a', color: i === 0 ? '#000' : '#fff', border: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.1)' }}
                  >
                    {s.num}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="text-2xl mb-3 hidden lg:block">{s.icon}</div>
                  <h3 className="font-black text-lg mb-2" style={{ color: '#0a0a0a', letterSpacing: '-0.02em' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
