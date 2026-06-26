'use client'

import { motion } from 'framer-motion'

const TRUST_POINTS = [
  { icon: '🏆', title: '30 שנות ניסיון', desc: 'בתעשיית ציוד חנויות מאז 1993' },
  { icon: '🔧', title: 'שירות מלא', desc: 'ייעוץ, אספקה ותמיכה לאחר המכירה' },
  { icon: '📦', title: 'מלאי גדול', desc: 'מוצרים זמינים לאספקה מהירה' },
  { icon: '🤝', title: 'מחירים הוגנים', desc: 'מחירי סיטונאי לעסקים ולחנויות' },
  { icon: '⚡', title: 'תגובה מהירה', desc: 'מענה תוך 24 שעות לכל פנייה' },
  { icon: '🌍', title: 'פריסה ארצית', desc: 'אספקה לכל אזורי הארץ' },
]

const TESTIMONIALS = [
  {
    name: 'מיכל ל.',
    business: 'בעלת רשת ביגוד',
    text: 'ציידנו 3 חנויות עם מורלי. השירות מעולה, המחירים טובים והמוצרים איכותיים. ממליצה בחום.',
  },
  {
    name: 'אבי כ.',
    business: 'בעל סופרמרקט',
    text: 'מכירים אותם שנים. תמיד יש פתרון, תמיד בזמן. זה מה שחשוב בעסק.',
  },
  {
    name: 'רחל מ.',
    business: 'מנהלת רכש, רשת אופנה',
    text: 'הזמנות גדולות בלי בעיות. הצוות מקצועי ומהיר. העסק שלנו גדל ומורלי גדלו איתנו.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-[10px] font-black tracking-[0.55em] uppercase mb-4" style={{ color: '#c79a4b' }}>
            למה מורלי?
          </div>
          <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#0a0a0a', letterSpacing: '-0.04em' }}>
            אמון שנבנה במשך 30 שנה
          </h2>
        </motion.div>

        {/* Trust points */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {TRUST_POINTS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: '#faf9f7', border: '1px solid #f0ede8' }}
            >
              <span className="text-2xl shrink-0">{t.icon}</span>
              <div>
                <div className="font-bold text-base mb-1" style={{ color: '#0a0a0a' }}>{t.title}</div>
                <div className="text-sm" style={{ color: '#888' }}>{t.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="text-[10px] font-black tracking-[0.55em] uppercase mb-4" style={{ color: '#c79a4b' }}>
            לקוחות מרוצים
          </div>
          <h3 className="font-black text-2xl" style={{ color: '#0a0a0a', letterSpacing: '-0.02em' }}>
            מה אומרים עלינו
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 rounded-2xl"
              style={{ background: '#0a0a0a' }}
            >
              <div className="text-lg mb-4" style={{ color: '#c79a4b' }}>❝</div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {t.text}
              </p>
              <div>
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.business}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
