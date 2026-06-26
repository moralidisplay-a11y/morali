'use client'

import { motion } from 'framer-motion'

const BUSINESSES = [
  { icon: '👗', name: 'חנויות ביגוד', desc: 'מתלים, מוטות, בובות ראווה ומדפים' },
  { icon: '👟', name: 'חנויות נעלים', desc: 'מדפי נעליים ומחזיקים ייחודיים' },
  { icon: '🛒', name: 'סופרמרקטים', desc: 'מדפים מסחריים, עגלות ועמדות' },
  { icon: '🎁', name: 'חנויות מתנות', desc: 'דלפקים ועמדות תצוגה אלגנטיות' },
  { icon: '💊', name: 'בתי מרקחת', desc: 'ארוניות, מדפים ופתרונות פארמה' },
  { icon: '🏠', name: 'חנויות לבית', desc: 'וויים, מדפי קיר וסטנדים' },
  { icon: '✨', name: 'מותגים חדשים', desc: 'ציוד מלא לפתיחת חנות בפעם הראשונה' },
  { icon: '🏢', name: 'רשתות גדולות', desc: 'פתרונות אחידים לפריסה ארצית' },
]

export default function WhoIsItFor() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-[10px] font-black tracking-[0.55em] uppercase mb-4" style={{ color: 'rgba(199,154,75,0.7)' }}>
            למי זה מתאים?
          </div>
          <h2 className="font-black text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '-0.04em', maxWidth: '16ch' }}>
            אם יש לכם חנות — יש לנו פתרון
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {BUSINESSES.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group p-6 rounded-2xl cursor-default transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(199,154,75,0.1)' }}
              >
                {b.icon}
              </div>
              <div className="font-bold text-white text-base mb-1.5">{b.name}</div>
              <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>{b.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            לא בטוחים מה אתם צריכים? נשמח לייעץ בחינם.
          </p>
          <a
            href="https://wa.me/972505559491?text=שלום, אני מעוניין לקבל ייעוץ"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all hover:opacity-90 active:scale-95"
            style={{ background: '#c79a4b', color: '#000' }}
          >
            קבלו ייעוץ חינם
          </a>
        </motion.div>
      </div>
    </section>
  )
}
