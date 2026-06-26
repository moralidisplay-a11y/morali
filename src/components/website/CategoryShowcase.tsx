'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    slug: 'shelving',
    name: 'מידוף לחנויות',
    nameEn: 'Store Shelving',
    desc: 'מדפי קיר, מדפי עמידה ומערכות מודולריות לסופרמרקטים, פארמה, בתי מרקחת ועסקים קמעונאיים.',
    img: '/morali/IMG_4132.jpg',
    count: '32+',
    features: ['מדפי קיר', 'מדפי עמידה', 'מערכות מודולריות', 'מדפי תצוגה'],
    color: '#1a1a2e',
  },
  {
    slug: 'hanging',
    name: 'מערכות תלייה',
    nameEn: 'Hanging Systems',
    desc: 'מוטות, זרועות ומתלים מקצועיים לחנויות ביגוד ואופנה — פתרונות גמישים לכל מרחב.',
    img: '/morali/IMG_4104.jpg',
    count: '24+',
    features: ['מוטות תלייה', 'זרועות פרזול', 'מתלים ניידים', 'מערכות מסלול'],
    color: '#1a2e1a',
  },
  {
    slug: 'mannequins',
    name: 'בובות ראווה',
    nameEn: 'Mannequins',
    desc: 'אוסף רחב של בובות מלאות, חצי גוף וידיים — לכל סגנון חנות ובכל מחיר.',
    img: '/morali/IMG_4096.jpg',
    count: '18+',
    features: ['בובות מלאות', 'חצי גוף', 'ידיים ורגליים', 'בובות ילדים'],
    color: '#2e1a1a',
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-4 lg:py-6" style={{ background: '#faf9f7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-[10px] font-black tracking-[0.55em] uppercase mb-4" style={{ color: '#c79a4b' }}>
            קטגוריות ראשיות
          </div>
          <div className="flex items-end justify-between">
            <h2 className="font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#0a0a0a', letterSpacing: '-0.04em', maxWidth: '12ch' }}>
              כל מה שהחנות שלכם צריכה
            </h2>
            <Link href="/categories" className="hidden lg:block text-sm font-bold pb-1" style={{ color: '#0a0a0a', borderBottom: '1px solid #0a0a0a' }}>
              כל הקטגוריות →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Full-bleed category sections */}
      <div className="space-y-3 px-4 lg:px-8">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/categories/${cat.slug}`}
              className="group relative flex overflow-hidden"
              style={{
                borderRadius: '24px',
                height: 'clamp(320px, 50vw, 520px)',
                background: cat.color,
              }}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ opacity: i % 2 === 0 ? 0.5 : 0.45, objectPosition: 'center' }}
                />
              </div>

              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)'
                    : 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
                }}
              />

              {/* Content */}
              <div
                className={`relative z-10 flex flex-col justify-end p-10 lg:p-16 ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
                style={{ maxWidth: '520px', width: '100%' }}
              >
                <div className="text-[9px] font-black tracking-[0.45em] uppercase mb-3" style={{ color: 'rgba(199,154,75,0.8)' }}>
                  {cat.count} מוצרים · {cat.nameEn}
                </div>
                <h3 className="font-black text-white leading-none mb-4 transition-colors group-hover:text-amber-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', letterSpacing: '-0.035em' }}>
                  {cat.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '36ch' }}>
                  {cat.desc}
                </p>
                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.features.map(f => (
                    <span
                      key={f}
                      className="text-[10px] font-semibold px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3"
                  style={{ color: '#c79a4b' }}
                >
                  צפו בקטגוריה
                  <span className="transition-transform group-hover:translate-x-1">←</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="lg:hidden text-center mt-8">
        <Link href="/categories" className="text-sm font-bold pb-1" style={{ color: '#0a0a0a', borderBottom: '1px solid #0a0a0a' }}>
          כל הקטגוריות →
        </Link>
      </div>
    </section>
  )
}
