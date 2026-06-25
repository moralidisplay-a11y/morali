'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const CATEGORIES = [
  { label: 'מידוף', href: '/categories/shelving' },
  { label: 'מערכות תלייה', href: '/categories/hanging' },
  { label: 'קירות מחורצים', href: '/categories/slatwall' },
  { label: 'בובות ראווה', href: '/categories/mannequins' },
  { label: 'דלפקים', href: '/categories/counters' },
  { label: 'סטנדים', href: '/categories/stands' },
  { label: 'קולבים ואביזרים', href: '/categories/hangers' },
]

const POPULAR = ['מוט כפול', 'מדף קיר', 'בובת ראווה', 'קיר מחורץ', 'דלפק קופה']

export default function HeroSection() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      window.location.href = `/products?q=${encodeURIComponent(query.trim())}`
    }
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: '640px', background: '#0a0a0a' }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2000&q=90"
        alt="חנות אופנה"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.55 }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.85) 100%)' }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <div
          className="mb-5 text-[10px] font-bold tracking-[0.45em] uppercase"
          style={{ color: 'rgba(199,154,75,0.85)', animation: 'hFadeUp 0.9s 0.1s both' }}
        >
          מתקני תצוגה מקצועיים · מורלי
        </div>

        {/* Headline */}
        <h1
          className="text-white font-black leading-[0.95]"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 7.5rem)',
            letterSpacing: '-0.035em',
            maxWidth: '16ch',
            animation: 'hFadeUp 1s 0.2s both',
          }}
        >
          מתקני תצוגה
          <br />
          <span style={{ color: 'var(--accent)' }}>לכל סוג עסק</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 mb-10"
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            maxWidth: '50ch',
            lineHeight: 1.7,
            animation: 'hFadeUp 1s 0.35s both',
          }}
        >
          מעל 1,000 פתרונות תצוגה לחנויות אופנה, סופרמרקטים,
          <br className="hidden sm:block" />
          בתי מרקחת, חנויות מתנות ועוד — מאז 1993.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-xl mb-6"
          style={{ animation: 'hFadeUp 1s 0.5s both' }}
        >
          <div
            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.96)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
            }}
          >
            <Search className="w-5 h-5 shrink-0" style={{ color: '#999' }} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="חפש מוצר, קטגוריה..."
              className="flex-1 bg-transparent outline-none text-right text-sm font-medium"
              style={{ color: '#111', direction: 'rtl' }}
            />
            <button
              type="submit"
              className="shrink-0 px-5 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--primary)' }}
            >
              חיפוש
            </button>
          </div>

          {/* Popular searches */}
          <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
            <span className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>פופולרי:</span>
            {POPULAR.map(t => (
              <button
                key={t}
                type="button"
                onClick={() => { setQuery(t); inputRef.current?.focus() }}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all hover:bg-white/20"
                style={{ color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.18)' }}
              >
                {t}
              </button>
            ))}
          </div>
        </form>

        {/* CTAs */}
        <div
          className="flex items-center gap-3 mb-10"
          style={{ animation: 'hFadeUp 1s 0.65s both' }}
        >
          <Link
            href="/categories"
            className="btn-gold"
            style={{ fontSize: '0.875rem', padding: '13px 32px', borderRadius: '999px' }}
          >
            עיון בקטלוג
          </Link>
          <a
            href="https://wa.me/972501234567"
            className="font-semibold text-sm transition-all hover:text-white"
            style={{
              color: 'rgba(255,255,255,0.6)',
              padding: '13px 28px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '999px',
            }}
          >
            קבלו הצעת מחיר
          </a>
        </div>

        {/* Category shortcuts */}
        <div
          className="flex items-center gap-2 flex-wrap justify-center"
          style={{ animation: 'hFadeUp 1s 0.8s both' }}
        >
          {CATEGORIES.map(c => (
            <Link
              key={c.href}
              href={c.href}
              className="text-[11px] font-semibold px-3.5 py-1.5 rounded-full transition-all hover:bg-white/15 hover:border-white/40"
              style={{
                color: 'rgba(255,255,255,0.65)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom stat strip */}
      <div
        className="absolute bottom-0 inset-x-0 z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-center gap-10 md:gap-20">
          {[
            { n: '30+', l: 'שנות ניסיון' },
            { n: '1,200+', l: 'חנויות לקוחות' },
            { n: '1,000+', l: 'פריטים בקטלוג' },
          ].map(s => (
            <div key={s.n} className="text-center">
              <div className="font-black text-white text-lg" style={{ letterSpacing: '-0.03em' }}>{s.n}</div>
              <div className="text-[10px] font-semibold mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
