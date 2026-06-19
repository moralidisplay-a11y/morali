'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const slides = [
  { img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=85', label: 'רשת ביגוד — תל אביב' },
  { img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85', label: 'בוטיק פרימיום — הרצליה' },
  { img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1800&q=85', label: 'חנות קוסמטיקה — תל אביב' },
]

export default function HeroSection() {
  const [active, setActive] = useState(0)
  const [textKey, setTextKey] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % slides.length)
      setTextKey((k) => k + 1)
    }, 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden">

      {/* Slides with Ken Burns */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: i === active ? 1 : 0,
          }}
        >
          <img
            src={s.img}
            alt={s.label}
            className="w-full h-full object-cover"
            style={{
              animation: i === active ? 'heroBurns 12s ease-in-out forwards' : 'none',
              transformOrigin: 'center center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, rgba(4,4,4,0.82) 0%, rgba(4,4,4,0.45) 45%, rgba(4,4,4,0.10) 100%)',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full">
          <div style={{ maxWidth: '620px' }}>

            {/* Label */}
            <div
              key={`label-${textKey}`}
              className="inline-flex items-center gap-3 mb-9"
              style={{
                color: 'var(--accent)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
                animationDelay: '0ms',
              }}
            >
              <span style={{ width: '32px', height: '1px', background: 'var(--accent)', opacity: 0.6, display: 'block' }} />
              Retail Environment Specialists
            </div>

            {/* H1 — staggered lines */}
            <h1
              key={`h1-${textKey}`}
              className="text-white font-black leading-[1.04]"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.8rem)', letterSpacing: '-0.02em' }}
            >
              <span
                className="block"
                style={{ animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '80ms' }}
              >
                חנויות שנראות
              </span>
              <span
                className="block"
                style={{ color: 'var(--accent)', animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '160ms' }}
              >
                טוב יותר.
              </span>
              <span
                className="block"
                style={{ animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '240ms' }}
              >
                מוכרות יותר.
              </span>
            </h1>

            {/* Subtext */}
            <p
              key={`p-${textKey}`}
              className="leading-relaxed mt-8 mb-11"
              style={{
                color: 'rgba(255,255,255,0.58)',
                fontSize: '1.1rem',
                maxWidth: '420px',
                animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
                animationDelay: '340ms',
              }}
            >
              מתכננים, מייצרים ומתקינים סביבות מכירה
              לרשתות קמעונאות ועסקים בכל הארץ.
            </p>

            {/* CTAs */}
            <div
              key={`cta-${textKey}`}
              className="flex flex-wrap items-center gap-6"
              style={{ animation: 'heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '460ms' }}
            >
              <a
                href="https://wa.me/972500000000"
                className="btn-gold"
                style={{ fontSize: '0.95rem', padding: '14px 34px' }}
              >
                קבלת ייעוץ
                <ArrowLeft className="w-4 h-4" />
              </a>
              <Link
                href="#projects"
                className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-50"
                style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}
              >
                פרויקטים
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicator — bottom left */}
      <div
        className="absolute bottom-8 right-10 z-10 flex items-center gap-2"
        style={{ direction: 'ltr' }}
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => { setActive(i); setTextKey((k) => k + 1) }}
            className="relative overflow-hidden transition-all duration-500"
            style={{
              width: i === active ? '40px' : '10px',
              height: '2px',
              background: 'rgba(255,255,255,0.2)',
            }}
          >
            {i === active && (
              <span
                className="absolute inset-y-0 left-0 w-full"
                style={{ background: 'var(--accent)', animation: 'slideProgress 7s linear forwards' }}
              />
            )}
          </button>
        ))}
        <span
          className="text-[10px] font-semibold tracking-wider mr-2 opacity-35 text-white"
        >
          {slides[active].label}
        </span>
      </div>
    </section>
  )
}
