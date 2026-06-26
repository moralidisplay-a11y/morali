'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 30, suffix: '+', label: 'שנות ניסיון', sub: 'בתעשייה מאז 1993' },
  { value: 1200, suffix: '+', label: 'חנויות ציידנו', sub: 'ברחבי הארץ' },
  { value: 1000, suffix: '+', label: 'פתרונות בקטלוג', sub: 'מוצרים ופריטים' },
  { value: 24, suffix: 'ש׳', label: 'זמן תגובה', sub: 'לכל פנייה' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = Date.now()
    const frame = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function BrandNumbers() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-[10px] font-black tracking-[0.55em] uppercase mb-4" style={{ color: 'rgba(199,154,75,0.7)' }}>
            מספרים שמדברים
          </div>
          <h2 className="font-black text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.04em' }}>
            מורלי בנתונים
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', overflow: 'hidden' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-12 px-6 text-center"
              style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)' }}
            >
              <div
                className="font-black leading-none mb-3"
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: '#c79a4b', letterSpacing: '-0.04em' }}
              >
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-bold text-white text-base lg:text-lg mb-1">{s.label}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
