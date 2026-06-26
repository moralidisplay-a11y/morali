'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const CATS = [
  { label: 'מידוף', href: '/categories/shelving', emoji: '🗄️' },
  { label: 'רלסים', href: '/categories/hanging', emoji: '👗' },
  { label: 'קירות מחורצים', href: '/categories/slatwall', emoji: '🧱' },
  { label: 'סטנדים', href: '/categories/stands', emoji: '🏪' },
  { label: 'בובות ראווה', href: '/categories/mannequins', emoji: '👤' },
  { label: 'קולבים', href: '/categories/hangers', emoji: '🪝' },
  { label: 'דלפקים', href: '/categories/counters', emoji: '🏬' },
]

const POPULAR = ['מוט כפול', 'מדף קיר', 'בובת ראווה', 'קיר מחורץ', 'דלפק קופה']

export default function HeroSection() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) window.location.href = `/products?q=${encodeURIComponent(query.trim())}`
  }

  return (
    <section className="relative overflow-hidden" style={{ height: '100svh', minHeight: '700px' }}>

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2400&q=95"
        alt="חנות אופנה מקצועית"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.62) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 48%)' }} />
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(199,154,75,0.5), transparent)' }} />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3" style={{ animation: 'hFadeUp 0.8s 0.1s both' }}>
          <div className="h-px w-8 opacity-60" style={{ background: 'var(--accent)' }} />
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase" style={{ color: 'rgba(199,154,75,0.9)' }}>
            מורלי — מתקני תצוגה מקצועיים
          </span>
          <div className="h-px w-8 opacity-60" style={{ background: 'var(--accent)' }} />
        </div>

        {/* Headline */}
        <h1
          className="text-white font-black"
          style={{
            fontSize: 'clamp(3rem, 9vw, 9rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            maxWidth: '14ch',
            animation: 'hFadeUp 1s 0.2s both',
          }}
        >
          חנות שנראית
          <br />
          <span style={{ color: 'var(--accent)', textShadow: '0 0 80px rgba(199,154,75,0.35)' }}>פי עשרה</span>
          <br />
          יותר טובה.
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 mb-10"
          style={{
            color: 'rgba(255,255,255,0.48)',
            fontSize: 'clamp(0.88rem, 1.4vw, 1.05rem)',
            maxWidth: '44ch',
            lineHeight: 1.85,
            animation: 'hFadeUp 1s 0.35s both',
          }}
        >
          מעל 1,000 פתרונות תצוגה לחנויות אופנה, סופרמרקטים,
          <br className="hidden sm:block" />
          בתי מרקחת וחנויות מתנות — מאז 1993.
        </p>

        {/* Search */}
        <form onSubmit={handleSearch} className="w-full max-w-lg mb-8" style={{ animation: 'hFadeUp 1s 0.5s both' }}>
          <div
            className="flex items-center gap-2 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.97)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
              padding: '5px 5px 5px 16px',
            }}
          >
            <Search className="w-4 h-4 shrink-0" style={{ color: '#aaa' }} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="חפש מוצר או קטגוריה..."
              className="flex-1 bg-transparent outline-none text-right text-sm font-medium"
              style={{ color: '#111', direction: 'rtl' }}
            />
            <button type="submit" className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: 'var(--primary)' }}>
              חיפוש
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
            <span className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.28)' }}>פופולרי:</span>
            {POPULAR.map(t => (
              <button
                key={t}
                type="button"
                onClick={() => { setQuery(t); inputRef.current?.focus() }}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all hover:bg-white/15"
                style={{ color: 'rgba(255,255,255,0.48)', border: '1px solid rgba(255,255,255,0.13)' }}
              >
                {t}
              </button>
            ))}
          </div>
        </form>

        {/* CTAs */}
        <div className="flex items-center gap-3 mb-10" style={{ animation: 'hFadeUp 1s 0.62s both' }}>
          <Link href="/categories" className="btn-gold" style={{ fontSize: '0.875rem', padding: '13px 32px', borderRadius: '999px' }}>
            עיון בקטלוג
          </Link>
          <a
            href="https://wa.me/972505559491"
            className="font-semibold text-sm transition-all hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.62)', padding: '13px 26px', border: '1px solid rgba(255,255,255,0.16)', borderRadius: '999px' }}
          >
            קבלו הצעת מחיר
          </a>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2" style={{ animation: 'hFadeUp 1s 0.75s both' }}>
          {CATS.map(c => (
            <Link
              key={c.href}
              href={c.href}
              className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full transition-all hover:bg-white/15"
              style={{ color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.04)' }}
            >
              <span className="text-xs">{c.emoji}</span>
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-0 inset-x-0 z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-center gap-8 md:gap-16">
          {[
            { n: '30+', l: 'שנות ניסיון' },
            { n: '1,200+', l: 'חנויות לקוחות' },
            { n: '1,000+', l: 'פריטים בקטלוג' },
            { n: '24h', l: 'זמן תגובה' },
          ].map(s => (
            <div key={s.n} className="text-center">
              <div className="font-black text-white leading-none" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.5rem)', letterSpacing: '-0.03em' }}>{s.n}</div>
              <div className="text-[9px] font-semibold mt-0.5 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.28)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
