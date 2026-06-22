'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2000&q=90',
    city: 'תל אביב',
    type: 'Fashion Retail',
  },
  {
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=2000&q=90',
    city: 'הרצליה',
    type: 'Luxury Boutique',
  },
  {
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=2000&q=90',
    city: 'תל אביב',
    type: 'Cosmetics Retail',
  },
  {
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=2000&q=90',
    city: 'ראשון לציון',
    type: 'Footwear Retail',
  },
]

export default function HeroSection() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (i: number) => {
    setPrev(active)
    setActive(i)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % slides.length)
    }, 6000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active])

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: '640px', background: '#080808' }}
    >

      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.8s cubic-bezier(0.4,0,0.2,1)',
            zIndex: i === active ? 1 : 0,
          }}
        >
          <img
            src={s.img}
            alt={s.type}
            className="w-full h-full object-cover"
            style={{
              animation: i === active ? 'heroBurns 14s ease-in-out forwards' : 'none',
              transformOrigin: 'center 40%',
            }}
          />
          {/* Layered overlay — darker bottom, lighter top */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.80) 100%)',
            }}
          />
        </div>
      ))}

      {/* ── CENTER CONTENT ── */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Eyebrow */}
        <div
          className="mb-6 text-[10px] font-bold tracking-[0.4em] uppercase"
          style={{ color: 'rgba(199,154,75,0.8)', letterSpacing: '0.45em', animation: 'heroFadeUp 1s 0.1s both' }}
        >
          Retail Environments by MORALI
        </div>

        {/* Headline — the whole page */}
        <h1
          className="text-white font-black leading-[0.96]"
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            letterSpacing: '-0.04em',
            maxWidth: '14ch',
            animation: 'heroFadeUp 1.1s 0.2s both',
          }}
        >
          יוצרים חנויות
          <br />
          <span style={{ color: 'var(--accent)' }}>שמוכרות יותר.</span>
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 mb-12 leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
            maxWidth: '42ch',
            animation: 'heroFadeUp 1s 0.4s both',
          }}
        >
          פתרונות תצוגה, מידוף ועיצוב מסחרי לעסקים
          שרוצים שהחנות שלהם תראה כמו רשת גדולה.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: 'heroFadeUp 1s 0.6s both' }}
        >
          <a
            href="https://wa.me/972501234567"
            className="btn-gold"
            style={{ fontSize: '0.9rem', padding: '14px 36px', borderRadius: '999px' }}
          >
            קבלו הצעת מחיר
          </a>
          <Link
            href="/projects"
            className="font-semibold text-sm transition-all hover:text-white"
            style={{
              color: 'rgba(255,255,255,0.55)',
              padding: '14px 28px',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '999px',
            }}
          >
            פרויקטים ←
          </Link>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div
          className="max-w-7xl mx-auto px-8 py-6 flex items-end justify-between"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Active project info */}
          <div>
            <div className="text-[9px] font-bold tracking-[0.35em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              ACTIVE PROJECT
            </div>
            <div className="font-bold text-white text-sm" style={{ letterSpacing: '-0.01em' }}>
              {slides[active].city}
            </div>
            <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {slides[active].type}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2.5" style={{ direction: 'ltr' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative overflow-hidden rounded-full transition-all duration-500"
                style={{
                  width: i === active ? 36 : 8,
                  height: 2,
                  background: i === active ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.15)',
                }}
                aria-label={`Slide ${i + 1}`}
              >
                {i === active && (
                  <span
                    className="absolute inset-y-0 right-0 w-full"
                    style={{
                      background: 'var(--accent)',
                      animation: 'slideProgress 6s linear forwards',
                    }}
                  />
                )}
              </button>
            ))}
            <span className="text-[9px] font-bold mr-1" style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
              {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ animation: 'heroFadeUp 1s 1.2s both' }}
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))', animation: 'scrollPulse 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 0.7; transform: scaleY(1); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroBurns {
          0%   { transform: scale(1.0) translate(0%, 0%); }
          100% { transform: scale(1.08) translate(-1%, -0.5%); }
        }
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
