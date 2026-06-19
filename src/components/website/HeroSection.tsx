'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=85',
    label: 'רשת ביגוד — תל אביב',
  },
  {
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85',
    label: 'בוטיק פרימיום — הרצליה',
  },
  {
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1800&q=85',
    label: 'חנות קוסמטיקה — תל אביב',
  },
]

export default function HeroSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt={s.label}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to left, rgba(5,5,5,0.76) 0%, rgba(5,5,5,0.38) 50%, rgba(5,5,5,0.12) 100%)' }}
          />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
              תכנון והקמת סביבות מכירה
            </div>

            <h1
              className="font-black leading-[1.08] mb-6 text-white"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)' }}
            >
              חנויות שנראות
              <br />
              <span style={{ color: 'var(--accent)' }}>טוב יותר.</span>
              <br />
              מוכרות יותר.
            </h1>

            <p
              className="text-lg lg:text-xl leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.70)', maxWidth: '460px' }}
            >
              אנחנו לא מוכרים מדפים — אנחנו בונים סביבות מכירה שמניעות תוצאות.
              תכנון, ייצור, והתקנה מלאה לכל סוגי הקמעונאות.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://wa.me/972500000000"
                className="btn-gold text-base px-8 py-4"
              >
                קבלת ייעוץ
                <ArrowLeft className="w-4 h-4" />
              </a>
              <Link
                href="#projects"
                className="font-semibold text-base flex items-center gap-2 transition-opacity hover:opacity-70"
                style={{ color: 'white' }}
              >
                צפייה בפרויקטים
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 right-10 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="transition-all duration-300"
            style={{
              width: i === active ? '32px' : '8px',
              height: '2px',
              background: i === active ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
